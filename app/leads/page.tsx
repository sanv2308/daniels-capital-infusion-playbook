import { LeadDesk } from "@/components/LeadDesk";

export default function LeadsPage() {
  return (
    <div className="container page-pad stack-lg">
      <header className="lead-page-head">
        <div>
          <p className="kicker">Daniel&apos;s prospect queue</p>
          <h1 className="h-display">25 calls. One next step.</h1>
          <p className="lede">Start with Priority A. Open one record, follow the script in order, and log the outcome before moving to the next business.</p>
        </div>
        <div className="rule-trace lead-page-rule">
          PUBLIC-SIGNAL PROSPECTING ONLY<br />Two sources per business · no approval inference · no private financial data
        </div>
      </header>
      <LeadDesk />
    </div>
  );
}
