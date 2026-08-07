---
name: deal-room
description: Playbook for running the Stonington Rd real-estate deal room - document intake, parallel research fan-out, synthesis, council decision, memo drafting, and the tracking loop through the 2026-08-28 closing. Use for any question about the home sale, the defect-notice response, deal deadlines, repair costs, or when a /deal-* command is invoked.
origin: project
---

# Deal Room Playbook — 6840 Stonington Rd

## Ground rules (apply to every phase)

1. **Not legal advice.** Every contract/legal-adjacent output opens with: "⚠️ Informational analysis only — not legal advice. Review with your agent and, where material, an Ohio real estate attorney." Same discipline for tax and insurance topics.
2. **Evidence labeling** (research-ops convention): every claim is **EVIDENCE** (sourced, inline `[Source](url)`), **INFERENCE** (derived, assumptions stated), or **RECOMMENDATION**. No fabricated numbers — a missing figure is `null` + "no reliable source found", never a guess. Cost figures require ≥2 independent sources or get `cost_confidence: "unverified"` and are excluded from totals.
3. **Research tooling:** firecrawl/exa MCPs are NOT configured in this repo — use WebSearch/WebFetch only.
4. **Redaction gate** (owned by deal-finance-analyst — run before every commit touching `deal-room/`): grep staged content for SSN patterns (`[0-9]{3}-[0-9]{2}-[0-9]{4}`), 8+ consecutive digits, exact dollar figures in finance files beyond the public contract facts ($585,000 / $10,000 / $10,000), creditor names, separation-strategy language. Any hit → rewrite as a band/category and re-scan. Exact personal figures live in-session only; `data/finance-context.md` holds bands.
5. **Humans decide.** Agents produce analysis, drafts, and checklists. Nothing is ever sent externally (email, message, form submission). At most, a Gmail *draft* may be created on explicit request.
6. **Neutrality.** The sellers are separating but share one goal: close on time. Keep all analysis neutral between them; never record anything one spouse wouldn't want the other to read.

## Data contract

| File | Role |
|---|---|
| `deal-room/DEAL_BRIEF.md` | Single source of truth for facts, parties, timeline, deal state (top line) |
| `deal-room/data/findings.json` | Repair findings + cost bands + sources; `status: in-ask \| waived` |
| `deal-room/data/milestones.json` | The clock — every dated obligation through closing |
| `deal-room/data/finance-context.md` | Banded personal/financial inputs (single source for all money math) |
| `deal-room/log/JOURNAL.md` | Append-only event log (humans, triggers, and agents all write here) |
| `deal-room/research/` | Cited research outputs, one file per thread, `as_of`-dated |
| `deal-room/deliverables/` | Regenerable outputs — always derived from data + research, never hand-edited as the source of truth |

**Rule: update data files first; deliverables are regenerated from data.** An event (response sent, quote received, approval landed) goes to JOURNAL + milestones/findings first, then deliverables that depend on it are refreshed.

## Phase 1 — Intake

New documents (quotes, lender letters, amendments, disclosures): extract text to `deal-room/source/` (with a "verify against original" header), merge facts into DEAL_BRIEF, update findings/milestones, append a JOURNAL entry. PDFs: use pypdf (installed per-session; see repo scratchpad pattern) or the Read tool.

## Phase 2 — Research fan-out

Dispatch parallel subagents (team-builder pattern, ≤5 at once; use the `deal-*` agent personas via the Agent tool, embedding the persona file content + relevant source excerpts in each prompt — subagents have no conversation context). Standard wave-1 threads:

| Thread | Agent persona | Output |
|---|---|---|
| Roofing costs (RS-1/2/3/6, EG-2) + insurance angle | deal-cost-analyst | `research/costs-roofing.md`, `research/insurance-angle.md` |
| Gutters (RS-4/5) + radon mitigation | deal-cost-analyst | `research/costs-gutters-radon.md` |
| Contract mechanics, option-(e) escrow, disclosure duty | deal-contract-analyst | `research/contract-timeline-analysis.md` |
| Market / BATNA | deal-market-analyst | `research/market-batna.md` |

Each prompt states: the questions, the labeling rules, ≥2-sources-per-number, WebSearch/WebFetch only, and the target output file (subagent returns text; main session writes the file).

## Phase 3 — Synthesis

Merge research into `findings.json` (cost bands + sources + confidence). Then deal-strategist writes `deliverables/OPTIONS_ANALYSIS.md`: options (a)–(f) plus dominant hybrids, scored 1–5 on six axes (cost, closing risk, pre-08/28 feasibility, buyer psychology, net proceeds, separation-simplicity), every cell justified and labeled. Strategist must refuse to score while in-ask cost fields are null.

## Phase 4 — Council

Invoke the `council` skill on the live decision (default: "Which Defect Notice response do we deliver by Aug 10?") with DEAL_BRIEF + OPTIONS_ANALYSIS + net-proceeds scenarios as context. Architect/Skeptic/Pragmatist/Critic verdict → `deliverables/COUNCIL_VERDICT.md`.

## Phase 5 — Memos

deal-strategist drafts, in order: `RESPONSE_MEMO.md` (recommendation + fallback ladder), `DRAFT_RESPONSE_LANGUAGE.md` (verbatim fill-in text per form option, dollar blanks for Amy), `DISCUSSION_ONE_PAGER.md` (≤1 page for the humans' meeting). deal-finance-analyst runs the redaction gate; commit + push.

## Phase 6 — Tracking loop (through 2026-08-28)

Registered claude-code-remote triggers (self-bound to the deal session):

- **Daily** `deal-room-daily-status` (8:00 AM ET): run `/deal-status`; for any milestone within 48h produce its action checklist; flag missed expected events AT RISK with the concrete next step; append a one-line JOURNAL entry; commit + push.
- **One-shots**: Aug 9 PM (response-due-tomorrow escalation — deemed-acceptance warning), Aug 19 (conditional-approval + option-(e) paperwork checklist), Aug 23 (T-5: repairs/receipts/radon-retest), Aug 24 PM (re-inspection prep from findings.json), Aug 25 PM (walk-through prep + closing logistics + wire-fraud phone-verification reminder), Aug 28 (confirm closed → final JOURNAL entry → delete daily trigger).

Every firing is **read → analyze → checklist → log → commit**. Never send anything external. If the human path changed (e.g., counter delivered → Settlement Period live), update `milestones.json` first, then report. After closing is logged, write the wrap-up entry and delete remaining triggers.

## Commands

`/deal-status` (countdown + DO TODAY), `/deal-research [topic]` (fan-out), `/deal-council [question]`, `/deal-memo [all|memo|one-pager|draft-language]`, `/deal-log <event>` (the loop's memory — humans report events through it).
