---
description: Record a deal event (e.g. "response delivered - option e", "roofer quote received 4200 dollars", "conditional approval received", "closed!") - appends to deal-room/log/JOURNAL.md and updates deal state and milestones.
argument-hint: "<event description>"
---

Load the `deal-room` skill (data-contract rule: data files first, deliverables regenerate). Then:

1. Append `- <today> — [human] $ARGUMENTS` to `deal-room/log/JOURNAL.md`.
2. Update state to match the event: the deal-state line in `deal-room/DEAL_BRIEF.md` (e.g., AWAITING_SELLER_RESPONSE → RESPONSE_DELIVERED / SETTLEMENT_PERIOD / REPAIRS_IN_PROGRESS / CLEAR_TO_CLOSE / CLOSED / TERMINATED), and the matching milestone `status` in `deal-room/data/milestones.json` (open → done, or activate `settlement-period-end` with its computed end date if a counter was delivered).
3. If the event is a received quote or repair completion, update the matching finding in `deal-room/data/findings.json` (actual cost, receipt noted).
4. If the event changes what deliverables say (e.g., a counter came back), flag which deliverables are now stale and offer `/deal-memo`.
5. If the event is CLOSED or TERMINATED: write the wrap-up JOURNAL entry and delete the deal-room triggers (list_triggers → delete_trigger for deal-room-* and remaining one-shots).
6. Run the redaction gate over the entry (no exact personal dollar figures, no account numbers), then commit and push.
