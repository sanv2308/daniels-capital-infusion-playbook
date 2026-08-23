# Playbook Ontology

The knowledge structure, stated once. Five layers, one-directional relations,
one vocabulary. If a new piece of content doesn't fit exactly one slot here,
it doesn't ship.

## Layers

| # | Layer | Entity | IDs | Answers |
|---|-------|--------|-----|---------|
| 1 | Context | Industry dossier | 3-letter codes (TRK, RST…) | WHO am I talking to? |
| 2 | Process | PULSE phase | P · U · L · S · E | WHERE am I in the call? |
| 3 | Tests | GATE-5, PBR | G1–G5, PBR | CAN they fund? SHOULD this structure exist? |
| 4 | Actions | Lane, ARC track | LN-1–6, OBJ-1–8 | WHAT do I pitch? HOW do I handle resistance? |
| 5 | Terminals | D-code | D1–D9 | HOW does this call end? |

## Relations (all one-directional)

- **Industry → everything.** Tier feeds G5 and the PBR ceiling; `laneBias`
  hints the router; signature objections extend the universal ARC matrix;
  hero/rapport/pains/quals feed their PULSE phases. An industry never
  *contains* logic — it only parameterizes it.
- **PULSE phase → consumes artifacts.** Pin ← hero + rapport. Uncover ←
  pains. Lock ← quals + GATE-5. Solve ← LANE router + lane pitch + PBR +
  deal math. Execute ← ARC + D-codes. A phase screen renders exactly its
  artifacts and nothing else — that is the legibility contract.
- **GATE-5 verdict → gates the router.** decline ⇒ skip Solve, Execute with
  D6 (nurture-fix). fund/flag ⇒ router runs.
- **Router → ranks lanes.** Each ranked lane carries its pitch. PBR then
  validates the specific structure before it may be spoken aloud.
- **Every path → terminates in exactly one D-code.** No other call ending
  exists.

## Vocabulary discipline

One name per entity, everywhere — UI, data, scripts:
"lane" (never "product option"), "gate", "read" (a qualifying answer's
interpretation), "trace" (why the machine decided), "D-code". Mono type =
figures and traces only. Mint = position only. Brass = money only.

## The rep's mental model (the whole system in three sentences)

The dossier tells you who you're talking to. The rail tells you where you
are, and each phase hands you only what that phase needs. The machine tells
you whether they fund, what to pitch, and how big — and every call ends in
a code.
