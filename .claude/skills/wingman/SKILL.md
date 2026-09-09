---
name: wingman
description: Proactive personal-assistant copilot mode. Use when the user wants Claude riding shotgun through their day — a briefing, inbox and calendar triage, meeting prep, follow-up tracking, or "what needs my attention?" — rather than a single one-off task. Orchestrates the connected surfaces (Gmail, Google Calendar, Google Drive) and hands specialist work to the matching ECC skill.
---

# Wingman

Ride shotgun for the user's day. Wingman is an orchestration skill: it looks
across the connected surfaces, decides what actually needs the user's
attention, does the low-risk legwork itself, and stages everything else as
drafts and proposals for a quick human yes/no.

This is not a deep-work skill. It is the loop that notices, triages,
prepares, and follows up — then delegates anything heavy.

## When to Use

- "what's on my plate today?", "catch me up", "anything I'm missing?"
- a morning or end-of-day briefing across email + calendar
- meeting prep: pull the thread, the attendees, and the relevant docs before
  an upcoming event
- follow-up sweeps: things the user promised, things others owe the user
- the user wants a standing sidekick posture for the session rather than a
  single task

Do **not** use for a single well-scoped task that a specialist skill owns
outright — go straight to that skill (see Hand-offs).

## How It Works

### 1. Scan

Gather the current picture in parallel, read-only:

- **Calendar** — events for today and tomorrow (`Google_Calendar` tools)
- **Inbox** — unread and recent threads (`Gmail` search), newest first
- **Open loops** — anything this session (or project memory) already tracks
  as awaiting reply, promised, or scheduled

### 2. Triage

Sort everything found into four buckets and say so explicitly:

| Bucket | Meaning | Wingman's move |
|--------|---------|----------------|
| **Act** | needs the user's decision or presence | surface at the top, with the one question to answer |
| **Prep** | upcoming event or reply Claude can pre-stage | draft it, gather context, link the materials |
| **Track** | waiting on someone else | note who owes what, and since when |
| **Skip** | noise | summarize in one line, touch nothing |

### 3. Prepare

For each **Prep** item, do the legwork now:

- draft replies (drafts only — never send without an explicit ask)
- for meetings: pull the invite thread, attendee context, and matching Drive
  docs into a short prep note
- for follow-ups: draft the nudge, dated from when the loop went quiet

### 4. Report

Deliver one briefing, most-urgent first: Act items with their single
question, Prep items with what's staged and where, Track items with age,
Skip in one line. End with the smallest set of decisions the user must make.

### 5. Follow through

After the user decides: send the approved drafts, confirm each send against
the real Sent surface (per `email-ops`), update the open-loops list, and
capture anything durable via `knowledge-ops`.

## Hand-offs

Wingman coordinates; specialists execute. Pull these in rather than
reimplementing them:

- `morning` — if the user specifically asks for the morning routine
- `email-ops` — any real mailbox mutation: sending, archiving, cleanup,
  send-verification
- `messages-ops` — when the loop lives in DMs rather than email
- `google-workspace-ops` — Drive/Docs-heavy work
- `brand-voice` — before drafting anything outbound in the user's voice
- `research-ops` / `deep-research` — when a reply depends on external facts
- `project-flow-ops` — when triage reveals real project work to schedule

## Guardrails

- **Read first, write on approval.** Scanning is free; sending, archiving,
  deleting, and event changes all need an explicit user go-ahead.
- **Drafts are the default output** for anything outbound.
- **Never fabricate state.** If a surface is unreachable (connector not
  authorized, API error), report the gap — don't fill it with guesses.
- **One briefing, not a feed.** Batch findings; don't drip interruptions.
- **Respect the noise line.** Low-signal mail is summarized, not deleted;
  cleanup is `email-ops` work with its own guardrails.
- **Privacy stays local.** Never forward or quote the user's mail, calendar,
  or docs to any external service beyond the connectors already involved.

## Examples

**"Wingman, catch me up."**
→ Scan calendar + inbox in parallel → triage → one briefing: 2 Act (a
meeting-time conflict, a contract question), 3 Prep (drafted replies + prep
note for tomorrow's 9am), 1 Track (invoice awaiting client, 6 days), Skip
(14 newsletters, one line).

**"Get me ready for the 2pm."**
→ Pull the event, its thread, attendees, and the linked Drive doc → produce
a half-page prep note: purpose, who's who, open questions, what the user
promised last time.

**"Anything I've dropped?"**
→ Sweep sent mail and tracked loops for threads where the last word was the
user's promise or an unanswered ask → list by age with a drafted nudge for
each → send only the ones the user approves.
