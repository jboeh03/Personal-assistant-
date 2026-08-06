# Fonts — the one thing missing from this build

`01-brand/visual-direction.md` §3 specifies three faces, all SIL Open Font Licence:

| Role | Face | Why it, and not something else |
|---|---|---|
| Display | **Fraunces** (Undercase Type) | Descends from Windsor, Souvenir, and the Cooper series. Cooper Old Style spent fifty years on hardware-store signage and seed packets across the Ohio Valley. Sturdy, warm, slightly agricultural, old enough not to date. |
| Text | **IBM Plex Sans** (IBM) | An industrial grotesque drawn for an engineering company, with true tabular lining figures and an unusually clear 1/l/I. Character without personality, which is what body copy about hose bibs needs. |
| Data | **IBM Plex Mono** (IBM) | Same superfamily, so this is one type system plus a display face rather than three unrelated fonts. It is what makes a price row read as a record instead of a pricing table. |

**None of them are in this repository.** The build environment had no outbound
network, so the binaries could not be fetched, and linking an unverified CDN URL
would have been worse than shipping without them.

**The site is complete and looks intentional as it stands.** The fallback chains
in `styles/tokens.css` were chosen for width and colour rather than
availability, so a Fraunces failure lands on Iowan Old Style or Palatino — both
sturdy old-style faces — and never on Times.

> **This file is generated from `visual-direction.md` §3.1.1, never the other way
> round.** Where the two disagree, §3.1.1 is right and this file is the defect.
> Regenerated 2026-08-06 from §3.1.1B after the mono ruling (§3.1.2).

---

## The install is no longer blocked

**It was, until 2026-08-06.** Three components — `.foot__line`, `.foot__prices`
and `.cta__aside` — were set in mono and rendered in full lowercase, which no
subset in this file has ever contained. `wpc-brand` ruled (`visual-direction.md`
§3.1.2): **all three move to IBM Plex Sans. The permitted-surface list does not
grow and the subset does not grow to hold lowercase.** Mono earns a third family
by being the mark of a *reading*, and a sentence is not a reading.

Those three moves are applied in `styles/components.css`. The subset grew by two
glyphs — the **hyphen** and the **en dash**, roughly 100 bytes — which is inside
the rounding on the 8 KB line below. Nothing here is waiting on a decision.

---

## Installing them

1. Download from Google Fonts or the upstream repositories:
   - Fraunces — variable, `wght` 500–700, Latin subset, `opsz` axis retained
   - IBM Plex Sans — 400 and 600, Latin subset
   - IBM Plex Mono — 500 only, subset with exactly the command below
2. Subset the mono. This line is copied from `visual-direction.md` §3.1.1B and
   must not be retyped from a reading of the glyph table:

   ```
   --unicodes=U+0020,U+0024,U+0028-0029,U+002B-003A,U+0041-005A,U+00B7,U+2013-2014
   ```

3. Convert to WOFF2 and drop the files in this directory.
4. Add one line to the `<head>` of every page, **after** the three existing
   stylesheet links so the tokens are already defined:

   ```html
   <link rel="stylesheet" href="styles/fonts.css">
   ```

5. Add one preload, on `index.html` only, and only for Plex Sans 400 — it is the
   single face needed for first paint:

   ```html
   <link rel="preload" href="fonts/ibm-plex-sans-400.woff2" as="font" type="font/woff2" crossorigin>
   ```

6. Create `styles/fonts.css` with exactly this:

   ```css
   @font-face {
     font-family: "Fraunces";
     src: url("../fonts/fraunces-var.woff2") format("woff2-variations");
     font-weight: 500 700;
     font-style: normal;
     font-display: swap;
   }
   @font-face {
     font-family: "IBM Plex Sans";
     src: url("../fonts/ibm-plex-sans-400.woff2") format("woff2");
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   @font-face {
     font-family: "IBM Plex Sans";
     src: url("../fonts/ibm-plex-sans-600.woff2") format("woff2");
     font-weight: 600;
     font-style: normal;
     font-display: swap;
   }
   @font-face {
     font-family: "IBM Plex Mono";
     src: url("../fonts/ibm-plex-mono-500.woff2") format("woff2");
     font-weight: 500;
     font-style: normal;
     font-display: swap;
     /* EXACTLY the shipped glyph set, and nothing wider — this range and the
        --unicodes line above expand to the same 49 codepoints. See invariant 3
        below for why the asymmetry only ever runs one way. */
     unicode-range: U+0020, U+0024, U+0028-0029, U+002B-003A,
                    U+0041-005A, U+00B7, U+2013-2014;
   }
   ```

Nothing else changes for Fraunces and Plex Sans. `tokens.css` already names all
three families at the head of each stack, and `--display-axes` already pins
`opsz 120, SOFT 0, WONK 0`.

---

## The mono contract

Three things have to agree: **which surfaces are set in mono**, **which
characters those surfaces render**, and **which glyphs the font file contains**.
When any two drift apart the failure is silent — the page renders, the font
loads, and one word changes face somewhere in a footer.

### A. The surfaces

Mono is permitted on these and nothing else (`visual-direction.md` §3.1.1A).
Adding a row is a change to that file, not a decision available here.

| # | Surface | Shipped as |
|---|---|---|
| 1 | The logo wordmark and the small-caps name inside the lockup | `.lockup__type` |
| 2 | Record stamps — the summary header, the season stamps, `MEMBERSHIP FULL` | `.stamp` |
| 3 | Marginal rail labels | `.rail` |
| 4 | Dates, route days, month abbreviations under the season strip | `.rail`, `.s16__months` |
| 5 | Visit numbers, the open-slot count, the price figure | `.figure` |
| 6 | The facsimile's stamps, rail labels and figures — **not its prose** | `.report__h`, `.stamp`, `.rail` |
| 7 | Field-set legends, definition terms, footer column headings | `.form legend`, `.defs dt`, `.foot h2` |
| 8 | The season toggle and the skip link — stamps that happen to be controls | `.season__label`, `.skip` |

**Anything not on this list is Plex Sans.**

### B. The glyphs — 49, and the declared range matches exactly

| Group | Characters | Codepoints |
|---|---|---|
| Uppercase Latin | `A`–`Z` | `U+0041-005A` |
| Digits | `0`–`9` | `U+0030-0039` |
| Space | ` ` | `U+0020` |
| Money and arithmetic | `$` `+` | `U+0024`, `U+002B` |
| Sentence punctuation | `.` `,` `:` | `U+002E`, `U+002C`, `U+003A` |
| Hyphen | `-` | `U+002D` |
| Parentheses | `(` `)` | `U+0028-0029` |
| Solidus | `/` | `U+002F` |
| Separator | `·` | `U+00B7` |
| Range | `–` | `U+2013` |
| Aside | `—` | `U+2014` |

**No lowercase.** No apostrophe, no quotation marks, no `?`, `!`, `%`, `&`, `#`,
`[`, `]`, `*`, `;`, `<`, `>`, `=`, `@`, and no accented characters.

`U+002B-003A` is contiguous and holds `+ , - . /`, the ten digits and `:` —
every character in it is wanted, so the range is compact **and** exact.

### Which dash means what — a rule, not a preference

- **`–` en dash is a range**, and only a range: `MAR 1 – OCT 31`,
  `NOV 1 – END OF FEB`, `TUE–THU`, `BLOCK 1–8`. Spaced when either side contains
  a space; closed up when both sides are single tokens.
- **`-` hyphen joins a compound**: `MID-SEASON`. It is never a range and never a
  dash in prose. It no longer punctuates a phone number in mono — see below.
- **`·` middot separates the fields of one stamp**:
  `WPC513 · SERVICE SUMMARY · VISIT 07 OF 16`. The default separator; reach for
  it before either dash.
- **`—` em dash is an aside inside a label**, and it survives in the subset for
  exactly one shipped string — `FORMAT ONLY — NOT A CLIENT SUMMARY`, the caption
  that keeps the facsimile honest. If that string is ever rewritten, the em dash
  leaves the subset with it.

### C. The three invariants

Each is checkable by reading files. None needs a browser and none needs the font
binaries — which is the point, because neither is available here. Run all three
whenever a mono string changes, whenever a component gains `--font-mono`, and
**before the binaries are installed**.

1. **Every mono surface renders uppercase.** Every rule setting
   `font-family: var(--font-mono)` also sets `text-transform: uppercase`. This is
   the load-bearing one: it converts "does the subset cover the content?" — a
   question needing every string on ten pages — into one grep. A mono rule
   without `text-transform: uppercase` is a defect on sight.
2. **No mono string contains an out-of-set character, as rendered** — after
   `text-transform`, not as authored. Copy needing an apostrophe, a question mark
   or an ampersand is prose, and prose does not go in mono. **Rewriting the label
   is the fix, not growing the subset.** Four were already rewritten this way and
   all four read better for it.
3. **The declared `unicode-range` never exceeds the shipped glyph set.**
   Asymmetric on purpose: a file holding an unused glyph costs bytes, which is a
   budget problem. A range claiming a character the file lacks costs **a face
   change inside a word**, which is a correctness problem, and it is invisible
   until the font installs. When the two differ, **shrink the range** — never
   widen it on the assumption the glyph is probably in there.

### The blind spot an audit of shipped files cannot see

**Template slots inside a mono surface are constrained exactly like the literal
text around them.** The record stamp is

```
WPC513 · SERVICE SUMMARY · {{address_short}} · VISIT 07 OF 16 · MONDAY, JUNE 15
```

`O'BRIEN CT` and `ST. MARY'S LN` are ordinary west-side addresses and **both
carry an apostrophe this subset does not hold.** An audit of the shipped files
sees `{{address_short}}`, finds nothing wrong, and passes.

Enforcement belongs where the value is produced, not in a proofread: **strip or
transliterate the apostrophe before the value reaches the stamp** — `OBRIEN CT`,
`ST. MARYS LN`. Whoever supplies real addresses needs to know this, so it is
written here, in `site-spec.md` §10, and beside the stamp in `copy-deck.md`.

### Labels rewritten rather than glyph-patched

| Was | Now | Where |
|---|---|---|
| `IF IT DOESN'T FIT` | `ROUTE FIT` | `apply.html`, rail |
| `WHAT I'M LIKE` | `TRUST` | `about.html`, rail |
| `WHEN IT'S CHARGED` | `WHEN THE CARD IS CHARGED` | `pricing.html`, `.defs dt` |
| `WHAT DOES THE PROPERTY HAVE?` | `WHAT THE PROPERTY HAS` | `apply.html`, `<legend>` |

A rhetorical-looking question rendered in caps was the wrong register for a
fieldset legend anyway.

### What is no longer outstanding

| Was flagged | Resolution |
|---|---|
| **Lowercase a–z** in `.foot__line`, `.foot__prices`, `.cta__aside` | Ruled 2026-08-06: all three move to **Plex Sans** (§3.1.2, §3.1.3). Applied in `components.css`. |
| **En dash `–` (U+2013)** — both season stamps, `SCOPE · MAR 1 – OCT 31`, `16 VISITS · MAR 1 – OCT 31` | Added to the subset. The glyph list was the bug; the strings were right. |
| **Hyphen `-` (U+002D)** — `MID-SEASON`, and every rendering of `[PHONE]` | Added to the subset for `MID-SEASON`, which is a genuine mono hyphen. The phone number is no longer a mono string at all: `[PHONE]` rendered in mono only in `.cta__aside`, so the eleven-per-site risk is gone rather than glyph-patched. |
| **`[` `]`** — `[PHONE]`, `[EMAIL]` | Placeholders; they disappear at launch (`site-spec.md` §10) and both lived in `.cta__aside`, which is now Plex Sans. No glyph needed. |

---

## Budget when installed

| File | Approx. |
|---|---|
| Fraunces variable, Latin subset, wght 500–700 | 28 KB |
| IBM Plex Sans 400 + 600 | 34 KB |
| IBM Plex Mono 500, 49-glyph subset | 8 KB |
| **Total** | **≈ 70 KB** |

Inside the microsite allowance in `.claude/rules/web/performance.md`, and
unchanged by the ruling — two glyphs is inside the rounding.

## Three rules that do not bend

- **`SOFT 0` and `WONK 0` everywhere on screen.** Fraunces is capable of being
  twee and must be prevented from it. `WONK 1` is permitted on exactly one
  element in the whole system — the wordmark on the truck door and the yard sign
  — and nowhere on the website.
- **Mono sets labels and readings, never sentences.** The test: could this string
  appear in the margin of a form, on a stamp, or in a meter reading? If it has a
  subject and a verb and is making an argument, it is Plex Sans no matter how
  ledger-ish it feels.
- **Do not add a fourth family.** The mono is already a documented exception to
  the two-family rule in `performance.md`, and it is paid for by subsetting. The
  subset is a guardrail, not just a download size: the reason nobody sets a
  paragraph in mono is that they physically cannot.
