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

---

## Installing them

**Read §"The mono subset is smaller than the site" below before step 1.** Two of
the three faces install without thought. The mono does not, and the day it lands
is the day a latent defect fires.

1. Download from Google Fonts or the upstream repositories:
   - Fraunces — variable, `wght` 500–700, Latin subset, `opsz` axis retained
   - IBM Plex Sans — 400 and 600, Latin subset
   - IBM Plex Mono — 500 only, subset to **uppercase, digits, and
     `. , : · $ + — / ( )`**
2. Convert to WOFF2 and drop the files in this directory.
3. Add one line to the `<head>` of every page, **after** the three existing
   stylesheet links so the tokens are already defined:

   ```html
   <link rel="stylesheet" href="styles/fonts.css">
   ```

4. Add one preload, on `index.html` only, and only for Plex Sans 400 — it is the
   single face needed for first paint:

   ```html
   <link rel="preload" href="fonts/ibm-plex-sans-400.woff2" as="font" type="font/woff2" crossorigin>
   ```

5. Create `styles/fonts.css` with exactly this:

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
     /* EXACTLY the shipped glyph set, and nothing wider. See the section below:
        the previous range claimed U+0020-0029 and U+002B-002F, which is eleven
        characters this file does not contain — including the apostrophe. */
     unicode-range: U+0020, U+0024, U+0028-0029, U+002B-002C, U+002E-003A,
                    U+0041-005A, U+00B7, U+2014;
   }
   ```

Nothing else changes for Fraunces and Plex Sans. `tokens.css` already names all
three families at the head of each stack, and `--display-axes` already pins
`opsz 120, SOFT 0, WONK 0`.

---

## The mono subset is smaller than the site — resolve this before installing

`visual-direction.md` §3.1 buys the third family with a promise: Plex Mono ships
**uppercase, digits, and `. , : · $ + — / ( )` only**, one weight, under 8 KB.
That promise is what makes a documented exception to the two-family rule in
`performance.md` affordable, and it should be kept.

**But the site sets more than that in mono today.** CSS font matching is
per-character: if a character is inside the declared `unicode-range` and the
glyph is missing from the file, the browser falls through to the next family in
the stack **for that character only**. The result is a face change inside a
word. Nothing is wrong today because no font ships; everything below fires the
moment one does.

**What was over-claimed.** The `unicode-range` above used to read
`U+0020-0029, U+002B-002F, …`. That block claims `! " # % & '` and `-`, none of
which are in the subset — so an apostrophe in a mono string was claimed by Plex
Mono and rendered by Consolas. The range is now written to match the shipped
glyph set exactly, so anything outside it falls back predictably instead of
silently.

**Three defects were fixed by rewriting the copy**, because a mono label is a
stamp and a stamp does not need an apostrophe:

| Was | Now | Where |
|---|---|---|
| `IF IT DOESN'T FIT` | `ROUTE FIT` | `apply.html`, rail |
| `WHAT I'M LIKE` | `TRUST` | `about.html`, rail |
| `WHEN IT'S CHARGED` | `WHEN THE CARD IS CHARGED` | `pricing.html`, `.defs dt` |

A fourth, `WHAT DOES THE PROPERTY HAVE?`, lost its question mark and became
`WHAT THE PROPERTY HAS` — the glyph is out of subset, and a rhetorical-looking
question rendered in caps was the wrong register for a fieldset legend anyway.

### What is still outside the subset, and is flagged rather than fixed

Each of these is a decision for `wpc-brand`, because the fix is either a change
to §3.1's glyph list or a change to §3.1's list of surfaces mono is allowed on.
**Do not install the mono until one of the two is chosen.**

| Out-of-subset | Where it renders | Why it is not fixed here |
|---|---|---|
| **Lowercase a–z** | `.foot__line` (all ten footers), `.foot__prices` (all ten), `.cta__aside` (eleven) | These three are set in mono and are **not on §3.1's permitted list**, which is: the logo wordmark, record stamps, rail labels, dates, route days, visit numbers, the price, and the summary facsimile. Either they move to Plex Sans — a visible typographic change that cannot be checked here, since Playwright will not launch — or the subset grows by a full lowercase alphabet. The second costs roughly 3–4 KB and breaks the promise that paid for the third family. |
| **En dash `–` (U+2013)** | Both season stamps, `SCOPE · MAR 1 – OCT 31`, `PROJECTS · TUE–THU`, `16 VISITS · MAR 1 – OCT 31` | §3.1 lists the em dash and not the en dash, but §4.5 of the same file specifies the strip label `16 VISITS · MAR 1 – OCT 31` **with an en dash**, and §2.3 writes the off-season range the same way. The file requires a glyph its own subset omits. One of the two sentences is wrong and it is not this file's call. |
| **Hyphen `-` (U+002D)** | `STARTING MID-SEASON`, `pricing.html` `.defs dt` | Almost certainly an oversight in the glyph list rather than a decision. Flagged rather than dodged: mangling a clear label to route around a subsetting omission is the wrong trade for one glyph that degrades to a near-identical fallback. |

Until this is resolved, the fallback chain does its job: `ui-monospace` on Apple,
`Cascadia Mono` / `Consolas` on Windows, `Roboto Mono` on Android. The page is
correct; it is the *consistency* of one line that is at risk, not its legibility.

---

## Budget when installed

| File | Approx. |
|---|---|
| Fraunces variable, Latin subset, wght 500–700 | 28 KB |
| IBM Plex Sans 400 + 600 | 34 KB |
| IBM Plex Mono 500, subset | 8 KB |
| **Total** | **≈ 70 KB** |

Inside the microsite allowance in `.claude/rules/web/performance.md`.

## Two rules that do not bend

- **`SOFT 0` and `WONK 0` everywhere on screen.** Fraunces is capable of being
  twee and must be prevented from it. `WONK 1` is permitted on exactly one
  element in the whole system — the wordmark on the truck door and the yard sign
  — and nowhere on the website.
- **Do not add a fourth family.** The mono is already a documented exception to
  the two-family rule in `performance.md`, and it is paid for by subsetting.
