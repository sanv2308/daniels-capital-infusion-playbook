import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES, industriesByCategory } from "@/data/industries";

export const metadata = { title: "Industries · Capital Infusion Playbook" };

export default function IndustriesIndex() {
  return (
    <div className="container page-pad">
      <Reveal>
        <p className="kicker">layer 1 · context</p>
        <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          Industry dossiers
        </h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Who you&apos;re talking to colors everything else: the tier feeds the gates
          and the burden ceiling, the bias hints the router, and the scripts are
          written in their language. Sound like you grew up in their business.
        </p>
      </Reveal>

      <div className="stack-lg" style={{ marginTop: "2.5rem" }}>
        {CATEGORIES.map((cat, ci) => {
          const inds = industriesByCategory(cat.id);
          return (
            <Reveal key={cat.id} i={ci % 3}>
              <section>
                <p className="section-label">{cat.name}</p>
                <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
                  {inds.map((ind) => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`} className="index-row">
                      <span className="id-stamp">{ind.code}</span>
                      <span className="index-row__name">{ind.name}</span>
                      <span className="index-row__meta" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        {ind.verified && <span className="chip chip--pass">researched</span>}
                        <span>tier {ind.tier}</span>
                        <span aria-hidden>→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
