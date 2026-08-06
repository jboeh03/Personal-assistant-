# Westside Property Care (WPC513)

Business model, brand, website, marketing, and field operations for a solo residential
outdoor-living property-care service on Cincinnati's west side.

**Start here: [`CANON.md`](CANON.md)** — the non-negotiables every agent and human works
from. If you read one file, read that one.

## What's in here

| Directory | Contents |
|---|---|
| `_source/` | The original AI-drafted "4-Client Model" manual, frozen. Input only — superseded by `00-model/`. |
| `00-model/` | The refined business model: cap, pricing, service scope, target client, unit economics, and a log of what changed from the draft and why. |
| `01-brand/` | Positioning, promise, voice profile, message hierarchy, visual direction. |
| `02-website/` | Site spec, full copy deck, SEO plan, and the buildable static site under `site/`. |
| `03-marketing/` | Go-to-market plan, neighborhood campaign, Google Business Profile setup, and the conditional TSGC warm-list campaign. |
| `04-operations/` | Service agreement, per-visit SOPs, service-report templates, property record, estimate templates, and the tooling/legal checklist. |
| `05-playbook/` | The step-by-step execution sequence. Every step is a self-contained brief you can hand to a subagent, plus the human-only checklist with real lead times. |

## Status

**Re-baselined 2026-08-05** to the documents the owner shipped — a signed-form service
agreement, a laminated field checklist, a work-block plan, and a finished logo, carrying the
instruction *"PRICING & SCOPE ARE DONE. DON'T CHANGE IT AGAIN."* Six locked facts changed:
the price, the season, the visit structure, the name, the pool scope, and the identity. His
documents are frozen in `_source/2026-08-05-owner-decisions.md`; every reversal and its
reasoning is in `00-model/decisions.md` from D-18 onward.

Verified mechanically, not asserted:

| Check | Result |
|---|---|
| `00-model/verify-unit-economics.py` | **273/273 assertions pass**, including guards that fail if a dead price or a twelve-month membership figure reappears |
| Dead prices and dead season strings | Clean — every remaining hit is a reversal note, an audit row, or a "there is no X" statement |
| Banned geography, fabricated proof | Clean — every hit is a prohibition |
| Site CSS / JS, gzipped | **18.7 KB / 1.4 KB** against 30 KB / 150 KB budgets |
| Placeholders | All deliberate and registered; no TODO, TBD, or lorem |
| Root Next.js app | Unaffected — excluded from its Vercel deploy and `tsconfig`, and this directory holds zero `.ts`/`.tsx` files |

**What is not verified here:** no browser, Lighthouse, or axe run was possible in this
environment. Every accessibility and performance claim comes from reading the markup and
computing contrast by hand against the literal token values. `02-website/site-spec.md` §12
says so explicitly rather than implying a pass. Run a real browser audit before launch.

**Before this can take money,** work `05-playbook/human-checklist.md`. Insurance, a verified
Google Business Profile, tested card-on-file billing, and at least one set of real
photographs all gate the first paying customer, and none of them can be produced here.

## How to run it

Open [`05-playbook/PLAYBOOK.md`](05-playbook/PLAYBOOK.md) and work the steps in order. Each
step names its agent, its dependencies, its inputs and outputs, and its acceptance criteria.
The brief inside each step is written to be pasted directly to a subagent that has never
seen this project.

Steps 01–03 are the critical path and must run in order. After that, the website, marketing,
and operations workstreams run in parallel over disjoint directories.

## The short version of the model

Six clients maximum, **$279 a month**, one price regardless of what the property has. Two
visits a month, **March 1 through October 31** — sixteen visits a season — with up to two
hours on site per visit. Mondays and Fridays only; Tuesday through Thursday stays open for
project work, **which is where the actual income comes from.**

Full 2027 season at six clients: **$25,192 gross, $19,887 net** across 460 hours.

Two things the arithmetic says out loud, in `00-model/unit-economics.md`:

- **The membership can no longer carry the business.** With no project revenue at all it pays
  $33.25/hr, down from $45.41 under the superseded year-round model. Project work is the
  plan, not the upside.
- **2026 is a launch year, not an earnings year.** Signing in August with three months of
  season left, the realistic outcome is two members, not four.

Why it is a membership rather than sixteen appointments:

> **You are not buying sixteen visits. You are buying the sixteenth one** — the visit where
> he already knows which gate sticks, which well fills, and what the maple does in September,
> because he wrote down the other fifteen.

## Deploy note

The site under `02-website/site/` is **standalone static HTML and CSS** — no framework, no
build step. This is deliberate: it keeps the site portable enough to drop into any host or
paste into an existing project, and it avoids colliding with the Next.js app at this
repository's root. `westside-property-care/` is excluded from that app's Vercel deploy and
TypeScript build.

To preview locally:

```bash
cd westside-property-care/02-website/site && python3 -m http.server 8000
```
