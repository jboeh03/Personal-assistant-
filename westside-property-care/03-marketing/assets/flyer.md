# Asset — The Flyer

**Used by:** `neighborhood-campaign.md` §6, §5 · `warm-list-campaign.md` (as an optional email attachment, once confirmed) · **Tracks:** B primarily, usable across A and C
**Placeholders in this file:** `[PHONE]`, `[URL]` — see `gtm-plan.md` §8 for the full registry

> **This is the one flyer.** He asked for exactly one, and said *"No endless redesigns."* This
> file specifies it once, to his own standard: *a homeowner understands in 10 seconds — what you
> do → who it's for → price → how to contact you.* There is no second flyer, no seasonal variant,
> and no A/B test. The only things that change over time are the two dynamic facts —
> `{{slots_open}}` and the MEMBERSHIP FULL swap — and both are content updates to one file, not
> redesigns.

---

## The five elements, and nothing else

He listed exactly five things this flyer has to carry. Each one gets its own section below, in
the order it appears on the page, and the flyer carries no sixth element.

1. **The WPC513 logo**
2. **A strong property image**
3. **The plan and its price**
4. **Services: Pool | Outdoor Kitchen | Exterior**
5. **Website + Request Service CTA**

---

## Layout, top to bottom

### 1. The WPC513 logo

Full lockup per `visual-direction.md` §7.1 — the `--navy` square, the house-and-tree line mark,
the `WPC 513` wordmark, the rule, `WESTSIDE PROPERTY CARE` in small caps beneath it. Placed
top-left at minimum 1.25" per the door-hanger/letterhead sizing in §7.3 of that file. This is the
only place on the flyer the abbreviated lockup form appears — everywhere else on the page, the
full name **Westside Property Care 513** is spelled out on first reference per `brand-brief.md`
§1.2.

### 2. A strong property image

Runs the full width of the page beneath the logo strip, bleeding to both side edges — the bleed
track treatment from `visual-direction.md` §4.2. **No stock photography, ever, as a final
answer** (`CANON.md` §10.6). Until a real photo exists, ship the ruled placeholder band instead:
a `--paper-deep` rectangle at the same dimensions, with a mono caption stating exactly what the
real photo must show, per `visual-direction.md` §8's shot list, frame 1:

> *A pool deck or patio mid-visit, standing height, his own equipment in frame — blower down, a
> pool net leaning against a chair. No people, no faces, no house that identifies a client.*

This is not a placeholder to "swap later and forget about" — it is the honest interim state, and
it looks intentional rather than unfinished (`visual-direction.md` §8, rule 2).

### 3. The plan and its price

One line, set large, in `--type-figure` mono per `visual-direction.md` §3.3:

> **$279 a month.** That's the whole price list.

Directly beneath it, in body text, the season and the cap — both required clauses travel with
the cap wherever it's stated (`voice.md` §8 item 39):

> Two visits a month, March 1 through October 31 — sixteen visits a season. Up to two hours on
> site each visit, highest priority first; not every task gets to every visit, and unused time
> doesn't roll over.

**Never divide $279 by anything on this page.** No per-hour, per-visit, or per-week figure
appears near the price (`voice.md` §3, the hours-arithmetic rule).

### 4. Services: Pool | Outdoor Kitchen | Exterior

Exactly the three headings he specified, each with one line of what it means and the pool
disclaimer traveling with the pool line, in the same block, per `voice.md` §8 item 41:

> **Pool** — Skimmed, brushed, vacuumed, both baskets emptied, backwashed and checked. I don't
> guarantee the water.
>
> **Outdoor Kitchen** — Counters and grill exterior wiped, grease tray emptied. Deep cleans
> quoted separately, from $249.
>
> **Exterior** — Patio and furniture wiped down, debris cleared, trash cans emptied, walkways
> swept.

**Who it's for**, one line, immediately under the three services — this is what answers his own
"who it's for" clause of the 10-second test without adding a sixth element, since it's part of
the services block rather than a separate section:

> For homes with a pool, an outdoor kitchen, or both. Six properties only.

### 5. Website + Request Service CTA

One line, bottom of the page:

> Request service at `[URL]`, or call or text `[PHONE]`.

Directly above it, the real slot count — required by `voice.md` §6.5 (the real number, never a
manufactured one) and by the hard constraint that this business never implies unlimited
availability:

> **{{slots_open}} of the six spots are open.**

**MEMBERSHIP FULL swap.** The instant the book fills, this line and the CTA above it are
replaced — not deleted, replaced — with the language from `voice.md` pair 7:

> **MEMBERSHIP FULL.** All six spots are taken — that's the actual cap, not a sales line. Add
> your name to the waitlist at `[URL]`, or call or text `[PHONE]` about the grill and outdoor
> kitchen work I still do, from $249.

This swap is the one and only content variation this flyer ever has. It is not a redesign — it's
the same layout with the true count in the box, which is exactly what the dynamic-token system
in `voice.md` and `gtm-plan.md` §8 exists to keep honest.

---

## Full copy, assembled

> [WPC513 lockup]
>
> [property image / placeholder band]
>
> **$279 a month.** That's the whole price list.
> Two visits a month, March 1 through October 31 — sixteen visits a season. Up to two hours on
> site each visit, highest priority first; not every task gets to every visit, and unused time
> doesn't roll over.
>
> **Pool** — Skimmed, brushed, vacuumed, both baskets emptied, backwashed and checked. I don't
> guarantee the water.
> **Outdoor Kitchen** — Counters and grill exterior wiped, grease tray emptied. Deep cleans
> quoted separately, from $249.
> **Exterior** — Patio and furniture wiped down, debris cleared, trash cans emptied, walkways
> swept.
>
> For homes with a pool, an outdoor kitchen, or both. Six properties only.
>
> **{{slots_open}} of the six spots are open.**
> Request service at `[URL]`, or call or text `[PHONE]`.

---

## Why these five and nothing more

His own standard, from the work-block plan, is the whole brief: *a homeowner understands in 10
seconds what you do, who it's for, the price, and how to contact you.* Mapped against the five
elements:

| His 10-second test | Where it's answered |
|---|---|
| What you do | The three services and the visit cadence under the price |
| Who it's for | The line under Services, plus the property image |
| The price | Element 3, set largest on the page |
| How to contact you | Element 5 |
| (Credibility, unstated but load-bearing) | The logo — a finished, printed identity, not a claim |

Nothing on this page argues for itself beyond that. No testimonial slot, no years-in-business
line, no crew photo (`brand-brief.md` §4.4 — none of that exists and none of it may be
implied). If a version of this flyer ever feels like it needs more to look finished, the fix is
a better photograph, not a sixth section.

---

## Dimensions and production

| Spec | Value |
|---|---|
| Finished size | 8.5" × 11", single-sided, full color — one flyer, one spec, works as a print handout and as a PDF attachment without a second design |
| Bleed | 0.125" on all sides where the property image runs to the edge; design canvas at 8.75" × 11.25" |
| Safe margin | 0.375" from trim on all text elements |
| Stock (print) | 100lb gloss or matte text weight — a step up from the leave-behind's stock, since this piece is meant to be visually led by the photograph, not just read |
| Color | `--paper` ground, `--ink` body text, `--navy` for the logo square and any reversed panel, `--ember-deep` for the price figure and the CTA line at text size, `--ember` only for the price figure if it's set at display size (clears the 3.3:1 large-text threshold at that size). `--season-support` teal appears only inside the Pool service line, nowhere else on the page (`visual-direction.md` §2.4, rule 5). |
| Typography | Fraunces 600 for the price figure and any headline treatment; IBM Plex Mono for the price figure and the slot-count line (tabular figures, `visual-direction.md` §3.3); IBM Plex Sans for all body copy |
| Print run | Small batches, 100–150 at a time — the slot count on this piece changes as often as the door hanger's does, and this is a heavier, more expensive print than the door hanger, so batches run smaller and more frequently rather than larger and less often |
| Digital use | The same file, exported as a PDF, is the attachment for warm-list emails (`warm-list-campaign.md` §5, Step 2) and any digital sharing — no separate digital layout |

## Call to action

Request service at `[URL]`, or call or text `[PHONE]` — one ask, stated once, matching the CTA
rules in `voice.md` §1 ("name the next step and how long it takes" is satisfied by the site's own
Request Service flow, which this flyer points to rather than duplicates).

## Before this prints

- `[URL]` and `[PHONE]` must both be real. `[URL]` in particular is not yet resolved
  (`gtm-plan.md` §8) — this flyer cannot go to print until the domain exists and matches the
  approved legal name (`brand-brief.md` §1.6).
- `{{slots_open}}` must be the true count on the day of the print run — reprint rather than let
  it drift.
- Confirm the property-image slot carries either a real photo meeting the shot-list requirement
  above, or the honest placeholder band — never a stock photo, as a final answer or otherwise.
- **Distribution stays inside the qualified geography** (`neighborhood-campaign.md` §2). This
  flyer is never handed out, mailed, or emailed to an address in Westwood, Price Hill, or
  Cheviot as part of this campaign.
