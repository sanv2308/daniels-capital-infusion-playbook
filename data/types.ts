export type LaneId = "mca" | "term" | "loc" | "equipment" | "factoring" | "sba";

export type Tier = "A" | "B" | "C" | "D";

export interface Lane {
  id: LaneId;
  code: string; // stable ID, e.g. LN-1
  name: string;
  aka: string;
  oneLiner: string;
  mechanics: string[];
  bestFor: string[];
  avoidWhen: string[];
  pitch: string; // the exact talk track for "why this product"
  ranges: { amount: string; term: string; cost: string; speed: string };
  docs: string[];
}

export interface Objection {
  id: string; // e.g. OBJ-1
  claim: string;
  classLabel: string;
  acknowledge: string;
  reframe: string;
  close: string;
  fallback: string;
}

export interface IndustryObjection {
  claim: string;
  acknowledge: string;
  reframe: string;
  close: string;
}

export interface Industry {
  slug: string;
  code: string; // stable ID, e.g. TRK
  name: string;
  category: string;
  tier: Tier;
  verified: boolean;
  verifiedNote?: string;
  hero: string;
  rapport: string;
  seasonal: string;
  pains: { label: string; ask: string }[];
  quals: { q: string; read: string }[];
  uses: string[];
  laneBias: { lane: LaneId; when: string }[];
  dealMath: {
    scenario: string;
    monthlyRevenue: number;
    offer: number;
    factor: number;
    termDays: number;
    note: string;
  };
  objections: IndustryObjection[];
  redFlags: string[];
  renewal: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface PulsePhase {
  letter: string;
  name: string;
  sub: string;
  goal: string;
  moves: string[];
  exitWhen: string;
}

export interface DispositionCode {
  code: string;
  name: string;
  meaning: string;
  nextAction: string;
  cadence: string;
}

export type LeadPriority = "A" | "B";

export type LeadStatus =
  | "Not Contacted"
  | "Attempted"
  | "Connected"
  | "Follow-Up"
  | "Application"
  | "Won"
  | "Not a Fit"
  | "Do Not Contact";

export interface ProspectLead {
  id: string;
  businessName: string;
  industry: string;
  industrySlug: string;
  city: string;
  state: string;
  priority: LeadPriority;
  outreachScore: number;
  messageVariant: "A" | "B";
  website?: string;
  publicBusinessEmail?: string;
  publicBusinessPhone?: string;
  signalDate: string;
  monthsInBusiness: number;
  decisionMaker: string;
  fundingUse: string;
  signalSummary: string;
  evidenceNote: string;
  sourceUrls: [string, string];
}
