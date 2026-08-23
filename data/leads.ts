import type { LeadStatus, ProspectLead } from "./types";

export const LEAD_STATUSES: LeadStatus[] = [
  "Not Contacted",
  "Attempted",
  "Connected",
  "Follow-Up",
  "Application",
  "Won",
  "Not a Fit",
  "Do Not Contact",
];

export const CAPITAL_INFUSION_CRITERIA_URL = "https://www.capital-infusion.com/";
export const CAPITAL_INFUSION_APPLICATION_URL = "https://www.capital-infusion.com/contact";
export const CAPITAL_INFUSION_PHONE = "(877) 262-0011";

export const LEADS: ProspectLead[] = [
  {
    id: "CI-001", businessName: "PIQUER USA CORP", industry: "General contractor", industrySlug: "construction", city: "Miami", state: "FL", priority: "B", outreachScore: 60, messageVariant: "A",
    website: "https://www.piquerusa.com/", publicBusinessEmail: "info@piquerusa.com", publicBusinessPhone: "305-896-6639", signalDate: "2026-06-25", monthsInBusiness: 212, decisionMaker: "Owner or operations lead",
    fundingUse: "materials, project mobilization, or payroll tied to new contract activity",
    signalSummary: "Recent Miami-Dade business activity supports a timely expansion or new-project conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724239 shows recent active activity at 4709 NW 72nd Ave. Sunbiz shows the company Active since 2008; the company site supplies the public business contact.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D106127&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=PIQUER%20USA%20CORP"],
  },
  {
    id: "CI-002", businessName: "FIRECODE LLC", industry: "Fire protection contractor", industrySlug: "construction", city: "Doral", state: "FL", priority: "B", outreachScore: 60, messageVariant: "B",
    website: "https://firecode.one/", publicBusinessEmail: "manager@firecode.one", publicBusinessPhone: "786-464-0840", signalDate: "2026-06-22", monthsInBusiness: 29, decisionMaker: "Owner or operations lead",
    fundingUse: "installation materials, inspection equipment, or payroll for new jobs",
    signalSummary: "Recent Miami-Dade contracting activity creates a reason to ask about new jobs and capacity.",
    evidenceNote: "Miami-Dade LBT receipt 7723991 shows recent active contracting activity. Sunbiz shows the Doral entity Active since 2024; the company site supplies the public business contact.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D4549&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=FIRECODE%20LLC"],
  },
  {
    id: "CI-003", businessName: "THE COOLING MASTERS", industry: "HVAC contractor", industrySlug: "hvac", city: "Miami Lakes", state: "FL", priority: "B", outreachScore: 60, messageVariant: "A",
    website: "https://www.thecoolingmasters.com/", publicBusinessEmail: "coolingmasters247@gmail.com", publicBusinessPhone: "786-661-6095", signalDate: "2026-06-23", monthsInBusiness: 34, decisionMaker: "Owner or operations lead",
    fundingUse: "equipment, vehicles, parts inventory, or payroll for added service capacity",
    signalSummary: "Recent active HVAC activity supports a capacity and working-capital conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724026 shows recent active HVAC activity. Sunbiz lists AC Repair 24 Seven LLC Active since 2023; the company site links the Cooling Masters brand and supplies the public contact.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D51557&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=AC%20REPAIR%2024%20SEVEN%20LLC"],
  },
  {
    id: "CI-004", businessName: "A-1 ELEVATOR SERVICES LLC", industry: "Elevator services contractor", industrySlug: "construction", city: "Cutler Bay", state: "FL", priority: "B", outreachScore: 60, messageVariant: "B",
    publicBusinessEmail: "sales@a1elevator.info", publicBusinessPhone: "305-540-1400", signalDate: "2026-06-18", monthsInBusiness: 23, decisionMaker: "Owner or operations lead",
    fundingUse: "tools, parts, insurance, or payroll supporting added service work",
    signalSummary: "Recent mechanical-contracting activity creates a reason to ask about service growth.",
    evidenceNote: "Miami-Dade LBT receipt 7724013 shows recent active mechanical-contracting activity. Sunbiz shows the company Active since 2024; the contact is the public business contact filed with the county.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D125303&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=A-1%20ELEVATOR%20SERVICES%20LLC"],
  },
  {
    id: "CI-005", businessName: "MOSAIC KITCHEN DESIGN CORP", industry: "Kitchen design retail", industrySlug: "retail-storefront", city: "Medley", state: "FL", priority: "A", outreachScore: 70, messageVariant: "A",
    publicBusinessEmail: "mosaic.homeanddesign@gmail.com", signalDate: "2026-06-22", monthsInBusiness: 40, decisionMaker: "Owner or showroom manager",
    fundingUse: "showroom buildout, sample inventory, cabinetry, or installation payroll",
    signalSummary: "Recent retail activity at a commercial location supports a showroom and inventory conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723961 shows recent active retail activity at 12699 NW 107th Ave. Sunbiz shows the company Active since 2023; the email is the county-filed public business contact.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D84908&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=MOSAIC%20KITCHEN%20DESIGN%2C%20CORP"],
  },
  {
    id: "CI-006", businessName: "PLUS BUILD MANAGEMENT LLC", industry: "General contractor", industrySlug: "construction", city: "Miami", state: "FL", priority: "B", outreachScore: 60, messageVariant: "B",
    publicBusinessPhone: "786-461-6052", signalDate: "2026-06-18", monthsInBusiness: 51, decisionMaker: "Owner or project operations lead",
    fundingUse: "project mobilization, materials, or payroll ahead of customer payments",
    signalSummary: "Recent general-contracting activity supports a project-mobilization conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723922 shows recent active general-contracting activity. Sunbiz shows the company Active since 2022; only the county-filed public business phone is retained.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D170435&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=PLUS%20BUILD%20MANAGEMENT%2C%20LLC"],
  },
  {
    id: "CI-007", businessName: "NICPOWER CONTRACTOR CORP", industry: "Electrical contractor", industrySlug: "electrical", city: "Coral Gables", state: "FL", priority: "B", outreachScore: 60, messageVariant: "A",
    publicBusinessEmail: "fulvioelectricalcompany@gmail.com", publicBusinessPhone: "786-915-0121", signalDate: "2026-06-22", monthsInBusiness: 63, decisionMaker: "Owner or operations lead",
    fundingUse: "electrical materials, equipment, vehicles, or payroll for added jobs",
    signalSummary: "Recent electrical-contracting activity creates a timely capacity conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724116 shows recent active electrical-contracting activity. Sunbiz shows the company Active since 2021; phone and email are county-filed public business contacts.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D89396&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=NICPOWER%20CONTRACTOR%20CORP"],
  },
  {
    id: "CI-008", businessName: "FAST FL ELECTRIC LLC", industry: "Electrical contractor", industrySlug: "electrical", city: "Miami", state: "FL", priority: "B", outreachScore: 55, messageVariant: "B",
    publicBusinessEmail: "fastfl24@yahoo.com", publicBusinessPhone: "786-879-3472", signalDate: "2026-06-25", monthsInBusiness: 10, decisionMaker: "Owner or operations lead",
    fundingUse: "materials, testing tools, permits, or payroll for new electrical work",
    signalSummary: "A newer active electrical contractor may be adding jobs and operating capacity.",
    evidenceNote: "Miami-Dade LBT receipt 7724209 shows recent active electrical-contracting activity. Sunbiz shows the company Active since September 2025, above the published six-month minimum; contacts are county-filed business data.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D148444&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=FAST%20FL%20ELECTRIC%20LLC"],
  },
  {
    id: "CI-009", businessName: "PRECISION MOTORS AUTO REPAIR INC", industry: "Auto repair", industrySlug: "auto-repair", city: "Hialeah Gardens", state: "FL", priority: "A", outreachScore: 70, messageVariant: "A",
    publicBusinessEmail: "ivanbaluja93@gmail.com", publicBusinessPhone: "786-782-1551", signalDate: "2026-06-25", monthsInBusiness: 13, decisionMaker: "Owner or shop manager",
    fundingUse: "lifts, diagnostic equipment, parts inventory, or shop payroll",
    signalSummary: "Recent auto-repair activity at a commercial location supports an equipment and inventory conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724205 shows recent active auto-repair activity. Sunbiz shows the company Active since July 2025; phone and email are county-filed public business contacts.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D169236&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=PRECISION%20MOTORS%20AUTO%20REPAIR%20INC"],
  },
  {
    id: "CI-010", businessName: "AMERICAN INTERNATIONAL TRANSMISSION INC", industry: "Transmission repair", industrySlug: "auto-repair", city: "Cutler Bay", state: "FL", priority: "A", outreachScore: 70, messageVariant: "B",
    publicBusinessPhone: "786-975-6605", signalDate: "2026-06-17", monthsInBusiness: 147, decisionMaker: "Owner or shop manager",
    fundingUse: "transmission parts, diagnostic equipment, lifts, or working capital",
    signalSummary: "Recent shop activity supports an equipment, parts, and working-capital conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723836 shows recent active repair-shop activity. Sunbiz shows the company Active since 2014; only the county-filed public business phone is retained.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D150779&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=AMERICAN%20INTERNATIONAL%20TRANSMISSION%20INC"],
  },
  {
    id: "CI-011", businessName: "CRAZY FRESH BURGERS CORP", industry: "Restaurant", industrySlug: "restaurant", city: "Hialeah", state: "FL", priority: "A", outreachScore: 70, messageVariant: "A",
    publicBusinessPhone: "786-488-1643", signalDate: "2026-06-24", monthsInBusiness: 40, decisionMaker: "Owner or general manager",
    fundingUse: "kitchen equipment, opening inventory, buildout, or payroll",
    signalSummary: "Recent full-service restaurant activity at a commercial address supports a growth-spend conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724215 shows recent active full-service restaurant activity at 450 E 4th Ave. Sunbiz shows the company Active since 2023; only the county-filed public business phone is retained.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D134377&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=CRAZY%20FRESH%20BURGERS%20CORP"],
  },
  {
    id: "CI-012", businessName: "ANTOJOS CUBAN COFFEE SHOP", industry: "Coffee shop", industrySlug: "restaurant", city: "Miami", state: "FL", priority: "A", outreachScore: 70, messageVariant: "B",
    website: "https://antojoscubancoffeeshop.com/", publicBusinessPhone: "786-216-5697", signalDate: "2026-06-17", monthsInBusiness: 16, decisionMaker: "Owner or general manager",
    fundingUse: "espresso equipment, opening inventory, signage, or payroll",
    signalSummary: "Recent coffee-shop activity supports an equipment, inventory, and staffing conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723850 shows recent active coffee-shop activity at 1854 SW 8th St. Sunbiz shows the company Active since April 2025; the company site and county-filed phone provide public contact paths.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D187260&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=ANTOJOS%20CUBAN%20COFFEE%20SHOP%20CORP"],
  },
  {
    id: "CI-013", businessName: "SUNLINE RESTAURANT GROUP LLC", industry: "Restaurant", industrySlug: "restaurant", city: "North Miami Beach", state: "FL", priority: "A", outreachScore: 65, messageVariant: "A",
    publicBusinessEmail: "yona.yakubovsky@gmail.com", publicBusinessPhone: "732-666-2079", signalDate: "2026-08-02", monthsInBusiness: 6, decisionMaker: "Owner or general manager",
    fundingUse: "kitchen equipment, opening inventory, buildout, or payroll",
    signalSummary: "Very recent restaurant activity suggests a timely opening or early-growth conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724004 shows recent active restaurant activity. Sunbiz shows the company Active since February 12, 2026, at the published six-month threshold; contacts are county-filed business data.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D72874&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=SUNLINE%20RESTAURANT%20GROUP%20LLC"],
  },
  {
    id: "CI-014", businessName: "ROS AUTO BODY SHOP CORP", industry: "Auto body repair", industrySlug: "auto-repair", city: "Hialeah", state: "FL", priority: "A", outreachScore: 65, messageVariant: "B",
    publicBusinessEmail: "bodyshop94@gmail.com", publicBusinessPhone: "305-731-1014", signalDate: "2026-06-17", monthsInBusiness: 11, decisionMaker: "Owner or shop manager",
    fundingUse: "paint booth or body equipment, parts, or shop payroll",
    signalSummary: "Recent body-shop activity at a commercial location supports an equipment and parts conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723839 shows recent active body-shop activity. Sunbiz shows the company Active since August 2025, above the published six-month minimum; contacts are county-filed business data.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D111870&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=ROS%20AUTO%20BODY%20SHOP%20CORP"],
  },
  {
    id: "CI-015", businessName: "FEULARD MIAMI LLC", industry: "Beauty care center", industrySlug: "spa", city: "Aventura", state: "FL", priority: "A", outreachScore: 70, messageVariant: "A",
    website: "https://aventuramall.com/shops/feulard-aesthetic-lab/", publicBusinessEmail: "info@feulard.com", publicBusinessPhone: "305-439-9588", signalDate: "2026-06-16", monthsInBusiness: 17, decisionMaker: "Owner or center manager",
    fundingUse: "treatment equipment, retail inventory, buildout, or staffing",
    signalSummary: "Recent beauty-care activity at Aventura Mall supports an equipment and buildout conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724063 shows recent active beauty-care activity at Aventura Mall. Sunbiz shows the company Active since February 2025; domain email and phone are public business contacts filed with the county.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D1936&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=FEULARD%20MIAMI%20LLC"],
  },
  {
    id: "CI-016", businessName: "UNIVERSAL WELDING SERVICE CO", industry: "Welding contractor", industrySlug: "manufacturing", city: "Hialeah", state: "FL", priority: "B", outreachScore: 60, messageVariant: "B",
    website: "https://universalweldingservice.com/", publicBusinessEmail: "info@universalweldingservice.com", publicBusinessPhone: "305-898-9130", signalDate: "2026-06-03", monthsInBusiness: 118, decisionMaker: "Owner or operations lead",
    fundingUse: "welding equipment, materials, vehicles, or payroll for added contracts",
    signalSummary: "Recent contracting activity supports an equipment, materials, and capacity conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723030 shows recent active contracting activity. Sunbiz lists the company Active under document P16000085008; domain contact and phone are public business contacts filed with the county.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D15816&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=UNIVERSAL%20WELDING%20SERVICE%20CO"],
  },
  {
    id: "CI-017", businessName: "THORNTON CONSTRUCTION COMPANY INC", industry: "General contractor", industrySlug: "construction", city: "Opa-locka", state: "FL", priority: "B", outreachScore: 60, messageVariant: "A",
    website: "https://thornton-inc.com/", publicBusinessEmail: "contracts@thornton-inc.com", publicBusinessPhone: "305-649-1995", signalDate: "2026-06-01", monthsInBusiness: 338, decisionMaker: "Owner or contract operations lead",
    fundingUse: "project mobilization, materials, bonding costs, or payroll",
    signalSummary: "Recent general-contracting activity supports a project-mobilization conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723574 shows recent active general-contracting activity. Sunbiz shows the company Active since 1998; domain contact and phone are public business contacts filed with the county.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D73840&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=THORNTON%20CONSTRUCTION%20COMPANY%2C%20INC."],
  },
  {
    id: "CI-018", businessName: "EL TORO LOCO CHURRASCARIA DORAL SQUARE LLC", industry: "Restaurant", industrySlug: "restaurant", city: "Doral", state: "FL", priority: "A", outreachScore: 80, messageVariant: "B",
    publicBusinessEmail: "eltoroloco8st@gmail.com", publicBusinessPhone: "786-344-1447", signalDate: "2026-06-10", monthsInBusiness: 59, decisionMaker: "Owner or general manager",
    fundingUse: "new-location kitchen equipment, inventory, buildout, or payroll",
    signalSummary: "A recent location signal and related active locations support a strong expansion conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723410 shows recent active restaurant activity at 8700 NW 36th St. Sunbiz shows the Doral Square entity Active since 2021; multiple related active location entities support the expansion hypothesis.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D68807&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=EL%20TORO%20LOCO%20CHURRASCARIA%20DORAL%20SQUARE%20LLC"],
  },
  {
    id: "CI-019", businessName: "HAIRDOCTORS WEST KENDALL INC", industry: "Beauty salon", industrySlug: "salons", city: "Miami", state: "FL", priority: "A", outreachScore: 80, messageVariant: "A",
    website: "https://hairdoctors.net/", publicBusinessEmail: "amestre@hairdoctors.net", publicBusinessPhone: "786-266-8268", signalDate: "2026-06-03", monthsInBusiness: 158, decisionMaker: "Owner or salon manager",
    fundingUse: "chairs, salon equipment, retail inventory, buildout, or staffing",
    signalSummary: "Recent salon activity plus a multi-location brand structure supports a strong expansion conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723051 shows recent active salon activity. Sunbiz lists the West Kendall entity Active under document P13000054868; domain contact and brand/location structure support the expansion hypothesis.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D190184&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=HAIRDOCTORS%20WEST%20KENDALL%20INC"],
  },
  {
    id: "CI-020", businessName: "CASAWOW LLC", industry: "Furniture retail", industrySlug: "retail-storefront", city: "Miami", state: "FL", priority: "A", outreachScore: 70, messageVariant: "B",
    website: "https://allaboutthewow.com/", publicBusinessEmail: "geraldine@allaboutthewow.com", publicBusinessPhone: "305-668-7177", signalDate: "2026-05-27", monthsInBusiness: 22, decisionMaker: "Owner or showroom manager",
    fundingUse: "furniture inventory, showroom buildout, delivery equipment, or staffing",
    signalSummary: "Recent furniture-sales activity supports an inventory and showroom conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7722682 shows recent active furniture-sales activity. Sunbiz shows the company Active since October 2024; domain email and phone are public business contacts filed with the county.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D7147&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=CASAWOW%2C%20LLC"],
  },
  {
    id: "CI-021", businessName: "WARBIRD FIRE & SAFETY LLC", industry: "Fire safety contractor", industrySlug: "construction", city: "Miami", state: "FL", priority: "B", outreachScore: 60, messageVariant: "A",
    website: "https://warbirdfire.com/", publicBusinessEmail: "jesus@warbirdfire.com", publicBusinessPhone: "305-200-3022", signalDate: "2026-06-11", monthsInBusiness: 18, decisionMaker: "Owner or operations lead",
    fundingUse: "safety equipment, installation materials, vehicles, or payroll",
    signalSummary: "Recent mechanical-contracting activity supports a job-capacity conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7716912 shows recent active mechanical-contracting activity. Sunbiz shows the company Active since February 2025; domain contact and phone are public business contacts filed with the county.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D50999&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=WARBIRD%20FIRE%20%26%20SAFETY%2C%20LLC"],
  },
  {
    id: "CI-022", businessName: "USA SPECIAL TIRE CORP", industry: "Tire shop", industrySlug: "auto-repair", city: "Homestead", state: "FL", priority: "A", outreachScore: 70, messageVariant: "B",
    publicBusinessPhone: "305-992-6153", signalDate: "2026-06-16", monthsInBusiness: 103, decisionMaker: "Owner or shop manager",
    fundingUse: "tire inventory, mounting equipment, lifts, or shop payroll",
    signalSummary: "Recent tire-shop activity supports an inventory and equipment conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723735 shows recent active tire-shop activity. Sunbiz lists U S A SPECIAL TIRE CORP. Active under document P18000008267; only the county-filed public business phone is retained.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D66151&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=U%20S%20A%20SPECIAL%20TIRE%20CORP."],
  },
  {
    id: "CI-023", businessName: "ABAS CONSTRUCTION INC", industry: "General contractor", industrySlug: "construction", city: "Miami", state: "FL", priority: "B", outreachScore: 60, messageVariant: "A",
    publicBusinessEmail: "abasconst@yahoo.com", publicBusinessPhone: "786-681-5376", signalDate: "2026-06-05", monthsInBusiness: 66, decisionMaker: "Owner or project operations lead",
    fundingUse: "materials, equipment, permits, or payroll for added projects",
    signalSummary: "Recent general-contracting activity supports a project and working-capital conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723188 shows recent active general-contracting activity. Sunbiz shows the company Active since February 2021; contacts are county-filed public business data.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D148785&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=ABAS%20CONSTRUCTION%2C%20INC"],
  },
  {
    id: "CI-024", businessName: "SERVILACON CORP", industry: "Specialty contractor", industrySlug: "construction", city: "Miami", state: "FL", priority: "B", outreachScore: 60, messageVariant: "B",
    publicBusinessEmail: "servilacon@gmail.com", publicBusinessPhone: "954-804-0492", signalDate: "2026-06-08", monthsInBusiness: 262, decisionMaker: "Owner or operations lead",
    fundingUse: "materials, tools, vehicles, or payroll for added contract work",
    signalSummary: "Recent specialty-contracting activity supports a capacity and project-spend conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7723389 shows recent active specialty-contracting activity. Sunbiz lists SERVILACON, CORP. Active under document P04000140251; contacts are county-filed public business data.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D11980&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=SERVILACON%2C%20CORP."],
  },
  {
    id: "CI-025", businessName: "JUST 1 PLUMBING LLC", industry: "HVAC / plumbing contractor", industrySlug: "plumbing", city: "Miami", state: "FL", priority: "B", outreachScore: 60, messageVariant: "A",
    website: "https://just1plumbing.com/", publicBusinessEmail: "silvia@just1plumbing.com", publicBusinessPhone: "786-677-8200", signalDate: "2026-06-24", monthsInBusiness: 85, decisionMaker: "Owner or operations lead",
    fundingUse: "equipment, parts inventory, vehicles, or payroll for added service capacity",
    signalSummary: "Recent Class A air-conditioning contractor activity supports a service-capacity conversation.",
    evidenceNote: "Miami-Dade LBT receipt 7724188 shows recent active Class A air-conditioning contractor activity. Sunbiz shows the company Active since July 2019; domain contact and phone are public business contacts filed with the county.",
    sourceUrls: ["https://gisweb.miamidade.gov/arcgis/rest/services/BusinessTracker/MapServer/0/query?where=OBJECTID%3D100219&outFields=*&returnGeometry=false&f=pjson", "https://search.sunbiz.org/Inquiry/corporationsearch/SearchResults?inquiryType=EntityName&searchTerm=JUST%201%20PLUMBING%20LLC"],
  },
];

export const leadById = (id: string) =>
  LEADS.find((lead) => lead.id.toLowerCase() === id.toLowerCase());

export const moneyUseQuestion = (lead: ProspectLead) =>
  `Are you planning to spend on ${lead.fundingUse} in the next 90 days?`;

export const openerFor = (lead: ProspectLead) =>
  lead.messageVariant === "A"
    ? `Hi, is this the ${lead.decisionMaker.toLowerCase()} at ${lead.businessName}? This is Daniel with Capital Infusion. We work with ${lead.industry.toLowerCase()} businesses around ${lead.city} when growth creates a cash-flow gap. Are you planning any ${lead.fundingUse} in the next 90 days?`
    : `Hi, this is Daniel with Capital Infusion. I am trying to reach the ${lead.decisionMaker.toLowerCase()} at ${lead.businessName}. We help established ${lead.industry.toLowerCase()} operators compare business-financing options for ${lead.fundingUse}. Is that something on your plate this quarter?`;

export const voicemailFor = (lead: ProspectLead) =>
  `Hi, this is Daniel with Capital Infusion calling for the ${lead.decisionMaker.toLowerCase()} at ${lead.businessName}. I had a quick question about financing for ${lead.fundingUse}. Please call Capital Infusion at ${CAPITAL_INFUSION_PHONE} and ask for Daniel. Again, ${CAPITAL_INFUSION_PHONE}.`;

export const emailFor = (lead: ProspectLead) => ({
  subject: `Quick question for ${lead.businessName}`,
  body: `Hi,\n\nI work with ${lead.industry.toLowerCase()} businesses that need capital for ${lead.fundingUse}. I wanted to ask whether ${lead.businessName} has anything like that planned in the next 90 days.\n\nIf the timing is relevant, I can ask a few basic questions and tell you whether a secure application is worth the next step. I will not promise an approval or quote terms before the facts are reviewed.\n\nWould a brief call this week be useful?\n\nDaniel\nCapital Infusion\n${CAPITAL_INFUSION_PHONE}\n\nIf this is not relevant, reply no and I will close the follow-up.`,
});

export const QUALIFICATION_QUESTIONS = [
  "What is the specific use of funds, and what business result should it create?",
  "Roughly how much capital would solve the need without over-borrowing?",
  "When do you need the funds, and what happens if you wait?",
  "How long has the business been operating under its current ownership?",
  "What is average monthly gross business revenue? Use a range if they prefer.",
  "Does the business receive revenue into a dedicated business checking account?",
  "Are there any current advances or daily/weekly payment positions? If yes, how many?",
  "What approximate personal credit band should underwriting expect? Never ask for an SSN on a cold call.",
  "Can the business securely provide the most recent four months of bank statements if it chooses to apply?",
  "Who besides you must approve the financing decision?",
];

export const CLOSE_SCRIPT =
  "Based on what you shared, the next responsible step is a secure application and document review—not a promise. If you complete that today, I can package the file for review and keep you updated. Would you like me to send the secure link now and stay on the phone while you open it?";

export const FOLLOW_UP_PLAN = [
  ["Day 0", "Call. If no answer, leave the short voicemail and send the assigned email."],
  ["Day 2", "Call at a different time. Lead with the specific use-of-funds question."],
  ["Day 5", "Send one useful, short follow-up: ask whether the need is timing, amount, or no current need."],
  ["Day 10", "Final active attempt. Ask for a clear yes, later date, or close-out."],
  ["Day 21", "Only contact again if they requested a later date or gave a real business trigger."],
];

export const STOP_RULES = [
  "Stop immediately after an opt-out or do-not-call request and mark Do Not Contact.",
  "Do not say pre-approved, guaranteed, direct loan, lowest rate, or no credit check.",
  "Do not treat the public signal or outreach score as proof of revenue, credit, bank activity, ownership, or approval.",
  "Do not collect SSNs, bank statements, IDs, or account details by ordinary email or in lead notes.",
  "Do not advance a file when the business is under six months old, lacks a business checking account, or reports less than the currently published minimum revenue without confirming an approved exception path.",
  "Do not improvise rates, factor costs, or payment figures. Use approved disclosures and reviewed terms only.",
];
