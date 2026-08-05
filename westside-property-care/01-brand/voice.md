# Voice

**Owner:** `wpc-brand` · **Status:** source of truth for how Westside Property Care writes
**This file is auditable.** Other agents check their copy against §6 (banned phrases) and §8
(the checklist). Every rule here is written to be pass/fail, not to be interpreted.

**Tokens used in the examples.** `{{owner}}` is his first name, `{{phone}}` the business
number, `{{slots_open}}` how many of the six spots are currently open, `{{route_day}}` the
client's assigned route day, `{{address_short}}` a street-name-only reference. These are
fill-ins. Replace them; never ship them.

---

## 1. VOICE PROFILE

```text
VOICE PROFILE
=============
Author:      The owner of Westside Property Care, writing as himself
Goal:        Close a homeowner who already heard his name; make scope and price
             unambiguous; make every service report find the next project
Confidence:  High on structure and bans; the source set is small and internal

Source Set
- _source/brother-draft-4-client-model.md — his own operations draft, especially
  §6 ("What will make the biggest difference to this property today?") and §7
  (the service-report example)
- 00-model/service-catalog.md §4 — the exclusions, in clause language
- 00-model/ideal-client.md §5 — the "what to say" lines for each disqualifier
- CANON.md §7 — the voice guardrails this profile extends

Rhythm
- Mostly 8–20 words. One long sentence per paragraph, maximum.
- Fragments are allowed when they are a list of things that were done.
- Paragraphs run 2–4 sentences. A single-sentence paragraph is a deliberate stop.

Compression
- Compressed on claims, explanatory on mechanics. Never explain a feeling.
- If a sentence could be replaced by a number, replace it.

Capitalization
- Sentence case in headlines and buttons. Never Title Case Every Word.
- ALL CAPS only for the two status stamps: MEMBERSHIP FULL and the season labels.

Parentheticals
- Rare. Used only to narrow a scope ("hardscape joints, walkway cracks, and bed
  edges — not inside the beds"). Never for asides, jokes, or winks.

Question Use
- Only real questions asked of a real person, in a real reply. "Do you have a
  pool, an outdoor kitchen, or both?" Never rhetorical, never as a headline.

Claim Style
- Every claim carries its own evidence in the same sentence or the next one.
- Weaknesses are named before they are answered. "This is new" comes first.
- Numbers are exact and quoted from 00-model/pricing.md. Never rounded, never
  "starting around."

Preferred Moves
- Name the object: "both baskets," "the six chairs," "the hose bib on the north side"
- Locate it: "south side," "under the pergola," "the west well"
- Price it: "$49," "from $249," "$289 a month"
- Offer the out: "if you'd rather I leave it, that's fine"
- State the mechanism behind a limit, not just the limit

Banned Moves
- First person plural. There is no "we."
- The company name as the subject of a verb in customer copy
- Exclamation marks, emoji, and ✓ glyphs, anywhere customer-facing
- Manufactured urgency of any kind
- Any credential, count, or testimonial that does not exist
- Category filler: see the full list in §6

CTA Rules
- One ask per surface. Name the next step and how long it takes.
- The ask is never "learn more." It is "text me your cross street," "walk the
  property with me — about forty minutes," or "add your name to the waitlist."
- When the book is full, the only ask is the waitlist plus the project offer.
- Any ask that leaves a person waiting must say when he will answer, in his own
  hours, with the honest failure case attached. That is a **reply commitment**
  and it is required. It is not a **response window**, which is banned. The two
  are separated in §8, items 14a and 14b, and worked in pair 17.

Channel Notes
- Website:        Second person for the reader, first person for him. Prices in
                  the sentence, not only in a table.
- Service report: Record first, finding second, price third, out fourth.
- Door hanger:    Four lines maximum. The current open-slot count is one of them.
- Estimate:       Flat number, materials separate, expiry date.
- Text / email:   Same voice, shorter. No greeting boilerplate.
- Non-prose:      Structured data, alt text, meta titles, aria-labels, form
                  errors, and CSS-rendered case are customer-facing copy and
                  carry every rule in this file. See §3, the non-prose surface
                  rule.
```

---

## 2. The five rules everything else hangs on

**Rule 1 — First person singular. Always.**
"I skimmed the pool." Never "we," never "our team," never "Westside Property Care skimmed the
pool." There is one person and the copy should make that impossible to miss.

Two precise exceptions, and only these two:

- **"We" meaning him and the reader together** is fine and natural: "we'll walk it together on
  the first visit," "nothing we agree today can move on you for a year." The test is whether
  "we" could be swapped for "the company." If it could, it is banned. If it can only mean *you
  and me*, it is correct.
- **The service agreement**, where "Westside Property Care" is the contracting party.
  `00-model/service-catalog.md` §4 is already written that way and should stay that way.

Never "our," "us," or "our team" in customer copy under any reading.

**Rule 2 — Name the specific thing you did.**
"Skimmed the pool and emptied both baskets," never "performed pool maintenance." "Wiped the
six patio chairs and the table," never "furniture care completed." If a reader cannot picture
the action, rewrite it. Specificity is not a stylistic preference here — it is the entire
competitive claim (`CANON.md` §7).

**Rule 3 — Locate it.**
A thing without a place is a category. "The two window wells on the south side" beats "window
wells." "The hose bib behind the garage" beats "outdoor faucets." He is the person who knows
which one. Write like it.

**Rule 4 — Price it in the same breath.**
Every finding gets a number or an honest "I'd have to look at it and send you a number." A
finding without a price is a receipt, not an inspection, and the whole business model runs on
the difference (`CANON.md` §2).

**Rule 5 — Name the weakness first, then answer it.**
"This is new." "I don't work off a ladder." "I don't promise same-day." Leading with the limit
is the cheapest credibility available and he has no other kind yet. Never bury it, never
soften it with "however," and never dress it as a benefit.

---

## 3. Mechanics — pass/fail

| Item | Rule |
|---|---|
| Person | First person singular for him. Second person for the reader. Never "we." |
| Exclamation marks | None. Anywhere. Body, headline, button, subject line. (`CANON.md` §7 bans them in body copy; this file extends the ban to all customer-facing surfaces.) |
| Emoji and glyphs | None. No ✓, no ★, no 🔥. The draft's "WPC SERVICE COMPLETE ✓" is replaced by a typographic stamp — see pair 12. |
| Headline case | Sentence case. The business name and the two status stamps are the only capitalized exceptions. |
| Em dashes | One per paragraph, maximum. |
| Oxford comma | Yes. |
| Contractions | Yes. "I'll," "don't," "that's." He talks like a person. |
| Numerals | Spell out one through nine in prose ("I take six clients"). Digits for prices, dates, measurements, and any count in a label or stamp ("2 of 6 open"). |
| Prices | Verbatim from `00-model/pricing.md`. $229 · $289 · $329 · $249+ · $49+. Never rounded, never "around," never "starting at" as a headline. |
| Frequency | "Twice a month" or "two scheduled visits a month." Never "bi-monthly" — it means both things. |
| Schedule | "The first and third Monday." Never "every other Monday," which is a different schedule. |
| Arrival | Never a time, a window, or "between." Route day only, and say why. |
| Reply to a person | **Required** wherever someone is left waiting on him. Say when he will answer, in his own hours, with the failure case attached: "the same day or the next morning — if it's after Thursday, it might be Monday." (§8 item 14b) |
| Response to a work request | **Banned.** No turnaround, no SLA, no "within 24 hours," no "same-day service," no "24-hour emergency response." He works 1.5–2 days a week and cannot keep one. (§8 item 14a, `service-catalog.md` §4.7) |
| Seasons | "Green Season" (April–October) and "Dormant Season" (November–March), capitalized, defined on first use. |
| Address | Street name only in anything public. Never a full client address, never a house photo that identifies one. |

### Numbers that never appear in customer-facing copy

These are internal. Publishing any of them is an audit failure.

- Minutes per visit, or any visit duration. It does not exist in this business, internal or
  external (`00-model/operating-model.md` §6).
- The 1.5-hour route planning allowance.
- The internal quoting anchors in `pricing.md` §5.3, the $100/hour rate, or the $149 trip
  floor. **This includes reading two anchors out as a range** — "$249–$449" is the §5.3 table
  with the labels removed. See the anchor-leak rule below.
- Route hours, revenue per route day, project attach rate, retention, or effective hourly
  rate.
- Any revenue figure from `unit-economics.md`.

### 🔶 The price-count rule

**Never write "three prices," "three tiers," "our three plans," or any sentence whose grammar
breaks if a fourth configuration is added.**

`00-model/decisions.md` D-3 and R-1 leave one configuration open — an outdoor kitchen with no
pool — and the owner has not resolved it. Copy must be written so either resolution slots in
without a rewrite.

- **Write:** "What you pay depends on what your property has."
- **Do not write:** "We have three simple tiers."

Price display is always a list of configurations, each a row of the form *[what the property
has] — [price]*. Adding or removing a row must not break a sentence anywhere on the page.

**And do not publish the module arithmetic.** The `+$60` pool component and the `+$40` outdoor
kitchen component are how the price is *built* (`pricing.md` §1), not how it is *sold*. A
customer-facing page that shows the modules invites the reader to compute $229 + $40 and ask
about a configuration the owner has not decided on. Show finished monthly prices only. The
modules stay internal until D-3 is resolved.

And per `CANON.md` §3 and `pricing.md` §1: **lead with $289 and $329.** $229 sits underneath
as the base the others are built from. It is never the headline number.

---

### 🔶 The anchor-leak rule

**One number, one job, after he has looked at it. A range is the anchor table read aloud.**

`pricing.md` §5.3 is headed *"Do not publish this table. Do not put it on the website."* The
table exists so he isn't building a number from scratch in a driveway. Quoting a *specific*
number off it, on a *specific* job, after he has *stood on the property*, is the table working
exactly as designed. Quoting the **span** between two of its rows publishes the table.

Three questions. All three must pass.

1. **Is it one number?** A range is two anchors with the labels stripped off. "$249–$449" is
   `pricing.md` §5.3 row 1 and row 3 side by side, and a reader can reconstruct the shape of
   the table from it.
2. **Is it this job, on this property?** Not a category, not a service, not a page.
3. **Has he already looked at it?** A number before the on-site look is a guess he now has to
   defend, and per `pricing.md` §7 the flat price is the promise.

| | Allowed | Banned |
|---|---|---|
| Form | A single figure — "$449" | Any range — "$249–$449," "$249 to $449," "$300-ish," "somewhere in the $300s," "high threes" |
| Scope | This driveway and this back patio | "Pressure washing," "gutters," "seasonal cleanup" — the §5.2 quoted categories |
| Timing | After the walk | Before the walk, in a report, on a call, in a text, on a page |
| Hedges | None. The number is flat. | "likely," "probably," "typically runs," "in the ballpark of," "starting around," "from" |

**The two published exceptions, and only these two** (`pricing.md` §5.1): a grill and outdoor
kitchen deep clean is **$249+**, a window well cleanout is **$49+**. Those are published
starting prices and may appear anywhere. Every other project category is quoted after an
on-site look with no published price (`pricing.md` §5.2).

**Worked — the finding that needs a quote he hasn't built yet.** This is where the leak
happens, because he wants to give the homeowner something to hold onto.

> ❌ **Don't**
> I'll walk it and send you a flat number tomorrow morning, likely somewhere in the $249–$449
> range depending on how much of the walkway needs it too.

> ✅ **Do**
> I'll walk it and send you a flat number tomorrow morning, once I've measured the walkway and
> seen how far the algae actually runs. Whatever the number is, it's flat — it doesn't move if
> the job takes me longer than I planned.

The rewrite loses nothing. The homeowner wanted to know *when* they'd get a number and *whether
it could change on them*, and both of those are now answered. What they no longer have is the
ability to anchor him at $249 before he has seen the walkway — which is the actual reason the
table is internal (`pricing.md` §7).

**Why the range is worse than it looks.** It sets the floor as the expectation and the ceiling
as the insult, so the real number lands as a markup no matter where it falls. It also tells a
reader that a table exists, which invites "what's the driveway on its own, then?" — a question
he now has to answer from the driveway, which §5.3 exists to prevent.

---

### 🔶 The non-prose surface rule

**If a customer can see it, hear it, or have it read to them, it is copy — and every rule in
this file applies to it.** Prose is the surface most likely to be audited and the least likely
to be wrong, because someone wrote it on purpose. The defects that survive are in the surfaces
nobody thought of as writing.

Copy includes, and is not limited to:

| Surface | Carries |
|---|---|
| JSON-LD and any structured data | Every truth rule. A machine-readable claim is still a claim. |
| CSS that changes rendered text — `text-transform`, `content`, `::before`/`::after` | §7's stamp rule. What renders is what was said. |
| `alt` text | Rules 2 and 3 — name the object, locate it |
| `<title>`, meta description, Open Graph, `og:image` overlay text | §6 in full |
| Button, link, and `aria-label` text | The CTA rules |
| Form labels, placeholders, helper text, validation and error messages | Person, tone, and the ban on urgency |
| Email subject lines, SMS auto-replies, voicemail greeting | Everything |
| Filenames, URL slugs, and anchor IDs a user can see in the address bar | The naming rules in `brand-brief.md` §1 |
| Print artwork, yard sign, door hanger, vehicle lettering | Everything |

**Two defects found in exactly this way**, both from real WPC surfaces, neither anywhere near
a paragraph:

**1. Structured data that invented a staffing model.** The `LocalBusiness` block on the
homepage carried an `openingHoursSpecification` of Monday–Friday, `"opens": "08:00"`,
`"closes": "17:00"`. No prose on the site says that, and it is not true — he works 1.5–2 days
a week, routine visits are the first and third Monday and Friday, and Tuesday through Thursday
is project time (`CANON.md` §3). Published as structured data, it is a machine-readable
forty-hour week with someone at a desk, and it is the same false-availability failure as
"within 24 hours" (item 14a) wearing a different hat. Google may surface it as a staffed
business's hours. **The rule: structured data may only assert what the prose already asserts
and `00-model/` already supports.** If there is no honest value for a field, omit the field —
absent is not a defect, wrong is.

**2. CSS that unsaid a stamp.** `.figure` set the mono face, the tracking, and tabular figures,
but no `text-transform`. The status stamps rendered in sentence case, letterspaced — which
breaks §7 item 2 (the stamps are typographic objects, set in caps), breaks
`visual-direction.md` §3.4 ("no letterspaced lowercase, ever"), and, because the Plex Mono
subset ships uppercase and digits only (`visual-direction.md` §3.1), risks the lowercase
falling back to a different face entirely. MEMBERSHIP FULL is not a phrase that is written in
caps; it is a stamp, and a stamp that renders as "Membership full" is a different, softer
claim. **The rule: if the voice specifies rendered case, the stylesheet is where that rule is
kept, and it is auditable there.**

**How to run this as an auditor.** Do not stop when the prose passes. Grep the built surface
for the things that are text but do not look like text: `application/ld+json`, `alt=`,
`aria-label`, `<title>`, `content="`, `text-transform`, `::before`, `::after`, `placeholder=`,
and every string in a validation or error path. Then read the rendered result, not the source
— because case, truncation, and generated content only exist after the browser has run.

---

## 4. Do / don't — worked pairs

Seventeen pairs, each from a real Westside Property Care situation.

---

### Pair 1 — Service report: the work performed

**Situation:** Green Season visit, pool-and-kitchen property, report goes out that evening.

> ❌ **Don't**
> Today's service has been completed. All routine maintenance tasks were performed to our
> high standards, including pool care, patio care, and outdoor kitchen care.

> ✅ **Do**
> Pool skimmed, both baskets emptied. Wiped the six patio chairs and the table. Emptied the
> grease tray on the flat-top and wiped the counters. Blew the patio, the pool deck, and the
> walk — including under the pergola, where the mulberry is dropping hard right now. Pots
> watered. The fern on the north side dries out faster than the others, so I moved it two feet
> under the eave.

**Rules:** 1, 2, 3. Name the object, the count, and the location. "Pool care" is a line item;
"both baskets" is evidence he was there.

---

### Pair 2 — Service report: the finding

**Situation:** The single most valuable sentence in the business. `CANON.md` §2 — the report
is where the next project is found.

> ❌ **Don't**
> I noticed a few areas that may require additional attention. Please let me know if you'd
> like to discuss options for addressing these items.

> ✅ **Do**
> The two window wells on the south side are full — mostly last fall's leaves, about six
> inches deep, and there's water sitting in the west one. I can clear both on your next visit
> for $49. Say the word and I'll add it. If you'd rather leave them, that's fine and I'll stop
> mentioning it.

**Rules:** 2, 3, 4. Named, located, priced, and turned into a yes/no with a graceful out. The
$49 works *because* he is already on the property (`pricing.md` §7).

---

### Pair 3 — Service report: nothing found

**Situation:** A rare visit where the property genuinely needs nothing.

> ❌ **Don't**
> Everything looks great! No issues to report.

> ✅ **Do**
> Nothing needs attention right now. I checked the hose bibs, the downspout discharge on both
> back corners, and the gate latch on the pool side. The latch is still catching — it seats if
> you lift it, but it'll want an adjustment before the season's out. Not urgent.

**Rules:** 2, 5. "Nothing found" should be rare (`operating-model.md` §6.2). When it is true,
say what was checked, so the visit is still legible as an inspection.

---

### Pair 4 — Pricing page: the price itself

> ❌ **Don't**
> Flexible plans to fit every budget. Contact us today for a customized quote tailored to
> your property's unique needs.

> ✅ **Do**
> What you pay depends on what your property has.
>
> A property with a pool — **$289 a month.**
> A property with a pool and an outdoor kitchen — **$329 a month.**
> Property care on its own — **$229 a month.**
>
> Two scheduled visits a month, the same price in January as in July. Card on file, charged on
> the 1st. Thirty days' notice to cancel, and there's no term.

**Rules:** 4, and §3's price-count rule. The number goes in the sentence. $289 and $329 lead;
$229 sits under them. Adding a fourth row breaks nothing.

---

### Pair 5 — Pricing page: the biggest exclusion

**Situation:** `service-catalog.md` §4.1 — the clause that protects the whole business.

> ❌ **Don't**
> Our pool care includes surface skimming and basket service. Additional pool services
> available upon request.

> ✅ **Do**
> **This is not pool service.** I skim the surface, empty the skimmer and pump baskets, and
> clear the deck and the surround. Twice a month.
>
> I don't test the water. I don't add chlorine, shock, or algaecide. I don't vacuum, brush,
> backwash, or touch the filter, and I don't open or close the pool. If your water goes green
> in July, that isn't something I'm responsible for or able to fix.
>
> If you need that, hire a pool company — full weekly service on the west side runs about
> $121–142 a month with chemicals, and I'll tell you which ones your neighbors use.

**Rules:** 5. State the exclusion in the words a homeowner would use, before they ask, and
then hand them the answer to the problem you just declined. Telling someone who to hire is the
kind of straight answer that makes the rest of the page believable. The $121–142 figure comes
from `service-catalog.md` §4.1 — do not adjust it.

---

### Pair 6 — Door hanger

**Situation:** Left on a qualified street in Green Township. Four lines. Nobody buys $329 a
month off a door hanger — the job is recognition later.

> ❌ **Don't**
> **WESTSIDE PROPERTY CARE** — Your Premier Outdoor Living Solution! Serving the Tri-State
> with pride. FREE ESTIMATES — Fully Licensed & Insured — Call Today!

> ✅ **Do**
> **Westside Property Care**
> I take care of six properties on the west side. Pool deck, patio, outdoor kitchen — twice a
> month, with a written report after every visit.
> {{slots_open}} of the six spots are open right now.
> {{owner}} · {{phone}} · WPC513

**Rules:** 1, 5, plus every ban in §6. "Premier," "solution," the exclamation marks, the
uncheckable "licensed," and the free-estimate banner all go. The real slot count replaces the
urgency.

---

### Pair 7 — The membership-full notice

**Situation:** All six slots taken. `operating-model.md` §5 — the scarcity is a fact about the
schedule, not a device.

> ❌ **Don't**
> We're currently at capacity! Join our exclusive waitlist today for priority access to the
> next available opening. Spots fill fast — don't miss out!

> ✅ **Do**
> **MEMBERSHIP FULL**
>
> All six spots are taken. That's the actual cap, not a sales line — six properties is twelve
> visits a month across four route days, and past that I'd be rushing somebody.
>
> The waitlist is real. I keep it in writing with your address on it, because when a spot
> opens it goes to whoever is closest to the existing route. Add your name and I'll tell you
> honestly where you sit and what would have to happen.
>
> In the meantime I do project work Tuesday through Thursday, membership or not: grill and
> outdoor kitchen deep cleans from $249, window wells from $49, pressure washing quoted after
> I look at it.

**Rules:** 5, and the hard ban on manufactured urgency. Explaining the mechanism — twelve
visits, four route days, route proximity — makes the cap believable in a way "exclusive" never
does. The project offer is the model working (`ideal-client.md` §4).

---

### Pair 8 — An estimate

> ❌ **Don't**
> Pressure Washing Services .................... $450.00
> Materials extra. Prices subject to change. Thank you for choosing Westside Property Care!

> ✅ **Do**
> **Driveway and back patio, pressure washed — $449.**
>
> That's a flat price, not an hourly rate. If it takes me longer than I planned, it still
> costs $449.
>
> Materials are billed separately at cost plus 25% and itemized on the invoice. For this job I
> don't expect any beyond what's already on the truck; if that changes I'll tell you before I
> start, not after.
>
> Good for 30 days.

**Rules:** 4, and `pricing.md` §7 rules 3 and 4 — flat price, materials always a separate
line. The expiry is a fact, not pressure.

---

### Pair 9 — First reply to an inquiry

**Situation:** Someone filled in the form or texted. The first reply qualifies
(`ideal-client.md` §2).

> ❌ **Don't**
> Thank you for your interest in Westside Property Care! We're excited to learn more about
> your property and would love to schedule a free consultation to discuss how we can elevate
> your outdoor living experience. Please don't hesitate to reach out with any questions!

> ✅ **Do**
> Thanks for getting in touch. Two questions before I take up your time: does the property
> have a pool, an outdoor kitchen, or both — and what's your cross street?
>
> I take six clients and the route is built around two clusters, so location decides more than
> anything else does. If it works, I'll come walk the property with you, show you exactly
> what's included and what isn't, and give you the price while I'm standing there. About forty
> minutes.

**Rules:** 1, 4, 5, and the CTA rule. Qualify first. Say what happens next and how long it
takes. No greeting boilerplate.

---

### Pair 10 — Declining something out of scope

**Situation:** A member asks for gutter cleaning. `service-catalog.md` §4.4 — no ladders.

> ❌ **Don't**
> Unfortunately, gutter cleaning falls outside the scope of our current service offering. We'd
> be happy to discuss alternative solutions.

> ✅ **Do**
> That's not something I do. Gutter cleaning means working off a ladder and I don't work off a
> ladder — on your visits I check the downspouts from the ground, watch where they discharge,
> and tell you what I see.
>
> If they need actually cleaning, I can quote it as a project or give you two names. Either
> way, your back corner downspout is discharging right against the foundation, and that one I
> can fix with an extension.

**Rules:** 5, then 2 and 4. Say why, then say what happens instead — and turn the "no" into a
finding. That last paragraph is a project the "no" just generated.

---

### Pair 11 — The winter report

**Situation:** February. `service-catalog.md` §3 — the value is real and invisible. This report
is why the member does not cancel in February and take the whole Green Season with them.

> ❌ **Don't**
> Winter service completed. Property inspected. No issues found. See you next visit.

> ✅ **Do**
> Hose bibs on all three sides are shut off and drained, hoses coiled in the garage. The
> outdoor kitchen sink line is drained — that's the one that would have split in a hard
> freeze. Covers are back on the grill and both chaises; Thursday's wind pulled the near one
> loose. Salted the pool deck and the walk out to it; I'm using the stone-safe product on the
> flagstone because the cheaper stuff pits it.
>
> Leaves are down, so I got a full look at the back of the house. Photos attached. Nothing
> else needs attention.

**Rules:** 2, 3. In winter, name the damage that did not happen. "The one that would have
split" is doing the work of a whole pricing argument.

---

### Pair 12 — The report header

**Situation:** The source draft used "WPC SERVICE COMPLETE ✓". It is a notification. The report
is a record.

> ❌ **Don't**
> WPC SERVICE COMPLETE ✓

> ✅ **Do**
> WPC513 · SERVICE REPORT · {{address_short}} · MONDAY, APRIL 6

**Rules:** the glyph ban, and `brand-brief.md` §1 — WPC513 is the record stamp and this is
exactly where it earns its keep. Everything a homeowner needs to file, search, or forward is in
one line.

---

### Pair 13 — Answering "you're brand new"

**Situation:** The walkthrough, or a reply. `brand-brief.md` §5.

> ❌ **Don't**
> With years of hands-on experience in the outdoor living space, Westside Property Care brings
> professionalism and reliability to every property we serve.

> ✅ **Do**
> This is new. I'd be starting with you.
>
> What I'm not new at is outdoor kitchens — I've been cleaning grills and outdoor kitchens on
> west-side properties through my family's business, which is where this came from.
>
> Here's what I can do about the rest of it. The first four members lock their price for
> twelve months, so whatever we agree today can't move on you for a year. There's no contract
> term — thirty days' notice and you're done. And everything I don't do is written down before
> you sign anything, which is more than the last three people who quoted you did.

**Rules:** 5, and `brand-brief.md` §4.2 — state the lineage, never quantify it into a
credential he cannot back.

---

### Pair 14 — Rescheduling for weather

> ❌ **Don't**
> Due to inclement weather conditions, your scheduled service has been postponed. We apologize
> for any inconvenience this may cause.

> ✅ **Do**
> It's supposed to rain hard through Monday, and blowing the patio in that would just move mud
> around. I'm moving you to Friday the 12th — same visit, same month, nothing changes on the
> billing.

**Rules:** 2, 5. Say what the weather actually prevents. `service-catalog.md` §4.11 —
rescheduled visits stay inside the calendar month where possible, so say so.

---

### Pair 15 — A failed card

**Situation:** `pricing.md` §4 — service continues through the current month; the card must be
replaced before the next route day.

> ❌ **Don't**
> ACTION REQUIRED: Your payment method has been declined. Please update your billing
> information immediately to avoid interruption of service.

> ✅ **Do**
> Your card came back declined on the 1st. Nine times out of ten it's a new expiration date.
>
> This month runs as normal either way. I need a working card before the 6th, which is your
> next visit. Here's the link, or text me and I'll take it over the phone.

**Rules:** 5, and the urgency ban. No capitals, no "immediately," no implied threat. The real
deadline is a date, so give the date.

---

### Pair 16 — Someone who wants more than the membership

**Situation:** `ideal-client.md` §5.2 — the prospect testing the boundary. Handled well, this
is a project sale; handled badly, it is a bad member for three years.

> ❌ **Don't**
> Absolutely, we can take care of that for you! We're happy to accommodate whatever you need
> — just let us know.

> ✅ **Do**
> The beds aren't in the membership — weeding inside beds is a quoted project, and so is the
> mulch. What's included is spot treatment in the hardscape joints, the walkway cracks, and
> along the bed edges.
>
> I'd rather tell you that now than have it turn into a conversation in July. If you want the
> beds done, I'll walk them and send you a number tomorrow morning; it's the kind of thing
> that's worth doing once in April and then leaving alone.

**Rules:** 4, 5. `operating-model.md` §7 rule 4 — never quietly absorb a project into the
membership. Name it, price it, let them say yes.

---

### Pair 17 — The reply commitment and the response window

**Situation:** Every surface that leaves a person waiting — the thanks page after the form, the
"text me" line, the estimate promise. These two things look identical and are opposites. One is
required by the CTA rule in §1; the other is the false-availability failure in `CANON.md` §7
and `service-catalog.md` §4.7.

**The test, in one line:** *is he promising to answer a person, or to show up for a job?*

| | Reply commitment — **required** | Response window — **banned** |
|---|---|---|
| What is promised | That he will write back | That work will be started or completed |
| What it costs him | A text from a phone, anywhere, any day | A route day he does not have |
| Can he keep it? | Yes. Answering is not a visit. | No. He works 1.5–2 days a week. |
| Form | A named point in his own week, with the failure case | A duration, a clock, or an SLA |
| Source | §1 CTA rules, §8 item 14b | `service-catalog.md` §4.7, §8 item 14a |

> ❌ **Don't** — the response window
> We respond to all service requests within 24 hours. Same-day service available. Call our
> 24-hour line for emergencies.

Three separate false claims. There is no line, there is no same-day, and 24 hours is a
commitment that Tuesday-through-Thursday project time exists to *absorb*, not to guarantee
(`service-catalog.md` §4.7). It also implies someone is on the other end at 2am, which is the
implied-crew failure in a different costume.

> ✅ **Do** — the reply commitment
> I'll answer the same day or the next morning. If it's after Thursday, it might be Monday, and
> I'd rather tell you that than say "within 24 hours."

**This is the reference example.** It is live on `02-website/site/thanks.html` and it is the
model every other reply commitment on every surface should be written against. Three things
make it work:

1. **It commits to answering, not to arriving.** Nothing about the property, the schedule, or
   the work.
2. **It names its own failure case before you find it.** "If it's after Thursday, it might be
   Monday" is rule 5 doing its job — and a Monday reply, disclosed, reads as honesty, while the
   same Monday reply after a 24-hour promise reads as a broken promise.
3. **It names the thing it is refusing to say, and says why.** Quoting "within 24 hours" back
   at the reader tells them he knows what the normal move is and declined it. That single
   quoted phrase does more for credibility than the rest of the page.

**Where it must appear:** any form confirmation, any "text me" or "email me" ask, any promise
to send a number. `messaging.md` uses the same construction for estimates — "I look at it, then
send you a flat number the same day or the next morning" — and §6.6 of this file requires it as
the replacement for a "free estimate" banner. A CTA that leaves someone waiting with no reply
commitment is a defect under item 14b; a CTA that gives them an operational SLA instead is a
worse defect under item 14a.

**Rules:** 5, the CTA rules in §1, and §3's reply/response rows.

---

## 5. Two rewrites of longer copy

### 5.1 The homepage opening

> ❌ **Before**
>
> # Elevate Your Outdoor Living Experience
> Westside Property Care is Cincinnati's premier provider of comprehensive outdoor property
> solutions. Our team is passionate about delivering peace of mind to homeowners across the
> Tri-State area. With flexible plans to fit every budget and a commitment to unmatched
> quality, we're your one-stop shop for a beautiful backyard. Contact us today for your free
> estimate!

Fourteen banned phrases, an invented team, an invented service area, an invented credential,
and not one checkable fact.

> ✅ **After**
>
> # Six properties. Twice a month. Written down every time.
>
> I take care of the outdoor living areas of six homes on the west side — pool deck, patio,
> outdoor kitchen, the hardscape and the walks that serve them. Two scheduled visits a month,
> the same person every time, and a written report the same day covering what I did and what I
> found.
>
> Not lawn care. Not pool service. Everything I don't do is on this page, above the price.
>
> **{{slots_open}} of the six spots are open.**

---

### 5.2 The scope section

> ❌ **Before**
>
> ## What's Included
> Our comprehensive membership covers all aspects of outdoor property maintenance, including
> pool care, patio care, outdoor kitchen care, debris management, and more. We tailor every
> visit to your property's unique needs, ensuring your outdoor space is always ready to enjoy.

> ✅ **After**
>
> ## What actually happens on a visit
>
> I walk the property before I start and again before I leave. In between, I do what will make
> the biggest difference to the property that day — which is not the same list every time, and
> a visit in early April looks nothing like one in late August.
>
> **April through October,** that usually means skimming the pool and emptying both baskets,
> wiping down the furniture and the outdoor kitchen counters, emptying the grease tray,
> blowing the patio and the pool deck, hand-collecting leaves and sticks, watering the pots,
> and spot-treating the weeds coming up in the hardscape joints.
>
> **November through March,** it means the hose bibs, the disconnects, and the drain-downs;
> checking the downspouts from the ground; clearing storm debris; covering and securing the
> furniture and the grill; salting the patio and the walk; and the fullest exterior inspection
> of the year, because the leaves are down and everything is visible. In March the report
> comes with what the property needs in April and what it costs.
>
> Same price both ways. What changes in November is the work, not the bill.

**What the rewrite fixed:** "comprehensive," "all aspects," "and more," "tailor," "unique
needs," "always" — six unfalsifiable words replaced with the actual work
(`service-catalog.md` §§1–3). Note that the "not every task every visit" rule is stated as
*governing* the list, so the list never becomes a promise he fails on a rainy Monday.

---

## 6. Banned phrases, with replacements

`CANON.md` §7 bans six. This section keeps all six and extends the list. **Every row is an
audit item.** A hit in customer-facing copy is a failure, not a suggestion.

### 6.1 From CANON §7 — locked

| Banned | Use instead |
|---|---|
| solutions | Name the work. "I skim the pool and empty the baskets." |
| premier | Nothing. Delete the sentence and put a fact there. |
| one-stop shop | The scope list, and the exclusions next to it. |
| peace of mind | The mechanism: "you get a written report the same day." **Extended: banned everywhere, not only in headlines.** |
| we're passionate about | Delete. Show it in the report. |
| elevate your outdoor living experience | "Ready to use." Or name what changes. |

### 6.2 Corporate voice — there is no company here

| Banned | Why | Use instead |
|---|---|---|
| we, our, us, our team, our technicians — wherever "we" could be read as the company | There is one person. This is the most damaging category of all. | I, me, my. ("We" is allowed only when it can only mean *you and me* — see §2 rule 1.) |
| Westside Property Care as the subject of a verb | Same. | I |
| our services, service offering | Blob noun | Name the work |
| valued customer, valued client | Nobody talks like this | Their name |
| we look forward to serving you | — | "See you the 6th." |
| please don't hesitate to | — | Delete. "Text me." |
| I hope this email finds you well | — | Delete. Start with the point. |
| thank you for your interest in | — | "Thanks for getting in touch." |
| reach out, connect, touch base, circle back | — | "Call me," "text me," "email me" |

### 6.3 Unfalsifiable adjectives

| Banned | Use instead |
|---|---|
| comprehensive, full-service, complete, all-inclusive | The list, plus the exclusions |
| quality workmanship, attention to detail | The detail itself: "I moved the fern under the eave" |
| professional, professionalism | Nothing. Show up and write it down. |
| meticulous, thorough, painstaking | Name what was checked |
| state-of-the-art, cutting-edge, industry-leading | Name the equipment |
| unmatched, second to none, best in class | Delete |
| tailored, bespoke, curated, customized | "What your property has" |
| seamless, effortless, hassle-free, worry-free, stress-free | Name what you handle |
| transform, revitalize, rejuvenate, elevate | Say what changes |
| pristine, immaculate, flawless | "Blown clean" |
| dedicated, committed, driven | Delete |

### 6.4 Claims he cannot make

| Banned | Why | Use instead |
|---|---|---|
| licensed, licensed and insured | Ohio does not license this trade. Wrong, not just early. | "Insured — general liability," once the policy is bound |
| bonded, certified, accredited | None exist | Delete |
| fully insured | Meaningless intensifier | "Insured — general liability" |
| years of experience, serving the Tri-State since ___, established | He is brand new | "This is new. I'd be starting with you." |
| trusted by homeowners across Cincinnati | Invented social proof | The six-client fact |
| 5-star rated, highly rated, top-rated | No reviews exist | The exact count when it exists, or nothing |
| family owned and operated | Franchise phrase, and it flattens a specific true story | "This came out of my family's grill-cleaning business." |
| our clients love | Invented | Delete |
| satisfaction guaranteed | No such guarantee exists | "Thirty days' notice and you're done." |
| no job too big or too small | False. The scope is defined and published. | The exclusions |
| 24/7, always available, just a call away, anytime | False. No guaranteed response (`service-catalog.md` §4.7) | "Tuesday through Thursday is held open, so urgent things usually get handled — I don't promise same-day." |
| within 24 hours, 24-hour response, within one business day, guaranteed turnaround, rapid response, we respond to all service requests within ___ | An operational SLA on a 1.5–2 day week. This is the exact phrase the site refuses on purpose. | The reply commitment: "I'll answer the same day or the next morning. If it's after Thursday, it might be Monday." (Pair 17) |
| same-day service, emergency service, on-call | Not offered. `service-catalog.md` §4.7 — not an emergency service. | "Tuesday through Thursday is held open, so urgent things usually get handled — I don't promise same-day." |
| business hours, Mon–Fri 8–5, open 8 to 5 — **including in structured data** | Implies a staffed week that does not exist (`CANON.md` §3) | The real schedule, or omit the field entirely. See §3, the non-prose surface rule. |
| we handle everything so you don't have to | False and it invites scope creep | The scope, then the exclusions |

### 6.5 Manufactured urgency — the entire category

The scarcity here is real and it is better than anything invented. Never dilute it.

| Banned | Use instead |
|---|---|
| act fast, don't wait, limited time, hurry | The real number: "{{slots_open}} of the six spots are open." |
| spots are filling fast | "Two are open." Or "All six are full." |
| call now, book now, don't miss out | "Text me your cross street." |
| exclusive, VIP, invitation only, white glove, concierge | "Six clients. That's the cap and it's a schedule constraint." |
| while supplies last, only X left (unless X is the true count) | The true count |
| Founding Member framed as a promotion | "The first four lock their price for twelve months because they're taking a chance on someone with no track record." |

### 6.6 Category filler

| Banned | Use instead |
|---|---|
| outdoor living experience | "Outdoor living area" — it is a place, not an experience |
| your home is your biggest investment | Delete |
| curb appeal | The specific surface |
| maintenance (as a euphemism: "performed pool maintenance") | The tasks |
| beautify, spruce up, freshen up | Say what you did |
| let us take care of the details | Say which details |
| lawn and landscape solutions | He does neither. This is actively false. |
| free estimate (as a banner claim) | "I'll come look at it and send you a number the same day or the next morning." |
| packages, plans, tiers, levels | "What your property has" |
| three prices, three tiers, our three plans | See §3 — never fix the count. `decisions.md` D-3 is open. |
| starting at $229 (as a headline) | Lead with $289 and $329 (`CANON.md` §3) |
| as applicable, as needed (in customer copy) | Internal catalog language. In customer copy: "what the property needs that day." |

### 6.7 Structural bans

| Banned | Why |
|---|---|
| Exclamation marks | `CANON.md` §7, extended here to every surface |
| Emoji, ✓, ★, arrows as decoration | Not a person who texts a homeowner a checkmark logo |
| Title Case Headlines Like This | Sentence case only |
| ALL CAPS for emphasis mid-sentence | Reserved for MEMBERSHIP FULL and the season labels |
| Rhetorical questions as headlines ("Tired of yard work?") | Bait |
| "Not X, just Y" constructions | Tic |
| "No fluff," "no BS," "no gimmicks" | Announcing the absence of a thing is the thing |
| Any full client address or identifying house photo | Street name only, always |
| Stock photography as a final answer | `CANON.md` §9.3 |
| Implied growth: expanding, more families, additional territories | `CANON.md` §1 |

---

## 7. Where the voice bends

Three surfaces are allowed to read differently, and only these three.

1. **The service agreement.** Third person, "Westside Property Care," clause language. It is a
   contract and it needs to be one. `service-catalog.md` §4 is the model.
2. **The status stamps.** MEMBERSHIP FULL, GREEN SEASON, DORMANT SEASON, and the report header
   are set in caps as typographic objects, not as emphasis. **They must render in caps**, not
   merely be typed in caps in a source file — a stamp that arrives as "Membership full" is a
   softer claim than the one that was approved. Where the case is applied by a stylesheet, the
   stylesheet is carrying a voice rule and is auditable as copy (§3, the non-prose surface
   rule; `visual-direction.md` §3.4).
3. **Prices in a table.** A row may read `A property with a pool — $289 a month` without a
   full sentence around it. Everywhere else the number goes in a sentence.

Nothing else bends. In particular, a "professional" register is not permitted anywhere on the
grounds that a page feels too casual. If a page feels thin, the fix is more specificity, not
more polish.

---

## 8. The audit checklist

**Run this line by line against any customer-facing copy.** Every item is yes/no. Any "no" is a
defect with a named fix.

**What counts as "copy" for this checklist.** Not just prose. Structured data, `alt` text, meta
titles and descriptions, Open Graph values, button and `aria-label` text, form placeholders and
error messages, email subject lines, filenames and visible URL slugs, and any CSS that changes
rendered text — all of it is customer-facing copy and every item below applies to it. Audit the
**rendered** result, not only the source. See §3, the non-prose surface rule, for how to sweep
these and for the two real defects that were found there.

**Numbering is stable.** Items are split as `14a`/`14b` rather than renumbered, because other
agents' audits cite these numbers. Never renumber; split.

**Person and stance**

1. Is every sentence about the work written in first person singular — no "our," no "us," no
   company-as-subject? Where "we" appears, can it *only* mean you-and-the-reader, never the
   company? (§2 rule 1)
2. Is the reader addressed as "you"?
3. Does the copy avoid claiming, implying, or designing around a crew, a team, or staff?

**Specificity**

4. Does every description of work name a specific object — a basket, a chair, a tray, a hose
   bib — rather than a category like "pool care"? (§2 rule 2)
5. Is at least one thing located on the property — a side, a corner, a fixture? (§2 rule 3)
6. Does every finding carry a price, a "from" price, or an explicit "I'd have to look at it"?
   (§2 rule 4)
7. Are all unfalsifiable adjectives from §6.3 absent?

**Truth**

8. Are all prices quoted verbatim from `00-model/pricing.md`, unrounded?
9. Do $289 and $329 lead, with $229 underneath as the base? (`CANON.md` §3)
10. Does the copy avoid fixing the number of price points — no "three tiers," no sentence that
    breaks if a fourth configuration is added — and does it show finished monthly prices only,
    with no `+$60` / `+$40` module arithmetic? (§3)
11. Are there zero testimonials, review counts, star ratings, years in business, certifications,
    licenses, or awards? (§6.4)
12. If insurance or the LLC is mentioned, is it in the approved wording *and* actually true
    yet? (`brand-brief.md` §4.3)
13. Is the six-client cap stated as the real number, with the real count of open slots — and is
    every urgency phrase from §6.5 absent?
14a. **Availability — must be absent.** Does the copy avoid promising an arrival time, a time
    window, an operational response or turnaround commitment, or same-day service? Any promise
    that *work* will be started, responded to, or completed inside a stated period is a false
    availability claim — he works 1.5–2 days a week and cannot keep one. Banned in prose *and*
    in structured data: "within 24 hours," "same-day service," "24-hour emergency response,"
    "guaranteed turnaround," and an `openingHoursSpecification` of Mon–Fri 8–5 are all the same
    defect. (`service-catalog.md` §4.7, §4.11; §3 non-prose surface rule; pair 17)

14b. **Reply — must be present.** Where the surface leaves someone waiting to hear back, does
    it say when he will answer, in his own hours, with the honest failure case attached? A
    reply commitment is not a response window: answering a text is something he can do from a
    phone on a Saturday, and clearing your window wells is not. The reference wording is live
    on `02-website/site/thanks.html` — *"I'll answer the same day or the next morning. If it's
    after Thursday, it might be Monday, and I'd rather tell you that than say 'within 24
    hours.'"* Write every other reply commitment against that. A CTA that leaves someone
    waiting and says nothing about when he answers is a defect here; a CTA that answers it with
    an SLA is a worse defect under 14a. (§1 CTA rules; pair 17)
15. Does it avoid any claim about pool water, chemistry, or clarity? (`service-catalog.md` §4.1)
16. Does it avoid implying lawn or landscape service of any kind? (`service-catalog.md` §4.2)
17. Are the exclusions present on any surface that states a price, and positioned *before* or
    *with* the price rather than after it?

**Internal numbers**

18. Are minutes per visit, visit duration, the 1.5-hour planning allowance, the $100/hour rate,
    the $149 trip floor, route hours, and every metric and revenue figure absent? (§3)
19. Are the internal quoting anchors from `pricing.md` §5.3 absent *as a published price list*?
    (A specific number on a specific estimate for a specific job — "driveway and back patio,
    $449" — is exactly what the anchors are for and is correct. A page listing "pressure
    washing from $249" is not.)

**Winter and seasons**

20. If the copy touches price, does it say the price is the same all twelve months? (`pricing.md` §3)
21. If it touches winter, does it name specific Dormant Season work — freeze protection,
    downspout checks, covering, salting, the March spring-prep report — rather than describing
    winter as reduced service?
22. Is there no proposal, hint, or option for a winter discount, pause, or seasonal rate?

**Mechanics**

23. Zero exclamation marks, zero emoji, zero ✓ glyphs?
24. Headlines and buttons in sentence case, with ALL CAPS only on the status stamps?
25. Every banned phrase in §6 absent — read §6.1 through §6.7 as a find-and-check pass?
26. One em dash per paragraph at most? "Twice a month," never "bi-monthly"? "First and third
    Monday," never "every other Monday"?
27. Street names only — no full client address, no identifying house photo?

**The ask**

28. Exactly one ask on the surface, naming the next step and how long it takes — and is it
    something other than "learn more"?
29. If the book is full, is the only ask the waitlist plus the project offer, with the
    mechanism explained? (Pair 7)

**The last one, and it is the real test**

30. Could a competitor with two hundred accounts and a call center publish this copy
    word for word? If yes, it is not Westside Property Care's copy. Rewrite it with §2
    rules 2 and 3 until they could not.

---

## Related files

- `brand-brief.md` — what may be claimed, and the name usage rules this file enforces
- `messaging.md` — what to say, in what order; every line in it passes §8
- `visual-direction.md` — the typographic treatment of the stamps referenced in §7
- `CANON.md` §7 — the guardrails this file extends
- `00-model/service-catalog.md` — every scope and exclusion quoted above
- `00-model/pricing.md` — every price quoted above
