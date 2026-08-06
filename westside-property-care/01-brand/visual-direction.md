# Visual Direction

**Owner:** `wpc-brand` · **Status:** source of truth for how Westside Property Care 513 looks
**Binding on:** `02-website/`, `03-marketing/`, and every printed piece
**Governed by:** `.claude/rules/web/design-quality.md` — its anti-template policy is answered
item by item in §9 and §10

> **Re-baselined 2026-08-05. Two sections are reversed, not patched.**
>
> - **§2, the palette.** The Field Ledger *structure* survives entirely — the ruled field-book
>   layout, the rail and measure, the reading measure, near-zero radius, the hairline
>   system, the two-shadow rule, the uneven vertical rhythm. **Only the colour system
>   changes.** Oat/copper/green is replaced by **his navy and orange**, taken from the finished
>   logo he shipped (`_source/2026-08-05-owner-decisions.md` §1).
> - **§7, the mark.** This file used to say *"There is no icon and there will not be one. No
>   leaf, no house outline, no water droplet."* **He has a logo with a house-and-tree line
>   mark.** §7 now specifies the real lockup. The old argument is recorded there and retired.
> - **The season mechanic survives and is repurposed.** It is no longer Green/Dormant scopes at
>   one flat year-round price. It is **In Season (March 1 – October 31)** and **Off Season
>   (November 1 – end of February)**, where the off-season state says the next season opens
>   March 1. Both states carry a complete palette that passes contrast on its own.
>
> **Ruling appended the same day, after `wpc-web` recomputed the palette.** All 27 published
> ratios reproduced within 0.05 — no colour value is in dispute — but one was justified against a
> ground its element never renders on, and a second instance of the same defect was found
> unflagged in §6. **The decision mark is now `--mark`, a per-surface variable resolved from the
> ember ramp by its ground (§2.5).** The finding rule and the focus indicator both take it. §5.2
> records the ruling and the argument it declined; the §2 preamble records the rule that stops it
> recurring; §7.1 answers the `--ember-lift` flag. **No hex changed.**
>
> **Second ruling appended 2026-08-06, after `wpc-web` audited the mono subset against the strings
> the site actually renders.** Three shipped components — `.foot__line`, `.foot__prices`,
> `.cta__aside` — are set in IBM Plex Mono, in **lowercase**, on surfaces §3.1 never permitted,
> and the subset that pays for the third family ships no lowercase. **They move to IBM Plex Sans.
> The mono surface list does not grow and the subset does not grow to hold prose.** Separately,
> the **hyphen** and the **en dash** are added to the subset — both are required by strings this
> file itself specifies, and their absence was a live defect independent of the ruling. §3.1 now
> carries a **mono contract** (§3.1.1) with three invariants, an audit (§3.1.4), and the
> component-level instruction `wpc-web` applies (§3.1.3).
>
> **The failure class is the same one the contrast ruling above names, in a different medium.**
> There it was a ratio computed against a ground its element never renders on. Here it is a glyph
> budget written against the strings that existed when it was written, rather than against the
> strings the components would render. **A subset is a claim about content, and it goes stale the
> way a contrast ratio computed against the wrong ground does.** Both are specifications that
> quietly stop describing the thing they govern, and neither fails loudly — the ratio still
> reproduces, the font still loads. §3.1.1 turns the claim into a constraint so it cannot drift
> again. **No hex, no size, and no face changes anywhere else in this file.**

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

> 🔁 **Added 2026-08-05 after a ruling. How a ratio must be stated in this file.**
>
> `wpc-web` recomputed all 27 published ratios and reproduced every one within 0.05 — then found
> that one of them was **arithmetically right and structurally useless**, because it was computed
> against a ground the element never sits on. §5.2 justified the 2px finding rule at 3.31:1 on
> `--paper`; §4.5 puts the only finding on `--paper-deep`, where the same colour is 2.89:1. Two
> correct numbers, one wrong conclusion. The ruling is §2.5 and §5.2; this is the rule that stops
> it recurring.
>
> 1. **A ratio is stated against the ground the element renders on, not against the ground it is
>    conceptually associated with.** If an element renders on more than one ground, *every* ground
>    is published, and the **worst** one governs whether the colour may be used.
> 2. **If a colour fails on any ground it actually touches, the fix is a different step of the
>    ramp on that ground — not a rewritten justification.** §2.4 rule 2 already said this. It was
>    written for text and was not applied to marks; §2.5 closes that.
> 3. **Two decimal places wherever the margin to a threshold is under 0.15.** `2.89` and `3.06`
>    are different answers to the same question and `2.9` and `3.1` hide that. One decimal is fine
>    everywhere else.
> 4. **Do not accept "the criterion does not bind here" as a resolution** unless the redundancy is
>    itself specified and enforceable. See §5.2, where that argument was made, examined, and
>    declined on the merits.

**Roles are semantic. Do not use a colour outside its role.**

### 2.1 Constant tokens — identical in both seasons

| Token | Hex | oklch | Role | Contrast |
|---|---|---|---|---|
| `--paper` | `#F4F0E6` | `oklch(95.5% 0.014 89)` | Page ground. Warm ledger stock, never white. | — |
| `--paper-deep` | `#E7E1D3` | `oklch(91.1% 0.020 88)` | Alternating band, table zebra, the summary facsimile ground | — |
| `--wash` | `#E4E8EE` | `oklch(93.0% 0.009 258)` | Hover fill on a ledger row, In Season only. A cool wash on warm stock — the row visibly changes temperature. | — |
| `--ink` | `#141C26` | `oklch(22.3% 0.023 254)` | Body text, headlines, section-boundary hairline. A navy-cast near-black, tied to the mark. | **15.1:1** on `--paper` · **13.2:1** on `--paper-deep` · **14.0:1** on `--wash` |
| `--ink-muted` | `#4E5A66` | `oklch(46.2% 0.025 248)` | Secondary text, captions, rail marginalia | **6.2:1** on `--paper` · **5.4:1** on `--paper-deep` · **5.7:1** on `--wash` (a rail label on a hovered row) |
| `--rule` | `#C2BCAC` | `oklch(79.6% 0.023 90)` | The default hairline. The most-used non-text colour in the system. | 1.7:1 on `--paper` · 1.45:1 on `--paper-deep`. Both are far under 3:1 and that is intentional: **structural only, never text, never the sole carrier of information.** The exemption is what makes the number irrelevant — which is exactly the argument §5.2 declines for the finding rule, and the difference is set out there. |
| `--navy` | `#0E2E52` | `oklch(29.9% 0.075 254)` | The identity colour. Logo ground, masthead strip, reversed panels In Season. | **12.0:1** on `--paper` |
| `--ember` | `#D4622A` | `oklch(62.7% 0.159 44)` | The identity orange **on `--paper` and `--wash`**: display figures, and the decision mark where those are the ground. Never hardcoded as a mark — resolve through `--mark`, §2.5. | **3.31:1** on `--paper` · **3.06:1** on `--wash` — large text (≥24px, or ≥19px bold) and non-text UI only · **2.89:1 on `--paper-deep` — under the 3:1 floor, so it carries nothing there** |
| `--ember-deep` | `#9E4820` | `oklch(50.6% 0.126 43)` | Orange at **text size on paper**: links, the join button label, inline prices in a finding — **and the decision mark on `--paper-deep`** (§2.5). | **5.43:1** on `--paper` · **4.74:1** on `--paper-deep` · **5.02:1** on `--wash`. Reversed, `--paper` on an `--ember-deep` fill = **5.43:1** (the MEMBERSHIP FULL stamp, the join button) |
| `--ember-lift` | `#EE7A34` | `oklch(70.1% 0.164 48)` | Orange **reversed on a dark ground**: the logo wordmark, the season stamp inside a navy panel, and the decision mark on any reversed panel (§2.5). | **4.88:1** on `--navy` · **3.06:1** on off-season `--season-ground` slate · **2.47:1 on `--paper` — banned on paper, at any size** |

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
| `--season-support` | `#1A6E6B` | `oklch(49.0% 0.077 191)` | **Pool only.** The pool block in the scope list, pool rows in the summary facsimile, the pool rail tag, the 2px disclaimer rule. | **5.29:1** on `--paper` · **4.62:1** on `--paper-deep` · **4.90:1** on `--wash` (a pool row on hover) |
| `--ember` | `#D4622A` | `oklch(62.7% 0.159 44)` | Display figures; `--mark` on `--paper` and `--wash` | 3.31:1 / 3.06:1 — large / non-text |
| `--ember-deep` | `#9E4820` | `oklch(50.6% 0.126 43)` | Links and controls at text size; **`--mark` on `--paper-deep`** | 5.43:1 / 4.74:1 / 5.02:1 |
| `--ember-lift` | `#EE7A34` | `oklch(70.1% 0.164 48)` | Orange inside a navy panel; `--mark` on navy | 4.88:1 on `--season-ground` |

**Reversed out of `--season-ground` (navy):** `--paper` **12.0:1** · `--paper-deep` **10.5:1** ·
`--rule` **7.2:1** · `--ember-lift` **4.88:1** · `--ember` 3.64:1 (large / non-text only).

**Why teal is the pool colour and why it is confined.** It is the one hue in the system that is
neither the identity navy nor the identity orange, so it cannot be mistaken for either a brand
mark or an action. It appears exactly where a pool does. Using it as a generic accent destroys
the one place it carries meaning — and on this site the pool block is the block that has to be
read most carefully, because it is the block the disclaimer travels with (`voice.md` §8 item 41).

> 🔁 **Its worst ground is the one it was not published against, and it is now the tightest text
> pass on the site.** The pool rail tag is `--type-rail`, 11px, so it needs 4.5:1 — and inside the
> summary facsimile it renders on `--paper-deep`, where teal is **4.62:1**. It passes by 0.12,
> which is narrower than the 0.38 on the season stamp (§7.1). Found during the 2026-08-05 ground
> audit; the value was already published, the tightness was not. **`--season-support` may not be
> lightened, and pool text may not go below 11px.** If a pool row ever needs to sit on a darker
> band than `--paper-deep`, the tag goes to `--ink` and the teal stays on the rule beside it.

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
| `--ember` | `#D4622A` | `oklch(62.7% 0.159 44)` | Display figures on paper; `--mark` on `--paper`. **Never inside the slate panel** — 2.29:1 there. | 3.31:1 on `--paper` — large / non-text |
| `--ember-deep` | `#9E4820` | `oklch(50.6% 0.126 43)` | The one or two remaining links: waitlist, project work. **`--mark` on `--paper-deep`, which is also the row hover fill in this state.** | 5.43:1 / 4.74:1 |
| `--ember-lift` | `#EE7A34` | `oklch(70.1% 0.164 48)` | **Restricted.** See the rule below. Also `--mark` inside the slate panel (§2.5). | **3.06:1** on `--season-ground` — large text and non-text UI only |
| `--navy` | `#0E2E52` | `oklch(29.9% 0.075 254)` | **Identity only** — the mark, the masthead strip. Never a panel ground in this state. | 12.0:1 on `--paper` |

**Reversed out of `--season-ground` (slate):** `--paper` **7.6:1** · `--paper-deep` **6.6:1** ·
`--rule` **4.5:1** · `--ember-lift` **3.06:1** (large / non-text only) · `--ember` **2.29:1
(banned — including as a focus ring, which is why §2.5 exists)**.

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
   colour, one meaning, three lightnesses. The mark that carries that meaning is **`--mark`**,
   §2.5 — not any one of the three hexes.

2. **Choose the ember by its ground, not by taste.** `--ember-deep` on paper at text size,
   `--ember` for display figures on paper, `--ember-lift` inside a navy panel. `--ember-lift` on
   paper is 2.47:1 and is banned at every size, including in print.

   🔁 **This rule governs marks as well as text, and always did.** It was written about type and
   applied only to type, which is how a 2.89:1 finding rule and a 2.29:1 focus ring shipped. §2.5
   states the mark case explicitly so the extension is not left to inference again.

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

### 2.5 `--mark` — the decision colour, resolved by its ground

🔁 **Added 2026-08-05. This is the ruling on the §5.2 / §4.5 conflict, and it is binding.**

There are exactly two **decision marks** in this system, and they were always meant to be the
same thing: the **2px rule beside a finding** in the summary facsimile, and the **focus
indicator** — the ring plus the filled 6px square in the rail. A finding is the sentence the
customer says yes or no to. A focus ring is where the keyboard user's yes or no would land. One
meaning, one colour role, and §6 already says a keyboard user gets the same marker the summary
uses for a finding. That part was right.

What was wrong is that both were **pinned to one hex** — `--ember` — while the surfaces they
render on are not all `--paper`. §5.2 justified the finding rule at 3.31:1 on `--paper`; §4.5
puts the only finding in the system on `--paper-deep`, where `--ember` is **2.89:1**. The same
pin puts an `--ember` focus ring on the off-season reversed panel at **2.29:1**, which §2.3's
own reversed list already bans outright. §2.4 rule 2 — *choose the ember by its ground, not by
taste* — predicted both and was simply not applied to marks, only to text.

**The fix is not a colour swap. It is a variable.** `--mark` is the decision colour. It is
never given a hex directly. **Every surface that sets its own ground sets `--mark` in the same
declaration block**, from the ember ramp, at the step that clears 3:1 on that ground:

| Ground | `--mark` resolves to | Ratio | Where this surface is |
|---|---|---|---|
| `--paper` | `--ember` | **3.31:1** | The page. Default. |
| `--wash` (In Season row hover) | `--ember` | **3.06:1** | A hovered ledger row. |
| `--paper-deep` | **`--ember-deep`** | **4.74:1** | The summary facsimile (§4.5, set-piece 3), alternating bands, image plates, **and the Off Season row hover**, where `--wash` is aliased to `--paper-deep`. |
| `--navy` | `--ember-lift` | **4.88:1** | The masthead status strip, In Season reversed panels. |
| Off Season `--season-ground` slate | `--ember-lift` | **3.06:1** | The off-season reversed panel and footer. |

```css
:root                    { --mark: var(--ember); }       /* --paper, --wash   */
.report__sheet, .band    { --mark: var(--ember-deep); }  /* --paper-deep      */
.strip, .panel--reversed { --mark: var(--ember-lift); }  /* navy or slate     */
```

**Selectors are `wpc-web`'s to name** — what is binding is that the declaration lives with the
background it answers to, so the two cannot be changed independently. A surface that gains a
`background-color` and does not gain a `--mark` is the bug this ruling exists to prevent.

The finding rule and the focus indicator both take `var(--mark)` and nothing else. **`--ember`,
`--ember-deep`, and `--ember-lift` must not appear in a border, outline, or fill that means "a
decision" — only in `--mark`'s definition.** If a stylesheet writes `border-inline-start: 2px
solid var(--ember)`, this rule was not followed, regardless of what surface it happens to land
on today.

**Why (b) and not (a).** The argument for leaving it at 2.89:1 was that the finding block also
carries a text heading and a price, so the rule is redundant emphasis rather than a graphic
required to understand content, and SC 1.4.11 does not bind. That argument is **sound about the
finding rule specifically and I am declining it anyway**, for three reasons that are about this
file rather than about the criterion:

1. **It does not generalise, and the identical defect next door proves it.** The focus ring is
   the same mark on the same pin, and a focus ring has no heading and no price beside it —
   nothing is redundant about it. Accepting (a) fixes the sentence in §5.2 and leaves the focus
   ring at 2.89:1 on `--paper-deep` and 2.29:1 on slate. A ruling that repairs the flagged
   instance and not the unflagged one is not a ruling.
2. **A redundancy exemption has to be enforced to be real.** (a) would make the rule legal only
   for as long as every finding keeps its heading and its price. That is a copy decision living
   in `voice.md`, in a different agent's lane, silently load-bearing on a colour value here.
   `--mark` costs one declaration per surface and depends on nothing anyone else might edit.
3. **It is what §2.4 rule 2 already says.** The three-step ramp exists precisely so that one
   meaning survives three grounds. Using `--ember-deep` for the mark on `--paper-deep` is not an
   exception to *one colour, one meaning, three lightnesses* — it is that idea working. The
   single-lightness-per-meaning reading would have been the exception, and it is the reading that
   produced the bug.

**A bonus, not the reason:** the finding's price in the rail is already `--ember-deep` (§4.5.3).
Under this ruling the rule and the number it points at become the same value, so the mark and
the figure it flags now match instead of nearly matching.

**What this does not license.** `--mark` is not a fourth accent and not a licence to tint. It
resolves to one of exactly three published hexes, all of them ember, and it changes only when
the ground under it changes. No new value may be added to the ramp to satisfy a new ground —
if a proposed surface cannot carry any of the three, the surface is wrong, not the ramp.

---

## 3. Typography

Unchanged by the re-baseline — the pairing was never colour-dependent. **Amended 2026-08-06 by
the mono ruling** (§3.1.1–§3.1.4): the three faces, their sizes, and their axis settings are all
exactly as they were; what changed is the enumeration of where the mono is allowed to go and
which glyphs it ships.

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
display face, not three unrelated fonts. **What it is for, in one sentence: mono is how this
system marks a reading.** It makes `$279` and `VISIT 07 OF 16` look like something measured and
written down rather than something asserted. That is a semantic monopoly of exactly the kind
§2.4 rule 1 gives the ember ramp, and it survives on the same terms — by being scarce. A mono
that also sets sentences is not a data face, it is a third text face, and the exception below
was never granted for one of those.

The surfaces, the glyphs, and the three invariants that keep them in step are **§3.1.1**. The
2026-08-06 ruling that produced them is **§3.1.2**, what `wpc-web` applies is **§3.1.3**, and the
four checks that keep it from drifting again are **§3.1.4**.

> **Exception noted against `.claude/rules/web/performance.md`** ("max two font families unless
> there is a clear exception"). The exception is that the mono *is* the texture of the ledger —
> it is what makes `$279` and `VISIT 07 OF 16` read as readings rather than as claims. It is paid
> for by subsetting: Plex Mono ships **uppercase, digits, and `. , : - – — / ( ) + $ ·` only**,
> one weight (500), which is under 8 KB WOFF2. Total font budget: Fraunces variable subset
> (Latin, wght 500–700) ≈ 28 KB, Plex Sans 400/600 ≈ 34 KB, Plex Mono 500 subset ≈ 8 KB.
> **≈ 70 KB, inside the microsite budget.** Preload Plex Sans 400 only.
>
> 🔁 **Corrected 2026-08-06.** The glyph list previously read `. , : · $ + — / ( )`. It omitted
> the **hyphen** and the **en dash**, both of which strings specified elsewhere in this file
> require (§2.3, §4.1, §4.5). Two glyphs, roughly 100 bytes; the budget line above is unchanged
> because the change is inside the rounding. **This paragraph is no longer the authoritative
> glyph list — §3.1.1 is.** If the two ever disagree, §3.1.1 governs and this one is the bug.

### 3.1.1 The mono contract

Three things have to agree: **which surfaces are set in mono**, **which characters those surfaces
render**, and **which glyphs the font file contains**. When any two of the three drift apart the
failure is silent — the page still renders, the font still loads, and a single word changes face
somewhere in a footer. All three are fixed here, in one place, so a change to one is visibly a
change to the others.

**A. The surfaces. Mono is permitted on these and nothing else:**

| # | Surface | Shipped as |
|---|---|---|
| 1 | The logo wordmark and the small-caps name inside the lockup | `.lockup__type` |
| 2 | Record stamps — the summary/invoice header, the season stamps, `MEMBERSHIP FULL` | `.stamp` |
| 3 | Marginal rail labels | `.rail` |
| 4 | Dates, route days, month abbreviations under the season strip | `.rail`, `.s16__months` |
| 5 | Visit numbers, the open-slot count, the price figure | `.figure` |
| 6 | The summary facsimile's **stamps, rail labels, and figures** — not its prose | `.report__h`, `.stamp`, `.rail` |
| 7 | Field-set legends, definition terms, and footer column headings, which are rail labels wearing a different element | `.form legend`, `.defs dt`, `.foot h2` |
| 8 | The season toggle and the skip link, which are stamps that happen to be controls | `.season__label`, `.skip` |

Rows 6–8 were implicit in the old one-sentence list and are written out because the old sentence
said "the summary facsimile," which reads as *all of it*. It is not all of it: the facsimile's
body is the voice demo and it is Plex Sans. **Anything not on this list is Plex Sans.** Adding a
row is a change to this file, not a decision available to an implementer.

**B. The glyphs. The subset contains exactly these, and the declared `unicode-range` matches it
exactly:**

| Group | Characters | Codepoints |
|---|---|---|
| Uppercase Latin | `A`–`Z` | `U+0041-005A` |
| Digits | `0`–`9` | `U+0030-0039` |
| Space | ` ` | `U+0020` |
| Money and arithmetic | `$` `+` | `U+0024`, `U+002B` |
| Sentence punctuation | `.` `,` `:` | `U+002E`, `U+002C`, `U+003A` |
| Parentheses | `(` `)` | `U+0028-0029` |
| Solidus | `/` | `U+002F` |
| Separator | `·` | `U+00B7` |
| Range | `–` | `U+2013` |
| Aside | `—` | `U+2014` |

**49 glyphs.** No lowercase. No apostrophe, no quotation marks, no `?`, `!`, `%`, `&`, `#`, `[`,
`]`, `*`, `;`, `<`, `>`, `=`, `@`, and no accented characters.

**The subset command and the declared range, so `fonts/README.md` regenerates from this table
rather than from a reading of it:**

```
--unicodes=U+0020,U+0024,U+0028-0029,U+002B-003A,U+0041-005A,U+00B7,U+2013-2014
```

```css
unicode-range: U+0020, U+0024, U+0028-0029, U+002B-003A, U+0041-005A, U+00B7, U+2013-2014;
```

`U+002B-003A` is contiguous and holds `+ , - . /`, the ten digits, and `:` — every character in
it is wanted, so the range is compact **and** exact. It differs from the range currently in
`fonts/README.md` by two codepoints and nothing else: **`U+002D` (hyphen) and `U+2013` (en
dash)** are added. Both were missing from the file's own glyph list while strings this file
specifies required them.

**Which dash means what — this is a rule, not a preference:**

- **`–` en dash is a range**, and only a range: `MAR 1 – OCT 31`, `NOV 1 – END OF FEB`,
  `TUE–THU`, `BLOCK 1–8`. Spaced when either side contains a space; closed up when both sides are
  single tokens.
- **`-` hyphen joins a compound or punctuates a phone number**: `MID-SEASON`, `513-555-0142`. It
  is never a range and never a dash in prose.
- **`·` middot separates the fields of one stamp**: `WPC513 · SERVICE SUMMARY · VISIT 07 OF 16`.
  It is the default separator; reach for it before either dash.
- **`—` em dash is an aside inside a label**, and it survives in the subset for exactly one
  shipped string — `FORMAT ONLY — NOT A CLIENT SUMMARY`, the caption that keeps the facsimile
  honest. It is never a range and never a separator. If that string is ever rewritten, the em
  dash leaves the subset with it.

**C. The three invariants.** Each is checkable without a browser and without the font file.

1. **Every mono surface renders uppercase.** Every rule that sets `font-family: var(--font-mono)`
   also sets `text-transform: uppercase`. Source copy stays sentence case — `voice.md` §3 and the
   rendered-case checklist item own that, and CSS transforms the text before font matching, so
   the rendered glyph is what the subset must hold. A mono rule without `text-transform:
   uppercase` is a defect on sight, with no need to read the copy it will hold.
2. **No mono string contains a character outside the §3.1.1B set, as rendered.** Not as authored —
   as rendered, after `text-transform`. Copy that needs an apostrophe, a question mark, or an
   ampersand is prose, and prose does not go in mono; rewriting the label is the fix, not growing
   the subset. Three labels were already rewritten this way and they all read better for it
   (`ROUTE FIT`, `TRUST`, `WHEN THE CARD IS CHARGED`).

   **Templated values count, and they are the weak point.** The record stamp (§7.3) is
   `WPC513 · SERVICE SUMMARY · {{address_short}} · VISIT 07 OF 16 · MONDAY, JUNE 15` — a mono
   string with a hole in it that a real address fills at send time. `O'BRIEN CT` and
   `ST. MARY'S LN` are ordinary west-side addresses and both carry an apostrophe the subset does
   not hold. **Any template slot inside a mono surface is constrained to §3.1.1B like the literal
   text around it**, and the enforcement belongs where the value is produced, not in a proofread:
   strip or transliterate before it reaches the stamp. This is invariant 2's blind spot, because
   an audit of the shipped files sees `{{address_short}}` and passes.
3. **The declared `unicode-range` never exceeds the shipped glyph set.** This is the asymmetry
   that matters: a file containing a glyph nobody uses costs bytes, which is a budget problem. A
   `unicode-range` claiming a character the file lacks costs a **face change inside a word**,
   which is a correctness problem, and it is invisible until the font installs. When the two
   differ, shrink the range — never widen it on the assumption the glyph is probably in there.

**Why invariant 1 is the load-bearing one.** It converts "does the subset cover the content?" —
a question that needs every string on ten pages — into "does this CSS rule have a
`text-transform`?", which is one grep. Content changes weekly; the rule list does not. Every mono
surface in the shipped stylesheet already satisfies it except the three §3.1.3 moves, so this
codifies existing practice rather than imposing new work.

### 3.1.2 The 2026-08-06 ruling, and the two options declined

**The finding.** `.foot__line` (the sixteenth-visit line, ten footers), `.foot__prices` (both
project prices, ten footers), and `.cta__aside` (eleven "texting is fine" asides) are set in mono
and render in full lowercase. All three are off the §3.1.1A list, and all three fall out of the
subset the moment a real Plex Mono installs. `wpc-web` found them, narrowed the declared
`unicode-range` to the glyphs the file will actually contain, blocked the install, and escalated
rather than moving them. That was the right call in all four parts.

**The ruling: option 1. All three move to IBM Plex Sans. The mono list does not grow and the
subset does not grow to hold lowercase.** Details in §3.1.3.

**Why, in one line:** mono earns a third family by being the mark of a reading, and a sentence is
not a reading. `Sixteen visits. Six properties. One person, and a written summary every time.` is
the site's central *claim*. Setting a claim in the face reserved for measurements is not a
neutral typographic choice — it borrows the authority of the data face for an argument, which is
the one thing the face is there to distinguish.

**Option 2 / option 3 — grow the subset by a lowercase alphabet, with or without updating the
permitted list — declined.** The argument for option 3 is honest and worth stating: it costs
about 3–4 KB, it matches what shipped, and it ends the mismatch by moving the rule to the code
instead of the code to the rule. Four reasons it loses anyway, in ascending order of weight:

1. **It breaks a budget this file publishes.** Mono goes from ≈8 KB to ≈11–12 KB and the font
   total from ≈70 KB to ≈73–74 KB, so §12.11's `≤ 70 KB fonts` would have to be edited too. A
   ruling that quietly widens a stated budget to fit the thing that broke it is the same move as
   rewriting a contrast justification to fit the ground the element landed on. §2's preamble
   rule 2 already refuses that shape of answer for colour; it is not better here.
2. **The bytes are not the real cost and I do not want the byte argument to carry this.** 3–4 KB
   is affordable. Say the budget were doubled tomorrow — the answer would still be no.
3. **It withdraws the argument that bought the exception.** `performance.md` allows two families.
   The third was granted because it sets stamps and figures, not text. A mono with lowercase is a
   text face by capability, and the next component that wants "a bit of ledger texture" has no
   principle left to be refused with. The subset is a **guardrail**, not just a download size:
   the reason nobody has set a paragraph in mono is that they physically could not.
4. **It is the wrong direction of fix for a spec that outran its content.** The defect is that
   the glyph budget stopped describing the site. There are two repairs — describe the site, or
   make the site describable — and only the second stops the next one. Option 3 fixes these three
   components and leaves the mechanism that produced them intact, so the fourth lowercase mono
   component arrives with nothing standing in its way. §3.1.1's invariant 1 is what actually
   closes it, and invariant 1 is unavailable under option 3, because a mono that ships lowercase
   has no reason to insist on `text-transform`.

**Does the third family still earn its place?** Yes, and the ruling is what keeps it earning it.
Under option 1 the subset grows by two glyphs — the hyphen and the en dash, ≈100 bytes — so mono
stays under 8 KB, the font total stays ≈70 KB, and the exception paragraph in §3.1 holds
verbatim without a word being softened. Under option 2 or 3 the honest version of that paragraph
would have had to read "a third *text* family, because three components wanted it," and that
sentence does not justify anything. **The exception is renewed on its original terms.**

**The visible cost, named rather than minimised.** Three components change face on ten pages and
nobody here can open a browser (`CANON.md` §9). That is real, and it is why this was escalated
rather than decided in `02-website/`. What makes it safe to apply blind is that the change runs
in the harmless direction on all three axes:

- **Family:** every one of the three sits at `--type-small`, which §3.3 already assigns to **Plex
  Sans 400**. They were the only three places on the site where a size token was used with a face
  the scale table does not give it. This is a *restoration* of the specified pairing, not a new
  pairing that needs proving.
- **Width:** Plex Mono is wider than Plex Sans at equal size, so every affected line gets
  *shorter*. Nothing can overflow that did not already overflow, and the only components at risk
  — two grid cells and a flex aside — can only gain slack.
- **Neighbours:** `.foot__note` already renders Plex Sans at `--type-small` directly beside
  `.foot__prices` and directly beneath `.foot__line` on every page. The target rendering is
  already on screen next to the thing being changed.

### 3.1.3 What moves, and to what

Mechanical. Three rules in `02-website/site/styles/components.css`; no markup change, no token
change, no new token.

**1. `.foot__prices` — the two project prices.** Drop `font-family` and `font-weight`; keep the
grid, the size, and the tabular figures.

```css
.foot__prices {
  display: grid;
  gap: var(--space-hair);
  font-size: var(--type-small);
  font-variant-numeric: tabular-nums;   /* §3.4 — every price stays tabular in Plex Sans */
}
```

It becomes typographically identical to `.foot__note` in the neighbouring column, which is
correct: they are the same kind of thing, and the mono `.foot h2` above each column is what
distinguishes them. `$249+` does not need mono to read as a figure — it is a price inside a
sentence, not §3.1.1A row 5's price figure, and §4.5 set-piece 1 reserves that treatment for
`$279` alone.

**2. `.cta__aside` — the eleven asides.** Drop `font-family` and `font-weight`; keep the size and
the muted ink, add tabular figures for the phone number.

```css
.cta__aside {
  font-size: var(--type-small);
  color: var(--ink-muted);
  font-variant-numeric: tabular-nums;
}
```

This also disposes of the hyphen's urgency independently of §3.1.1: `[PHONE]` renders in mono in
`.cta__aside` and nowhere else, so after this move every phone number on the site is Plex Sans.
The hyphen is still added to the subset — `MID-SEASON` in `.defs dt` is a genuine mono hyphen —
but the eleven-times-per-site risk is gone rather than glyph-patched.

**3. `.foot__line` — the sixteenth visit.** This one needs more than a family swap, and the
reason is worth stating so it is not applied as a two-line diff.

Mono was doing real work here: it is the only thing separating the site's central claim from the
fine print immediately beneath it. Drop the face and keep everything else, and `.foot__line`
becomes indistinguishable from `.foot__note`. **So the differentiation moves from face to
scale**, which is where §9 quality #1 already says this system carries hierarchy — *"Hierarchy is
carried by size, never by weight-plus-grey."* Face was a fourth mechanism, smuggled in, and its
removal makes the claim in §9 true where it was previously slightly false.

```css
.foot__line {
  max-inline-size: var(--measure);
  font-size: var(--type-h3);        /* Plex Sans 600, 20 → 24px */
  font-weight: var(--wt-strong);
  line-height: var(--lh-h3);
}
```

- `font-variant-numeric: tabular-nums` is **dropped**, not carried over. The string contains no
  digits — "Sixteen" and "Six" are words. It was dead code and copying it forward would keep a
  reader looking for the number it protects.
- `max-inline-size: var(--measure)` is new and mandatory: at `--type-h3` the 76-character line
  would otherwise run the full footer width, and §3.4's 68-character measure cap applies to it
  like everything else.
- `--type-h3` is the one text-face step above body, and its mobile floor (20px) is a size h3s
  already render at across the site, so the smallest viewport carries no new risk.
- **Not Fraunces.** A display face here would give every page a second display element, competing
  with the page's own `h2`s from inside a reversed panel, and §3.1 restricts Fraunces to
  headlines. This is a `<p>`; using a heading's *size token* does not make it a heading.
- Colour and ground are untouched: `--paper` on `--season-ground`, **12.05:1** on navy and
  **7.57:1** on the off-season slate. Both were already passing at 14px and both improve as a
  proportion of nothing — the ratio is size-independent — but the size increase moves the line
  from "14px normal text needs 4.5:1" to a comfortable margin at 20px+. Nothing to recompute.

### 3.1.4 The audit that keeps this true

Any of the three invariants can be checked by reading files. None needs a browser, and none needs
the font binaries — which is the point, because neither is available here.

| Check | Method | Fails when |
|---|---|---|
| Invariant 1 | Every CSS rule containing `font-family: var(--font-mono)` also contains `text-transform: uppercase`. | A mono surface can hold lowercase. |
| Invariant 2 | For each class on the §3.1.1A list, extract the rendered text of every element carrying it, uppercase it, and diff the character set against §3.1.1B. | A mono string contains a glyph the file does not hold. |
| Invariant 3 | Expand the `unicode-range` in `styles/fonts.css` to a character list and compare it to §3.1.1B — they must be **equal**, not merely overlapping. | The range over-claims and a character silently falls back mid-string. |
| The list itself | Diff the set of classes setting `--font-mono` against §3.1.1A. | A component acquired mono without a ruling. |

Run all four whenever a mono string changes, whenever a component gains `--font-mono`, and
**before the font binaries are installed** — invariant 3 in particular is unfalsifiable while no
font ships and becomes load-bearing the same hour one does.

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
- 🔁 **Mono renders uppercase, always** (§3.1.1 invariant 1). Every rule that sets `--font-mono`
  also sets `text-transform: uppercase`. This is not a style preference: the shipped Plex Mono
  subset contains no lowercase, so a lowercase mono string breaks into two faces mid-word the day
  the font installs. Copy stays sentence case in the source; CSS does the shouting, and it does it
  before font matching. **If a label cannot survive being uppercased, it is prose and belongs in
  Plex Sans.**
- 🔁 **Mono sets labels and readings, never sentences.** The test: could this string appear in the
  margin of a form, on a stamp, or in a meter reading? If it has a subject and a verb and is
  making an argument, it is Plex Sans no matter how ledger-ish it feels. §3.1.2 is the ruling that
  set this; §3.1.1A is the list it produced.
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

**Ground check (§2 preamble):** the strip runs the measure and the bleed track, so it is on
`--paper` in both seasons and `--ember` is 3.31:1 there — correct as written. **It does not take
`--mark`**: the next-visit square is a position in a schedule, not a decision awaiting a yes or
no, and §2.5 is a monopoly on the latter only. If a build ever insets the strip on a
`--paper-deep` band, the square goes to `--ember-deep` for contrast, and that is a contrast fix,
not a promotion to `--mark`.

Off Season, every tick is `--rule`, the strip is preceded by a `--season-support` block reading
`NEXT SEASON OPENS MARCH 1`, and the ember square sits on the first March tick.

This is the argument in `messaging.md` §1 drawn rather than written: it makes the season legible
as a shape, it makes *the sixteenth visit* countable, and off season it states the closure as a
fact instead of a paragraph. **It is page furniture, not a chart** — no axes, no scale, no data
beyond a schedule anyone could copy off the agreement. Do not let it acquire a tooltip, a
percentage, or an animation that counts.

**3. The summary facsimile.** A real, typeset service summary on the page — rail stamp reading
`WPC513 · VISIT 07 OF 16`, the work performed, then a *finding* marked with a **2px `--mark`
margin rule** and its price in the rail in `--ember-deep`. It is the product demo, the voice demo,
and the proof of the promise in one object, and it belongs above the price. Set at 0.9× body size
on a `--paper-deep` ground with hairlines top and bottom, so it reads as a document reproduced on
the page rather than a UI panel. If the property in the facsimile has a pool, the pool rows carry
the `--season-support` rail tag **and the disclaimer**.

🔁 **The facsimile sets `--mark: var(--ember-deep)` (§2.5).** Its ground is `--paper-deep`, where
`--ember` is 2.89:1 and `--ember-deep` is **4.74:1**. So the margin rule and the price in the rail
are the same value — which is correct, because they are the same finding. **The price in the rail
is the facsimile's own rail, inside the `--paper-deep` sheet, not the page rail**; if a build ever
moves it out onto `--paper`, `--ember-deep` is 5.43:1 there and still passes, but `--mark` must
then be re-resolved for whichever element crossed the boundary.

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
image on the site. 🔁 **Two weights, four meanings** — corrected 2026-08-05, see the ruling
below:

| Hairline | Means | Contrast, **against the ground it renders on** |
|---|---|---|
| `1px --rule` | The default separator | 1.7:1 on `--paper`, 1.45:1 on `--paper-deep`, 7.2:1 reversed on navy. **Exempt** — structural, never the sole carrier of information (§2.1). |
| `1px --ink` | A section boundary | 15.1:1 on `--paper`, 13.2:1 on `--paper-deep` |
| **`2px --mark`** | **A finding, and only a finding** | **4.74:1** — `--mark` resolves to `--ember-deep` on the `--paper-deep` sheet the facsimile actually sits on (§2.5). |
| `2px --season-support` | The pool disclaimer rule, and only that | 5.29:1 on `--paper`, 4.62:1 on `--paper-deep` |

The fourth row is not new to the design — §4.1 has always drawn the teal disclaimer rule inside
the pool block, and §4.1 has always said that rule and the `POOL` rail tag are the only teal on
the page. It was missing from this list, which described three weights while the design shipped
four meanings. Under-enumeration here is how the ruling below became possible in the first place.

> 🔁 **RULING, 2026-08-05 — the finding rule takes `--mark`, resolving to `--ember-deep`.**
>
> **What this section used to say:** *"`2px --ember` — a finding, and only a finding. At 3.3:1 on
> `--paper` it clears the non-text contrast threshold, so it is a legitimate carrier of meaning
> and not decoration."*
>
> **Why that was wrong.** The arithmetic was right — `--ember` on `--paper` is 3.31:1. The ground
> was wrong. **There is exactly one finding rule in this system and §4.5 set-piece 3 puts it on
> `--paper-deep`**, where the same colour is **2.89:1**, 0.11 under the floor. The sentence
> defended the colour on a surface the element has never once appeared on. It was not a rounding
> error or a disagreement about a hex; it was a justification pointed at the wrong page.
>
> **The argument for keeping 2.89:1, and why it is declined.** `wpc-web` shipped as specified and
> flagged it rather than quietly changing a colour, which is exactly the behaviour §12.2 asks for.
> Its argument: the finding block already carries a text heading — *"What I found"* — and the
> price beside it, so the 2px rule is redundant emphasis rather than a graphic required to
> understand the content, and SC 1.4.11 does not bind. **That reading of the criterion is
> defensible.** It is declined anyway, on the three grounds set out in §2.5: it does not
> generalise to the focus ring, which is the identical mark with no redundancy available to it; a
> redundancy exemption would make this colour value silently dependent on copy decisions owned by
> another file; and §2.4 rule 2 already prescribed the answer. The full reasoning lives in §2.5
> because the ruling is about the mark, not about the texture layer.
>
> **The correction is not "swap one hex."** Both places were pinned to a literal `--ember`, so a
> swap would have fixed the finding rule and left the focus ring — see §6, which had the same
> defect and was not flagged. `--mark` (§2.5) is the fix; this row consumes it.

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
`outline: 2px solid var(--mark); outline-offset: 3px; border-radius: 0;` plus a filled 6px
`--mark` square drawn in the rail at the row's baseline. Keyboard users get the *same* marker the
summary uses for a finding — the same **role**, resolved to the same step of the ramp whenever
they share a ground. Focus is never removed, and it is never only a colour change.

🔁 **Corrected 2026-08-05 — this carried the same defect as §5.2 and was not flagged.** The ring
was pinned to a literal `--ember`, which is 3.31:1 on `--paper` and passes, **2.89:1 on
`--paper-deep`**, and **2.29:1 on the off-season slate panel** — a value §2.3's own reversed list
already bans. Nothing about a focus ring is redundant: it has no heading beside it and no price,
so the exemption argued for the finding rule is not even available here. This is the instance that
decided the ruling. `--mark` (§2.5) resolves it on every surface, and the resulting ring is:

| Focus lands on | Ring and rail square | Ratio |
|---|---|---|
| `--paper` | `--ember` | 3.31:1 |
| `--wash`, In Season row hover | `--ember` | 3.06:1 |
| `--paper-deep` — bands, image plates, **and the Off Season row hover** | `--ember-deep` | 4.74:1 |
| `--navy` status strip | `--ember-lift` | 4.88:1 |
| Off Season slate panel | `--ember-lift` | 3.06:1 |

Two consequences worth stating plainly, because both are easy to get wrong:

- **The offset matters to which ground you measure against.** At `outline-offset: 3px` the ring
  sits *outside* the element's box, so on a filled hover row the adjacent colour may be the page
  ground rather than the fill. **Where the two differ, publish and satisfy the worse of them.**
  For the In Season row that is `--wash` at 3.06:1; for the Off Season row it is `--paper-deep`,
  which is why that row resolves `--mark` to `--ember-deep`.
- **"Nothing focusable sits on `--paper-deep`" is not a substitute for this.** It is a good
  markup habit and worth keeping, but it is an invariant maintained by hand, and the Off Season
  hover fill breaks it by aliasing `--wash` to `--paper-deep` without anyone touching the markup.
  A per-surface `--mark` holds without anyone remembering the rule.

**A ring that inverts to `--paper` on a reversed panel is also acceptable** and is a stronger
indicator on navy (12.05:1 against 4.88:1). If a build prefers it, set `--mark: var(--paper)` on
that panel — it is still one declaration in the same place, and it stays inside §2.5's structure
rather than around it. What is not acceptable is a hardcoded ember on any panel.

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

**Contrast inside the mark:** `--paper` on `--navy` = **12.05:1**. `--ember-lift` on `--navy` =
**4.88:1**. Both clear AA at every size the mark ships at.

> **On the 4.88:1, which `wpc-web` flagged as the tightest text pass on the site — it passes, and
> here is the split, so it is not re-litigated.** Two different elements share that value and only
> one of them is bound by SC 1.4.3:
>
> - **`WPC 513` inside the lockup** is a **logotype**. WCAG 1.4.3 exempts text that is part of a
>   logo or brand name from any contrast requirement. It is exempt at 4.88:1 and would be exempt
>   at 3:1. **This is not a licence to darken the navy or brighten the orange** — it is his
>   printed mark and §7's whole point is that we do not redraw it.
> - **The season stamp in the masthead strip** is **not** a logotype. It is UI text at
>   `--type-stamp` 12px, so it needs 4.5:1 and it has **4.88:1**. It passes with 0.38 of margin,
>   which is thinner than anything else on the site but is margin, not a rounding artefact.
>
> **What this constrains going forward:** the pass depends on `--ember-lift` and `--navy` both
> staying exactly where they are. §2.4 rule 7 already forbids brightening the ember or lightening
> the navy for reasons of register; this adds an accessibility reason to the same prohibition,
> and a new one — **do not darken `--ember-lift` either.** It has 0.38 of headroom above 12px
> text and none of it is spare. If the stamp ever needs to move, move the *size* (14px clears
> comfortably), not the colour.

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
| **5** | Colour used semantically | The ember ramp is a monopoly on "act," expressed as `--mark` — one role, resolved to the ramp step its ground requires (§2.5). `--season-support` teal appears only where a pool does. The whole palette flips on the calendar to say whether the business is open. |
| **6** | Designed hover / focus / active | Three coordinated changes per hover (§6). Focus draws the same marker the summary uses for a finding, at the same step of the ramp wherever they share a ground. Active moves 1px and darkens the rule. |
| **7** | Grid-breaking editorial composition | Asymmetric rail-and-measure; the display headline breaking one column left of the body; columns 11–12 as a live bleed track past the container; the season strip running out of the measure into it. |
| **8** | Texture and atmosphere | 4% fractal-noise paper grain, the hairline system of two weights carrying four meanings (§5.2), and the survey-tick season divider that gets sparser when the season closes. |

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

   🔁 **And check the ground, not just the number.** The 2026-08-05 ruling exists because 27
   ratios all reproduced and one of them was still wrong — computed against `--paper` for an
   element that only ever renders on `--paper-deep`. **For every coloured element, name the
   surface it actually renders on, including hover and both seasons, and satisfy the worst
   one.** A ratio that reproduces to two decimals against the wrong ground is a passing check on
   a failing element. Flagging beats silently adjusting, and `wpc-web` was right to flag; the
   ruling is that the answer was a variable, not a hex.

   🔁 **`--mark` is a real token and the only way a decision mark gets a colour** (§2.5). It is
   declared per surface, in the same block that sets that surface's background, and it resolves
   to `--ember`, `--ember-deep`, or `--ember-lift` — never to a literal hex. **The finding rule
   (§4.5, set-piece 3) and the focus indicator (§6) both take `var(--mark)` and nothing else.**
   If `var(--ember)` appears in any `outline`, `border`, or decision-mark `background-color`,
   this item was not implemented. `--hair-find: 2px` survives unchanged as the weight token —
   only the colour it is paired with changes hands. Item numbering is unchanged so existing
   cross-references to §12.2 and below still resolve.
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

13. 🔁 **The mono contract (§3.1.1) is binding, and its three invariants are checked before the
    font binaries are installed, not after.** Mono is permitted on the §3.1.1A surfaces and
    nowhere else; every mono rule carries `text-transform: uppercase`; the shipped glyph set is
    §3.1.1B exactly; and the declared `unicode-range` **equals** that set rather than exceeding
    it. `.foot__line`, `.foot__prices`, and `.cta__aside` move to Plex Sans per §3.1.3 — that is
    a ruling, not a suggestion, and it is the precondition for installing the mono at all.
    **A component that acquires `--font-mono` without a corresponding row in §3.1.1A is the bug
    this contract exists to prevent**, in the same way that a surface gaining a
    `background-color` without a `--mark` is the bug §2.5 exists to prevent. Both are one
    declaration going missing next to another declaration that needed it.

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
- `02-website/site/fonts/README.md` — the install procedure and the `unicode-range` that §3.1.1B
  governs. It is regenerated **from** §3.1.1, never the other way round; where the two disagree,
  §3.1.1 is right and the README is the defect.
