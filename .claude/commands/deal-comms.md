---
description: Ingest and reconcile deal communications (iMessage with Olivia/Zach, Gmail from the agents) into the deal room — status, documents out for signature, quotes, and outstanding actions. Pass "recon" for a full catch-up or "monitor" (default) for what's new.
argument-hint: "[recon|monitor]"
---

Load the `deal-comms` skill and follow it exactly.

1. Parse `$ARGUMENTS`: `recon` = full history catch-up; anything else (default)
   = monitor since the last `[comms]` entry in `deal-room/log/JOURNAL.md`.
2. Check access first (iMessage allowlist, Gmail account). Report any channel
   that is unavailable and continue with the rest — never guess at contents.
3. Extract deal-relevant facts only; ignore personal/co-parenting content
   entirely and never transcribe it.
4. Write derived facts to the journal, new actions to `data/todos.json`, and
   quote amounts onto the matching finding in `data/findings.json`.
5. Report: **Done / In flight / Outstanding / Needs a human decision.**
6. Commit and push. Never commit raw message text. Never send anything.
