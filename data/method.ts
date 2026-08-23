import type { PulsePhase, DispositionCode } from "./types";

// ============================================================
// PULSE — the house call arc. Five phases, always visible.
// The rep should be able to answer "where am I?" at any second
// of any call. Every dossier section, engine, and script in
// this playbook is ammunition for exactly one PULSE phase.
// ============================================================

export const PULSE: PulsePhase[] = [
  {
    letter: "P",
    name: "Pin",
    sub: "open + frame",
    goal: "Pin the conversation: who you are, why this call is relevant to THEIR industry, and permission to ask questions.",
    moves: [
      "Lead with the industry hero stat — prove in one sentence you know their world",
      "Deliver the rapport line as a question, then stop talking",
      "Frame the call: 'ten minutes, a few questions, and I'll tell you exactly what you'd qualify for — maybe it's nothing, and I'll say that too'",
    ],
    exitWhen: "They answer the rapport question with something real about their business.",
  },
  {
    letter: "U",
    name: "Uncover",
    sub: "pain discovery",
    goal: "Surface the cash-flow pain in their own words. People fund what hurts, not what you pitch.",
    moves: [
      "Run 2–3 pain hooks from the dossier — each one ends in its 'ask' question",
      "Follow the money: when they name a pain, ask what it costs them per month",
      "Echo their words back; do not introduce products yet — pitching here kills calls",
    ],
    exitWhen: "You can state their #1 pain and its monthly cost, and they've agreed that's right.",
  },
  {
    letter: "L",
    name: "Lock",
    sub: "qualify + size",
    goal: "Lock the file: run GATE-5 conversationally and size the deal. Every answer has a read — know what it means as you hear it.",
    moves: [
      "Work through the dossier's qualifying questions — revenue, TIB, credit, positions",
      "Use the reads: each answer moves lanes on or off the menu in real time",
      "Fails on G1/G2 → stop pitching, go to Execute with the fix path (D6). Don't waste their trust on a decline",
    ],
    exitWhen: "GATE-5 has a verdict: fund, flag, or decline.",
  },
  {
    letter: "S",
    name: "Solve",
    sub: "route + present math",
    goal: "Present ONE product — the LANE router's top pick — with the math on the table. Options confuse; a diagnosis closes.",
    moves: [
      "Deliver the lane's pitch script, tied to the pain from Uncover",
      "Show PBR out loud: 'that's about X% of what you deposit daily' — burden honesty is the trust weapon competitors don't use",
      "Anchor total payback in dollars, never juggle rate formats",
    ],
    exitWhen: "They've heard one structure, its daily number, and its total cost — and reacted.",
  },
  {
    letter: "E",
    name: "Execute",
    sub: "close + disposition",
    goal: "Every call ends in a D-code. Either paper moves, or the next contact has a date and a reason.",
    moves: [
      "Direct close: 'send me the last three statements and I'll have your approval by tomorrow'",
      "Objection → run ARC (acknowledge, reframe, close), max two loops, then fallback",
      "Before hanging up: log the D-code and say the next step out loud so it's mutual",
    ],
    exitWhen: "A D-code is logged. There is no other way a call ends.",
  },
];

// ============================================================
// D-codes — dispositions. Deterministic: every code carries a
// mandated next action and cadence. "I'll follow up sometime"
// does not exist in this system.
// ============================================================

export const D_CODES: DispositionCode[] = [
  { code: "D1", name: "Docs in", meaning: "Statements/application received", nextAction: "Submit to underwriting same day; confirm receipt to client", cadence: "Update client within 24h, then daily until offer" },
  { code: "D2", name: "Offer out", meaning: "Approval presented, deciding", nextAction: "Recap call within 24h of offer delivery; re-run PBR math", cadence: "Every 48h, max 3 touches, then D5" },
  { code: "D3", name: "Funded", meaning: "Deal funded", nextAction: "Day-1 thank-you + set 60-day renewal review date", cadence: "Check-in day 30; renewal conversation at ~50% paid down" },
  { code: "D4", name: "Dated callback", meaning: "Real interest, specific date + reason", nextAction: "Calendar the callback with the trigger noted", cadence: "Exactly on date; if missed twice → D5" },
  { code: "D5", name: "Nurture-active", meaning: "Qualified, no current need", nextAction: "Log trigger events; send one industry-relevant touch", cadence: "Every 3 weeks, alternating value/check-in", },
  { code: "D6", name: "Nurture-fix", meaning: "Failed a gate; fixable", nextAction: "Tell them exactly which gate and the fix path; calendar re-check", cadence: "Re-qualify at the fix date (e.g. TIB month 6, post-season revenue)" },
  { code: "D7", name: "Dead-polite", meaning: "No fit / no interest, door open", nextAction: "Close warmly; tag industry + reason", cadence: "One re-touch in 90 days, then archive" },
  { code: "D8", name: "Dead-hard", meaning: "DNC / hostile / fraud signals", nextAction: "Mark do-not-contact; note reason", cadence: "Never" },
  { code: "D9", name: "Client-renewal", meaning: "Funded client at renewal window", nextAction: "Pull payment history; lead with performance-based better pricing", cadence: "Contact at 50% paydown, again at 75%" },
];

// Day 1 → 30 ramp — how a new rep eats this playbook
export const RAMP: { day: string; focus: string; detail: string }[] = [
  { day: "Day 1–3", focus: "The spine", detail: "Learn PULSE cold — the five phases, their exit conditions, and the rule that every call ends in a D-code. Shadow calls and just name the phase silently as it happens." },
  { day: "Day 4–7", focus: "Two lanes, one industry", detail: "Master Revenue-Based Advance and Term (LN-1, LN-2) plus the trucking dossier end-to-end — hero stat, pains, reads, deal math, objections. First live calls in trucking only." },
  { day: "Week 2", focus: "The engines", detail: "GATE-5 and PBR until they're reflexes: run ten paper files through the cockpit daily. Learn ARC and drill OBJ-1 (price), OBJ-2 (timing), OBJ-7 (send info) — 80% of what you'll hear." },
  { day: "Week 3", focus: "Lane fluency", detail: "Remaining four lanes + five more dossiers in your calling verticals. Start running the cockpit live on calls: rail on screen, phase honest." },
  { day: "Week 4", focus: "Full menu", detail: "All 8 objection classes, compliance rules cold (never 'loan' for an advance, no APR improvisation), renewal plays. You should close a D3 or hold a pipeline of D1/D2s by day 30." },
];
