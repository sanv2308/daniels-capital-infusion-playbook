import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadProgress } from "@/components/LeadProgress";
import {
  CAPITAL_INFUSION_CRITERIA_URL,
  CAPITAL_INFUSION_APPLICATION_URL,
  CLOSE_SCRIPT,
  emailFor,
  FOLLOW_UP_PLAN,
  leadById,
  LEADS,
  moneyUseQuestion,
  openerFor,
  QUALIFICATION_QUESTIONS,
  STOP_RULES,
  voicemailFor,
} from "@/data/leads";

export function generateStaticParams() {
  return LEADS.map((lead) => ({ id: lead.id.toLowerCase() }));
}

function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = leadById(id);
  if (!lead) notFound();

  const email = emailFor(lead);
  const mailto = lead.publicBusinessEmail
    ? `mailto:${lead.publicBusinessEmail}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`
    : undefined;

  return (
    <div className="container page-pad stack-lg">
      <nav className="lead-breadcrumb"><Link href="/leads">← All leads</Link><span>{lead.id}</span></nav>

      <header className="card lead-hero">
        <div>
          <div className="lead-hero__badges">
            <span className={`lead-priority lead-priority--${lead.priority.toLowerCase()}`}>Priority {lead.priority}</span>
            <span className="id-stamp">Outreach score {lead.outreachScore}/100</span>
            <span className="chip">Variant {lead.messageVariant}</span>
          </div>
          <h1>{lead.businessName}</h1>
          <p>{lead.industry} · {lead.city}, {lead.state}</p>
        </div>
        <div className="lead-hero__actions">
          {lead.publicBusinessPhone && <a className="btn btn--primary" href={telHref(lead.publicBusinessPhone)}><i className="ti ti-phone" /> Call {lead.publicBusinessPhone}</a>}
          {mailto && <a className="btn btn--ghost" href={mailto}><i className="ti ti-mail" /> Open assigned email</a>}
          {lead.website && <a className="btn btn--ghost" href={lead.website} target="_blank" rel="noreferrer"><i className="ti ti-world" /> Company site</a>}
        </div>
      </header>

      <section className="lead-now-grid">
        <div className="panel lead-next-step">
          <p className="section-label">Do this now</p>
          <ol>
            <li>Ask for the <strong>{lead.decisionMaker.toLowerCase()}</strong>.</li>
            <li>Read the opener exactly once, then stop talking.</li>
            <li>Ask the use-of-funds question and follow the money.</li>
            <li>Qualify conversationally. Do not collect sensitive documents here.</li>
            <li>Close only for the secure application and document-review next step.</li>
          </ol>
        </div>
        <div className="panel lead-signal-card">
          <p className="section-label">Why this business, why now</p>
          <p className="lead-signal-card__main">{lead.signalSummary}</p>
          <dl>
            <div><dt>Signal observed</dt><dd>{lead.signalDate}</dd></div>
            <div><dt>Public entity age</dt><dd>{lead.monthsInBusiness} months</dd></div>
            <div><dt>Likely conversation</dt><dd>{lead.fundingUse}</dd></div>
          </dl>
          <p className="lead-caution">Use this as timing context. Do not tell the prospect they were selected, pre-qualified, or approved.</p>
        </div>
      </section>

      <section className="grid-2" style={{ alignItems: "start" }}>
        <div className="stack">
          <article className="card lead-script">
            <p className="section-label">1 · opener — read this</p>
            <blockquote>&ldquo;{openerFor(lead)}&rdquo;</blockquote>
            <div className="rule-trace">Success = they answer with a real need, timing, or objection. Do not pitch over their first answer.</div>
          </article>

          <article className="card lead-script">
            <p className="section-label">2 · uncover — ask this next</p>
            <blockquote>&ldquo;{moneyUseQuestion(lead)}&rdquo;</blockquote>
            <ul className="lead-follow-questions">
              <li>What is driving that spend right now?</li>
              <li>What does waiting cost the business?</li>
              <li>What amount would actually solve it?</li>
            </ul>
          </article>

          <article className="card lead-script">
            <p className="section-label">No answer · voicemail</p>
            <blockquote>&ldquo;{voicemailFor(lead)}&rdquo;</blockquote>
            <p className="lead-caution">This uses Capital Infusion&apos;s published main line. Replace it only if Daniel has an approved direct business number.</p>
          </article>

          <article className="card lead-script">
            <p className="section-label">Assigned first email · variant {lead.messageVariant}</p>
            <p><strong>Subject:</strong> {email.subject}</p>
            <pre className="lead-email-copy">{email.body}</pre>
            {mailto ? <a className="btn btn--ghost" href={mailto}>Open this email →</a> : <p className="lead-caution">No public business email is available. Use the phone path only unless the company publishes another business contact.</p>}
          </article>
        </div>

        <div className="stack">
          <article className="panel">
            <p className="section-label">3 · lock — qualification sequence</p>
            <ol className="lead-checklist">
              {QUALIFICATION_QUESTIONS.map((question) => <li key={question}>{question}</li>)}
            </ol>
            <div className="rule-trace">
              Published starting benchmarks shown on Capital Infusion&apos;s site: 6+ months in business, business checking, $120K+ annual revenue, 600+ FICO, and four months of bank statements. Confirm current criteria—never infer them from the lead record.
            </div>
            <a className="inline-link" href={CAPITAL_INFUSION_CRITERIA_URL} target="_blank" rel="noreferrer">Verify current published criteria →</a>
          </article>

          <article className="panel">
            <p className="section-label">4 · common objections — stay calm</p>
            <div className="lead-objections">
              <details><summary>“Not interested.”</summary><p>“Understood. Before I close it out, is that because there is no current need, the timing is wrong, or financing cost is the concern?”</p></details>
              <details><summary>“Just send me information.”</summary><p>“Absolutely. So I send only what matters, what is the main use of funds and the rough amount you are considering?”</p></details>
              <details><summary>“We already have financing.”</summary><p>“That makes sense. Does it cover the entire business need, or are you comparing timing, payment structure, or additional capacity?”</p></details>
              <details><summary>“It will be too expensive.”</summary><p>“Fair. I would not recommend a structure unless the use of funds creates more value than its cost. What revenue, savings, or avoided delay would the capital support?”</p></details>
              <details><summary>“My credit is not perfect.”</summary><p>“Thank you for being direct. I cannot promise an outcome. A rough band is enough for this call—never an SSN—and we will compare it with the current published criteria.”</p></details>
            </div>
            <Link className="inline-link" href="/objections">Open the full objection desk →</Link>
          </article>

          <article className="card lead-script">
            <p className="section-label">5 · execute — close for the next step</p>
            <blockquote>&ldquo;{CLOSE_SCRIPT}&rdquo;</blockquote>
            <div className="lead-close-actions">
              <a className="btn btn--primary" href={CAPITAL_INFUSION_APPLICATION_URL} target="_blank" rel="noreferrer">Open official application page →</a>
              <Link className="btn btn--ghost" href={`/call?industry=${lead.industrySlug}&p=0`}>Run the full call workflow</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="grid-2" style={{ alignItems: "start" }}>
        <article className="panel">
          <p className="section-label">Follow-up cadence</p>
          <div className="lead-cadence">
            {FOLLOW_UP_PLAN.map(([day, action]) => <div key={day}><strong>{day}</strong><p>{action}</p></div>)}
          </div>
        </article>
        <article className="panel">
          <p className="section-label">Stop rules</p>
          <ul className="lead-stop-rules">{STOP_RULES.map((rule) => <li key={rule}>{rule}</li>)}</ul>
        </article>
      </section>

      <LeadProgress leadId={lead.id} />

      <section className="panel lead-evidence">
        <div className="module-kicker"><div><p>Audit trail</p><h2>Public evidence</h2></div><span className="chip chip--pass">Two-source check</span></div>
        <p>{lead.evidenceNote}</p>
        <div className="lead-evidence__links">
          <a href={lead.sourceUrls[0]} target="_blank" rel="noreferrer">Miami-Dade public business record →</a>
          <a href={lead.sourceUrls[1]} target="_blank" rel="noreferrer">Florida Sunbiz entity search →</a>
        </div>
        <p className="lead-caution">Public evidence establishes a prospecting signal only. It does not establish revenue, creditworthiness, ownership, bank activity, product fit, or approval.</p>
      </section>
    </div>
  );
}
