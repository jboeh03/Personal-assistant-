# Voice

**Owner:** `wpc-brand` · **Status:** source of truth for how Westside Property Care 513 writes
**This file is auditable.** Other agents check their copy against §6 (banned phrases) and §8
(the checklist). Every rule here is written to be pass/fail, not to be interpreted.

> **Re-baselined 2026-08-05, alongside `CANON.md`.** Four things in this file were wrong the
> moment the owner shipped his agreement, checklist, and logo: the **prices** ($229/$249/$269/
> $289/$329 are all dead), the **module-arithmetic ban** (there are no modules), the **season
> names** (Green/Dormant are gone), and the **name rule** (the 513 is promoted, not demoted).
> All four are fixed below and each fix is marked 🔁. **Checklist numbering is stable** — items
> 9, 10, 20, 21, and 22 are **retired in place**, item 18 is **split into 18a/18b**, and the
> replacements are **appended at 35–42**. Nothing was renumbered and no retired number is
> reused.

**Four named rules in §3 catch the failures that a phrase-level pass misses**, because they are
about the *shape* of a claim rather than its wording — the **one-price rule** (new; it replaces
the retired price-count rule), the **hours-arithmetic rule** (new), the **anchor-leak rule** (a
range is the internal quoting table read aloud), and the **non-prose surface rule** (structured
data, rendered CSS case, alt text, and meta values are copy). Run them as well as §6, not
instead of it.

**Tokens used in the examples.** `{{owner}}` is his first name, `{{phone}}` the business number,
`{{slots_open}}` how many of the six spots are currently open, `{{route_day}}` the client's
assigned route day, `{{address_short}}` a street-name-only reference. These are fill-ins.
Replace them; never ship them.

---

## 1. VOICE PROFILE

```text
VOICE PROFILE
=============
Author:      The owner of Westside Property Care 513, writing as himself
Goal:        Close a homeowner who already heard his name; make the season, the
             scope, and the one price unambiguous; make every service summary
             find the next project
Confidence:  High. The source set is now his own finished documents, not a draft.

Source Set
- _source/2026-08-05-owner-decisions.md §2 — the signed service agreement. The
  primary voice source for scope and boundary language.
- _source/2026-08-05-owner-decisions.md §3 — the 2-hour field checklist. The best
  source for how he names tasks: "empty pump basket," "check Inspect Cell / No
  Flow," "wipe grill exterior." This is Rule 2 in his own handwriting.
- _source/2026-08-05-owner-decisions.md §4 — the work-block plan, including the
  Trust/About note: local, military roots, service, honesty, integrity,
  dependability. And the 10-second standard.
- _source/brother-draft-4-client-model.md — his earlier operations draft, §6
  ("What will make the biggest difference to this property today?") and §7
  (the service-report example)
- CANON.md §8 — the voice guardrails this profile extends

Rhythm
- Mostly 8-20 words. One long sentence per paragraph, maximum.
- Fragments are allowed when they are a list of things that were done. His own
  checklist is written that way and it is the right register.
- Paragraphs run 2-4 sentences. A single-sentence paragraph is a deliberate stop.

Compression
- Compressed on claims, explanatory on mechanics. Never explain a feeling.
- If a sentence could be replaced by a number, replace it.
- His own standard: a homeowner understands in 10 seconds what you do, who it's
  for, the price, and how to contact you. If a surface takes longer, cut.

Capitalization
- Sentence case in headlines and buttons. Never Title Case Every Word.
- ALL CAPS only for the three status stamps: MEMBERSHIP FULL, IN SEASON,
  OFF SEASON — and the record stamp on a summary or invoice header.

Parentheticals
- Rare. Used only to narrow a scope ("hardscape joints, walkway cracks, and bed
  edges - not inside the beds"). Never for asides, jokes, or winks.

Question Use
- Only real questions asked of a real person, in a real reply. "Do you have a
  pool, an outdoor kitchen, or both?" Never rhetorical, never as a headline.

Claim Style
- Every claim carries its own evidence in the same sentence or the next one.
- Weaknesses are named before they are answered. "This is new" comes first.
- Limits are quoted from his own agreement, in his own words, not softened:
  "Completion of every possible task during every visit is not guaranteed."
- Numbers are exact. $279. Sixteen visits. Six properties. Two hours. March 1 to
  October 31. Never rounded, never "starting around."

Preferred Moves
- Name the object: "both baskets," "the six chairs," "the hose bib on the north
  side," "the Inspect Cell light"
- Locate it: "south side," "under the pergola," "the west well"
- Price it: "$49," "from $249," "$279 a month"
- Offer the out: "if you'd rather I leave it, that's fine"
- State the mechanism behind a limit, not just the limit
- Disclose the limit before the benefit, especially on the pool

Banned Moves
- First person plural. There is no "we."
- The company name as the subject of a verb in customer copy
- "WPC" alone, anywhere customer-facing
- Exclamation marks, emoji, and check glyphs, anywhere customer-facing
- Manufactured urgency of any kind
- Any credential, count, or testimonial that does not exist
- Any guarantee about pool water, clarity, or equipment
- Dividing $279 by hours, visits, or months
- Category filler: see the full list in §6

CTA Rules
- One ask per surface. Name the next step and how long it takes.
- The ask is never "learn more." It is "text me your cross street," "walk the
  property with me - about forty minutes," or "add your name to the waitlist."
- When the book is full, the only ask is the waitlist plus the project offer.
- Off season, the only ask is the waitlist plus the March 1 date.
- Any ask that leaves a person waiting must say when he will answer, in his own
  hours, with the honest failure case attached. That is a **reply commitment**
  and it is required. It is not a **response window**, which is banned. The two
  are separated in §8, items 14a and 14b, and worked in pair 17.

Channel Notes
- Website:        Second person for the reader, first person for him. The price
                  in the sentence, not only in a table.
- Service summary: Record first, finding second, price third, out fourth.
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
"I skimmed the pool." Never "we," never "our team," never "Westside Property Care 513 skimmed
the pool." There is one person and the copy should make that impossible to miss.

Two precise exceptions, and only these two:

- **"We" meaning him and the reader together** is fine and natural: "we'll walk it together on
  the first visit," "nothing we agree today changes on you next year." The test is whether "we"
  could be swapped for "the company." If it could, it is banned. If it can only mean *you and
  me*, it is correct.
- **The service agreement**, where "Westside Property Care 513" / "WPC513" is the contracting
  party. `_source/2026-08-05-owner-decisions.md` §2 is already written that way and must stay
  that way.

Never "our," "us," or "our team" in customer copy under any reading.

**Rule 2 — Name the specific thing you did.**
"Skimmed the pool and emptied both baskets," never "performed pool maintenance." "Wiped the six
patio chairs and the table," never "furniture care completed." "Checked the displayed salt level
and the Inspect Cell light," never "pool system checked." If a reader cannot picture the action,
rewrite it. Specificity is not a stylistic preference here — it is the entire competitive claim
(`CANON.md` §8), and his own checklist is already written this way.

**Rule 3 — Locate it.**
A thing without a place is a category. "The two window wells on the south side" beats "window
wells." "The hose bib behind the garage" beats "outdoor faucets." He is the person who knows
which one. Write like it.

**Rule 4 — Price it in the same breath.**
Every finding gets a number or an honest "I'd have to look at it and send you a number." A
finding without a price is a receipt, not an inspection, and the whole business model runs on
the difference (`CANON.md` §2).

**Rule 5 — Name the weakness first, then answer it.**
"This is new." "The season ends October 31." "I don't guarantee your water." "I don't promise
same-day." Leading with the limit is the cheapest credibility available and he has no other kind
yet. Never bury it, never soften it with "however," and never dress it as a benefit.

---

## 3. Mechanics — pass/fail

| Item | Rule |
|---|---|
| Person | First person singular for him. Second person for the reader. Never "we." |
| Name | 🔁 **Westside Property Care 513** in full on first reference, every surface. **WPC513** thereafter and as the mark. **"WPC" alone never appears** — not in prose, headlines, subject lines, alt text, slugs, or structured data. `WPC 513` with a space exists **only inside the logo lockup**. (`brand-brief.md` §1.2) |
| Tagline | **Seasonal Outdoor Living & Property Care.** Verbatim or absent. Never rewritten, never shortened, never given a verb. |
| Exclamation marks | None. Anywhere. Body, headline, button, subject line. |
| Emoji and glyphs | None. No check marks, no stars, no flames. A "SERVICE COMPLETE ✓" is replaced by a typographic stamp — see pair 12. |
| Headline case | Sentence case. The business name and the three status stamps are the only capitalized exceptions. |
| Em dashes | One per paragraph, maximum. |
| Oxford comma | Yes. |
| Contractions | Yes. "I'll," "don't," "that's." He talks like a person. |
| Numerals | Spell out one through nine in prose ("I take six clients," "sixteen visits"). Digits for prices, dates, measurements, and any count in a label or stamp ("2 of 6 open," "16 visits"). |
| Price | 🔁 **$279 a month. That is the entire membership price list.** $229, $269, $289, and $329 are withdrawn and may not appear as a live price anywhere outside `_source/`. **$249 is not a membership price either** — it appeared on an early flyer draft and is withdrawn (`CANON.md` §3). The only two project prices that may be published are **$249+** for a grill and outdoor kitchen deep clean and **$49+** for a window well. If `249` appears on a surface, check which one it is: as a monthly figure it is a defect, as a project starting price it is correct. |
| Season | 🔁 **March 1 – October 31.** "In Season" and "Off Season," capitalized as stamps, defined on first use. **Green Season and Dormant Season are retired names** and must not appear. |
| Visit count | "Sixteen visits a season." "Two scheduled visits a month." Never "bi-monthly" — it means both things. Never "24 visits a year." |
| The two-hour cap | 🔁 Allowed and often required — it is a **scope boundary**, and it must travel with both of its clauses: highest-priority items first, and *completion of every possible task during every visit is not guaranteed*. Never as a stopwatch on his work. See 18a/18b. |
| Schedule | "Your two visits land on your route day — a Monday or a Friday, set when you sign." Never a specific arrival time, window, or "between." |
| Reply to a person | **Required** wherever someone is left waiting on him. Say when he will answer, in his own hours, with the failure case attached: "the same day or the next morning — if it's after Thursday, it might be Monday." (§8 item 14b) |
| Response to a work request | **Banned.** No turnaround, no SLA, no "within 24 hours," no "same-day service," no "24-hour emergency response." He works Monday and Friday routes with Tuesday–Thursday held for projects, and cannot keep one. (§8 item 14a) |
| Pool | Every description of pool work carries the disclaimer in the same block: **no guarantee of water chemistry, water clarity, equipment performance, or pool-system operation.** (§8 item 41) |
| Military roots | "Military roots," stated plainly, unquantified. No rank, branch, span, unit, insignia, or veteran-owned badge. (`brand-brief.md` §4.2) |
| Address | Street name only in anything public. Never a full client address, never a house photo that identifies one. |

### Numbers that never appear in customer-facing copy

These are internal. Publishing any of them is an audit failure.

- **Any dead membership price:** $229, $269, $289, $329 — and **$249 used as a monthly figure**.
  ($249+ as the published grill and outdoor kitchen deep-clean starting price is correct.)
- **Any per-hour, per-visit, or per-task derivation of $279.** See the hours-arithmetic rule.
- The internal quoting anchors, the $100/hour project rate, and the $149 trip floor. **This
  includes reading two anchors out as a range** — "$249–$449" is the internal table with the
  labels removed. See the anchor-leak rule.
- Route hours, revenue per route day, project attach rate, retention, or effective hourly rate.
- Any revenue figure from `unit-economics.md`.
- **Any minutes-per-visit performance target.** The two-hour cap and the checklist's eight time
  blocks are scope, not targets — see 18a/18b, which is the precise boundary.

---

### 🔶 The one-price rule

🔁 **This replaces the retired price-count rule.** The old rule existed because four
configurations were live and a fifth might appear, so copy had to survive a row being added.
**There are no configurations.** There is one number and it does not vary by property.

**$279 a month. A property with a pool and an outdoor kitchen pays exactly what a plain patio
pays.**

| Write | Do not write |
|---|---|
| "$279 a month." | "Plans from $279." "Starting at $279." "$279+." |
| "One price. A pool doesn't change it." | "Our pool package." "Tiers." "Levels." "Packages." "Options." |
| "That's the whole price list." | "Custom quote." "Pricing depends on your property." |
| "Two scheduled visits a month, March through October." | "Flexible plans to fit every budget." |

**Why the flatness is worth saying out loud.** It is a genuinely unusual position in this
category and it is checkable in ten seconds. It also has a real consequence the copy must never
contradict: because a pool no longer changes the price, **a pool changes whether he takes the
client** (`CANON.md` §3). Never write anything implying a pool costs extra, and never write
anything implying a pool property is turned away for being a pool property. The honest framing
is that he is picky about which six properties fit in the two hours, and he says so on the
walkthrough.

**And never publish a discount, a prepay rate, an annual rate, a referral credit, or a "last
slot" price.** The membership price is never discounted. The founding concession is the
pro-rated 2026 remainder plus a 2027 rate lock — that is a *term*, not a *price*.

---

### 🔶 The hours-arithmetic rule

🔁 **New, and it exists because the agreement itself sells hours.** *"Two scheduled property-care
visits each month, with up to two hours of on-site service per visit."* That is four hours, and
$279 ÷ 4 = $69.75. A reader will do that division. **Copy must never do it for them.**

`CANON.md` §3 states the mechanism: the cap is what makes a flat price survivable across
properties of very different size. It is a **ceiling on the customer's entitlement**, not the
unit being sold. The moment copy presents $279 as a rate, it invites comparison with hourly
handyman labour, which is the wrong frame for a standing relationship.

**Banned outright, in prose and in non-prose:**

- Any division: "$69.75 an hour," "about $70/hr," "roughly $17 a visit per week," "$139.50 a
  visit," "less than $10 a day."
- Any multiplication used to justify the price: "four hours of labour a month at market rate
  would be…"
- Any "value" table comparing $279 to what the same hours would cost elsewhere.
- Any structured-data `price` or `offer` field expressed per hour or per visit.

**Required instead — lead with what stays maintained, state the cap where a boundary belongs:**

> ✅ Two scheduled visits a month, March through October. Up to two hours of on-site service
> each visit, highest-priority items first, and unused time doesn't roll over. Sixteen visits
> a season, $279 a month.

**When a prospect does the arithmetic out loud, answer it.** Do not dodge and do not re-frame
into fog. `messaging.md` §5.3 has the shippable answer; it concedes the number, explains what
the cap protects, and does not move the price.

---

### 🔶 The anchor-leak rule

**One number, one job, after he has looked at it. A range is the anchor table read aloud.**

The internal quoting anchors exist so he isn't building a number from scratch in a driveway.
Quoting a *specific* number off them, on a *specific* job, after he has *stood on the property*,
is the table working exactly as designed. Quoting the **span** between two of its rows publishes
the table.

Three questions. All three must pass.

1. **Is it one number?** A range is two anchors with the labels stripped off. "$249–$449" is two
   rows side by side, and a reader can reconstruct the shape of the table from it.
2. **Is it this job, on this property?** Not a category, not a service, not a page.
3. **Has he already looked at it?** A number before the on-site look is a guess he now has to
   defend, and the flat price is the promise.

| | Allowed | Banned |
|---|---|---|
| Form | A single figure — "$449" | Any range — "$249–$449," "$249 to $449," "$300-ish," "somewhere in the $300s," "high threes" |
| Scope | This driveway and this back patio | "Pressure washing," "gutters," "seasonal cleanup" — the quoted categories |
| Timing | After the walk | Before the walk, in a report, on a call, in a text, on a page |
| Hedges | None. The number is flat. | "likely," "probably," "typically runs," "in the ballpark of," "starting around" |
| "From" | Only on the two published starting prices — "$249+" / "from $249" for a grill and outdoor kitchen deep clean, "$49+" for a window well | "From" attached to any quoted category — "pressure washing from $249," "gutters from $179." That is an anchor row with the word *from* in front of it. |

**The two published exceptions, and only these two:** a grill and outdoor kitchen deep clean is
**$249+**, a window well cleanout is **$49+**. Those are published starting prices and may
appear anywhere. Every other project category is quoted after an on-site look with no published
price.

**One carve-out, and it is not an exception — it is a different kind of number.** 🔁 **Tightened
2026-08-05.** The sourced market rate for dedicated pool service — **$121–142 a month for four
visits including chemicals** (`CANON.md` §5) — is still allowed as a range, but the wording has
to be more careful than it used to be, because he now performs some pool work. Attribute it
precisely to **the product he does not sell**: full pool service *with water chemistry*. The
test is still whether he could be held to it, and nobody can hold him to what a pool company
charges. Never let it drift into "I could do that for about ___," and never place it next to
$279 in a way that reads as a comparison he is winning. See pair 5.

**Worked — the finding that needs a quote he hasn't built yet.** This is where the leak happens,
because he wants to give the homeowner something to hold onto.

> ❌ **Don't**
> I'll walk it and send you a flat number tomorrow morning, likely somewhere in the $249–$449
> range depending on how much of the walkway needs it too.

> ✅ **Do**
> I'll walk it and send you a flat number tomorrow morning, once I've measured the walkway and
> seen how far the algae actually runs. Whatever the number is, it's flat — it doesn't move if
> the job takes me longer than I planned.

The rewrite loses nothing. The homeowner wanted to know *when* they'd get a number and *whether
it could change on them*, and both of those are now answered. What they no longer have is the
ability to anchor him at $249 before he has seen the walkway.

**Why the range is worse than it looks.** It sets the floor as the expectation and the ceiling as
the insult, so the real number lands as a markup no matter where it falls. It also tells a reader
that a table exists, which invites "what's the driveway on its own, then?" — a question he now
has to answer from the driveway.

---

### 🔶 The non-prose surface rule

**If a customer can see it, hear it, or have it read to them, it is copy — and every rule in
this file applies to it.** Prose is the surface most likely to be audited and the least likely to
be wrong, because someone wrote it on purpose. The defects that survive are in the surfaces
nobody thought of as writing.

**This rule matters more, not less, after the 2026-08-05 re-baseline.** A palette swap, a season
rename, and a price change all land in exactly these surfaces last: a `text-transform` still
saying `GREEN SEASON`, a JSON-LD `price` still reading `329`, an `og:image` overlay still
rendering the old wordmark, a favicon still drawn from the old accent token. Sweep them.

Copy includes, and is not limited to:

| Surface | Carries |
|---|---|
| JSON-LD and any structured data | Every truth rule. A machine-readable claim is still a claim. |
| CSS that changes rendered text — `text-transform`, `content`, `::before`/`::after` | §7's stamp rule. What renders is what was said. |
| CSS custom property *names* that encode a retired concept — `--season-green`, `--dormant-*` | Not customer-facing, but they are how a stale season name survives a rewrite. Rename them. |
| `alt` text | Rules 2 and 3 — name the object, locate it |
| `<title>`, meta description, Open Graph, `og:image` overlay text | §6 in full |
| Button, link, and `aria-label` text | The CTA rules |
| Form labels, placeholders, helper text, validation and error messages | Person, tone, and the ban on urgency |
| Email subject lines, SMS auto-replies, voicemail greeting | Everything, including the spoken-name rule in `brand-brief.md` §1.4 |
| Filenames, URL slugs, and anchor IDs a user can see in the address bar | The naming rules in `brand-brief.md` §1.2 |
| Print artwork, yard sign, door hanger, vehicle lettering | Everything |

**Two defects found in exactly this way**, both from real WPC513 surfaces, neither anywhere near
a paragraph:

**1. Structured data that invented a staffing model.** The `LocalBusiness` block on the homepage
carried an `openingHoursSpecification` of Monday–Friday, `"opens": "08:00"`, `"closes": "17:00"`.
No prose on the site says that, and it is not true — routine visits are Monday and Friday only,
Tuesday through Thursday is project time, and there is no scheduled service at all between
November and February. Published as structured data, it is a machine-readable forty-hour week
with someone at a desk, and it is the same false-availability failure as "within 24 hours" (item
14a) wearing a different hat. **The rule: structured data may only assert what the prose already
asserts and `CANON.md` already supports.** If there is no honest value for a field, omit the
field — absent is not a defect, wrong is.

**2. CSS that unsaid a stamp.** `.figure` set the mono face, the tracking, and tabular figures,
but no `text-transform`. The status stamps rendered in sentence case, letterspaced — which breaks
§7 item 2 (the stamps are typographic objects, set in caps), breaks `visual-direction.md` §3.4
("no letterspaced lowercase, ever"), and, because the mono subset ships uppercase and digits
only, risks the lowercase falling back to a different face entirely. MEMBERSHIP FULL is not a
phrase that is written in caps; it is a stamp, and a stamp that renders as "Membership full" is a
different, softer claim. **The rule: if the voice specifies rendered case, the stylesheet is
where that rule is kept, and it is auditable there.**

**How to run this as an auditor.** Do not stop when the prose passes. Grep the built surface for
the things that are text but do not look like text: `application/ld+json`, `alt=`, `aria-label`,
`<title>`, `content="`, `text-transform`, `::before`, `::after`, `placeholder=`, and every string
in a validation or error path. Then grep for the retired vocabulary specifically: `229`, `249`
outside a project price, `269`, `289`, `329`, `Green Season`, `Dormant`, `twelve months`,
`year-round`, `\bWPC\b` not followed by `513`. Then read the **rendered** result, not the source
— because case, truncation, and generated content only exist after the browser has run.

---

## 4. Do / don't — worked pairs

Nineteen pairs, each from a real Westside Property Care 513 situation. Pairs 4, 5, 6, 11, and 12
were rewritten on 2026-08-05; pairs 18 and 19 are new.

---

### Pair 1 — Service summary: the work performed

**Situation:** In Season visit, pool-and-kitchen property, summary goes out that evening.

> ❌ **Don't**
> Today's service has been completed. All routine maintenance tasks were performed to our high
> standards, including pool care, patio care, and outdoor kitchen care.

> ✅ **Do**
> Pool skimmed, both baskets emptied, steps and the deep-end corners brushed. Vacuumed about
> twenty minutes — the maple seeds are heavy right now. Salt reads normal, no warning lights on
> the cell. Wiped the six patio chairs and the table. Emptied the grease tray on the flat-top and
> wiped the counters. Blew the patio, the pool deck, and the walk, including under the pergola.
> Pots watered. The fern on the north side dries out faster than the others, so I moved it two
> feet under the eave.

**Rules:** 1, 2, 3. Name the object, the count, and the location. "Pool care" is a line item;
"both baskets" and "no warning lights on the cell" are evidence he was there. Note that the
vacuum time appears as *what happened*, not as a target — that is 18a, and it is allowed.

---

### Pair 2 — Service summary: the finding

**Situation:** The single most valuable sentence in the business. `CANON.md` §2 — the summary is
where the next project is found.

> ❌ **Don't**
> I noticed a few areas that may require additional attention. Please let me know if you'd like
> to discuss options for addressing these items.

> ✅ **Do**
> The two window wells on the south side are full — mostly last fall's leaves, about six inches
> deep, and there's water sitting in the west one. I can clear both on your next visit for $49.
> Say the word and I'll add it. If you'd rather leave them, that's fine and I'll stop mentioning
> it.

**Rules:** 2, 3, 4. Named, located, priced, and turned into a yes/no with a graceful out. The $49
works *because* he is already on the property.

---

### Pair 3 — Service summary: nothing found

**Situation:** A rare visit where the property genuinely needs nothing.

> ❌ **Don't**
> Everything looks great! No issues to report.

> ✅ **Do**
> Nothing needs attention right now. I checked the hose bibs, the downspout discharge on both
> back corners, and the gate latch on the pool side. The latch is still catching — it seats if
> you lift it, but it'll want an adjustment before the season's out. Not urgent.

**Rules:** 2, 5. "Nothing found" should be rare. When it is true, say what was checked, so the
visit is still legible as an inspection.

---

### Pair 4 — 🔁 Pricing page: the price itself

**Rewritten 2026-08-05.** The old version of this pair listed $289, $329, and $229 as three rows
of a configuration ledger. All three prices are dead and so is the ledger.

> ❌ **Don't**
> Flexible plans to fit every budget. Contact us today for a customized quote tailored to your
> property's unique needs.

> ❌ **Also don't** *(this is the specific new failure)*
> Plans starting at $279/month. Pool add-on available. That's about $70 an hour for four hours
> of service — better value than a handyman.

> ✅ **Do**
> **$279 a month.** That's the whole price list.
>
> Two scheduled property-care visits a month, March 1 through October 31 — sixteen visits a
> season. Up to two hours of on-site service each visit, highest priority first. Unused time
> doesn't roll over, and completion of every possible task every visit isn't guaranteed.
>
> A property with a pool and an outdoor kitchen pays the same as a property with neither. Card
> on file, charged on the schedule we set when you sign. Thirty days' written notice to cancel,
> either of us, and there's no term.

**Rules:** 4, plus §3's one-price rule and hours-arithmetic rule. The number goes in the
sentence. The cap appears with both of its clauses. Nothing is divided by anything.

---

### Pair 5 — 🔁 The pool, on a surface that states the price

**Rewritten 2026-08-05, and this is the most changed pair in the file.** The old version said he
did not vacuum, brush, backwash, or touch the filter. **He now does all of that**
(`_source/2026-08-05-owner-decisions.md` §3). The exclusion did not get smaller — it moved. What
he excludes now is not *labour*, it is *responsibility for the result*, and that is a harder
thing to say well.

> ❌ **Don't** *(the old copy — now factually wrong)*
> I don't test the water. I don't vacuum, brush, backwash, or touch the filter.

> ❌ **Also don't** *(the new failure: doing the work and implying the outcome)*
> Complete pool care included — skimming, brushing, vacuuming, backwashing, and salt system
> monitoring, twice a month, so your pool stays clear all season.

> ✅ **Do**
> **I take care of the pool area. I don't guarantee the pool.**
>
> On each visit I skim the surface, brush the steps, corners, and selected areas, vacuum for up
> to about thirty minutes, empty the skimmer and pump baskets and the robot's debris container,
> backwash when it's appropriate for your system, check the displayed salt level and the system
> indicators, and look the equipment over for warnings.
>
> What I don't do is test or balance the water, add chlorine, shock, salt, or algaecide, or take
> responsibility for how the water ends up. **No guarantee of water chemistry, water clarity,
> equipment performance, or pool-system operation.** If it goes green in July, that isn't
> something I'm responsible for or able to fix.
>
> If you want somebody accountable for the water, hire a pool company — full service with
> chemistry runs about $121 to $142 a month around here, and I'll tell you who your neighbours
> use. The two aren't in competition. One of us owns the water; I own the deck, the furniture,
> the kitchen, the trash, the pots, and the record.

**Rules:** 5, then 2, then the pool row in §3. The disclaimer is quoted from his own agreement
and it sits **inside** the same block as the work, not in a footnote. The market range is
attributed to *full service with chemistry* — the product he does not sell — which is the
tightened carve-out in the anchor-leak rule.

---

### Pair 6 — 🔁 Door hanger

**Situation:** Left on a qualified street in Green Township. Four lines. Nobody buys $279 a month
off a door hanger — the job is recognition later.

> ❌ **Don't**
> **WPC** — Your Premier Outdoor Living Solution! Serving the Tri-State with pride. FREE
> ESTIMATES — Fully Licensed & Insured — Call Today!

> ✅ **Do**
> **Westside Property Care 513**
> Seasonal Outdoor Living & Property Care
> Pool deck, patio, outdoor kitchen — twice a month, March through October, written down every
> time. I take six properties on the west side.
> {{slots_open}} of the six spots are open. {{owner}} · {{phone}}

**Rules:** 1, 5, the name rule, plus every ban in §6. "WPC" alone, "premier," "solution," the
exclamation marks, the uncheckable "licensed," and the free-estimate banner all go. The real slot
count replaces the urgency. The tagline is verbatim.

---

### Pair 7 — The membership-full notice

**Situation:** All six slots taken. The scarcity is a fact about the schedule, not a device.

> ❌ **Don't**
> We're currently at capacity! Join our exclusive waitlist today for priority access to the next
> available opening. Spots fill fast — don't miss out!

> ✅ **Do**
> **MEMBERSHIP FULL**
>
> All six spots are taken. That's the actual cap, not a sales line — six properties is twelve
> visits a month, and routine visits only happen Monday and Friday. Past six I'd be rushing
> somebody.
>
> The waitlist is real. I keep it in writing with your address on it, because when a spot opens
> it goes to whoever is closest to the route I'm already driving. Add your name and I'll tell you
> honestly where you sit and what would have to happen.
>
> In the meantime I do project work Tuesday through Thursday, membership or not: grill and
> outdoor kitchen deep cleans from $249, window wells from $49, pressure washing quoted after I
> look at it.

**Rules:** 5, and the hard ban on manufactured urgency. Explaining the mechanism makes the cap
believable in a way "exclusive" never does.

---

### Pair 8 — An estimate

> ❌ **Don't**
> Pressure Washing Services .................... $450.00
> Materials extra. Prices subject to change. Thank you for choosing Westside Property Care!

> ✅ **Do**
> **Driveway and back patio, pressure washed — $449.**
>
> That's a flat price, not an hourly rate. If it takes me longer than I planned, it still costs
> $449.
>
> Materials are billed separately at cost plus 25% and itemized on the invoice. For this job I
> don't expect any beyond what's already on the truck; if that changes I'll tell you before I
> start, not after.
>
> Good for 30 days.

**Rules:** 4. Flat price, materials always a separate line. The expiry is a fact, not pressure.

---

### Pair 9 — First reply to an inquiry

**Situation:** Someone filled in the form or texted. The first reply qualifies.

> ❌ **Don't**
> Thank you for your interest in Westside Property Care! We're excited to learn more about your
> property and would love to schedule a free consultation to discuss how we can elevate your
> outdoor living experience. Please don't hesitate to reach out with any questions!

> ✅ **Do**
> Thanks for getting in touch. Two questions before I take up your time: does the property have a
> pool, an outdoor kitchen, or both — and what's your cross street?
>
> I take six clients and the route is built around clusters, so location decides more than
> anything else does. If it works, I'll come walk the property with you, show you exactly what's
> included and what isn't, and give you the price while I'm standing there. About forty minutes.

**Rules:** 1, 4, 5, and the CTA rule. Qualify first. Say what happens next and how long it takes.
No greeting boilerplate. Note that the two questions are asked because the answers decide
**whether he takes the client**, not what he charges — never phrase them as pricing questions.

---

### Pair 10 — Declining something out of scope

**Situation:** A member asks for gutter cleaning. No ladders.

> ❌ **Don't**
> Unfortunately, gutter cleaning falls outside the scope of our current service offering. We'd be
> happy to discuss alternative solutions.

> ✅ **Do**
> That's not something I do on a visit. Gutter cleaning means working off a ladder — on your
> visits I check the downspouts from the ground, watch where they discharge, and tell you what I
> see.
>
> If they need actually cleaning, I can quote it as a project or give you two names. Either way,
> your back corner downspout is discharging right against the foundation, and that one I can fix
> with an extension.

**Rules:** 5, then 2 and 4. Say why, then say what happens instead — and turn the "no" into a
finding. That last paragraph is a project the "no" just generated.

---

### Pair 11 — 🔁 The last visit of the season

**Rewritten 2026-08-05.** This pair used to be "the winter report," written for a February
Dormant Season visit. **There are no February visits.** The equivalent high-stakes document is now
the **final visit of the season, late October** — the last thing a member reads before four months
of silence, and the thing that decides whether they come back on March 1.

> ❌ **Don't**
> Final service of the season completed. Thank you for your business this year. We look forward
> to serving you again in the spring!

> ✅ **Do**
> That's visit sixteen — last scheduled one until March.
>
> Today: furniture wiped down and the cushions stacked in the shed, covers on the grill and both
> chaises. Skimmed and both baskets emptied, and I backwashed since the pressure was up. Blew the
> patio and the pool deck clear of the maple leaves, which are most of the way down now.
>
> Two things I'd want you to know before it gets cold. The hose bib on the north side is dripping
> at the packing nut — it isn't leaking much now, but it's the one that would split in a hard
> freeze, and that's a plumber, not me. And the pool cover has a tear about a foot long along the
> south edge; you'll see it when it goes on.
>
> Your next scheduled visit is the first route day in March. I'm not billing you November through
> February. If you want anything handled before then — the cover, a grill deep clean before the
> holidays, pressure washing while the deck is empty — that's project work and I do it year
> round. Just say so.

**Rules:** 2, 3, 4, 5. Name the damage that hasn't happened yet. State the gap in service before
the customer notices it. Route the four dead months to project work, which is where the income is
anyway (`CANON.md` §2) — **without** implying any of it is included.

---

### Pair 12 — 🔁 The summary header

**Situation:** An early draft used "WPC SERVICE COMPLETE ✓". It is a notification, it uses the
banned bare "WPC," and it carries a glyph. The summary is a record.

> ❌ **Don't**
> WPC SERVICE COMPLETE ✓

> ✅ **Do**
> WPC513 · SERVICE SUMMARY · {{address_short}} · VISIT 07 OF 16 · MONDAY, JUNE 15

**Rules:** the glyph ban, the name rule, and `brand-brief.md` §1.2 — WPC513 is the record stamp
and this is exactly where it earns its keep. **`VISIT 07 OF 16` is the single highest-value
addition of the re-baseline**: it makes the season legible, it makes the record feel like a
series rather than a receipt, and it quietly does the work the old year-round argument used to do.

---

### Pair 13 — Answering "you're brand new"

**Situation:** The walkthrough, or a reply. `brand-brief.md` §5.

> ❌ **Don't**
> With years of hands-on experience in the outdoor living space, Westside Property Care 513 brings
> professionalism and reliability to every property we serve.

> ❌ **Also don't** *(the specific new failure)*
> As a veteran-owned business with over a decade of disciplined service experience, I bring
> military precision to every property.

> ✅ **Do**
> This is new. I'd be starting with you.
>
> I'm local, I've got military roots, and what I'm not new at is outdoor kitchens — I've been
> cleaning grills and outdoor kitchens on west-side properties through my family's business,
> which is where this came from.
>
> Here's what I can do about the rest of it. I'll pro-rate what's left of this season and lock
> your rate for all of next year, so nothing we agree today moves on you. There's no term —
> thirty days' written notice and you're done. And everything I don't do is written into the
> agreement before you sign it, which is more than the last three people who quoted you did.

**Rules:** 5, and `brand-brief.md` §4.2. "Military roots" is stated exactly as he stated it. The
second "don't" invents a decade, a veteran-owned status, and a personality trait out of three
words he wrote on a planning sheet — that is the failure mode this proof point is most likely to
produce, and it is banned.

---

### Pair 14 — Rescheduling for weather

> ❌ **Don't**
> Due to inclement weather conditions, your scheduled service has been postponed. We apologize
> for any inconvenience this may cause.

> ✅ **Do**
> It's supposed to rain hard through Monday, and blowing the patio in that would just move mud
> around. I'm moving you to Friday the 12th — same visit, same month, nothing changes on the
> billing.

**Rules:** 2, 5. Say what the weather actually prevents. *"Weather-related visits may be moved to
the next reasonably available service date"* (Agreement §8) — so say which date.

---

### Pair 15 — A failed card

**Situation:** *"Past-due accounts may result in suspension of scheduled service until the account
is current"* (Agreement §11). Say the real consequence, without the threat register.

> ❌ **Don't**
> ACTION REQUIRED: Your payment method has been declined. Please update your billing information
> immediately to avoid interruption of service.

> ✅ **Do**
> Your card came back declined. Nine times out of ten it's a new expiration date.
>
> I need a working card before the 6th, which is your next visit — if it's not sorted by then I
> have to hold the visit until it is, and I'd rather just fix the card. Here's the link, or text
> me and I'll take it over the phone.

**Rules:** 5, and the urgency ban. No capitals, no "immediately," no implied threat. The real
deadline is a date, so give the date, and state the real consequence in one clause rather than
hinting at it.

---

### Pair 16 — Someone who wants more than the membership

**Situation:** The prospect testing the boundary. Handled well, this is a project sale; handled
badly, it is a bad member for two seasons.

> ❌ **Don't**
> Absolutely, we can take care of that for you! We're happy to accommodate whatever you need —
> just let us know.

> ✅ **Do**
> The beds aren't in it — weeding inside beds is a quoted project, and so is the mulch. What's
> included is spot treatment in the hardscape joints, the walkway cracks, and along the bed
> edges.
>
> I'd rather tell you that now than have it turn into a conversation in July. If you want the beds
> done, I'll walk them and send you a number tomorrow morning; it's the kind of thing that's worth
> doing once in April and then leaving alone.

**Rules:** 4, 5. *"Work beyond the scheduled service time or outside routine service requires
Client approval before additional billable work is performed"* (Agreement §6). Name it, price it,
let them say yes.

---

### Pair 17 — The reply commitment and the response window

**Situation:** Every surface that leaves a person waiting — the thanks page after the form, the
"text me" line, the estimate promise. These two things look identical and are opposites. One is
required by the CTA rule in §1; the other is the false-availability failure.

**The test, in one line:** *is he promising to answer a person, or to show up for a job?*

| | Reply commitment — **required** | Response window — **banned** |
|---|---|---|
| What is promised | That he will write back | That work will be started or completed |
| What it costs him | A text from a phone, anywhere, any day | A route day he does not have |
| Can he keep it? | Yes. Answering is not a visit. | No. Routine visits are Monday and Friday only. |
| Form | A named point in his own week, with the failure case | A duration, a clock, or an SLA |
| Source | §1 CTA rules, §8 item 14b | §8 item 14a; Agreement §8 |

> ❌ **Don't** — the response window
> We respond to all service requests within 24 hours. Same-day service available. Call our 24-hour
> line for emergencies.

Three separate false claims. There is no line, there is no same-day, and 24 hours is a commitment
that Tuesday-through-Thursday project time exists to *absorb*, not to guarantee. It also implies
someone is on the other end at 2am, which is the implied-crew failure in a different costume.

> ✅ **Do** — the reply commitment
> I'll answer the same day or the next morning. If it's after Thursday, it might be Monday, and
> I'd rather tell you that than say "within 24 hours."

**This is the reference example.** It is live on `02-website/site/thanks.html` and it is the model
every other reply commitment on every surface should be written against. Three things make it
work:

1. **It commits to answering, not to arriving.** Nothing about the property, the schedule, or the
   work.
2. **It names its own failure case before you find it.** "If it's after Thursday, it might be
   Monday" is rule 5 doing its job — and a Monday reply, disclosed, reads as honesty, while the
   same Monday reply after a 24-hour promise reads as a broken promise.
3. **It names the thing it is refusing to say, and says why.** Quoting "within 24 hours" back at
   the reader tells them he knows what the normal move is and declined it. That single quoted
   phrase does more for credibility than the rest of the page.

**Where it must appear:** any form confirmation, any "text me" or "email me" ask, any promise to
send a number. A CTA that leaves someone waiting with no reply commitment is a defect under item
14b; a CTA that gives them an operational SLA instead is a worse defect under item 14a.

**Rules:** 5, the CTA rules in §1, and §3's reply/response rows.

---

### Pair 18 — 🆕 The off-season site state

**Situation:** November through February. There are no scheduled visits and nobody is being
billed. The site still has to work, and the temptation is to hide the fact or to invent a winter
membership to fill the hole.

> ❌ **Don't**
> Winter memberships now available! Don't let your outdoor space suffer this season — reserve your
> spot for 2027 today and lock in year-round protection.

> ✅ **Do**
> **OFF SEASON**
>
> The season runs March 1 through October 31 — sixteen visits, two a month. It's closed right now.
> The next season opens **March 1**, and I'm not billing anyone between now and then.
>
> {{slots_open}} of the six spots are open for it. If you want one, the walkthrough happens now,
> not in March — I'd rather know your property before the first visit than during it. Text me your
> cross street.
>
> Project work runs year round: grill and outdoor kitchen deep cleans from $249, pressure washing
> quoted after I look at it.

**Rules:** 5, the one-price rule, the CTA rules, and the urgency ban. The season being closed is a
**fact stated first**, not a problem being managed. The off-season ask is the waitlist or the
walkthrough plus the March 1 date, and nothing else. Any separate winter offering is a different
product with its own page and must never be described as included or as "year-round protection."

---

### Pair 19 — 🆕 The two-hour cap, wherever it appears

**Situation:** Any surface that mentions the visit length. This is the newest and most fragile
piece of copy in the business, because the same sentence can read as a promise, a limit, or a
stopwatch depending on three words.

> ❌ **Don't** — the promise
> Two full hours of dedicated service every visit, so nothing gets missed.

> ❌ **Don't** — the stopwatch
> I'm in and out in two hours, so you get efficient, no-nonsense service without paying for
> someone standing around.

> ✅ **Do**
> Each visit is up to two hours of on-site service, and I spend them on whatever will make the
> biggest difference to the property that day — highest priority first, using my judgement.
> Completion of every possible task every visit isn't guaranteed, and unused time doesn't roll
> over.
>
> That cap is why the price is the same for a property with a pool and an outdoor kitchen as for
> one with a plain patio. It's a limit on what you're buying, not a limit on how carefully I work.

**Rules:** 18a and 18b, the hours-arithmetic rule, and rule 5. The first "don't" turns a ceiling
into a floor and will be quoted back at him the first time a visit runs ninety minutes. The second
one makes speed the product, which contradicts *never rush a property* — that is exactly the
performance target 18b bans. The "do" states the cap, both its clauses, and the mechanism it
serves, and never divides anything.

---

## 5. Two rewrites of longer copy

### 5.1 The homepage opening

> ❌ **Before**
>
> # Elevate Your Outdoor Living Experience
> Westside Property Care is Cincinnati's premier provider of comprehensive outdoor property
> solutions. Our team is passionate about delivering peace of mind to homeowners across the
> Tri-State area. With flexible plans to fit every budget and a commitment to unmatched quality,
> we're your one-stop shop for a beautiful backyard. Contact us today for your free estimate!

Fourteen banned phrases, an invented team, an invented service area, an invented credential, and
not one checkable fact.

> ✅ **After**
>
> # Sixteen visits. Six properties. Written down every time.
>
> **Westside Property Care 513** — seasonal outdoor living and property care on the west side. I
> take care of the outdoor living areas of six homes: pool deck, patio, outdoor kitchen, and the
> hardscape and walks that serve them. Two scheduled visits a month from March 1 through October
> 31, the same person every time, and a short written summary the same day covering what I did and
> what I found.
>
> **$279 a month.** That's the whole price list. Up to two hours on site each visit, highest
> priority first.
>
> Not lawn care. Not pool service — I take care of the pool area but I don't guarantee the water.
> Everything I don't do is on this page, above the price.
>
> **{{slots_open}} of the six spots are open.**

**What it does that the old version didn't:** it clears his own ten-second test — what you do,
who it's for, the price, how to contact you — and it discloses the season, the cap, and the pool
limit before it asks for anything.

---

### 5.2 The scope section

> ❌ **Before**
>
> ## What's Included
> Our comprehensive membership covers all aspects of outdoor property maintenance, including pool
> care, patio care, outdoor kitchen care, debris management, and more. We tailor every visit to
> your property's unique needs, ensuring your outdoor space is always ready to enjoy.

> ✅ **After**
>
> ## What actually happens on a visit
>
> **Maintain everything. Deep-clean nothing unless it's specifically scheduled.** That's the rule I
> work to, and it decides most of what follows.
>
> I walk the property before I start and again before I leave. In between, I do what will make the
> biggest difference that day — which is not the same list every time, and a visit in early March
> with the cover just off looks nothing like one in late August.
>
> **The pool area,** where there is one: skim, brush the steps and corners, vacuum up to about
> thirty minutes, empty the skimmer and pump baskets and the robot container, backwash if the
> system wants it, check the salt reading and the warning lights. I don't test or balance water,
> and I don't guarantee chemistry, clarity, or equipment.
>
> **The outdoor kitchen and grill:** counters and accessible surfaces wiped, light grease and food
> residue removed, grease trap or drip pan emptied, grill exterior wiped, cooking area checked for
> buildup and for nesting. Burners, grates, interiors, and disassembly are a deep clean, which is a
> separate job from $249.
>
> **The patio and furniture:** tables and chairs wiped, cushions straightened, cobwebs cleared,
> seating areas tidied.
>
> **The property around it:** sticks and small branches collected, leaf and debris pockets cleared,
> visible trash picked up, designated areas swept or blown, walkways checked. Designated outdoor
> cans emptied and wiped. Pots watered if you want them watered.
>
> Then a final walk, gates back the way I found them, photos where they're useful, and a short
> written summary the same day — including anything I found that isn't mine to fix.
>
> **Sixteen visits a season. March 1 through October 31.** No scheduled visits November through
> February, and no billing either.

**What the rewrite fixed:** "comprehensive," "all aspects," "and more," "tailor," "unique needs,"
"always" — six unfalsifiable words replaced with the actual eight blocks off his own checklist.
Note that the governing rule is stated *first*, so the list never becomes a promise he fails on a
rainy Monday.

---

## 6. Banned phrases, with replacements

`CANON.md` §8 bans six. This section keeps all six and extends the list. **Every row is an audit
item.** A hit in customer-facing copy is a failure, not a suggestion.

### 6.1 From CANON §8 — locked

| Banned | Use instead |
|---|---|
| solutions | Name the work. "I skim the pool and empty both baskets." |
| premier | Nothing. Delete the sentence and put a fact there. |
| one-stop shop | The scope list, and the exclusions next to it. |
| peace of mind | The mechanism: "you get a written summary the same day." **Extended: banned everywhere, not only in headlines.** |
| we're passionate about | Delete. Show it in the summary. |
| elevate your outdoor living experience | "Ready to use." Or name what changes. |

### 6.2 Corporate voice — there is no company here

| Banned | Why | Use instead |
|---|---|---|
| we, our, us, our team, our technicians — wherever "we" could be read as the company | There is one person. The most damaging category of all. | I, me, my. ("We" is allowed only when it can only mean *you and me* — §2 rule 1.) |
| Westside Property Care 513 as the subject of a verb | Same. | I |
| **WPC** on its own | It is not shorthand for anything. `brand-brief.md` §1.2 | **WPC513**, or the full name |
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
| tailored, bespoke, curated, customized | "What the property needs that day" |
| seamless, effortless, hassle-free, worry-free, stress-free | Name what you handle |
| transform, revitalize, rejuvenate, elevate | Say what changes |
| pristine, immaculate, flawless, crystal clear | "Blown clean." And never "crystal clear" about water — see 6.4. |
| dedicated, committed, driven | Delete |
| military precision, disciplined, squared away | 🆕 Delete. These are what "military roots" turns into when nobody is watching. State the fact, not the trait. |

### 6.4 Claims he cannot make

| Banned | Why | Use instead |
|---|---|---|
| licensed, licensed and insured | Ohio does not license this trade. Wrong, not just early. | "Insured — general liability," once the policy is bound |
| bonded, certified, accredited | None exist | Delete |
| fully insured | Meaningless intensifier | "Insured — general liability" |
| **veteran-owned, veteran-owned and operated, any rank, branch, unit, span of service, deployment, insignia, or service ribbon** | 🆕 He wrote "military roots." Everything else is inference. `brand-brief.md` §4.2 | "Local, with military roots." |
| years of experience, serving the Tri-State since ___, established | He is brand new | "This is new. I'd be starting with you." |
| trusted by homeowners across Cincinnati | Invented social proof | The six-client fact |
| 5-star rated, highly rated, top-rated | No reviews exist | The exact count when it exists, or nothing |
| family owned and operated | Franchise phrase, and it flattens a specific true story | "This came out of my family's grill-cleaning business." |
| our clients love | Invented | Delete |
| satisfaction guaranteed | No such guarantee exists | "Thirty days' written notice and you're done." |
| **clear water, balanced water, healthy pool, swim-ready, we keep your pool clear, pool stays clean all season** | 🆕 Directly contradicts the agreement's own disclaimer. The single most dangerous category on the site. | "I take care of the pool area. I don't guarantee the pool." Plus the disclaimer verbatim. |
| **complete pool care, full pool service, pool maintenance included** | 🆕 He does real pool work now, which makes these read as true. They are not. | The eight named tasks, then the disclaimer |
| no job too big or too small | False. The scope is defined and published. | The exclusions |
| 24/7, always available, just a call away, anytime | False. No guaranteed response. | "Tuesday through Thursday is held open, so urgent things usually get handled — I don't promise same-day." |
| within 24 hours, 24-hour response, within one business day, guaranteed turnaround, rapid response, we respond to all service requests within ___ | An operational SLA on a two-route-day week. The exact phrase the site refuses on purpose. | The reply commitment (pair 17) |
| same-day service, emergency service, on-call | Not offered. | "Tuesday through Thursday is held open, so urgent things usually get handled — I don't promise same-day." |
| business hours, Mon–Fri 8–5, open 8 to 5 — **including in structured data** | Implies a staffed week that does not exist | The real schedule, or omit the field entirely. See §3, the non-prose surface rule. |
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
| Founding rate framed as a promotion | "I'll pro-rate what's left of this season and lock your rate for all of next year, because you'd be taking a chance on someone with no track record." |
| 🆕 **season-closing urgency** — "last chance before the season ends," "only 3 visits left this year," "sign before March or wait a year" | The date, flat: "The next season opens March 1." The season ending is a fact; it is not a deadline he gets to use. |

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
| 🔁 packages, plans, tiers, levels, options, configurations, add-ons, modules | There is one price and one membership. §3, the one-price rule. |
| 🔁 starting at $279, from $279, plans from $279, $279+ | "$279 a month." The "+" belongs to $249+ and $49+ and nowhere else. |
| 🆕 year-round, all year, twelve months, every month, all season long *(where "season" is implied to mean the calendar)* | "March 1 through October 31." "Sixteen visits." Project work genuinely is year round and may be described that way — the membership is not. |
| as applicable, as needed (in customer copy) | Internal catalog language. In customer copy: "what the property needs that day." |

### 6.7 Structural bans

| Banned | Why |
|---|---|
| Exclamation marks | `CANON.md` §8, extended here to every surface |
| Emoji, check marks, stars, arrows as decoration | Not a person who texts a homeowner a checkmark logo |
| Title Case Headlines Like This | Sentence case only |
| ALL CAPS for emphasis mid-sentence | Reserved for MEMBERSHIP FULL, IN SEASON, OFF SEASON, and the record stamp |
| Rhetorical questions as headlines ("Tired of yard work?") | Bait |
| "Not X, just Y" constructions | Tic |
| "No fluff," "no BS," "no gimmicks" | Announcing the absence of a thing is the thing |
| Any full client address or identifying house photo | Street name only, always |
| Stock photography as a final answer | `CANON.md` §10.6 |
| Implied growth: expanding, more families, additional territories | `CANON.md` §1 |
| 🔁 Any surviving reference to Green Season or Dormant Season, in prose, CSS token names, filenames, or slugs | Retired names. IN SEASON and OFF SEASON. §3 |

---

## 7. Where the voice bends

Three surfaces are allowed to read differently, and only these three.

1. **The service agreement.** Third person, "WPC513," clause language. It is a contract and it
   needs to be one. `_source/2026-08-05-owner-decisions.md` §2 is the model, and it is his own
   drafting — do not rewrite it into first person.
2. **The status stamps.** 🔁 **MEMBERSHIP FULL, IN SEASON, OFF SEASON**, and the summary header are
   set in caps as typographic objects, not as emphasis. **They must render in caps**, not merely be
   typed in caps in a source file — a stamp that arrives as "Membership full" is a softer claim
   than the one that was approved. Where the case is applied by a stylesheet, the stylesheet is
   carrying a voice rule and is auditable as copy (§3, the non-prose surface rule;
   `visual-direction.md` §3.4).
3. **The field checklist.** His own laminated two-pager is written in dry-erase telegraphese —
   *"empty pump basket when appropriate and safe," "check Inspect Cell / No Flow."* That register
   is correct for that object and must not be softened. It is also **not a customer document**;
   nothing on it may be published as a list of promised tasks.

Nothing else bends. In particular, a "professional" register is not permitted anywhere on the
grounds that a page feels too casual. If a page feels thin, the fix is more specificity, not more
polish.

---

## 8. The audit checklist

**Run this line by line against any customer-facing copy.** Every item is yes/no. Any "no" is a
defect with a named fix.

**What counts as "copy" for this checklist.** Not just prose. Structured data, `alt` text, meta
titles and descriptions, Open Graph values, button and `aria-label` text, form placeholders and
error messages, email subject lines, filenames and visible URL slugs, and any CSS that changes
rendered text — all of it is customer-facing copy and every item below applies to it. Audit the
**rendered** result, not only the source. See §3, the non-prose surface rule.

**Numbering is stable, permanently.** Other agents cite these numbers in audit reports, so an item
number must always mean the same thing. When a rule needs to divide, **split it in place** — 14
became 14a and 14b, 19 became 19a and 19b, and **18 became 18a and 18b on 2026-08-05**. When a
rule dies, **retire it in place** with a pointer and leave the number occupied forever — 9, 10, 20,
21, and 22 are retired. When a rule is genuinely new, **append a number past the end** — the
non-prose block is 31–34 and the 2026-08-05 block is 35–42, even though both are printed before
item 30, because item 30 is written to be run last. **Never renumber an existing item, and never
reuse a retired number.**

**Person and stance**

1. Is every sentence about the work written in first person singular — no "our," no "us," no
   company-as-subject? Where "we" appears, can it *only* mean you-and-the-reader, never the
   company? (§2 rule 1)
2. Is the reader addressed as "you"?
3. Does the copy avoid claiming, implying, or designing around a crew, a team, or staff?

**Specificity**

4. Does every description of work name a specific object — a basket, a chair, a tray, a hose bib,
   the salt reading — rather than a category like "pool care"? (§2 rule 2)
5. Is at least one thing located on the property — a side, a corner, a fixture? (§2 rule 3)
6. Does every finding carry a price, a "from" price, or an explicit "I'd have to look at it"?
   (§2 rule 4) — where "a 'from' price" means **$249+** or **$49+** and nothing else. On every
   other category the honest answer is "I'd have to look at it," never a range and never a soft
   number. See 19b.
7. Are all unfalsifiable adjectives from §6.3 absent, including the new "military precision" row?

**Truth**

8. Is every price exact and unrounded, and does every project price trace to a published starting
   price or to a single flat number quoted after an on-site look?
9. **RETIRED 2026-08-05.** *Was: "Do $289 and $329 lead, with $229 underneath as the base?"* All
   three prices are dead. **Use item 35.** This number is never reused.
10. **RETIRED 2026-08-05.** *Was: the price-count rule and the module-arithmetic ban.* There are
    no configurations and no modules. **Use items 35 and 36.** This number is never reused.
11. Are there zero testimonials, review counts, star ratings, years in business, certifications,
    licenses, or awards? (§6.4)
12. If insurance or the LLC is mentioned, is it in the approved wording *and* actually true yet?
    (`brand-brief.md` §4.3)
13. Is the six-client cap stated as the real number, with the real count of open slots — and is
    every urgency phrase from §6.5 absent, including the new season-closing row?
14. **Availability and reply are two different promises. Check both.** One is banned, one is
    required, and conflating them is how a surface ends up with either a lie or a dead end.

    - **14a — Availability. Must be absent.** Does the copy avoid promising an arrival time, a time
      window, an operational response or turnaround commitment, or same-day service? Any promise
      that *work* will be started, responded to, or completed inside a stated period is a false
      availability claim — routine visits are Monday and Friday only and he cannot keep one. Banned
      in prose *and* in structured data: "we respond to service requests within 24 hours,"
      "same-day service," "24-hour emergency response," "guaranteed turnaround," and an
      `openingHoursSpecification` of Mon–Fri 8–5 are all the same defect wearing different clothes.
      (Agreement §8; §3 non-prose surface rule; pair 17)
    - **14b — Reply. Must be present.** Where the surface leaves someone waiting to hear back, does
      it say when he will answer, in his own hours, with the honest failure case attached? A reply
      commitment is not a response window: answering a text is something he can do from a phone on
      a Saturday, and clearing your window wells is not. **The reference wording is live on
      `02-website/site/thanks.html`** — *"I'll answer the same day or the next morning. If it's
      after Thursday, it might be Monday, and I'd rather tell you that than say 'within 24
      hours.'"* Write every other reply commitment against that one. A CTA that leaves someone
      waiting and says nothing about when he answers is a defect here; a CTA that answers it with
      an SLA is a worse defect under 14a. (§1 CTA rules; pair 17)

15. Does it avoid any claim about pool water, chemistry, clarity, or equipment performance? See
    also item 41, which requires the disclaimer to be *present*, not merely the claim to be absent.
16. Does it avoid implying lawn or landscape service of any kind?
17. Are the exclusions present on any surface that states a price, and positioned *before* or
    *with* the price rather than after it?

**Internal numbers**

18. **Time on site: one form is required, the other is banned. Split 2026-08-05, because
    `CANON.md` §3 narrowed the old blanket ban rather than lifting it.**

    - **18a — The scope boundary. Allowed, and often required.** *"Up to two hours of on-site
      service per visit"* is a contractual limit on what is purchased and it comes from his own
      agreement. Where the copy states it, does it travel with **both** clauses — highest-priority
      items first, and *completion of every possible task during every visit is not guaranteed* —
      and with the no-rollover clause? A cap published without its clauses reads as a promise of
      two hours' work, which is the failure in pair 19. The checklist's eight time blocks are the
      same kind of number and are equally legitimate — **internally.** They are not a customer
      document.
    - **18b — The performance target. Still banned.** Is there no "average visit length," no
      minutes-per-visit tracked or published as a measure of his work, and no copy implying he aims
      to finish quickly, works efficiently, or is "in and out"? That is what conflicts with *never
      rush a property*, and that standard is unchanged. One is a ceiling on the customer's
      entitlement; the other is a stopwatch on his work. Also still banned everywhere: route hours,
      revenue per route day, project attach rate, retention, effective hourly rate, and any figure
      from `unit-economics.md`.

19. **The internal quoting anchors.** Two checks, and the second is the one that gets missed.

    - **19a — Not as a list.** Are the internal anchors absent *as a published price list*? (A
      specific number on a specific estimate for a specific job — "driveway and back patio, $449" —
      is exactly what the anchors are for and is correct. A page listing "pressure washing from
      $249" is not.)
    - **19b — Not as a range, and not before the look.** Is every project number a single figure,
      on a specific job, after he has stood on the property? A **range** is the internal table read
      aloud with the labels removed — "$249–$449," "$249 to $449," "somewhere in the $300s," "high
      threes" — and is a defect **wherever it appears**, including in a service summary, a text, or
      a call script, not only on a web page. So is any number offered *before* the on-site look,
      and any hedge that softens a flat price into a soft quote ("likely," "probably," "typically
      runs," "in the ballpark of"). The correct move before he has looked is to commit to the
      number's *arrival*, not its *size*: "I'll walk it and send you a flat number tomorrow
      morning." Exempt: the two published starting prices, **$249+** and **$49+**; and the sourced
      market rate for **full pool service with chemistry**, $121–142 a month, which is a referral
      fact about a product he does not sell, not a quote. (§3, the anchor-leak rule)

**Seasons**

20. **RETIRED 2026-08-05.** *Was: "does it say the price is the same all twelve months?"* There is
    no twelve-month price. That sentence is now a **banned claim**. **Use item 37.** Never reused.
21. **RETIRED 2026-08-05.** *Was: "does it name specific Dormant Season work?"* There is no Dormant
    Season and no November–February scheduled work. **Use item 38.** Never reused.
22. **RETIRED 2026-08-05.** *Was: "is there no winter discount, pause, or seasonal rate?"* There is
    no winter billing to discount. The surviving risk is different — inventing off-season revenue.
    **Use items 39 and 40.** Never reused.

**Mechanics**

23. Zero exclamation marks, zero emoji, zero check glyphs?
24. Headlines and buttons in sentence case, with ALL CAPS only on the status stamps and the record
    stamp?
25. Every banned phrase in §6 absent — read §6.1 through §6.7 as a find-and-check pass?
26. One em dash per paragraph at most? "Twice a month," never "bi-monthly"? A route day, never an
    arrival time?
27. Street names only — no full client address, no identifying house photo?

**The ask**

28. Exactly one ask on the surface, naming the next step and how long it takes — and is it
    something other than "learn more"?
29. If the book is full, is the only ask the waitlist plus the project offer, with the mechanism
    explained? (Pair 7) If the site is in Off Season, is the only ask the waitlist or the
    walkthrough, plus the March 1 date? (Pair 18)

**Non-prose surfaces**

*Numbered 31–34 because numbering is stable and never renumbered — item 30 is still the last test
and is meant to be run last. Do not stop the audit when the prose passes; two of the last four
defects found in this project were here.*

31. **Structured data.** Does every value in the JSON-LD assert only what the prose already asserts
    and `CANON.md` already supports — no hours implying a staffed week, no service area beyond
    Green Township / Oak Hills / Delhi / Covedale, no `aggregateRating`, no `review`, no
    `employee`, no price other than **$279** (and never expressed per hour or per visit), and no
    `openingHours` covering November–February? Where there is no honest value, is the field
    **omitted** rather than filled?
32. **Rendered case.** Do the status stamps — MEMBERSHIP FULL, IN SEASON, OFF SEASON, the summary
    header — actually render in caps, with `text-transform` present wherever the stylesheet is
    carrying that rule, and is no lowercase text letterspaced? (§7 item 2;
    `visual-direction.md` §3.4)
33. **Alt text and labels.** Does every `alt` string name a specific object and locate it (rules 2
    and 3) rather than describing a category — "the two window wells on the south side, cleared,"
    not "property maintenance work"? Do button text, `aria-label`s, form placeholders, and error
    messages pass §6 and the person rules, with no "we" and no bare "WPC"?
34. **Titles, meta, and social.** Do `<title>`, meta description, and Open Graph values pass §6 in
    full — no banned phrases, no invented credentials, no urgency, sentence case, full name on
    first reference — given that these are frequently the first WPC513 copy anyone reads?

**Appended 2026-08-05 — the re-baseline block**

35. **One price, and only one.** Is **$279** the only membership number on the surface? Are
    **$229, $249** *(outside the published grill deep-clean price)*, **$269, $289,** and **$329**
    absent entirely — from prose, tables, JSON-LD, `og:` values, image filenames, and CSS content
    strings? (§3, the one-price rule)
36. **No tiers and no division.** Is the price presented as one flat number, with no "plans,"
    "tiers," "packages," "levels," "options," "add-ons," "modules," "starting at," or "from"? And
    is $279 **never divided** by hours, visits, weeks, or days, and never multiplied into a
    value-comparison table? (§3, the one-price and hours-arithmetic rules)
37. **The season, stated.** If the copy touches timing at all, does it state **March 1 – October
    31** and **sixteen visits**? Does it avoid "year-round," "all year," "twelve months," and any
    construction implying scheduled service outside those eight months?
38. **The off season, stated honestly.** If the copy touches November–February, does it say plainly
    that there are **no scheduled visits** and **no billing**, and that the next season opens
    **March 1**? Is any separate winter offering clearly marked as a different product, optional,
    and outside this agreement — never "included," never "year-round protection"? (`CANON.md` §3)
39. **The cap's clauses.** Wherever "two hours" appears, do both clauses appear with it —
    highest-priority items first, and *completion of every possible task during every visit is not
    guaranteed* — plus **unused service time does not roll over**? (18a; pair 19)
40. **No invented off-season revenue.** Is there no proposal for an off-season retainer, a winter
    membership, a rolled-over service credit, a prepay discount, an annual rate, a referral credit,
    or a "last slot" price? The founding concession is a **pro-rated 2026 remainder plus a locked
    2027 rate** — a term, not a discount — and it is never framed as a promotion.
41. **The pool disclaimer travels.** Wherever pool work is described — prose, alt text, a service
    list, a summary template, an image caption — does the disclaimer appear **in the same block**:
    *no guarantee of water chemistry, water clarity, equipment performance, or pool-system
    operation*? Is every phrase in the new §6.4 pool rows absent? And is the $121–142 market rate,
    where used, attributed to **full pool service with chemistry** and never positioned as a
    comparison he wins? (Agreement §3; `CANON.md` §5; pair 5)
42. **Name and roots.** Is the full name **Westside Property Care 513** on first reference, is
    **WPC513** used thereafter, and is bare **WPC** absent from prose, headings, alt text, slugs,
    filenames, and structured data? Is the tagline verbatim or absent? If military service is
    mentioned, is it exactly "military roots," with no rank, branch, unit, span, insignia, or
    veteran-owned badge? (`brand-brief.md` §1.2, §4.2)

**The last one, and it is the real test**

30. Could a competitor with two hundred accounts and a call center publish this copy word for word?
    If yes, it is not Westside Property Care 513's copy. Rewrite it with §2 rules 2 and 3 until
    they could not.

---

## Related files

- `brand-brief.md` — what may be claimed, and the name usage rules this file enforces
- `messaging.md` — what to say, in what order; every line in it passes §8
- `visual-direction.md` — the typographic treatment of the stamps referenced in §7, and §3.4,
  which the rendered-case rule in §7 item 2 and checklist item 32 enforce
- `CANON.md` §3, §4, §5, §8 — the re-baselined numbers, the season, the pool comparison, and the
  guardrails this file extends
- `_source/2026-08-05-owner-decisions.md` — §2 the agreement (every scope and boundary quoted
  above), §3 the checklist (the register in rule 2), §4 the Trust/About note behind the military-
  roots rules
- `02-website/site/thanks.html` — the shipped reference wording for a reply commitment (item 14b,
  pair 17). Not owned here; cited as the model
- ⚠ `00-model/pricing.md`, `00-model/service-catalog.md` — **stale.** Do not quote a price or a
  season from either until `wpc-strategist` re-baselines them.
