// ============================================================
// The deterministic core. Pure functions only — no React, no
// side effects — so the same logic can later power an API,
// CRM hook, or rep copilot without a rewrite. Every output
// carries a human-readable rule trace: the rep must always be
// able to see WHY the machine said what it said.
// ============================================================

import type { LaneId, Tier } from "@/data/types";

// ---------- GATE-5 · qualification ----------

export type GateState = "pass" | "flag" | "fail";

export type CreditBand = "720+" | "680-719" | "620-679" | "550-619" | "<550";

export interface GateInput {
  monthlyRevenue: number; // USD
  tibMonths: number; // time in business, months
  credit: CreditBand;
  positions: number; // existing open advances/loans
  tier: Tier; // industry risk tier
}

export interface GateResult {
  id: string; // G1..G5
  label: string;
  state: GateState;
  detail: string; // the rule that fired, in words
}

export interface GateVerdict {
  gates: GateResult[];
  verdict: "fund" | "flag" | "decline";
  verdictLine: string;
}

export function runGates(input: GateInput): GateVerdict {
  const gates: GateResult[] = [];

  // G1 revenue
  const rev = input.monthlyRevenue;
  gates.push({
    id: "G1",
    label: "Monthly revenue",
    state: rev >= 40000 ? "pass" : rev >= 15000 ? "flag" : "fail",
    detail:
      rev >= 40000
        ? `$${fmt(rev)}/mo ≥ $40k — full lane menu open`
        : rev >= 15000
          ? `$${fmt(rev)}/mo in $15k–40k band — smaller offers, MCA/factoring lanes`
          : `$${fmt(rev)}/mo < $15k floor — not fundable today`,
  });

  // G2 time in business
  const tib = input.tibMonths;
  gates.push({
    id: "G2",
    label: "Time in business",
    state: tib >= 24 ? "pass" : tib >= 6 ? "flag" : "fail",
    detail:
      tib >= 24
        ? `${tib} months ≥ 24 — seasoned file`
        : tib >= 6
          ? `${tib} months in 6–24 band — first-position only, shorter terms`
          : `${tib} months < 6 floor — park and nurture`,
  });

  // G3 credit band
  const creditMap: Record<CreditBand, { state: GateState; detail: string }> = {
    "720+": { state: "pass", detail: "720+ — bank-grade; LOC/SBA/term in play" },
    "680-719": { state: "pass", detail: "680–719 — term and LOC in play" },
    "620-679": { state: "flag", detail: "620–679 — revenue-based lanes lead" },
    "550-619": { state: "flag", detail: "550–619 — MCA/factoring only, price for risk" },
    "<550": { state: "fail", detail: "<550 — collateral lanes (factoring/equipment) or decline" },
  };
  gates.push({ id: "G3", label: "Credit band", ...creditMap[input.credit] });

  // G4 positions
  const pos = input.positions;
  gates.push({
    id: "G4",
    label: "Open positions",
    state: pos === 0 ? "pass" : pos <= 2 ? "flag" : "fail",
    detail:
      pos === 0
        ? "0 positions — clean file, best pricing"
        : pos <= 2
          ? `${pos} position${pos > 1 ? "s" : ""} — consolidation angle; check total burden before stacking`
          : `${pos} positions — over-leveraged; consolidation-or-walk only`,
  });

  // G5 industry tier
  const tierMap: Record<Tier, { state: GateState; detail: string }> = {
    A: { state: "pass", detail: "Tier A industry — every lender wants this file" },
    B: { state: "pass", detail: "Tier B industry — broadly fundable" },
    C: { state: "flag", detail: "Tier C industry — fewer lenders, expect pricing bump" },
    D: { state: "flag", detail: "Tier D industry — restricted list; match to specialty lenders" },
  };
  gates.push({ id: "G5", label: "Industry tier", ...tierMap[input.tier] });

  const fails = gates.filter((g) => g.state === "fail").length;
  const flags = gates.filter((g) => g.state === "flag").length;

  const verdict: GateVerdict["verdict"] = fails > 0 ? "decline" : flags >= 3 ? "flag" : "fund";

  const verdictLine =
    verdict === "decline"
      ? `${fails} hard fail${fails > 1 ? "s" : ""} — do not pitch a product. Route to D6 (nurture) with the fix path: tell them exactly which gate to repair and when to call back.`
      : verdict === "flag"
        ? `${flags} flags, no hard fails — fundable but thin. Route to the top lane only; do not oversell size.`
        : `Gates clear (${flags} flag${flags === 1 ? "" : "s"}) — full pitch. Move to Solve with the top-ranked lane.`;

  return { gates, verdict, verdictLine };
}

// ---------- LANE router ----------

export interface LaneScore {
  lane: LaneId;
  score: number;
  reasons: string[];
}

export interface RouteResult {
  ranked: LaneScore[];
  trace: string[];
}

export interface RouteInput extends GateInput {
  useOfFunds:
    | "working-capital"
    | "equipment"
    | "inventory"
    | "payroll"
    | "expansion"
    | "receivables-bridge"
    | "consolidation";
  hasInvoices: boolean; // B2B receivables on terms?
  urgencyDays: number; // how fast they need money
}

export function routeLanes(input: RouteInput): RouteResult {
  const trace: string[] = [];
  const scores: Record<LaneId, LaneScore> = {
    mca: { lane: "mca", score: 0, reasons: [] },
    term: { lane: "term", score: 0, reasons: [] },
    loc: { lane: "loc", score: 0, reasons: [] },
    equipment: { lane: "equipment", score: 0, reasons: [] },
    factoring: { lane: "factoring", score: 0, reasons: [] },
    sba: { lane: "sba", score: 0, reasons: [] },
  };
  const add = (lane: LaneId, pts: number, why: string) => {
    scores[lane].score += pts;
    scores[lane].reasons.push(why);
    trace.push(`${pts > 0 ? "+" : ""}${pts} ${lane.toUpperCase()} · ${why}`);
  };

  // credit rules
  if (input.credit === "720+" || input.credit === "680-719") {
    add("loc", 3, `credit ${input.credit} opens bank-adjacent lanes`);
    add("term", 3, `credit ${input.credit} qualifies for term pricing`);
    add("sba", 2, `credit ${input.credit} clears SBA floor`);
  } else if (input.credit === "620-679") {
    add("mca", 3, "credit 620–679 — revenue-based approval logic fits");
    add("term", 1, "credit 620–679 — some term lenders at higher rate");
  } else {
    add("mca", 3, `credit ${input.credit} — approval rides on deposits, not FICO`);
    add("factoring", 2, `credit ${input.credit} — factor underwrites the DEBTOR's credit, not theirs`);
  }

  // time in business
  if (input.tibMonths < 24) {
    add("sba", -4, `${input.tibMonths}mo TIB — SBA wants 2+ years`);
    add("loc", -2, `${input.tibMonths}mo TIB — most LOC lenders want seasoning`);
    add("mca", 2, `${input.tibMonths}mo TIB — MCA funds young files`);
  }

  // urgency
  if (input.urgencyDays <= 3) {
    add("mca", 3, `needs funds in ${input.urgencyDays}d — MCA funds same-week`);
    add("sba", -5, `needs funds in ${input.urgencyDays}d — SBA runs 30–90d`);
    add("loc", -1, "urgent — LOC setup takes 1–2 weeks");
  } else if (input.urgencyDays >= 30) {
    add("sba", 3, `${input.urgencyDays}d runway — SBA's cheap money is reachable`);
    add("term", 1, "no urgency — shop term pricing");
  }

  // use of funds
  switch (input.useOfFunds) {
    case "equipment":
      add("equipment", 5, "use = equipment — the asset collateralizes its own financing");
      break;
    case "receivables-bridge":
      if (input.hasInvoices) add("factoring", 5, "bridging slow AR with real invoices — factoring is purpose-built");
      else add("loc", 2, "receivables bridge without invoices — LOC covers the gap");
      break;
    case "inventory":
      add("loc", 3, "use = inventory — revolving need, LOC matches");
      add("mca", 1, "inventory turn is fast — short-cycle MCA acceptable");
      break;
    case "expansion":
      add("term", 3, "use = expansion — multi-year payoff wants multi-year term");
      add("sba", 2, "expansion — SBA loves growth stories");
      break;
    case "consolidation":
      add("term", 3, "use = consolidation — refinance stack into one payment");
      add("loc", 1, "consolidation — LOC if credit supports");
      break;
    case "payroll":
      add("mca", 2, "use = payroll bridge — speed beats price");
      break;
    case "working-capital":
      add("mca", 1, "general working capital — MCA default for speed");
      add("loc", 1, "general working capital — LOC default for quality files");
      break;
  }

  // invoices unlock factoring generally
  if (input.hasInvoices && input.useOfFunds !== "receivables-bridge") {
    add("factoring", 1, "carries B2B invoices — factoring stays on the menu");
  }

  // positions
  if (input.positions >= 1) {
    add("term", 1, `${input.positions} open position(s) — consolidation term is the honest pitch`);
    add("mca", -1, `${input.positions} open position(s) — stacking raises burden; check PBR first`);
  }

  const ranked = Object.values(scores)
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return { ranked, trace };
}

// ---------- PBR · payment burden ratio ----------

export interface PbrInput {
  monthlyRevenue: number;
  offer: number;
  factor: number; // e.g. 1.32
  termDays: number; // business days
}

export interface PbrResult {
  payback: number;
  dailyPayment: number;
  dailyDeposits: number;
  pbr: number; // 0..1
  tone: "pass" | "flag" | "fail";
  verdictLine: string;
}

// ceilings by industry tier — how much daily burden a business
// in that tier historically sustains without defaulting
export const PBR_CEILINGS: Record<Tier, { green: number; amber: number }> = {
  A: { green: 0.12, amber: 0.18 },
  B: { green: 0.1, amber: 0.15 },
  C: { green: 0.08, amber: 0.12 },
  D: { green: 0.07, amber: 0.1 },
};

export function computePbr(input: PbrInput, tier: Tier): PbrResult {
  const payback = input.offer * input.factor;
  const dailyPayment = payback / input.termDays;
  const dailyDeposits = input.monthlyRevenue / 21; // avg business days/mo
  const pbr = dailyDeposits > 0 ? dailyPayment / dailyDeposits : 1;
  const ceil = PBR_CEILINGS[tier];
  const tone: PbrResult["tone"] = pbr <= ceil.green ? "pass" : pbr <= ceil.amber ? "flag" : "fail";
  const pct = (pbr * 100).toFixed(1);
  const verdictLine =
    tone === "pass"
      ? `${pct}% of daily deposits — sustainable for a Tier ${tier} file (green ceiling ${ceil.green * 100}%). Pitch it with the math on the table.`
      : tone === "flag"
        ? `${pct}% of daily deposits — above the Tier ${tier} green line (${ceil.green * 100}%). Fundable, but shrink the offer or stretch the term before presenting.`
        : `${pct}% of daily deposits — past the Tier ${tier} amber ceiling (${ceil.amber * 100}%). Do not present this structure; it defaults. Re-size.`;
  return { payback, dailyPayment, dailyDeposits, pbr, tone, verdictLine };
}

export function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export function fmtMoney(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
