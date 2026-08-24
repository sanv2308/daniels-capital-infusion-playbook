"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { INDUSTRIES, industryBySlug } from "@/data/industries";
import { laneById } from "@/data/lanes";
import { OBJECTIONS } from "@/data/objections";
import { PULSE, D_CODES } from "@/data/method";
import { discoveryGuideBySlug, UNIVERSAL_FOLLOW_UPS } from "@/data/discovery";
import {
  runGates,
  routeLanes,
  computePbr,
  fmtMoney,
  type CreditBand,
  type RouteInput,
} from "@/lib/engine";

type PhaseIdx = 0 | 1 | 2 | 3 | 4;

const CREDIT_BANDS: CreditBand[] = ["720+", "680-719", "620-679", "550-619", "<550"];
const USES: { id: RouteInput["useOfFunds"]; label: string }[] = [
  { id: "working-capital", label: "Working capital" },
  { id: "equipment", label: "Equipment" },
  { id: "inventory", label: "Inventory" },
  { id: "payroll", label: "Payroll bridge" },
  { id: "expansion", label: "Expansion" },
  { id: "receivables-bridge", label: "AR bridge" },
  { id: "consolidation", label: "Consolidation" },
];

export default function CallCockpit() {
  const [industrySlug, setIndustrySlug] = useState("trucking");
  const [phase, setPhase] = useState<PhaseIdx>(0);
  const [maxPhase, setMaxPhase] = useState<PhaseIdx>(0);

  // Deep link: /call?industry=hvac&p=2 opens the right dossier and phase.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const linkedIndustry = params.get("industry");
    if (linkedIndustry && industryBySlug(linkedIndustry)) setIndustrySlug(linkedIndustry);
    const p = Number(params.get("p"));
    if (p >= 1 && p <= 4) {
      setPhase(p as PhaseIdx);
      setMaxPhase(p as PhaseIdx);
    }
  }, []);

  // Lock inputs
  const [revenue, setRevenue] = useState(80000);
  const [tib, setTib] = useState(36);
  const [credit, setCredit] = useState<CreditBand>("620-679");
  const [positions, setPositions] = useState(0);

  // Solve inputs
  const [useOfFunds, setUseOfFunds] = useState<RouteInput["useOfFunds"]>("working-capital");
  const [hasInvoices, setHasInvoices] = useState(false);
  const [urgencyDays, setUrgencyDays] = useState(7);
  const [offer, setOffer] = useState(40000);
  const [factor, setFactor] = useState(1.32);
  const [termDays, setTermDays] = useState(130);

  // Execute
  const [openObj, setOpenObj] = useState<string | null>(null);
  const [dCode, setDCode] = useState<string | null>(null);

  const ind = industryBySlug(industrySlug) ?? INDUSTRIES[0];
  const discovery = discoveryGuideBySlug(ind.slug);

  const gateInput = { monthlyRevenue: revenue, tibMonths: tib, credit, positions, tier: ind.tier };
  const gateVerdict = useMemo(() => runGates(gateInput), [revenue, tib, credit, positions, ind.tier]);
  const route = useMemo(
    () => routeLanes({ ...gateInput, useOfFunds, hasInvoices, urgencyDays }),
    [revenue, tib, credit, positions, ind.tier, useOfFunds, hasInvoices, urgencyDays]
  );
  const pbr = useMemo(
    () => computePbr({ monthlyRevenue: revenue, offer, factor, termDays }, ind.tier),
    [revenue, offer, factor, termDays, ind.tier]
  );

  const goTo = (p: PhaseIdx) => {
    setPhase(p);
    if (p > maxPhase) setMaxPhase(p);
  };
  const advance = () => goTo(Math.min(4, phase + 1) as PhaseIdx);

  const railState = (i: number) => (i === phase ? "current" : i < maxPhase || i < phase ? "done" : "idle");

  const rail = (horizontal: boolean) => (
    <nav
      className={`pulse-rail${horizontal ? " pulse-rail--h pulse-rail--h-only" : ""}`}
      aria-label="Call phases"
    >
      {PULSE.map((p, i) => (
        <button
          key={p.letter}
          className="pulse-step"
          data-state={railState(i)}
          onClick={() => goTo(i as PhaseIdx)}
          aria-current={i === phase ? "step" : undefined}
        >
          <span className="pulse-step__letter">{p.letter}</span>
          <span>
            <span className="pulse-step__name">{p.name}</span>
            <span className="pulse-step__sub">{p.sub}</span>
          </span>
        </button>
      ))}
    </nav>
  );

  const exitBar = (exitWhen: string, last = false) => (
    <div className="verdict" data-tone="pass" style={{ marginTop: "1.25rem" }}>
      <div style={{ flex: 1 }}>
        <div className="section-label" style={{ marginBottom: 4 }}>advance when</div>
        <div style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{exitWhen}</div>
      </div>
      {!last && (
        <button className="btn btn--primary" onClick={advance}>
          Next phase →
        </button>
      )}
    </div>
  );

  return (
    <div className="container page-pad">
      {/* context bar: WHO + WHERE, always visible */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.85rem", color: "var(--bone-dim)", fontWeight: 600 }}>
          Talking to
          <select
            value={industrySlug}
            onChange={(e) => setIndustrySlug(e.target.value)}
            style={{
              background: "var(--ink-2)", color: "var(--bone)", border: "1px solid var(--line-strong)",
              borderRadius: 10, padding: "10px 14px", fontSize: "0.95rem", fontWeight: 600, minHeight: 44,
            }}
          >
            {INDUSTRIES.map((i) => (
              <option key={i.slug} value={i.slug}>{i.name}</option>
            ))}
          </select>
        </label>
        <span className="id-stamp">{ind.code}</span>
        <span className="chip">discovery mode</span>
        <Link href={`/industries/${ind.slug}`} style={{ fontSize: "0.82rem", color: "var(--mint)", marginLeft: "auto" }}>
          discovery questions →
        </Link>
      </div>

      {rail(true)}

      <div className="cockpit-grid" style={{ marginTop: "1.25rem" }}>
        {rail(false)}

        <div>
          {/* ---------------- P · PIN ---------------- */}
          {phase === 0 && (
            <section className="stack">
              <div>
                <p className="kicker">P · pin — open simply</p>
                <h1 className="h-section">Ask one useful question. Do not perform expertise.</h1>
              </div>
              <div className="card discovery-call-opener">
                <p className="section-label">say this</p>
                <blockquote>&ldquo;{discovery.opener}&rdquo;</blockquote>
                <p>Then stop. Let them answer in their own words.</p>
              </div>
              <div className="card">
                <p className="section-label">if you reached the wrong person</p>
                <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.6 }}>
                  &ldquo;Who handles decisions about equipment, working capital, or business financing?&rdquo;
                </p>
              </div>
              {exitBar("The decision-maker answers the question or gives you a clear callback time.")}
            </section>
          )}

          {/* ---------------- U · UNCOVER ---------------- */}
          {phase === 1 && (
            <section className="stack">
              <div>
                <p className="kicker">U · uncover — discovery</p>
                <h1 className="h-section">Ask one at a time. Follow the answer that has money and timing behind it.</h1>
              </div>
              <div className="discovery-call-list">
                {discovery.questions.map((item, index) => (
                  <div key={item.question} className="card discovery-call-question">
                    <span>{index + 1}</span>
                    <div>
                      <p>{item.question}</p>
                      <small><b>Listen for:</b> {item.listenFor}</small>
                    </div>
                  </div>
                ))}
              </div>
              <div className="panel">
                <p className="section-label">simple follow-ups</p>
                <div className="discovery-call-followups">
                  {UNIVERSAL_FOLLOW_UPS.map((question) => <span key={question}>&ldquo;{question}&rdquo;</span>)}
                </div>
              </div>
              {exitBar("You understand what they need, how much, why now, and when the money should return to the business.")}
            </section>
          )}

          {/* ---------------- L · LOCK ---------------- */}
          {phase === 2 && (
            <section className="stack">
              <div>
                <p className="kicker">L · lock — qualify + size · GATE-5</p>
                <h1 className="h-section">Ask conversationally. Enter what you hear. The gates read it live.</h1>
              </div>

              <div className="grid-2" style={{ alignItems: "start" }}>
                <div className="panel">
                  <div className="calc-field">
                    <label>
                      Monthly revenue <output>{fmtMoney(revenue)}</output>
                    </label>
                    <input
                      type="range" min={5000} max={500000} step={5000} value={revenue}
                      style={{ ["--pct" as string]: ((revenue - 5000) / 495000) * 100 }}
                      onChange={(e) => setRevenue(+e.target.value)}
                      aria-label="Monthly revenue"
                    />
                  </div>
                  <div className="calc-field">
                    <label>
                      Time in business <output>{tib} mo</output>
                    </label>
                    <input
                      type="range" min={0} max={240} step={3} value={tib}
                      style={{ ["--pct" as string]: (tib / 240) * 100 }}
                      onChange={(e) => setTib(+e.target.value)}
                      aria-label="Time in business, months"
                    />
                  </div>
                  <div className="calc-field">
                    <label>Credit band</label>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {CREDIT_BANDS.map((b) => (
                        <button
                          key={b}
                          className="chip"
                          style={credit === b ? { color: "var(--mint)", borderColor: "var(--mint-dim)", background: "var(--mint-tint)" } : undefined}
                          onClick={() => setCredit(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="calc-field" style={{ marginBottom: 0 }}>
                    <label>
                      Open positions <output>{positions}</output>
                    </label>
                    <input
                      type="range" min={0} max={5} step={1} value={positions}
                      style={{ ["--pct" as string]: (positions / 5) * 100 }}
                      onChange={(e) => setPositions(+e.target.value)}
                      aria-label="Open positions"
                    />
                  </div>
                </div>

                <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
                  {gateVerdict.gates.map((g) => (
                    <div key={g.id} className="gate-row" data-state={g.state}>
                      <span className="gate-row__badge">{g.id}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>{g.label}</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--bone-dim)", lineHeight: 1.45 }}>{g.detail}</div>
                      </div>
                      <span className={`chip chip--${g.state}`}>{g.state}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="verdict" data-tone={gateVerdict.verdict === "fund" ? "pass" : gateVerdict.verdict === "flag" ? "flag" : "fail"}>
                <span className="verdict__word">{gateVerdict.verdict.toUpperCase()}</span>
                <span style={{ fontSize: "0.92rem", lineHeight: 1.55, flex: 1 }}>{gateVerdict.verdictLine}</span>
              </div>

              <details className="panel" style={{ padding: "0.9rem 1.2rem" }}>
                <summary className="section-label" style={{ cursor: "pointer", marginBottom: 0 }}>
                  simple industry read — {ind.name}
                </summary>
                <div className="discovery-read-grid">
                  <div>
                    <p className="section-label" style={{ color: "var(--pass)" }}>Good reasons to continue</p>
                    <ul>{discovery.goodSignals.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div>
                    <p className="section-label" style={{ color: "var(--flag)" }}>Slow down and ask more</p>
                    <ul>{discovery.slowDownSignals.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
              </details>

              {gateVerdict.verdict === "decline"
                ? exitBar("A gate hard-failed: skip Solve. Go to Execute, give them the fix path, log D6.", false)
                : exitBar(PULSE[2].exitWhen)}
            </section>
          )}

          {/* ---------------- S · SOLVE ---------------- */}
          {phase === 3 && (
            <section className="stack">
              <div>
                <p className="kicker">S · solve — route + present the math</p>
                <h1 className="h-section">One product, its daily number, its total cost. Options confuse; a diagnosis closes.</h1>
              </div>

              <div className="panel">
                <p className="section-label">what&apos;s the money for?</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "1rem" }}>
                  {USES.map((u) => (
                    <button
                      key={u.id}
                      className="chip"
                      style={useOfFunds === u.id ? { color: "var(--mint)", borderColor: "var(--mint-dim)", background: "var(--mint-tint)" } : undefined}
                      onClick={() => setUseOfFunds(u.id)}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.86rem", color: "var(--bone-dim)" }}>
                    <input type="checkbox" checked={hasInvoices} onChange={(e) => setHasInvoices(e.target.checked)} style={{ width: 18, height: 18, accentColor: "var(--mint)" }} />
                    Carries B2B invoices
                  </label>
                  <div className="calc-field" style={{ marginBottom: 0, flex: 1, minWidth: 200 }}>
                    <label>
                      Needs funds within <output>{urgencyDays} days</output>
                    </label>
                    <input
                      type="range" min={1} max={90} step={1} value={urgencyDays}
                      style={{ ["--pct" as string]: (urgencyDays / 90) * 100 }}
                      onChange={(e) => setUrgencyDays(+e.target.value)}
                      aria-label="Urgency in days"
                    />
                  </div>
                </div>
              </div>

              {route.ranked.length > 0 ? (
                <div className="grid-2" style={{ alignItems: "start" }}>
                  {route.ranked.slice(0, 2).map((r, i) => {
                    const lane = laneById(r.lane)!;
                    return (
                      <div key={r.lane} className="card lane-card" style={i > 0 ? { opacity: 0.75 } : undefined}>
                        <span className="lane-card__rank" style={i > 0 ? { background: "var(--ink-4)", color: "var(--bone-dim)" } : undefined}>
                          {i === 0 ? "route here" : "fallback"}
                        </span>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6 }}>
                          <h2 className="lane-card__name">{lane.name}</h2>
                          <span className="id-stamp">{lane.code}</span>
                        </div>
                        <p className="lane-card__why">{lane.oneLiner}</p>
                        <div className="rule-trace" style={{ fontSize: "0.72rem" }}>
                          {r.reasons.map((reason) => (
                            <div key={reason}>▸ {reason}</div>
                          ))}
                        </div>
                        {i === 0 && (
                          <>
                            <p className="section-label" style={{ marginTop: 6 }}>say it like this</p>
                            <blockquote className="rapport-quote" style={{ fontSize: "1.05rem" }}>&ldquo;{lane.pitch}&rdquo;</blockquote>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="verdict" data-tone="fail">
                  <span className="verdict__word">NO LANE</span>
                  <span style={{ fontSize: "0.92rem", flex: 1 }}>
                    No lane scores positive on these inputs — recheck Lock, or this is a D6/D7 close.
                  </span>
                </div>
              )}

              {/* PBR sizer */}
              <div className="panel">
                <p className="section-label">PBR — size it before you say it</p>
                <div className="grid-2" style={{ alignItems: "start" }}>
                  <div>
                    <div className="calc-field">
                      <label>
                        Offer <output>{fmtMoney(offer)}</output>
                      </label>
                      <input
                        type="range" min={5000} max={250000} step={5000} value={offer}
                        style={{ ["--pct" as string]: ((offer - 5000) / 245000) * 100 }}
                        onChange={(e) => setOffer(+e.target.value)}
                        aria-label="Offer amount"
                      />
                    </div>
                    <div className="calc-field">
                      <label>
                        Factor <output>{factor.toFixed(2)}</output>
                      </label>
                      <input
                        type="range" min={1.15} max={1.49} step={0.01} value={factor}
                        style={{ ["--pct" as string]: ((factor - 1.15) / 0.34) * 100 }}
                        onChange={(e) => setFactor(+e.target.value)}
                        aria-label="Factor rate"
                      />
                    </div>
                    <div className="calc-field" style={{ marginBottom: 0 }}>
                      <label>
                        Term <output>{termDays} business days</output>
                      </label>
                      <input
                        type="range" min={40} max={260} step={10} value={termDays}
                        style={{ ["--pct" as string]: ((termDays - 40) / 220) * 100 }}
                        onChange={(e) => setTermDays(+e.target.value)}
                        aria-label="Term in business days"
                      />
                    </div>
                  </div>
                  <div className="stack" style={{ gap: "0.9rem" }}>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                      <div>
                        <div className="section-label" style={{ marginBottom: 2 }}>daily payment</div>
                        <div className="big-figure">{fmtMoney(Math.round(pbr.dailyPayment))}</div>
                      </div>
                      <div>
                        <div className="section-label" style={{ marginBottom: 2 }}>total payback</div>
                        <div className="big-figure" style={{ color: "var(--bone)" }}>{fmtMoney(Math.round(pbr.payback))}</div>
                      </div>
                      <div>
                        <div className="section-label" style={{ marginBottom: 2 }}>burden</div>
                        <div className="big-figure" style={{ color: `var(--${pbr.tone})` }}>
                          {(pbr.pbr * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                    <div className="meter" role="img" aria-label={`Payment burden ${(pbr.pbr * 100).toFixed(1)} percent`}>
                      <div className="meter__fill" data-tone={pbr.tone} style={{ width: `${Math.min(100, pbr.pbr * 400)}%` }} />
                    </div>
                    <div className="verdict" data-tone={pbr.tone} style={{ padding: "0.8rem 1rem" }}>
                      <span style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>{pbr.verdictLine}</span>
                    </div>
                  </div>
                </div>
              </div>

              {exitBar(PULSE[3].exitWhen)}
            </section>
          )}

          {/* ---------------- E · EXECUTE ---------------- */}
          {phase === 4 && (
            <section className="stack">
              <div>
                <p className="kicker">E · execute — close + disposition</p>
                <h1 className="h-section">Close directly. Handle resistance with ARC. Log the code out loud.</h1>
              </div>

              <div className="card">
                <p className="section-label">the direct close</p>
                <blockquote className="rapport-quote">
                  &ldquo;Send me the last three bank statements and I&apos;ll have your approval by
                  tomorrow. What email should I send the secure link to?&rdquo;
                </blockquote>
              </div>

              <div>
                <p className="section-label">
                  {ind.name} signature objections — ARC: acknowledge · reframe · close
                </p>
                <div className="stack" style={{ gap: 8 }}>
                  {ind.objections.map((o) => {
                    const key = `ind-${o.claim}`;
                    const open = openObj === key;
                    return (
                      <div key={key} className="arc-block" data-open={open}>
                        <button className="arc-block__head" onClick={() => setOpenObj(open ? null : key)} aria-expanded={open}>
                          <span className="arc-block__claim">&ldquo;{o.claim}&rdquo;</span>
                          <span className="arc-block__chev">›</span>
                        </button>
                        {open && (
                          <div className="arc-block__body">
                            <div className="arc-step"><span className="arc-step__tag">acknowledge</span><p>{o.acknowledge}</p></div>
                            <div className="arc-step"><span className="arc-step__tag">reframe</span><p>{o.reframe}</p></div>
                            <div className="arc-step"><span className="arc-step__tag">close</span><p>{o.close}</p></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--bone-faint)", marginTop: 10 }}>
                  Hearing something else? The universal matrix has all 8 classes —{" "}
                  <Link href="/objections" style={{ color: "var(--mint)" }}>open ARC matrix</Link>. Max two loops, then fallback.
                </p>
              </div>

              <div>
                <p className="section-label">end the call — pick the D-code and say the next step out loud</p>
                <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 8 }}>
                  {D_CODES.map((d) => (
                    <button
                      key={d.code}
                      className="card card--interactive"
                      style={{
                        padding: "0.8rem 0.9rem", textAlign: "left",
                        ...(dCode === d.code ? { outline: "2px solid var(--mint)", outlineOffset: 0 } : {}),
                      }}
                      onClick={() => setDCode(d.code)}
                    >
                      <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                        <span className="id-stamp" style={{ color: "var(--mint)" }}>{d.code}</span>
                        <span style={{ fontWeight: 700, fontSize: "0.86rem" }}>{d.name}</span>
                      </div>
                      <div style={{ fontSize: "0.74rem", color: "var(--bone-dim)", marginTop: 4, lineHeight: 1.4 }}>{d.meaning}</div>
                    </button>
                  ))}
                </div>
                {dCode && (
                  <div className="verdict" data-tone="pass" style={{ marginTop: "1rem" }}>
                    <div>
                      <div className="section-label" style={{ marginBottom: 4 }}>
                        {dCode} · mandated next action
                      </div>
                      <div style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                        {D_CODES.find((d) => d.code === dCode)!.nextAction}
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "var(--bone-dim)", marginTop: 6 }}>
                        cadence · {D_CODES.find((d) => d.code === dCode)!.cadence}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {exitBar(PULSE[4].exitWhen, true)}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
