---
name: deal-comms
description: Ingest and monitor deal communications (iMessage threads with Olivia and Zach, plus Gmail from zrwest10@gmail.com / oliviamboeh@gmail.com) for the Stonington sale. Extracts status changes, new documents, items out for signature, and outstanding actions into the deal room's journal and to-do list. Use for "/deal-comms", "catch me up on the deal", "what's outstanding", or on a scheduled monitoring run.
origin: project
---

# deal-comms — deal communication ingestion & monitoring

Turns raw conversation into deal-room state. Two modes: a one-time **recon**
over history, and a recurring **monitor** over what's new since the last run.

## Ground rules

1. **Read-only on the sources.** Never send an iMessage or email. Drafts only,
   and only when asked. The humans send.
2. **Deal-relevant only.** These threads carry personal and co-parenting
   content. Extract *only* what pertains to the sale: repairs, quotes,
   documents, signatures, money, scheduling, agent/buyer communication. Ignore
   and never transcribe everything else.
3. **Nothing sensitive lands in git.** Personal message text is not copied into
   the repo. Write *derived facts* only ("Zach confirmed radon install booked
   for 8/17"), never message dumps or screenshots.
4. **Evidence-tagged.** Each extracted fact carries its source and date:
   `[imessage 8/11]` / `[gmail 8/12 zrwest10@]`. If a fact is inferred rather
   than stated, say so.
5. **Never auto-approve anything.** Signature requests, dollar figures, and
   scope changes get surfaced for the humans, never accepted on their behalf.

## Access prerequisites

| Channel | Requirement | Check |
|---|---|---|
| iMessage | Chats allowlisted via `/imessage:access` (user runs it in their terminal) | `chat_messages` returns threads, not "no allowlisted chats" |
| Gmail | Connector authorized for **jeffvboeh@gmail.com** (the personal account, where agent mail lands) | `search_threads` for `from:zrwest10@gmail.com` returns hits |

If a channel is unavailable, report it plainly and process the other. Never
guess at contents.

## Mode 1 — Recon (one-time catch-up)

1. Pull iMessage history for the Olivia DM and any group with Zach; pull Gmail
   threads matching `from:(zrwest10@gmail.com OR oliviamboeh@gmail.com) OR
   subject:(Stonington OR defect OR radon OR roof OR closing)`.
2. Extract, in deal terms:
   - **Decisions made** (branch chosen, number agreed, scope settled)
   - **Documents** sent/received/**out for signature** and by whom
   - **Quotes** — contractor, amount, what's included
   - **Commitments with dates** — "installing Tuesday", "sending tonight"
   - **Open loops** — questions asked and never answered
3. Reconcile against `deal-room/data/` — what's already known vs. new.
4. Write: new facts to `log/JOURNAL.md` (one line each, sourced), new actions
   to `data/todos.json`, quote amounts onto the matching finding in
   `data/findings.json`.
5. Report a tight summary: **Done / In flight / Outstanding / Needs a human
   decision**.

## Mode 2 — Monitor (recurring)

Same extraction, but scoped to messages newer than the last run (track the
watermark in the journal's most recent `[comms]` entry). Only report when
something changed; silence is a valid result. Escalate immediately — with a
push notification — when a message implies:

- A **deadline** moved, or one is at risk
- Something is **out for signature** and unsigned
- A **quote materially different** from the deal-room estimate
- The buyers or their agent raising a **new objection**

## Output contract

Append to `deal-room/log/JOURNAL.md`:

```
- YYYY-MM-DD HH:MM ET — [comms] <derived fact>. (src: imessage|gmail, <date>)
```

To-dos get a title, assignee, and due date when the message implies one.
Commit and push after writing. Never commit raw message text.
