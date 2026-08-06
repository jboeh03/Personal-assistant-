# Copy Deck

**Owner:** `wpc-web` · **Status:** every word that appears on the site, paste-ready
**Audited against:** `01-brand/voice.md` §8 — items 1–30 against the prose, 31–34 and 35–42
against the built surfaces
**Prices quoted verbatim from:** `00-model/pricing.md` — **`$279` · `$249+` · `$49+`**, and
nothing else

Placeholders in `[BRACKETS]` are listed once in `site-spec.md` §10. Replace them; never ship
them.

> **Re-baselined 2026-08-05.** Every page in this deck was rewritten. Six things changed and each
> one moved copy on multiple pages:
>
> | Change | Pages it touched |
> |---|---|
> | **One price: $279.** The four-row ledger and $229 / $269 / $289 / $329 are deleted. | Home, Pricing, Membership full, Waitlist, Apply, About, 404 |
> | **The season: March 1 – October 31, sixteen visits.** No winter service in the membership. | All ten |
> | **The two-hour cap**, and its three clauses, which it never travels without. | Home, What's included, Pricing, Membership full |
> | **The heavier pool scope.** *"I don't vacuum, brush, backwash, or touch the filter"* was true, is now false, and appeared on six pages. | Home, What's included, Pricing, About, Projects, Membership full |
> | **The name.** Full on first reference per surface; **WPC513** after; bare "WPC" nowhere, including alt text, slugs and structured data. | All ten |
> | **The differentiation argument.** *"The same price in January as in July"* appeared ~30 times including the footer of nine of ten pages. Replaced by **the sixteenth visit**, substituted line for line rather than deleted. | All ten |

**Two enrolment states and two seasonal states are written.** §§1–7 are the **open-enrolment**
state. §8 is **MEMBERSHIP FULL**, written as a complete page rather than a banner bolted onto
the open one. The **OFF SEASON** copy is marked `[OFF SEASON]` wherever it appears and is reachable
state by the season toggle in the status strip.

---

## 0. Global — appears on every page

### 0.1 Status strip

The strip is navy in both seasons and carries the logo lockup on the left, the season stamp and
the season toggle on the right.

**Lockup, as typeset:**

```
[house-and-tree line mark]   WPC 513
                             ─────────────────────
                             WESTSIDE PROPERTY CARE
```

The link's accessible name is **`Westside Property Care 513 — home`**, so the full name is the
first reference on every page and bare "WPC" never reaches an accessibility tree.
`WPC 513` with a space exists **only** inside the lockup, which is the one place
`brand-brief.md` §1.2 permits it.

**Season stamps — typed in caps and rendered in caps.** One shows at a time.

```
IN SEASON · MAR 1 – OCT 31
OFF SEASON · NOV 1 – END OF FEB
```

**Season toggle label.** One shows at a time, rendered uppercase by the stylesheet:

```
See off season
See in season
```

**Skip link:** `Skip to the main content`

### 0.2 Navigation

```
Home   What's included   Pricing   Projects   About   Apply
```

In the MEMBERSHIP FULL state, **Apply** is replaced by **Waitlist**. Nothing else changes.

### 0.3 Footer — every page

Column 1, under the lockup:

```
Seasonal Outdoor Living & Property Care

Six homes on the west side of Cincinnati — Green Township, Oak Hills, upper Delhi,
and Covedale.
```

The tagline is verbatim and on its own line. It is never rewritten, never shortened, and never
given a verb.

Column 2:

```
GET HOLD OF ME

[PHONE] · texting is fine
[EMAIL]
```

Column 3:

```
PROJECT WORK, NO MEMBERSHIP NEEDED

Grill and outdoor kitchen deep clean — $249+
Window well cleanout — $49+
```

Footer nav: `Home · What's included · Pricing · Projects · About · Apply · Waitlist`

**The closing block, and this is the substitution that matters most:**

```
Sixteen visits. Six properties. One person, and a written summary every time.

March 1 through October 31. No scheduled visits November through February, and no
billing either.
This is new. I'd be starting with you.
```

> **This is `messaging.md` §1.5, last row, verbatim.** The retired line —
> *"Two scheduled visits a month. The same price in January as in July."* — sat in the footer of
> nine of ten pages, and its job was to explain why this is a **membership** rather than a
> seasonal service. Deleting it and leaving a gap would have cost that argument on every page at
> once. It was **substituted**, not removed, and the second paragraph carries the season and the
> honest disclosure that used to sit beside it.

### 0.4 Image-plate captions — seven slots, and they are customer copy

No photograph exists yet, so every image slot ships as a ruled empty plate with a caption. **The
caption is written to a visitor.** The shot instruction lives in the HTML comment above the figure
and in `site-spec.md` §7, and it must never render.

| Slot | Page | Caption |
|---|---|---|
| IMG-01 | Home, Membership full | A photograph goes here. There aren't any yet — the real one is a pool deck mid-visit, shot standing, with my own equipment still in the frame. |
| IMG-02 | What's included | A photograph goes here. There aren't any yet — the real one is my hands working: the skimmer net breaking the surface, or the grease tray coming out of a flat-top. |
| IMG-03 | Pricing | A photograph goes here. There aren't any yet — the real one is something I found and would rather you saw: a window well packed with leaves, or a skimmer basket lifted out full. |
| IMG-04 | Home, Membership full | A photograph goes here. There aren't any yet — the real one is a service summary open on a phone, with the address taken off. |
| IMG-05 | What's included | A photograph goes here. There aren't any yet — the real one is the equipment pad: the salt cell display, the pump baskets out, the backwash valve. **Westside Property Care 513 does not guarantee water chemistry, water clarity, equipment performance, or pool-system operation unless separately contracted.** |
| IMG-06 | Projects | A photograph goes here. There aren't any yet — the real one is a grill or an outdoor kitchen in the same frame before and after, same position, same light, same day. |
| IMG-07 | About | A photograph goes here. There aren't any yet — the real one is the mark on the truck door in daylight, with the equipment behind it. |

> **These captions used to be the shot list, rendered in caps.** `.plate__cap` carried
> `class="rail"`, which inherits `text-transform: uppercase`, so on seven pages a visitor read
> `PHOTO REQUIRED · FRAME 3 · A GENUINE FINDING — … DON'T CLEAN IT BEFORE SHOOTING IT.` That is
> him talking to himself, published as copy, in the treatment reserved for status stamps. It is
> the exact failure `voice.md` §3's non-prose surface rule exists to catch: nobody wrote it *as*
> copy, so nobody audited it *as* copy. **IMG-05's caption carries the pool disclaimer in full**
> — it describes the equipment pad, and item 41 does not exempt captions.

### 0.5 Rail labels — the marginalia, and the one constraint they carry

The rail is the narrow left column of mono marginalia — one label per entry, rendered in caps by
the stylesheet. **A rail label names the section a scanner is about to read, and a scanner reads
it before the heading.** So it is copy, it is audited as copy, and it carries one extra
constraint nothing else on the site does.

**Plex Mono ships subset to uppercase, digits and `. , : · $ + — / ( )`** (`visual-direction.md`
§3.1, `site/fonts/README.md`). Anything outside that set falls through to a different monospace
face for that character alone — a face change inside a word. **Rail labels are therefore written
without apostrophes and without question marks.** Four were rewritten for this:

| Was | Now | Where |
|---|---|---|
| `IF IT DOESN'T FIT` | `ROUTE FIT` | Apply |
| `WHAT I'M LIKE` | `TRUST` | About |
| `WHEN IT'S CHARGED` | `WHEN THE CARD IS CHARGED` | Pricing, billing definition list |
| `WHAT DOES THE PROPERTY HAVE?` | `WHAT THE PROPERTY HAS` | Apply and Waitlist, fieldset legend |

And one was rewritten for a reason that has nothing to do with fonts:

| Was | Now | Why |
|---|---|---|
| `PER HOUR` | `THE ARITHMETIC` | It sat on the handyman rebuttal on the pricing page. The rail names the section, so the label presented **$279 as a rate** before a word of the rebuttal was read — the one string in that section doing the opposite of the section's job, and a direct hit on `voice.md` §3's hours-arithmetic rule. The body below it was already correct. |

---

## 1. Home — `index.html`

### 1.1 Masthead

**Rail:** `Entry 01 · The whole thing`

**H1:**

> # Sixteen visits. Six properties. Written down every time.

**Lede:**

> **Westside Property Care 513** — seasonal outdoor living and property care on the west side. I
> take care of the outdoor living areas of six homes: pool deck, patio, outdoor kitchen, and the
> hardscape and walks that serve them. Two scheduled visits a month from March 1 through October
> 31, the same person every time, and a short written summary the same day covering what I did
> and what I found.
>
> **$279 a month.** That's the whole price list.
>
> Not lawn care. Not pool service — I take care of the pool area but I don't guarantee the water.
> Everything I don't do is on this page, above the price.

**Note on what is deliberately absent here: the hours.** *(Corrected. The previous version of
this note asserted a rule that does not exist and attributed it to two files that do not say it.
It read: "`CANON.md` §3 and `pricing.md` say the price and the cap must not appear in the same
breath." Neither does, and the note contradicted the page it documents.)*

**There is no rule against the price and the cap appearing together — the required form puts them
in one block.** `voice.md` §3, the hours-arithmetic rule, prints the approved wording as a single
paragraph carrying the visits, the cap, both clauses, the no-rollover clause and `$279`.
`messaging.md` §3's section order lists item 4 as *"The price, with the two-hour cap and both its
clauses."* The shipped `.onefig` block at §1.8 does exactly that and is the model for every other
surface.

**What is actually banned is the division.** `$279 ÷ 4 hours` is an hourly rate and invites
comparison with a handyman, so copy never performs it (`voice.md` §3). What `CANON.md` §3 says is
narrower and different: *"Lead with what stays maintained; state the cap where a boundary
belongs."*

So the masthead is a sequencing decision, not a prohibition. It is the ten-second read, so it
carries what stays maintained and the price; the cap arrives forty lines later at §1.8, in the
one component that cannot state it without all five clauses. Both are correct.

**Enrolment stamp — open:**

> **6 of 6 spots open**
>
> All six spots are open. This is new and I'd be starting with you.

**The ask:**

> [ Text me your cross street ]  ·  [PHONE] · texting is fine

### 1.2 The season strip

Sixteen ticks, two per month, March through October, with the months beneath.

**Label:** `16 visits · Mar 1 – Oct 31`

**Caption, in season:**

> Two a month, March through October. The filled square is where the 2026 season sits now. The
> season's underway, so I'll pro-rate what's left of it. Anybody on the books before March 1, 2027
> holds $279 through the end of the 2027 season.

**The sixteen ticks are the shape of the season, not a delivery record.** All sixteen ship as
`--rule`; exactly one, the current calendar position, is the `--ember` square. `--ink` ticks mean
*visits already delivered* (`visual-direction.md` §4.5) and ten of them shipped on four public
pages while the book had nobody in it — the caption said "visit dates," which was honest, and the
drawing said "ten visits done," which was not. `tick--done` is reserved for a member's own record.

**On the MEMBERSHIP FULL page the caption stops after the first two sentences.** Pro-ration and a
rate lock are terms on a slot, and in that state there is no slot. See §8.1a.

`[OFF SEASON]` **Caption, off season:**

> **NEXT SEASON OPENS MARCH 1**
>
> Nothing is scheduled November through February and nobody is billed for it. The next season
> opens **March 1** — sixteen visits, two a month.

**What this copy must never become:** "only six visits left," "last chance before the season
ends," "sign before March or wait a year." The season ending is a fact; it is not a deadline he
gets to use (`voice.md` §6.5). **The count of dates already past was cut for the same reason** —
"ten of the sixteen are already gone" is §6.5's season-closing row with the arithmetic done for
the reader, and the pro-ration sentence never needed it.

### 1.3 The argument — the sixteenth visit

**Rail:** `The argument`

> ## You're not buying sixteen visits. You're buying the sixteenth one.
>
> The visit where I already know which gate sticks, which well fills, and what the maple does in
> September, because I wrote down the other fifteen.
>
> By the fourth visit I know your property. By the sixteenth I know what it's going to need next
> March. Six properties is few enough to hold in my head, and sixteen written summaries a season
> mean I don't have to.
>
> There's no crew, no dispatcher, no route number, and no subcontractor. It's me, on your route
> day, on the part of the yard you actually sit in.

### 1.4 What actually happens on a visit

**Rail:** `Scope`

> ## What actually happens on a visit
>
> **Maintain everything. Deep-clean nothing unless it's specifically scheduled.** That's the rule
> I work to, and it decides most of what follows.
>
> I walk the property before I start and again before I leave. In between I do what will make the
> biggest difference that day — which is not the same list every time, and a visit in early March
> with the cover just off looks nothing like one in late August.
>
> Read the eight parts below as what the work is.
> Completion of every possible task during every visit is not guaranteed, and a checklist is
> something I'd fail the first week it rains.

**The eight parts.** Rail label, then heading, then the work. This block is identical on Home and
on What's included, deliberately — it is the most concrete thing on the site and it should not
drift between two pages.

**ARRIVAL — The walkthrough**
> Walk the outdoor living areas before I start anything. Storm debris, leaves, sticks, trash, and
> whatever is obviously wrong. A look over the equipment pad and the outdoor kitchen. Before
> photos where they are useful, and a note of anything that needs your approval before I touch it.

**UP TO 30 MINUTES — The pool area, where there is one**
> Skim the surface. Brush the steps, the corners, and selected areas. Vacuum, stopping at about
> thirty minutes of total pool time. Empty the skimmer basket, the pump basket where it is safe
> to, and the robot's debris container. Backwash when it is appropriate and compatible with the
> system. Check the displayed salt level and the system indicators, look for an Inspect Cell or
> No Flow warning, and look the equipment over.
>
> What I do not do is test or balance the water, or add chlorine, shock, salt, or algaecide.
> Chemicals, salt, filters, and cartridges are materials, not membership items, and filter
> servicing beyond a backwash is a separate job.
>
> **Westside Property Care 513 does not guarantee water chemistry, water clarity, equipment
> performance, or pool-system operation unless separately contracted.**

**KITCHEN — The outdoor kitchen and the grill**
> Counters and accessible surfaces wiped. Light grease and food residue removed. Grease trap or
> drip pan emptied when it needs it. Grill exterior wiped, cooking area checked for buildup and
> for nesting. Burners, grates, flavorizer bars, and interiors are a deep clean, which is a
> separate job from $249.

**PATIO — The patio and the furniture**
> Tables and chairs wiped. Cushions straightened and reset. Obvious cobwebs cleared. Light
> cleanup around the seating areas.

**CLEANUP — The property around it**
> Sticks and small branches collected. Concentrated leaf and debris pockets cleared. Visible
> trash picked up. Designated areas swept or blown. The walkways serving the outdoor living area
> checked.

**TRASH AND POTS — Trash, plants, and the small recurring things**
> Designated outdoor cans emptied into your containers and wiped down when they need it. Pots and
> container plantings watered if you want them watered. Spot treatment of the weeds in the
> hardscape joints, the walkway cracks, and along the bed edges — not inside the beds. Whatever
> small thing you have asked me to keep an eye on.

**PRIORITY — The flexible block**
> Extra time on the pool, a heavier debris pocket, a furniture detail, a seasonal need, or a small
> maintenance item you have already approved. This is where the difference between a service and
> a checklist shows up.

**CLOSE OUT — The final walk and the summary**
> A last walk of the property. Gates and areas back the way I found them. After photos where they
> are useful. Then a short written summary the same day: what I did, what I found, and what it
> costs if you want it handled.

**Onward:** *The full scope, and everything that isn't in it* → `whats-included.html`

> **The rewrite that mattered most is in the pool block.** The old copy read *"I don't test the
> water, add chlorine, shock, or algaecide, vacuum, brush, backwash, or touch the filter, and I
> don't open or close the pool."* **He now vacuums, brushes, backwashes, empties both baskets and
> reads the salt cell.** The exclusion did not get smaller — it moved. What he excludes now is not
> the *labour*, it is *responsibility for the result*, which is a harder thing to say well and is
> the reason the disclaimer is quoted verbatim and sits inside the same block as the work.

### 1.5 The record

**Rail:** `The record`

> ## Every visit ends in writing, the same day
>
> The summary is the part you can check. It says what I did, where, and what I found — including
> the things that aren't mine to fix, and especially those.
>
> If something on the property needs work, it gets named, located, and priced. I'd rather tell you
> what a job costs than quietly fold it into a visit and have you think it was included.

**The summary facsimile.** Header stamp:

```
WPC513 · SERVICE SUMMARY · VISIT 07 OF 16 · MONDAY, JUNE 15
```

> `FORMAT ONLY — NOT A CLIENT SUMMARY`
>
> **WHAT I DID**
> Pool skimmed, both baskets emptied, steps and the deep-end corners brushed. Vacuumed about
> twenty minutes — the maple seeds are heavy right now. Backwashed, the pressure was up. Salt
> reads normal, no warning lights on the cell. Wiped the six patio chairs and the table. Emptied
> the grease tray on the flat-top and wiped the counters. Blew the patio, the pool deck, and the
> walk, including under the pergola. Pots watered. The fern on the north side dries out faster
> than the others, so I moved it two feet under the eave.
>
> `POOL · NO GUARANTEE`
> **Westside Property Care 513 does not guarantee water chemistry, water clarity, equipment
> performance, or pool-system operation unless separately contracted.**
>
> **$49**
> **WHAT I FOUND**
> The two window wells on the south side are full — mostly last fall's leaves, about six inches
> deep, and there's water sitting in the west one. I can clear both on your next visit for $49.
> Say the word and I'll add it. If you'd rather leave them, that's fine and I'll stop mentioning
> it.

**Caption:**

> This is the shape a summary takes. There aren't any yet. When
> there is one, a real summary goes here with the address taken off.

> **`VISIT 07 OF 16` is the highest-value string in the facsimile.** It makes the season legible,
> it makes the record read as a series rather than a receipt, and it quietly does the work the
> retired year-round argument used to do (`voice.md` pair 12).

### 1.6 The season

**Rail:** `The season`

> ## Sixteen visits, March 1 through October 31
>
> Two a month, on your route day. The last one is the end of October.
>
> November through February there are no scheduled visits, and I'm not billing you for any of
> them. No property checks, no freeze protection, no snow, no ice. I'd rather you read that here
> than find it out in November.
>
> What you get instead is the last visit of the season, which is the one where I put the covers
> on, tell you what I'd want handled before it gets cold, and price it.
>
> Two things carry on through the winter if you want them. Project work runs year round — a grill
> deep clean before the holidays, pressure washing while the deck is empty, storm cleanup. And
> there's a separate optional winter service, which is its own thing with its own price; it isn't
> part of this agreement and it isn't included.
>
> Then your next scheduled visit is the first route day in **March**.

> 🔶 **The winter offering is named and not described.** `03-marketing/winter-service.md` has not
> been written. Until it exists, the only permitted description is *"a separate optional winter
> service, its own price, not part of this agreement."* Do not invent visits, tasks or a number.

### 1.7 What I don't do

**Rail:** `Not included`

> ## What I don't do
>
> This is the part most people put in the fine print. I'd rather you read it before you get to
> the price.

**I take care of the pool area. I don't guarantee the pool.**
> I skim, brush, vacuum, empty both baskets and the robot container, backwash when the system
> wants it, and read the salt level and the warning lights. I don't test or balance the water and
> I don't add chlorine, shock, salt, or algaecide. If it goes green in July, that isn't something
> I'm responsible for or able to fix.
>
> If you want somebody accountable for the water, hire a pool company — full service with
> chemistry runs about $121 to $142 a month around here, and I'll tell you who your neighbours
> use. One of us owns the water. I own the deck, the furniture, the kitchen, the trash, the pots,
> and the record.
>
> **Westside Property Care 513 does not guarantee water chemistry, water clarity, equipment
> performance, or pool-system operation unless separately contracted.**

**Not lawn care**
> No mowing, trimming, edging, fertilizing, aerating, seeding, pruning, planting, mulching, or bed
> work. Weed treatment is spot treatment in the hardscape joints, the walkway cracks, and along
> the edges of the beds — not inside the beds.

**Not gutter cleaning**
> Gutter cleaning means working off a ladder and I don't work off a ladder. On your visits I check
> the downspouts from the ground and tell you where they're discharging.

**Not a deep clean**
> On a visit I empty the grease trap and the drip tray and wipe the exterior surfaces and the
> counters. Burners, grates, flavorizer bars, and interiors are a grill and outdoor kitchen deep
> clean, from $249.

**Not pressure washing**
> Any surface, any time — that's quoted after I look at it.

**Nothing between November and February**
> The season is March 1 through October 31. November through February there are no scheduled
> visits, no property checks, no freeze protection, and no snow or ice service of any kind — and
> no billing either. Any separate winter service I offer is its own thing with its own price and
> is not part of this agreement.

**Not an emergency service**
> There's no guaranteed response time and no promised arrival window. Tuesday through Thursday is
> held open for projects and urgent things, so they usually do get handled — I don't promise
> same-day.

**Not indoors**
> No garages, basements, enclosed porches, or sunrooms. The membership is the outdoor living area,
> and we'll walk it together on the first visit and write down exactly what's in it.

**Onward:** *The full list, in the words it's written in the agreement* →
`whats-included.html#nots`

> **The `$121–142` market rate is used once and attached precisely.** It describes **full pool
> service with chemistry** — the product he does not sell — and it is never placed next to $279
> as a comparison he is winning. It is a referral fact, which is the one carve-out in the
> anchor-leak rule.

### 1.8 The price

**Rail:** `Price`

> ## $279 a month
>
> That's the whole price list. A property with a pool and an outdoor kitchen pays the same as a
> property with a plain patio.

**The single figure:**

```
ONE PRICE
───────────────────────────────────────────
$279  / MONTH
───────────────────────────────────────────
Two scheduled visits a month, March 1 through October 31 — sixteen visits a season
Up to two hours of on-site service each visit
Highest-priority maintenance items first, using my judgement
Completion of every possible task during every visit is not guaranteed
Unused service time does not roll over
```

**Terms beneath:**

> Card on file, charged on the schedule we set when you sign, March through October. Thirty days'
> written notice to cancel, either of us, and there's no term.
>
> The season's already underway, so I'll pro-rate what's left of it. Your rate is then locked at
> $279 through October 31, 2027 — that's for anybody whose agreement is signed on or before
> February 28, 2027.
>
> There's no limit on how many people that is. It could be all six. And it isn't a promotion —
> it's what I'm giving the people who take a chance on a business with no track record.

**Onward:** *Billing, cancellation, and the rest of the price page* → `pricing.html`

> **The five clauses ship as one indivisible block.** `voice.md` §8 item 39 requires that "up to
> two hours" travels with *highest priority first*, *completion is not guaranteed* and *unused
> time does not roll over*. Building them as one component is how that rule is enforced
> structurally instead of by remembering.

### 1.9 Where I work

**Rail:** `Route`

> ## Where I work, and why it's this narrow
>
> Green Township, Oak Hills, upper Delhi, and Covedale.
>
> The route is built around two clusters, and every property has to be close to another one I
> already take care of. Six properties is twelve visits a month, and routine visits only happen
> Monday and Friday. Past six I'd be rushing somebody — and a house twenty-five minutes out of
> position costs me the same drive twice a month for as long as they're a member.
>
> So location decides more than anything else does. If your street doesn't fit yet, I'll tell you
> that straight and put you on the waitlist, and I'll still do project work for you in the
> meantime.

### 1.10 The ask

**Rail:** `Next`

> ## Text me your cross street
>
> Two things tell me whether this works: what your property has, and where it is. Send me your
> cross street and whether you've got a pool, an outdoor kitchen, or both.
>
> If it fits, I'll come walk the property with you, show you exactly what's included and what
> isn't, and give you the price while I'm standing there. About forty minutes. You don't have to
> decide anything that day.
>
> [ Text me your cross street ]  ·  [PHONE] · texting is fine

---

## 2. What's included — `whats-included.html`

### 2.1 Page head

**Rail:** `Scope · Mar 1 – Oct 31`

> # What's included, and what isn't
>
> **Maintain everything. Deep-clean nothing unless it's specifically scheduled.** That line is off
> the footer of the checklist I carry, and it does more scope protection than a page of
> exclusions.
>
> Sixteen visits a season, March 1 through October 31. Two a month, up to two hours of on-site
> service each, highest-priority maintenance items first. Completion of every possible task during
> every visit is not guaranteed, and unused service time does not roll over.

Followed by the season strip (§1.2).

### 2.2 How the list works

**Rail:** `How the list works`

> ## Not every task happens every visit
>
> I walk the property before I start and again before I leave. In between, I do what will make the
> biggest difference that day.
>
> That's the honest version and I'm not going to pretend otherwise. A visit in early March with
> the cover just off and winter grit on everything looks nothing like a visit in late August when
> the place is dialled in and the real work is skimming and watering. Both are full visits.
>
> Each visit is up to two hours of on-site service. I spend them highest priority first, using my
> judgement. **Completion of every possible task during every visit is not guaranteed, and unused
> service time does not roll over.**
>
> That cap is why the price is the same for a property with a pool and an outdoor kitchen as for
> one with a plain patio. It's a limit on what you're buying, not a limit on how carefully I work.

> **That last sentence is the whole of `voice.md` pair 19 in one line.** The two failure modes it
> is written against: turning the ceiling into a floor — *"two full hours of dedicated service so
> nothing gets missed"* — and making speed the product — *"in and out in two hours."* The first
> gets quoted back at him the first time a visit runs ninety minutes; the second contradicts
> *never rush a property*.

### 2.3 The eight parts of a visit

**Rail:** `The visit`

> ## The eight parts of a visit
>
> This is the shape of the two hours. A property with no pool and no outdoor kitchen skips two of
> them. The price is the same either way.

Then the eight blocks, **identical to §1.4**.

### 2.4 The pool

**Rail:** `Pool`

> ## I take care of the pool area. I don't guarantee the pool.
>
> This is the block worth reading twice, because the scope changed and because it is the one
> people compare on price.
>
> **What I do on each visit:** skim the surface, brush the steps, corners and selected areas,
> vacuum for up to about thirty minutes, empty the skimmer and pump baskets and the robot's debris
> container, backwash when it's appropriate for your system, check the displayed salt level and
> the system indicators, and look the equipment over for warnings.
>
> **What I don't do:** test or balance the water, add chlorine, shock, salt, or algaecide, service
> or take apart the filter beyond a backwash the system is designed for, repair or adjust the
> pump, heater, cell, or automation, open or close the pool, or work below the water surface
> beyond the vacuuming and brushing above.
>
> **Westside Property Care 513 does not guarantee water chemistry, water clarity, equipment
> performance, or pool-system operation unless separately contracted.**
>
> A pool company will do the water, weekly, with chemicals, for something like $121 to $142 a
> month around here. That's full service with chemistry, it's a real product, it's less than I
> charge, and if what you need is somebody accountable for the water then you should hire one.
> I'll tell you which ones your neighbours use.
>
> What I do on the pool is one block out of eight — because the rest of the visit is the deck, the
> furniture, the outdoor kitchen, the grill, the grease trap, the trash cans, the pots, the sticks
> and the leaves, and the walkthrough at both ends that produces the written summary. Plenty of
> people have both of us. If you can only have one and the water is what keeps you up at night,
> have the pool company.

> **The last sentence stays.** Offering to lose the sale is the only move that makes the
> disclaimer above it credible, and a prospect who is told "hire the other guy if that's what you
> need" and stays is exactly the client `CANON.md` §5 says he needs.

### 2.5 The season

Identical to §1.6.

### 2.6 Everything I don't do — the full list

**Rail:** `Not included`

> ## Everything I don't do
>
> These are the same words that are in the agreement. You'll see them before you're asked to sign
> anything, and I'll walk them out loud on the first visit before I give you a price.

**Pool**
> Pool care under this membership is the physical maintenance above — skimming, brushing,
> vacuuming for up to about thirty minutes, emptying the skimmer and pump baskets and the
> automatic-vacuum debris container, backwashing when appropriate and compatible with the system,
> and visual checks of displayed salt levels, system indicators, and equipment warnings. It is not
> pool service.
>
> Specifically not included: water chemistry of any kind; chlorine, shock, algaecide, stabiliser,
> acid, or salt; filter cleaning, disassembly, cartridge replacement or DE charging; pump, heater,
> cell, automation, plumbing, or cleaner repair; opening, closing, covers, and winterisation; leak
> detection, liner or surface repair, tile and waterline scale removal, and acid washing.
>
> **Westside Property Care 513 does not guarantee water chemistry, water clarity, equipment
> performance, or pool-system operation unless separately contracted.**

**Lawn and landscape**
> No mowing, trimming, edging, blowing of lawn areas, fertilisation, aeration, overseeding,
> weed-and-feed, pruning, shrub or tree trimming, planting, mulching, bed edging, bed cleanout, or
> landscape installation of any kind.
>
> Weed treatment is spot treatment of what's visible in the hardscape joints, the walkway cracks,
> and along the edges of the beds bordering the outdoor living area. Weeding inside a bed is a
> quoted project. Regulated pesticide or chemical-application services are excluded.

**Where the boundary is**
> The membership covers the exterior outdoor living area — patio, pool and pool deck, outdoor
> kitchen, the adjoining hardscape, and the walkways serving them. We'll walk it together on the
> first visit and write down exactly what's in it.
>
> Not included: anything indoors, including garages, basements, enclosed porches, and sunrooms;
> the front of the property except the walkway serving the outdoor living area; lawn areas; the
> wooded or unmaintained part of the lot; outbuildings; and anything we didn't identify on the
> walkthrough.

**Ladders, roofs, and equipment**
> No work from a ladder, from a roof, or above roof line. Gutters and downspouts are checked from
> the ground, visually and by watching where they discharge.
>
> Anything needing a pressure washer, a ladder, a chainsaw, powered digging equipment, a trailer,
> or a chemical beyond routine surface cleaner and spot weed treatment is outside the membership
> and gets quoted. It's the cleanest test there is: if it needs something I didn't bring on a
> route day, it's a project.

**Deep cleaning**
> On a visit, the grill and outdoor kitchen work is wiping countertops and accessible surfaces,
> light cleaning around the cooking equipment, removing accessible grease or food residue, and
> emptying the grease trap or drip pan.
>
> Not included: burners, grates, flavorizer bars, heat shields, interiors, hoods, or vents;
> degreasing; and taking any cooking equipment apart. That's a grill and outdoor kitchen deep
> clean, from $249. Pressure washing of any surface is not included and is quoted separately.

**Debris and waste**
> Included: hand-collected loose leaves, sticks, and debris from the outdoor living area, put into
> your containers, up to what those containers hold and within the scheduled service time.
>
> Not included: debris past the capacity of your containers; debris needing more time than the
> visit allows; taking any waste off the property; moving containers to or from the curb; hauling;
> disposal; and dump fees. Large-volume removal is quoted, with disposal at cost plus 25%.

**Storms, and what "emergency" means**
> Included: clearing storm debris out of the outdoor living area on your next scheduled visit, by
> hand, within the volume limit above.
>
> Not included: any storm response needing a saw, a trailer, more than one trip, or more than your
> containers hold; tree or large-limb removal; and repair of structural or property damage.
>
> This isn't an emergency service and there are no guaranteed response times. Tuesday through
> Thursday is held open partly for exactly this, so urgent things usually do get handled. I don't
> promise same-day.

**November through February**
> The membership runs March 1 through October 31 only. During November, December, January, and
> February there are no scheduled visits, no property checks, no storm response, no freeze
> protection, no snow or ice service of any kind, and no membership charge.
>
> Any work in those months is a separately arranged and separately quoted project. A separate
> optional winter service exists; it is its own product with its own price and it is never part of
> this agreement.

**Repairs, parts, and trades**
> I don't perform repairs, replace parts, or install, alter, or remove any fixed part of the
> property under the membership.
>
> Anything needing a replacement part, a permit, or a licensed trade — electrical, plumbing, gas,
> HVAC, structural, or pool equipment — gets quoted separately, and may get referred to a
> contractor. Parts, materials, chemicals, salt, and filters are always billed separately at cost
> plus 25%.

**Watering and plants**
> Included: watering the pots and container plantings in the outdoor living area, on scheduled
> visits, when you want them watered.
>
> Not included: lawn or garden bed irrigation; irrigation system operation, repair, or
> winterising; and plant care between visits, including vacation watering.

**Visits and scheduling**
> The membership is two scheduled visits per calendar month, March through October, on the route
> day assigned to your property — a Monday or a Friday, set when you sign.
>
> Not included: extra visits; on-demand visits; a specific requested date; a guaranteed arrival
> time; weekend service; and any carry-forward of unused time. Visits get moved for weather, and a
> moved visit stays in the same calendar month where I can manage it.
>
> I'll tell you the day, not the hour. That's on purpose — if I give you eleven o'clock, then the
> property before yours gets shortchanged the week it needs an extra half hour, and eventually
> yours does too.

**Access and pets**
> You provide reasonable and safe access to the serviced area on your route day, including gates,
> the equipment pad, an outlet, and a water source. Pets secured where I need to work.
>
> I'm not responsible for work I couldn't do because access wasn't available, for pre-existing
> damage or hidden defects, or for conditions another contractor or a household member created. A
> visit I can't perform for lack of access isn't refunded or made up outside the scheduled route
> days.

**Closing:**

> That's the whole list. If something you want isn't in it, I'll quote it, and you decide.

**Onward:** *What project work looks like, and the two prices I can give you without looking* →
`projects.html`

### 2.7 The ask

> ## Now the price
>
> $279 a month, March through October. That's the whole price list, and the page it's on says how
> the billing works.
>
> [ The price ]  ·  [PHONE] · texting is fine

---

## 3. Pricing — `pricing.html`

### 3.1 Page head

**Rail:** `Price`

> # $279 a month. That's the whole price list.
>
> There's no tier, no module, no add-on, and nothing to configure. A property with a pool and an
> outdoor kitchen pays exactly what a property with a plain patio pays.

Followed by the season strip (§1.2).

> **Leading the `h1` with the number is `messaging.md` §3's instruction for this surface**, and it
> is what makes the page pass his ten-second test. The **rendered price figure** still sits below
> the exclusions, which is the section-order rule. Both are satisfied because the headline states
> the number and the set-piece renders it.

### 3.2 What the money buys

> ## What the money buys
>
> Two scheduled visits a month, March 1 through October 31, on your route day. Sixteen visits a
> season.
>
> On each one I walk the property before I start and again before I leave, and in between I do
> what will make the biggest difference that day. Then you get a short written summary the same
> evening: what I did, what I found, and what it costs if you want it handled.
>
> Each visit is up to two hours of on-site service, highest-priority maintenance items first,
> using my judgement. **Completion of every possible task during every visit is not guaranteed,
> and unused service time does not roll over.**
>
> November through February there are no scheduled visits and no billing. The season is eight
> months and I'd rather you read that above the number than below it.

### 3.3 Read this before the number

> ## Read this before the number
>
> A page that quotes you $279 and then discloses that the water isn't guaranteed has already spent
> the trust the disclosure was supposed to buy. So here it is first.

Then the exclusion list, identical to §1.7.

### 3.4 The price

> ## The price

The single figure, identical to §1.8, then:

> Card on file, collected before the first visit and charged on the schedule we set when you sign,
> March through October. Thirty days' written notice to cancel, either of us, and there's no term.

### 3.5 "That's more than a handyman"

**Rail:** `The arithmetic`

> ## "That's more than a handyman"
>
> You're right about the arithmetic, and I'd rather answer it than dodge it.
>
> A handyman's hour starts when you call him. You have to notice the problem, describe it, get on
> his schedule, and be home. Mine starts because it's the first Monday — I show up whether you
> noticed anything or not, and most of what I find, you hadn't. That's the thing you're actually
> buying.
>
> The two hours is a ceiling, not a quota. It's there so the price can be one number: a property
> with a pool and an outdoor kitchen would take three hours to do everything, and a plain patio
> would take one, and I'd rather cap the time than charge you differently for owning a pool. So I
> spend those two hours on whatever makes the biggest difference that day, highest priority first,
> and I tell you what I didn't get to. Completion of every possible task every visit isn't
> guaranteed — that's in the agreement in those words, because I'd rather you read it than find
> out.
>
> If what you want is hours, I'd honestly rather sell you a project. Those are flat-priced and you
> know exactly what you're getting for the money. The membership is a different thing. It's sixteen
> visits and a record.

> **This is `messaging.md` §5.3, and note what is missing from it: the number.** The heading quotes
> the reader's objection without repeating the arithmetic, the body concedes it — *"you're right
> about the arithmetic"* — and at no point does the copy perform the division itself. `voice.md`
> §3's hours-arithmetic rule permits conceding a reader's sum once and bans producing your own.
> `$69.75` and `$139.50` do not appear anywhere on the site.

> **Two things were wrong on this section and both were outside the prose.** The rail label read
> `PER HOUR`, so the rendered marginalia named the unit and presented $279 as a rate before a word
> of the rebuttal was read — a scanner reads the rail first, and the label is the one string on the
> section that was doing the opposite of the section's job. And the closing clause of
> `messaging.md` §5.3 had been cut: *"Completion of every possible task every visit isn't guaranteed
> — that's in the agreement in those words, because I'd rather you read it than find out."* That is
> the sentence that does the most work in this specific rebuttal, because it is the one place the
> cap stops being a marketing frame and becomes a document the reader can check. Both restored.

### 3.6 Billing

> ## How the money works

| | |
|---|---|
| **PAYMENT** | Card on file, collected before the first visit. There's no exception to that one, and it isn't about you — a six-client business can't spend part of its month chasing an invoice. |
| **WHEN THE CARD IS CHARGED** | Monthly, in advance, on the schedule we set at enrollment. Eight charges a season, March through October. |
| **NOVEMBER THROUGH FEBRUARY** | No charge and no scheduled visits. The card stays on file and isn't charged. I'll confirm the next season in writing in February, before the first March route day. |
| **STARTING MID-SEASON** | The season's already underway, so what's left of it is pro-rated — you pay for the visits you actually get, and I'll show you the number before you sign anything. Signing on or before February 28, 2027 also holds your rate at $279 through the 2027 season. |
| **IF A CARD FAILS** | Service runs through the current month. I need a working card before your next route day, and I'll tell you the date rather than the word "immediately." Past-due accounts may have scheduled service suspended until they're current. |
| **CANCELLING** | Thirty days' written notice, either of us. Amounts already earned for completed service periods remain due. There's no term and no cancellation fee. |
| **PROJECT WORK** | Invoiced when it's finished, charged to the card on file unless you'd rather arrange it differently. |
| **MATERIALS** | Itemized on the estimate before the work starts and on the invoice after, at cost plus 25%. Pool chemicals, salt, filters, and cartridges are materials. Never folded into labour. |

### 3.7 Founding terms

> ## Pro-rated 2026, and $279 held through the 2027 season
>
> The season's already underway, so I'll pro-rate what's left of it. Your rate is then locked at
> $279 through October 31, 2027.
>
> It holds for anybody whose agreement is signed on or before February 28, 2027 — the day before
> the 2027 season opens. There's no limit on how many people that is, and it could be all six.
> Agreements signed after that date don't carry the lock.
>
> It's the signature date that counts, not the start date. Sign in February for a March 1 start and
> you're in.
>
> That isn't a promotion — it's what I'm giving the people who take a chance on a business with no
> track record, and a locked price through a full season is a fair thing to give them for it.
>
> It covers the membership price only — not project work, not materials. The lock runs through the
> end of the 2027 season and it doesn't extend past it. It's a price guarantee. Thirty days'
> written notice and you're done, either way.

> ✅ **Resolved 2026-08-06, and the answer is a date.** `wpc-strategist` ruled the Founding Member
> lock **date-bounded, not count-bounded**: any member whose **agreement is signed on or before
> February 28, 2027** holds $279 through **October 31, 2027**, with **no cap on how many** — up to
> the whole book of six (`00-model/pricing.md` §2, `decisions.md` **D-27**). *"The first four
> clients"* is withdrawn and may not be reinstated on any surface. The site had never published a
> count, so nothing had to be retracted; what it published was vague — *"lock your rate for all of
> next year"* — and vague is what the dated form replaces.
>
> **Three details are load-bearing and all three are now on the page.**
>
> 1. **The test is the signature date**, not the effective date and not the first visit. A member
>    who signs February 20 for a March 1 start qualifies, and the page says so in those words. It
>    is also the only version of this term a member can verify on the face of their own document —
>    the withdrawn checkbox asked them to take his word for a fact about other people's contracts.
> 2. **There is no limit on how many hold it**, and the copy says that out loud. Saying it is not
>    generosity; it is what stops the reader inferring a queue where none exists, which is exactly
>    what a count would have manufactured.
> 3. **The date is a fact, never a countdown.** *"Anybody on the books before March 1"* and
>    *"agreements signed after that date don't carry the lock"* are statements about the term.
>    *"Only three weeks left to lock your rate"* is `voice.md` §6.5's season-closing row wearing a
>    date instead of a count, and it is banned in exactly the same way. No surface counts down to
>    February 28, and the season strip does not mark it.
>
> **Any agreement already executed under the "first four" clause is honoured as written** — this
> is a forward rule change, not a repricing of a signed contract. Nothing on the site says
> otherwise, and nothing on the site should ever describe the lock as a discount: everyone pays
> $279, and the lock is a guarantee against a future increase (`pricing.md` §2.5).
>
> 🔶 **Flagged upward.** `01-brand/messaging.md` §4 still carries the superseded instruction —
> *"say 'clients signing now' and never assert a cap"* — with a flag pointing at the unresolved
> question. D-27 answers it. That file is `wpc-brand`'s; this deck now leads it.

### 3.8 What I don't discount

> ## What I don't discount
>
> The membership price, and project work for members.
>
> Members don't get a discount on projects. They get scheduling priority and no trip minimum,
> which is worth more — a $49 window well is worth doing when I'm already standing in the yard,
> and it isn't worth a dedicated trip when I'm not.
>
> If the number is more than you want to spend, that's a fair thing to say and it doesn't make
> this awkward. I'd still be glad to do the grill for you, and that's $249 and up with nothing
> committed.

### 3.9 The ask

> ## Walk the property with me
>
> About forty minutes. I'll look at the pool, the kitchen, the hardscape, and the access, walk you
> through everything that isn't included, and give you the price standing there. You don't have to
> decide that day.
>
> Send me your cross street and whether you've got a pool, an outdoor kitchen, or both.
>
> [ Text me your cross street ]  ·  [PHONE] · texting is fine

---

## 4. Projects — `projects.html`

### 4.1 Page head

**Rail:** `Projects · Tue–Thu`

> # Project work, membership or not
>
> Tuesday through Thursday is kept open for projects, estimates, and the things that come up. You
> don't have to be a member to hire me for any of it, and unlike the membership, project work runs
> year round.

> **"Year round" is allowed here and only here.** `voice.md` §6.6 bans it as a *membership* claim
> and explicitly permits it for project work, which genuinely does run all twelve months. This
> page is what the site has to sell between November and February.

### 4.2 The two published prices

> ## Two prices I can give you without looking

```
Grill and outdoor kitchen deep clean ····························  $249+
Window well cleanout ···········································   $49+
```

> The plus is doing real work in both. $249 is a standard grill. A full outdoor kitchen with a
> flat-top, a side burner, and stone counters is more, and I'll tell you what it is before I start.
>
> $49 is a window well cleaned while I'm already on the property for a visit. A set of six full of
> five years of leaves is a different job and gets quoted.
>
> The deep clean is burners, grates, flavorizer bars, heat shields, the interior, the hood — the
> parts a wipe-down doesn't touch. This is the work my family's business does, and it's where this
> whole thing came from.

### 4.3 Quoted after I look at it

> ## Everything else, after I've seen it
>
> No price on these until I've walked it. Quoting a flat number from a driveway is how you end up
> either overcharging somebody or resenting the job.
>
> - Pressure washing — patio, walkway, driveway, deck, siding, fence
> - Storm cleanup beyond routine debris
> - Drainage correction
> - Outdoor repairs
> - Seasonal cleanup — spring open, fall close
> - Gutter and downspout cleaning
> - Large-volume debris removal and hauling
> - Extensive weeding and bed cleanout
> - Pool filter servicing and equipment work — the things the membership excludes
> - Special property projects
>
> **Westside Property Care 513 does not guarantee water chemistry, water clarity, equipment
> performance, or pool-system operation unless separately contracted.**
>
> Materials, chemicals, salt, filters, and parts are separate and itemized at cost plus 25%.

> **The disclaimer travels even here.** The list names pool filter servicing and equipment work,
> which is a description of pool work, so item 41 applies. Quoting it separately does not create a
> guarantee and the copy must not let anyone infer one.

### 4.4 How an estimate works

> ## How an estimate works
>
> I come look at it, measure it, and photograph it. You get a number the same day or the next
> morning — and if it's after Thursday, it might be Monday.
>
> It's a flat price, not an hourly rate. If the job takes me longer than I planned, it still costs
> what I told you. Materials are separate, itemized, at cost plus 25%; you'll see the line on the
> estimate before the work starts and on the invoice after, never buried in the labour.
>
> Estimates are good for 30 days. That's a fact, not pressure.

### 4.5 Members

> ## Members don't get a discount. They get a $49 window well cleared on a day I'm already there.
>
> Scheduling priority, and no trip minimum. That second one is the whole difference: a small job
> is worth doing while I'm already standing in the yard on your route day, and it isn't worth a
> dedicated drive when I'm not.
>
> That's why the small stuff gets handled for members and doesn't for anybody else. It costs me
> nothing, and it's worth more than a discount would be.

### 4.6 The ask

> ## Tell me what it is and I'll come look
>
> Text me what the job is and your cross street. If it's the grill, tell me what you've got — a
> standalone grill, a built-in, or a full outdoor kitchen with a flat-top.
>
> I'll answer the same day or the next morning. If it's after Thursday, it might be Monday, and
> I'd rather tell you that than say "within 24 hours."
>
> [ Text me about a project ]  ·  [PHONE] · texting is fine

---

## 5. About — `about.html`

### 5.1 Page head

> # This is new. I'd be starting with you.
>
> There's no track record to point at, no portfolio, and no reviews. I'd rather lead with that
> than have you find it out.
>
> I'm local, I've got military roots, and what I'm not new at is outdoor kitchens.

> **"Military roots," stated plainly and never quantified.** No rank, no branch, no unit, no span
> of service, no insignia, no veteran-owned badge. `voice.md` pair 13's second "don't" invents a
> decade and a personality trait out of three words on a planning sheet, and it is the failure
> this proof point is most likely to produce.

### 5.2 Where this came from

> ## Where this came from
>
> I've been cleaning grills and outdoor kitchens on west-side properties through my family's
> business, Tri-State Grill Cleaning, and this came out of that.
>
> Doing that work put me in a lot of backyards, and the same thing kept happening: the grill got
> cleaned, and the rest of the outdoor living area was clearly nobody's job. The patio furniture
> hadn't been wiped since May. The window wells were full. The skimmer basket hadn't been emptied
> in a fortnight. Nobody was looking at any of it, because nobody had been hired to look.
>
> That's the job: a schedule, the whole outdoor living area, and a written record.

### 5.3 The four words

> ## Service, honesty, integrity, dependability
>
> Those are the four words I'd want somebody to use about me, and the only way to make them mean
> anything is to show the receipts.
>
> So: everything I don't do is published on this site before you're asked to sign anything. The
> price is one number and it's on the page. The season ends October 31 and I say so above the
> price rather than below it. And you get a written summary after every single visit, so if I'm
> not doing the work you'll know in two weeks, not two years.
>
> > The first month is the whole risk. If it's not right, tell me.

### 5.4 The cap

> ## Six properties, and it's a real cap
>
> Six properties is twelve visits a month, and routine visits only happen Monday and Friday. Past
> six I'd be rushing somebody.
>
> So when the six are taken the site says MEMBERSHIP FULL and I keep a waitlist. The cap is a fact
> about the schedule.
>
> The empty time is part of what you're paying for. It's what lets a rained-out Monday get moved
> without anybody being bumped, lets a property that needs an extra hour get one, and lets me be
> out on an estimate inside the week.

### 5.5 The route

> ## Why location decides it
>
> Green Township, Oak Hills, upper Delhi, and Covedale — and inside that, two clusters.
>
> Every property has to be within about fifteen minutes of another one I already take care of. A
> house twenty-five minutes out of position costs me the same unpaid drive twice a month for as
> long as they're a member, and no price fixes distance.
>
> So a qualified property that isn't near a cluster goes on the waitlist. Two things move you up: a
> spot opening near you, or a neighbour of yours adding their name. Two on one street is a cluster,
> and that changes the math.

### 5.6 The day, not the hour

> ## You get told the day, not the hour
>
> Your visits land on your route day — a Monday or a Friday, set when you sign. You don't need to
> be home.
>
> I don't give arrival times, and the reason is worth saying out loud: the day I promise you eleven
> o'clock is the day the property before yours gets shortchanged when it needs an extra half hour.
> Eventually that's yours. Never rushing a property is the rule the whole schedule is built to
> protect, so the schedule has slack in it on purpose.

### 5.7 What this isn't

> ## What this isn't

- **Not a lawn service** — No mowing, trimming, edging, fertilizing, aerating, seeding, pruning,
  planting, mulching, or bed work.
- **Not a pool company** — I skim, brush, vacuum, empty both baskets, backwash when the system
  wants it, and read the salt level and the warning lights. I don't test or balance the water and
  I don't add chemicals. *Plus the disclaimer, in the same block.*
- **Not a landscaper** — No installation, no design, no hardscape construction.
- **Not a handyman** — No repairs, no replacement parts, nothing needing a licensed trade.
- **Not an emergency service** — No guaranteed response times and no promised arrival windows.
- **Not a winter service** — The membership stops October 31. No snow, no ice, no freeze
  protection, and no billing between November and February.
- **Not a cleaning service** — Nothing indoors: no garages, basements, enclosed porches, or
  sunrooms.
- **Not a home-watch service** — I'm not checking your house while you travel. I'm taking care of
  the outdoor living area on a schedule.
- **Not a crew, and not growing into one** — One person, six properties. That's the whole business
  and it's deliberate.
- **Not the cheapest** — A lawn service is less. A pool service is less. A single grill cleaning is
  less. This costs what it costs and the price doesn't move.

> **The retired eleventh row was "Not seasonal — the scope changes in November. The price
> doesn't."** It is now false in both halves. Its replacement is "Not a winter service," which
> says the true version of the same boundary.

### 5.8 The ask

> ## Walk the property with me
>
> About forty minutes. Send me your cross street and whether you've got a pool, an outdoor kitchen,
> or both.
>
> [ Text me your cross street ]  ·  [PHONE] · texting is fine

---

## 6. Apply — `apply.html`

### 6.1 Page head

> # Two questions, then I'll come look
>
> Does the property have a pool, an outdoor kitchen, or both — and what's your cross street?
>
> I take six clients and the route is built around two clusters, so location decides more than
> anything else does. If it works, I'll come walk the property with you, show you exactly what's
> included and what isn't, and give you the price while I'm standing there. About forty minutes.
>
> **6 of 6 spots open**

### 6.2 The form

> ## Send me the two answers

| Field | Label | Help text |
|---|---|---|
| Name | Your name | Required. |
| Phone | Phone | Texting is fine. Give me a phone or an email, whichever you'd rather I use. |
| Email | Email | — |
| Cross street | Cross street | Required. The nearest cross street is enough — I don't need your address yet. |
| Pool | A pool | *(see fieldset hint)* |
| Kitchen | An outdoor kitchen, a grill, or outdoor counters | *(see fieldset hint)* |
| Notes | What isn't getting handled right now? | Optional. The window wells, the patio nobody's washed since 2022, the skimmer basket you haven't looked in. This is usually the useful part. |

**Fieldset legend:** `WHAT THE PROPERTY HAS`

**Fieldset hint — rewritten, and the rewrite is load-bearing:**

> Check either, both, or neither. It doesn't change the price — $279 is $279. It changes how much
> of the two hours the property uses, which is how I work out whether it fits.

> **Under the old model these two checkboxes selected a configuration.** The hint used to read
> *"Neither is a real answer and it's a real price,"* which only made sense when a pool changed
> the number. Under the flat price the same two questions are a **client-selection** question, not
> a pricing one — a pool-and-kitchen property consumes far more of the two hours than a plain
> patio at the same fee, so the attributes decide *whether he takes the client*, not what he
> charges (`CANON.md` §3). The hint had to say that or the form would have implied a tier.

**Button:** `Send it` · beside it: `Or text me — [PHONE]`

### 6.3 Error sentences — written into the page, not injected

| Field | Sentence |
|---|---|
| Name | I need a name so I know who I'm answering. |
| Email | That doesn't look like an email address. Check it, or leave it blank and give me a phone number instead. |
| Cross street | I need a cross street. The nearest one is enough. |

### 6.4 Under the form

> I'll answer the same day or the next morning. If it's after Thursday, it might be Monday, and I'd
> rather tell you that than say "within 24 hours."
>
> Nothing gets sent to anybody else, there's no mailing list, and I won't follow up more than once
> if you don't reply.
>
> If this form doesn't go through, text me at [PHONE]. That works better than the form anyway.

> **This is the reference reply commitment** (`voice.md` §8 item 14b, pair 17), and it is
> unchanged by the re-baseline. It commits to *answering*, not to *arriving*; it names its own
> failure case before you find it; and it quotes the banned phrase back at the reader in order to
> refuse it.

### 6.5 If the route doesn't fit

> ## If your street isn't near the route
>
> I'll tell you that straight instead of taking the money and driving forty minutes twice a month.
> You go on the waitlist with your street on it, and I'll still do project work for you in the
> meantime.

---

## 7. Waitlist — `waitlist.html`

### 7.1 Page head

> # The waitlist is a real list
>
> It's written down, it has your street on it, and when a spot opens it goes to whoever is closest
> to the route I'm already driving.
>
> **6 of 6 spots open**
>
> Spots are open right now, so the list is for properties that aren't near either route cluster
> yet. That's a real reason to be on it.

### 7.2 Why there's a list at all

> ## Why there's a list at all
>
> Two reasons, and they're both about the route.
>
> Six properties is twelve visits a month, and routine visits only happen Monday and Friday. Past
> six I'd be rushing somebody, and never rushing a property is the one thing the whole schedule is
> built to protect.
>
> And a property that isn't near one of the two clusters goes on the list even when a slot is open.
> A house twenty-five minutes out of position costs me the same unpaid drive twice a month for as
> long as they're a member, and no price fixes distance.

### 7.3 What moves you up

> ## Two things move you up
>
> A spot opening near you. Or a neighbour of yours adding their name — if two of you are on the
> same street, that's a cluster, and it changes the math completely.
>
> That second one is the fastest way up the list in practice, and it's worth asking around.

### 7.4 The form

> ## Add your name

Same fields and same error sentences as §6.2 and §6.3, with three differences:

| | Waitlist version |
|---|---|
| Name error | I need a name to write on the list. |
| Cross-street help | Required, and on this form it's the whole point — the list is ordered by how close you are to the route. |
| Notes label | Anything you'd want handled in the meantime? |
| Notes help | Optional. Project work doesn't need a membership and doesn't need a slot. |

**Button:** `Add me to the waitlist`

**Under the form:**

> I'll answer the same day or the next morning. If it's after Thursday, it might be Monday, and I'd
> rather tell you that than say "within 24 hours." I'll tell you honestly where you sit and what
> would have to happen.
>
> If this form doesn't go through, text me at [PHONE].

### 7.5 Meanwhile

> ## Project work doesn't need a slot
>
> Tuesday through Thursday I'm doing projects and estimates whether you're a member or not, and
> project work runs year round.

```
Grill and outdoor kitchen deep clean ····························  $249+
Window well cleanout ···········································   $49+
```

> Pressure washing, gutters, bed cleanout, drainage, storm work, and spring open or fall close all
> get quoted after I look at them. Flat number, materials itemized separately at cost plus 25%,
> good for 30 days.

---

## 7A. Two utility pages

### `thanks.html` — the success state for both forms

> # Got it.
>
> I'll answer the same day or the next morning. If it's after Thursday, it might be Monday, and
> I'd rather tell you that than say "within 24 hours."
>
> If you'd rather just talk, text me at [PHONE].

> ## You're on the list
>
> It's a written list with your street on it. When a spot opens it goes to whoever is closest to
> the route I'm already driving, and I'll tell you honestly where you sit and what would have to
> happen.
>
> In the meantime I do project work Tuesday through Thursday, year round: grill and outdoor kitchen
> deep cleans from $249, window wells from $49, and pressure washing quoted after I look at it.

> ## Worth reading before we talk
>
> The two things people are most surprised by are what isn't included on the pool, and that the
> season stops on October 31. Both are on the site in full, and I'd rather you read them now than
> hear them from me in a driveway.
>
> [ What's included, and what isn't ]  [ The price ]

> **That last paragraph changed with the model.** It used to say the two surprises were *"what
> isn't included, and what happens in December."* December is no longer a surprise about *work* —
> it is a surprise about *the season ending*, and the pool is now the sharper of the two because
> the scope grew.

### `404.html`

> # There's nothing at this address
>
> Everything the site has is in the bar above, and the waitlist is in the footer. If you were
> looking for the price, it's $279 a month, March 1 through October 31, and it's on the pricing
> page.
>
> [ The price ]  ·  Or text me — [PHONE]

The 404 states the price **and the season** in the body. A wrong-address page is still a surface,
and the ten-second test still applies to it — so does `voice.md` §8 item 37, which is why the
dates travel with the number here as everywhere else. It no longer counts the pages: there are
ten, the nav shows six, the waitlist is footer-linked, and a number a reader can disprove by
scrolling is worse than no number.

---

## 8. MEMBERSHIP FULL state — `membership-full.html`

`membership-full.html` is `index.html` in the full state. Same layout, same sections, same voice.
Three blocks change and one is added.

### 8.1 Masthead — replaces §1.1's enrolment stamp

> **MEMBERSHIP FULL**
>
> All six spots are taken. That's the actual cap, not a sales line — six properties is twelve
> visits a month, and routine visits only happen Monday and Friday. Past six I'd be rushing
> somebody.
>
> [ Add your name to the waitlist ]  ·  Or text me — [PHONE]

The `h1`, the lede, the price line and the pool line are **unchanged**. Someone arriving in the
full state still needs to know what this is before they need to know they cannot have it.

### 8.1a The season strip — the caption is NOT the one from §1.2

The strip itself is identical. The in-season caption is not:

> Two a month, March through October. The filled square is where the 2026 season sits now.

**It stops there.** The open-state caption continues *"the season's underway, so I'll pro-rate
what's left of it and lock your rate for all of next year"* — which is a term offered on a slot,
and on this page the `h1` says every slot is taken. Shipping the open-state caption here was a
copy-paste leak, and it is the same defect as a "join now" button on a sold-out page: the ask and
the state contradict each other in the same viewport. §8.3 already gets this right one section
below, which is what made the leak easy to miss.

### 8.2 Why six — added section, directly after the masthead

> ## Why it stops at six
>
> Six properties is twelve visits a month, and routine visits only happen Monday and Friday. Past
> six I'd be rushing somebody.
>
> Never rushing a property is the rule the whole schedule is built to protect. The cap is what
> fits.
>
> The empty time is part of what the six are paying for. It's what lets a rained-out Monday get
> moved without anybody being bumped, lets a property that needs an extra hour get one, and lets me
> be out on an estimate inside the week.

### 8.3 The price section — one paragraph changes

The founding-terms paragraph is replaced by:

> The price doesn't move because the book is full, and it won't move when a spot opens.

**The reason is the slot, not the count.** An earlier version of this note said *"four members
have joined by definition in this state, so the founding terms are gone"* — reasoning that only
worked while the lock was capped at four. Under D-27 the lock is date-bounded, so it has not
expired in this state at all; a waitlist name who signs in February 2027 for a spot that opened in
January still holds $279 through the 2027 season. What is missing on this page is **the slot**.
Quoting terms on a slot the `h1` says is taken is the same defect as §8.1a's caption leak, and the
page must not do it in either place. The single figure and the five clauses are **byte-identical**
to the open state.

### 8.4 The ask — replaces §1.10

> ## The waitlist is a real list
>
> I keep it in writing with your street on it, because when a spot opens it goes to whoever is
> closest to the route I'm already driving. Add your name and I'll tell you honestly where you sit
> and what would have to happen.
>
> Two things move you up: a spot opening near you, or a neighbour of yours adding their name. Two
> on one street is a cluster, and that changes the math.
>
> In the meantime I do project work Tuesday through Thursday, membership or not: grill and outdoor
> kitchen deep cleans from $249, window wells from $49, and pressure washing quoted after I look at
> it.
>
> [ Add your name to the waitlist ]  ·  Or text me — [PHONE]

### 8.5 What must not appear in the full state

- **No urgency of any kind.** No "spots fill fast," no "join now for priority access," no
  "exclusive," no "invitation only." The cap is real and explaining the mechanism makes it
  believable in a way "exclusive" never does (`voice.md` pair 7).
- **No price change.** Not up because demand exists, not down to fill the last slot.
- **No implied growth.** No "as I expand," no "additional territories," no "taking a limited
  number of additional clients." `CANON.md` §1.
- **No waitlist length.** Publishing "23 people ahead of you" is a scarcity number, and the only
  count that may ever be published is the true count of open slots.

---

## 9. Deferred claims — written, approved, and **not on the site**

Held here so nobody has to rewrite them under pressure, and so nobody pastes them early.

**Insurance — paste only when the policy is bound and in hand:**

> Insured — general liability.

Five words. Not "fully insured," which is a meaningless intensifier. Not "licensed and insured,"
because **Ohio does not license this trade** and the claim is wrong rather than early.

**The LLC — paste only when the Articles are filed and accepted:**

> Westside Property Care 513 LLC

**A review count — paste only when reviews exist, and only as the exact true count:**

> [N] reviews on Google.

Never "5-star," never "highly rated," never a rounded number, and never a review reproduced on
this site rather than linked to on the profile.

**A real service summary** replaces the facsimile in §1.5 the day one exists, with the address
removed and the "format only" label taken off.

---

## 10. Audit — `01-brand/voice.md` §8, run against this deck and the built site

Items 1–30 against the prose. Items 31–34 and 35–42 against the **built** surfaces: the
structured data, the rendered CSS case, the `alt` and label strings, and the meta values.

| # | Item | Result |
|---|---|---|
| 1–3 | First person singular, reader as "you", no crew | **Pass, after one fix.** Every `we` / `us` on the site was read by hand; each can only mean *you and me* — "we'll walk it together," "the schedule we set when you sign," "either of us," "one of us owns the water." **One failed the swap test:** the billing list said *"We'll confirm the next season in writing in February,"* where "we" could only be the company, because confirming a season is something he does alone. Now "I'll." |
| 4–5 | Named, located objects | **Pass.** Both baskets, the robot's debris container, the Inspect Cell light, the six patio chairs, the fern on the north side, the two window wells on the south side, the west one with water in it. |
| 6 | Every finding carries a price or an honest "I'd have to look" | **Pass.** The facsimile finding is $49. Every quoted category says "quoted after I look at it." |
| 7 | Unfalsifiable adjectives absent, including "military precision" | **Pass.** Grepped §6.3 in full. |
| 8 | Prices exact and traceable | **Pass.** $279, $249+, $49+, all from `pricing.md`. |
| 9, 10 | *Retired* | Superseded by 35 and 36. |
| 11 | Zero testimonials, ratings, years, certifications, licences | **Pass.** The only "licensed" on the site is *"a licensed trade,"* referring work **out** to electricians and plumbers, which is not a claim about him. |
| 12 | Insurance / LLC wording only if true | **Pass.** Neither appears. Both held in §9. |
| 13 | The cap stated as the real number; no urgency | **Pass, after two fixes.** "6 of 6 spots open" is the true count today. §6.5's season-closing row was being broken twice by non-prose: the strip caption counted the dates already gone — *"ten of the 2026 season's sixteen visit dates are already past"* — and the strip **drew** ten delivered visits for a business with zero members. Both are gone; sixteen `--rule` ticks and one `--ember` square remain. The founding-rate deadline is stated as a fact and never counted down to. |
| 14a | No availability promise | **Pass.** No arrival time, no window, no SLA, no same-day. No `openingHoursSpecification` in the structured data. |
| 14b | Reply commitment present where someone waits | **Pass.** Apply, Waitlist, Thanks and Projects all carry it. |
| 15 | No claim about water, chemistry, clarity or equipment | **Pass.** |
| 16 | No implied lawn or landscape service | **Pass.** Stated as an exclusion on four pages. |
| 17 | Exclusions present and above the price | **Pass.** Home §1.7 before §1.8; Pricing §3.3 before §3.4. |
| 18a | The cap travels with all its clauses | **Pass, after two restorations.** The five clauses ship as one indivisible component wherever the `.onefig` block renders — but the cap also appears in prose, and prose does not inherit a component. Two places stated it bare: the What's included lede (*"up to two hours of on-site service each"* and nothing else) and the handyman rebuttal on Pricing, which had cut `messaging.md` §5.3's closing sentence — the one that turns the cap from a frame into a document the reader can check. Both restored, the second verbatim. |
| 18b | No performance target | **Pass.** No "average visit length," no minutes-per-visit as a measure, nothing implying he aims to finish quickly. The checklist's eight time budgets are **not** published; the eight parts are published without their minute allowances, except the pool's "about thirty minutes," which is in the agreement the customer signs. |
| 19a, 19b | No anchor list, no ranges, nothing before the look | **Pass.** The only range on the site is $121–142, attached to **full pool service with chemistry** — a referral fact about a product he does not sell. |
| 20–22 | *Retired* | Superseded by 37–40. |
| 23 | Zero exclamation marks, emoji, check glyphs | **Pass** on the site. This deck itself used a snowman to mark off-season copy; it is now `[OFF SEASON]`. Nothing customer-facing ever carried it, but a deck that models a banned move is a deck somebody pastes from. |
| 24 | Sentence case; caps only on the stamps | **Pass, after the plate captions were pulled out of `.rail`.** `.stamp`, `.rail` and `.figure` carry `text-transform: uppercase`, which is correct for stamps and rail labels and was **wrong for a figcaption holding a sentence** — seven pages rendered a shot list in tracked caps. `.plate__cap` is now Plex Sans, sentence case, and inherits nothing from `.rail`. See §0.4. |
| 25 | Every banned phrase in §6 absent | **Pass, after four cuts.** The one deliberate appearance is `"within 24 hours"`, quoted in order to refuse it. Removed: *"as applicable to your property"* (§6.6), *"and the last slot"* (§3, the one-price rule), *"ten percent off"* (a discount that does not exist), and *"not to whoever pays the most"* (implies a market in which somebody could). |
| 26 | One em dash per paragraph; "twice a month"; a route day, not an hour | **Pass.** Re-checked on every paragraph this pass rewrote. |
| 6.7 | "Not X, just Y" is a tic | **Fixed.** Roughly eighteen negation-then-assertion constructions were on the site and about six are approved copy — *"that's the actual cap, not a sales line"* (pair 7), *"a flat price, not an hourly rate"* and *"a fact, not pressure"* (pair 8), *"a ceiling, not a quota"* (`messaging.md` §5.3), *"a limit on what you're buying, not a limit on how carefully I work"* (pair 19), and the masthead's *"Not lawn care. Not pool service"* (`voice.md` §5.1). **Fourteen others were cut to bare assertion.** Individually each was defensible; at that density the site sounds like it is arguing with somebody who is not in the room. |
| 27 | Street names only | **Pass.** No address anywhere, including the structured data. |
| 28 | Exactly one ask per surface | **Pass.** |
| 29 | Full state → waitlist plus project offer; off season → waitlist or walkthrough plus March 1 | **Pass.** §8.4 and §1.2 `[OFF SEASON]`. |
| 31 | Structured data asserts only what the prose asserts | **Pass.** `seo.md` §3, property by property. `priceRange` is `$279 per month`. No hours, no rating, no review, no employee. |
| 32 | Rendered case | **Pass.** The three stamps are typed in caps **and** rendered in caps. The stylesheet carries the rule and is auditable there. |
| 33 | Alt text and labels | **Pass, after the caption rewrite.** The seven image slots ship as plates whose captions are now addressed to a visitor rather than to a photographer — §0.4. **Frame 5's caption carries the pool disclaimer in full today**, not only in its future alt text, because it describes the equipment pad and item 41 does not exempt captions. When photographs land, every alt string names the object and locates it. No "we" and no bare "WPC" in any label, button or `aria-label`. |
| 34 | Titles, meta and social | **Pass.** `seo.md` §2. |
| 35 | One price, and only one | **Pass.** $279 is the only membership number. $229, $269, $289 and $329 are absent from prose, markup, JSON-LD, `og:` values, filenames and CSS. $249 appears **only** as the published grill deep-clean starting price. |
| 36 | No tiers and no division | **Pass.** No "plans," "tiers," "packages," "options," "add-ons," "starting at" or "from" attached to the membership. $279 is never divided: `139.50` and `69.75` return zero hits. |
| 37 | The season, stated | **Pass.** March 1 – October 31 and sixteen visits on all ten pages. "Year-round" appears only for project work, which is the one permitted use. |
| 38 | The off season, stated honestly | **Pass.** No scheduled visits, no billing, next season opens March 1. The winter offering is named as separate, optional and outside the agreement — and is **not described**, because the file defining it does not exist yet. |
| 39 | The cap's clauses | **Pass.** See 18a. |
| 40 | No invented off-season revenue | **Pass.** No retainer, no winter membership, no rolled-over credit, no prepay discount, no annual rate, no referral credit, and **no last-slot price — the phrase *"and the last slot"* was on the pricing page and is gone**. The founding concession is a pro-rated 2026 remainder plus $279 held through October 31, 2027 for anyone signing on or before February 28, 2027 — a term, not a discount, uncapped in number, never framed as a promotion, and never counted down to. |
| 41 | The pool disclaimer travels | **Pass.** It appears in the same block as **every** description of pool work: the eight parts (Home and What's included), the pool section, the exclusion list on three pages, the summary facsimile, the About "what this isn't" list, and the quoted-projects list. Frame 5's future alt text and caption both carry it. |
| 42 | Name and roots | **Pass.** Full name on first reference on every surface; WPC513 thereafter; the bare three letters appear **nowhere** — not in prose, headings, alt text, slugs, filenames or structured data. `WPC 513` with a space exists only inside the logo lockup. The tagline is verbatim. Military service is "military roots" and nothing more. |
| 30 | Could a competitor with two hundred accounts and a call centre publish this? | **No.** Not the six-property cap, not "I'll tell you which pool company your neighbours use," not "if the water is what keeps you up at night, have the pool company," not "you're not buying sixteen visits, you're buying the sixteenth one," and not a summary that names the fern on the north side. |

**What this audit does not cover:** whether the claims are *true*. The site says six clients,
sixteen visits, a written summary every time, and no seventh client ever. Every one of those is
falsifiable by his behaviour rather than by a grep, and the moment one stops being true, the copy
on this page becomes a lie that reads exactly the same.

---

## Related files

- `site-spec.md` — where each of these blocks sits, and the components that carry them
- `seo.md` — the titles, descriptions and structured data this prose has to agree with
- `01-brand/voice.md` — the rules, the worked pairs, and the checklist in §10 above
- `01-brand/messaging.md` §1 — *the sixteenth visit*, and §1.5, the footer short form
- `00-model/pricing.md` — $279, $249+, $49+
- `00-model/service-catalog.md` §3, §4 — the eight parts and every exclusion
- `_source/2026-08-05-owner-decisions.md` §2 — the agreement the disclaimer is quoted from
