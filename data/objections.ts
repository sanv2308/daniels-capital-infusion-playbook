import type { Objection } from "./types";

// The universal ARC matrix — every objection class a capital-infusion
// rep hears, each with the deterministic Acknowledge → Reframe → Close
// track and one fallback if the close doesn't land. Industry-specific
// signature objections live on each industry dossier.

export const OBJECTIONS: Objection[] = [
  {
    id: "OBJ-1",
    classLabel: "price",
    claim: "The rate is too high.",
    acknowledge:
      "You're right that this costs more than a bank — I won't pretend otherwise.",
    reframe:
      "But the bank isn't on the table this week, and the real question is never the rate — it's what the money makes you. If $40k of inventory turns into $60k of sales this quarter, the cost of capital is a line item, not a verdict. Cost of doing nothing has a rate too.",
    close:
      "Walk me through what you'd deploy this into, and let's do the return math together right now. If the numbers don't beat the cost, I'll tell you not to take it.",
    fallback:
      "Offer the smaller-but-cheaper structure: shrink the offer or stretch the term to drop the daily burden, and anchor the renewal path — 'take the starter size, perform 60 days, and your renewal prices better.'",
  },
  {
    id: "OBJ-2",
    classLabel: "timing",
    claim: "Now isn't a good time / call me next month.",
    acknowledge: "Totally fair — you know your calendar better than I do.",
    reframe:
      "Here's the thing though: approvals are based on your last 3 months of deposits. Right now your statements qualify you. If next month is slower — and you just told me the season's turning — the offer shrinks with it. You lock capital when the statements are strong, not when the need is desperate.",
    close:
      "Let's get you approved now with no obligation to take it — the approval is free and it holds. Then when you're ready, the money is a signature away instead of a scramble.",
    fallback:
      "Book a dated callback tied to their trigger event ('the week your slow season starts') and log D4 — a callback without a date and reason is a lost deal.",
  },
  {
    id: "OBJ-3",
    classLabel: "trust",
    claim: "I got burned by one of these before.",
    acknowledge:
      "I believe you — this industry has cowboys, and stacking a business into the ground is real. I'm not going to defend whoever did that to you.",
    reframe:
      "What burned you was almost certainly the burden, not the product — a payment sized for the lender's commission instead of your deposits. We size differently: I'll show you the payment as a percentage of your daily deposits before you sign anything, and if it's above the line we don't do the deal.",
    close:
      "Let me run your last three statements through that math and show you the number. If you don't like what you see, you've lost nothing but ten minutes.",
    fallback:
      "Offer references or a smaller test structure. Log the prior lender's name — buyout of a bad position is often the real deal hiding here.",
  },
  {
    id: "OBJ-4",
    classLabel: "no-need",
    claim: "I don't need money right now.",
    acknowledge: "Good — honestly, that's the best time to be talking.",
    reframe:
      "Capital is cheapest and easiest to get exactly when you don't need it. When the truck blows a transmission or the big order lands, you don't want to be shopping for money with a deadline — that's how owners end up in the bad deals we just talked about.",
    close:
      "Let's set up a line of credit — costs nothing to have, sits at zero balance, and you draw only if the day comes. Think of it as a fire extinguisher.",
    fallback:
      "Downshift to intel: 'What would have to happen in the business for capital to be useful — big order, equipment, a location?' Log the trigger, set the cadence, D5.",
  },
  {
    id: "OBJ-5",
    classLabel: "spouse-partner",
    claim: "I need to talk to my partner / spouse / accountant.",
    acknowledge:
      "As you should — nobody serious signs a capital decision solo.",
    reframe:
      "What usually kills these conversations isn't the partner saying no — it's the details getting garbled secondhand. Your accountant is going to ask three questions: total payback, payment size, and what it's for. Let's make sure you walk in with exact answers instead of ballparks.",
    close:
      "Better yet — get them on a three-way call for ten minutes and I'll take their hardest questions directly. When can the three of us talk today or tomorrow?",
    fallback:
      "Send the one-page terms summary immediately while on the phone ('check your email — that's everything they'll ask'), set a dated callback within 48h, D4.",
  },
  {
    id: "OBJ-6",
    classLabel: "shopping",
    claim: "I'm getting other offers / already working with someone.",
    acknowledge: "Smart. You should compare — this is real money.",
    reframe:
      "When you compare, compare three numbers, not the pitch: total payback dollars, payment per day, and what happens if you have a slow week. Most offers hide in the second and third. I'll put ours in exactly those terms on one page.",
    close:
      "Get their offer in writing and put it next to mine — if theirs is genuinely better I'll tell you to take it, and you'll remember that the next time you need capital. What did they quote you as total payback?",
    fallback:
      "If they won't share terms, plant the landmine questions: 'Ask them the total payback dollars and whether the daily draft changes in a slow week.' Set 24–48h callback, D4.",
  },
  {
    id: "OBJ-7",
    classLabel: "send-info",
    claim: "Just send me some information.",
    acknowledge: "Happy to — I'll email you a one-pager today.",
    reframe:
      "But generic info can't tell you the only two numbers that matter: what YOU qualify for and what it would cost YOU. That takes your last three bank statements and about ten minutes, and it doesn't obligate you to anything.",
    close:
      "Let's do this: I send the overview now, you send the statements, and by tomorrow you're looking at your actual numbers instead of a brochure. Fair?",
    fallback:
      "Send info with ONE specific insight about their industry baked in (from the dossier hero stat) so the follow-up call has a hook. Dated callback, D4 — 'send info' with no next step is D7 in disguise.",
  },
  {
    id: "OBJ-8",
    classLabel: "bank",
    claim: "My bank will give me a better rate.",
    acknowledge:
      "If your bank approves you, take it — I mean that. Bank money is cheaper than mine.",
    reframe:
      "But here's what I see every week: the bank takes six weeks to say no. They want 700+ credit, two years of returns, collateral, and they still decline most small-business applications. The question isn't bank versus me — it's whether you can afford the six-week maybe.",
    close:
      "Run both: apply at the bank, and let me get you approved in parallel — no cost, no obligation. If the bank comes through, cancel mine and I'll congratulate you. If they don't, you haven't lost the six weeks.",
    fallback:
      "Position the SBA lane: 'If you're bank-grade, let's aim you at SBA money — I can run that too, and bridge the gap short-term only if you want it.'",
  },
];
