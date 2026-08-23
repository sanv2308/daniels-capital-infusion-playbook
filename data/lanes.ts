import type { Lane } from "./types";

export const LANES: Lane[] = [
  {
    id: "mca",
    code: "LN-1",
    name: "Revenue-Based Advance",
    aka: "MCA / merchant cash advance",
    oneLiner: "We purchase a slice of future receivables at a discount. Approval rides on deposits, not credit. Fastest money on the menu.",
    mechanics: [
      "Purchase of future receivables — NOT a loan; never call it one",
      "Priced as a factor rate (e.g. 1.28–1.45), not an interest rate",
      "Repaid by fixed daily or weekly ACH debits from the business account",
      "Underwritten on 3–6 months of bank statements; FICO is a modifier, not a gate",
      "Funds in 24–72 hours from signed contracts",
    ],
    bestFor: [
      "Credit under 680 with real deposit volume",
      "Urgent needs — repair, payroll, opportunity buy with a deadline",
      "Young files (6–24 months TIB) other lanes won't touch",
      "Businesses with daily card/cash flow (restaurants, retail, services)",
    ],
    avoidWhen: [
      "PBR comes back red — a payment they can't carry is a default you caused",
      "3+ open positions — stacking past that is how businesses die",
      "The need is long-payoff (real estate, major expansion) — factor cost compounds against them",
      "They qualify for term/LOC and aren't in a hurry — route honest, keep the client for life",
    ],
    pitch:
      "Based on your deposits, we can purchase a piece of your future revenue — you get the lump sum this week, and it collects as a small fixed daily amount. No collateral, and your credit score isn't the decision-maker. Your bank statements are.",
    ranges: { amount: "$10k – $500k", term: "60 – 260 business days", cost: "factor 1.20 – 1.49", speed: "24–72 hrs" },
    docs: ["3–6 mo bank statements", "Driver's license", "Voided check", "Signed application"],
  },
  {
    id: "term",
    code: "LN-2",
    name: "Term Loan",
    aka: "short/mid-term business loan",
    oneLiner: "A real loan: fixed amount, fixed term, monthly or weekly payment. Cheaper than an advance, needs a cleaner file.",
    mechanics: [
      "True loan with an interest rate — amortized over 6 months to 5 years",
      "Monthly (sometimes weekly) payments, dramatically lower daily burden than MCA",
      "Underwritten on credit (usually 660+), revenue, and time in business (2yr+ preferred)",
      "Often used to consolidate an MCA stack into one lower payment",
      "Funds in 3–10 business days",
    ],
    bestFor: [
      "Credit 660+ with 2+ years in business",
      "Consolidating existing positions into one payment",
      "Planned spends: buildout, marketing ramp, hiring wave",
      "Owners who ask about cost — this is your price-competitive lane",
    ],
    avoidWhen: [
      "They need money this week — term underwriting won't beat an MCA clock",
      "TIB under 18–24 months — most term lenders decline, don't burn the pull",
      "Revenue is erratic month-to-month — fixed monthly payments punish lumpy cash flow",
    ],
    pitch:
      "Your file is strong enough that you don't need to pay advance pricing. We can structure a fixed term loan — one predictable payment, a real interest rate, and it can also roll your current balances into one cheaper position.",
    ranges: { amount: "$25k – $750k", term: "6 mo – 5 yrs", cost: "9% – 36% APR", speed: "3–10 days" },
    docs: ["6 mo bank statements", "Most recent tax return", "P&L (sometimes)", "Debt schedule if consolidating"],
  },
  {
    id: "loc",
    code: "LN-3",
    name: "Line of Credit",
    aka: "revolving business LOC",
    oneLiner: "A standing limit they draw against and pay interest only on what's out. The 'never sweat payroll again' product.",
    mechanics: [
      "Revolving: draw, repay, redraw — interest only on drawn balance",
      "Limits $10k–$250k typical; weekly or monthly repayment on draws",
      "Underwritten on revenue consistency + credit (usually 640+); seasoning matters",
      "Setup in about a week; then instant draws forever after",
      "The stickiest product — a business with your LOC never shops your competitors",
    ],
    bestFor: [
      "Recurring, predictable gaps: inventory cycles, seasonal payroll, AR timing",
      "Good-credit owners who refuse lump-sum debt they don't need yet",
      "The 'I don't need money right now' objection — perfect standing answer",
    ],
    avoidWhen: [
      "One-time large spend — a term structure prices better",
      "Credit under 620 or under 12 months TIB — approval odds too thin, route MCA",
      "They will max it day one and treat it as a term loan — burden math breaks",
    ],
    pitch:
      "Instead of taking a lump sum you may not need all of, we set a standing limit. You draw only when the gap shows up — payroll week, big inventory buy — and you pay only on what you use. It costs you nothing to have it ready.",
    ranges: { amount: "$10k – $250k limit", term: "revolving, 6–12 mo draws", cost: "12% – 30% APR on draws", speed: "5–10 days" },
    docs: ["6 mo bank statements", "Credit pull", "Sometimes tax return above $100k"],
  },
  {
    id: "equipment",
    code: "LN-4",
    name: "Equipment Financing",
    aka: "equipment loan / lease",
    oneLiner: "The machine collateralizes its own purchase. Weak credit still funds because the lender can repossess steel.",
    mechanics: [
      "Loan or lease secured by the specific equipment — truck, oven, laser, lift",
      "Terms 2–7 years matched to equipment life; monthly payments",
      "Collateral-first underwriting: 550 FICO can still fund with a strong asset",
      "Often 0–20% down; Section 179 lets them write off the full purchase year one",
      "Vendor invoice or quote drives the deal — lender often pays vendor direct",
    ],
    bestFor: [
      "Any 'I need a truck / oven / lift / laser / scanner' conversation",
      "Weak-credit files with a concrete asset need — the lane that says yes",
      "Preserving cash: finance the machine, keep working capital for operations",
    ],
    avoidWhen: [
      "The 'equipment' is soft (software, fixtures with no resale) — collateral logic fails",
      "Used equipment older than ~10 years — most lenders cap collateral age",
      "The real need is working capital wearing an equipment costume — route honest",
    ],
    pitch:
      "Don't drain your operating cash on a machine. The equipment secures its own financing — we can often do this even when other products decline, and your accountant will love the Section 179 write-off.",
    ranges: { amount: "$10k – $1M+", term: "2 – 7 yrs", cost: "7% – 25% APR", speed: "2–7 days" },
    docs: ["Equipment quote/invoice", "3 mo bank statements", "Application", "Sometimes financials above $250k"],
  },
  {
    id: "factoring",
    code: "LN-5",
    name: "Invoice Factoring",
    aka: "AR financing / receivables purchase",
    oneLiner: "We buy their unpaid B2B invoices at a small discount. Their customer's credit matters, not theirs.",
    mechanics: [
      "Sells outstanding invoices for 80–95% advance now; balance minus fee when the debtor pays",
      "Fees run 1–5% per 30 days outstanding",
      "Underwrites the DEBTOR (their customer), so terrible-credit clients still fund",
      "Recourse vs non-recourse: who eats it if the debtor never pays — know which you're selling",
      "Natural fit wherever net-30/60/90 terms exist: trucking, staffing, manufacturing, wholesale",
    ],
    bestFor: [
      "B2B businesses waiting 30–90 days on invoices from creditworthy customers",
      "Credit-wrecked owners with strong customers — the ultimate workaround lane",
      "Growth so fast that AR always outruns cash",
    ],
    avoidWhen: [
      "B2C revenue (restaurants, salons) — there are no invoices to factor",
      "Debtor concentration is extreme AND that debtor is shaky",
      "They're already factoring — you're negotiating a buyout, different conversation",
    ],
    pitch:
      "You've already earned this money — it's just sitting in someone else's accounts payable. We advance you most of it now, your customer pays us on their normal schedule, and you stop financing their float for free.",
    ranges: { amount: "up to 95% of AR", term: "rolls with invoices", cost: "1–5% per 30 days", speed: "24–48 hrs after setup" },
    docs: ["AR aging report", "Sample invoices", "Customer list", "Bank statements"],
  },
  {
    id: "sba",
    code: "LN-6",
    name: "SBA Loan",
    aka: "SBA 7(a) / Express",
    oneLiner: "Government-guaranteed bank money — the cheapest capital in the market, and the slowest. The patience play.",
    mechanics: [
      "Bank loan with a federal guarantee — rates near prime + 2–4%",
      "Terms up to 10 years working capital, 25 years real estate",
      "Full underwriting: 2+ years TIB, 680+ credit, tax returns, financials, sometimes collateral",
      "30–90 day process; Express variants faster but smaller",
      "The 'here's the endgame' product — position it as where you're taking the client",
    ],
    bestFor: [
      "Strong files with no urgency — acquisitions, real estate, big expansions",
      "Refinancing expensive debt into decade-long cheap money",
      "Anchoring trust: showing the client the path from advance → term → SBA",
    ],
    avoidWhen: [
      "Any urgency at all — 30–90 days minimum",
      "Credit under 680, TIB under 2 years, or unfiled taxes — hard gates",
      "Prior government-loan default (student loans count) — automatic problem",
    ],
    pitch:
      "You're the kind of file banks fight over — let's get you government-backed pricing. It takes longer, so many clients take a short-term structure now for the immediate need and we run the SBA in parallel to refinance it cheap.",
    ranges: { amount: "$50k – $5M", term: "10 – 25 yrs", cost: "prime + 2–4%", speed: "30–90 days" },
    docs: ["3 yrs business + personal tax returns", "YTD P&L + balance sheet", "Debt schedule", "PFS", "Sometimes collateral docs"],
  },
];

export const laneById = (id: string) => LANES.find((l) => l.id === id);
