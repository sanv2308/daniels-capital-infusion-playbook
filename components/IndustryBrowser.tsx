"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES, INDUSTRIES, industriesByCategory } from "@/data/industries";

const CAT_ICON: Record<string, string> = {
  building: "ti-tool",
  transport: "ti-truck",
  food: "ti-chef-hat",
  local: "ti-scissors",
  health: "ti-stethoscope",
  retail: "ti-building-store",
  industrial: "ti-building-factory-2",
};

export function IndustryBrowser() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({ building: true });

  const matches = useMemo(() => {
    const lower = q.trim().toLowerCase();
    if (!lower) return null;
    return INDUSTRIES.filter(
      (i) =>
        i.name.toLowerCase().includes(lower) ||
        i.hero.toLowerCase().includes(lower) ||
        i.pains.some((p) => p.label.toLowerCase().includes(lower)) ||
        i.uses.some((u) => u.toLowerCase().includes(lower))
    );
  }, [q]);

  return (
    <div>
      <input
        className="ci-search"
        type="search"
        placeholder="Search industries, pain points, uses of funds…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search industries"
      />

      {matches ? (
        <div className="ci-cat" data-open="true">
          <div className="ci-cat-head" style={{ cursor: "default" }}>
            <i className="ti ti-search" aria-hidden />
            <span>Search</span>
            <span className="ci-cat-count">
              {matches.length} match{matches.length === 1 ? "" : "es"}
            </span>
          </div>
          <div className="ci-cat-body">
            {matches.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="index-row">
                <span className="id-stamp">{ind.code}</span>
                <span className="index-row__name">{ind.name}</span>
                {ind.verified && <span className="chip chip--pass">researched</span>}
                <span className="index-row__meta">tier {ind.tier}</span>
                <i className="ti ti-chevron-right" style={{ color: "var(--bone-faint)" }} aria-hidden />
              </Link>
            ))}
            {matches.length === 0 && (
              <div style={{ padding: "24px 16px", textAlign: "center", color: "var(--bone-faint)", fontSize: 13 }}>
                No matches.
              </div>
            )}
          </div>
        </div>
      ) : (
        CATEGORIES.map((cat) => {
          const inds = industriesByCategory(cat.id);
          const isOpen = !!open[cat.id];
          return (
            <div key={cat.id} className="ci-cat" data-open={isOpen}>
              <button
                className="ci-cat-head"
                onClick={() => setOpen({ ...open, [cat.id]: !isOpen })}
                aria-expanded={isOpen}
              >
                <i className={`ti ${CAT_ICON[cat.id]}`} aria-hidden />
                <span>{cat.name}</span>
                <span className="ci-cat-count">{inds.length}</span>
                <i className="ci-cat-chev ti ti-chevron-right" aria-hidden />
              </button>
              {isOpen && (
                <div className="ci-cat-body">
                  {inds.map((ind) => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`} className="index-row">
                      <span className="id-stamp">{ind.code}</span>
                      <span className="index-row__name">{ind.name}</span>
                      {ind.verified && <span className="chip chip--pass">researched</span>}
                      <span className="index-row__meta">tier {ind.tier}</span>
                      <i className="ti ti-chevron-right" style={{ color: "var(--bone-faint)" }} aria-hidden />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
