# WPC513 Stand-Up Playbook

> ## ⚠️ Re-baselined 2026-08-05 — the build is done, the facts changed
>
> All fourteen steps ran, and then the owner shipped decisions that superseded parts of the
> result: **one price ($279), a March–October season, a two-hour on-site cap, the
> Westside Property Care 513 name, a heavier pool scope, and a navy-and-orange logo.**
>
> The whole project was reworked to match — see `00-model/decisions.md` from **D-18**.
>
> **The step briefs below still quote the old facts.** Their *method* is sound and worth
> reusing; their *numbers* are not. Every brief carries a banner saying so. Take business
> facts from [`../CANON.md`](../CANON.md) and `00-model/`, never from a step file.
>
> If you are picking this up fresh: read `CANON.md`, then
> `_source/2026-08-05-owner-decisions.md`, then `00-model/decisions.md`. That is the whole
> story in three files.

The step-by-step sequence that stood up Westside Property Care 513. Every step is a
**self-contained brief** — you can paste it to a subagent that has never seen this project
and it will have everything it needs.

## How to use this

1. Work steps in order. Check the **Depends on** line before starting one.
2. Open the step's brief file and paste its **Brief** block to a subagent, using the agent
   named in the step. Steps that share an agent and a directory are grouped into one file,
   because the agent needs the earlier outputs in context to produce the later ones:

   | Steps | Brief file |
   |---|---|
   | 03 | [`steps/step-03-business-model.md`](steps/step-03-business-model.md) |
   | 04 | [`steps/step-04-brand.md`](steps/step-04-brand.md) |
   | 05–08 | [`steps/step-05-08-website.md`](steps/step-05-08-website.md) |
   | 09–11 | [`steps/step-09-11-marketing.md`](steps/step-09-11-marketing.md) |
   | 12–14 | [`steps/step-12-14-operations.md`](steps/step-12-14-operations.md) |
   | 15–16 | [`steps/step-15-16-review.md`](steps/step-15-16-review.md) |
3. When the agent returns, walk its **Acceptance** checklist before moving on.
4. Anything in **Human action required** cannot be done by an agent. Start those early —
   see [`human-checklist.md`](human-checklist.md).

**On agents:** the five `wpc-*` agents live in `.claude/agents/` and are available as
subagent types in any *new* Claude Code session. In a session where they aren't yet
registered, run the step with `general-purpose` and keep the brief's first instruction —
"read `.claude/agents/wpc-<name>.md` and follow it as your system prompt." The result is
the same.

## Dependency graph

```
Step 01  Scaffold + CANON + guard rails
   │
Step 02  Agent team
   │
Step 03  00-model/   ← THE CRITICAL PATH. Everything below reads this.
   │
Step 04  01-brand/   ← voice + visual direction. Everything below reads this too.
   │
   ├─────────────────┬─────────────────┐
   │                 │                 │
Steps 05–08       Steps 09–11       Steps 12–14
 wpc-web          wpc-marketing      wpc-ops
 02-website/       03-marketing/      04-operations/
   │                 │                 │
   └─────────────────┴─────────────────┘
                     │
Step 15  Review pass (SEO, a11y, voice audit, code review)
   │
Step 16  Consistency sweep + launch readiness
```

Steps 03 and 04 are **strictly sequential** — they produce the source of truth every other
step consumes. Steps 05–14 are three independent workstreams over disjoint directories and
can run **concurrently**.

## The steps

| # | Step | Agent | Depends on | Writes |
|---|---|---|---|---|
| 01 | Scaffold, CANON, deploy guard rails | orchestrator | — | `CANON.md`, tree, `.vercelignore`, `tsconfig.json` |
| 02 | Author the five WPC agents | orchestrator | 01 | `.claude/agents/wpc-*.md` |
| 03 | **The refined business model** | `wpc-strategist` | 02 | `00-model/` |
| 04 | **Brand, voice, visual direction** | `wpc-brand` | 03 | `01-brand/` |
| 05 | Site spec and information architecture | `wpc-web` | 04 | `02-website/site-spec.md` |
| 06 | Website copy deck | `wpc-web` | 05 | `02-website/copy-deck.md` |
| 07 | Build the static site | `wpc-web` | 06 | `02-website/site/` |
| 08 | SEO and Google Business Profile alignment | `wpc-web` | 05 | `02-website/seo.md` |
| 09 | Go-to-market plan | `wpc-marketing` | 04 | `03-marketing/gtm-plan.md` |
| 10 | Neighborhood campaign and print assets | `wpc-marketing` | 09 | `03-marketing/neighborhood-campaign.md`, `assets/` |
| 11 | GBP setup and conditional warm-list campaign | `wpc-marketing` | 09 | `03-marketing/google-business-profile.md`, `warm-list-campaign.md` |
| 12 | Service agreement | `wpc-ops` | 03 | `04-operations/service-agreement.md` |
| 13 | Visit SOPs and service-report templates | `wpc-ops` | 03 | `04-operations/visit-sop.md`, `service-report-templates.md` |
| 14 | Property record, estimates, tooling checklist | `wpc-ops` | 03 | `04-operations/property-record-template.md`, `estimate-templates.md`, `tooling.md` |
| 15 | Review pass | `seo-specialist`, `a11y-architect`, `wpc-brand`, `code-reviewer` | 07, 10, 13 | findings only |
| 16 | Consistency sweep and launch readiness | orchestrator | 15 | fixes across all directories |

## Realistic one-week shape

| Day | Agent work | Human work (start day 1 regardless) |
|---|---|---|
| 1 | Steps 01–04 | **Google Business Profile** (longest lead time — verification can take days to weeks), LLC + EIN |
| 2 | Steps 05–14 fan out in parallel | Insurance quotes, business bank account |
| 3 | Finish fan-out, Step 15 review | Stripe setup, local phone number |
| 4 | Step 16 sweep and fixes | **Photograph real completed work** |
| 5 | Site deploy, print files to vendor | Sign the agreement template with an attorney's eyes on it |

**The binding constraint is not agent work — it is Google Business Profile verification and
real photography.** Both start on day 1.

## Rules that apply to every step

- **Read `../CANON.md` first.** Always. Its numbers are locked.
- **Stay in your lane.** Each agent writes to exactly one directory. Never edit another
  agent's output — report the problem instead.
- **Never invent a price.** Quote `00-model/pricing.md` verbatim. Price drift across
  documents is the most likely defect in this project.
- **Never invent proof.** No testimonials, review counts, credentials, crews, or years in
  business. He is new; specificity is the substitute for social proof.
- **WebFetch and curl are blocked** (403 on every host). WebSearch works. Playwright cannot
  launch. Do not plan around tools that aren't there.
- **Real photos, not stock.** Mark every image slot with what the real photo must show.
