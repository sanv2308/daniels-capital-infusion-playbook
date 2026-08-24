import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { INDUSTRIES, industryBySlug, CATEGORIES } from "@/data/industries";
import { laneById } from "@/data/lanes";
import { computePbr, fmtMoney } from "@/lib/engine";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industryBySlug(slug);
  return { title: ind ? `${ind.name} · Dossier` : "Dossier" };
}

export default async function IndustryDossier({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industryBySlug(slug);
  if (!ind) notFound();

  const cat = CATEGORIES.find((c) => c.id === ind.category);
  const usesAdvanceMath = ind.dealMath.termDays > 0;
  const pbr = usesAdvanceMath
    ? computePbr(
        { monthlyRevenue: ind.dealMath.monthlyRevenue, offer: ind.dealMath.offer, factor: ind.dealMath.factor, termDays: ind.dealMath.termDays },
        ind.tier
      )
    : null;

  return (
    <div className="container page-pad" style={{ maxWidth: 900 }}>
      <Reveal>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: "0.75rem" }}>
          <Link href="/industries" style={{ fontSize: "0.82rem", color: "var(--mint)" }}>← industries</Link>
          <span className="id-stamp">{ind.code}</span>
          <span className="index-row__meta">{cat?.name}</span>
          <span className="chip chip--brass">tier {ind.tier}</span>
          {ind.verified ? <span className="chip chip--pass">researched</span> : <span className="chip">curated v3 · verify before quoting</span>}
        </div>
        <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>{ind.name}</h1>
      </Reveal>

      <div className="stack-lg" style={{ marginTop: "2rem" }}>
        {/* P */}
        <Reveal>
          <section className="card">
            <p className="section-label">P · pin — hero stat, lead with this</p>
            <p className="hero-stat">{ind.hero}</p>
            <p className="section-label" style={{ marginTop: "1.25rem" }}>rapport line</p>
            <blockquote className="rapport-quote">&ldquo;{ind.rapport}&rdquo;</blockquote>
            <p style={{ fontSize: "0.84rem", color: "var(--bone-dim)", marginTop: "1rem", marginBottom: 0 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brass)" }}>season · </span>
              {ind.seasonal}
            </p>
          </section>
        </Reveal>

        {/* U */}
        <Reveal>
          <section>
            <p className="section-label">U · uncover — pain hooks → discovery asks</p>
            <div className="hairline-grid">
              {ind.pains.map((p) => (
                <div key={p.label} className="pain-item">
                  <p className="pain-item__label">{p.label}</p>
                  <p className="pain-item__ask">{p.ask}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* L */}
        <Reveal>
          <section>
            <p className="section-label">L · lock — qualifying questions, each with its read</p>
            <div className="hairline-grid">
              {ind.quals.map((q) => (
                <div key={q.q} className="qual-item">
                  <p className="qual-item__q">{q.q}</p>
                  <p className="qual-item__read">{q.read}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* S */}
        <Reveal>
          <section className="stack">
            <p className="section-label" style={{ marginBottom: 0 }}>S · solve — lane bias + worked deal math</p>
            <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              {ind.laneBias.map((b) => {
                const lane = laneById(b.lane)!;
                return (
                  <Link key={b.lane} href={`/lanes/${lane.id}`} className="card card--interactive" style={{ display: "block" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 6 }}>
                      <span className="id-stamp" style={{ color: "var(--mint)" }}>{lane.code}</span>
                      <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{lane.name}</span>
                    </div>
                    <p style={{ fontSize: "0.84rem", color: "var(--bone-dim)", margin: 0, lineHeight: 1.5 }}>{b.when}</p>
                  </Link>
                );
              })}
            </div>

            <div className="panel">
              <p className="section-label">worked example</p>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.6, marginTop: 0 }}>{ind.dealMath.scenario}</p>
              {pbr && (
                <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap", margin: "1rem 0" }}>
                  <div><div className="section-label" style={{ marginBottom: 2 }}>offer</div><div className="big-figure">{fmtMoney(ind.dealMath.offer)}</div></div>
                  <div><div className="section-label" style={{ marginBottom: 2 }}>factor</div><div className="big-figure" style={{ color: "var(--bone)" }}>{ind.dealMath.factor.toFixed(2)}</div></div>
                  <div><div className="section-label" style={{ marginBottom: 2 }}>daily</div><div className="big-figure">{fmtMoney(Math.round(pbr.dailyPayment))}</div></div>
                  <div><div className="section-label" style={{ marginBottom: 2 }}>burden</div><div className="big-figure" style={{ color: `var(--${pbr.tone})` }}>{(pbr.pbr * 100).toFixed(1)}%</div></div>
                </div>
              )}
              <div className="rule-trace">{ind.dealMath.note}</div>
            </div>
          </section>
        </Reveal>

        {/* E */}
        <Reveal>
          <section>
            <p className="section-label">E · execute — signature objections (ARC)</p>
            <div className="stack" style={{ gap: 10 }}>
              {ind.objections.map((o) => (
                <div key={o.claim} className="arc-block" data-open="true">
                  <div className="arc-block__head" style={{ cursor: "default" }}>
                    <span className="arc-block__claim">&ldquo;{o.claim}&rdquo;</span>
                  </div>
                  <div className="arc-block__body">
                    <div className="arc-step"><span className="arc-step__tag">acknowledge</span><p>{o.acknowledge}</p></div>
                    <div className="arc-step"><span className="arc-step__tag">reframe</span><p>{o.reframe}</p></div>
                    <div className="arc-step"><span className="arc-step__tag">close</span><p>{o.close}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* flags + renewal + uses */}
        <Reveal>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <section className="card">
              <p className="section-label" style={{ color: "var(--fail)" }}>red flags — stop and reassess</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: 8 }}>
                {ind.redFlags.map((r) => (
                  <li key={r} style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "var(--bone-dim)" }}>{r}</li>
                ))}
              </ul>
            </section>
            <section className="card">
              <p className="section-label">typical uses of funds</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: 8 }}>
                {ind.uses.map((u) => (
                  <li key={u} style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "var(--bone-dim)" }}>{u}</li>
                ))}
              </ul>
            </section>
          </div>
        </Reveal>

        <Reveal>
          <section className="panel">
            <p className="section-label" style={{ color: "var(--brass)" }}>the renewal play — where the real money is</p>
            <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.65 }}>{ind.renewal}</p>
          </section>
        </Reveal>

        <Reveal>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <Link href="/call" className="btn btn--primary">Run a live call in {ind.name} →</Link>
            <Link href="/objections" className="btn btn--ghost">Universal ARC matrix</Link>
          </div>
        </Reveal>

        {ind.verifiedNote ? (
          <p style={{ fontSize: "0.78rem", color: "var(--bone-faint)", fontFamily: "var(--font-mono)", lineHeight: 1.6 }}>
            ✓ {ind.verifiedNote}
          </p>
        ) : (
          <p style={{ fontSize: "0.78rem", color: "var(--bone-faint)", fontFamily: "var(--font-mono)", lineHeight: 1.6 }}>
            curated v3 content — directionally correct; verify hero-stat figures before quoting them on a call. Trucking (TRK) is the research-verified baseline.
          </p>
        )}
      </div>
    </div>
  );
}
