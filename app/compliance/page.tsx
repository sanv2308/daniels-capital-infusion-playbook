import { Reveal } from "@/components/Reveal";
import { LANGUAGE_RULES, STATE_RULES } from "@/data/compliance";

export const metadata = { title: "Compliance · Capital Infusion Playbook" };

export default function CompliancePage() {
  return (
    <div className="container page-pad" style={{ maxWidth: 920 }}>
      <Reveal>
        <p className="kicker">the guardrails</p>
        <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Compliance floor</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          The scripts in this playbook are pre-cleared against these rules. They
          are the floor, not the ceiling — when in doubt, say less and point to
          the disclosure documents. This page is operating guidance, not legal
          advice; direct legal questions to management.
        </p>
      </Reveal>

      <div className="stack-lg" style={{ marginTop: "2.5rem" }}>
        <Reveal>
          <section>
            <p className="section-label">language rules — never / instead / why</p>
            <div className="stack" style={{ gap: 10 }}>
              {LANGUAGE_RULES.map((r) => (
                <div key={r.id} className="card" style={{ display: "grid", gap: 8 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span className="id-stamp" style={{ color: "var(--fail)" }}>{r.id}</span>
                    <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--fail)" }}>Never: {r.never}</span>
                  </div>
                  <div style={{ fontSize: "0.94rem", lineHeight: 1.55 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--pass)" }}>instead · </span>
                    {r.instead}
                  </div>
                  <div style={{ fontSize: "0.86rem", color: "var(--bone-dim)", lineHeight: 1.5 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brass)" }}>why · </span>
                    {r.why}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <p className="section-label">state disclosure landscape — commercial financing</p>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr><th>State</th><th>Law</th><th>Since</th><th>What it does</th><th>What it means for your call</th></tr>
                </thead>
                <tbody>
                  {STATE_RULES.map((s) => (
                    <tr key={s.state}>
                      <td style={{ fontWeight: 700, whiteSpace: "nowrap" }}>{s.state}</td>
                      <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "var(--bone-dim)" }}>{s.law}</td>
                      <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", whiteSpace: "nowrap" }}>{s.effective}</td>
                      <td style={{ color: "var(--bone-dim)" }}>{s.gist}</td>
                      <td>{s.repImpact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--bone-faint)", fontFamily: "var(--font-mono)", marginTop: 10, lineHeight: 1.6 }}>
              legislatures move — confirm current status with compliance before relying on this table for a specific file.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="panel">
            <p className="section-label">the one-sentence version</p>
            <blockquote className="rapport-quote">
              &ldquo;Quote total payback dollars and the payment. Let the disclosure
              documents do the disclosing. Never promise, never improvise an APR,
              never say loan when it isn&apos;t one.&rdquo;
            </blockquote>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
