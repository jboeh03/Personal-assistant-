# Google Business Profile — Track C

**Owner:** `wpc-marketing` · **Status:** setup spec, photo plan, posting cadence, and the review mechanic
**Reads from:** `CANON.md`, `00-model/*` (rewritten), `01-brand/*` (rewritten) — never contradicts any of them
**Human action required:** creation and verification require a person — no agent can do this

> **Re-baselined 2026-08-05.** Business name is now **Westside Property Care 513**, price is
> **$279/month flat**, season is **March 1 – October 31**, and the status states are
> **IN SEASON** / **OFF SEASON** / **MEMBERSHIP FULL** (`visual-direction.md` §3.4) — the old
> **Green Season** / **Dormant Season** language must not appear anywhere on this profile.

---

## 1. What this surface is for

`brand-brief.md` §7: **catch the person searching his name or the category after hearing it.
Not rank for the region.** GBP does not generate demand for this business — `CANON.md` §6 is
explicit that nothing here should. It closes someone who already heard the name from a
neighbor, a yard sign, a door hanger, or a grill-cleaning job, and it is the thing a skeptical
homeowner checks to confirm he's real before calling. Everything below is built for that job,
not for search-ranking a six-client business against companies with two hundred accounts.

**This is also the single longest lead-time item in the whole launch** — postcard verification
runs days to several weeks. Start it before the website exists, before the first door hanger
prints, before Track A or Track B are resolved. It gates nothing else, and nothing else should
gate it.

---

## 2. Business identity

| Field | Value | Note |
|---|---|---|
| Business name | **Westside Property Care 513** | Must match the approved legal name exactly before the profile is claimed publicly (`brand-brief.md` §1.6). If the Ohio LLC filing lands on the fallback name (Westside Property Care of Cincinnati LLC), the *public-facing* GBP name stays "Westside Property Care 513." |
| Business type | **Service-area business** — no storefront, no public address | |
| Service area | Green Township (including conditional Bridgetown), Oak Hills, upper Delhi, Covedale | `00-model/ideal-client.md` §3. **Not** "Cincinnati" and not the whole west side — set the area to the qualified geography specifically. Do **not** add Westwood, Price Hill, or Cheviot as service areas. |
| Phone | `[PHONE]` | Must be live before the profile is submitted for verification |
| Website | `[URL]` | Not yet decided. Leave the field blank rather than filling it with a placeholder domain if the site isn't live yet; an unreachable URL on a verified listing is worse than no URL. |
| Hours | By appointment / does not apply in the traditional sense | Routine visits run only Monday and Friday of weeks 1 and 3, March through October, and this is not a walk-in business. If GBP requires hours, list them as the days he's reachable by phone/text for new inquiries, not a storefront schedule — **never** an `openingHoursSpecification` implying a staffed weekday, and **never** anything suggesting availability November through February. |

---

## 3. Categories

### Primary category

**Property maintenance.** This is the closest match Google's taxonomy has to what this business
actually is, and it avoids implying a category he explicitly is not.

### Secondary category

**Pressure washing service.** This is a real, quoted offering (`pricing.md` §5.2,
`service-catalog.md` §4.4) and it's specific enough to catch a search that "property
maintenance" alone would miss.

### Categories deliberately not selected, and why

Google will suggest several adjacent categories. Do not add them, even though they might seem to
widen reach — each one directly contradicts a "what this is not" line in `brand-brief.md` §6:

| Category Google may suggest | Why it's excluded |
|---|---|
| Landscaper / Lawn care service | Not a lawn service. No mowing, trimming, edging, or bed work — `service-catalog.md` §4.2. Adding this category would put the listing in front of exactly the wrong search intent. |
| Pool cleaning service | **Not pool service.** The agreement's own disclaimer — no guarantee of water chemistry, water clarity, equipment performance, or pool-system operation — is the line this category would directly contradict, even though real pool work is now part of the visit (`service-catalog.md` §3.2, §4.1). |
| Handyman | Not a handyman. No repairs, no replacement parts, nothing requiring a licensed trade — `service-catalog.md` §4.9. |
| Home cleaning service | Nothing indoors, ever — `service-catalog.md` §4.3. |

**Keep the category count to two.** Best practice for a profile this specific is 1–3 focused
categories; three would only be justified by a third real, distinct, frequently-searched service,
and there isn't one yet.

---

## 4. Services list

GBP's structured "Services" section is separate from categories — this is where the actual
offerings go, each with a short description. Per `messaging.md` §3, **only the two published
project prices appear here** — the membership price is never listed as a line item with a
dollar figure on GBP; the surface routes the membership conversation to a call or message.

| Service name | Description | Price shown |
|---|---|---|
| Seasonal outdoor living membership | Twice-monthly care for a pool deck, patio, and outdoor kitchen on the west side, March through October, with a written report after every visit. Six properties, maximum. | None shown — "call or message to see if a spot's open." The membership price needs the season and the exclusions alongside it to be said honestly (`messaging.md` §3's section order), and a bare structured-data price field has no room for either. |
| Grill and outdoor kitchen deep clean | Burners, grates, flavorizer bars, interiors, and hoods — the full clean, not the routine wipe-down. | **$249+** |
| Window well cleanout | Cleared out during a scheduled visit. | **$49+** |
| Pressure washing | Patio, walkway, driveway, deck, siding, or fence. | Quoted after a look at the property |
| Gutter and downspout cleaning | Quoted project work — separate from the ground-level visual check included on membership visits. | Quoted after a look at the property |

Never list the internal quoting anchors from `pricing.md` §5.3 as published prices here — those
are explicitly not customer-facing.

---

## 5. Business description

**750-character limit.** Opens with the approved short form from `brand-brief.md` §2 (the GBP
description opener), then extends with geography and the two published project prices, per the
lead order in `messaging.md` §3's GBP row.

> Westside Property Care 513 — seasonal outdoor living and property care for six west-side
> homes. Two visits a month, March through October, with a written summary after every visit.
>
> I take care of properties in Green Township, Oak Hills, upper Delhi, and Covedale. This is not
> a lawn service — I don't mow. And it's not a pool service in the way you'd hire one: I skim,
> brush, vacuum, and check the equipment, but I don't guarantee your water chemistry or clarity.
>
> $279 a month. That's the whole price list. I also do grill and outdoor kitchen deep cleans
> from $249, and window well cleanouts from $49 during a scheduled visit. Call or text
> `[PHONE]`.

(Character count comes in under 750 with the placeholder resolved to a real number; recount once
`[PHONE]` is filled in.)

---

## 6. Photo plan

**No stock photography, ever, as a final answer** (`CANON.md` §10.6, `visual-direction.md` §8).
Until real photographs exist, the profile ships with the logo/mark only rather than a
placeholder image — an empty gallery is honest; a stock patio is not.

| GBP photo slot | Source shot (per `visual-direction.md` §8 shot list) | Caption / alt-text approach |
|---|---|---|
| Logo | The WPC513 mark — navy square, house-and-tree line mark, `WPC 513` wordmark (`visual-direction.md` §7) | — |
| Cover photo | Frame 1 — a pool deck or patio mid-visit, his own equipment in frame | Name the space and the season: "Pool deck and patio, in season." |
| "At work" photos | Frame 2 — his hands working, skimmer net or vacuum head or grease tray, not posed | "Skimmer basket lifted out" or equivalent — name the object per `voice.md` rule 2, never "pool maintenance" as a caption |
| Additional photos | Frame 3 (the finding, genuinely unflattering), Frame 5 (the equipment pad — must carry the pool disclaimer in the caption, never a competence claim), Frame 6 (end of season — covers on, furniture stacked, no snow) | Same rule — name the object, locate it. Frame 5's caption carries the disclaimer verbatim (`voice.md` §8 item 41). |

**Do not upload a shot until it's real.** A profile with three real photos looks more credible
than one padded to twelve with anything staged or sourced. The end-of-season shot (frame 6) is
non-negotiable once it exists — without it the profile reads as a summer-only business, and it
must never include snow, because there is no winter service inside the membership
(`visual-direction.md` §8, shot list, frame 6's "must not" column).

---

## 7. Posting cadence

This is not a content-volume channel — premium local clients are won by proximity, proof, and
referral, not content volume, and a six-client business posting weekly generic updates would
read as exactly the wrong kind of business. Post only around real, verifiable events:

| Trigger | Cadence |
|---|---|
| Season transition | Twice a year — **March 1** (season opens) and **November 1** (season closes), each naming the actual scope shift and, from November 1, stating plainly that there's no scheduled service or charge until March |
| A new real photo set becomes available | As it happens — not scheduled |
| Slot-count changes materially (a slot opens, or the book reaches MEMBERSHIP FULL) | As it happens |
| A specific, nameable piece of project work worth showing (with the homeowner's permission, street name only, no address) | Occasional, opportunistic — never manufactured |
| `winter-service.md`, if and when approved | A single post announcing it, once it's a real, priced, sellable offering — not before |

**No fixed weekly or monthly schedule.** If there's nothing real to post, the profile stays
quiet rather than filling space with the unfalsifiable-adjective language `voice.md` §6.3 bans.

---

## 8. The review-request mechanic

### When to ask

- **After a member's first full visit has happened and the service report has gone out** — not
  before, and not at signing. There has to be something real to reference.
- **After a completed, paid project** (a grill deep clean, a pressure-washing job) — this is
  often the first real interaction a non-member has, and it's a natural close-out moment.
- **Ask every client who reaches one of these moments, not only the ones who seem happy.**
  Google's review policy explicitly prohibits selective solicitation — asking only satisfied
  customers ("review gating") is a policy violation, not just bad practice, and it also produces
  a review set that isn't honest, which contradicts the whole specificity-over-polish argument
  this brand is built on (`brand-brief.md` §4.3 — reviews are only publishable with the exact
  count, never dressed up).

### How to ask — exact script

Said in person, at the end of the visit that prompted it, or as a short text the same day:

> If you've got two minutes, a Google review helps more than almost anything else I could ask
> for right now — I'm still new and most people check before they call. No pressure either way.

That's it. No incentive, no discount, no "leave a review and get $10 off" — the membership price
is never discounted (`pricing.md` §8) and Google's policy separately bans any reward, gift, or
compensation tied to a review, with real financial penalties attached to violations. Never offer
one.

### What never happens around a review

- **No incentive of any kind** — cash, discount, credit, or a free add-on.
- **No selective asking.** Every client who reaches a natural review moment gets the same ask.
- **No review-gating tools** that filter unhappy responses to a private form before they can post
  publicly — that's a banned pattern under current Google policy, separate from being dishonest.

### What to do with a bad review

1. **Respond publicly, promptly, and without excuses.** This is membership standard 2 applied to
   himself — communicate anything unusual, especially when it's uncomfortable
   (`operating-model.md` §8).
2. **Name a concrete next step**, not a defense. "I'd like to make this right — can you text
   `[PHONE]` so I can see what happened at your property specifically?" beats any explanation of
   why the review might be unfair.
3. **Never argue in the reply.** The reply is public and permanent; a defensive one does more
   damage than the original review.
4. **Never try to get it removed** unless it violates Google's actual content policy (fake,
   posted by a non-customer, contains no relevant experience) — and even then, expect it to stay
   up in most cases. A review that's simply negative but genuine does not get flagged; it gets
   answered.
5. **Fix the underlying thing if it's fixable**, and say so if a later report or conversation
   gives the opening — but never chase the reviewer to change or delete what they posted. That
   crosses back into the same territory as an incentive.

---

## 9. Verification — the actual longest pole

- Create the profile at google.com/business.
- Request verification immediately — do not wait for the phone number, the site, or the first
  photo set to be ready. Verification can take days to several weeks by postcard, and nothing
  else in this document is gated on it finishing; only on it *starting*.
- Once the postcard arrives, enter the code the same day.

A verified profile is what makes him findable by someone who heard his name and is checking he's
real. It matters more to this business than any amount of search-ranking optimization.

---

## Related files

- `gtm-plan.md` — Track C's place in the overall sequence
- `01-brand/brand-brief.md` §7 — what this surface's one job is, and isn't
- `01-brand/messaging.md` §3 — the lead order for anything shown here
- `01-brand/visual-direction.md` §7–8 — the mark and the photo shot list
