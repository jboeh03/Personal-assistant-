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
     unicode-range: U+0020-0029, U+002B-002F, U+0030-0039, U+003A, U+0041-005A,
                    U+00B7, U+2014;
   }
   ```

Nothing else changes. `tokens.css` already names all three families at the head
of each stack, and `--display-axes` already pins `opsz 120, SOFT 0, WONK 0`.

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
