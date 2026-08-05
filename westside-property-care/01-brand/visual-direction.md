# Visual Direction

**Owner:** `wpc-brand` · **Status:** source of truth for how Westside Property Care looks
**Binding on:** `02-website/`, `03-marketing/`, and every printed piece
**Governed by:** `.claude/rules/web/design-quality.md` — its anti-template policy is enforced
in §9 and §10 of this file

---

## 1. The direction, named and defended

# FIELD LEDGER

**The site is the service report.**

The artifact at the centre of this business is a written record: twice a month, a document that
says what was done, where, and what was found (`operating-model.md` §7, rule 5). It is the
product's proof, its sales mechanism, and the only thing a member touches between visits. So
the website, the door hanger, the estimate, and the report are all the **same object at
different sizes** — a ruled page from a working field ledger, kept by one person who writes
things down.

That gives every design decision a test that is not a matter of taste: *would this appear in a
record kept by someone who takes the record seriously?* A ruled entry with a date stamp in the
margin, yes. A rounded card with a drop shadow floating on a gradient, no.

**Why this direction and not one of the obvious ones:**

- **Not "luxury outdoor living."** Dark charcoal, serif capitals, and a lit pool at dusk is the
  aesthetic of a landscape-construction firm with a portfolio. He does not have a portfolio and
  is not building one. Borrowing that look writes a cheque `brand-brief.md` §4.4 says he cannot
  cash.
- **Not "friendly local service."** Rounded sans, a green blob, a smiling stock photo. That
  register prices at $89 a month, not $329.
- **Not dark mode.** The product happens outdoors in Ohio daylight, on paper, in a truck. A
  dark UI is a screen convention with no referent in the business. `design-quality.md` says do
  not default to dark; this is the deliberate refusal. **Both seasonal modes are light.**
- **Field Ledger is the only one of the four that is *true*.** It is what the business actually
  produces. It is also the cheapest to execute well with zero photography, which matters
  because there is none yet (`CANON.md` §9.3) — a ruled typographic page looks finished with no
  images at all, and a hero-photo layout does not.

**The seasonal mechanic.** Instead of light/dark, the site has **Green Season** (April–October)
and **Dormant Season** (November–March), matching `service-catalog.md` §§2–3. It switches on
date automatically, with a manual toggle to look at the other. This is colour used semantically
rather than decoratively: the palette tells you which scope you are reading before you read a
word, and it makes the flat-year-round price argument visible — same page, same layout, same
price, different work.

---

## 2. Palette

Every value is given in hex and oklch. Contrast ratios are against `--paper` unless stated.
**Roles are semantic. Do not use a colour outside its role.**

### 2.1 Constant tokens — do not change between seasons

| Token | Hex | oklch | Role | Contrast |
|---|---|---|---|---|
| `--paper` | `#F4EFE4` | `oklch(95.0% 0.016 86)` | Page ground. Warm oat stock, not white. | — |
| `--paper-deep` | `#E8DFCD` | `oklch(90.6% 0.026 85)` | Alternating band, table zebra, inset panels | — |
| `--wash-green` | `#E7EBE2` | `oklch(93.5% 0.013 127)` | Hover fill on a ledger row; included/complete state | — |
| `--ink` | `#1C1F1A` | `oklch(23.4% 0.010 133)` | Body text, headlines, hairline emphasis | **14.4:1** |
| `--ink-muted` | `#5C5B50` | `oklch(46.9% 0.017 103)` | Secondary text, captions, marginalia | **5.9:1** |
| `--rule` | `#C9BFA8` | `oklch(80.7% 0.033 87)` | The hairline. The most-used non-text colour on the site. | — |
| `--copper` | `#A6462A` | `oklch(51.6% 0.134 37)` | **The only colour that means act.** Links, the join button, MEMBERSHIP FULL. Nothing else. | **5.1:1** |

### 2.2 Green Season — April through October

| Token | Hex | oklch | Role | Contrast |
|---|---|---|---|---|
| `--season-accent` | `#1F3D2B` | `oklch(33.1% 0.048 156)` | Reversed panels, season stamp, active rule | **10.3:1** |
| `--season-support` | `#1E6B66` | `oklch(48.1% 0.073 189)` | Pool Care module only — pool rows, water references | **4.9:1** |

### 2.3 Dormant Season — November through March

| Token | Hex | oklch | Role | Contrast |
|---|---|---|---|---|
| `--season-accent` | `#4A5A63` | `oklch(45.7% 0.025 233)` | Reversed panels, season stamp, active rule | **5.4:1** |
| `--season-support` | `#8A5E1B` | `oklch(51.7% 0.098 73)` | Freeze-protection and findings emphasis | **4.9:1** |

### 2.4 Flag tints — rules and markers only, never text on paper

| Token | Hex | oklch | Allowed use |
|---|---|---|---|
| `--flag-ochre` | `#C08A2E` | `oklch(67.1% 0.123 77)` | 2px underline or margin marker on a *finding*. **2.6:1 — never text on `--paper`.** May be text on `--season-accent` at 18px+ only. |

### 2.5 Hard palette rules

1. **`--copper` is the site's only action colour.** If something is copper and is not clickable
   or is not the MEMBERSHIP FULL stamp, it is a bug. This is why the palette does not read as
   "safe gray with one accent" — copper is not decorative, it is a semantic monopoly.
2. **`--copper` is a paper-side colour.** On `--season-accent` (Green) it is 2.0:1 and unusable.
   Reversed panels use `--paper` for text and an underline for links.
3. **Never pure white and never pure black.** `#FFFFFF` and `#000000` do not appear anywhere,
   including in the print pieces.
4. **The pool teal appears only where a pool does.** It marks the Pool Care module in the price
   ledger and pool rows in the report facsimile. Using it as a generic accent destroys the one
   place it carries meaning.
5. **Two seasonal palettes, no third.** No hover-only colours, no per-section themes.

---

## 3. Typography

### 3.1 The pairing

**Display — Fraunces** (Undercase Type; Phaedra Charles and Flavia Zimbardi; SIL OFL, on Google
Fonts). Variable, with `wght`, `opsz`, `SOFT`, and `WONK` axes.

*Why Fraunces and not a trend pick:* it descends from Windsor, Souvenir, and the Cooper series.
Cooper Old Style is Oswald Cooper's — a Midwestern commercial serif that spent fifty years on
hardware-store signage, nursery catalogues, and seed packets across the Ohio Valley. That is
the exact register: sturdy, warm, slightly agricultural, and old enough that it does not date.
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
is permitted on exactly one element in the whole system: the wordmark on the truck door and the
yard sign**, where a single leaning `n` gives the mark a hand-cut quality at three feet. Nowhere
on screen.

**Text — IBM Plex Sans** (IBM; SIL OFL). An industrial grotesque drawn for an engineering
company, with true tabular lining figures and an unusually clear 1/l/I. It has character without
personality, which is what body copy about hose bibs needs.

**Data — IBM Plex Mono** (IBM; SIL OFL). Same superfamily, so it is one type system plus a
display face, not three unrelated fonts. Used **only** for: the record stamps, the marginal rail
labels, dates, route days, prices in the ledger rows, and the report facsimile.

> **Exception noted against `.claude/rules/web/performance.md`** ("max two font families unless
> there is a clear exception"). The exception is that the mono *is* the texture of the ledger —
> it is what makes a price row read as a record instead of a pricing table. It is paid for by
> subsetting: Plex Mono ships **uppercase, digits, and `. , : · $ + — / ( )` only**, one weight
> (500), which is under 8 KB WOFF2. Total font budget: Fraunces variable subset (Latin, wght
> 500–700) ≈ 28 KB, Plex Sans 400/600 ≈ 34 KB, Plex Mono 500 subset ≈ 8 KB. **≈ 70 KB, inside
> the microsite budget.** Preload Plex Sans 400 only.

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

`--type-figure` exists for exactly two numbers: the open-slot count and the monthly price. They
are set in mono at display size — a deliberate collision of "data" and "headline" that makes
the two facts the business turns on look like readings rather than claims.

### 3.4 Typographic rules

- **Measure caps at 68 characters.** The ledger measure is a reading column, not a container.
- **Sentence case everywhere** (`voice.md` §3). Caps only on stamps and rail labels.
- **`font-variant-numeric: tabular-nums` on every price, date, and count**, including in Plex
  Sans. Prices that shift horizontally between rows destroy the ledger read.
- **Hanging punctuation on the display headline** (`hanging-punctuation: first last` where
  supported) so the left edge of the text aligns with the left edge of the rules.
- **No italics for emphasis.** Emphasis is `--type-stamp` in the rail, or a `--flag-ochre`
  underline. Italic Fraunces is reserved for the season name in running text.
- **No letterspaced lowercase, ever.** Tracking is positive only on uppercase mono.

---

## 4. Layout posture

### 4.1 The rail and the measure

The signature structure, and the thing that makes this not a template: **an asymmetric two-track
page**. A narrow left **rail** carries marginalia — dates, route-day stamps, module tags, entry
numbers, "GREEN SEASON" — set in mono, uppercase, small, in `--ink-muted`. A wide right
**measure** carries the reading text. Between and beneath them: hairlines.

```
┌───────────────────────────────────────────────────────────────────┐
│ WPC513 · WESTSIDE PROPERTY CARE            GREEN SEASON · APR–OCT │
├──────────────┬────────────────────────────────────────────────────┤
│              │                                                    │
│  ENTRY 01    │  Six properties. Twice a month.                    │
│  APR–OCT     │  Written down every time.                          │
│              │                                                    │
├──────────────┼────────────────────────────────────────────────────┤
│  SCOPE       │  I walk the property before I start and again      │
│  GREEN       │  before I leave. In between I do what will make …  │
│              │                                                    │
├──────────────┼────────────────────────────────────────────────────┤
│  POOL        │  Skim the surface. Both baskets. Deck and          │
│  MODULE      │  surround. ── NOT pool service ──────────────────  │
└──────────────┴────────────────────────────────────────────────────┘
```

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

1. A **status strip** across the top: `WPC513 · WESTSIDE PROPERTY CARE` on the left, the season
   stamp on the right, a `--rule` hairline beneath. It becomes sticky on scroll and is the one
   element permitted a shadow, because it overlaps the content.
2. The **display headline** set left, breaking one column *left* of the measure so it starts
   flush with the rail — it visibly does not respect the grid the body respects.
3. Immediately under it, the **open-slot line**, set in `--type-figure` mono:
   `2 OF 6 SPOTS OPEN` — or, when full, `MEMBERSHIP FULL` reversed out of `--copper` in a
   hairline-boxed stamp. **This is the single highest-value element on the page and it is a
   fact, not a badge.**
4. The **photograph** occupies the bleed track and runs off the right edge, cropped hard,
   overlapping the masthead rule by ~40px.

No gradient. No blob. No centred anything.

### 4.3 Entries, not cards

**There are no cards on this site.** Not one. Content units are **ledger entries**: a rail
label, a measure block, a 1px `--rule` hairline beneath, and nothing else. No border box, no
background fill at rest, no radius, no shadow.

This is what replaces the banned default card grid, and it is better here — a card grid says
"these things are equivalent," which is exactly wrong for a page where the exclusions matter
more than the inclusions.

**Vertical rhythm is deliberately uneven.** Four distinct gaps, never interchangeable:

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
--radius-flat:    0;      /* panels, photos, tables, entries — the default */
--radius-stamp:   2px;    /* the status stamp, the season chip */
--radius-control: 3px;    /* buttons and inputs, and nothing else */
```

Nothing on any surface exceeds 3px. **Shadows exist on exactly two elements** — the sticky
status strip and the bleeding photograph — because both physically overlap something:

```css
--shadow-overlap: 0 1px 0 var(--rule),
                  0 14px 28px -20px oklch(23.4% 0.010 133 / 0.35);
```

Depth everywhere else comes from **overlap, bleed, and the hairline system**, not from
elevation.

### 4.5 The two composed set-pieces

Every surface needs at least one thing that is obviously drawn rather than assembled.

**The price ledger.** Not a pricing table and not three cards. A ruled ledger where each row is
*[what the property has] — [price]*, price set in `--type-figure` mono, right-aligned on a
tabular figure column, with a leader rule of `--rule` running between. The `$289` and `$329`
rows sit first with a heavier `--ink` rule; `$229` sits under a lighter rule as the base the
others are built from (`CANON.md` §3). **Rows are independent — adding or removing one changes
nothing else**, which is required, because `decisions.md` D-3 is unresolved (`voice.md` §3).

**The report facsimile.** A real, typeset service report on the page — rail stamp, the work
performed, then a *finding* marked with a `--flag-ochre` margin rule and its price in the rail.
It is the product demo, the voice demo, and the proof of the promise in one object, and it
belongs above the price. Set at 0.9× body size with a `--paper-deep` ground and hairlines top
and bottom, so it reads as a document reproduced on the page rather than a UI panel.

---

## 5. Texture and atmosphere

**Warm, overcast, physical, and slightly used.** The reference condition is an Ohio afternoon in
October: flat light, saturated greens, no sun flare.

**1. Paper grain.** One layer, site-wide, `position: fixed`, `pointer-events: none`,
`mix-blend-mode: multiply`, **4% opacity**. Generated as an inline SVG `feTurbulence`
(`type="fractalNoise" baseFrequency="0.82" numOctaves="3"`) tiled at 180×180, so it costs about
1 KB and no network request. It is meant to be invisible until you put it next to a version
without it.

**2. The hairline system is the texture.** `--rule` at 1px is doing more visual work than any
image on the site. Three weights only:
- `1px --rule` — the default separator
- `1px --ink` — a section boundary
- `2px --flag-ochre` — a finding, and only a finding

**3. The season divider.** The one ornamental element, used once per page, in the bleed track. A
20px band of hand-set marks — a horizontal rule broken by short verticals at irregular intervals
(a survey tick line, not a repeating pattern). In Green Season the ticks are `--season-accent`;
in Dormant they are `--season-accent` at half length with the gaps doubled, so the divider
itself gets sparser in winter. Drawn as inline SVG, ~400 bytes.

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
- The row fills `--wash-green` (Green) or `--paper-deep` (Dormant) over `--dur-quick`.
- The hairline beneath goes `--rule → --season-accent` and thickens via `scaleY(2)`, not via a
  border-width change.
- The rail label translates `2px` right.
Three coordinated changes on one gesture. That is what "designed hover states" means here.

**Focus — visible and in-brand.**
`outline: 2px solid var(--copper); outline-offset: 3px; border-radius: 0;` plus a filled 6px
`--copper` square drawn in the rail at the row's baseline. Keyboard users get the *same* marker
the report uses for a finding. Focus is never removed, and it is never only a colour change.

**Active.** `transform: translateY(1px)` and the rule under the control goes to `--ink`. No
scale, no bounce.

**Season toggle.** Transitions only the `--season-*` custom properties over 320ms. Layout,
type, and rules do not move. The page changes temperature, not shape.

**Banned:** parallax, scroll-jacking, scroll-driven number counters, typewriter effects,
marquees, autoplaying video, spring/bounce easing, and anything animating `width`, `height`,
`top`, `left`, `margin`, or `font-size`.

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
Hairlines render at `scaleX(1)` immediately. Hover and focus states still change colour — they
are information, not decoration.

---

## 7. The mark

**There is no icon and there will not be one.** No leaf, no house outline, no water droplet, no
crossed rake and net. Every one of those is available to any competitor and none of them say
"one person who writes things down."

**The mark is typographic:**

```
WESTSIDE PROPERTY CARE          ← Fraunces 600, opsz 144, SOFT 0, WONK 0, ls +0.01em
────────────────────────────    ← 1px --ink rule, full width of the wordmark
WPC513                          ← Plex Mono 500, uppercase, ls +0.14em, sitting ON the rule
```

The rule between them is the same hairline the whole system is built from, which is what ties
the mark to the page rather than sitting it on top of one.

| Application | Mark |
|---|---|
| Truck door, yard sign, door hanger, letterhead, website masthead | Full lockup |
| Tailgate, equipment cases, tool asset tags, hat, shirt sleeve | **WPC513** stencil alone |
| Report and invoice header | `WPC513 · SERVICE REPORT · {{address_short}} · MONDAY, APRIL 6` |
| Favicon | `W` in Fraunces 600, `--paper` on `--season-accent`, square, no radius |

**Clear space:** the cap height of the wordmark on all four sides. **Minimum width:** 120px on
screen, 3 inches in print — below that, WPC513 alone.

**Never:** on a gradient, with a drop shadow, rotated, outlined, in a colour other than `--ink`
or `--paper`, stretched, or with a tagline locked to it (`brand-brief.md` §1).

---

## 8. Photography

**No real photography exists yet** (`CANON.md` §9.3). Two rules follow, and they are absolute.

1. **Stock photography is never a final answer.** Not a "placeholder we'll swap." A stock patio
   on this site would contradict the entire positioning within one scroll.
2. **Until real photographs exist, ship the typographic and rule-based surfaces.** The Field
   Ledger direction was chosen partly because it looks finished with zero images. Where a photo
   will eventually go, ship an empty ruled band in `--paper-deep` with a mono caption naming
   what belongs there. That is honest, it looks intentional, and it is better than a stranger's
   backyard.

### The shot list — what each frame must contain

| # | Frame | Must show | Must not |
|---|---|---|---|
| 1 | **Masthead** | A pool deck or patio mid-visit, standing height, his own equipment in frame (blower down, pool net leaning). 3:2 landscape with dead space in the left third for the headline. | People, faces, a house that identifies a client |
| 2 | **Hands** | One close frame of his hands working — skimmer net breaking the surface, or the grease tray coming out of a flat-top. Proves it is one person. | A posed grip, gloves that look new |
| 3 | **The finding** | Something genuinely unflattering: a window well packed with leaves, a skimmer basket full, a split hose bib. **Do not clean it before shooting.** | Anything staged or improved |
| 4 | **The record** | A real service report on a phone or printed on a tailgate, address obscured. | An invented report |
| 5 | **Winter** | Covered furniture, salted flagstone, frost on a pool cover, bare trees. Non-negotiable — without it the site reads as a summer business seven months a year. | Snow-globe prettiness; it should look cold and useful |
| 6 | **The mark** | The WPC513 stencil on the truck door or tailgate, in daylight. | A rendered mockup |

### Grade

Available light, no flash, overcast or the hour before sunset. Warm the highlights slightly,
hold the greens exactly where they are, pull 10–15% of the saturation out of the sky. **No
duotone, no colour overlay, no heavy vignette, no HDR, no film-grain filter** — the page already
has grain and a second layer reads as an effect.

Every image: explicit `width`/`height`, AVIF with WebP fallback, `loading="lazy"` except frame 1
(`loading="eager" fetchpriority="high"`). Alt text follows `voice.md` — name the object and
locate it. "Skimmer basket lifted out, packed with maple seeds," not "pool maintenance."

---

## 9. Against `design-quality.md` — required qualities delivered

The rule asks for at least four of ten. This direction delivers **eight**, each with its
mechanism.

| # | Quality | How |
|---|---|---|
| **1** | Clear hierarchy through scale contrast | ~5.9× from `--type-body` (17px) to `--type-display` (up to 100px), and rail labels at 11px mono against it. Hierarchy is carried by size, never by weight-plus-grey. |
| **2** | Intentional rhythm, not uniform padding | Five distinct vertical gaps (§4.3) with an explicit rule that no two adjacent hierarchy levels may share one. |
| **3** | Depth and layering | The bleed track running photos off the right edge; the sticky status strip overlapping the masthead rule; the report facsimile inset on `--paper-deep`; the grain multiply layer. Depth from overlap, not from elevation. |
| **4** | Typography with a real pairing strategy | Fraunces (Cooper/Windsor lineage, defended in §3.1) + IBM Plex Sans/Mono as one superfamily. Axis settings, tracking, and leading specified per role, not left at default. |
| **5** | Colour used semantically | `--copper` is a monopoly on "act." `--season-support` teal appears only where a pool does. `--flag-ochre` appears only on a finding. The whole palette flips on the calendar to name the scope. |
| **6** | Designed hover / focus / active | Three coordinated changes per hover (§6). Focus draws the same margin marker the report uses for a finding. Active moves 1px and darkens the rule. |
| **7** | Grid-breaking editorial composition | Asymmetric rail-and-measure; the display headline breaking one column left of the body; columns 11–12 as a live bleed track past the container. |
| **8** | Texture and atmosphere | 4% fractal-noise paper grain, the three-weight hairline system, and the survey-tick season divider that gets sparser in winter. |

Not claimed: **#9 motion that clarifies flow** — motion here is deliberately minimal and does
not carry meaning beyond arrival. **#10 data visualisation** — there is no data viz, because a
six-client service business has nothing honest to chart. The price ledger and report facsimile
are typeset documents, not charts, and dressing them up as dashboards would be exactly the
"dashboard by numbers" the rule warns about.

## 10. Against the banned-pattern list, item by item

| Banned | How this direction refuses it |
|---|---|
| Default card grids with uniform spacing | **No cards exist.** Ledger entries: rail label, measure, hairline. §4.3 |
| Stock centred hero with gradient blob and generic CTA | Left-aligned masthead, headline breaking the grid left, photo bleeding right off the viewport, and a live open-slot count instead of a CTA. Gradients banned outright. §4.2, §5 |
| Unmodified library defaults | No component library. Hand-built static HTML/CSS (`README.md`). Every font axis, tracking value, leading, gap, and duration is specified here. |
| Flat layouts with no layering | Bleed track, sticky overlap, inset facsimile, grain layer. §4.4 |
| Uniform radius, spacing, and shadows | Radius is 0 by default with two meaningful exceptions capped at 3px; five non-interchangeable spacing tokens; shadows on exactly two overlapping elements. §4.3, §4.4 |
| Safe grey-on-white with one decorative accent | Ground is warm oat `#F4EFE4`, never white; ink is a green-cast near-black, never `#000`. Copper is semantic, not decorative, and the palette carries two seasonal states. §2 |
| Dashboard-by-numbers | No dashboard, no charts, no sidebar. §9 |
| Default font stacks without a reason | Fraunces defended by lineage in §3.1; Plex chosen for tabular figures and superfamily coherence; fallback chains chosen for width and colour. §3.2 |
| Defaulting to dark mode | Both seasonal modes are light. The refusal is argued in §1. |

---

## 11. Reference set

Eight references, and what to take from each. None are to be copied; each fixes one decision.

| Reference | Take |
|---|---|
| **Field Notes Brand** (Chicago; Coudal Partners and Draplin) | The whole premise. Kraft stock, ruled interiors, mono specification blocks, and a brand built on the idea that writing it down is the point. Their line — *"I'm not writing it down to remember it later, I'm writing it down to remember it now"* — is membership standard rule 5 in seven words. |
| **USGS 7.5-minute topographic quadrangle sheets** | The rail. Dense marginalia in small caps around a working field, hairline rules doing all the structural work, and a legend typeset as part of the drawing. |
| **The Old Farmer's Almanac** (typographic tradition, not the current site) | The seasonal two-scope structure, ruled tables treated as page furniture, and the tone of a document that assumes you are using it outdoors. |
| **OSU Extension / USDA field bulletins** | Plain-spoken authority on paper. Numbered sections, hanging labels, no persuasion in the layout. |
| **Rookwood Pottery matte glazes** (Cincinnati, 1880–) | The palette's local root. The Arts-and-Crafts matte greens and the grey-brown *Ombroso* line are where `--season-accent` and `--ink-muted` come from — a genuinely Cincinnati source rather than a generic "outdoor green." |
| **Filson and the archived Best Made Co. catalogues** | Photography grade: available light, object on the ground, honest wear, no lifestyle staging. Premium without gloss. |
| **Fraunces specimen** (Undercase Type) | The axis behaviour — what `opsz`, `SOFT`, and `WONK` actually do, and why this system pins `SOFT 0 / WONK 0`. |
| **IBM Plex specimen** (IBM Design) | The Sans/Mono relationship, and the tabular figure set the price ledger depends on. |

**Deliberately not references:** landscape-construction portfolio sites, pool-service sites,
home-services SaaS marketing, and anything with a hero video of a lit pool at dusk.

---

## 12. Handoff to `02-website/`

Non-negotiable when this direction is implemented:

1. **Every value in §2, §3, and §4 becomes a CSS custom property in `styles/tokens.css`.** No
   hardcoded hex, no hardcoded px in component CSS.
2. **No component library, no framework, no build step** (`README.md`). The site is standalone
   HTML and CSS.
3. **Zero cards.** If a `.card` class appears in the stylesheet, the direction was not followed.
4. **The open-slot count and MEMBERSHIP FULL are content, not decoration** — one place in the
   markup, easy for a non-developer to change, because it has to be the true number every day.
5. **The price ledger rows are independent.** Adding a fourth configuration must require adding
   one row and touching nothing else (`decisions.md` D-3).
6. **Season switching is date-based** — April 1 to October 31 Green, November 1 to March 31
   Dormant — with a manual toggle, and it changes only the `--season-*` properties.
7. **Ship with no photographs rather than with stock ones.** Ruled bands with mono captions
   naming the missing frame.
8. **Budgets:** ≤ 80 KB JS, ≤ 15 KB CSS, ≤ 70 KB fonts (`performance.md`, microsite row). The
   grain and the season divider are inline SVG and cost no request.

---

## Related files

- `brand-brief.md` — the mark's naming rules and what may be claimed on any surface
- `voice.md` — the typographic stamps in §7 and the alt-text rule in §8 come from it
- `messaging.md` — the section order the layout in §4 is built to carry
- `.claude/rules/web/design-quality.md` — answered item by item in §9 and §10
- `.claude/rules/web/performance.md` — the font-count exception in §3.1 and budgets in §12
- `00-model/service-catalog.md` §§2–3 — the two seasons the palette encodes
