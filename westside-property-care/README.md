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

## How to run it

Open [`05-playbook/PLAYBOOK.md`](05-playbook/PLAYBOOK.md) and work the steps in order. Each
step names its agent, its dependencies, its inputs and outputs, and its acceptance criteria.
The brief inside each step is written to be pasted directly to a subagent that has never
seen this project.

Steps 01–03 are the critical path and must run in order. After that, the website, marketing,
and operations workstreams run in parallel over disjoint directories.

## The short version of the model

Six clients maximum. $229 / $289 / $329 per month depending on whether the property has a
pool and an outdoor kitchen. Two visits a month, Mondays and Fridays of weeks 1 and 3. Same
price year-round, with a different scope in winter. Tuesday through Thursday stays open for
project work — **which is where the actual income comes from.** The membership's job is to
put a trusted person on the property 24 times a year and find that work.

Roughly $35k/year at 1.5–2 days per week.

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
