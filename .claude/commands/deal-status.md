---
description: Show Stonington Rd deal countdown - days to each milestone, current deal state, at-risk items, and today's required actions. Read-only.
---

Load the `deal-room` skill's ground rules, then:

1. Get today's date (`date` in America/New_York terms) and read `deal-room/data/milestones.json`, the deal-state line of `deal-room/DEAL_BRIEF.md`, and the last ~10 entries of `deal-room/log/JOURNAL.md`.
2. Render a countdown table: milestone | date | days left | status. Mark passed-but-unresolved milestones **AT RISK** with the concrete next step.
3. Anything due within 48 hours goes in a bold "**DO TODAY / TOMORROW**" block at the top.
4. If the `defect-response` milestone is still open and ≤1 day away, print prominently: **"⚠️ NO RESPONSE BY END OF AUG 10 = YOU ARE DEEMED TO HAVE AGREED TO ALL REQUESTED REPAIRS (§15(b))."**
5. If the `settlement-period-end` milestone is live (a counter was logged), show the auto-termination warning with its exact end date.
6. End with the current deal state and the single most important next action.

Do not modify any files. $ARGUMENTS may name a specific milestone id for detail.
