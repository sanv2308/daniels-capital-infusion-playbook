import type { Category, Industry } from "./types";
import { BUILDING } from "./industries/building";
import { TRANSPORT } from "./industries/transport";
import { FOOD } from "./industries/food";
import { LOCAL } from "./industries/local";
import { HEALTH, RETAIL, INDUSTRIAL } from "./industries/health-retail-industrial";

export const CATEGORIES: Category[] = [
  { id: "building", name: "Building trades" },
  { id: "transport", name: "Transportation & logistics" },
  { id: "food", name: "Food & hospitality" },
  { id: "local", name: "Local services" },
  { id: "health", name: "Healthcare" },
  { id: "retail", name: "Retail & commerce" },
  { id: "industrial", name: "Industrial & agricultural" },
];

export const INDUSTRIES: Industry[] = [
  ...BUILDING,
  ...TRANSPORT,
  ...FOOD,
  ...LOCAL,
  ...HEALTH,
  ...RETAIL,
  ...INDUSTRIAL,
];

export const industryBySlug = (slug: string) =>
  INDUSTRIES.find((i) => i.slug === slug);

export const industriesByCategory = (catId: string) =>
  INDUSTRIES.filter((i) => i.category === catId);
