import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES, industriesByCategory } from "@/data/industries";

export const metadata = { title: "Industries · Capital Infusion Playbook" };

export default function IndustriesIndex() {
  return (
    <div className="container page-pad">
      <Reveal>
        <p className="kicker">Discovery by industry</p>
        <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          Ask better questions.
        </h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Pick the business type. You will get a simple opener, four discovery
          questions, what to listen for, and when to slow down. No industry speech required.
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
                      <span className="index-row__meta">open questions <span aria-hidden>→</span></span>
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
