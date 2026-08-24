export interface DiscoveryQuestion {
  question: string;
  listenFor: string;
}

export interface DiscoveryGuide {
  opener: string;
  questions: DiscoveryQuestion[];
  goodSignals: string[];
  slowDownSignals: string[];
}

export const UNIVERSAL_FOLLOW_UPS = [
  "What are you trying to pay for?",
  "Why does it need to happen now?",
  "Roughly how much would solve it?",
  "What happens if you wait?",
  "When would the money you spend come back into the business?",
];

export const DISCOVERY_GUIDES: Record<string, DiscoveryGuide> = {
  construction: {
    opener: "Are you trying to start or finish a job that is tying up cash right now?",
    questions: [
      { question: "What job are you trying to start or keep moving?", listenFor: "A real signed job, not a vague future opportunity." },
      { question: "What has to be paid before your next customer draw arrives?", listenFor: "Materials, payroll, permits, insurance, or equipment." },
      { question: "When should the next draw or customer payment land?", listenFor: "A clear repayment event and a realistic date." },
      { question: "How much cash closes the gap without overfunding it?", listenFor: "A specific amount tied to the job budget." },
    ],
    goodSignals: ["Signed work and a known payment schedule", "Capital directly starts or protects a profitable job"],
    slowDownSignals: ["No contract or no clear customer payment", "One customer controls nearly all revenue"],
  },
  roofing: {
    opener: "Do you have approved jobs you could start faster with more material or crew money?",
    questions: [
      { question: "How many approved jobs are waiting to start?", listenFor: "Real jobs with addresses, contracts, or approved claims." },
      { question: "What do you need first: material, labor, trucks, or marketing?", listenFor: "One clear use of funds." },
      { question: "How long are insurance or customer payments taking?", listenFor: "A known delay rather than disputed money." },
      { question: "How many extra jobs would the capital let you complete?", listenFor: "A believable revenue result." },
    ],
    goodSignals: ["Approved jobs and a defined payment source", "Capital captures work that would otherwise be turned away"],
    slowDownSignals: ["Disputed insurance claims", "No stable address, license, or operating history"],
  },
  hvac: {
    opener: "Are you turning away service or install work because you need equipment, inventory, trucks, or another technician?",
    questions: [
      { question: "What work are you unable to take today?", listenFor: "Existing demand, not hoped-for demand." },
      { question: "What would let you take it: units, parts, a truck, tools, or payroll?", listenFor: "A specific bottleneck." },
      { question: "Is most revenue service calls, installs, or maintenance plans?", listenFor: "How steady deposits are month to month." },
      { question: "How quickly would the new capacity begin billing?", listenFor: "A short, explainable payback period." },
    ],
    goodSignals: ["Booked work or a real backlog", "Recurring service or maintenance revenue"],
    slowDownSignals: ["No licensed staff for the proposed work", "Funding is meant only to cover continuing losses"],
  },
  plumbing: {
    opener: "Are you booked out far enough that another truck, technician, or parts inventory would create more revenue?",
    questions: [
      { question: "How far out are you booked?", listenFor: "Demand the current team cannot serve quickly." },
      { question: "What is the current bottleneck: truck, technician, equipment, or parts?", listenFor: "One fixable capacity problem." },
      { question: "What does one active truck produce in a normal month?", listenFor: "Enough added revenue to support the new cost." },
      { question: "How soon could the new truck or technician begin taking calls?", listenFor: "A realistic start date." },
    ],
    goodSignals: ["Calls are being delayed or turned away", "A new truck or tech has measurable revenue capacity"],
    slowDownSignals: ["No technician available to operate new capacity", "Major licensing or insurance problems"],
  },
  electrical: {
    opener: "Do you have jobs waiting on material, equipment, permits, or payroll?",
    questions: [
      { question: "What job or service work is the money connected to?", listenFor: "A specific project or backlog." },
      { question: "What must be purchased or paid before billing the customer?", listenFor: "Material, payroll, permits, lifts, or testing gear." },
      { question: "When will the customer payment arrive?", listenFor: "A known milestone or invoice date." },
      { question: "What gross profit should the funded work create?", listenFor: "Enough margin to justify the financing cost." },
    ],
    goodSignals: ["Signed projects with clear billing milestones", "Capital buys material or capacity tied to revenue"],
    slowDownSignals: ["No permit or license for claimed work", "The job margin cannot comfortably cover financing"],
  },
  landscaping: {
    opener: "Are new contracts or seasonal work creating a need for equipment, crews, or upfront material?",
    questions: [
      { question: "Is the growth coming from recurring contracts or one-time jobs?", listenFor: "Reliable monthly contracts are strongest." },
      { question: "What is stopping you from taking more work?", listenFor: "Mowers, trucks, crews, material, or working capital." },
      { question: "How much monthly revenue is already under contract?", listenFor: "A stable baseline that supports payments." },
      { question: "When does the busy season begin and end?", listenFor: "A payment plan that fits seasonality." },
    ],
    goodSignals: ["Signed recurring maintenance contracts", "Equipment immediately adds route capacity"],
    slowDownSignals: ["No work scheduled beyond the current month", "Payment would continue deep into the slow season"],
  },
  "construction-supply": {
    opener: "Are customers asking for inventory or equipment you cannot stock fast enough?",
    questions: [
      { question: "What products are selling faster than you can restock them?", listenFor: "Known SKUs with proven demand." },
      { question: "How long is cash tied up from supplier payment to customer collection?", listenFor: "A clear inventory or receivables cycle." },
      { question: "Do contractors pay at purchase or on terms?", listenFor: "How quickly funded inventory turns back into cash." },
      { question: "What purchase order or inventory buy is in front of you now?", listenFor: "A specific, time-sensitive opportunity." },
    ],
    goodSignals: ["Fast-moving inventory with known margins", "Purchase orders or repeat contractor demand"],
    slowDownSignals: ["Old inventory is already sitting unsold", "One customer represents most sales"],
  },
  trucking: {
    opener: "Is cash getting tight between paying for the load and getting paid for the load?",
    questions: [
      { question: "What is the biggest cash pressure today: fuel, repairs, insurance, or slow broker payments?", listenFor: "One immediate operating need." },
      { question: "How many trucks are running and how many are down?", listenFor: "Whether funding restores or adds earning capacity." },
      { question: "How long are brokers or shippers taking to pay?", listenFor: "A predictable receivables gap." },
      { question: "What would the capital keep moving or put back on the road?", listenFor: "A truck, route, or load tied to revenue." },
    ],
    goodSignals: ["Active trucks, regular loads, and clear receivables", "Repair money puts a revenue-producing truck back to work"],
    slowDownSignals: ["Authority, insurance, or registration problems", "No consistent loads or deposits"],
  },
  logistics: {
    opener: "Are you paying carriers before your customers pay you?",
    questions: [
      { question: "How large is the gap between carrier payment and customer payment?", listenFor: "A recurring, measurable working-capital gap." },
      { question: "How much approved customer receivables are outstanding now?", listenFor: "Real invoices from creditworthy customers." },
      { question: "Are any customers or invoices disputed?", listenFor: "Only clean receivables should support the story." },
      { question: "What additional volume could you book with more carrier-pay capacity?", listenFor: "Specific customers or loads ready to move." },
    ],
    goodSignals: ["Clean B2B invoices and reliable customers", "Capital directly increases load volume"],
    slowDownSignals: ["Disputed invoices", "A single customer controls most receivables"],
  },
  restaurant: {
    opener: "Is there something in the restaurant you need to buy, repair, or open before it starts costing sales?",
    questions: [
      { question: "What is the money for: equipment, inventory, buildout, payroll, or a new location?", listenFor: "One urgent use, not a general cash shortage." },
      { question: "What is that issue costing you each week?", listenFor: "Lost covers, closed hours, slower service, or missed opening revenue." },
      { question: "How are weekly sales trending right now?", listenFor: "Stable or improving deposits." },
      { question: "How soon would the purchase or repair begin producing sales?", listenFor: "A near-term return." },
    ],
    goodSignals: ["Stable sales and a fix tied directly to more capacity", "Equipment replacement prevents lost revenue"],
    slowDownSignals: ["Ongoing losses with no operational fix", "Unpaid taxes, rent disputes, or repeated overdrafts"],
  },
  bars: {
    opener: "Is the business losing sales because of inventory, equipment, staffing, or a needed renovation?",
    questions: [
      { question: "What would you change first if the money were available?", listenFor: "A practical revenue or cost improvement." },
      { question: "Which nights carry the business, and which are weak?", listenFor: "Whether revenue is stable enough for payments." },
      { question: "How much of sales reaches the business bank account?", listenFor: "Deposits that match the reported operation." },
      { question: "What would the funded change add in weekly sales?", listenFor: "A believable, measurable result." },
    ],
    goodSignals: ["Consistent card deposits", "Capital fixes capacity or supports a proven event calendar"],
    slowDownSignals: ["License or landlord trouble", "Reported cash sales do not appear in deposits"],
  },
  hotels: {
    opener: "Is a repair, room refresh, or seasonal expense holding back bookings or room rates?",
    questions: [
      { question: "What property work is most urgent right now?", listenFor: "Rooms offline, deferred maintenance, or a defined renovation phase." },
      { question: "How many rooms are affected and what are they worth per night?", listenFor: "A measurable revenue impact." },
      { question: "What are occupancy and room rates doing this season?", listenFor: "Enough cash flow and a clear seasonal pattern." },
      { question: "When would the repaired or refreshed rooms return to service?", listenFor: "A realistic completion and revenue date." },
    ],
    goodSignals: ["Capital puts rooms back into sellable inventory", "Clear renovation budget and completion schedule"],
    slowDownSignals: ["Franchise, insurance, or mortgage problems", "No plan or contractor for the proposed work"],
  },
  spa: {
    opener: "Are you trying to add a service, device, room, or provider that customers are already asking for?",
    questions: [
      { question: "What service or capacity are clients asking for?", listenFor: "Existing demand, waitlists, or referrals." },
      { question: "What exactly is needed: device, room, inventory, training, or staff?", listenFor: "A complete and realistic project." },
      { question: "What would each treatment sell for and how many could you book?", listenFor: "Simple revenue math that supports the purchase." },
      { question: "Who is licensed and ready to deliver the service?", listenFor: "The service can start without a staffing or compliance gap." },
    ],
    goodSignals: ["Existing client demand and qualified providers", "A device or room has simple break-even math"],
    slowDownSignals: ["No licensed provider or medical oversight where required", "Existing equipment is already underused"],
  },
  salons: {
    opener: "Are you short on chairs, stylists, equipment, inventory, or space for the demand you already have?",
    questions: [
      { question: "What is limiting growth right now?", listenFor: "A real shortage of chairs, people, inventory, or space." },
      { question: "How many chairs are full on a normal busy day?", listenFor: "Whether new capacity would actually be used." },
      { question: "Is the shop booth-rent or commission based?", listenFor: "How revenue reaches the business." },
      { question: "What would the new chair, stylist, or space add each month?", listenFor: "A believable revenue increase." },
    ],
    goodSignals: ["Full chairs, waitlists, or stylists ready to start", "Expansion has clear lease and buildout terms"],
    slowDownSignals: ["Many empty chairs and weak demand", "Landlord or worker-classification problems"],
  },
  gyms: {
    opener: "Is equipment, buildout, or member growth the biggest need right now?",
    questions: [
      { question: "What is the first thing members or prospects notice needs improvement?", listenFor: "Equipment, space, amenities, or a specific retention problem." },
      { question: "How many active paying members do you have today?", listenFor: "A stable recurring-revenue base." },
      { question: "Are memberships growing, flat, or shrinking?", listenFor: "Capital should support growth or a fix—not hide churn." },
      { question: "How would the investment improve joins, retention, or monthly revenue?", listenFor: "One measurable business result." },
    ],
    goodSignals: ["Stable recurring memberships", "Equipment or buildout solves a clear capacity problem"],
    slowDownSignals: ["High churn with no retention plan", "Lease uncertainty"],
  },
  "auto-repair": {
    opener: "Are you turning away or subletting profitable work because the shop needs equipment, parts, space, or another technician?",
    questions: [
      { question: "What work are you turning away or sending elsewhere?", listenFor: "Existing jobs and lost margin." },
      { question: "What would bring that work in-house?", listenFor: "A specific lift, scanner, calibration rig, parts buy, bay, or technician." },
      { question: "How many jobs a month would that add?", listenFor: "Simple revenue math." },
      { question: "How quickly could the equipment or added capacity start billing?", listenFor: "A short path to cash flow." },
    ],
    goodSignals: ["Existing customer demand and work currently sublet", "Equipment has clear job volume and payback"],
    slowDownSignals: ["No qualified technician for the proposed work", "Environmental, insurance, or landlord problems"],
  },
  "medical-dental": {
    opener: "Is equipment, staffing, or a room buildout limiting the patients you can see?",
    questions: [
      { question: "What patient demand can the practice not handle today?", listenFor: "Waitlists, referrals, or procedures sent elsewhere." },
      { question: "What would add capacity: equipment, a provider, a room, or working capital?", listenFor: "One defined project." },
      { question: "How soon could that capacity begin seeing patients?", listenFor: "A realistic credentialing and launch timeline." },
      { question: "What would it add in monthly collections?", listenFor: "Conservative revenue math, not billed charges." },
    ],
    goodSignals: ["Established collections and patient demand", "Equipment or provider adds measurable capacity"],
    slowDownSignals: ["Licensing, billing, or payer disputes", "Projections depend on uncredentialed providers"],
  },
  "retail-storefront": {
    opener: "Are you missing sales because you need inventory, equipment, staff, or a better store setup?",
    questions: [
      { question: "What sells out or limits sales most often?", listenFor: "Proven products or a clear store bottleneck." },
      { question: "How quickly does inventory normally turn into cash?", listenFor: "A healthy, explainable inventory cycle." },
      { question: "What purchase or improvement would you make now?", listenFor: "A specific order, fixture, delivery asset, or buildout." },
      { question: "What sales lift do you expect and why?", listenFor: "Evidence from past sales, preorders, or foot traffic." },
    ],
    goodSignals: ["Fast-moving inventory and stable card sales", "A specific purchase tied to demonstrated demand"],
    slowDownSignals: ["Old inventory already sitting unsold", "Sales are falling with no corrective plan"],
  },
  ecommerce: {
    opener: "Is inventory or advertising limiting orders you already know how to generate profitably?",
    questions: [
      { question: "What product is driving the opportunity?", listenFor: "A proven SKU, not an untested launch." },
      { question: "How much inventory do you need and how fast does it sell?", listenFor: "Clear order size and inventory turn." },
      { question: "What do you spend to acquire a customer and what is the gross profit?", listenFor: "Positive, understood unit economics." },
      { question: "When does the platform release your cash?", listenFor: "A predictable payout cycle." },
    ],
    goodSignals: ["Proven products with repeatable margins", "Inventory or ad spend has a short, measured payback"],
    slowDownSignals: ["Untested product or unreliable ad economics", "Platform holds, bans, or chargeback problems"],
  },
  "gas-convenience": {
    opener: "Is inventory, equipment, or a store upgrade keeping you from selling more inside the store?",
    questions: [
      { question: "Where is the real opportunity: fuel volume or inside-store sales?", listenFor: "Higher-margin store categories." },
      { question: "What inventory or equipment are you short on?", listenFor: "Fast-moving products, coolers, food service, or POS upgrades." },
      { question: "How much of total sales comes from inside the store?", listenFor: "A healthy margin mix." },
      { question: "How quickly would the investment affect daily sales?", listenFor: "A near-term, visible result." },
    ],
    goodSignals: ["Stable daily card volume", "Capital grows higher-margin inside sales"],
    slowDownSignals: ["Environmental or fuel-supply problems", "Low margins leave no room for payment"],
  },
  manufacturing: {
    opener: "Do you have orders you cannot fill fast enough because of equipment, material, or production capacity?",
    questions: [
      { question: "What customer order or backlog is waiting?", listenFor: "Signed orders or repeat customer demand." },
      { question: "What is the exact production bottleneck?", listenFor: "Machine time, raw material, labor, tooling, or floor space." },
      { question: "What would removing it add in monthly output?", listenFor: "Simple throughput and margin math." },
      { question: "When would customers pay for the added production?", listenFor: "A clear cash-conversion timeline." },
    ],
    goodSignals: ["Backlog or purchase orders from established customers", "Equipment or material directly increases output"],
    slowDownSignals: ["No confirmed demand", "Quality, safety, or customer-concentration problems"],
  },
  agriculture: {
    opener: "Is the next crop, harvest, or livestock cycle creating a need for equipment, input, or operating cash?",
    questions: [
      { question: "What production cycle is the money for?", listenFor: "A specific crop, herd, harvest, or contract." },
      { question: "What must be paid before revenue comes in?", listenFor: "Seed, feed, fertilizer, labor, repairs, or equipment." },
      { question: "When and how will the crop or product be sold?", listenFor: "A realistic market and payment date." },
      { question: "What weather, price, or buyer risk could change the plan?", listenFor: "The operator understands the downside." },
    ],
    goodSignals: ["Known production history and a clear buyer or market", "Capital bridges a normal seasonal cash cycle"],
    slowDownSignals: ["No crop insurance or sales plan", "Repayment depends on unusually optimistic yield or pricing"],
  },
};

export const discoveryGuideBySlug = (slug: string) => DISCOVERY_GUIDES[slug];
