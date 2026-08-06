# Site Spec

**Owner:** `wpc-web` · **Status:** source of truth for the site's architecture
**Reads from:** `CANON.md`, `00-model/`, `01-brand/` · **Never contradicts them**
**Design brief:** `01-brand/visual-direction.md` — FIELD LEDGER. Followed, not reinterpreted.

> **Re-baselined 2026-08-05, against the owner's shipped documents.** Six locked facts changed
> and every one of them landed on this site: **one price ($279)**, **an eight-month season
> (March 1 – October 31, sixteen visits)**, **the two-hour visit cap**, **the name**, **a
> materially heavier pool scope**, and **a real logo in navy and orange**.
>
> Three things did *not* get torn down and rebuilt, which is the whole reason this was a day
> and not a week:
>
> - **The season mechanic was repurposed, not removed.** The two states stop being Green /
>   Dormant *scopes at one year-round price* and become **IN SEASON** and **OFF SEASON**.
>   `season.js`, the checkbox, the strip markup and the token structure are unchanged; the
>   dates, the labels and the off-season copy are new.
> - **The Field Ledger structure survived the palette swap intact.** The rail and measure, the
>   bleed track, the hairline system, the five uneven gaps, near-zero radius, the two-shadow
>   rule — none of it is colour-dependent. Only the ink changed.
> - **The accessibility work from the previous pass survived and was re-verified**, not
>   assumed. §11.4 records what was re-checked and what broke.
>
> **Two things were rebuilt from scratch.** The four-row configuration ledger is deleted along
> with the four prices in it, replaced by the single-figure set-piece (§5). And **the entire
> contrast audit in §11.4 was recomputed from zero** against the new palette — the old ~90-line
> matrix is void and none of its numbers were carried forward.

> 🔁 **Amended 2026-08-05 after `wpc-brand`'s `--mark` ruling.** This build flagged a 2px finding
> rule defended against a ground it never renders on. The ruling declined the one-line fix,
> because **the same defect existed a second time, in the focus indicator, and neither agent had
> found it** — the same mark pinned to the same literal `--ember`, putting a ring at 2.89:1 on
> `--paper-deep` and 2.29:1 on the off-season slate.
>
> **The answer is a token, not a hex: `--mark`, declared per surface in the same block that sets
> that surface's background.** The finding rule and the focus indicator both take `var(--mark)`
> and nothing else. Implemented, and the ground-based re-sweep it mandates turned up **three more
> defects nobody had flagged** — the skip link's ring, the season switch's hover, and the
> `--wash` fill that becomes `--paper-deep` for four months of the year. All fixed. §11.4.
>
> **This file also retires two of its own claims.** *"Nothing focusable sits on `--paper-deep`"*
> was true and was never an invariant, and *"`--ember-lift` on `--navy` at 4.88 is the tightest
> text pass on the site"* was wrong: the 11px pool rail tag at **4.62** is, and it passes by
> **0.12**. No markup changed; the whole ruling landed in three stylesheets.

> 🔁 **Amended 2026-08-06 after a voice audit, and the pattern is worth naming because it repeats.**
> The prose came back strong. **Every defect worth fixing was in the non-prose layer** — the
> surfaces `voice.md` §3 predicts a rework leaks into, and the ones nobody wrote *as* copy so
> nobody audited *as* copy.
>
> - **A `class` attribute published a production note.** `.plate__cap` carried `class="rail"`,
>   which inherits `text-transform: uppercase`, so seven pages rendered his shot list to visitors
>   in tracked caps: `PHOTO REQUIRED · FRAME 3 · … DON'T CLEAN IT BEFORE SHOOTING IT.` §7.
> - **A rail label argued against its own section.** `PER HOUR` sat on the handyman rebuttal,
>   naming the unit and presenting $279 as a rate before a word of the answer was read. The body
>   was already correct; the marginalia a scanner reads first was not.
> - **A drawing made a claim the caption did not.** Ten `--ink` ticks — *"visits already
>   delivered"* — on four public pages, for a business with zero members. §6.
> - **A copy-paste leak offered terms on a slot that does not exist**, on the page whose `h1` says
>   every slot is taken. §3.3.
> - **A note in `copy-deck.md` asserted a rule that does not exist and misattributed it**, and was
>   fixed first, because a wrong rule in the document other agents read is the only defect on the
>   list that keeps producing new ones.
>
> Three findings are wider than the audit called them, and each is written up where it lands: the
> apostrophe problem in `.rail` is one instance of a **mono subset smaller than the site**
> (`site/fonts/README.md`); the season-strip caption's count of past dates was **banned scarcity in
> prose while the ticks were the same thing in pixels**; and *"not X, just Y"* had reached
> eighteen instances, of which fourteen were cut. **No accessibility affordance and no part of the
> `--mark` structure was touched.** Bytes re-measured in full, §11.2.
>
> **Open item 7 is closed** by `wpc-strategist`'s D-27: the Founding Member lock is **date-bounded,
> not count-bounded** — signed on or before **February 28, 2027**, held through **October 31,
> 2027**, **no cap on how many**. §15.7.

> 🔁 **Amended 2026-08-06 after `wpc-brand`'s mono ruling, which is the second time an escalation
> came back as a structural fix rather than a patch.** The audit above found three components set
> in Plex Mono rendering in full lowercase, which no version of the subset has ever contained.
> This build narrowed the declared `unicode-range` to the glyphs the file will actually hold,
> blocked the font install, and escalated instead of moving them, because changing three
> components' typeface across ten pages is a visible change and Playwright cannot launch.
>
> **The ruling declined the cheap fix.** Growing the subset by a lowercase alphabet costs 3–4 KB
> and would have worked — and it was refused because **the subset is a guardrail, not a download
> size.** The reason nobody had set a paragraph in mono is that they physically could not. Option
> 3 would have fixed three components and left the mechanism that produced them intact.
>
> **`.foot__line`, `.foot__prices` and `.cta__aside` are now IBM Plex Sans** (§11.5). The third
> one is not a two-line family swap: mono was the only thing separating the site's central claim
> from the fine print beneath it, so that differentiation **moves from face to scale** — which is
> where §12 quality #1 already claimed this system carries hierarchy. Face was a fourth mechanism,
> smuggled in, and removing it makes that claim true where it had been slightly false.
>
> **This build could not have found the ruling's own blind spot, and it is worth naming.** The
> record stamp contains `{{address_short}}`. `O'BRIEN CT` and `ST. MARY'S LN` are ordinary
> west-side addresses and both carry an apostrophe the subset does not hold — **an audit of the
> shipped files sees the token and passes.** Template slots inside a mono surface are constrained
> exactly like the literal text around them. §10.1.
>
> All three invariants now verify by grep and pass. `site/fonts/README.md` is regenerated and
> **the font install is unblocked.** No markup changed and no token changed; the whole ruling
> landed in three CSS rules. Bytes re-measured in full, §11.2.

---

## 1. What this site is for, and what it must not become

`CANON.md` §6: **the site is not a lead-generation engine. It is what closes someone who
already heard his name** — from a neighbour, a yard sign, a grill-cleaning job, or a Google
listing.

His own standard governs the top of every page:

> **A homeowner understands in 10 seconds: what you do → who it's for → price → how to contact
> you.**

That is a testable claim about the masthead, and §2 states how each page passes it.

Three consequences that govern every decision below:

1. **The architecture is a close, not a funnel.** One path through the site, ending in the same
   place from every page. No lead magnets, no gated content, no newsletter.
2. **SEO does not shape the information architecture.** No service-area page farm, no
   `/pool-cleaning-green-township` doorway pages. See `seo.md` §1.
3. **Scope and price are unambiguous and both are published.** Anything a competitor hides
   behind "contact us for a quote" is on the page, and the exclusions sit **above** the rendered
   price on every surface that carries one (`01-brand/messaging.md` §3).

### The ten-second test, per surface

| Element | Where it is | On which pages |
|---|---|---|
| **What you do** | The `h1` and the first lede | All ten |
| **Who it's for** | "six homes on the west side," and the geography line in the footer | All ten |
| **Price** | `$279 a month` — in the masthead lede on home, in the `h1` on pricing | Home, Pricing, 404 |
| **How to contact you** | The `sms:` link beside every button, and the footer contact column | All ten |

### The one ask, per state

| State | The single ask | Where it lives |
|---|---|---|
| **Open** (1–6 slots free) | Text me your cross street → walk the property with me, about forty minutes | `apply.html` |
| **MEMBERSHIP FULL** (0 free) | Add your name to the waitlist, plus the project offer | `waitlist.html` |
| **OFF SEASON** (Nov 1 – end Feb) | The same ask, plus the March 1 date, stated as a fact and never as a deadline | `apply.html` / `waitlist.html` |

`01-brand/voice.md` §1 allows exactly one ask per surface. Every page ends in the same one.

---

## 2. Page inventory

Ten files. Six in the navigation. That is the whole site.

| # | File | In nav | Purpose | Single conversion goal |
|---|---|---|---|---|
| 1 | `index.html` | Home | Close the person who already heard his name, in one scroll | Reach `apply.html`, or text the cross street |
| 2 | `whats-included.html` | What's included | Make the scope, the pool boundary and the season unambiguous | Keep reading to `pricing.html` |
| 3 | `pricing.html` | Pricing | Make the one price unambiguous and unnegotiable, exclusions above the figure | Reach `apply.html` |
| 4 | `projects.html` | Projects | The second half of the business, and a real yes for a non-qualifying prospect | Text him about a project — no membership required |
| 5 | `about.html` | About | Answer "you're brand new, why should I trust you," and explain the cap as a mechanism | Reach `apply.html` |
| 6 | `apply.html` | Apply | Take the inquiry with the two qualifying questions attached | Form submitted, or a text sent |
| 7 | `waitlist.html` | — (contextual) | The waitlist, which exists in **both** enrolment states | Waitlist form submitted |
| 8 | `membership-full.html` | — (state swap) | `index.html` in the MEMBERSHIP FULL state — a drop-in replacement home page | Reach `waitlist.html` |
| 9 | `thanks.html` | — | Success state for both forms | Nothing. It ends. |
| 10 | `404.html` | — | Wrong address. Points at the price and the phone number | Reach a real page |

### Why this shape and not another

- **Home is long and does the whole job on its own.** Someone arriving from a yard sign should
  be able to close without a second click: what it is, the sixteenth-visit argument, what
  happens on a visit, the summary, the season, what is excluded, the price, the geography, the
  ask.
- **"What's included" is one page, not two.** Under the old year-round model this page had to
  hold two scopes side by side so a reader could not conclude they were being charged twice for
  one. **There is now one scope**, so the page holds the eight parts of a visit, the pool block
  in full, the season, and the exclusions — in that order, which is `messaging.md` §3's order.
- **Projects is a page, not a footnote.** `CANON.md` §2 — the membership is the lead engine and
  project revenue is the actual income. It matters *more* now: an eight-month membership year
  makes project work the larger share. A prospect who fails the route test or the budget test is
  still a profitable project customer.
- **The waitlist is permanent, not a full-state artifact.** A qualified prospect who does not
  fit a route cluster goes on the waitlist *even when slots are open*. Building it as something
  that only appears when the book is full would misrepresent the model.
- **No blog, no gallery, no FAQ page, no testimonials page.** A gallery cannot exist until real
  photographs do. A testimonials page cannot exist at all. FAQ content is distributed to the
  section it belongs to, because an FAQ page is where objections go to be ignored.

---

## 3. The two enrolment states, and the two seasonal states

There are **two independent switches**, and confusing them is the fastest way to break this
site. One is about the book. The other is about the calendar.

| | Controls | Driven by | Where it lives |
|---|---|---|---|
| **Enrolment** | Open ↔ MEMBERSHIP FULL | A human editing three files | `index.html`, `apply.html`, `waitlist.html` |
| **Season** | IN SEASON ↔ OFF SEASON | The date, with a manual toggle | Every page, one checkbox |

### 3.1 Where the slot number lives

The open-slot count appears in **three files only**: `index.html`, `apply.html`, and
`waitlist.html`. It is deliberately *not* in the sticky status strip, because that strip is on
every page and would make the count a ten-file edit every time a slot changes.

In each of the three it sits inside one block marked:

```html
<!-- ══ ENROLMENT STATE — the only block to edit when a slot opens or fills ══ -->
```

The shipped default is **6 of 6 spots open**, which is the true number today: the business has
not launched. Launch target is 4 members, hard cap 6.

### 3.2 Switching to MEMBERSHIP FULL

`membership-full.html` is `index.html` written in the full state — same layout, same sections,
different masthead stamp, different ask, plus one added entry explaining the cap. It is a
complete page, not a fragment, so the swap is a file copy and not an edit:

```sh
cp index.html            membership-open.html   # keep the open state
cp membership-full.html  index.html             # go full
```

To reopen, copy `membership-open.html` back over `index.html` and correct the count.
`membership-full.html` carries `<meta name="robots" content="noindex">` while it is the staging
copy; the note to remove it is in `seo.md` §6.

### 3.3 What changes between enrolment states

| Element | Open | Full |
|---|---|---|
| Masthead figure | `6 OF 6 SPOTS OPEN` in `--ember` | `MEMBERSHIP FULL`, `--paper` reversed out of `--ember-deep` in a hairline-boxed stamp |
| Home ask | Text me your cross street → walkthrough | Add your name to the waitlist |
| Added section | — | "Why it stops at six" — twelve visits, Monday and Friday only, route proximity |
| Nav | Apply | Apply is swapped for Waitlist |
| Founding-terms paragraph | Shown | Replaced by "the price doesn't move because the book is full." **The lock has not expired in this state** — it is date-bounded (§15.7) — but there is no slot to quote terms on, and the season-strip caption drops its second half for the same reason |
| The price | Unchanged | Unchanged — $279 either way |

### 3.4 What changes between seasonal states

Only the three `--season-*` / `--wash` custom properties and four blocks of copy. **Layout,
type, spacing, hairlines, the masthead navy and the mark do not move.** The page changes
temperature, not shape.

| Element | IN SEASON | OFF SEASON |
|---|---|---|
| `--season-ground` | `#0E2E52` navy | `#3A4E60` drained slate |
| `--season-support` | `#1A6E6B` pool teal | `#1F6580` colder ice-blue, used only on the March 1 date |
| `--wash` (row hover) | `#E4E8EE` cool | aliased to `--paper-deep`, warm |
| Status stamp | `IN SEASON · MAR 1 – OCT 31` | `OFF SEASON · NOV 1 – END OF FEB` — **not `FEB 28`**, which is wrong in every leap year. `CANON.md` §3 and `visual-direction.md` §2.3 both say "end of February" |
| Season strip | 16 `--rule`, the current calendar position an `--ember` square. **No `--ink` ticks on a public page** — see §6 | every tick `--rule`, the ember square on the first March tick, preceded by `NEXT SEASON OPENS MARCH 1` |
| Season-strip caption | pro-rated remainder + the dated 2027 lock. **Not on `membership-full.html`**, which stops after "the filled square is where the 2026 season sits now" | "nothing scheduled, nobody billed, next season opens March 1" |
| `.pool` teal | live | reverts to `--ink` — there is no pool work off season |
| Season divider | full-length ticks | half-length, every second one dropped |

**The switch is a real `<input type="checkbox">` with a real `<label>`.** It works with
JavaScript disabled. `js/season.js` only sets its opening position from `Date().getMonth()` —
months 2–9 inclusive are in season, everything else is off — and remembers a manual choice for
the session. Nothing else on the site depends on that file.

---

## 4. Global components

Sixteen components. There is no card among them, by direction
(`01-brand/visual-direction.md` §4.3, §12.4).

| Component | Where | Notes |
|---|---|---|
| **Status strip** | Every page, sticky ≥768px | **`--navy` in both seasons** — it carries the mark, and the mark does not change with the calendar. One of exactly two elements permitted a shadow, because it overlaps the content beneath it. |
| **Logo lockup** | Strip and footer | Inline SVG house-and-tree line mark + `WPC 513` in `--ember-lift` + the hairline + the name in small caps. 40px minimum. §8. |
| **Season switch** | Status strip | Real checkbox + label, `body:has()` for the CSS. `js/season.js` sets its opening position only. |
| **Primary nav** | Every page, under the strip | `<nav aria-label="Main">`, six links, `aria-current="page"`. Wraps on small screens; no hamburger, no JS. |
| **Masthead** | Home, `membership-full` | Display headline breaking one column *left* of the measure, lede, the figure line, the ask, the season strip, and the bleed-track plate. Replaces the banned centred hero. |
| **Page head** | All inner pages | Rail stamp + `h1` + lede, and on three of them the season strip. Smaller than the masthead; no figure. |
| **Ledger entry** | Everywhere | Rail label (mono, uppercase) + measure block + `1px --rule` hairline beneath. No box, no fill at rest, no radius, no shadow. This is what replaces cards. |
| **Rail label** | Every entry | `<p class="rail">`. Below 1024px it sits *on* the rule above the entry; ≥1024px it moves into the left rail. Pure CSS, one markup order. |
| **Figure line** | 3 files | `--type-figure` mono, tabular numerals. Three numbers only: the slot count, the price, the visit number. |
| **The season strip** | Home, `membership-full`, What's included, Pricing | Sixteen ticks. §6. |
| **The single figure** | Home, `membership-full`, Pricing | The price, once per page, as one ruled line. §5. |
| **Project price ledger** | Projects, Waitlist | `<dl>` of two rows — the two published *project* starting prices. **Not a membership price list.** |
| **Summary facsimile** | Home, `membership-full` | Inset on `--paper-deep`, hairlines top and bottom, 0.9× body size, a 2px `var(--mark)` margin rule on the finding (`--ember-deep` on this ground, 4.74:1) with its price in the rail in the same value, the pool disclaimer inside the same block. Set-piece 3. |
| **Exclusion list** | Home, What's included, Pricing, About | `<ul>` with a hanging mono label and a rule. Never a features list; no ✓/✗ glyphs anywhere. |
| **Plate** | 7 image slots | The empty ruled band that stands in for a photograph. §7. |
| **Season divider** | Once per page, in the bleed track | Inline SVG survey-tick line. Ticks halve and every second one is dropped off season, so the ornament gets sparser when the business is closed. |
| **Form** | Apply, Waitlist | Native validation, honeypot, visible `Required` on both required fields, a written-in error sentence per field. Works with JS off; `js/forms.js` adds `aria-invalid` and nothing else. §9. |
| **Footer** | Every page | The **only reversed content panel**, on `--season-ground`. Carries the sixteenth-visit short form, the contact block, the two published project prices, and the honest disclosure. |

---

## 5. The single figure — what replaced the price ledger

🔁 **The four-row configuration ledger is deleted.** It existed because four prices existed and
a fifth might appear. **There is one price.** A three-row ledger with one row in it is a defect,
not a design (`visual-direction.md` §4.5).

### What it must not be

Not four boxes. Not a comparison table. Not a toggle, a calculator, or a "build your plan"
widget. **Not a `<dl>`, not a `<table>`, and not a `<th>`** — nothing on the page would still
make grammatical sense if a second price were added, and that is the test. No sentence anywhere
says how many prices there are, because there is nothing to count.

### What it is

One ruled line.

```
ONE PRICE
──────────────────────────────────────────────────────────────
$279  / MONTH
──────────────────────────────────────────────────────────────
Two scheduled visits a month, March 1 through October 31 — sixteen visits a season
Up to two hours of on-site service each visit
Highest-priority maintenance items first, using my judgement
Completion of every possible task during every visit is not guaranteed
Unused service time does not roll over
```

- `$279` in `--type-figure` mono, `--ember`, hard against the left edge of the measure.
- `/ MONTH` in `--type-stamp` on the baseline beside it. Nothing is right-aligned, because
  there is nothing to align against.
- A mono rail label reading `ONE PRICE`, and a 1px `--ink` rule above the figure.
- Directly beneath, in one ruled block at `--type-small`, **all five boundary clauses**.

**The cap never appears without all of its clauses.** `voice.md` §8 item 39 requires that
"up to two hours" travels with *highest priority first*, *completion is not guaranteed*, and
*unused time does not roll over*. Shipping them as one indivisible block is how that rule is
enforced structurally rather than by remembering.

**And the price and the hours are never in the same breath.** `$279 ÷ 4 hours = $69.75` lands
inside the Cincinnati handyman band. The masthead states the price and does not mention hours;
the hours appear in this block, on `whats-included.html`, and in the objection answer on
`pricing.html`, which concedes the reader's arithmetic once and never produces its own. No
division of $279 appears anywhere on the site — verified by grep for `139.50` and `69.75`.

Above the figure on every surface that carries one: the exclusions, including the pool
disclaimer. Below it: billing and cancellation. That order is `messaging.md` §3 and it does not
change.

---

## 6. The season strip — the sixteenth visit, drawn

`visual-direction.md` §4.5 set-piece 2, and it is the visual form of the argument that replaced
*"the same price in January as in July."*

**Sixteen ticks**, two per month, March through October, with month abbreviations beneath in
`--type-rail`, terminating in a mono label: `16 VISITS · MAR 1 – OCT 31`.

| Tick state | Colour | Shape | Where it may appear |
|---|---|---|---|
| Current / next | `--ember` — a literal, **not `var(--mark)`**; §4.5 exempts it as a position in a schedule rather than a decision. 3.31:1 on the `--paper` the strip always runs on. | 8px filled square | Exactly one per strip |
| Every other date | `--rule` | 2px × 14px bar | The other fifteen |
| Delivered | `--ink` | 2px × 14px bar | 🔶 **Reserved. Not a public-page state.** See below |

**Why `tick--done` is not on any public page.** `visual-direction.md` §4.5 defines an `--ink`
tick as *a visit already delivered*. Ten of them shipped on `index.html`, `pricing.html`,
`whats-included.html` and `membership-full.html` while the book had **nobody in it**. The
caption said "visit dates," which was honest; the drawing said "ten visits done," which was a
claim about work performed for clients who do not exist — and a graphic is a claim
(`voice.md` §3, the non-prose surface rule). A public strip now draws **the shape of the
season**: sixteen `--rule` ticks and one `--ember` square at the current calendar position. The
class survives in `components.css`, commented and unused, because the state is real the day a
member looks at their own record — and that is the only place it may be used.

Off season every tick drains to `--rule`, the ember square moves to the first March tick, and
the strip is preceded by a `--season-support` block reading `NEXT SEASON OPENS MARCH 1`.

**Four rules it is built to obey:**

1. **It is page furniture, not a chart.** No axis, no scale, no tooltip, no percentage. Nothing
   here is data beyond a schedule anyone could copy off the agreement.
2. **It never animates its ticks.** A strip that filled itself would turn a schedule into a
   countdown, which is manufactured urgency in motion form (`voice.md` §6.5). There is no
   keyframe, no transition and no `animation-timeline` anywhere near it.
3. **Nothing is carried by the graphic alone.** The tick row is `aria-hidden="true"` and every
   fact it draws is written in the `<figcaption>` as real text — the season, the count, the
   dates, and the pro-ration.
4. **It states the season, it does not sell it.** The caption says where the square sits, that
   the season is underway, that what is left is pro-rated, and that anybody on the books before
   March 1, 2027 holds $279 through the 2027 season. It never says "only six left," it never
   counts how many dates have gone, and it never counts down to February 28. **The count of dates
   already past was cut**: "ten of the sixteen are already gone" is `voice.md` §6.5's
   season-closing row with the arithmetic done for the reader, and the pro-ration sentence never
   needed it. **On `membership-full.html` the caption stops after the second sentence**, because
   pro-ration and a rate lock are terms on a slot and that page's `h1` says there is no slot.

**One documented deviation from the brief.** §4.5 says the strip runs "into the bleed track."
It does not: it spans the full container, which is already wider than the 68ch measure and
already breaks the reading column, but it stops at the container edge. Running it off the
viewport would crop the sixteenth tick — the one the entire argument is named after. Grid
breaking, yes; clipping the punchline, no.

**Editing it as the season moves** is one thing: how many `<li>` carry `tick--done`, and which
one carries `tick--now`. The markup comment says so at each of the four instances.

---

## 7. Image slots — every one needs a real photograph

**No real photography exists** (`CANON.md` §10.6). **Stock photography is never a final answer**
(`visual-direction.md` §8). Until the frames below are shot, each slot ships as a **plate**: an
empty band on `--paper-deep` with hairlines top and bottom and a caption. That is honest, it looks
intentional, and the Field Ledger direction was chosen partly because it looks finished with zero
images.

### The caption is written to a visitor. The shot list is not.

🔁 **Corrected.** The plate caption used to be the shot list, and it carried `class="rail"`, which
inherits `text-transform: uppercase`. So on seven pages a visitor read this, in caps:

> `PHOTO REQUIRED · FRAME 3 · A GENUINE FINDING — A WINDOW WELL PACKED WITH LEAVES… DON'T CLEAN IT
> BEFORE SHOOTING IT.`

That is an instruction from him to himself, published as copy, in the one typographic treatment
the site reserves for status stamps. Three separate rules were broken by one class attribute:
`voice.md` §3's non-prose surface rule (rendered case is copy), `visual-direction.md` §3.4 (no
letterspaced lowercase — the sentence was set in tracked mono), and the shipped Plex Mono subset,
which has no apostrophe, so `DON'T` would have changed face mid-word the day the font landed.

**The contract now, and it has two halves that must not merge again:**

| Where | Audience | Content |
|---|---|---|
| `<figcaption class="plate__cap">` | **A visitor.** Sentence case, Plex Sans, `--type-small`, `--ink-muted` at 5.4:1 on the plate's `--paper-deep` | *"A photograph goes here. There aren't any yet — the real one is …"* followed by what the real photograph has to show, in one clause a customer can read |
| The HTML comment directly above the `<figure>` | **Him, with a phone, in a yard** | The full shot instruction: frame number, angle, what must be in shot, what must not, and the loading attributes to set. Unchanged |

The caption is honest about the gap rather than hiding it, which is the same move the summary
facsimile's *"format only — not a client summary"* makes one section up. **Frame 5's caption
carries the pool disclaimer in full**, because it describes the equipment pad and `voice.md` §8
item 41 requires the disclaimer in the same block as any description of pool work — caption
included.

Each slot in the markup carries an HTML comment naming the required shot.

| Slot | Page · position | Frame | **Exactly what the real photo must show** | Must not show | Loading |
|---|---|---|---|---|---|
| **IMG-01** | `index.html`, `membership-full.html` · masthead bleed track | 1 | A pool deck or patio **mid-visit**, shot standing, his own equipment in frame — blower set down, pool net leaning on a chair, the bucket where he left it. 3:2 landscape with dead space in the **left third** so the display headline can sit over it. | People, faces, a house number, a street sign, anything that identifies a client | `eager`, `fetchpriority="high"` |
| **IMG-02** | `whats-included.html` · the eight parts | 2 | One close frame of **his hands working** — the skimmer net breaking the water surface, the vacuum head going in, or the grease tray coming out of a flat-top. Proves it is one person and not a crew. | A posed grip, gloves that look new, a second pair of hands | `lazy` |
| **IMG-03** | `pricing.html` · above the exclusions | 3 | **The finding, and it must be genuinely unflattering.** A window well packed with leaves with water standing in it, a skimmer basket lifted out full of maple seeds, a split hose bib, a torn pool cover. **Do not clean it before shooting.** The most persuasive image on the site, because it is the only one that costs him something to publish. | Anything staged, tidied or improved before the shutter | `lazy` |
| **IMG-04** | `index.html`, `membership-full.html` · beside the facsimile | 4 | **The record.** A real service summary open on a phone, or printed on the tailgate, address obscured, legible enough to read two lines. | An invented summary, a mocked-up screen, a stock phone render | `lazy` |
| **IMG-05** | `whats-included.html` · the pool block | 5 | **The equipment pad.** The salt cell display, the pump baskets out, the backwash valve. This is the frame that makes the pool block credible — and **its alt text and its caption both carry the disclaimer**, not a competence claim. | Any implication that he services the system; any before/after water shot | `lazy` |
| **IMG-06** | `projects.html` · deep clean section | — | **Grill / outdoor kitchen, the same frame before and after.** Same camera position, same light, same day. Grease tray out and the burners visible in the "before." | Two different grills, two different days, two different crops | `lazy` |
| **IMG-07** | `about.html` · lineage entry | 7 | **The mark, in daylight.** The `WPC513` stencil or the full lockup on the truck door, equipment visible behind it. The shot that makes the business look real to a neighbour who saw the truck. | A rendered mockup, a vinyl proof, a photoshopped door | `lazy` |

> 🔶 **Frame 6, "end of season," is specified in the brief and has no slot on the site yet.**
> Covers going on, furniture stacked, the last leaves on an empty deck, late-October light — and
> **no snow**, because there is no winter service in this membership. It belongs on
> `whats-included.html` in the season block the day it exists. It is listed here rather than
> given an eighth empty plate, because a plate promising a photograph that has no home is worse
> than an honest gap.

### Shooting and delivery rules

- Bright **overcast** day or the hour before sunset. Available light, no flash. Phone camera is
  fine. Landscape orientation.
- Hold the blues cool and let the warm stock of the page do the warming. Pull 10–15% of the
  saturation out of the sky. **No duotone, no colour overlay, no navy/orange grade, no vignette,
  no HDR, no film-grain filter** — the page already has grain, and grading a photo to match the
  palette is exactly what a franchise does.
- AVIF with a WebP fallback, `width`/`height` set explicitly on every `<img>` so nothing shifts.
- **Alt text names the object and locates it**: "Skimmer basket lifted out, packed with maple
  seeds," never "pool maintenance." **Any alt text describing pool work carries the disclaimer**
  (`voice.md` §8 item 41).
- **Street names only, ever.** No full address, no identifying house.

### How to install a photograph

Each plate is a `<figure class="plate">`. Replace the inline `<svg>` with an `<img>` carrying
`width`, `height`, `alt` and `loading`; keep the `<figcaption class="plate__cap">` and rewrite it
to describe the photograph that is now there rather than the one that is missing. **Do not add
`class="rail"` back** — that is the defect above, and the caption is a sentence, not a stamp.
Nothing in the CSS changes.

---

## 8. The mark

`visual-direction.md` §7. The owner shipped a finished logo, so the previous purely typographic
lockup is retired.

**On screen**, inside the `--navy` status strip: the house-and-tree line mark in `--paper`
stroke at 40px, then `WPC 513` in `--ember-lift` mono with `+0.10em` tracking, a `--paper`
hairline, and `WESTSIDE PROPERTY CARE` in small caps at `+0.16em`. The navy square of the
printed mark **is** the strip, so no second square is drawn — a navy square on navy is a seam,
not a mark.

**Three favicon files ship, not one scaled SVG**, because a scaled lockup at 16px reads as a
smudge in a tab strip:

| File | Application | Contents |
|---|---|---|
| `favicon-16.svg` | 16×16 | `513` alone, `--ember-lift` mono on `--navy`. 4.88:1. |
| `favicon.svg` | 32×32, and the default `sizes="any"` | House-and-tree line mark alone on `--navy`, stroke 2.5 units, no type |
| `apple-touch-icon.svg` | 180×180 | Line mark + `WPC 513` + the rule. The small-caps line is dropped; at that size its absence is not a defect. |

`WPC 513` inside the lockup is **never** set on two lines, never cropped, and never split so
that the first three letters appear without the numerals — that would produce the one string
`brand-brief.md` §1.2 bans outright. The link's accessible name is
`Westside Property Care 513 — home`, so the first reference on every page is the full name and
bare "WPC" never reaches an accessibility tree, a slug, or the structured data.

> 🔶 **Two colours in the lockup are unconfirmed against his artwork.** The source fixes the
> elements and the palette — navy ground, orange wordmark, line mark above, rule beneath, small
> caps below — but **not** the colour of the icon, the rule, or the small caps. They ship as
> `--paper` so the wordmark is the only warm element and reads as the name. **If his artwork
> colours them differently, his artwork wins.** Every one of them is a single `stroke` or `fill`
> value, and the three favicon files each carry a comment at the top saying exactly which value
> to change. Do not redraw his logo to fit this spec.

**One footer decision worth recording**, because it is a contrast fix and not a taste call. The
footer lockup is the **knocked-out single-colour variant**: the whole lockup in `--paper`,
wordmark included. The footer panel is `--season-ground`, which is navy in season but the
drained slate off season, and `--ember-lift` is **3.06:1** on that slate — under AA for 12px
type, and outside the rule that the mark only ever sits on navy. `--paper` is 12.05:1 and
7.57:1. §7.3 already allows the knocked-out variant "where a single colour is all that is
available," so this is the brief's own escape hatch rather than a deviation from it.

---

## 9. Forms

Two forms, one component, `apply.html` and `waitlist.html`.

- **They work with JavaScript disabled.** Native `required` and `type="email"` validation, and
  `:user-invalid` reveals the error sentence with no script at all.
- **Every error sentence is written into the markup on page load and revealed, not injected.**
  There is no message a person can read that the markup does not contain, which is what makes
  the copy auditable against `voice.md`.
- **The invalid state is never colour alone** (SC 1.4.1): an `--ember-deep` rule *and* a
  sentence.
- **Both required fields carry the word "Required" in visible help text** (SC 3.3.2).
- **`js/forms.js` adds one attribute.** It sets and removes `aria-invalid` on a field the
  browser has already judged. It contains no message text, reads `el.validity.valid` only, and
  never echoes what was typed.
- **The `:user-invalid` rules and the `[aria-invalid]` rules are kept as separate declarations**,
  never grouped into one selector list — a browser that does not understand `:user-invalid`
  discards the entire list it appears in, which would take the fallback with it.
- **A honeypot, not a CAPTCHA** (`rules/web/security.md`).
- **The property checkboxes no longer price anything.** Their hint says so explicitly: *"It
  doesn't change the price — $279 is $279. It changes how much of the two hours the property
  uses, which is how I work out whether it fits."* Under the old model those two boxes selected
  a configuration; under the flat price they are a **client-selection** question, and the copy
  had to change to match or the form would have implied a tier.
- **[FORM_ENDPOINT] must be set before launch.** Until it is, the form will not submit — which
  is why the phone number sits beside the button with equal weight rather than as a fallback.

---

## 10. Contact and configuration placeholders

Every placeholder in the built site, in one place. All are literal strings; find and replace.

| Placeholder | What it is | Files |
|---|---|---|
| `[PHONE]` | The business number, in both the `sms:` href and the visible text | All ten pages |
| `[EMAIL]` | The business email, in the `mailto:` href and the visible text | All ten pages (footer) |
| `[URL]` | The final domain, **no trailing slash** | Canonical tags, `og:url`, JSON-LD `@id` and `url`, form `_next`, `sitemap.xml`, `robots.txt` |
| `[FORM_ENDPOINT]` | The static-form service action URL | `apply.html`, `waitlist.html`, and the `form-action` directive in `_headers` |
| `[GBP_URL]` | The Google Business Profile URL, for `sameAs` | Not yet placed — see `seo.md` §3 |

`[PHONE]` was the riskiest of these while `.cta__aside` was set in mono — a US number is normally
punctuated with a hyphen the subset did not hold, eleven times per site. The §3.1.3 move settled
it structurally: `.cta__aside` is Plex Sans, so **every phone number on the site is now Plex Sans**
and no placeholder above resolves into a mono surface. `[PHONE]` and `[EMAIL]` were also the only
things putting `[` and `]` on screen inside mono, and they no longer do.

### 10.1 One slot that is not on the list, and is the one to watch

⚠️ **The record stamp's address slot.** The facsimile ships a literal date and visit number, but
the *real* stamp Ryan sends is
`WPC513 · SERVICE SUMMARY · {{address_short}} · VISIT 07 OF 16 · MONDAY, JUNE 15`. That is a
`.stamp` — Plex Mono, 49 glyphs, **no apostrophe** (`visual-direction.md` §3.1.1B).

**`O'BRIEN CT` and `ST. MARY'S LN` are ordinary west-side addresses and both break it.** The
apostrophe falls out of the subset and renders in whatever mono the OS supplies, changing face in
the middle of a word on a document whose whole job is looking like a record.

**Template slots inside a mono surface are constrained exactly like the literal text around
them.** Enforcement belongs where the value is produced — strip or transliterate before it reaches
the stamp (`OBRIEN CT`, `ST. MARYS LN`) — not in a proofread. This is invariant 2's blind spot:
an audit of the shipped files sees `{{address_short}}`, finds nothing wrong, and passes. It is
noted here, beside the stamp in `copy-deck.md`, and in `site/fonts/README.md`.

---

## 11. Technical build

### 11.1 Files

```
site/
├── index.html               Home — open enrolment state
├── membership-full.html     Home — MEMBERSHIP FULL state (drop-in replacement)
├── whats-included.html
├── pricing.html
├── projects.html
├── about.html
├── apply.html
├── waitlist.html
├── thanks.html
├── 404.html
├── styles/
│   ├── tokens.css           every colour, size, space, radius, duration — nothing else
│   ├── base.css             reset, landmarks, type, rail-and-measure grid, grain, motion
│   └── components.css       the sixteen components in §4
├── js/
│   ├── season.js            sets the season switch from the date. Nothing else.
│   └── forms.js             adds aria-invalid to an invalid field. Nothing else.
│                            Loaded only by apply.html and waitlist.html.
├── fonts/
│   └── README.md            how to install the three webfonts (they are not in the repo)
├── favicon-16.svg           513 alone
├── favicon.svg              the line mark
├── apple-touch-icon.svg     line mark + WPC 513 + rule
├── robots.txt
├── sitemap.xml
└── _headers                 security headers for Netlify / Cloudflare Pages
```

No framework, no bundler, no build step, no `npm install`, no dependency of any kind. Open
`index.html` from the filesystem and it works.

### 11.2 Measured budgets

**Measured with `gzip -c <file> | wc -c` on the shipped files after the 2026-08-06 mono ruling
(§11.5).** Not estimated, not carried over from a previous pass, not rounded up. Every figure in
this section was re-measured after the three typeface moves landed, including the ones that did
not change.

| Asset | Raw | **Gzipped** | Budget | Result |
|---|---|---|---|---|
| `styles/tokens.css` | 12,895 B | **5,323 B** | — | unchanged |
| `styles/base.css` | 12,710 B | **4,653 B** | — | unchanged |
| `styles/components.css` | 36,907 B | **10,293 B** | — | +563 B gz |
| **CSS total** | **62,512 B** | **20,269 B — 19.79 KB** | **< 30 KB gz** | **66% of budget** |
| `js/season.js` | 1,334 B | **730 B** | — | unchanged |
| `js/forms.js` | 1,415 B | **714 B** | — | unchanged |
| **JS total** | **2,749 B** | **1,444 B — 1.41 KB** | **< 150 KB gz** | **0.94% of budget** |

**No JavaScript was added or changed** by the mono ruling or by the pass before it. The site still
works completely with JS disabled; `season.js` only picks the toggle's opening position from the
date.

**No HTML changed either**, which is the check that the ruling was applied as specified:
§3.1.3 says "no markup change, no token change, no new token", and every page byte count in the
table below is identical to the previous pass. `index.html` is 37,521 B raw / 10,595 B gz before
and after.

**What changed and why.** `components.css` went from 9,730 to 10,293 B gz, **+563 B**, and the
direction of that number is worth reading carefully, because **the code got smaller and the
comment got bigger.** Stripping `/* */` comments and gzipping the three stylesheets file-by-file
gives **6,766 B**, down from 6,773 B — **−7 B of actual CSS**, because the three moves delete
seven declarations and add four:

| Rule | Removed | Added |
|---|---|---|
| `.foot__prices` | `font-family`, `font-weight` | — |
| `.cta__aside` | `font-family`, `font-weight` | `font-variant-numeric` |
| `.foot__line` | `font-family`, `font-weight`, `font-variant-numeric` | `max-inline-size`, `font-weight`, and two size tokens swapped in place |

All +563 B is the three comments explaining why, and they are load-bearing in the way §11.5's
comments are: `.foot__line` in particular now looks like an arbitrary heading-sized paragraph in a
footer, and the next editor to tidy it back down to `--type-small` would silently undo the
hierarchy that replaced the typeface. `max-inline-size: var(--measure)` looks even more removable
and is the one declaration that cannot go — without it the 76-character line runs the full footer
width.

The previous pass's comparable code-only figure was published as 6,605 B using a slightly
different strip; the 6,773 → 6,766 comparison above applies **one** method to both the committed
previous file and the current one, so the −7 B is a real delta rather than two methods differenced.

The CSS total is the **sum of the three files measured separately**, because each is its own
HTTP response and is gzipped on its own. Concatenating them first and gzipping once gives a
smaller and less honest number — nothing here is bundled, so that figure would describe a build
that does not exist. The same applies to the two scripts, and `js/forms.js` is only requested by
the two pages that have a form.

**Against the tighter microsite row: 19.79 KB versus 15 KB, and stated rather than hidden.**
`visual-direction.md` §12.11 asks for ≤ 15 KB CSS. This build is **4.79 KB over**. Code-only —
every comment stripped — the three stylesheets gzip to **6,766 B, 6.61 KB**, so the overage and
8.4 KB besides is *comment*: the contrast arithmetic beside each colour choice, the ground each
ratio is computed against, and the reason each accessibility fix and each typeface exists, so the
next person does not undo it as tidying. Three passes of condensing have gone through it.
**The binding budget is `rules/web/performance.md`'s 30 KB landing-page row and this sits at 66%
of it.** The choice is between deleting the reasoning and being over a stretch budget, and after
two defects each caused by one under-argued line, the reasoning wins. Minifying comments out at
deploy recovers **13,503 B — 13.19 KB** gz and changes nothing else.

Per page:

| Page | Raw | Gzipped | Change |
|---|---|---|---|
| `index.html` | 37,521 B | 10,595 B | +454 |
| `membership-full.html` | 37,424 B | 10,441 B | −10 |
| `whats-included.html` | 32,200 B | 9,291 B | +129 |
| `pricing.html` | 26,699 B | 7,676 B | +312 |
| `about.html` | 17,140 B | 5,179 B | −55 |
| `waitlist.html` | 15,373 B | 4,665 B | −70 |
| `apply.html` | 13,809 B | 4,432 B | −5 |
| `projects.html` | 13,476 B | 4,380 B | +21 |
| `thanks.html` | 7,819 B | 2,675 B | +2 |
| `404.html` | 5,110 B | 1,701 B | +29 |
| `favicon.svg` | 1,348 B | 804 B | — |
| `apple-touch-icon.svg` | 1,358 B | 826 B | — |
| `favicon-16.svg` | 866 B | 587 B | — |

**Four pages got smaller.** Cutting fourteen "not X, just Y" constructions to bare assertion takes
bytes out, and it takes them out of exactly the pages that were arguing hardest. The three that
grew did so for content that had to be there: the restored cap clauses on What's included and
Pricing, and the dated founding terms on Home and Pricing.

**The number that matters is the heaviest first load:** `index.html` (10,595 B) plus all three
stylesheets (20,269 B) plus `season.js` (730 B) plus one favicon (804 B) = **32,398 B gzipped,
31.64 KB**, in six requests, with no font, no photograph and no third-party anything.
`index.html` does not load `forms.js` — it has no form. The heaviest form page, `apply.html`
cold, is 4,432 + 20,269 + 730 + 714 + 804 = **26,949 B, 26.32 KB** in seven requests. Every
subsequent page is 1.7–10.6 KB, because the CSS, the JS and the icon are already cached.

Reproduce any figure above with:

```sh
cd 02-website/site
for f in styles/*.css js/*.js *.html *.svg; do
  printf "%-24s raw %7s  gz %7s\n" "$f" "$(wc -c < "$f")" "$(gzip -c "$f" | wc -c)"
done

# and the code-only CSS figure, one method applied per file and summed:
for f in styles/*.css; do
  perl -0pe 's{/\*.*?\*/}{}gs' "$f" | gzip -c | wc -c
done
```

`gzip` is level 6 by default and version-sensitive at the single-byte level; the figures above
were taken with GNU gzip and a re-run may differ by a handful of bytes on a different build. That
is noise against a 30 KB budget, but it is why a delta is always measured with one command across
both files rather than against a published number.

**Fonts are not counted above because none ship.** See §11.5.

### 11.3 Motion

Only `transform` and `opacity` are animated. There is no keyframe animation that moves layout.

- **Entrance — the rules draw.** Section hairlines animate `transform: scaleX(0) → scaleX(1)`
  from `transform-origin: left`; text fades `opacity: 0 → 1` with no translate. Implemented with
  **CSS scroll-driven animation** (`animation-timeline: view()`) inside an `@supports` block, so
  it costs **zero JavaScript** and zero scroll handlers. Browsers without support render the
  final state immediately, which is the correct degradation.
- **Hover — three coordinated changes on one gesture:** the row fills `--wash`, the hairline
  beneath thickens via `scaleY(2)` and takes `--season-ground`, and the label translates 2px
  right.
- **Focus** is `2px solid var(--mark)` at `3px` offset plus a filled 6px `var(--mark)` square
  drawn in the rail — keyboard users get the same marker the summary uses for a finding, resolved
  to the step of the ember ramp the ground under it requires. **The ring takes `var(--mark)` and
  nothing else, on every surface** — see §11.4.
- **Active** is `translateY(1px)` and the rule under the control goes to `--ink`. No scale, no
  bounce, no spring.
- **The season strip never animates.** No transition, no keyframe, no scroll timeline anywhere
  near it. §6 rule 2.
- `prefers-reduced-motion: reduce` collapses all durations to `0.01ms` and renders hairlines at
  `scaleX(1)`. Hover and focus still change colour, because they are information.

**One documented deviation from `rules/web/coding-style.md`.** Interactive state changes
transition `background-color`, `color` and `border-color` at 140ms. These are paint-only, not
layout, and they are specified by name in `visual-direction.md` §6. No *entrance*, *scroll* or
*loop* animation touches anything but `transform` and `opacity`. `transition: all` and
`will-change` appear nowhere.

The season switch changes colour **instantly**, with no transition. The brief permits a 320ms
custom-property transition; it is declined because animating a registered custom property
repaints the entire document, and the binding performance rule beats the optional flourish.

### 11.4 Accessibility, and the recomputed contrast audit

Verified by reading the markup and computing contrast by hand — Playwright cannot launch here,
so nothing below is claimed on the basis of an automated pass.

- Real landmarks: `<header>`, `<nav aria-label="Main">`, `<main>`, `<section aria-labelledby>`,
  `<footer>`. Verified programmatically: every `<section>` has an `id`-bound heading, **each
  `aria-labelledby` names exactly one heading**, every referenced `id` exists, and every page has
  exactly one `<h1>` with no skipped heading level.
- Tag balance verified programmatically across all ten pages: zero unclosed and zero stray tags.
- Skip link to `#main`, visible on focus, first in tab order.
- Focus is visible on every interactive element and is never removed.
- The season switch is a real checkbox with a real `<label>`; reachable by keyboard, toggles
  with Space, announces its state.
- `aria-current="page"` on the active nav link.
- Tap targets: **≥44px** (`--tap-target`) on nav links, buttons, footer links, the lockup link
  and the season switch; **≥24px** (`--tap-min`, the SC 2.5.8 floor) on the two checkboxes, which
  draw their own box and cannot be padded out.
- Both required fields carry visible "Required" help text; the invalid state carries a sentence
  as well as a colour.
- Decorative SVG — the grain, the season divider, the plate ruling, the lockup mark and the
  sixteen ticks — is `aria-hidden="true"` or `role="presentation"`. Every fact the season strip
  draws is repeated as real text in its caption.
- The grain layer is `pointer-events: none`.

#### The matrix — recomputed from scratch, both seasons, four grounds, two decimals

**The previous ~90-line audit is void.** It was computed against oat / copper / green, and not
one of its numbers survives a palette change. What follows was computed from zero with the sRGB
relative-luminance formula (`c/12.92` or `((c+0.055)/1.055)^2.4`, `L = 0.2126R + 0.7152G +
0.0722B`, `(L₁+0.05)/(L₂+0.05)`) and checked against WCAG 2.2 AA: **4.5:1 for body text, 3:1 for
large text (≥24px) and for meaningful non-text (SC 1.4.11).**

Grounds across, foregrounds down. **Bold = passes 4.5:1.**

**IN SEASON — March 1 through October 31**

| | on `--paper` | on `--paper-deep` | on `--wash` | on `--season-ground` (navy) |
|---|---|---|---|---|
| `--ink` | **15.08** | **13.16** | **13.95** | 1.25 |
| `--ink-muted` | **6.20** | **5.41** | **5.73** | 1.94 |
| `--rule` | 1.67 | 1.45 | 1.54 | **7.24** |
| `--navy` | **12.05** | **10.52** | **11.15** | 1.00 |
| `--ember` | 3.31 | 2.89 | 3.06 | 3.64 |
| `--ember-deep` | **5.42** | **4.74** | **5.02** | 2.22 |
| `--ember-lift` | 2.47 | 2.16 | 2.29 | **4.88** |
| `--season-support` (pool teal) | **5.29** | **4.62** | **4.90** | 2.28 |
| `--paper` | — | 1.15 | 1.08 | **12.05** |
| `--paper-deep` | 1.15 | — | 1.06 | **10.52** |

**OFF SEASON — November 1 through the end of February.** `--wash` is aliased to `--paper-deep`,
so that column is identical to the second one; it is repeated so the matrix reads on its own.

| | on `--paper` | on `--paper-deep` | on `--wash` (= `--paper-deep`) | on `--season-ground` (slate) |
|---|---|---|---|---|
| `--ink` | **15.08** | **13.16** | **13.16** | 1.99 |
| `--ink-muted` | **6.20** | **5.41** | **5.41** | 1.22 |
| `--rule` | 1.67 | 1.45 | 1.45 | **4.54** |
| `--navy` | **12.05** | **10.52** | **10.52** | 1.59 |
| `--ember` | 3.31 | 2.89 | 2.89 | 2.29 |
| `--ember-deep` | **5.42** | **4.74** | **4.74** | 1.39 |
| `--ember-lift` | 2.47 | 2.16 | 2.16 | 3.06 |
| `--season-support` (ice) | **5.71** | **4.98** | **4.98** | 1.33 |
| `--paper` | — | 1.15 | 1.15 | **7.57** |
| `--paper-deep` | 1.15 | — | — | **6.61** |

#### Agreement with `visual-direction.md` §2 — including the newly published ratios

The brief asks for an independent recomputation and for disagreements to be **flagged, not
silently corrected**. Every ratio was recomputed from the hexes, not copied. **All of them
reproduce.** The six values §2 published or restated on 2026-08-05 are checked here at four
decimal places so the rounding is visible rather than assumed:

| Published in `visual-direction.md` | Published | **Computed** | Agreement |
|---|---|---|---|
| `--ember` on `--wash` | 3.06 | **3.0603** | exact to 2 dp |
| `--rule` on `--paper-deep` | 1.45 | **1.4535** | exact to 2 dp |
| `--ink-muted` on `--wash` | 5.73 | **5.7336** | exact to 2 dp |
| `--season-support` on `--wash` | 4.90 | **4.8976** | exact to 2 dp |
| `--ember-deep` on `--paper-deep` (the new `--mark`) | 4.74 | **4.7355** | exact to 2 dp |
| `--ember-lift` on off-season slate | 3.06 | **3.0628** | exact to 2 dp |
| `--paper` on an `--ember-deep` fill | **5.43** | **5.4248** | 🔶 **disagree at 2 dp — see below** |

🔶 **One flagged disagreement, and it is a rounding direction, not a colour.** `--paper` on
`--ember-deep` computes to **5.4248**, which rounds to **5.42**, not 5.43. §2.1 states it as
`5.43` twice — once for `--ember-deep` on `--paper` and once for the reverse, which is the same
pair, so the same 0.01 is published twice. It changes nothing: the margin to 4.5:1 is 0.92 either
way, well outside the 0.15 band where §2's rule 3 makes the second decimal load-bearing. **This
build states 5.42 throughout.** Flagged rather than adjusted, per §12.2, and `wpc-brand` should
decide which number the file carries rather than have two documents differ silently.

Every other published figure reproduces within 0.005. **There is no disagreement about a colour
value anywhere in the palette.**

#### `--mark` as implemented (§2.5)

`--mark` is never given a hex. **Every rule in the stylesheets that sets a `background-color`
also sets `--mark` in the same block**, so a surface cannot acquire a ground without acquiring
the mark that answers to it. Verified by grep: `var(--mark)` is the *only* colour in any
`outline` or decision-mark `border`/fill on the site, and no `var(--ember*)` appears in one.

| Surface | Declared on | Resolves to | Ratio, worst ground | Why |
|---|---|---|---|---|
| The page — `--paper` | `:root` (`tokens.css`) | `--ember` | **3.31** | Default. |
| `--wash` row hover, In Season | `--wash-mark` on `:root` | `--ember` | **3.06** | Published in §2.5. |
| `--wash` row hover, Off Season | `--wash-mark` in the season block | **`--ember-deep`** | **4.74** | `--wash` is aliased to `--paper-deep`; `--ember` is 2.89 there. |
| `--paper-deep` — the summary facsimile | `.report__sheet` | **`--ember-deep`** | **4.74** | The finding rule's actual ground. |
| `--paper-deep` — the image plates | `.plate` | **`--ember-deep`** | **4.74** | Same ground, no finding on it today. |
| The navy status strip | `.strip` | **`--paper`** | **12.05** | §6's sanctioned reversed-panel option. |
| The skip link, over the strip | `.skip` | **`--paper`** | **12.05** | It is not *inside* `.strip`; see sweep finding 1. |
| The footer — navy or slate | `.foot` | **`--paper`** | **12.05 / 7.57** | Ground changes with the calendar; `--paper` is one declaration for both. |

**Consumers — exactly two, as §2.5 requires.** The 2px finding rule
(`.report__finding { border-inline-start: var(--hair-find) solid var(--mark) }`) and the focus
indicator (`:focus-visible { outline: … var(--mark) }` plus the filled 6px rail square
`background-color: var(--mark)`, and the switch's sibling ring). Nothing else takes it.

**Two things `--mark` deliberately does not take over:**

- **The season strip's current-visit square stays a literal `--ember`.** §4.5 exempts it by name:
  it is a position in a schedule, not a decision awaiting a yes or no. The strip is on `--paper`
  in both seasons, where `--ember` is 3.31. Written into `components.css` §7 so it is not
  "fixed" later by someone pattern-matching on ember.
- **The finding's price is `--ember-deep` by name, not `var(--mark)`.** It is *text*, so §2.4
  rule 2 governs it, and on `--paper-deep` the two happen to resolve to the same hex — the bonus
  §2.5 names. Welding them would break if the sheet ever moved to `--paper`, where `--mark` is
  `--ember` at 3.31: legal for a rule, illegal for 12px type.

#### What `--wash-mark` is, and why it is not a fourth accent

`--wash` is the one ground in the system that is **itself a variable** — off season it is
aliased to `--paper-deep` — so its mark has to be a variable too. `--wash-mark` is declared in
the *same block* as `--wash`, in both season definitions, and resolves to `--ember` (3.06) in
season and `--ember-deep` (4.74) off season. It adds no hex; it is §2.5's rule applied to a
ground that moves. Without it, the one declaration that changes the ground — `--wash:
var(--paper-deep)` — would silently move a correct mark onto a failing one, which is the exact
failure mode §2.5 exists to end.

#### The ground-based re-sweep — every coloured element, every surface it touches

§12.2 now asks for the surfaces an element *renders on*, not the one it is associated with,
**including hover states and both seasons**, with the worst one governing. Re-swept on that
basis. Five things came out of it that the number-first audit had not.

**1. The skip link's ring was measured against a ground it never touches — fixed.** `.skip` is a
sibling of `<header>`, so it inherited the `:root` `--mark`, which is justified against `--paper`.
But `.skip` is `position: absolute; inset-block-start: 0`, so the surface it actually appears on
is **the navy status strip, on every page, every time** — and it is only ever visible while
focused. `--ember` there is **3.64**, a pass nobody had argued for and 0.64 from failing. It now
carries `--mark: var(--paper)`, **12.05** against the navy. That ring is also the only thing
delineating the control: the skip link's own `--ember-deep` fill is **2.22** against the navy
behind it, so without a `--paper` ring a focused skip link has no perceivable boundary. This is
the same defect class as the finding rule, in a third place, and neither audit had found it.

**2. The season switch got *harder* to see on hover — fixed, two declarations.** At rest the pill
is a transparent box with a `--rule` border on navy (**7.24**) and a 6px `--ember-lift` square
(**4.88**). On hover it fills `--ember-deep` — and both of those marks were left alone, so the
border dropped to **2.22** against the fill it now matched, and the square dropped to **2.20**.
The element designed to come forward on the gesture receded on it. SC 1.4.11 covers *states*, not
just rest. Both now go to `--paper` on hover: **12.05** outward against the navy, **5.42** inward
against the fill. All four parts of the control now move on one gesture instead of two moving and
two disappearing.

**3. `.btn--quiet` and `.ledger__row` fill with `--wash`, which is `--paper-deep` for four months
— fixed structurally.** Both now take `--mark: var(--wash-mark)`. `.btn--quiet` is focusable
today; `.ledger__row` is not, and that is exactly the invariant §6 says not to lean on.

**4. The finding's price was `--ink`, and the brief specifies `--ember-deep` — corrected.**
§4.5 set-piece 3 and §2.5's closing paragraph both say the price in the facsimile's rail is
`--ember-deep`, so that "the mark and the figure it flags now match instead of nearly matching."
It shipped as `--ink`. Now `--ember-deep`: **4.74** on `--paper-deep` at `--type-stamp` 12px,
which needs 4.5. Passes by **0.24**.

**5. 🔶 A fifth meaning on the 2px weight, flagged not fixed.** `.pull` — the pull quote — is a
**2px left margin rule** in `--season-ground`: the same weight, the same position and the same
gesture as the finding rule, in a different colour. §5.2 enumerates two weights carrying four
meanings and this is a fifth. It is **kept**, because colour is what carries the semantic here
(ember is the monopoly on "act", navy is ink) and because 12.05 / 7.57 on `--paper` clears
non-text in both seasons — but it is written into the stylesheet and into this file rather than
left uncounted. §5.2's own diagnosis is that under-enumeration is how the `--mark` defect
survived, so the honest move is to count it and let `wpc-brand` rule.

**For completeness, the other 2px edges on the site**, none of which is a page separator and none
of which is a mark: the current-page nav underline (`--ink`, 15.08 on `--paper`), the input's
heavier bottom border (`--ink-muted`, 6.20), the link-hover underline thickness, and the pool
disclaimer rule (`--season-support`, 5.29 on `--paper` / 4.62 inside the facsimile — the sanctioned
fourth meaning).

#### The ring's ground is the parent's background, not the element's own fill

This came up as a genuine ambiguity in §6 and it needs stating, because the site contains a case
that decides it. §6 says that at `outline-offset: 3px` the ring sits outside the element's box,
so *"where the two differ, publish and satisfy the worse of them."* Applied literally to a solid
`.btn`, that is **impossible**: the button's fills are `--ember-deep` (rest), `--season-ground`
(hover) and `--ink` (active), and no colour clears 3:1 against both a fill and the `--paper` gap —
`--ember` is 3.31 on paper but 1.64 on the `--ember-deep` fill; `--paper` is 5.42 on the fill but
1.00 in the paper gap. No step of the ramp and no palette value satisfies both.

The resolution is that they are not both grounds. At a 3px offset the ring is drawn **wholly
outside the border box, with 3px of the parent's background showing on its inner edge** — so both
edges of the ring touch the same colour, the parent's. The fill is 3px away and never adjacent.
§6's instruction is therefore about a fill belonging to an **ancestor** the ring lands *on* — the
hovered ledger row it names — and that case is real and is what `--wash-mark` answers.

**Both readings are satisfied anyway wherever it is cheap to do so.** `.btn--quiet:hover` takes
`--wash-mark` even though its ring is on `--paper` either way, because `--ember-deep` clears both
grounds (5.42 / 4.74) at no cost. Only the solid `.btn` depends on the reading, and there the
literal reading has no solution. 🔶 **Flagged to `wpc-brand` as wording worth tightening in §6.**

#### The tightest text pass on the site is the pool rail tag, not the season stamp

🔁 **This corrects a claim this file made in the previous pass.** It said `--ember-lift` on
`--navy` at 4.88 was the tightest text pass. It is not.

| Element | Size | Ground | Ratio | Threshold | **Margin** |
|---|---|---|---|---|---|
| **Pool rail tag** — `<p class="rail pool">Pool · no guarantee</p>` | **11px** (`--type-rail`) | `--paper-deep`, inside the facsimile | **4.6201** | 4.5 | **+0.12** |
| Finding price — `.report__price` | 12px (`--type-stamp`) | `--paper-deep` | **4.7355** | 4.5 | +0.24 |
| Season stamp — `.season__stamp` | 12px (`--type-stamp`) | `--navy` | **4.8774** | 4.5 | +0.38 |

**Two constraints follow, and both are now binding on this build:**

- **`--season-support` may not be lightened.** The In Season teal `#1A6E6B` has 0.12 of headroom
  and none of it is spare.
- **Pool text may not go below 11px.** `--type-rail` is the floor for anything carrying
  `--season-support`, and the rail tag is set at exactly it. If a pool row ever has to sit on a
  ground darker than `--paper-deep`, the tag goes to `--ink` and the teal stays on the rule beside
  it (`visual-direction.md` §2.2).

Note that `--type-rail` is `0.6875rem` — an absolute value — so the facsimile's `font-size: 0.9em`
does **not** shrink it. Verified: the tag renders at 11px inside the sheet, not 9.9px. If that
`0.9em` were ever applied to the rail scale instead, the tightest text on the site would drop
under AA.

#### `WPC 513` is exempt as logotype; the season stamp beside it is not

Both are `--ember-lift` on `--navy` at **4.8774**, and they are governed differently:

- **`WPC 513` inside the lockup is logotype text.** WCAG 2.2 SC 1.4.3 exempts text that is part
  of a logo or brand name from any contrast requirement. It is exempt at 4.88 and would be exempt
  well below it. **This is not a licence to touch either colour** — it is his printed mark.
- **The season stamp is not a logotype.** It is UI text at `--type-stamp` 12px, it needs 4.5, and
  it has 4.8774 on its own margin of **+0.38**. It passes without borrowing the exemption.

🔁 **This retires the previous pass's near-miss 4.** That item said: if the stamp reads thin once
Plex Mono is installed, darken `--ember-lift` toward `--ember`. **That instruction is withdrawn.**
Darkening `--ember-lift` is now forbidden by `visual-direction.md` §7.1 — the pass depends on both
hexes staying exactly where they are, and §2.4 rule 7 already forbids brightening the ember or
lightening the navy. **If the stamp needs more room, move the size to 14px, not the colour.**
14px clears comfortably and 12px was doing hierarchy work that 14px can still do.

#### What actually lands on each reversed ground

The **status strip** is `--navy` in both seasons; the **footer** is `--season-ground`, so navy in
season and slate off season. Those are the only two reversed panels.

| Element | Foreground | In Season | Off Season | |
|---|---|---|---|---|
| Strip: lockup mark, small caps, switch label | `--paper` on `--navy` | 12.05 | 12.05 | pass |
| Strip: `WPC 513` (logotype, SC 1.4.3 exempt) and the season stamp (not exempt, passes anyway) | `--ember-lift` on `--navy` | 4.88 | 4.88 | pass — **not** the tightest text pass; see above |
| Strip: switch border | `--rule` on `--navy` | 7.24 | 7.24 | pass (non-text) |
| Strip: switch pill border, at rest | `--rule` on `--navy` | 7.24 | 7.24 | pass (non-text) |
| **Strip: switch pill border and square, on hover** | `--paper` on `--ember-deep` | **5.42** | **5.42** | pass — **fixed this pass** |
| ~~Strip: switch border on hover as `--ember-deep`~~ | ~~`--ember-deep` on `--navy`~~ | ~~2.22~~ | ~~2.22~~ | **failed — the control's boundary vanished on hover** |
| ~~Strip: switch square on hover as `--ember-lift`~~ | ~~`--ember-lift` on `--ember-deep`~~ | ~~2.20~~ | ~~2.20~~ | **failed — same gesture** |
| **Strip: focus ring and rail marker — `var(--mark)`** | `--paper` | **12.05** | **12.05** | pass |
| **Skip link, over the strip: ring — `var(--mark)`** | `--paper` on `--navy` | **12.05** | **12.05** | pass — **fixed this pass** |
| ~~Skip link ring as the inherited `:root` `--ember`~~ | ~~`--ember` on `--navy`~~ | ~~3.64~~ | ~~3.64~~ | **wrong ground — never renders on `--paper`** |
| Skip link fill against the strip behind it | `--ember-deep` on `--navy` | 2.22 | 2.22 | boundary carried by the `--paper` ring, which is always present when it is visible |
| Footer: all text, headings, notes, project prices, links | `--paper` | 12.05 | 7.57 | pass |
| **Footer: lockup, knocked out entire** | `--paper` | **12.05** | **7.57** | pass — §8 |
| ~~Footer: lockup wordmark as `--ember-lift`~~ | ~~`--ember-lift`~~ | ~~4.88~~ | ~~3.06~~ | **fail off season — fixed** |
| **Footer: focus ring and rail marker — `var(--mark)`** | `--paper` | **12.05** | **7.57** | pass |
| ~~Footer: focus ring as `--ember`~~ | ~~`--ember`~~ | ~~3.64~~ | ~~2.29~~ | **would fail off season** |
| `.foot__rule` divider, `--paper` at 45% | — | — | — | decorative, no meaning of its own |

**The two reversed rings are no longer overrides.** They were `.strip :focus-visible {
outline-color: var(--paper) }` and `.foot :focus-visible { … }` plus two matching `::before`
rules — the right instinct applied by hand, twice, to two of the three surfaces that needed it,
and not to the third (`.skip`). All four rules are **deleted**. `.strip` and `.foot` now declare
`--mark: var(--paper)` in the same block that sets their background, which §6 sanctions
explicitly as the stronger reversed-panel option (12.05 against `--ember-lift`'s 4.88 on navy,
7.57 against 3.06 on the off-season slate). The rail square follows automatically because it
reads the same token, and **any focusable added to either panel later is covered without a second
edit** — which is precisely what the hand-written version could not promise, and did not deliver
for the skip link.

#### Pairs that do not clear the threshold, and what was done about each

1. ✅ **`--ember` on `--paper-deep` = 2.89:1 — the finding rule. Ruled on, and now fixed.** The
   previous pass shipped this as specified and flagged it: §5.2 justified the 2px rule at 3.31 on
   `--paper` while §4.5 puts the only finding in the system on `--paper-deep`. The argument
   offered for keeping it — that the finding block already carries a text heading and a price, so
   the rule is redundant emphasis and SC 1.4.11 does not bind — was **examined and declined on the
   merits**, and correctly: it does not generalise to the focus ring, which is the identical mark
   with nothing redundant beside it, and it would have made a colour value here silently dependent
   on copy decisions owned by `voice.md`. **`.report__finding` now takes `var(--mark)`, which
   `.report__sheet` resolves to `--ember-deep` for its own ground: 4.74:1.**
2. ✅ **`--ember` as the focus ring on `--paper-deep` = 2.89:1, and on the off-season slate =
   2.29:1 — the worse of the two bugs, and it was unflagged.** The previous pass answered this
   with *"nothing focusable sits on a `--paper-deep` ground,"* verified programmatically across
   all ten pages. **That verification was correct and the conclusion was not safe.** It was an
   invariant maintained by hand, and the Off Season state breaks it without touching any markup:
   `--wash` is aliased to `--paper-deep`, so a focusable inside a hovered ledger row lands on that
   ground for four months of the year. The 2.29:1 on slate was worse still — a value §2.3's own
   reversed list bans outright — and no markup habit addressed it at all. **The claim has been
   removed from `base.css` and replaced with the reason it was unsafe**, so nobody rebuilds on it.
   The ring now takes `var(--mark)` everywhere: 3.31 / 3.06 / 4.74 / 12.05 / 7.57 by ground.
3. **`--ember-lift` on the Off Season `--season-ground` = 3.06:1 — a real defect, found by an
   earlier sweep and fixed.** It would have put the footer lockup's wordmark below AA for four
   months of the year. Fixed at the semantic level rather than by nudging a hex: the footer uses
   the knocked-out single-colour lockup the brief already specifies for this situation. §8.
4. **`--ember-lift` on `--navy` = 4.8774:1 — passes on its own margin of 0.38, and it is *not*
   the tightest text pass on the site.** See the table above: the 11px pool rail tag at 4.6201 on
   `--paper-deep` passes by 0.12 and is the real floor. The `--ember-lift` pair carries two
   different things — `WPC 513`, which is exempt logotype text, and the season stamp, which is
   not and does not need the exemption. 🔶 **Action when Plex Mono is installed: look at the
   season stamp.** If it reads thin, **move the size to 14px. Do not touch the colour** — §7.1
   forbids darkening `--ember-lift` and §2.4 rule 7 forbids brightening it or lightening the navy.
5. **`--season-support` (pool teal) on `--paper-deep` = 4.6201:1 — passes by 0.12, and this is the
   tightest text on the site.** The pool rail tag inside the summary facsimile, at 11px. **The
   teal may not be lightened and pool text may not go below 11px** — both constraints are recorded
   above and in `tokens.css`. Off season it does not occur at all: `.pool` reverts to `inherit`
   (`--ink`, 13.16:1) because there is no pool work off season, so the accessible answer and the
   correct semantic reading are the same change.
6. **`--rule` on `--paper` = 1.67:1, on `--paper-deep` = 1.45:1.** The hairline is a decorative
   separator and never carries meaning alone — every entry it separates is also separated by
   whitespace and a heading. **But it is not acceptable as the only edge of a control**, which is
   why the form fields and `.btn--quiet` use `--ink-muted` at 6.20:1 instead. That introduces a
   fourth hairline colour beyond the three in §5.2, deliberately and only on controls: the
   three-weight system governs the page's *separators*, and a control border is a different
   object with a WCAG floor of its own. Carried forward from the previous pass and re-verified
   against the new `--rule`.
7. **`--ember` on `--paper` = 3.31:1 — passes for its only three uses.** Display figures at
   `--type-figure`, whose minimum is 2rem (32px), clear the large-text threshold; the season
   strip's current-visit square, which §4.5 exempts from `--mark` by name; and `--mark`'s own
   resolution on the paper ground. It is never body copy anywhere on the site — links, prices in
   prose, error text and the button ground all use `--ember-deep` at 5.42:1.
8. **`--ember` against an `--ember-deep` `.btn` fill = 1.64:1 — computed, and not a pair.** The
   focus ring around a solid button never touches the button. `outline-offset: 3px` puts it wholly
   outside the border box with 3px of `--paper` on its inner edge, so both of its edges are on
   `--paper` at 3.31:1. Recorded because the number looks alarming out of context and someone will
   compute it again; the reasoning is set out under *the ring's ground* above.
9. **`--rule` on `--wash` = 1.54:1 — the dotted leader inside a hovered ledger row.** Structural,
   like every other `--rule` hairline: it connects a job to its price, both of which are text at
   13.95:1 on the same ground, and it carries nothing on its own. The row's meaningful hairline —
   the one beneath it — goes to `--season-ground` on the same gesture, at 11.15:1.

### 11.5 Fonts — shipped state and the human action required

`visual-direction.md` §3 specifies **Fraunces** (display), **IBM Plex Sans** (text) and **IBM
Plex Mono** (data). All three are SIL OFL and all three are correct choices.

**None ship in this repository**, because the environment has no outbound network and font
binaries cannot be fetched or generated here. Rather than link a CDN URL that cannot be
verified, the site ships on the fallback chains from §3.2 — chosen so a Fraunces failure lands
on Iowan Old Style or Palatino rather than on Times.

**The site is complete and looks intentional as shipped.** Installing the real faces is a
one-line change, documented in `site/fonts/README.md`. Budget when installed: ≈70 KB.

🔶 **HUMAN ACTION.** Download the three families into `site/fonts/`. When they land, look at two
things: the **11px pool rail tag inside the summary facsimile** (the tightest text on the site,
4.62:1, and it may not be made smaller or lighter) and the **season stamp in the navy strip**. If
the stamp reads thin, move it to 14px — near-miss 4 above, and **not** the colour.

#### The mono install was blocked. It is not any more.

**The finding, 2026-08-05.** `visual-direction.md` §3.1 buys the third family with a promise:
Plex Mono ships uppercase, digits and a short punctuation list only, under 8 KB. CSS font
matching is per-character, so any character inside the declared `unicode-range` whose glyph is
missing falls through to the next family **for that character alone** — a face change inside a
word, invisible until the font installs. Three components — `.foot__line` (ten footers),
`.foot__prices` (ten) and `.cta__aside` (eleven) — were set in mono and rendered in **full
lowercase**, which no version of the subset has ever contained. Four strings were rewritten
(§0.5 of `copy-deck.md`), the declared range was narrowed from a block claiming eleven characters
the file does not hold, the install was blocked, and the rest was escalated rather than decided
here, because moving three components' typeface on ten pages is a visible change and Playwright
cannot launch.

**The ruling, 2026-08-06** (`visual-direction.md` §3.1.2). **Option 1: all three move to IBM Plex
Sans. The permitted-surface list does not grow and the subset does not grow to hold lowercase.**
Mono earns a third family by being the mark of a *reading*, and a sentence is not a reading;
`Sixteen visits. Six properties. One person, and a written summary every time.` is the site's
central **claim**, and setting a claim in the face reserved for measurements borrows the data
face's authority for an argument. Growing the subset would have fixed three components and left
the mechanism intact — the reason nobody had set a paragraph in mono is that they physically
could not.

**Applied in `styles/components.css`, per §3.1.3. No markup change, no token change, no new
token:**

| Rule | Change | Why that shape |
|---|---|---|
| `.foot__prices` | Dropped `font-family` and `font-weight`. Kept the grid, `--type-small`, `tabular-nums`. | Becomes typographically identical to `.foot__note` in the neighbouring column, which is correct — they are the same kind of thing, and the mono `.foot h2` above each column is what distinguishes them. `$249+` is a price inside a sentence, not the one price figure §4.5 reserves the mono display treatment for. |
| `.cta__aside` | Dropped `font-family` and `font-weight`. Kept `--type-small` and `--ink-muted`. **Added `tabular-nums`.** | The aside carries the phone number. `[PHONE]` rendered in mono here and nowhere else, so this disposes of the hyphen risk structurally rather than by glyph-patching: **every phone number on the site is now Plex Sans.** |
| `.foot__line` | **Not a two-line family swap.** `--type-h3` / `--wt-strong` / `--lh-h3`, plus `max-inline-size: var(--measure)`. `tabular-nums` dropped, not carried over. | Mono was the only thing separating the site's central claim from the fine print directly beneath it, so the differentiation **moves from face to scale** — which is where §12 quality #1 already says this system carries hierarchy. Face was a fourth mechanism, smuggled in; removing it makes that claim true where it was slightly false. `max-inline-size` is **mandatory**: at `--type-h3` the 76-character line would run the full footer width, past the 68-character cap. `tabular-nums` was dead code — "Sixteen" and "Six" are words. **Not Fraunces**, which would give every page a second display element competing with its own `h2`s from inside a reversed panel; using a heading's size token does not make a `<p>` a heading. |

**Why this was safe to apply without a browser.** All three axes run in the harmless direction.
*Family:* all three already sat at `--type-small`, which §3.3 assigns to Plex Sans 400 — they
were the only three places on the site where a size token was used with a face the scale table
does not give it, so this is a **restoration**, not a new pairing. *Width:* Plex Mono is wider
than Plex Sans at equal size, so every affected line gets **shorter**; nothing can newly overflow
and the only components at risk — two grid cells and a flex aside — can only gain slack.
*Neighbours:* `.foot__note` already renders the target treatment directly beside `.foot__prices`
and beneath `.foot__line` on every page.

**Contrast: nothing to recompute.** Colour and ground are untouched. `.foot__line` is `--paper`
on `--season-ground` — **12.05:1** on navy, **7.57:1** on the off-season slate. The ratio is
size-independent, and the size *increase* moves the line from "14px normal text needs 4.5:1" to a
comfortable margin at 20px+.

**The subset grew by two glyphs, not an alphabet:** `U+002D` (hyphen, for `MID-SEASON`, a genuine
mono hyphen in `.defs dt`) and `U+2013` (en dash, for `MAR 1 – OCT 31` and the strip label, which
`visual-direction.md` §2.3 and §4.5 specify with an en dash). ≈100 bytes — inside the rounding, so
mono stays under 8 KB, the font total stays ≈70 KB, and the §3.1 exception paragraph holds
verbatim. `site/fonts/README.md` is regenerated from §3.1.1B and the install is unblocked.

#### The three invariants, verified 2026-08-06

Each is checkable by reading files. None needs a browser and none needs the font binaries — which
is the point, because neither is available here.

| # | Invariant | Method | Result |
|---|---|---|---|
| **1** | Every rule setting `font-family: var(--font-mono)` also sets `text-transform: uppercase` | Comment-stripped parse of every declaration block in `tokens.css`, `base.css`, `components.css` | **PASS — 10 of 10.** `.stamp, .rail`, `.figure`, `.skip`, `.lockup__type`, `.season__label`, `.s16__months`, `.report__h`, `.form legend`, `.foot h2`, `.defs dt`. Zero mono rules without it. |
| **2** | No mono string contains an out-of-set character **as rendered** | Extracted the text of all **220** elements carrying a §3.1.1A class across all ten pages, uppercased, diffed the character set against the 49 | **PASS — no offenders.** Includes the `[`/`]` case: `[PHONE]` and `[EMAIL]` lived only in `.cta__aside`, which is no longer mono. |
| **3** | The declared `unicode-range` **equals** the shipped glyph set rather than exceeding it | Expanded the range to a codepoint list and compared it to the §3.1.1B table | **PASS — 49 == 49, set-equal.** `U+0020, U+0024, U+0028-0029, U+002B-003A, U+0041-005A, U+00B7, U+2013-2014`. |
| — | The list itself: classes setting `--font-mono` diffed against §3.1.1A | Same parse as invariant 1 | **PASS.** Eleven classes across ten rules, covering all eight §3.1.1A rows exactly. No component holds mono without a row. |

Invariant 1 is the load-bearing one: it converts "does the subset cover the content?" — a
question needing every string on ten pages — into one grep. Content changes weekly; the rule list
does not. Invariant 3's asymmetry is deliberate and only ever resolves one way: an unused glyph
costs bytes, an over-claimed range costs a face change mid-word, so **when the two differ, shrink
the range.**

**One documentation note for `wpc-brand`, not a defect.** The §3.1.1B *table* has no explicit
hyphen row — it reaches 48 rows, and the hyphen arrives only via the prose under the table
("`U+002B-003A` … holds `+ , - . /`") and via the stated count of 49. Both the `--unicodes`
command and the `unicode-range` include it and expand to exactly 49, so the spec is internally
consistent and this file regenerated from the command as instructed. But anyone regenerating from
the *table* alone would produce 48 glyphs and drop `U+002D` — which is one of the two the ruling
exists to add. A `| Hyphen | `-` | U+002D |` row would close it; `site/fonts/README.md` already
ships one.

The full write-up, with the exact `@font-face` block and the subsetting command, is in
`site/fonts/README.md`.

### 11.6 Security

`rules/web/security.md`, applied to a static site with no server of its own.

- `_headers` ships CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and
  `Permissions-Policy` in Netlify / Cloudflare Pages format, with the Apache and nginx
  equivalents commented beside them.
- The CSP is `default-src 'self'` with **no** `'unsafe-inline'` for scripts, `object-src 'none'`,
  `frame-ancestors 'none'`, `base-uri 'self'`, and `form-action` pinned to `[FORM_ENDPOINT]`.
  `img-src` allows `data:` for the grain. `style-src` is `'self'` only — there is no inline
  `<style>` and no inline `style=` attribute anywhere in the site.
- Both scripts are external and same-origin. There is no `innerHTML`, no `eval`, no template
  interpolation, no `document.write`, and **no user input reaches the DOM**.
- No third-party script, no analytics, no font CDN, no tag manager, no embed, no iframe.
- Forms carry a honeypot; rate limiting belongs to the form service.

---

## 12. `design-quality.md` — the required qualities, and how this build delivers them

The rule asks for at least four of ten. This build delivers **eight**, and declines two on the
record. All eight survived the re-baseline; three of them changed mechanism, and those are
marked 🔁.

| # | Quality | How it is delivered here |
|---|---|---|
| **1** | **Hierarchy through scale contrast** | `--type-body` is 17px; `--type-display` reaches 100px. A **5.9× jump**, with rail labels at 11px mono against it — a 9× span across one page. Hierarchy is carried by size only. No heading anywhere is distinguished by being bold-and-grey. |
| **2** | **Intentional spacing rhythm, not uniform padding** | Five non-interchangeable vertical gaps — `--space-row` 12px, `--space-entry` 24px, `--space-block` 32–56px, `--space-section` 64–160px, `--space-chapter` 96–256px — with a rule enforced in review that **no two adjacent levels of hierarchy may use the same gap.** Only the season divider gets `--space-chapter`, once per page. |
| **3** | 🔁 **Depth and layering** | Five mechanisms, none of them elevation: the **bleed track** (grid columns 11–12) runs the masthead plate off the right edge past the container; the **navy status strip** now overlaps the masthead as a solid reversed band rather than a paper one, which is a stronger overlap than before; the summary facsimile is **inset** on `--paper-deep` between two hairlines; the season strip breaks out of the measure to the full container; and a fixed 4% fractal-noise grain multiplies over everything. |
| **4** | **Typography with a real pairing strategy** | A display old-style serif against the IBM Plex superfamily — one type system plus a display face, not three unrelated fonts. Every axis pinned rather than defaulted (`"opsz" 120, "SOFT" 0, "WONK" 0`), tracking and leading specified per role, `tabular-nums` on every price, date and count so the ledger columns do not shimmy. The mono is what makes `$279` and `VISIT 07 OF 16` read as readings rather than claims. |
| **5** | 🔁 **Colour used semantically** | The **ember ramp is a monopoly on "act"** — one colour, one meaning, three lightnesses chosen by ground, and the choice is made by a **token rather than by an author**: `--mark` is the decision colour, declared per surface in the same block that sets that surface's background, so the finding rule and the focus ring resolve to the ramp step their ground requires without anyone remembering to. The retired ochre flag is folded into it, so the focus marker, the finding rule and the price a customer says yes or no to are the same value on the same ground. `--season-support` teal appears **only where a pool does**, and has no off-season existence because there is no off-season pool work. And the whole palette flips on the calendar, so the page tells you whether the business is open before you read a word. |
| **6** | **Designed hover / focus / active states** | Hover makes **three coordinated changes on one gesture**: the row fills `--wash`, the hairline beneath thickens by `scaleY(2)` and takes `--season-ground`, and the label translates 2px right. Focus draws an outline **plus a filled 6px square in the rail** — the brand's own notation for a finding. It inverts to `--paper` on both reversed panels rather than being dropped on them. Active drops 1px and darkens the rule. |
| **7** | 🔁 **Grid-breaking editorial composition** | An asymmetric **rail-and-measure** page: 12 columns, never twelve equal cells — rail 1–3, measure 4–10, 11–12 a live **bleed track**. The display headline starts flush with the rail, one column *left* of the body it introduces. **New: the sixteen-tick season strip breaks out of the 68ch measure to the full container**, so the one element that carries the argument is also the one that visibly refuses the reading column. |
| **8** | **Texture and atmosphere** | A 4% `feTurbulence` paper grain as an inline data-URI with **no network request**; a **two-weight hairline system carrying four meanings** (`1px --rule` separator, `1px --ink` boundary, `2px var(--mark)` finding, `2px --season-support` pool disclaimer) doing more visual work than any image on the site; and the hand-set **survey-tick season divider**, whose ticks halve and whose gaps double off season, so the ornament itself gets sparser when the business is closed. |

**Not claimed, on the record:**

- **#9 Purposeful motion.** Motion here is deliberately near-absent, and the season strip is
  explicitly forbidden from animating. Claiming motion as a design quality on a site this still
  would be dishonest.
- **#10 Designed data display.** There is no data visualisation. The season strip is a typeset
  schedule and the single figure is a typeset price; dressing either as a chart would be exactly
  the dashboard-by-numbers the rule warns against, and the brief forbids it by name.

### Against the banned-pattern list

| Banned | Refused by |
|---|---|
| Default card grids with uniform spacing | **There are no cards.** No `.card` rule and no `class="card"` in any page. Content units are ledger entries: rail label, measure, hairline. |
| Stock centred hero with a gradient blob | Left-aligned masthead, headline breaking the grid left, plate bleeding off the right edge, a live slot count and a sixteen-tick schedule where the generic CTA would be. Gradients are banned outright and none appear. |
| Unmodified library defaults | No library. Every font axis, tracking value, leading, gap, radius and duration is a named token with a stated reason. |
| Flat layouts with no layering | Bleed track, reversed sticky band, inset facsimile, measure-breaking strip, grain layer. |
| Uniform radius, spacing and shadows | Radius `0` by default with two meaningful exceptions capped at 3px; five non-interchangeable spacing tokens; shadows on exactly two elements, both of which physically overlap something. |
| Safe grey-on-white with one decorative accent | The ground is warm stock `#F4F0E6` and is never white; the ink is a navy-cast near-black and is never `#000`; orange is a semantic monopoly at three grounds-appropriate lightnesses; teal is confined to the pool; two seasonal states. |
| Dashboard-by-numbers | No dashboard, no sidebar, no charts. The season strip is explicitly built not to become one. |
| Default font stacks used without a reason | Argued in `visual-direction.md` §3.2 and reproduced in `tokens.css` with the reasoning in a comment. |
| Defaulting to dark mode | **Both seasonal states are light.** The product happens outdoors in Ohio daylight, on paper, in a truck. |

---

## 13. Responsive behaviour

| Breakpoint | Layout |
|---|---|
| **≥1024px** | Rail and measure side by side. Bleed track live — the masthead plate and the season divider run off the right edge past the container. Status strip sticky. |
| **768–1023px** | Rail collapses to a mono label line sitting *on* the rule above each entry. Bleed becomes full-width. Status strip sticky. |
| **<768px** | Single column, 20px side margin. Hairlines run full-bleed to the margins so the ledger read survives. Rail labels sit above each entry. Header is **static**, not sticky, so it does not eat a phone viewport; the footer carries the full nav. |

Verified by reading the CSS at 320, 375, 768, 1024, 1440 and 1920. No horizontal overflow: the
container is `max-width` with `padding-inline`, the bleed uses `margin-right` against a clipped
`overflow-x: clip` on `main` rather than a negative viewport-width trick, and the season strip is
a 16-column grid of `minmax(0, 1fr)` so the ticks compress rather than push.

The season strip at 320px puts sixteen 2px ticks and eight month labels across ~280px. The ticks
survive; the month labels are the tightest type on the page at that width, and they are
`aria-hidden` reinforcement of a caption that says the same thing in words, so their failure mode
is cosmetic rather than informational.

---

## 14. Verification performed, and what could not be verified

**Done here:**

- Served with `python3 -m http.server` and every page and asset fetched — **all 20 files plus the
  directory root returned 200**, including the three favicons, `js/forms.js`, `robots.txt` and
  `sitemap.xml`.
- Gzipped byte counts re-measured with `gzip -c <file> | wc -c` on the shipped files after the
  2026-08-06 mono ruling and recorded in §11.2 — **every one of the eighteen assets, not a
  carried-forward figure.** CSS **20,269 B gz** against a 30 KB budget (66%); JS **1,444 B gz**
  against 150 KB and unchanged, since no script was touched. Code-only CSS is **6,766 B**, which
  is **7 B smaller** than before the ruling: the three typeface moves delete seven declarations
  and add four, so the whole +563 B is the comment explaining why `.foot__line` is
  heading-sized in a footer and why its `max-inline-size` may not be removed.
- 🔁 **The mono contract's three invariants all pass** (§11.5): 10 of 10 mono rules carry
  `text-transform: uppercase`; 220 mono-surface elements across ten pages contain no character
  outside the 49-glyph subset as rendered; and the declared `unicode-range` is **set-equal** to
  that subset rather than exceeding it. `site/fonts/README.md` is regenerated from
  `visual-direction.md` §3.1.1B and **the mono install is no longer blocked.**
- **Contrast recomputed from scratch as a full matrix** — every token against `--paper`,
  `--paper-deep`, `--wash` and `--season-ground`, in both seasonal states, from the sRGB
  relative-luminance formula, at four decimal places. §11.4. **Every published ratio in
  `visual-direction.md` §2 reproduces, including the six restated on 2026-08-05.** One two-decimal
  rounding disagreement (`5.4248`, published as `5.43`) is flagged rather than silently corrected.
- Tag balance, heading order, single `<h1>`, and `aria-labelledby` target existence re-verified
  programmatically across all ten pages after every edit in this pass: zero defects. The skip
  link, focus order, form labelling, `aria-describedby` wiring, honeypot, and the
  written-into-the-page error sentences are untouched — **no accessibility affordance was
  changed**, and `--mark` is exactly as the ruling left it.

- **Copy edits verified by count, not by eye.** Every replacement in this pass was applied by a
  script that declares in advance how many times a string must occur and across which files, and
  aborts before writing if the count is wrong. Thirty-three rules across the ten pages, thirty-one
  across `copy-deck.md`, all matched exactly. That is what makes "ten `tick--done` on four pages"
  a checkable claim rather than a hopeful one.

- **Mono subset conformance swept programmatically**, which is what turned one flagged apostrophe
  into a complete answer. Every string that renders in Plex Mono was extracted, uppercased where
  the stylesheet uppercases it, and diffed against the shipped glyph set. **Every apostrophe and
  question mark is gone**, four labels having been rewritten rather than the subset grown. The
  declared `unicode-range` was **narrowed to the actual glyph set** — it had been claiming eleven
  characters the file does not contain, which is the mechanism by which an apostrophe rendered in
  Consolas inside a Plex Mono word. What the sweep could not settle — three lowercase surfaces
  `visual-direction.md` §3.1 does not license for mono — was escalated rather than patched, and
  🔁 **ruled on 2026-08-06: `.foot__line`, `.foot__prices` and `.cta__aside` are now Plex Sans**
  (§11.5). The en dash and the hyphen joined the subset, the `[PLACEHOLDER]` brackets left mono
  with `.cta__aside`, and **all three invariants now pass** — 10/10 mono rules carry
  `text-transform: uppercase`, 220 mono elements hold no out-of-set character, and the declared
  range is set-equal to the 49 shipped glyphs. The install is unblocked.
- **Ground-based re-sweep, per §12.2.** For every coloured element, every surface it renders on
  was enumerated — including hover states, `:user-invalid`, and both seasons — and the worst one
  satisfied. Four defects fixed and one divergence flagged; all five are written up in §11.4.
- Verified by grep that **`var(--mark)` is the only colour appearing in an `outline` or in a
  decision-mark `border`/fill anywhere in the site**, and that no `var(--ember)`,
  `var(--ember-deep)` or `var(--ember-lift)` appears in one. **Thirteen non-text ember literals
  remain**, every one of them a control, a status stamp, or the season strip's schedule square
  that §4.5 exempts by name: `.skip`, `.season__label` and its square, `.slots__full` (×3),
  `.btn` (×2), the two ticks, the two invalid-field borders, and the checkbox `accent-color`.
  None is a decision mark and each was checked against its own ground.
- Verified that **every rule that sets a `background-color` also sets `--mark`**, or is a control
  whose ring lands on its parent's ground. **Eight surfaces declare it**: `:root`, the two
  `--wash` hover fills, `.report__sheet`, `.plate`, `.strip`, `.skip` and `.foot`.
- ~~Verified programmatically that no focusable element sits on a `--paper-deep` ground.~~ **This
  check is retired as a safety argument.** It still passes, and it is still a good markup habit,
  but the Off Season state aliases `--wash` to `--paper-deep` and can put a focusable on that
  ground without any markup change, so nothing may depend on it. `--mark` replaces it.
- Verified that **`--ember-lift` appears in exactly three rules** — `.lockup__word`,
  `.season__stamp` and the switch's 6px square, all inside the navy status strip — that the
  square's hover state now overrides itself to `--paper`, and that the footer uses the
  knocked-out lockup rather than a wordmark that would land on the Off Season slate.
- CSS class coverage swept both ways: **zero classes used in markup without a rule**, and **one
  rule without a use — `.tick--done`, deliberately.** It is the only exception in the stylesheet
  and it is commented as one. An `--ink` tick means *a visit already delivered*; the state is real
  the day a member reads their own record and it may not appear on a public page before then. An
  unused rule is normally something to delete, which is exactly why it carries a comment saying
  why it is not: without one, the next person needing a delivered-visit state re-invents it, and
  re-invents it on `index.html`.
- Token coverage swept both ways: **zero `var(--x)` references to an undefined token, and zero
  defined tokens with no reference.** Exactly one colour literal exists outside `tokens.css` — it
  does not; it was moved into `tokens.css` as `--img-edge` during this pass.
- JSON-LD parsed with a real JSON parser after editing, and re-checked property by property —
  `seo.md` §3.
- Copy grepped for every retired string: `$229`, `$269`, `$289`, `$329`, `Green Season`,
  `Dormant`, `same price in January`, `twelve months`, `year-round` as a membership claim, bare
  `WPC` not followed by `513`, `139.50`, `69.75`, and the stale pool line *"I don't vacuum,
  brush, backwash, or touch the filter."* **Zero hits in rendered copy, and zero in source
  comments.**
- Copy grepped against `voice.md` §6.1–§6.7. The only hits are `"a licensed trade"` (referring
  work *out* to a trade that requires a licence, which is correct and is not a claim about him)
  and the deliberately quoted `"within 24 hours"` in the reply commitment, which quotes the
  banned phrase in order to refuse it.
- First-person-plural sweep: every `we` / `us` on the site was read by hand and each one can only
  mean *you and me* — "we'll walk it together," "the schedule we set when you sign," "either of
  us," "one of us owns the water." Zero instances where "we" could be swapped for "the company."
- Every price traced to `00-model/pricing.md`: `$279`, `$249+`, `$49+`. The internal figures
  ($100/hr, the $149 floor, $139.50) confirmed absent.

**Not possible in this environment, and therefore not claimed:**

- No browser rendering, no screenshots, no visual regression — Playwright cannot launch.
- No Lighthouse run, so the Core Web Vitals targets are *designed for* (no render-blocking third
  party, no layout-shift source, no JS on the critical path, explicit dimensions on every
  eventual image) rather than *measured*.
- No automated accessibility audit. The claims in §11.4 come from reading markup and computing
  contrast, not from axe.
- No cross-browser check. The two modern features used — `:has()` for the season switch and
  `animation-timeline: view()` for the hairline draw — both degrade to a correct static state and
  neither is load-bearing. Without `:has()` the site opens IN SEASON and the toggle does nothing
  visible, which is the correct failure for eight months of the year and a legible one for the
  other four.

---

## 15. Open items for the owner

1. 🔶 **Shoot the seven frames in §7.** The single biggest quality lever on the site and no agent
   can produce it. Priority order if he only does three: **IMG-03** (the finding), **IMG-05** (the
   equipment pad, which is what makes the new pool scope credible), **IMG-01** (the masthead).
   Frame 6, end of season, needs shooting in late October or it waits a year.
2. 🔶 **Confirm the logo's icon, rule and small-caps colours** — §8. They ship as `--paper` and
   are marked unconfirmed in three files. If his artwork differs, his artwork wins.
3. 🔶 **Supply `[PHONE]`, `[EMAIL]`, `[URL]`, `[FORM_ENDPOINT]`, `[GBP_URL]`** — §10.
4. 🔶 **Confirm nothing already went out at $249 as a monthly price.** `CANON.md` §10.1. The site
   is $279 everywhere; the risk is a flyer in somebody's hand.
5. 🔶 **Confirm the 2026 start with pro-ration.** His agreement is headed 2027. The site says the
   season is underway and the offer is a pro-rated remainder plus a 2027 lock — `CANON.md` §10.2.
6. 🔶 **Tell the insurer what he actually touches.** Vacuuming, backwashing and salt-cell checks
   are pool-system operation. `CANON.md` §10.3. This is a coverage question, not a scope one, and
   the site now publishes the heavier scope.
7. ✅ **CLOSED 2026-08-06 — the founding rate is bounded by a date, not by a count.**
   `wpc-strategist` ruled it: any member whose **agreement is signed on or before February 28,
   2027** holds **$279 through October 31, 2027**, with **no cap on how many** — up to the whole
   book of six (`00-model/pricing.md` §2, `decisions.md` **D-27**). *"The first four clients"* is
   withdrawn. The site had never published a count, so nothing was retracted; what it published
   was **vague** — *"lock your rate for all of next year"* — and every instance is now the dated
   form. Three things the copy has to keep right, all of them on `pricing.html`: the test is the
   **signature date**, not the effective date or the first visit; **there is no limit on how many**
   hold it, said out loud so no reader infers a queue; and the date is stated as a **fact, never a
   countdown**. *"Anybody on the books before March 1"* is a fact. *"Only three weeks left to lock
   your rate"* is `voice.md` §6.5's season-closing row wearing a date instead of a count, and it is
   banned identically — which is why **no surface counts down to February 28 and the season strip
   does not mark it**. Agreements already executed under the withdrawn clause are honoured as
   written. 🔶 **Still open for `wpc-brand`:** `messaging.md` §4 carries the superseded instruction
   *"say 'clients signing now' and never assert a cap,"* flagged against a question D-27 has now
   answered.
8. 🔶 **Keep the slot count and the season strip true.** §3.1 and §6. They are the most valuable
   elements on the page precisely because they are facts.
9. 🔶 **Replace the summary facsimile with a real redacted summary** the day one exists. It ships
   labelled "format only — not a client summary" because a sample built from imagination is
   forbidden. The label comes off when the summary is real.
10. 🔶 **Install the three webfonts.** This was blocked until 2026-08-06 and is not any more —
    `site/fonts/README.md` carries the subsetting command, the exact `@font-face` block, and the
    49-glyph contract. Subset the mono with the published `--unicodes` line rather than retyping
    it from the glyph table. Then look at two things in Plex Mono: the **11px pool rail tag inside
    the summary facsimile** and the **season stamp in the navy strip** — §11.4 near-miss 4 and 5.
    If either reads thin the answer is size, never colour. The pool teal may not be lightened and
    pool text may not go below 11px; the stamp goes to 14px, not to a different orange. And look
    at the footer once: `.foot__line` is now the only heading-sized paragraph on the site and it
    is deliberate (§11.5).
10a. 🔶 **Tell whoever produces the real service summaries about the address slot.** The record
    stamp is Plex Mono and the subset has no apostrophe, so `O'BRIEN CT` and `ST. MARY'S LN` — both
    ordinary west-side addresses — break it mid-word. Strip or transliterate at the point the value
    is produced: `OBRIEN CT`, `ST. MARYS LN`. §10.1.
11. 🔶 **Do not paste the insurance or LLC wording** until the policy is bound and the Articles
    are filed. Approved wording is held in `copy-deck.md` §9, unused.

**Two items for `wpc-brand`, both flagged rather than resolved here** (§11.4):

12. 🔶 **`--paper` on an `--ember-deep` fill computes to 5.4248, i.e. 5.42.** §2.1 publishes it
    as **5.43**, twice. Nothing turns on it — the margin to 4.5 is 0.92 — but two documents should
    not carry different numbers for the same pair.
13. 🔶 **`.pull` is a fifth meaning on the 2px weight** — a left margin rule in `--season-ground`,
    the same gesture as the finding rule in a different colour. Kept and enumerated rather than
    silently changed, because §5.2's own diagnosis is that under-enumeration is what let the
    `--mark` defect survive. And 🔶 **§6's "satisfy the worse of the fill and the gap" has no
    solution for a solid button** and would benefit from saying that the ground for an element's
    own ring is its parent's background.

---

## Related files

- `copy-deck.md` — every word on every page, both enrolment states, both seasonal states
- `seo.md` — titles, descriptions, JSON-LD, service area, and why SEO is secondary here
- `01-brand/visual-direction.md` — the design brief this implements, and the palette §11.4 checks
- `01-brand/messaging.md` §1 — *the sixteenth visit*, which §6 draws
- `01-brand/voice.md` §8 — the checklist all copy passed
- `00-model/pricing.md` — every price on the site
- `CANON.md` §3 — the price, the season, the cap, the capacity
