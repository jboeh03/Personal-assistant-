# Visual Direction

**Owner:** `wpc-brand` · **Status:** source of truth for how Westside Property Care 513 looks
**Binding on:** `02-website/`, `03-marketing/`, and every printed piece
**Governed by:** `.claude/rules/web/design-quality.md` — its anti-template policy is answered
item by item in §9 and §10

> **Re-baselined 2026-08-05. Two sections are reversed, not patched.**
>
> - **§2, the palette.** The Field Ledger *structure* survives entirely — the ruled field-book
>   layout, the rail and measure, the reading measure, near-zero radius, the three-weight
>   hairline system, the two-shadow rule, the uneven vertical rhythm. **Only the colour system
>   changes.** Oat/copper/green is replaced by **his navy and orange**, taken from the finished
>   logo he shipped (`_source/2026-08-05-owner-decisions.md` §1).
> - **§7, the mark.** This file used to say *"There is no icon and there will not be one. No
>   leaf, no house outline, no water droplet."* **He has a logo with a house-and-tree line
>   mark.** §7 now specifies the real lockup. The old argument is recorded there and retired.
> - **The season mechanic survives and is repurposed.** It is no longer Green/Dormant scopes at
>   one flat year-round price. It is **In Season (March 1 – October 31)** and **Off Season
>   (November 1 – end of February)**, where the off-season state says the next season opens
>   March 1. Both states carry a complete palette that passes contrast on its own.

---

## 1. The direction, named and defended

# FIELD LEDGER

**The site is the service summary.**

The artifact at the centre of this business is a written record: twice a month, a document that
says what was done, where, and what was found. His own field checklist ends every visit with
*"record completed services · note repairs / additional-service recommendations · send short
service summary to customer."* That record is the product's proof, its sales mechanism, and the
only thing a member touches between visits. So the website, the door hanger, the estimate, and
the summary are all the **same object at different sizes** — a ruled page from a working field
ledger, kept by one person who writes things down.

That gives every design decision a test that is not a matter of taste: *would this appear in a
record kept by someone who takes the record seriously?* A ruled entry with a date stamp in the
margin, yes. A rounded card with a drop shadow floating on a gradient, no.

**Why this direction and not one of the obvious ones:**

- **Not "luxury outdoor living."** Dark charcoal, serif capitals, and a lit pool at dusk is the
  aesthetic of a landscape-construction firm with a portfolio. He does not have a portfolio and
  is not building one. Borrowing that look writes a cheque `brand-brief.md` §4.4 says he cannot
  cash — and it is now actively dangerous, because a luxury-pool aesthetic implies exactly the
  water-quality guarantee the agreement disclaims (Agreement §3).
- **Not "friendly local service."** Rounded sans, a blob, a smiling stock photo. That register
  prices at $89 a month, not $279.
- **Not dark mode.** The product happens outdoors in Ohio daylight, on paper, in a truck. A dark
  UI is a screen convention with no referent in the business. `design-quality.md` says do not
  default to dark; this is the deliberate refusal. **Both seasonal modes are light**, on a warm
  paper ground, with navy used as ink and as reversed panels rather than as a page.
- **Field Ledger is the only one of the four that is *true*.** It is what the business actually
  produces. It is also the cheapest to execute well with zero photography, which matters because
  there is none yet (`CANON.md` §10.6) — a ruled typographic page looks finished with no images
  at all, and a hero-photo layout does not.

**Why the direction survived the palette swap intact.** Field Ledger was never a colour scheme.
It is a *structure*: marginalia in a rail, reading text in a measure, hairlines carrying every
boundary, and a document reproduced on the page. Navy and orange on warm stock is a ruled field
book from a different drawer — a river chart instead of a soil survey. Nothing about the argument
changes; the ink does.

**The seasonal mechanic, repurposed.** Instead of light/dark, the site carries two states:

| State | Dates | What it says |
|---|---|---|
| **IN SEASON** | March 1 – October 31 | Sixteen visits, two a month, $279. Open slots or MEMBERSHIP FULL. |
| **OFF SEASON** | November 1 – end of February | The season is closed. **The next season opens March 1.** Nobody is billed. Waitlist and project work only. |

It switches on date automatically, with a manual toggle to look at the other. This is colour used
semantically rather than decoratively: the palette tells you whether the business is running
before you read a word. It also removes the last surviving argument for the retired
year-round-price copy — the page no longer has to *defend* the winter, it just has to *state* it
(`messaging.md` §5.4).

---

## 2. Palette — navy and orange

🔁 **Reversed 2026-08-05.** The previous palette was oat / copper / Arts-and-Crafts green,
chosen. **This one is inherited.** He shipped a finished logo in navy and orange, and a brand
document that re-picks the colours of a printed mark is a brand document nobody will use.

Every value is given in hex and oklch. **Contrast ratios below are computed by hand** (sRGB →
linear → relative luminance, WCAG 2.x) and are stated against a named ground each time.
`wpc-web` should recompute every one of them during implementation and flag any disagreement —
`CANON.md` §9 says Playwright cannot be relied on here, so this arithmetic is the only check
there is.

**Roles are semantic. Do not use a colour outside its role.**

### 2.1 Constant tokens — identical in both seasons

| Token | Hex | oklch | Role | Contrast |
|---|---|---|---|---|
| `--paper` | `#F4F0E6` | `oklch(95.5% 0.014 89)` | Page ground. Warm ledger stock, never white. | — |
| `--paper-deep` | `#E7E1D3` | `oklch(91.1% 0.020 88)` | Alternating band, table zebra, the summary facsimile ground | — |
| `--wash` | `#E4E8EE` | `oklch(93.0% 0.009 258)` | Hover fill on a ledger row, In Season only. A cool wash on warm stock — the row visibly changes temperature. | — |
| `--ink` | `#141C26` | `oklch(22.3% 0.023 254)` | Body text, headlines, section-boundary hairline. A navy-cast near-black, tied to the mark. | **15.1:1** on `--paper` · **13.2:1** on `--paper-deep` · **14.0:1** on `--wash` |
| `--ink-muted` | `#4E5A66` | `oklch(46.2% 0.025 248)` | Secondary text, captions, rail marginalia | **6.2:1** on `--paper` · **5.4:1** on `--paper-deep` |
| `--rule` | `#C2BCAC` | `oklch(79.6% 0.023 90)` | The default hairline. The most-used non-text colour in the system. | 1.7:1 on `--paper` — **structural only, never text, never the sole carrier of information** |
| `--navy` | `#0E2E52` | `oklch(29.9% 0.075 254)` | The identity colour. Logo ground, masthead strip, reversed panels In Season. | **12.0:1** on `--paper` |
| `--ember` | `#D4622A` | `oklch(62.7% 0.159 44)` | The identity orange. Display figures on paper, the 2px finding rule, focus marker, non-text UI. | **3.3:1** on `--paper` — large text (≥24px, or ≥19px bold) and non-text UI only |
| `--ember-deep` | `#9E4820` | `oklch(50.6% 0.126 43)` | Orange at **text size on paper**: links, the join button label, inline prices in a finding. | **5.4:1** on `--paper` · **4.7:1** on `--paper-deep` · **5.0:1** on `--wash` |
| `--ember-lift` | `#EE7A34` | `oklch(70.1% 0.164 48)` | Orange **reversed on a dark ground**: the logo wordmark, links and the season stamp inside a navy panel. | **4.9:1** on `--navy` · **2.5:1 on `--paper` — banned on paper, at any size** |

**On the three-step ember ramp.** It is one colour with one meaning, set at three lightnesses
chosen by the ground it sits on. That is not three accents; it is the minimum needed to keep a
single semantic colour legible on warm paper *and* on a navy panel. Hue runs 43 → 44 → 48 as it
lightens, which is deliberate: a lighter orange needs slightly more yellow to stay chromatic
rather than going pink.

**Continuity, stated honestly:** `--ember-deep #9E4820` is a near-neighbour of the retired
`--copper #A6462A` (both ≈ `oklch(51% 0.13 40)`). The previous palette's action colour was
already almost his orange. That is a coincidence worth naming, not a claim that the old palette
predicted anything.

### 2.2 IN SEASON — March 1 through October 31

**Complete palette. Nothing else is needed to build this state.**

| Token | Hex | oklch | Role | Contrast |
|---|---|---|---|---|
| `--paper` | `#F4F0E6` | `oklch(95.5% 0.014 89)` | Page ground | — |
| `--paper-deep` | `#E7E1D3` | `oklch(91.1% 0.020 88)` | Bands, insets, facsimile ground | — |
| `--wash` | `#E4E8EE` | `oklch(93.0% 0.009 258)` | Row hover fill | — |
| `--ink` | `#141C26` | `oklch(22.3% 0.023 254)` | Text, boundary hairline | 15.1:1 / 13.2:1 / 14.0:1 |
| `--ink-muted` | `#4E5A66` | `oklch(46.2% 0.025 248)` | Rail, captions | 6.2:1 / 5.4:1 |
| `--rule` | `#C2BCAC` | `oklch(79.6% 0.023 90)` | Default hairline | structural |
| `--season-ground` | `#0E2E52` | `oklch(29.9% 0.075 254)` | Reversed panels, the season stamp, the active/hover hairline. **= `--navy`.** | 12.0:1 with `--paper` |
| `--season-support` | `#1A6E6B` | `oklch(49.0% 0.077 191)` | **Pool only.** The pool block in the scope list, pool rows in the summary facsimile, the pool rail tag. | **5.3:1** on `--paper` · **4.6:1** on `--paper-deep` |
| `--ember` | `#D4622A` | `oklch(62.7% 0.159 44)` | Display figures, the finding rule, focus | 3.3:1 — large / non-text |
| `--ember-deep` | `#9E4820` | `oklch(50.6% 0.126 43)` | Links and controls at text size | 5.4:1 / 4.7:1 / 5.0:1 |
| `--ember-lift` | `#EE7A34` | `oklch(70.1% 0.164 48)` | Orange inside a navy panel | 4.9:1 on `--season-ground` |

**Reversed out of `--season-ground` (navy):** `--paper` **12.0:1** · `--paper-deep` **10.5:1** ·
`--rule` **7.2:1** · `--ember-lift` **4.9:1** · `--ember` 3.6:1 (large / non-text only).

**Why teal is the pool colour and why it is confined.** It is the one hue in the system that is
neither the identity navy nor the identity orange, so it cannot be mistaken for either a brand
mark or an action. It appears exactly where a pool does. Using it as a generic accent destroys
the one place it carries meaning — and on this site the pool block is the block that has to be
read most carefully, because it is the block the disclaimer travels with (`voice.md` §8 item 41).

### 2.3 OFF SEASON — November 1 through the end of February

**Complete palette. The page drains: the ground goes from navy to a colder, lighter slate, the
hover wash goes from cool to warm, and orange becomes scarce because there is very little to act
on.**

| Token | Hex | oklch | Role | Contrast |
|---|---|---|---|---|
| `--paper` | `#F4F0E6` | `oklch(95.5% 0.014 89)` | Page ground — unchanged | — |
| `--paper-deep` | `#E7E1D3` | `oklch(91.1% 0.020 88)` | Bands, insets, **and the row hover fill in this state** | — |
| `--wash` | `#E7E1D3` | `oklch(91.1% 0.020 88)` | Aliased to `--paper-deep`. The cool wash does not exist off season. | — |
| `--ink` | `#141C26` | `oklch(22.3% 0.023 254)` | Text, boundary hairline | 15.1:1 / 13.2:1 |
| `--ink-muted` | `#4E5A66` | `oklch(46.2% 0.025 248)` | Rail, captions | 6.2:1 / 5.4:1 |
| `--rule` | `#C2BCAC` | `oklch(79.6% 0.023 90)` | Default hairline | structural |
| `--season-ground` | `#3A4E60` | `oklch(41.5% 0.039 246)` | Reversed panels, the OFF SEASON stamp, the active hairline | **7.6:1** with `--paper` |
| `--season-support` | `#1F6580` | `oklch(47.6% 0.080 228)` | The **March 1** date wherever it appears, and any freeze/weather note. Colder hue than navy — it reads as ice, not as brand. | **5.7:1** on `--paper` · **5.0:1** on `--paper-deep` |
| `--ember` | `#D4622A` | `oklch(62.7% 0.159 44)` | Display figures, focus | 3.3:1 — large / non-text |
| `--ember-deep` | `#9E4820` | `oklch(50.6% 0.126 43)` | The one or two remaining links: waitlist, project work | 5.4:1 / 4.7:1 |
| `--ember-lift` | `#EE7A34` | `oklch(70.1% 0.164 48)` | **Restricted.** See the rule below. | **3.1:1** on `--season-ground` — large text and non-text UI only |
| `--navy` | `#0E2E52` | `oklch(29.9% 0.075 254)` | **Identity only** — the mark, the masthead strip. Never a panel ground in this state. | 12.0:1 on `--paper` |

**Reversed out of `--season-ground` (slate):** `--paper` **7.6:1** · `--paper-deep` **6.6:1** ·
`--rule` **4.5:1** · `--ember-lift` **3.1:1** (large / non-text only) · `--ember` 2.3:1
(**banned**).

> **Hard rule for the Off Season panel.** Body-size text inside a reversed panel is `--paper`.
> Links inside a reversed panel are `--paper` **plus a 1px underline** — never orange. Only the
> OFF SEASON stamp itself and a display-size figure may be `--ember-lift`. This is stricter than
> the In Season panel and it is deliberate: off season there is almost nothing to click, and the
> palette should make that obvious before the copy does.

**Why the off-season ground is lighter rather than darker.** A darker winter ground would read as
"night," which is a mood. A *drained* ground reads as "closed," which is a fact. The page keeps
its structure and loses its saturation — the same thing the business does between November and
February.

### 2.4 Hard palette rules

1. **The ember ramp is a monopoly on "act."** If something is orange and it is not a link, a
   control, the MEMBERSHIP FULL stamp, a display figure, or a **finding awaiting a yes/no**, it
   is a bug. This is why the palette does not read as "safe grey with one accent": orange is not
   decorative, it is a semantic monopoly, and it is the only warm hue in a cool system.

   🔁 **The retired `--flag-ochre` is folded into this.** The old palette used a separate ochre
   for the 2px *finding* rule in the summary facsimile. Under navy and orange, an ochre sits too
   close to ember to read as a different thing, and — more importantly — a finding **is** a call
   to act. It is the sentence the customer says yes or no to (`voice.md` §2 rule 4;
   `CANON.md` §2). Merging them tightens the semantics: **ember means a decision point.** One
   colour, one meaning, three lightnesses.

2. **Choose the ember by its ground, not by taste.** `--ember-deep` on paper at text size,
   `--ember` for display figures and non-text marks on paper, `--ember-lift` inside a navy panel.
   `--ember-lift` on paper is 2.5:1 and is banned at every size, including in print.

3. **Navy is ink and panel, never page.** `--navy` may be a text colour, a hairline, a reversed
   panel ground, or the logo ground. It is never the background of a page, a section, or a
   viewport.

4. **Never pure white and never pure black.** `#FFFFFF` and `#000000` do not appear anywhere,
   including in print. The lightest value in the system is `--paper`; the darkest is `--ink`.

5. **The pool teal appears only where a pool does.** In Season only. It has no off-season role,
   because there is no pool work off season.

6. **Two seasonal states, no third.** No hover-only colours, no per-section themes, no third
   accent.

7. **Deliberate distance from FC Cincinnati.** The local orange-and-blue is FC Cincinnati —
   `#F05323` and `#263B80`, a safety orange on a royal-violet blue. This palette steers away on
   purpose: the navy is much darker and cooler (`oklch(29.9% 0.075 254)` vs a mid violet-blue),
   and the orange is a brick-rust rather than a safety orange. **Never brighten the ember past
   `--ember-lift` or lighten the navy toward royal.** A property-care business that reads as
   football merchandise loses the register in one glance.

---

## 3. Typography

Unchanged by the re-baseline. The pairing was never colour-dependent.

### 3.1 The pairing

**Display — Fraunces** (Undercase Type; Phaedra Charles and Flavia Zimbardi; SIL OFL, on Google
Fonts). Variable, with `wght`, `opsz`, `SOFT`, and `WONK` axes.

*Why Fraunces and not a trend pick:* it descends from Windsor, Souvenir, and the Cooper series.
Cooper Old Style is Oswald Cooper's — a Midwestern commercial serif that spent fifty years on
hardware-store signage, nursery catalogues, and seed packets across the Ohio Valley. That is the
exact register: sturdy, warm, slightly agricultural, and old enough that it does not date.
Fraunces gives access to that lineage with a variable axis to control how much of it shows.

**Settings are not optional.** Fraunces is capable of being twee and must be prevented from it:

```css
/* Display — headlines only */
font-variation-settings: "opsz" 120, "SOFT" 0, "WONK" 0;
font-weight: 600;
letter-spacing: -0.018em;
line-height: 0.94;
```

`SOFT 0` and `WONK 0` are mandatory everywhere on the site. High `opsz` narrows the letterforms
and lengthens the ascenders, which is what makes it read as sturdy rather than soft. **`WONK 1`
is permitted on exactly one element in the whole system: the wordmark on the yard sign and the
vehicle lettering**, where a single leaning `n` gives the mark a hand-cut quality at three feet.
Nowhere on screen, and **not inside the logo lockup** — §7 sets the lockup in mono.

**Text — IBM Plex Sans** (IBM; SIL OFL). An industrial grotesque drawn for an engineering
company, with true tabular lining figures and an unusually clear 1/l/I. It has character without
personality, which is what body copy about hose bibs needs.

**Data — IBM Plex Mono** (IBM; SIL OFL). Same superfamily, so it is one type system plus a
display face, not three unrelated fonts. Used **only** for: the logo wordmark, the record stamps,
the marginal rail labels, dates, route days, visit numbers, the price, and the summary facsimile.

> **Exception noted against `.claude/rules/web/performance.md`** ("max two font families unless
> there is a clear exception"). The exception is that the mono *is* the texture of the ledger —
> it is what makes `$279` and `VISIT 07 OF 16` read as readings rather than as claims. It is paid
> for by subsetting: Plex Mono ships **uppercase, digits, and `. , : · $ + — / ( )` only**, one
> weight (500), which is under 8 KB WOFF2. Total font budget: Fraunces variable subset (Latin,
> wght 500–700) ≈ 28 KB, Plex Sans 400/600 ≈ 34 KB, Plex Mono 500 subset ≈ 8 KB. **≈ 70 KB,
> inside the microsite budget.** Preload Plex Sans 400 only.

### 3.2 Stacks, with fallbacks

```css
--font-display: "Fraunces", "Iowan Old Style", "Palatino Linotype", Palatino,
                Georgia, "Times New Roman", serif;
--font-text:    "IBM Plex Sans", "Segoe UI", Roboto, "Helvetica Neue",
                Arial, sans-serif;
--font-mono:    "IBM Plex Mono", ui-monospace, "SF Mono", "Cascadia Mono",
                "Roboto Mono", Menlo, Consolas, monospace;
```

The serif fallback chain is chosen for width and colour, not availability: Iowan Old Style and
Palatino are both sturdy old-style faces, so a Fraunces failure degrades in the right direction
instead of landing on Times.

### 3.3 Scale

Non-linear on purpose. The gap between `--type-body` and `--type-display` is roughly **5.9×**,
which is where the hierarchy comes from — not from weight, not from colour.

| Token | Value | Face / treatment |
|---|---|---|
| `--type-display` | `clamp(2.75rem, 1.55rem + 5.3vw, 6.25rem)` | Fraunces 600, lh 0.94, ls −0.018em |
| `--type-h2` | `clamp(1.75rem, 1.24rem + 2.2vw, 3rem)` | Fraunces 600, lh 1.06, ls −0.012em |
| `--type-h3` | `clamp(1.25rem, 1.12rem + 0.55vw, 1.5rem)` | Plex Sans 600, lh 1.25 |
| `--type-lede` | `clamp(1.125rem, 1.02rem + 0.5vw, 1.375rem)` | Plex Sans 400, lh 1.55, `--ink` |
| `--type-body` | `1.0625rem` (17px) | Plex Sans 400, lh 1.65 |
| `--type-small` | `0.875rem` | Plex Sans 400, lh 1.55, `--ink-muted` |
| `--type-stamp` | `0.75rem` | Plex Mono 500, uppercase, ls +0.14em |
| `--type-rail` | `0.6875rem` | Plex Mono 500, uppercase, ls +0.1em, `--ink-muted` |
| `--type-figure` | `clamp(2rem, 1.5rem + 2vw, 3.25rem)` | Plex Mono 500, `font-variant-numeric: tabular-nums` |

`--type-figure` exists for exactly three numbers: **the open-slot count**, **the monthly price**,
and **the visit number** (`VISIT 07 OF 16`). They are set in mono at display size — a deliberate
collision of "data" and "headline" that makes the three facts the business turns on look like
readings rather than claims. At `--type-figure` sizes, `--ember` clears the large-text threshold
on `--paper`, which is the one place it may be used as text.

### 3.4 Typographic rules

- **Measure caps at 68 characters.** The ledger measure is a reading column, not a container.
- **Sentence case everywhere** (`voice.md` §3). Caps only on stamps and rail labels.
- **`font-variant-numeric: tabular-nums` on every price, date, count, and visit number**,
  including in Plex Sans. Figures that shift horizontally between rows destroy the ledger read.
- **Hanging punctuation on the display headline** (`hanging-punctuation: first last` where
  supported) so the left edge of the text aligns with the left edge of the rules.
- **No italics for emphasis.** Emphasis is `--type-stamp` in the rail, or an `--ember` underline.
  Italic Fraunces is reserved for the season name in running text.
- **No letterspaced lowercase, ever.** Tracking is positive only on uppercase mono.
- 🔁 **The three status stamps are IN SEASON, OFF SEASON, and MEMBERSHIP FULL.** GREEN SEASON and
  DORMANT SEASON are retired strings and must not survive in markup, CSS `content`, token names,
  filenames, or slugs (`voice.md` §3, the non-prose surface rule).

---

## 4. Layout posture

Unchanged in structure. Colour references updated to the new tokens.

### 4.1 The rail and the measure

The signature structure, and the thing that makes this not a template: **an asymmetric two-track
page**. A narrow left **rail** carries marginalia — dates, route-day stamps, visit numbers, entry
numbers, `IN SEASON` — set in mono, uppercase, small, in `--ink-muted`. A wide right **measure**
carries the reading text. Between and beneath them: hairlines.

```
┌───────────────────────────────────────────────────────────────────┐
│ WPC513 · WESTSIDE PROPERTY CARE 513          IN SEASON · MAR–OCT  │
├──────────────┬────────────────────────────────────────────────────┤
│              │                                                    │
│  ENTRY 01    │  Sixteen visits. Six properties.                   │
│  MAR–OCT     │  Written down every time.                          │
│              │                                                    │
├──────────────┼────────────────────────────────────────────────────┤
│  SCOPE       │  Maintain everything. Deep-clean nothing unless    │
│  BLOCK 1–8   │  it's specifically scheduled. I walk the …         │
│              │                                                    │
├──────────────┼────────────────────────────────────────────────────┤
│  POOL        │  Skim. Brush the steps and corners. Vacuum up to   │
│  30 MIN MAX  │  about 30 minutes. Both baskets. Backwash if the   │
│              │  system wants it. Salt reading and warning lights. │
│              │  ── NO GUARANTEE OF WATER CHEMISTRY ────────────   │
└──────────────┴────────────────────────────────────────────────────┘
```

The `POOL` rail tag and its rule are the only `--season-support` teal on the page, and the
disclaimer sits **inside the same block** — that is a layout requirement, not a copy preference
(`voice.md` §8 item 41). A layout that puts the disclaimer in a footnote fails the audit.

**Grid:** 12 columns, 24px gutter, 1240px max — but never used as 12 equal cells. The rail is
columns 1–3, the measure is 4–10, and columns 11–12 are a **bleed track**: photographs and the
season divider run off the right edge of the viewport, past the container. That single decision
is what breaks the page out of a centred content well.

**Responsive:**
- **≥1024px** — rail and measure side by side, bleed track live.
- **768–1023px** — rail collapses to a mono label line sitting *on* the rule above each entry.
  Bleed becomes full-width.
- **<768px** — single column, 20px side margin, hairlines run full-bleed to the margins so the
  ledger read survives. Rail labels sit above each entry.

### 4.2 The masthead — what replaces the hero

`design-quality.md` bans the stock centred hero with a gradient blob. This one is left-aligned,
grid-breaking, and carries live data.

1. A **status strip** across the top on `--navy`: the logo lockup at minimum width on the left,
   the season stamp on the right in `--ember-lift`, a `--rule` hairline beneath. It becomes
   sticky on scroll and is the one element permitted a shadow, because it overlaps the content.
   **The strip is navy in both seasons** — it carries the mark, and the mark does not change with
   the calendar.
2. The **display headline** set left, breaking one column *left* of the measure so it starts
   flush with the rail — it visibly does not respect the grid the body respects.
3. Immediately under it, the **two live figures**, set in `--type-figure` mono: `2 OF 6 SPOTS
   OPEN` and `$279 / MONTH`. When full, `MEMBERSHIP FULL` reversed out of `--ember-deep` in a
   hairline-boxed stamp. **These are the highest-value elements on the page and they are facts,
   not badges.**
4. The **season strip** (§4.5) sits directly beneath, running into the bleed track.
5. The **photograph** occupies the bleed track and runs off the right edge, cropped hard,
   overlapping the masthead rule by ~40px.

No gradient. No blob. No centred anything.

### 4.3 Entries, not cards

**There are no cards on this site.** Not one. Content units are **ledger entries**: a rail label,
a measure block, a 1px `--rule` hairline beneath, and nothing else. No border box, no background
fill at rest, no radius, no shadow.

This is what replaces the banned default card grid, and it is better here — a card grid says
"these things are equivalent," which is exactly wrong for a page where the exclusions matter more
than the inclusions.

**Vertical rhythm is deliberately uneven.** Five distinct gaps, never interchangeable:

| Token | Value | Between |
|---|---|---|
| `--space-row` | `0.75rem` | Lines inside one entry |
| `--space-entry` | `1.5rem` | Entry to entry |
| `--space-block` | `clamp(2rem, 1.4rem + 2.6vw, 3.5rem)` | Block to block inside a section |
| `--space-section` | `clamp(4rem, 2.4rem + 6.5vw, 10rem)` | Section to section |
| `--space-chapter` | `clamp(6rem, 3rem + 12vw, 16rem)` | Either side of the season divider |

**Rule: no two adjacent levels of hierarchy may use the same gap.** If a layout reads as evenly
padded, it is wrong.

### 4.4 Radius, shadow, borders

Deliberately close to zero, and meaningful where present. This is how the "uniform radius and
shadows everywhere" ban is answered.

```css
--radius-flat:    0;      /* panels, photos, tables, entries, the logo square — the default */
--radius-stamp:   2px;    /* the status stamps */
--radius-control: 3px;    /* buttons and inputs, and nothing else */
```

Nothing on any surface exceeds 3px. **The logo square is `--radius-flat`, always** — a rounded
mark would be the single loudest wrong note in the system. **Shadows exist on exactly two
elements** — the sticky status strip and the bleeding photograph — because both physically
overlap something:

```css
--shadow-overlap: 0 1px 0 var(--rule),
                  0 14px 28px -20px oklch(22.3% 0.023 254 / 0.35);
```

Depth everywhere else comes from **overlap, bleed, and the hairline system**, not from elevation.

### 4.5 The three composed set-pieces

Every surface needs at least one thing that is obviously drawn rather than assembled. The first
two are new; the third survives from the previous direction.

🔁 **The old "price ledger" set-piece is retired.** It was a ruled multi-row table of
configurations, built because four prices existed and a fifth might appear. **There is one
price.** A three-row ledger with one row in it is a defect, not a design.

**1. The single figure.** The price is not a table and not a card. It is **one ruled line**: a
1px `--ink` rule, `$279` set in `--type-figure` mono hard against the left edge of the measure,
`/ MONTH` in `--type-stamp` sitting on the baseline beside it, and a mono rail label reading
`ONE PRICE`. Directly beneath, in `--type-small`, the boundary clauses in a single ruled block:
*up to two hours on site · highest priority first · completion of every possible task every visit
is not guaranteed · unused time does not roll over.* Nothing is right-aligned, because there is
nothing to align against. **The absence of a second row is the argument** (`voice.md` §3, the
one-price rule).

**2. The season strip.** A hairline running the full measure and into the bleed track, carrying
**sixteen tick marks** — two per month, March through October — with month abbreviations set in
`--type-rail` beneath. Visits already delivered are `--ink` ticks; visits still to come are
`--rule` ticks; the current or next visit is a filled `--ember` square. The strip terminates in a
mono label: `16 VISITS · MAR 1 – OCT 31`.

Off Season, every tick is `--rule`, the strip is preceded by a `--season-support` block reading
`NEXT SEASON OPENS MARCH 1`, and the ember square sits on the first March tick.

This is the argument in `messaging.md` §1 drawn rather than written: it makes the season legible
as a shape, it makes *the sixteenth visit* countable, and off season it states the closure as a
fact instead of a paragraph. **It is page furniture, not a chart** — no axes, no scale, no data
beyond a schedule anyone could copy off the agreement. Do not let it acquire a tooltip, a
percentage, or an animation that counts.

**3. The summary facsimile.** A real, typeset service summary on the page — rail stamp reading
`WPC513 · VISIT 07 OF 16`, the work performed, then a *finding* marked with a 2px `--ember`
margin rule and its price in the rail in `--ember-deep`. It is the product demo, the voice demo,
and the proof of the promise in one object, and it belongs above the price. Set at 0.9× body size
on a `--paper-deep` ground with hairlines top and bottom, so it reads as a document reproduced on
the page rather than a UI panel. If the property in the facsimile has a pool, the pool rows carry
the `--season-support` rail tag **and the disclaimer**.

---

## 5. Texture and atmosphere

**Warm stock, cold ink, physical, and slightly used.** The reference condition is a working chart
folded in a truck door pocket: buff paper, dark blue printing, an orange overprint where
something needs attention.

**1. Paper grain.** One layer, site-wide, `position: fixed`, `pointer-events: none`,
`mix-blend-mode: multiply`, **4% opacity**. Generated as an inline SVG `feTurbulence`
(`type="fractalNoise" baseFrequency="0.82" numOctaves="3"`) tiled at 180×180, so it costs about
1 KB and no network request. It is meant to be invisible until you put it next to a version
without it.

**2. The hairline system is the texture.** `--rule` at 1px is doing more visual work than any
image on the site. 🔁 **Three weights, and the third changed colour:**

- `1px --rule` — the default separator
- `1px --ink` — a section boundary
- `2px --ember` — **a finding, and only a finding.** Formerly ochre; folded into the ember
  monopoly (§2.4 rule 1). At 3.3:1 on `--paper` it clears the non-text contrast threshold, so it
  is a legitimate carrier of meaning and not decoration.

**3. The season divider.** The one ornamental element, used once per page, in the bleed track. A
20px band of hand-set marks — a horizontal rule broken by short verticals at irregular intervals
(a survey tick line, not a repeating pattern). In Season the ticks are `--season-ground` navy at
full length; Off Season they are `--season-ground` slate at half length with the gaps doubled, so
the divider itself gets sparser when the business is closed. Drawn as inline SVG, ~400 bytes.
**Do not confuse it with the season strip in §4.5** — the divider is ornament, the strip is
information.

**4. What is banned from the texture layer:** gradients of any kind, glassmorphism, blur, mesh
backgrounds, glows, animated blobs, particles, and duotone photo treatment. If a surface needs
visual interest, the answer is a rule, a bleed, or a bigger size jump.

---

## 6. Motion posture

**Restrained to the point of being noticeable by its absence.** A ledger does not animate. Motion
exists only to make the page's structure legible as it arrives.

```css
--dur-quick: 140ms;
--dur-base:  260ms;
--dur-draw:  420ms;
--ease-draw: cubic-bezier(0.16, 1, 0.3, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
```

**Entrance — the rules draw.** On first intersection, each section's hairlines animate
`transform: scaleX(0) → scaleX(1)` from `transform-origin: left`, `--dur-draw`, `--ease-draw`,
staggered 60ms down the section. Text does not move; it fades `opacity 0 → 1` over `--dur-base`
with no translate. The effect is a page being ruled and then written on. Compositor-only
properties throughout.

**Hover — a ledger row.**
- The row fills `--wash` (In Season) or `--paper-deep` (Off Season) over `--dur-quick`.
- The hairline beneath goes `--rule → --season-ground` and thickens via `scaleY(2)`, not via a
  border-width change.
- The rail label translates `2px` right.

Three coordinated changes on one gesture. That is what "designed hover states" means here.

**Focus — visible and in-brand.**
`outline: 2px solid var(--ember); outline-offset: 3px; border-radius: 0;` plus a filled 6px
`--ember` square drawn in the rail at the row's baseline. Keyboard users get the *same* marker the
summary uses for a finding, which is now literally the same colour. Focus is never removed, and it
is never only a colour change.

**Active.** `transform: translateY(1px)` and the rule under the control goes to `--ink`. No scale,
no bounce.

**Season toggle.** Transitions only the `--season-*` and `--wash` custom properties over 320ms.
Layout, type, rules, and the masthead navy do not move. The page changes temperature, not shape.

**Banned:** parallax, scroll-jacking, scroll-driven number counters, typewriter effects, marquees,
autoplaying video, spring/bounce easing, and anything animating `width`, `height`, `top`, `left`,
`margin`, or `font-size`. **The season strip never animates its ticks** — a filling progress bar
would turn a schedule into a countdown, which is manufactured urgency in motion form
(`voice.md` §6.5).

**Reduced motion.**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
Hairlines render at `scaleX(1)` immediately. Hover and focus states still change colour — they are
information, not decoration.

---

## 7. The mark

🔁 **Reversed 2026-08-05.**

**What this section used to say:** *"There is no icon and there will not be one. No leaf, no house
outline, no water droplet, no crossed rake and net. Every one of those is available to any
competitor and none of them say 'one person who writes things down.'"* The mark was specified as a
purely typographic lockup — Fraunces wordmark, hairline, `WPC513` in mono sitting on the rule.

**What is true:** he has a finished logo with a **house-and-tree line mark**
(`_source/2026-08-05-owner-decisions.md` §1). The old argument was a reasonable position to hold
before a mark existed. It is not a reasonable position to hold against one that is printed on the
document customers sign. **The typographic lockup is retired.** What survives from it is the
hairline rule, which is still in the mark and still ties it to the page.

### 7.1 The lockup, specified

```
┌──────────────────────────────────┐  ← --navy square, --radius-flat (0)
│                                  │
│            ╱▔▔╲   ▲              │  ← house-and-tree line mark
│           ╱    ╲  ║              │     --paper stroke, 2 units
│          └──┬──┘  ║              │
│                                  │
│         W P C   5 1 3            │  ← --ember-lift, Plex Mono 500
│                                  │     uppercase, ls +0.10em
│       ──────────────────         │  ← --paper rule, 1 unit
│                                  │
│   W E S T S I D E   P R O P …    │  ← --paper, Plex Mono 500
│                                  │     small caps, ls +0.16em
└──────────────────────────────────┘
```

**Geometry, on a 64-unit square:**

| Element | Value |
|---|---|
| Square | 64 × 64, `--navy`, zero radius |
| Margin, all sides | 6 units |
| House-and-tree line mark | Centred, 20 units tall, top edge at 8 units. Stroke 2 units, round cap, no fill. |
| `WPC 513` | Cap height 12 units, baseline at 44. `--ember-lift`, mono 500, `ls +0.10em`. **One optical space between `WPC` and `513`, fixed at 0.5 em.** |
| Rule | 1 unit tall, 40 units wide, centred, at y = 48. `--paper`. |
| `WESTSIDE PROPERTY CARE` | Cap height 4 units, baseline at 56. `--paper`, mono 500, small caps, `ls +0.16em`, set to fit inside 52 units. |

**Contrast inside the mark:** `--paper` on `--navy` = **12.0:1**. `--ember-lift` on `--navy` =
**4.9:1**. Both clear AA at every size the mark ships at.

> 🔶 **Confirm with the owner.** The source fixes the *elements* and the *palette* — navy ground,
> orange wordmark, line mark above, rule beneath, small caps below — but not the colour of the
> icon, the rule, or the small caps. This file specifies them as `--paper` so the wordmark is the
> only warm element and reads as the name. **If his artwork colours them differently, his artwork
> wins and this table gets edited to match.** Do not redraw his logo to fit this spec.

### 7.2 The house-and-tree mark itself

Drawn as a **line mark, not a silhouette**: a simple gabled house form and a single conifer or
deciduous tree beside it, in stroke only, no fill, no perspective, no window details, no smoke,
no sun. It should look like something drawn once with a technical pen, not like an icon from a
set.

**Why a line mark and not a filled badge:** the entire system is built from 1px hairlines (§5).
A stroked mark is made of the same substance as the page. A filled or gradient icon would be the
only solid shape in the design and would read as an import.

**Never:** add a pool, a droplet, a leaf swirl, a grill, a wrench, a swoosh, a shield, or a
starburst. Never animate it. Never outline it in a second colour. The mark is his; the rule here
is only that nothing gets added to it.

### 7.3 Applications

| Application | Mark |
|---|---|
| **Favicon 16×16** | `513` alone, `--ember-lift` mono on `--navy`, zero radius. The line mark is illegible at 16px and must not be shipped scaled. |
| **Favicon 32×32** | House-and-tree line mark alone on `--navy`, stroke thickened to 2.5 units. No type. |
| **Apple touch icon 180×180** | Line mark + `WPC 513` + rule. The small-caps line is dropped — it is unreadable at that size and its absence is not a defect. |
| **Truck door** | Full lockup at 12 inches square minimum, plus a separate line beneath the door lockup: `SEASONAL OUTDOOR LIVING & PROPERTY CARE` and `{{phone}}`, set in Plex Sans 600, `--navy` on the vehicle paint or `--paper` on a navy panel. |
| **Tailgate / equipment cases / tool asset tags** | `WPC513` stencil alone, one word, `--navy` or `--paper`. No square, no icon. |
| **Hat** | House-and-tree line mark alone, embroidered in `--ember-lift` on navy or `--navy` on natural. **No type** — at hat scale the small caps fill with thread. |
| **Work shirt, left chest** | Line mark + `WPC 513`, no square, no small-caps line. |
| **Yard sign** | Full lockup top-left at 8 inches, then the words at size — `WESTSIDE PROPERTY CARE 513` in Fraunces 600 (`WONK 1` permitted here) — then the fact line. The lockup identifies; the words are what a driver reads. |
| **Door hanger / letterhead / invoice** | Full lockup at 1.25 inches, top-left, with the hairline of the page running out of the bottom edge of the square. |
| **Website masthead** | Full lockup at 40px square inside the `--navy` status strip. |
| **Summary and invoice header (the record stamp)** | Type only, no square: `WPC513 · SERVICE SUMMARY · {{address_short}} · VISIT 07 OF 16 · MONDAY, JUNE 15` |
| **`og:image` / GBP profile image** | Full lockup on `--navy`, centred in a 1200×630 or 1:1 field, with `SEASONAL OUTDOOR LIVING & PROPERTY CARE` beneath in `--paper`. No photograph behind it. |

**Clear space:** 6 units — the square's own margin — repeated outside the square on all four
sides. Nothing enters it.

**Minimum sizes:** full lockup **40px** on screen, **1 inch** in print. Below that, the line mark
alone down to 32px, then `513` alone. `WPC 513` inside the lockup is **never** set on two lines,
never cropped, and never split so that `WPC` appears without `513` — that would produce the one
string `brand-brief.md` §1.2 bans outright.

**Never:** on a gradient, with a drop shadow, rotated, on a photograph, on any ground other than
`--navy` (or knocked out in `--paper` where a single colour is all that is available), stretched,
recoloured outside the two mark colours, or with the tagline locked inside the square.

---

## 8. Photography

**No real photography exists yet** (`CANON.md` §10.6). Two rules follow, and they are absolute.

1. **Stock photography is never a final answer.** Not a "placeholder we'll swap." A stock patio on
   this site would contradict the entire positioning within one scroll.
2. **Until real photographs exist, ship the typographic and rule-based surfaces.** The Field Ledger
   direction was chosen partly because it looks finished with zero images. Where a photo will
   eventually go, ship an empty ruled band in `--paper-deep` with a mono caption naming what
   belongs there. That is honest, it looks intentional, and it is better than a stranger's
   backyard.

### The shot list — what each frame must contain

| # | Frame | Must show | Must not |
|---|---|---|---|
| 1 | **Masthead** | A pool deck or patio mid-visit, standing height, his own equipment in frame (blower down, pool net leaning). 3:2 landscape with dead space in the left third for the headline. | People, faces, a house that identifies a client |
| 2 | **Hands** | One close frame of his hands working — skimmer net breaking the surface, the vacuum head going in, or the grease tray coming out of a flat-top. Proves it is one person. | A posed grip, gloves that look new |
| 3 | **The finding** | Something genuinely unflattering: a window well packed with leaves, a skimmer basket full, a split hose bib, a torn pool cover. **Do not clean it before shooting.** | Anything staged or improved |
| 4 | **The record** | A real service summary on a phone, or the laminated checklist on a tailgate with dry-erase marks on it, address obscured. | An invented summary |
| 5 | **The equipment pad** | The salt cell display, the pump baskets out, the backwash valve. This is the frame that makes the pool block credible — and it must be captioned with the disclaimer, not with a competence claim. | Any implication that he is servicing the system, any "before/after" water shot |
| 6 | **End of season** | Covers going on, furniture stacked, the last leaves on an empty deck, late-October light. Non-negotiable — without it the site cannot show what the sixteenth visit looks like. | Snow. There is no winter service in this membership; a snow photo would state the opposite. |
| 7 | **The mark** | The `WPC513` stencil or the full lockup on the truck door, in daylight. | A rendered mockup |

### Grade

Available light, no flash, overcast or the hour before sunset. Hold the blues cool and let the
warm stock of the page do the warming. Pull 10–15% of the saturation out of the sky. **No duotone,
no colour overlay, no navy/orange colour grade applied to photographs, no heavy vignette, no HDR,
no film-grain filter** — the page already has grain, and grading a photo to match the palette is
exactly the kind of thing a franchise does.

Every image: explicit `width`/`height`, AVIF with WebP fallback, `loading="lazy"` except frame 1
(`loading="eager" fetchpriority="high"`). Alt text follows `voice.md` — name the object and locate
it. "Skimmer basket lifted out, packed with maple seeds," not "pool maintenance." Frame 5's alt
text and caption both carry the disclaimer (`voice.md` §8 item 41).

---

## 9. Against `design-quality.md` — required qualities delivered

The rule asks for at least four of ten. This direction delivers **eight**, each with its mechanism.

| # | Quality | How |
|---|---|---|
| **1** | Clear hierarchy through scale contrast | ~5.9× from `--type-body` (17px) to `--type-display` (up to 100px), and rail labels at 11px mono against it. Hierarchy is carried by size, never by weight-plus-grey. |
| **2** | Intentional rhythm, not uniform padding | Five distinct vertical gaps (§4.3) with an explicit rule that no two adjacent hierarchy levels may share one. |
| **3** | Depth and layering | The bleed track running photos and the season strip off the right edge; the navy status strip overlapping the masthead rule; the summary facsimile inset on `--paper-deep`; the grain multiply layer. Depth from overlap, not from elevation. |
| **4** | Typography with a real pairing strategy | Fraunces (Cooper/Windsor lineage, §3.1) + IBM Plex Sans/Mono as one superfamily, with the mono carrying the mark itself. Axis settings, tracking, and leading specified per role, not left at default. |
| **5** | Colour used semantically | The ember ramp is a monopoly on "act," including the finding rule and the focus marker. `--season-support` teal appears only where a pool does. The whole palette flips on the calendar to say whether the business is open. |
| **6** | Designed hover / focus / active | Three coordinated changes per hover (§6). Focus draws the same ember marker the summary uses for a finding. Active moves 1px and darkens the rule. |
| **7** | Grid-breaking editorial composition | Asymmetric rail-and-measure; the display headline breaking one column left of the body; columns 11–12 as a live bleed track past the container; the season strip running out of the measure into it. |
| **8** | Texture and atmosphere | 4% fractal-noise paper grain, the three-weight hairline system, and the survey-tick season divider that gets sparser when the season closes. |

Not claimed: **#9 motion that clarifies flow** — motion here is deliberately minimal and does not
carry meaning beyond arrival. **#10 data visualisation** — there is no data viz. The season strip
is a typeset schedule and the single figure is a typeset price; dressing either as a chart would
be exactly the "dashboard by numbers" the rule warns about, and §4.5 forbids it explicitly.

## 10. Against the banned-pattern list, item by item

| Banned | How this direction refuses it |
|---|---|
| Default card grids with uniform spacing | **No cards exist.** Ledger entries: rail label, measure, hairline. §4.3 |
| Stock centred hero with gradient blob and generic CTA | Left-aligned masthead, headline breaking the grid left, photo bleeding right off the viewport, live open-slot and price figures instead of a CTA badge. Gradients banned outright. §4.2, §5 |
| Unmodified library defaults | No component library. Hand-built static HTML/CSS. Every font axis, tracking value, leading, gap, duration, and hex is specified here. |
| Flat layouts with no layering | Bleed track, sticky overlap, inset facsimile, grain layer. §4.4 |
| Uniform radius, spacing, and shadows | Radius is 0 by default with two meaningful exceptions capped at 3px; five non-interchangeable spacing tokens; shadows on exactly two overlapping elements. §4.3, §4.4 |
| Safe grey-on-white with one decorative accent | Ground is warm stock `#F4F0E6`, never white; ink is a navy-cast near-black, never `#000`. Orange is semantic and appears in three grounds-appropriate lightnesses; teal is confined to the pool. Two seasonal states. §2 |
| Dashboard-by-numbers | No dashboard, no charts, no sidebar. The season strip is explicitly forbidden from becoming one. §4.5, §9 |
| Default font stacks without a reason | Fraunces defended by lineage in §3.1; Plex chosen for tabular figures and superfamily coherence; fallback chains chosen for width and colour. §3.2 |
| Defaulting to dark mode | Both seasonal states are light on warm stock. The refusal is argued in §1. |

---

## 11. Reference set

Eight references, and what to take from each. None are to be copied; each fixes one decision.

| Reference | Take |
|---|---|
| **Field Notes Brand** (Chicago; Coudal Partners and Draplin) | The whole premise. Kraft stock, ruled interiors, mono specification blocks, and a brand built on the idea that writing it down is the point. Their line — *"I'm not writing it down to remember it later, I'm writing it down to remember it now"* — is the summary discipline in seven words. |
| **USGS 7.5-minute topographic quadrangle sheets** | The rail, and the palette's structural logic: dark blue and black printing on a buff ground, dense marginalia in small caps around a working field, hairline rules doing all the structural work, and a legend typeset as part of the drawing. This is where navy-on-warm-stock is already a solved problem. |
| **US Army Corps of Engineers Ohio River navigation charts** (Louisville District — the charts of the river that runs past the west side) | Working charts, printed to be used outdoors, kept in a vehicle. The register the texture section describes in §5, and a genuinely local artefact rather than a borrowed one. |
| **Allis-Chalmers "Persian Orange"** (named 1929 after California poppy fields; the redder Persian Orange #2 ran 1961–70) | The orange. `--ember` is a brick-rust in that family, not a safety orange. It is a Midwestern equipment colour with fifty years of sitting in fields, which is the exact opposite of a trend orange. |
| **The National Park Service arrowhead** | The register for §7.2's house-and-tree line mark: a small number of literal objects, drawn plainly, inside a solid shape, with no cleverness. It has survived since 1951 without a redesign because it never tried to be witty. |
| **The Old Farmer's Almanac** (typographic tradition, not the current site) | The seasonal structure, ruled tables treated as page furniture, and the tone of a document that assumes you are using it outdoors. Also the direct ancestor of the season strip in §4.5. |
| **Filson and the archived Best Made Co. catalogues** | Photography grade: available light, object on the ground, honest wear, no lifestyle staging. Premium without gloss. |
| **IBM Plex specimen** (IBM Design) + **Fraunces specimen** (Undercase Type) | The Sans/Mono relationship and the tabular figure set the single figure and the season strip depend on; and the axis behaviour that makes §3.1 pin `SOFT 0 / WONK 0`. |

🔁 **Retired: Rookwood Pottery matte glazes.** The previous reference set justified the palette
through Rookwood's Arts-and-Crafts matte greens and the grey-brown *Ombroso* line — a genuinely
Cincinnati source for a green that no longer exists in this system. **Rookwood has no navy.**
Keeping the citation and pointing it at a different colour would be a post-hoc rationalisation,
which is worse than having no provenance argument. The honest replacement: **this palette was not
chosen, it was inherited from a finished logo.** That is a stronger provenance than any museum
reference, because it came from the person whose name is on the truck.

*One narrow thing does survive from Rookwood and it is about finish, not colour:* the matte glazes
are genuinely unreflective, and that is the surface quality this system wants — nothing on any
surface should look wet, glossy, or lit. Cite it for that and nothing else.

**Deliberately not references:** landscape-construction portfolio sites, pool-service sites,
home-services SaaS marketing, anything with a hero video of a lit pool at dusk, and **FC
Cincinnati** — the local orange-and-blue, which this palette steers away from on purpose (§2.4
rule 7).

---

## 12. Handoff to `02-website/`

Non-negotiable when this direction is implemented:

1. **Every value in §2, §3, and §4 becomes a CSS custom property in `styles/tokens.css`.** No
   hardcoded hex, no hardcoded px in component CSS.
2. **Recompute every contrast ratio in §2 before shipping.** They were computed by hand here.
   `CANON.md` §9 says Playwright cannot be relied on in this environment, so hand arithmetic
   against the same formula is the check. Flag any disagreement to `wpc-brand` rather than
   adjusting a colour.
3. **No component library, no framework, no build step.** The site is standalone HTML and CSS.
4. **Zero cards.** If a `.card` class appears in the stylesheet, the direction was not followed.
5. **Retire the old token names, not just the old values.** `--copper`, `--wash-green`,
   `--flag-ochre`, `--season-accent`, and any identifier containing `green` or `dormant` must not
   survive. A stale token name is how a retired season name outlives a rewrite (`voice.md` §3, the
   non-prose surface rule).
6. **The open-slot count, the price, and the visit number are content, not decoration** — each in
   one place in the markup, easy for a non-developer to change, because they have to be true every
   day.
7. **There is one price and it renders once per page as a single figure.** No table, no rows, no
   `<th>`, and nothing that would still make grammatical sense if a second price were added.
8. **Season switching is date-based** — **March 1 through October 31 = IN SEASON; November 1
   through the end of February = OFF SEASON** — with a manual toggle, and it changes only the
   `--season-*` properties and `--wash`. The masthead navy and the mark do not change.
9. **The Off Season state must ship complete, not as a degraded In Season.** It has its own
   palette (§2.3), its own headline (`messaging.md` §3), its own single ask, and the `NEXT SEASON
   OPENS MARCH 1` block. A site that only works eight months a year fails four months a year.
10. **Ship with no photographs rather than with stock ones.** Ruled bands in `--paper-deep` with
    mono captions naming the missing frame.
11. **Budgets:** ≤ 80 KB JS, ≤ 15 KB CSS, ≤ 70 KB fonts (`performance.md`, microsite row). The
    grain, the season divider, the season strip, and the logo are all inline SVG and cost no
    request.
12. **Favicons ship as three separate files**, not one scaled SVG (§7.3). A scaled lockup at 16px
    is unreadable and reads as a smudge in a tab strip.

---

## Related files

- `brand-brief.md` §1 — the name and mark rules §7 implements, including the ban on bare "WPC"
- `voice.md` §3, §7, §8 — the status stamps §3.4 sets, the rendered-case rule checklist item 32
  enforces, and item 41, which §4.1 and §8 are built to satisfy
- `messaging.md` §1, §3 — *the sixteenth visit*, which the season strip in §4.5 draws, and the
  section order the layout in §4 carries
- `CANON.md` §3, §4 — the price, the season, the cap, and the argument
- `_source/2026-08-05-owner-decisions.md` §1 — the logo this palette and this mark come from
- `.claude/rules/web/design-quality.md` — answered item by item in §9 and §10
- `.claude/rules/web/performance.md` — the font-count exception in §3.1 and the budgets in §12
