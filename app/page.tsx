import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { INDUSTRIES, CATEGORIES, industriesByCategory } from "@/data/industries";
import { LANES } from "@/data/lanes";
import { OBJECTIONS } from "@/data/objections";
import { PULSE, D_CODES } from "@/data/method";

export default function Home() {
  return (
    <div className="container page-pad">
      {/* hero */}
      <section style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", padding: "clamp(1.5rem,4vw,3.5rem) 0" }}>
        <Reveal>
          <p className="kicker" style={{ justifyContent: "center" }}>
            the edge over every competitor's phone floor
          </p>
        </Reveal>
        <Reveal i={1}>
          <h1 className="h-display">
            Know <em>where you are</em>.<br />
            Know <em>what to say</em>.<br />
            Know <em>why</em>.
          </h1>
        </Reveal>
        <Reveal i={2}>
          <p className="lede" style={{ margin: "1.4rem auto 2rem" }}>
            The Capital Infusion playbook is a call instrument, not a binder: a
            five-phase arc that always shows your position, deterministic
            qualification and product routing with the rule trace on screen, and
            22 industry dossiers deep enough to sound like you grew up in the
            prospect&apos;s business.
          </p>
        </Reveal>
        <Reveal i={3}>
          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/call" className="btn btn--primary">Start a live call →</Link>
            <Link href="/method" className="btn btn--ghost">Learn the method</Link>
          </div>
        </Reveal>
      </section>

      {/* system stats */}
      <Reveal>
        <div className="hairline-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
          {[
            { n: INDUSTRIES.length, label: "industry dossiers" },
            { n: LANES.length, label: "product lanes" },
            { n: 5, label: "GATE-5 checks" },
            { n: OBJECTIONS.length, label: "ARC objection tracks" },
            { n: D_CODES.length, label: "D-code dispositions" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="big-figure">{s.n}</div>
              <div style={{ fontSize: "0.76rem", color: "var(--bone-faint)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* the arc */}
      <section style={{ marginTop: "3.5rem" }}>
        <Reveal>
          <p className="kicker">the spine</p>
          <h2 className="h-section">Every call runs PULSE. You are always on the rail.</h2>
        </Reveal>
        <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginTop: "1.25rem" }}>
          {PULSE.map((p, i) => (
            <Reveal key={p.letter} i={i}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--mint)" }}>{p.letter}</span>
                  <span style={{ fontWeight: 700 }}>{p.name}</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--bone-faint)", fontFamily: "var(--font-mono)" }}>{p.sub}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--bone-dim)", margin: 0, lineHeight: 1.55 }}>{p.goal}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* master index */}
      <section style={{ marginTop: "3.5rem" }}>
        <Reveal>
          <p className="kicker">master index</p>
          <h2 className="h-section">Every dossier, one screen, stable IDs.</h2>
        </Reveal>
        <div className="masonry" style={{ marginTop: "1.25rem" }}>
          {CATEGORIES.map((cat, ci) => {
            const inds = industriesByCategory(cat.id);
            return (
              <Reveal key={cat.id} i={ci % 2} className="masonry__item">
                <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ padding: "0.85rem 1.2rem", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="section-label" style={{ margin: 0 }}>{cat.name}</span>
                    <span className="index-row__meta">{inds.length}</span>
                  </div>
                  {inds.map((ind) => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`} className="index-row">
                      <span className="id-stamp">{ind.code}</span>
                      <span className="index-row__name">{ind.name}</span>
                      {ind.verified && <span className="chip chip--pass">researched</span>}
                      <span className="index-row__meta">tier {ind.tier}</span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* closing */}
      <section style={{ marginTop: "3.5rem", textAlign: "center" }}>
        <Reveal>
          <div className="panel" style={{ maxWidth: 680, margin: "0 auto" }}>
            <p className="rapport-quote" style={{ borderLeft: "none", padding: 0, textAlign: "center" }}>
              &ldquo;The dossier tells you who you&apos;re talking to. The rail tells you
              where you are. The machine tells you whether they fund, what to
              pitch, and how big — and every call ends in a code.&rdquo;
            </p>
            <p style={{ fontSize: "0.78rem", color: "var(--bone-faint)", fontFamily: "var(--font-mono)", marginTop: "1rem", marginBottom: 0 }}>
              — the whole system in three sentences
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
