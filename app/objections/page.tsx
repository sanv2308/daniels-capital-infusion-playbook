"use client";

import { useMemo, useState } from "react";
import { OBJECTIONS } from "@/data/objections";

export default function ObjectionsMatrix() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const matches = useMemo(() => {
    const lower = q.trim().toLowerCase();
    if (!lower) return OBJECTIONS;
    return OBJECTIONS.filter(
      (o) =>
        o.claim.toLowerCase().includes(lower) ||
        o.classLabel.toLowerCase().includes(lower) ||
        o.reframe.toLowerCase().includes(lower)
    );
  }, [q]);

  return (
    <div className="container page-pad" style={{ maxWidth: 860 }}>
      <p className="kicker">layer 4 · actions · ARC protocol</p>
      <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>The objection matrix</h1>
      <p className="lede" style={{ marginTop: "1rem" }}>
        Eight classes cover everything a prospect says to slow you down. Each runs
        the same deterministic track — <b style={{ color: "var(--mint)", fontWeight: 600 }}>acknowledge</b>,{" "}
        <b style={{ color: "var(--mint)", fontWeight: 600 }}>reframe</b>,{" "}
        <b style={{ color: "var(--mint)", fontWeight: 600 }}>close</b> — maximum two loops, then the
        fallback. Never argue the acknowledge; never skip it either.
      </p>

      <input
        type="search"
        placeholder="search objections… (rate, bank, spouse, timing)"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search objections"
        style={{
          width: "100%", margin: "1.75rem 0 1.25rem", padding: "13px 18px",
          background: "var(--ink-2)", border: "1px solid var(--line-strong)",
          borderRadius: 12, color: "var(--bone)", fontSize: "0.98rem", minHeight: 48,
        }}
      />

      <div className="stack" style={{ gap: 10 }}>
        {matches.map((o) => {
          const isOpen = open === o.id || q.trim().length > 0;
          return (
            <div key={o.id} className="arc-block" data-open={isOpen}>
              <button className="arc-block__head" onClick={() => setOpen(open === o.id ? null : o.id)} aria-expanded={isOpen}>
                <span className="id-stamp" style={{ color: "var(--mint)" }}>{o.id}</span>
                <span className="arc-block__claim">&ldquo;{o.claim}&rdquo;</span>
                <span className="chip">{o.classLabel}</span>
                <span className="arc-block__chev">›</span>
              </button>
              {isOpen && (
                <div className="arc-block__body">
                  <div className="arc-step"><span className="arc-step__tag">acknowledge</span><p>{o.acknowledge}</p></div>
                  <div className="arc-step"><span className="arc-step__tag">reframe</span><p>{o.reframe}</p></div>
                  <div className="arc-step"><span className="arc-step__tag">close</span><p>{o.close}</p></div>
                  <div className="arc-step arc-step--fallback"><span className="arc-step__tag">fallback</span><p>{o.fallback}</p></div>
                </div>
              )}
            </div>
          );
        })}
        {matches.length === 0 && (
          <p style={{ color: "var(--bone-faint)", textAlign: "center", padding: "2rem 0" }}>
            No match — check the industry dossier&apos;s signature objections.
          </p>
        )}
      </div>
    </div>
  );
}
