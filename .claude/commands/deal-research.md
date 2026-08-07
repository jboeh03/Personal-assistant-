---
description: Dispatch the deal-room research fan-out. No args = full wave-1 (roofing+insurance, gutters+radon, contract, market). Or pass a topic - roofing|radon|gutters|contract|market|insurance|finance - for a single targeted run.
argument-hint: "[topic]"
---

Load the `deal-room` skill and follow its Phase 2 (research fan-out) exactly:

1. Parse `$ARGUMENTS`: empty = all four wave-1 threads in parallel; otherwise run only the matching thread(s).
2. For each thread, launch a subagent (Agent tool) whose prompt embeds: the matching `deal-*` agent persona file content, the relevant excerpts from `deal-room/source/` and `deal-room/data/findings.json`, the labeling rules (EVIDENCE/INFERENCE/RECOMMENDATION, ≥2 sources per number, WebSearch/WebFetch only, no fabricated figures), and the target `deal-room/research/<file>.md`.
3. When results return, write each research file with its `as_of` date, then merge any `findings.json patch` blocks into `deal-room/data/findings.json` (cost bands, confidence, sources).
4. Finish with a diff summary: which findings changed cost bands, which remain null/unverified, and whether the strategist is unblocked (all in-ask findings costed).
5. Append a one-line JOURNAL entry, commit, and push.
