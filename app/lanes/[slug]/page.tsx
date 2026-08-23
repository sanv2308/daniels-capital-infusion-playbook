import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { LANES, laneById } from "@/data/lanes";

export function generateStaticParams() {
  return LANES.map((l) => ({ slug: l.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lane = laneById(slug);
  return { title: lane ? `${lane.name} · Lane` : "Lane" };
}

export default async function LanePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lane = laneById(slug);
  if (!lane) notFound();

  return (
    <div className="container page-pad" style={{ maxWidth: 860 }}>
      <Reveal>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: "0.75rem" }}>
          <Link href="/lanes" style={{ fontSize: "0.82rem", color: "var(--mint)" }}>← lanes</Link>
          <span className="id-stamp">{lane.code}</span>
          <span className="index-row__meta">{lane.aka}</span>
        </div>
        <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>{lane.name}</h1>
        <p className="lede" style={{ marginTop: "0.75rem" }}>{lane.oneLiner}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
          <span className="chip">{lane.ranges.amount}</span>
          <span className="chip">{lane.ranges.term}</span>
          <span className="chip chip--brass">{lane.ranges.cost}</span>
          <span className="chip chip--pass">funds in {lane.ranges.speed}</span>
        </div>
      </Reveal>

      <div className="stack-lg" style={{ marginTop: "2.25rem" }}>
        <Reveal>
          <section className="card">
            <p className="section-label">say it like this</p>
            <blockquote className="rapport-quote">&ldquo;{lane.pitch}&rdquo;</blockquote>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <p className="section-label">mechanics — how it actually works</p>
            <div className="hairline-grid">
              {lane.mechanics.map((m) => (
                <div key={m} style={{ fontSize: "0.92rem", lineHeight: 1.55, color: "var(--bone)" }}>{m}</div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <section className="card">
              <p className="section-label" style={{ color: "var(--pass)" }}>route here when</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: 8 }}>
                {lane.bestFor.map((b) => (
                  <li key={b} style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "var(--bone-dim)" }}>{b}</li>
                ))}
              </ul>
            </section>
            <section className="card">
              <p className="section-label" style={{ color: "var(--fail)" }}>never route here when</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: 8 }}>
                {lane.avoidWhen.map((a) => (
                  <li key={a} style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "var(--bone-dim)" }}>{a}</li>
                ))}
              </ul>
            </section>
          </div>
        </Reveal>

        <Reveal>
          <section className="panel">
            <p className="section-label">docs to collect</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {lane.docs.map((d) => (
                <span key={d} className="chip">{d}</span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <Link href="/call" className="btn btn--primary">Route a live file →</Link>
        </Reveal>
      </div>
    </div>
  );
}
