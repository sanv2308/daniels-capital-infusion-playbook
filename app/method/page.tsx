import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PULSE, D_CODES, RAMP } from "@/data/method";
import { PBR_CEILINGS } from "@/lib/engine";

export const metadata = { title: "Method · Capital Infusion Playbook" };

const CONSUMES: Record<string, string> = {
  P: "hero stat · rapport line",
  U: "pain hooks → asks",
  L: "qualifying reads · GATE-5",
  S: "LANE router · lane pitch · PBR",
  E: "ARC tracks · D-codes",
};

const LAYERS = [
  { n: 1, layer: "Context", entity: "Industry dossier", ids: "TRK, RST, …", answers: "Who am I talking to?" },
  { n: 2, layer: "Process", entity: "PULSE phase", ids: "P · U · L · S · E", answers: "Where am I in the call?" },
  { n: 3, layer: "Tests", entity: "GATE-5 · PBR", ids: "G1–G5 · PBR", answers: "Can they fund? Should this structure exist?" },
  { n: 4, layer: "Actions", entity: "Lane · ARC track", ids: "LN-1–6 · OBJ-1–8", answers: "What do I pitch? How do I handle resistance?" },
  { n: 5, layer: "Terminals", entity: "D-code", ids: "D1–D9", answers: "How does this call end?" },
];

const GATES = [
  { id: "G1", label: "Monthly revenue", pass: "≥ $40k", flag: "$15k – 40k", fail: "< $15k" },
  { id: "G2", label: "Time in business", pass: "≥ 24 mo", flag: "6 – 24 mo", fail: "< 6 mo" },
  { id: "G3", label: "Credit band", pass: "680+", flag: "550 – 679", fail: "< 550" },
  { id: "G4", label: "Open positions", pass: "0", flag: "1 – 2", fail: "3+" },
  { id: "G5", label: "Industry tier", pass: "A / B", flag: "C / D", fail: "—" },
];

export default function MethodPage() {
  return (
    <div className="container page-pad" style={{ maxWidth: 920 }}>
      <Reveal>
        <p className="kicker">the operating system</p>
        <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>The method</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          The whole system in three sentences: the dossier tells you who
          you&apos;re talking to. The rail tells you where you are, and each phase
          hands you only what that phase needs. The machine tells you whether
          they fund, what to pitch, and how big — and every call ends in a code.
        </p>
      </Reveal>

      <div className="stack-lg" style={{ marginTop: "2.5rem" }}>
        {/* ontology map */}
        <Reveal>
          <section>
            <p className="section-label">the knowledge structure — five layers, one direction</p>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr><th>#</th><th>Layer</th><th>Entity</th><th>IDs</th><th>The question it answers</th></tr>
                </thead>
                <tbody>
                  {LAYERS.map((l) => (
                    <tr key={l.n}>
                      <td style={{ fontFamily: "var(--font-mono)", color: "var(--mint)" }}>{l.n}</td>
                      <td style={{ fontWeight: 700 }}>{l.layer}</td>
                      <td>{l.entity}</td>
                      <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--bone-dim)" }}>{l.ids}</td>
                      <td style={{ color: "var(--bone-dim)" }}>{l.answers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rule-trace" style={{ marginTop: 10 }}>
              industry <b>parameterizes</b> everything · phase <b>consumes</b> its artifacts only ·
              verdict <b>gates</b> the router · router <b>ranks</b> lanes · PBR <b>validates</b> the
              structure · every path <b>terminates</b> in a D-code
            </div>
          </section>
        </Reveal>

        {/* PULSE detail */}
        <Reveal>
          <section>
            <p className="section-label">PULSE — the call arc</p>
            <div className="stack" style={{ gap: 10 }}>
              {PULSE.map((p) => (
                <div key={p.letter} className="card" style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 16 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "var(--mint)", lineHeight: 1 }}>{p.letter}</div>
                  <div>
                    <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{p.name}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--bone-faint)" }}>{p.sub}</span>
                      <span className="chip" style={{ marginLeft: "auto" }}>consumes · {CONSUMES[p.letter]}</span>
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "var(--bone-dim)", margin: "8px 0", lineHeight: 1.55 }}>{p.goal}</p>
                    <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: 5 }}>
                      {p.moves.map((m) => (
                        <li key={m} style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>{m}</li>
                      ))}
                    </ul>
                    <p style={{ fontSize: "0.8rem", color: "var(--pass)", marginTop: 10, marginBottom: 0, fontFamily: "var(--font-mono)" }}>
                      exit → {p.exitWhen}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* GATE-5 thresholds */}
        <Reveal>
          <section>
            <p className="section-label">GATE-5 — the thresholds, stated once</p>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr><th>Gate</th><th>Check</th><th style={{ color: "var(--pass)" }}>pass</th><th style={{ color: "var(--flag)" }}>flag</th><th style={{ color: "var(--fail)" }}>fail</th></tr>
                </thead>
                <tbody>
                  {GATES.map((g) => (
                    <tr key={g.id}>
                      <td style={{ fontFamily: "var(--font-mono)", color: "var(--mint)" }}>{g.id}</td>
                      <td style={{ fontWeight: 600 }}>{g.label}</td>
                      <td>{g.pass}</td><td>{g.flag}</td><td>{g.fail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rule-trace" style={{ marginTop: 10 }}>
              any <b>fail</b> → decline (D6 with fix path) · 3+ <b>flags</b> → flag (top lane only, don&apos;t oversell) · else → <b>fund</b>
            </div>
          </section>
        </Reveal>

        {/* PBR ceilings */}
        <Reveal>
          <section>
            <p className="section-label">PBR — payment burden ceilings by industry tier</p>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr><th>Tier</th><th style={{ color: "var(--pass)" }}>green ≤</th><th style={{ color: "var(--flag)" }}>amber ≤</th><th style={{ color: "var(--fail)" }}>red &gt;</th></tr>
                </thead>
                <tbody>
                  {(Object.keys(PBR_CEILINGS) as (keyof typeof PBR_CEILINGS)[]).map((t) => (
                    <tr key={t}>
                      <td style={{ fontFamily: "var(--font-mono)", color: "var(--mint)" }}>{t}</td>
                      <td>{PBR_CEILINGS[t].green * 100}%</td>
                      <td>{PBR_CEILINGS[t].amber * 100}%</td>
                      <td>{PBR_CEILINGS[t].amber * 100}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rule-trace" style={{ marginTop: 10 }}>
              PBR = daily payment ÷ daily deposits (monthly revenue ÷ 21) · <b>red never gets presented</b> — re-size the offer or stretch the term first
            </div>
          </section>
        </Reveal>

        {/* D-codes */}
        <Reveal>
          <section>
            <p className="section-label">D-codes — every call ends in exactly one</p>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr><th>Code</th><th>Name</th><th>Next action</th><th>Cadence</th></tr>
                </thead>
                <tbody>
                  {D_CODES.map((d) => (
                    <tr key={d.code}>
                      <td style={{ fontFamily: "var(--font-mono)", color: "var(--mint)", whiteSpace: "nowrap" }}>{d.code}</td>
                      <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{d.name}</td>
                      <td style={{ color: "var(--bone-dim)" }}>{d.nextAction}</td>
                      <td style={{ color: "var(--bone-dim)" }}>{d.cadence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        {/* ramp */}
        <Reveal>
          <section>
            <p className="section-label">day 1 → 30 — how a new rep eats this playbook</p>
            <div className="stack" style={{ gap: 10 }}>
              {RAMP.map((r) => (
                <div key={r.day} className="card" style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 14 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--brass)", paddingTop: 3 }}>{r.day}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{r.focus}</div>
                    <p style={{ fontSize: "0.9rem", color: "var(--bone-dim)", margin: 0, lineHeight: 1.55 }}>{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <Link href="/call" className="btn btn--primary">Run the system live →</Link>
        </Reveal>
      </div>
    </div>
  );
}
