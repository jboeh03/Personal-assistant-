---
description: Regenerate deal deliverables from current deal-room data via deal-strategist - options analysis, response memo, draft response language, one-page discussion sheet. Runs the redaction gate before committing.
argument-hint: "[all|options|memo|draft-language|one-pager|net-proceeds]"
---

Load the `deal-room` skill, then:

1. Parse `$ARGUMENTS` (default `all`). Regeneration order when `all`: `net-proceeds-scenarios.md` (deal-finance-analyst persona) → `OPTIONS_ANALYSIS.md` → `RESPONSE_MEMO.md` → `DRAFT_RESPONSE_LANGUAGE.md` → `DISCUSSION_ONE_PAGER.md` (deal-strategist persona, locked order).
2. The strategist must read all of `deal-room/` first and refuse to score options while any in-ask finding in `findings.json` has null/unverified costs — in that case run `/deal-research` for the gaps instead.
3. Every deliverable carries the banner: "⚠️ Strategy analysis, not legal advice — review with your agent and an Ohio attorney before signing."
4. Run the redaction gate (deal-room skill ground rule 4) over everything staged.
5. Commit and push; summarize what changed and paste the one-pager inline in the reply.
