# GTM Plan

**Owner:** `wpc-marketing` · **Status:** source of truth for channel sequencing, targets, and the stop condition
**Reads from:** `CANON.md`, `00-model/*`, `01-brand/*` — never contradicts any of them
**Governs:** `neighborhood-campaign.md`, `google-business-profile.md`, `warm-list-campaign.md`, `assets/`

---

## 0. Read this before anything else

**Six clients, ever.** Not six hundred, not sixty, not "six to start and see." `ideal-client.md`
§1 says it plainly: this is not a market to be segmented, it is a list of streets to be walked.
Every section below exists to answer one question — **who are the six, and how does he find
them without generating a single lead he can't serve** — not "how much demand can this plan
produce."

A campaign that produces forty inquiries for six slots is not a success. It is forty
conversations he now has to decline, several of them with people he told to reach out. That
costs more goodwill in the qualified geography than it's worth, and the qualified geography is
the whole asset (`ideal-client.md` §3 — a few hundred homes, and he needs six of them). If a
tactic in this file would work *better* by reaching more people, that is not a point in its
favor. Reach exactly the qualified geography, at a pace six slots can absorb, and stop when
they're full. §5 makes that literal.

---

## 1. What this plan inherits and may not change

| Constraint | Value | Source |
|---|---|---|
| Hard cap | 6 clients, ever | `CANON.md` §3, `operating-model.md` §2 |
| Launch target | 4 clients | `CANON.md` §3 |
| Founding Member price lock | First 4 only, 12 months | `pricing.md` §2 |
| Qualified geography | Green Township (incl. conditional Bridgetown), Oak Hills, upper Delhi, Covedale | `ideal-client.md` §3 |
| Explicitly excluded geography | Westwood, Price Hill, Cheviot — no copy, no targeting | `ideal-client.md` §3 |
| Pricing — four configurations, never a menu | $229 (neither) · $269 (outdoor kitchen only) · $289 (pool only) · $329 (both) | `pricing.md` §1, `CANON.md` §3, decision note dated 2026-08-05 |
| Route-selection order | Clients 1–2 anchor two clusters; 3–4 attach to an anchor; 5–6 are the compactness test | `ideal-client.md` §4 |
| Route tests every prospect must pass | 15-minute (to another member), 25-minute (to home base), 5-hour (route day stays under 5 hrs) | `operating-model.md` §4 |
| No fabricated social proof | No testimonials, review counts, years-in-business, "trusted by N families" | `brand-brief.md` §4.4, `voice.md` §6.4 |
| Pricing display rule | Finished monthly numbers only, as independent rows — never the `+$60`/`+$40` build math, never presented as a fixed count of "plans" | `voice.md` §3, `pricing.md` §1 |

Nothing in this file overrides any of the above. If a tactic below seems to require bending
one of these, the tactic is wrong, not the constraint.

---

## 2. The three tracks, in priority order

### Track A — the Tri-State Grill Cleaning warm list (highest leverage, CONDITIONAL)

Full detail: `warm-list-campaign.md`. **Do not execute anything in that file until its own
CONDITIONAL banner clears.**

Every TSGC customer paid roughly $249 to have a grill or outdoor kitchen cleaned. That is a
pre-qualified list on two of the three attributes in `ideal-client.md` §2 before the first call
is made: they have an outdoor kitchen (attribute 1), and they already paid someone to maintain
something (attribute 2, and it's *him*). All that remains to check is geography and the route
tests. If the list is usable, this is not one of three roughly-equal channels — it is the
channel the other two exist to support once it runs dry.

### Track B — neighborhood density

Full detail: `neighborhood-campaign.md`. Door hangers, a yard sign at a consenting existing
client's home, a leave-behind for qualifying conversations, and a follow-up card — targeted at
streets inside the qualified subdivisions, prioritized by proximity to whichever client is
already anchoring a route. This is the only track that actively improves the thing that
determines the business's margin: route compactness (`operating-model.md` §4).

### Track C — the credibility surface (Google Business Profile, and later the site)

Full detail: `google-business-profile.md`. `CANON.md` §5 is explicit that the site is not a
lead-generation engine — it closes someone who already heard his name from a neighbor, a yard
sign, or a grill-cleaning job. GBP does the same job for someone searching his name or the
category. Neither one is asked to produce demand. GBP is also the single longest lead-time item
in the entire launch (`human-checklist.md` #1 — days to several weeks for postcard
verification), which is why it starts on day one regardless of where Tracks A and B stand.

### Why only three, and why this order

A six-client business with no advertising budget cannot run more than three channels well, and
two of the three cost nothing but time. The order is leverage, not effort: Track A needs no
discovery (he's already been on these properties), Track B needs a walk and a print run, and
Track C needs mostly waiting on Google. Running them in the reverse order — building an SEO
presence before checking whether the warm list exists — would spend the first month on the
channel `brand-brief.md` §7 says is the weakest at generating anything.

---

## 3. Sequence

### Phase 0 — before any outreach

These block everything downstream and have real lead times. They are not marketing tasks, but
this plan cannot start without them:

- Google Business Profile created and verification requested (`google-business-profile.md`,
  `human-checklist.md` #1) — start immediately, it's the longest pole.
- LLC filed, business phone number and email secured, general liability insurance in force,
  service agreement ready to sign (`human-checklist.md` #2–#7). **No door hanger prints and no
  warm-list message sends before the phone number is real** — every asset in this plan carries
  a `[PHONE]` slot for exactly this reason (§8).
- At least one real photo set exists, or the honest ruled-band placeholder ships instead
  (`visual-direction.md` §8, `human-checklist.md` #8). Stock photography is never shipped as a
  final answer.
- Confirm whether the TSGC list can be used (`human-checklist.md`, "Before the first customer")
  — this single answer decides whether Phase 1 opens with Track A or with Track B alone.

### Phase 1 — the founding four (slots 1–4)

1. **If Track A is confirmed:** run the founding-member sequence in `warm-list-campaign.md`
   against the qualified-geography segment of the list first. This is expected to supply most
   of the founding four (`unit-economics.md` §1.1 models the founding four as coming off this
   list). Track B starts in parallel, but at a light pace — door hangers on the streets nearest
   home base, mainly to start building the street-level map described in
   `neighborhood-campaign.md` §2.
2. **If Track A is unconfirmed or denied:** Track B carries the founding four alone, starting
   from home base and walking outward through the qualified subdivisions. This takes longer and
   the targets in §4 reflect that.
3. **Either way**, Track C (GBP) is standing up in parallel from day one regardless of A or B,
   because its lead time doesn't compress once outreach starts.
4. **Client 1 and client 2 are chosen for cluster potential**, not just for being the first two
   yeses (`ideal-client.md` §4). If both Track A and Track B produce a qualified yes in the same
   window, prefer the one with more qualifying neighbors nearby — that choice pays for itself on
   every visit for as long as the book runs.

### Checkpoint — before opening slots 5 and 6

**Do not proceed to Phase 2 automatically.** Once four members are signed, stop and look at what
actually happened before continuing:

- Are the four route-compatible with each other (two real clusters, or four scattered points)?
- Is revenue per route day tracking toward the `operating-model.md` §6.1 target once four
  members' visits are actually running, understanding that four clients under target ($289/day
  vs. the $400 target) is expected and not a signal to panic (`unit-economics.md` §2.5)?
- Did referrals start appearing unprompted? (`operating-model.md` §6.4 — this is the health
  check on the whole model.)
- Is the warm list (if it ran) exhausted, thin, or still deep? That answer changes how hard
  Track B needs to work for 5 and 6.

This is a real pause, not a formality. Slots 5 and 6 are the compactness test
(`ideal-client.md` §4) — filling them fast and filling them right are different goals, and speed
loses every time they conflict.

### Phase 2 — slots 5 and 6

- **Sourced from referrals and the waitlist first.** A neighbor of an existing member, or a
  waitlisted prospect who now has a qualifying neighbor, is the best lead type in the business
  (`ideal-client.md` §2, §4) and is exactly what Phase 1's clusters were built to produce.
- **No Founding Member rate.** `pricing.md` §2 — it disappears after four, on purpose. Do not
  extend it to close a slow slot 5 or 6 (`decisions.md` R-4). If a closing concession is needed,
  it's scheduling priority or a first project at standard price, never a price.
- **Track B continues at the same targeted pace**, now aimed specifically at the two established
  clusters rather than the wider qualified geography.
- **Track A, if it's still running,** shifts from "founding member" framing to standard-rate
  framing for any remaining qualified names (`warm-list-campaign.md` §6).

### Phase 3 — six of six

See §5. This is not a phase that produces more clients. It's the phase where marketing stops.

---

## 4. Targets

Targets here are planning assumptions, stated the way `unit-economics.md` states its
assumptions — checkable and meant to be argued with, not promises.

### Slots 1–4 (the founding four)

| If Track A is confirmed | If Track A is not available |
|---|---|
| Contact every qualified-geography name on the list first (`warm-list-campaign.md` §3 sizes the segments once the list is seen). Because these people already have a paid relationship with him, expect a materially higher close rate than a cold approach — plan on needing to reach roughly 10–15 qualified Tier 1/2 names to land 3–4 signed members, and recalibrate after the first five real conversations. | Track B alone carries the founding four. `ideal-client.md` §3 notes a few hundred qualifying homes exist across the whole geography and that six is roughly a 2% conversion of that *full, uncontacted* population — but a door-hanger-to-walkthrough funnel converts at a much higher rate than that population-wide figure once someone is actually having the qualifying conversation. Plan on distributing 150–250 door hangers per pass (`neighborhood-campaign.md` §5) and running direct qualifying conversations (walkthroughs) with every response, expecting to need on the order of 8–12 real walkthroughs to land 4 signed members. Recalibrate after the first pass. |

**Time horizon:** no fixed deadline is set here on purpose. `ideal-client.md` §5.1 — no price
fixes distance, and the same logic applies to time: a founding member signed in month four who
fits the route is worth more than one signed in month one who doesn't. If Phase 1 is taking
materially longer than expected, the diagnostic is `unit-economics.md` §2.5's honest note that
launch-stage revenue per route day is expected to be low — that is not evidence anything is
broken.

### Slots 5–6 (the compactness test)

There is no volume or speed target for slots 5 and 6, and that absence is the target. The
measurable bar is a filter, not a count:

- **100% of candidates for slots 5 and 6 pass all three route tests** — 15-minute, 25-minute,
  5-hour (`operating-model.md` §4) — before a price is even discussed.
- **Zero founding-rate exceptions.**
- **At least one of the two comes from a referral or the waitlist**, not a cold contact — if
  neither does, that's a signal the two clusters from Phase 1 aren't producing the network effect
  they're supposed to, worth investigating before pushing harder on outreach.

An empty slot 6 for another quarter is a fine outcome. A wrong client in slot 6 is not
(`ideal-client.md` §4 — "the empty slot is worth more than the wrong client").

---

## 5. Definition of done, and the stop condition

**Done is six of six:** six signed members, each having passed the route tests, each with a card
on file and a signed agreement (`operating-model.md` §8). Not six inquiries. Not six people on a
waitlist. Six people paying $229, $269, $289, or $329 a month on an assigned route day.

### What stops the moment slot 6 is filled

| Item | Action |
|---|---|
| Neighborhood door-hanger and yard-sign distribution (Track B, `neighborhood-campaign.md`) | **Stops entirely.** No more prints, no more drops. |
| Warm-list founding-member sequence (Track A, `warm-list-campaign.md`) | **Stops entirely**, if it hasn't already — it should have stopped once the founding four filled (§3). Any remaining names on the list get nothing further from this campaign. |
| Site / GBP open-slot indicator | Changes to **MEMBERSHIP FULL**, stated plainly, per `voice.md` pair 7 — the mechanism explained, never softened. |
| Google Business Profile | **Stays live and stays maintained** (§7 of `google-business-profile.md`). It isn't a demand-generation channel to begin with (`brand-brief.md` §7), so it has nothing to turn off — it keeps closing people who search his name and routes them to the waitlist and to project work. |
| Referral capture | **Never stops.** It's how a cancelled slot gets refilled later, and it costs nothing (`operating-model.md` §6.4 targets at least one referral-sourced inquiry per quarter, indefinitely). |
| Project work (grill deep cleans, pressure washing, the published `$249+` / `$49+` prices) | **Never stops and was never capped.** This is the actual income (`CANON.md` §2), it isn't limited to six people, and Tuesday–Thursday capacity exists specifically to hold it. |
| Waitlist | **Becomes the only membership offer.** Every qualified inquiry from this point forward, from any track, gets the waitlist and the project-work offer — never a sales push for a slot that doesn't exist (`ideal-client.md` §4, `voice.md` pair 7). |

### The mid-course checkpoint, restated

There is a second, smaller stop instruction between slots 4 and 5: **pause outreach and look at
the route data before opening 5 and 6** (§3). It is not the final stop, but it is real — Track B
does not continue automatically just because it worked for the founding four.

### Why this is written down this explicitly

Every other document in this project treats the six-client cap as real, not aspirational
(`operating-model.md` §5 — "never quietly take a seventh client because someone was
persistent"). A marketing plan that doesn't carry the same discipline would be the weak link.
The instruction to stop is exactly as binding as the instruction to start.

---

## 6. What "not working" looks like, and what to do about it

| Signal | Likely cause | What to do |
|---|---|---|
| Track A produces very few qualified-geography names | The list skews outside the qualified geography, or is thin | Lean harder on Track B; do not widen the geography to compensate (`ideal-client.md` §3) |
| Door hangers produce responses but few pass the route tests | The initial drop radius was too wide | Tighten the radius to streets genuinely adjacent to home base or an existing client, per `neighborhood-campaign.md` §2 |
| A qualified prospect is interested but off-route | This is not a failure of the plan — it's the plan working correctly | Waitlist them, ask who else on their street qualifies, and offer project work (`ideal-client.md` §4) |
| Revenue per route day stays low past 4–5 clients | A base-tier ($229) or off-route client got seated | Do not "fix" it by discounting or adding a seventh client — see `unit-economics.md` §3.5 and §6.1 |
| No referrals appear after 3–4 members are seated for a season | The service report isn't finding project work, or the work itself isn't distinctive yet | Not a marketing problem — see `operating-model.md` §6.2 and §6.4 |

None of these are solved by running the plan harder or wider. The fixes are all inside the
qualified geography and inside the model, never outside it.

---

## 7. Metrics used to steer this plan (internal only)

These numbers govern internal decisions in this file. Per `voice.md` §3, **none of them ever
appear in customer-facing copy** — not on the door hanger, not on GBP, not in a warm-list
message.

| Metric | Target | Source |
|---|---|---|
| Revenue per route day | ≥ $400 (model case: $428.50) | `operating-model.md` §6.1 |
| Referrals | ≥ 1 qualified inquiry naming a member or a specific job, per quarter | `operating-model.md` §6.4 |
| Membership retention | 6 of 6, measured April 1 | `operating-model.md` §6.3 |
| Founding-list conversion (Track A, if it runs) | Recalibrated after the first 5 real conversations — see §4 | Planning assumption, this file |
| Door-hanger-to-walkthrough conversion (Track B) | Recalibrated after the first pass of 150–250 hangers — see §4 | Planning assumption, this file |

---

## 8. Placeholder registry — every slot that needs a real value before anything ships

Two kinds of placeholder appear across `03-marketing/`. Both are listed here, once, so nothing
prints or sends with a fake number in it.

### Static placeholders — resolve once, before the first asset prints or sends

| Placeholder | What it needs | Blocks |
|---|---|---|
| `[PHONE]` | The real business phone number (`human-checklist.md` #6) | Every printed asset, GBP, every warm-list message |
| `[EMAIL]` | The real business email address, not a personal inbox (`human-checklist.md` #7) | GBP, warm-list email templates, the CAN-SPAM sender-identification line in every email |
| `[URL]` | The live site's URL. **Not yet decided** — `brand-brief.md` §1 requires the domain and the GBP listing name to match the approved legal name before the first door hanger prints, and `02-website/` has not been built yet at the time this plan was written. `CANON.md` §8 references `westside-property-care.vercel.app` only as an example of a blocked host for this environment, not a confirmed production domain. | GBP website field, the leave-behind, any email footer |
| `[OWNER FIRST NAME]` | The owner's first name, used everywhere `voice.md`'s `{{owner}}` token appears in shipped copy | Every signed piece of copy — the whole voice model is first person singular and needs a real name to sign with |

### Dynamic tokens — resolve at each print run or send, because the value changes as slots fill

These reuse the token system already defined in `01-brand/voice.md` §"Tokens used in the
examples" rather than inventing a second system.

| Token | What it means | Why it's dynamic |
|---|---|---|
| `{{slots_open}}` | How many of the six spots are open right now | Changes every time a member signs or a slot is confirmed full — this is why door hangers print in small batches (`neighborhood-campaign.md` §6) rather than one large run |
| `{{route_day}}` | A specific client's assigned route day (first/third Monday or first/third Friday) | Per-client, assigned at signing, not a campaign-wide constant |
| `{{address_short}}` | Street name only, no house number, no client name | Per-client, used only in the service report system, not in `03-marketing/` |

### Where these are used

Every file in this directory that contains a `[PHONE]`, `[EMAIL]`, `[URL]`, or
`[OWNER FIRST NAME]` slot is listed below. Nothing in `03-marketing/` ships until all four are
real.

- `neighborhood-campaign.md`
- `google-business-profile.md`
- `warm-list-campaign.md`
- `assets/door-hanger.md`
- `assets/yard-sign.md`
- `assets/leave-behind.md`
- `assets/follow-up-card.md`

---

## 9. Human action required

Carried forward from `05-playbook/human-checklist.md` because it gates this file specifically:

1. **Confirm TSGC list access.** This is the single answer that determines whether Phase 1 opens
   with Track A or runs on Track B alone. Nothing in `warm-list-campaign.md` executes until its
   own CONDITIONAL banner clears.
2. **Supply the real phone number, email, URL, and the owner's first name** before anything in
   §8 ships.
3. **Confirm the customer-facing name** — "Westside Property Care" per `brand-brief.md` §1 — and
   the exact GBP listing name, before the first door hanger prints.

---

## Related files

- `neighborhood-campaign.md` — Track B in full
- `google-business-profile.md` — Track C in full
- `warm-list-campaign.md` — Track A in full, CONDITIONAL
- `assets/` — the print-ready copy this plan schedules
- `00-model/ideal-client.md` — who qualifies and the route tests every target must pass
- `00-model/pricing.md` — every price referenced above
- `01-brand/voice.md` — the token system this file's placeholder registry extends
