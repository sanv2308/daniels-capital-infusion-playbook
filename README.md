# Capital Infusion — Playbook v3

The sales team's call instrument. Not a binder: a five-phase call arc (PULSE)
with the rep's position always on screen, deterministic qualification (GATE-5),
product routing (LANE) and sizing (PBR) with visible rule traces, an
objection protocol (ARC), disposition codes (D1–D9), and 22 industry dossiers.

- **Structure**: [ONTOLOGY.md](./ONTOLOGY.md) — five layers, one direction.
- **Method + spec**: [PLAN.md](./PLAN.md).
- **Deploy**: [DEPLOY-TASKS.md](./DEPLOY-TASKS.md).

Stack: Next.js App Router + TypeScript, one hand-rolled `app/globals.css`,
zero animation/runtime deps. All content lives in typed data files
(`data/*.ts`); all logic in pure functions (`lib/engine.ts`) so the same rules
can later power an API or rep copilot.

```bash
npm install
npm run dev   # http://localhost:4820
```

Content status: Trucking (TRK) is research-verified (May 2026). The other 21
dossiers are curated v3 content, labeled in-UI — verify hero-stat figures
before quoting them on calls.
