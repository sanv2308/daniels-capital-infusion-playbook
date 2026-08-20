# Capital Infusion Playbook v3 — PLAN

Goal: the sales team's structural advantage. v2 was a 22-card conversation-opener
deck (one layer deep, no routing, no objections, no math). v3 is a **call
instrument**: the rep always knows where they are, what to say next, and why —
deterministically.

## Method

Built with the /one-shot-website loop: design tokens before components, serial
build on the critical path, then screenshot-critique rounds until a round
produces no critique.

## Design language — "trading-desk editorial"

An instrument, not a brochure. Deep ink-green terminal surfaces (money
authority), bone foreground, mint signal accent for *position* (where you are),
brass for *money figures only*. Instrument Serif for display authority,
Hanken Grotesk for UI legibility, mono for figures and rule traces. Grain at
.04, alpha hairlines, swift-out easing, one ambient pulse on the position rail.

Legibility rules (the user's brief): one decision per screen in call mode;
current position visible at all times (PULSE rail); tap targets ≥44px; body
type ≥15px; every deterministic output shows its rule trace so a human can
conceptualize *why*.

## The house frameworks (custom, deterministic)

- **PULSE call arc** — Pin → Uncover → Lock → Solve → Execute. The always-
  visible rail. Every piece of content is ammunition for one of the 5 phases.
- **GATE-5** — five pass/flag/fail qualification gates (Revenue, Time-in-
  business, Credit, Positions, Industry tier) with explicit thresholds.
- **LANE router** — deterministic gate-results → ranked product lanes (MCA /
  Term / LOC / Equipment / Factoring / SBA) with attached pitch scripts and a
  visible rule trace.
- **PBR** — Payment Burden Ratio (daily payment ÷ daily deposits) with
  per-tier ceilings; green/amber/red verdicts.
- **ARC objection protocol** — Acknowledge → Reframe → Close, per objection
  class, with fallbacks. Universal matrix + per-industry signature objections.
- **D-codes** — every call ends in a disposition code with a mandated next
  action and cadence.

## Site map

- `/` — cockpit home: Live Call / Study entry, master index, stable IDs.
- `/call` — live-call cockpit: PULSE rail + phase screens wiring GATE-5 →
  LANE → PBR → ARC → D-code, fed by the selected industry.
- `/industries`, `/industries/[slug]` — 22 dossiers, upgraded schema (hero,
  rapport, pains→asks, quals *with reads*, deal math, objections, red flags,
  renewal play, lane bias).
- `/lanes`, `/lanes/[slug]` — six product lanes: mechanics, pitch, when-routed.
- `/objections` — ARC matrix, searchable.
- `/method` — PULSE spine, GATE-5, PBR, D-codes, day-1→30 ramp.
- `/compliance` — state disclosure table + language rules (never say "loan"
  for an advance, no APR improvisation).

## Stack

Next.js App Router + TS, single hand-rolled `app/globals.css` (no Tailwind),
zero animation deps (IO-based reveal only), all content in typed data files
(`data/*.ts`), routing engines as pure functions (`lib/engine.ts`) so the same
logic can later power an API or copilot. Dev port 4820.

## Borrow table

| From | What |
|---|---|
| intelloans tokens | easing DNA, shadow-ramp-tinted-with-brand-dark, grain recipe |
| sams | two-axis token scale (surface vs text), flash-free boot, hairline gradient card border |
| betterbizloans | Instrument Serif + Hanken Grotesk pairing, calculator `--pct` slider pattern, pure tested math split from UI |
| pattern-issue | Reveal via IO + `--i` stagger, band seams on identical colors |

## Verification honesty

Trucking is research-verified (May 2026, ATA/FMCSA). The other 21 dossiers are
curated v3 content — labeled in-UI, with a stamp explaining status. Numbers a
rep quotes aloud are flagged "verify before quoting" until stamped.
