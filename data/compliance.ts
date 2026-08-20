// Layer-4 adjacent guardrails: what a rep may and may not say.
// Not legal advice — the operating floor for scripts in this playbook.

export interface LanguageRule {
  id: string;
  never: string;
  instead: string;
  why: string;
}

export const LANGUAGE_RULES: LanguageRule[] = [
  {
    id: "LR-1",
    never: "Call a revenue-based advance a 'loan', or its cost an 'interest rate'",
    instead: "'Purchase of future receivables' · 'factor rate' · 'total payback'",
    why: "An MCA is legally a sale, not a loan. Calling it a loan invites usury exposure and can void the contract's legal basis.",
  },
  {
    id: "LR-2",
    never: "Quote or improvise an APR for an advance",
    instead: "Quote total payback dollars and the daily/weekly payment. Where state law requires APR-style disclosure, the disclosure document carries it — not your math.",
    why: "Converted-APR improvisation is the #1 source of misrepresentation claims — and several states now prescribe the exact calculation.",
  },
  {
    id: "LR-3",
    never: "Say 'guaranteed approval', 'pre-approved', or promise funding before underwriting",
    instead: "'Based on what you've told me, you fit the profile we fund' — conditional, always.",
    why: "UDAP (deceptive practices) exposure; also destroys trust when underwriting comes back different.",
  },
  {
    id: "LR-4",
    never: "Advise on taxes, or tell a client to stop paying an existing lender",
    instead: "'Ask your accountant about Section 179' · consolidation handled by payoff at funding, never by induced default.",
    why: "Tortious interference and unauthorized tax advice — both are lawsuits with your name in them.",
  },
  {
    id: "LR-5",
    never: "Contact a lead who asked to be removed, or spoof caller ID",
    instead: "Mark D8 same minute. It's permanent.",
    why: "TCPA damages run per call. One angry lead with a lawyer outweighs a year of commissions.",
  },
];

export interface StateRule {
  state: string;
  law: string;
  effective: string;
  gist: string;
  repImpact: string;
}

// Commercial financing disclosure landscape — verify current status
// with compliance before quoting; legislatures move.
export const STATE_RULES: StateRule[] = [
  {
    state: "California",
    law: "SB 1235 (Commercial Financing Disclosure)",
    effective: "Dec 2022",
    gist: "APR-style disclosures required on commercial financing offers under $500k, including MCAs.",
    repImpact: "The disclosure doc carries the calculated APR. Never contradict it verbally; present total payback and payment, then point to the disclosure.",
  },
  {
    state: "New York",
    law: "CFDL (Commercial Finance Disclosure Law)",
    effective: "Aug 2023",
    gist: "Disclosure regime similar to CA for financing under $2.5M — APR, finance charge, payment amounts.",
    repImpact: "Same discipline as CA. NY AG actively enforces against MCA abuse — burden honesty is not optional here.",
  },
  {
    state: "Utah",
    law: "Commercial Financing Registration Act",
    effective: "Jan 2023",
    gist: "Registration with the state + disclosures (no APR requirement).",
    repImpact: "Your funder must be registered — confirm before submitting Utah files.",
  },
  {
    state: "Virginia",
    law: "Sales-Based Financing Act (HB 1027)",
    effective: "Jul 2022",
    gist: "Registration + disclosure for sales-based financing; bans certain fee practices.",
    repImpact: "Disclosure pack required at offer. Check broker-fee treatment on VA files.",
  },
  {
    state: "Georgia",
    law: "SB 90 disclosure requirements",
    effective: "Jan 2024",
    gist: "Disclosures on commercial financing under $500k.",
    repImpact: "Standard disclosure discipline; confirm funder provides GA-compliant docs.",
  },
  {
    state: "Florida",
    law: "Commercial Financing Disclosure Law (HB 1353)",
    effective: "Jan 2024",
    gist: "Disclosure requirements + broker restrictions on commercial financing under $500k.",
    repImpact: "Home-state rules for many shops: disclosure at specific-offer time, broker fee transparency.",
  },
  {
    state: "Connecticut",
    law: "SB 1032",
    effective: "Jul 2024",
    gist: "Disclosure + registration for sales-based financing.",
    repImpact: "Registered-provider check before submitting CT files.",
  },
  {
    state: "Kansas",
    law: "Commercial Financing Disclosure Act",
    effective: "Jul 2024",
    gist: "Disclosure requirements, no APR mandate.",
    repImpact: "Lighter regime — still: quote payback dollars, let docs disclose.",
  },
];
