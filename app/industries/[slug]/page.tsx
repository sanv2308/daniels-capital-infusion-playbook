import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { INDUSTRIES, industryBySlug, CATEGORIES } from "@/data/industries";
import { discoveryGuideBySlug, UNIVERSAL_FOLLOW_UPS } from "@/data/discovery";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  return { title: industry ? `${industry.name} · Discovery Guide` : "Discovery Guide" };
}

export default async function IndustryDiscoveryGuide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  const guide = discoveryGuideBySlug(slug);
  if (!industry || !guide) notFound();

  const category = CATEGORIES.find((item) => item.id === industry.category);

  return (
    <div className="container page-pad discovery-page">
      <Reveal>
        <div className="discovery-breadcrumb">
          <Link href="/industries">← All industries</Link>
          <span className="id-stamp">{industry.code}</span>
          <span>{category?.name}</span>
        </div>
        <p className="kicker">Simple discovery guide</p>
        <h1 className="h-display discovery-title">{industry.name}</h1>
        <p className="lede discovery-lede">Do not try to sound like an industry expert. Ask one clear question, listen, and use their words.</p>
      </Reveal>

      <div className="stack-lg discovery-stack">
        <Reveal>
          <section className="card discovery-opener">
            <div className="discovery-step-number">1</div>
            <div>
              <p className="section-label">Start with this</p>
              <blockquote>&ldquo;{guide.opener}&rdquo;</blockquote>
              <p>Then stop talking. Let them explain the business in their own words.</p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="panel discovery-section">
            <div className="discovery-section__head">
              <div className="discovery-step-number">2</div>
              <div>
                <p className="section-label">Ask these one at a time</p>
                <h2>Discovery questions</h2>
              </div>
            </div>
            <ol className="discovery-question-list">
              {guide.questions.map((item) => (
                <li key={item.question}>
                  <p>{item.question}</p>
                  <span><b>Listen for:</b> {item.listenFor}</span>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section className="panel discovery-section">
            <div className="discovery-section__head">
              <div className="discovery-step-number">3</div>
              <div>
                <p className="section-label">When an answer matters</p>
                <h2>Follow the money</h2>
              </div>
            </div>
            <div className="discovery-followups">
              {UNIVERSAL_FOLLOW_UPS.map((question) => <p key={question}>&ldquo;{question}&rdquo;</p>)}
            </div>
            <div className="rule-trace">Do not ask all five like a checklist. Use only the next question that helps you understand the need.</div>
          </section>
        </Reveal>

        <Reveal>
          <section className="discovery-signal-grid">
            <article className="card discovery-signal discovery-signal--good">
              <p className="section-label">Good reasons to continue</p>
              <ul>{guide.goodSignals.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="card discovery-signal discovery-signal--slow">
              <p className="section-label">Slow down and ask more</p>
              <ul>{guide.slowDownSignals.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </section>
        </Reveal>

        <Reveal>
          <section className="card discovery-use-card">
            <div className="discovery-step-number">4</div>
            <div>
              <p className="section-label">Common funding needs</p>
              <div className="discovery-use-list">
                {industry.uses.slice(0, 5).map((use) => <span key={use}>{use}</span>)}
              </div>
              <p>These are prompts, not assumptions. Ask what they actually need before discussing a product.</p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="card discovery-next-step">
            <div>
              <p className="section-label">Your goal</p>
              <h2>Leave discovery with four facts.</h2>
              <p>What they need · how much · why now · how the business expects to repay it.</p>
            </div>
            <Link href={`/call?industry=${industry.slug}&p=0`} className="btn btn--primary">Use this in a live call →</Link>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
