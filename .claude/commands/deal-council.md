---
description: Convene the council skill on a deal decision (default - which Defect Notice response option to submit by Aug 10). Writes verdict to deal-room/deliverables/COUNCIL_VERDICT.md.
argument-hint: "[decision question]"
---

Load the `deal-room` skill, then invoke the `council` skill:

1. Decision question = `$ARGUMENTS`, or if empty: "Which Defect Notice response — (a) do all repairs, (b) amended subset, (c) price reduction, (d) closing-cost credit, (e) escrowed contractor funds for post-closing work, (f) refuse, or a hybrid — should the sellers deliver by end of Aug 10?"
2. Compact context for the council voices: the timeline + options tables from `deal-room/DEAL_BRIEF.md`, the scored matrix from `deal-room/deliverables/OPTIONS_ANALYSIS.md`, cost bands from `deal-room/data/findings.json`, and the bottom line of `deal-room/research/market-batna.md`. Keep it under ~2K words per voice; fresh subagents per the council skill's anti-anchoring rule.
3. Write the verdict (Consensus / Strongest dissent / Premise check / Recommendation) to `deal-room/deliverables/COUNCIL_VERDICT.md` with the not-legal-advice banner.
4. Append a JOURNAL entry, commit, push.
