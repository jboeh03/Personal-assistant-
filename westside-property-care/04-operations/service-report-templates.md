# Service Report Templates

**Owner:** `wpc-ops` · **Status:** the single most important document in this business

This is the only proof a member gets that $279 a month was worth it. It goes out **the same
day** as the visit — membership standard 5 (`operating-model.md` §8, rule 5). A finding that
isn't written down didn't happen: it can't be quoted, it can't be followed up, and by the
third visit neither party remembers it.

**Every report below ends one of two ways, and never any other way:**

- A specific recommendation — named, located, priced, with the out ("say the word," "if
  you'd rather leave it, that's fine")
- An explicit **"nothing needs attention right now"** plus a note of what was checked, so
  the visit still reads as an inspection and not as silence

**On the header stamp.** `01-brand/voice.md` Pair 12 sets the record stamp — no glyph, no
exclamation, no checkmark — and adds the visit count, which is the single highest-value
addition to this format: **`VISIT 07 OF 16`** makes the season legible on every report and
quietly does the work the old "same price in January as in July" argument used to do
(`01-brand/messaging.md` §1).

**Voice rules that apply to every template below** (full checklist: `voice.md` §8):

- First person singular. "I skimmed the pool." Never "we," never "our team."
- Name the object, the count, the location. "Both baskets," not "pool care."
- Every finding carries a price, a "from" price, or an honest "I'd have to look at it."
- No exclamation marks, no emoji, no ✓, anywhere.
- Prices verbatim from `00-model/pricing.md`. Never rounded.
- Fill-in tokens: `{{owner}}` his first name, `{{phone}}` the business number,
  `{{address_short}}` street name only, `{{route_day}}` the assigned route day,
  `{{visit_number}}` this visit's number out of 16. Replace every token before sending. Never
  ship a token.

---

## The header, every report

```
WPC513 · SERVICE REPORT · {{address_short}} · VISIT {{visit_number}} OF 16 · [DAY, MONTH DATE]
```

---

## Template 1 — Routine visit

**When to use:** A normal in-season (March–October) visit. Nothing urgent, but something
worth naming — this is the common case and the mechanism that pays for the business.

> **WPC513 · SERVICE REPORT · {{address_short}} · VISIT 07 OF 16 · MONDAY, JUNE 8**
>
> Pool skimmed, both baskets emptied, steps brushed, vacuumed about twenty minutes. Wiped the
> six patio chairs and the table. Emptied the grease tray on the flat-top and wiped the
> counters. Blew the patio, the pool deck, and the walk. Pots watered — the fern on the north
> side dries out faster than the others, so I moved it two feet under the eave.
>
> The two window wells on the south side are filling up — mostly last spring's helicopter
> seeds, about four inches deep. Nothing urgent, but I can clear both on the next visit for
> $49. Say the word and I'll add it. If you'd rather leave them, that's fine and I'll stop
> mentioning it.
>
> Next visit: {{route_day}}, [date].
>
> {{owner}} · {{phone}} · WPC513

**Why this is the template, not the exception.** The finding is small, specific, and already
priced from `00-model/pricing.md` §5.1 ($49+ window well) — it costs nothing to mention
because he's already on the property. This is the pattern from `voice.md` Pair 2 and it is
the mechanism `operating-model.md` §7.2 measures as project attach rate.

---

## Template 2 — Something found (project recommendation)

**When to use:** A visit surfaces something bigger than a same-visit add-on — the kind of
finding that becomes a scheduled project, quoted separately, not done on the spot. Pair with
`estimate-templates.md` for the follow-up estimate.

> **WPC513 · SERVICE REPORT · {{address_short}} · VISIT 12 OF 16 · MONDAY, SEPTEMBER 14**
>
> Pool skimmed, both baskets emptied, backwashed since the pressure was up. Blew the patio,
> the pool deck, and the walk. Wiped down the counters and emptied the grease tray.
>
> The back patio and the walkway out to the pool gate have gotten dark with algae and
> mildew — it's been building for a couple of seasons and this visit isn't enough to touch
> it. I'd want to pressure wash both properly rather than try to spot-clean it on a routine
> stop. I'll measure it this week and send you a flat number by tomorrow morning. No
> obligation, and it doesn't affect your visits either way if you'd rather pass.
>
> Next visit: {{route_day}}, [date].
>
> {{owner}} · {{phone}} · WPC513

**Why there's no number in the report itself.** `pricing.md` §7, rule 1: never quote a flat
number from memory in the driveway — walk it, measure it, send the number the same day or the
next morning. The internal anchors in `pricing.md` §5.3 exist so he isn't starting from
scratch once he's measured; they are not something to read aloud or narrow into a range
before he's looked. The report names the finding and promises a flat number by a stated time;
the estimate (see `estimate-templates.md`) is what actually carries the price.

---

## Template 3 — Nothing found

**When to use:** Rare — `operating-model.md` §7.2 expects a finding on almost every visit.
When a property genuinely needs nothing, say so plainly, and say what was checked so the
visit still reads as an inspection rather than a drive-by.

> **WPC513 · SERVICE REPORT · {{address_short}} · VISIT 04 OF 16 · FRIDAY, JULY 25**
>
> Pool skimmed, both baskets emptied. Wiped the furniture and the outdoor kitchen counters,
> emptied the grease tray. Blew the patio and the pool deck. Pots watered.
>
> Nothing needs attention right now. I checked the hose bibs, the downspout discharge on
> both back corners, and the gate latch on the pool side. The latch is still catching — it
> seats if you lift it, but it'll want an adjustment before the season's out. Not urgent.
>
> Next visit: {{route_day}}, [date].
>
> {{owner}} · {{phone}} · WPC513

**Why this still counts as a full report.** `voice.md` Pair 3 — "nothing found" is itself a
finding, as long as it names what was actually checked. A bare "everything looks great" is
not a substitute; it's a receipt, and the whole business model runs on the difference
(`CANON.md` §2).

---

## Template 4 — Weather-rescheduled

**When to use:** Sent *before* the scheduled visit, not after — as soon as it's clear the
route day won't happen as planned. This is a schedule notice, not a service report; no work
has been performed yet, so there is nothing to report on the property itself.

> **WPC513 · {{address_short}} · MONDAY, OCTOBER 20**
>
> It's supposed to rain hard through Monday, and blowing the patio in that would just move
> mud around. I'm moving you to Friday the 24th — same visit, same month, nothing changes on
> the billing.
>
> {{owner}} · {{phone}} · WPC513

**Why this one is short.** `voice.md` Pair 14 — say what the weather actually prevents, give
the new date, and confirm nothing changes on billing. `service-agreement.md` §11: a
rescheduled visit stays inside the same calendar month where possible, so say so. Once the
moved visit happens, send the appropriate routine template (1 or 3) for that visit — this
template is only the notice.

---

## Template 5 — Last visit of the season

**When to use:** The final scheduled visit of the year, late October — visit sixteen. This is
the highest-leverage document in the business: it's the last thing a member reads before four
months of silence, and it decides whether they come back on March 1
(`operating-model.md` §3.2, §7.3). Never send it as a routine template with a season sign-off
tacked on — it does three jobs a routine report doesn't: names what's being left for winter,
states the gap plainly, and routes anything urgent to project work rather than implying it's
covered.

> **WPC513 · SERVICE REPORT · {{address_short}} · VISIT 16 OF 16 · FRIDAY, OCTOBER 30**
>
> That's visit sixteen — the last scheduled one until March.
>
> Today: furniture wiped down and the cushions stacked in the shed, covers on the grill and
> both chaises. Skimmed and both baskets emptied, and I backwashed since the pressure was up.
> Blew the patio and the pool deck clear of the maple leaves, which are most of the way down
> now.
>
> Two things I'd want you to know before it gets cold. The hose bib on the north side is
> dripping at the packing nut — it isn't leaking much now, but it's the one that would split
> in a hard freeze, and that's a plumber, not me. And the pool cover has a tear about a foot
> long along the south edge; you'll see it when it goes on.
>
> Your next scheduled visit is the first route day in March. I'm not billing you November
> through February. If you want anything handled before then — the cover, a grill deep clean
> before the holidays, pressure washing while the deck is empty — that's project work and I
> do it year round. Just say so.
>
> {{owner}} · {{phone}} · WPC513

**Why there's no "next visit" line.** Every other template ends with `Next visit:
{{route_day}}, [date]` because the next visit is two weeks away. This one can't say that —
the honest next date is four months out, so the report says so plainly instead of papering
over it with the usual line. `voice.md` Pair 11 and `CANON.md` §4: the gap is a fact stated
first, not a problem being managed.

---

## The recommendation pattern, stated once

Every "something found" moment in a report — small or large — follows the same four moves,
in order, per `voice.md` §2:

1. **Name it.** The object, not the category. "The two window wells," not "some drainage
   issues."
2. **Locate it.** "On the south side," not just "the window wells."
3. **Price it.** A real number from `pricing.md`, a "from" number, or an honest "I'd have to
   look at it and send you a number."
4. **Offer the out.** "Say the word and I'll add it," or "if you'd rather leave it, that's
   fine." Never pressure. The recommendation is the sale; the pressure would undo it.

This is the mechanism `CANON.md` §2 describes as the entire business model: the membership
puts him on the property sixteen times a season, and every one of those visits is an
inspection that can surface the next $49, $249, or $449 job. A report that skips this pattern
is a receipt. A report that follows it is why the membership pays for itself and the project
work is the actual income.

## Related files

- `visit-sop.md` — the visit each report documents
- `property-record-template.md` — where every finding and every sent report gets logged
- `estimate-templates.md` — the follow-up document once a recommendation turns into a quote
- `01-brand/voice.md` §2, §4 (Pairs 1–3, 11, 12, 14) — the source patterns every template
  above is built from
- `01-brand/messaging.md` §1 — the sixteenth-visit argument the last-visit-of-season template
  closes with
- `00-model/operating-model.md` §7.2, §8 — why the report exists and what it's measured
  against
