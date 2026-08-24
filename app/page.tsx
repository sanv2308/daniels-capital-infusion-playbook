import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { IndustryBrowser } from "@/components/IndustryBrowser";
import { INDUSTRIES, CATEGORIES } from "@/data/industries";
import { LANES } from "@/data/lanes";
import { PULSE } from "@/data/method";
import { LEADS } from "@/data/leads";

export default function Home() {
  return (
    <div className="container page-pad">
      <div className="module-board">
        {/* left column */}
        <div className="module-col">
          <Reveal>
            <section
              className="card"
              style={{
                background:
                  "linear-gradient(155deg, rgba(255,255,255,.05), rgba(255,255,255,0) 55%), radial-gradient(ellipse 80% 60% at 0% 0%, rgba(110,200,211,.07), transparent 60%), linear-gradient(180deg, #181e27, #0f141b)",
                padding: 22,
              }}
            >
              <p className="kicker">Capital Infusion</p>
              <h1 className="h-display">Discovery Playbook</h1>
              <p className="lede" style={{ marginTop: 16 }}>
                Pick the business type, ask one clear question, and follow the answer.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
                <Link href="/leads" className="btn btn--primary">
                  <i className="ti ti-users" aria-hidden /> Work the 25 leads
                </Link>
                <Link href="/call" className="btn btn--primary">
                  <i className="ti ti-phone-call" aria-hidden /> Start a live call
                </Link>
                <Link href="/method" className="btn btn--ghost">How it works</Link>
              </div>
            </section>
          </Reveal>

          <Reveal i={1}>
            <section className="card advisor" aria-label="Advisor profile">
              <img src="/danielp-profile-img.PNG" alt="Daniel P. profile photo" width={160} height={160} />
              <div>
                <p className="advisor__name">Daniel P.</p>
                <p className="advisor__role">Capital Infusion sales desk</p>
              </div>
            </section>
          </Reveal>

          <Reveal i={2}>
            <section className="card" aria-label="Call workflow">
              <div className="module-kicker">
                <div>
                  <p>The arc</p>
                  <h2>Call Stack</h2>
                </div>
                <span className="chip" style={{ color: "var(--mint)", borderColor: "rgba(110,200,211,.25)", background: "rgba(110,200,211,.08)" }}>
                  <i className="ti ti-route" aria-hidden /> PULSE
                </span>
              </div>
              <ul className="workflow-list">
                {PULSE.map((p, i) => (
                  <li key={p.letter}>
                    <span className="tile">{p.letter}</span>
                    <span>
                      <Link href={`/call?p=${i}`}>{p.name}</Link> — {p.sub}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        {/* center — the browser */}
        <div className="module-col module-center">
          <Reveal>
            <section className="panel" style={{ padding: 18, boxShadow: "var(--shadow-panel)" }}>
              <div className="module-kicker">
                <div>
                  <p>Start here</p>
                  <h2>Discovery by industry</h2>
                </div>
                <span className="chip" style={{ color: "var(--mint)", borderColor: "rgba(110,200,211,.25)", background: "rgba(110,200,211,.08)" }}>
                  <i className="ti ti-device-mobile-search" aria-hidden /> Interactive
                </span>
              </div>
              <IndustryBrowser />
            </section>
          </Reveal>
        </div>

        {/* right column */}
        <div className="module-col">
          <Reveal>
            <section className="card stat-module" aria-label="Prospect lead count">
              <span className="tile"><i className="ti ti-user-dollar" aria-hidden /></span>
              <div>
                <strong>{LEADS.length}</strong>
                <span>Prospect leads</span>
              </div>
            </section>
          </Reveal>
          <Reveal i={1}>
            <section className="card stat-module" aria-label="Industry count">
              <span className="tile"><i className="ti ti-building-store" aria-hidden /></span>
              <div>
                <strong>{INDUSTRIES.length}</strong>
                <span>Industries</span>
              </div>
            </section>
          </Reveal>
          <Reveal i={2}>
            <section className="card stat-module" aria-label="Category count">
              <span className="tile"><i className="ti ti-folders" aria-hidden /></span>
              <div>
                <strong>{CATEGORIES.length}</strong>
                <span>Categories</span>
              </div>
            </section>
          </Reveal>
          <Reveal i={3}>
            <section className="card stat-module" aria-label="Funding lanes">
              <span className="tile"><i className="ti ti-cash" aria-hidden /></span>
              <div>
                <strong>{LANES.length}</strong>
                <span>Funding lanes</span>
              </div>
            </section>
          </Reveal>
          <Reveal i={4}>
            <section className="card" aria-label="Desk tools">
              <h2 className="section-label">Desk tools</h2>
              <ul className="workflow-list">
                <li>
                  <span className="tile"><i className="ti ti-users" aria-hidden /></span>
                  <span><Link href="/leads">Lead queue</Link> — who to call and what to say</span>
                </li>
                <li>
                  <span className="tile"><i className="ti ti-adjustments" aria-hidden /></span>
                  <span><Link href="/call?p=2">Qualify &amp; size</Link> — gates + burden math</span>
                </li>
                <li>
                  <span className="tile"><i className="ti ti-git-branch" aria-hidden /></span>
                  <span><Link href="/lanes">Funding lanes</Link> — which product, and why</span>
                </li>
                <li>
                  <span className="tile"><i className="ti ti-message-2" aria-hidden /></span>
                  <span><Link href="/objections">Objections</Link> — what to say back</span>
                </li>
                <li>
                  <span className="tile"><i className="ti ti-shield-check" aria-hidden /></span>
                  <span><Link href="/compliance">Compliance</Link> — what never to say</span>
                </li>
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
