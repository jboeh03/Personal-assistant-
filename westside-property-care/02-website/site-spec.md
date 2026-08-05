# Site Spec

**Owner:** `wpc-web` · **Status:** source of truth for the site's architecture
**Reads from:** `CANON.md`, `00-model/`, `01-brand/` · **Never contradicts them**
**Design brief:** `01-brand/visual-direction.md` — FIELD LEDGER. Followed, not reinterpreted.

---

## 1. What this site is for, and what it must not become

`CANON.md` §5: **the site is not a lead-generation engine. It is what closes someone who
already heard his name** — from a neighbor, a yard sign, a grill-cleaning job, or a Google
Business Profile listing.

Three consequences that govern every decision below:

1. **The architecture is a close, not a funnel.** There is one path through the site and it
   ends in the same place from every page. No lead magnets, no gated content, no newsletter.
2. **SEO does not shape the information architecture.** No service-area page farm, no
   `/pool-cleaning-green-township` doorway pages. A six-client business does not need them and
   they would make the site look like every other home-services site. See `seo.md` §1.
3. **Scope and price are unambiguous and both are published.** Anything a competitor would
   hide behind "contact us for a quote" is on the page, and the exclusions sit *above* the
   price on every surface that carries one (`01-brand/messaging.md` §3).

### The one ask, per state

| Enrolment state | The single ask | Where it lives |
|---|---|---|
| **Open** (1–6 slots free) | Text me your cross street → walk the property with me, about forty minutes | `apply.html` |
| **MEMBERSHIP FULL** (0 free) | Add your name to the waitlist, plus the project offer | `waitlist.html` |

`01-brand/voice.md` §1 allows exactly one ask per surface. Every page ends in the same one.

---

## 2. Page inventory

Ten files. Six in the navigation. That is the whole site.

| # | File | In nav | Purpose | Single conversion goal |
|---|---|---|---|---|
| 1 | `index.html` | Home | Close the person who already heard his name, in one scroll | Reach `apply.html`, or text the cross street |
| 2 | `whats-included.html` | What's included | Make the scope and the two seasons unambiguous; answer "what happens in December" in full | Keep reading to `pricing.html` |
| 3 | `pricing.html` | Pricing | Make the price unambiguous and unnegotiable, with the exclusions above it | Reach `apply.html` |
| 4 | `projects.html` | Projects | Show the second half of the business, and give a non-qualifying prospect a real yes | Text him about a project — no membership required |
| 5 | `about.html` | About | Answer "you're brand new, why should I trust you," and explain the cap as a mechanism | Reach `apply.html` |
| 6 | `apply.html` | Apply | Take the inquiry with the two qualifying questions attached | Form submitted, or a text sent |
| 7 | `waitlist.html` | — (contextual) | The waitlist, which exists in **both** states | Waitlist form submitted |
| 8 | `membership-full.html` | — (state swap) | `index.html` in the MEMBERSHIP FULL state — the drop-in replacement home page | Reach `waitlist.html` |
| 9 | `thanks.html` | — | Success state for both forms | Nothing. It ends. |
| 10 | `404.html` | — | Wrong address. Points at the price and the phone number | Reach a real page |

### Why this shape and not another

- **Home is long and does the whole job on its own.** Someone arriving from a yard sign or a
  neighbor's recommendation should be able to close without a second click: what it is, what
  happens on a visit, the report, winter, what is excluded, the price, the geography, the ask.
  Every subsequent page is the long version of one home-page section for the reader who needs
  more before they commit.
- **"What's Included" is one page, not two.** Splitting Green Season and Dormant Season into
  separate pages would let a reader see a summer service and a winter service and conclude
  they are being charged twice for one. They are on the same page, one after the other, under
  a single heading that says the price does not change. That is a structural argument, not a
  copy argument, and it is the reason the split is refused.
- **Projects is a page, not a footnote.** `CANON.md` §2 — the membership is the lead engine
  and project revenue is the actual income. A prospect who fails the route test or the budget
  test is still a profitable project customer (`00-model/ideal-client.md` §4), and the site
  needs somewhere to send them that does not read as a consolation prize.
- **The waitlist is permanent, not a full-state artifact.** `00-model/ideal-client.md` §4: a
  qualified prospect who does not fit a route cluster goes on the waitlist *even when slots are
  open, even at $329.* Building the waitlist as something that only appears when the book is
  full would misrepresent the model. It is a live page in both states.
- **No blog, no gallery, no FAQ page, no testimonials page.** A gallery cannot exist until
  real photographs do (`CANON.md` §9.3). A testimonials page cannot exist at all
  (`01-brand/brand-brief.md` §4.4). The FAQ content is distributed to the section it belongs
  to, because an FAQ page is where objections go to be ignored.

---

## 3. The two enrolment states

The scarcity is real (`00-model/operating-model.md` §5). Both states are fully built.

### 3.1 Where the number lives

The open-slot count appears in **three files only**: `index.html`, `apply.html`, and
`waitlist.html`. It is deliberately *not* in the sticky status strip, because that strip is on
every page and would make the count an eight-file edit every time a slot changes.

In each of the three files it sits inside one block marked:

```html
<!-- ══ ENROLMENT STATE — the only block to edit when a slot opens or fills ══ -->
```

The shipped default is **6 of 6 spots open**, which is the true number today: the business has
not launched. Launch target is 4 members, hard cap 6 (`00-model/operating-model.md` §2).

### 3.2 Switching to MEMBERSHIP FULL

`membership-full.html` is `index.html` written in the full state — same layout, same sections,
different masthead stamp, different ask, plus one added entry explaining the cap mechanism.
It is a complete page, not a fragment, so the swap is a file copy and not an edit:

```sh
cp index.html        membership-open.html   # keep the open state
cp membership-full.html index.html          # go full
```

To reopen, copy `membership-open.html` back over `index.html` and correct the count.
`membership-full.html` carries `<meta name="robots" content="noindex">` while it is the staging
copy; the note to remove it is in the file and in `seo.md` §6.

### 3.3 What changes between states

| Element | Open | Full |
|---|---|---|
| Masthead figure | `6 OF 6 SPOTS OPEN` | `MEMBERSHIP FULL`, reversed out of `--copper` in a hairline-boxed stamp |
| Home ask | Text me your cross street → walkthrough | Add your name to the waitlist |
| Added section | — | "Why six" — twelve visits, four route days, route proximity |
| `apply.html` lead | Two qualifying questions | Points to `waitlist.html` first, then still takes project inquiries |
| Price ledger | Unchanged | Unchanged — the price does not move because the book is full |
| Founding Member note | Shown while fewer than four have joined | Removed once four have joined, in both states |

Nothing else changes. The waitlist page is byte-identical in both states.

---

## 4. Global components

Fourteen components. There is no card among them, by direction
(`01-brand/visual-direction.md` §4.3, §12.3).

| Component | Where | Notes |
|---|---|---|
| **Status strip** | Every page, sticky ≥768px | Wordmark + `WPC513` left, season stamp + season switch right. One of exactly two elements permitted a shadow, because it overlaps the content beneath it (§4.4 of the brief). The other is the bleeding masthead plate, for the same reason. |
| **Season switch** | Status strip | A real `<input type="checkbox">` + `<label>`. Works with JS disabled via `body:has()`. `js/season.js` only sets its initial position from the date. |
| **Primary nav** | Every page, under the strip | `<nav aria-label="Main">`, six links, `aria-current="page"`. Wraps on small screens; no hamburger, no JS. |
| **Masthead** | Home, `membership-full` | Display headline breaking one column *left* of the measure, lede, the figure line, the ask, and the bleed-track plate. Replaces the banned centred hero. |
| **Page head** | All inner pages | Rail stamp + `h1` + lede. Smaller than the masthead; no figure. |
| **Ledger entry** | Everywhere | Rail label (mono, uppercase) + measure block + `1px --rule` hairline beneath. No box, no fill at rest, no radius, no shadow. This is what replaces cards. |
| **Rail label** | Every entry | `<p class="rail">` on mobile/tablet it sits *on* the rule above the entry; ≥1024px it moves into the left rail. Pure CSS, one markup order. |
| **Figure line** | 3 files | `--type-figure` mono, tabular numerals. Two numbers only: the open-slot count and the monthly price. |
| **Price ledger** | Home, Pricing, Projects, Waitlist | `<dl>` of independent rows, each a `<div>` wrapping a `<dt>`/`<dd>` pair. See §5. **One markup contract, everywhere it appears.** The two project ledgers were built as `<ul>/<li>/<span>`, which looks identical and tells a screen reader nothing about which number belongs to which job; they are now `<dl>` like the other two. |
| **Report facsimile** | Home, What's included | Inset on `--paper-deep`, hairlines top and bottom, 0.9× body size, `--flag-ochre` margin rule on the finding. Set-piece #2 in the brief. |
| **Exclusion list** | Home, What's included, Pricing | `<ul>` with a hanging mono `NOT` marker. Never styled as a "features" list — the marker is a strike-through rule, not a glyph (`voice.md` §6.7 bans ✓/✗ glyphs). |
| **Plate** | 7 image slots | The empty ruled band that stands in for a photograph. See §6. |
| **Season divider** | Once per page, in the bleed track | Inline SVG survey-tick line: 2,316 B raw, **403 B gzipped**, zero network requests. Ticks halve in length and every second one is dropped in Dormant Season, so the ornament gets sparser in winter. |
| **Form** | Apply, Waitlist | Native validation, honeypot, visible `Required` on both required fields, a written-in error sentence per field. Works with JS off; `js/forms.js` adds `aria-invalid` and nothing else. See §7. |
| **Footer** | Every page | Full nav, contact, the mark, the two published project prices, and the honest disclosure block. **The only reversed panel on the site**, and therefore the only place the copper focus ring is overridden to `--paper` — §9.4. |

---

## 5. The price ledger — the anti-plan-grid component

`CANON.md` §3 presentation rule and `01-brand/voice.md` §3 both govern this component, and it
is the single most likely place for the site to go wrong.

### What it must not be

Not four boxes. Not a comparison table with a "most popular" flag. Not a toggle. Not a
calculator. Not a "build your plan" widget. **And it must never publish the `+$60` / `+$40`
module arithmetic** — the modules are how the price is derived internally, not how it is shown.
A reader who is handed the components will do the sums and start shopping between the results,
which converts one membership into a menu of four plans.

### What it is

A ruled ledger. Four independent rows, each of the form *[what the property has] — [price]*,
with a leader rule of `--rule` running between the two and the price set in `--type-figure`
mono on a tabular figure column so the digits stack.

```
A property with a pool ·············································  $289  a month
A property with a pool and an outdoor kitchen ······················  $329  a month
────────────────────────────────────────────────────────────────────────────────────
A property with an outdoor kitchen ·································  $269  a month
BASE   Property care on its own ····································  $229  a month
```

- **Order is fixed by `CANON.md` §3 and `pricing.md` §2:** $289 and $329 lead. $229 never
  leads. $269 is a real price that gets charged and sits with the others, not in a footnote.
- **The first two rows close on a heavier `1px --ink` rule.** The last two close on `--rule`.
  That is the whole visual hierarchy — no colour, no badge, no emphasis weight.
- **`$229` carries a mono rail label `BASE`.** It reads as the floor the others are measured
  from without any arithmetic being published.
- **Rows are structurally independent.** Each is a `<div>` wrapping a `<dt>`/`<dd>` pair inside
  one `<dl>`. Adding, removing, or repricing a configuration is one contiguous block of markup
  and touches no CSS, no sentence, and no other row — required by
  `01-brand/visual-direction.md` §12.5.
- **No sentence on the page states how many prices there are.** `voice.md` §3's price-count
  rule. The copy says "what you pay depends on what your property has," never "four options."

Directly beneath the ledger, always, and never above it: the billing line (two visits a month,
same price in January as in July, card on file charged on the 1st, thirty days' notice, no
term). And above the ledger, always: the exclusions (`messaging.md` §3, section order).

---

## 6. Image slots — every one needs a real photograph

**No real photography exists** (`CANON.md` §9.3). **Stock photography is never a final answer**
(`01-brand/visual-direction.md` §8). Until the frames below are shot, each slot ships as a
**plate**: an empty band on `--paper-deep` with hairlines top and bottom and a mono caption
naming the missing frame. That is honest, it looks intentional, and the Field Ledger direction
was chosen partly because it looks finished with zero images.

Each slot in the markup carries an HTML comment naming the required shot. Frame numbers below
map to `01-brand/visual-direction.md` §8; the bracketed items map to the shot list in
`05-playbook/human-checklist.md` §8.

| Slot | Page · position | Frame | **Exactly what the real photo must show** | Must not show | Loading |
|---|---|---|---|---|---|
| **IMG-01** | `index.html` · masthead bleed track | 1 | A pool deck or patio **mid-visit**, shot standing, his own equipment in frame — blower set down, pool net leaning on a chair, the bucket where he left it. 3:2 landscape with dead space in the **left third** so the display headline can sit over it. *[human-checklist: "a wide shot of a whole outdoor living area looking genuinely ready to use"]* | People, faces, a house number, a street sign, anything that identifies a client | `eager`, `fetchpriority="high"` |
| **IMG-02** | `whats-included.html` · Green Season entry | 2 | One close frame of **his hands working** — the skimmer net breaking the water surface, or the grease tray coming out of a flat-top. Proves it is one person and not a crew. *[human-checklist: "him working — hands, tools, actual effort"]* | A posed grip, arms crossed, gloves that look new, a second pair of hands | `lazy` |
| **IMG-03** | `whats-included.html` · Dormant Season entry | 5 | **Winter, and it must look cold and useful.** Covered furniture strapped down, salted flagstone, frost on a pool cover, bare trees, a disconnected hose coiled by the bib. Non-negotiable — without it the site reads as a summer business seven months a year. *[human-checklist: "a dormant-season shot when the season allows"]* | Snow-globe prettiness, sun flare, a scene that looks pleasant rather than protective | `lazy` |
| **IMG-04** | `index.html` · beside the report facsimile | 4 | **The record.** A real service report open on a phone screen or printed and sitting on the tailgate, address obscured. It should be legible enough to read two lines. | An invented report, a mocked-up screen, a stock phone render | `lazy` |
| **IMG-05** | `pricing.html` · above the exclusions | 3 | **The finding, and it must be genuinely unflattering.** A window well packed with leaves with water standing in it, a skimmer basket lifted out full of maple seeds, a split hose bib. **Do not clean it before shooting.** This is the single most persuasive image on the site because it is the only one that costs him something to publish. | Anything staged, tidied, or improved before the shutter | `lazy` |
| **IMG-06** | `projects.html` · deep clean section | — | **Grill / outdoor kitchen, the same frame before and after.** Same camera position, same light, same day. Grease tray out and the burners visible in the "before." *[human-checklist: "an outdoor kitchen / grill area before and after"]* | Two different grills, two different days, two different crops | `lazy` |
| **IMG-07** | `about.html` · lineage entry | 6 | **The mark, in daylight.** The `WPC513` stencil on the truck door or tailgate, with the equipment visible behind it. This is the shot that makes the business look real to a neighbor who saw the truck on the street. *[human-checklist: "one clean shot of the truck and equipment"]* | A rendered mockup, a vinyl proof, a photoshopped door | `lazy` |

### Shooting and delivery rules — carried from the brief

- Bright **overcast** day or the hour before sunset. Available light, no flash. Phone camera is
  fine. Landscape orientation.
- Warm the highlights slightly, hold the greens exactly where they are, pull 10–15% of the
  saturation out of the sky. **No duotone, no colour overlay, no vignette, no HDR, no film-grain
  filter** — the page already has grain and a second layer reads as an effect.
- Deliver AVIF with a WebP fallback, `width`/`height` set explicitly on every `<img>` so nothing
  shifts. Never ship a source file far beyond its rendered size.
- **Alt text names the object and locates it** (`voice.md`): "Skimmer basket lifted out, packed
  with maple seeds," never "pool maintenance."
- **Street names only, ever.** No full address, no identifying house
  (`voice.md` §3, `voice.md` §6.7).

### How to install a photograph

Each plate is a `<figure class="plate">`. Replace the inline `<svg>` with an `<img>` carrying
`width`, `height`, `alt`, and `loading`; keep the `<figcaption>` and rewrite it to describe the
real frame. The surrounding CSS needs no change — `.plate` sizes by aspect ratio, not by
content. Delete the `PHOTO REQUIRED` comment when the slot is filled.

---

## 7. Forms

There is no backend and there will not be one. Both forms are plain `POST` forms that work
with JavaScript disabled.

| Field | Type | Required | Notes |
|---|---|---|---|
| Name | `text`, `autocomplete="name"` | yes | — |
| Phone | `tel`, `autocomplete="tel"` | one of phone/email | Label says texting is fine |
| Email | `email`, `autocomplete="email"` | one of phone/email | — |
| Cross street | `text` | **yes** | The most important field on the site. Route compactness decides more than anything else (`ideal-client.md` §4) |
| What the property has | two independent `checkbox`es in a `<fieldset>` | no | "Pool" and "Outdoor kitchen." Checking neither is a valid answer, which is what makes it not a plan picker |
| What isn't getting handled | `textarea` | no | This is where the first year of project work comes from (`ideal-client.md` §6, step 3) |
| `company` | honeypot, `hidden` from users | — | Empty `label`, `tabindex="-1"`, `autocomplete="off"`, moved off-screen. `rules/web/security.md` prefers honeypots to CAPTCHA |

- **Required is stated in visible text.** Both required fields — name and cross street — carry
  `Required` in a `field__hint`. Marking one and not the other is worse than marking neither,
  because the reader concludes the unmarked field is optional (SC 3.3.2). No asterisk: an
  asterisk is a symbol that needs a legend, and the word does not.
- **Validation** is native (`required`, `type`). No JS validator, no JS gatekeeping submission.
  An invalid field gets a `--copper` border **and** a sentence: every error string is written
  into the markup on page load, hidden by default, and *revealed* by `:user-invalid` — never
  injected. So the copper is the glance-level signal and the sentence is the information, which
  is what keeps the state off colour alone (SC 1.4.1). Every sentence is in `copy-deck.md` §6.3
  and is auditable against `voice.md` there, which would not be true of a string that only
  existed in a script.
- **`js/forms.js` is progressive enhancement and nothing else.** It adds `aria-invalid="true"` to
  a field the browser has already judged invalid and removes it when the field becomes valid. It
  contains no message text, does not touch submission, and does not validate anything itself.
  With the file blocked or JavaScript off, the form still validates, still blocks submission, and
  still shows the same sentence — the `[aria-invalid="true"]` selector in the stylesheet exists
  as the fallback path for browsers that do not yet support `:user-invalid`, not as the primary.
- **Success** is `thanks.html`, reached by the endpoint's redirect (`_next` / `_redirect`
  hidden field, both provided and commented).
- **Failure** is the endpoint's own error page. Every form therefore also shows the phone number
  in plain text next to the submit button, so a broken endpoint never costs an inquiry.
- `[FORM_ENDPOINT]` must be set before launch. Until it is, the forms will not submit — which
  is why the text-me path is given equal weight in the layout rather than being a fallback.

---

## 8. Contact and configuration placeholders — all of them, in one place

**Nothing on the site invents a contact detail.** Every one of these is a literal string in the
markup and must be replaced before launch. Search for the bracket.

| Placeholder | What it is | Appears in |
|---|---|---|
| `[PHONE]` | The 513 business number, digits only for `tel:`/`sms:` and formatted for display | Every page footer; `index.html`, `apply.html`, `waitlist.html`, `projects.html` bodies; `seo.md` schema |
| `[EMAIL]` | The business email, not a personal Gmail | Every page footer; `apply.html`; `seo.md` schema |
| `[URL]` | The final domain, no trailing slash | `<link rel="canonical">` on every page; `sitemap.xml`; `seo.md` schema |
| `[FORM_ENDPOINT]` | The `action` for both forms — a static-form service | `apply.html`, `waitlist.html` |
| `[GBP_URL]` | The Google Business Profile share link | Footer; `seo.md` schema `sameAs` |

Two facts that are **not** placeholders and must stay true rather than being filled in:

- **The open-slot count.** Shipped at the true current number, 6 of 6. See §3.1.
- **Insurance and the LLC.** Neither is claimed anywhere on the site, because neither is in
  force yet (`brand-brief.md` §4.3). Approved wording is in `copy-deck.md` under
  *Deferred claims*; do not paste it until the policy is bound and the Articles are filed.

---

## 9. Technical build

### 9.1 Files

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
│   └── components.css       the fourteen components in §4
├── js/
│   ├── season.js            sets the season switch from the date. Nothing else.
│   └── forms.js             adds aria-invalid to an invalid field. Nothing else.
│                            Loaded only by apply.html and waitlist.html.
├── fonts/
│   └── README.md            how to install the three webfonts (they are not in the repo)
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── _headers                 security headers for Netlify / Cloudflare Pages
```

No framework, no bundler, no build step, no `npm install`, no dependency of any kind. Open
`index.html` from the filesystem and it works.

### 9.2 Measured budgets

Measured with `gzip -c <file> | wc -c` on the shipped files. Not estimated, not rounded up from
an approximation.

| Asset | Raw | **Gzipped** | Budget | Result |
|---|---|---|---|---|
| `styles/tokens.css` | 7,548 B | **3,193 B** | — | |
| `styles/base.css` | 11,056 B | **3,901 B** | — | |
| `styles/components.css` | 24,451 B | **6,114 B** | — | |
| **CSS total** | **43,055 B** | **13,208 B — 12.9 KB** | **< 30 KB gz** | **44% of budget** |
| `js/season.js` | 1,148 B | **639 B** | — | |
| `js/forms.js` | 1,415 B | **714 B** | — | |
| **JS total** | **2,563 B** | **1,353 B — 1.3 KB** | **< 150 KB gz** | **0.9% of budget** |

The CSS total is the **sum of the three files measured separately**, because each is its own
HTTP response and is gzipped on its own. Concatenating them first and gzipping once gives
11,733 B, which is a smaller and less honest number — nothing on this site is bundled, so that
figure would describe a build that does not exist. The same applies to the two scripts, and
`js/forms.js` is only requested by the two pages that have a form.

Per page:

| Page | Raw | Gzipped |
|---|---|---|
| `index.html` | 26,493 B | 7,605 B |
| `whats-included.html` | 23,411 B | 6,999 B |
| `membership-full.html` | 23,706 B | 6,783 B |
| `pricing.html` | 20,331 B | 5,687 B |
| `about.html` | 15,213 B | 4,576 B |
| `waitlist.html` | 14,032 B | 4,188 B |
| `apply.html` | 11,739 B | 3,711 B |
| `projects.html` | 10,606 B | 3,418 B |
| `thanks.html` | 5,513 B | 1,904 B |
| `404.html` | 3,147 B | 1,080 B |

**The number that matters is the heaviest first load:** `index.html` (7,605 B) plus all three
stylesheets (13,208 B) plus `season.js` (639 B) = **21,452 B gzipped, 21.0 KB**, in five
requests, with no font, no image, and no third-party anything. `index.html` does not load
`forms.js` — it has no form. The heaviest form page, `apply.html` cold, is 3,711 + 13,208 + 639
+ 714 = **18,272 B, 17.8 KB** in six requests. Every subsequent page is 1–7 KB, because the CSS
and the JS are already cached.

The site also clears the tighter **microsite** row in `rules/web/performance.md` (< 15 KB CSS,
< 80 KB JS) with the CSS at 12.9 KB gz and the JS at 1.3 KB gz.

**What the accessibility work cost.** The CSS grew 1,631 B gzipped and the JS grew 714 B
gzipped, and a large share of the CSS growth is comment — the reason each contrast fix exists is
written next to it, so the next person does not undo it as tidying. That is 5.4% of the CSS
budget and 0.5% of the JS budget spent on WCAG conformance, which is the right trade at any
ratio.

Reproduce any figure above with:

```sh
cd 02-website/site
for f in styles/*.css js/*.js *.html; do
  printf "%-24s raw %7s  gz %7s\n" "$f" "$(wc -c < "$f")" "$(gzip -c "$f" | wc -c)"
done
```

**Fonts are not counted above because none ship.** See §9.5.

### 9.3 Motion

Only `transform` and `opacity` are animated. There is no keyframe animation that moves layout.

- **Entrance — the rules draw.** Section hairlines animate `transform: scaleX(0) → scaleX(1)`
  from `transform-origin: left`; text fades `opacity: 0 → 1` with no translate. Implemented
  with **CSS scroll-driven animation** (`animation-timeline: view()`) inside an
  `@supports` block, so it costs **zero JavaScript** and zero scroll handlers. Browsers without
  support render the final state immediately, which is the correct degradation.
- **Hover — three coordinated changes on one gesture**, per the brief §6: the row fills
  `--season-wash`, the hairline beneath thickens via `scaleY(2)` and takes `--season-accent`,
  and the rail label translates 2px right.
- **Focus** is `2px solid var(--copper)` at `3px` offset plus a filled 6px copper square drawn
  in the rail at the row's baseline — keyboard users get the same margin marker the report uses
  for a finding. Focus is never removed and is never only a colour change. **On the reversed
  footer panel the ring and the marker are `--paper`, not copper**, because copper is a
  paper-side colour and lands at 2.01:1 / 1.20:1 on the season accent — see §9.4.
- **Active** is `translateY(1px)` and the rule under the control goes to `--ink`. No scale, no
  bounce, no spring.
- `prefers-reduced-motion: reduce` collapses all durations to `0.01ms` and renders hairlines at
  `scaleX(1)`. Hover and focus still change colour, because they are information.

**One documented deviation from `rules/web/coding-style.md`.** Interactive state changes
(hover, focus, active) transition `background-color`, `color`, and `border-color` at
`--dur-quick` (140ms). These are paint-only, not layout, and they are specified by name in
`01-brand/visual-direction.md` §6. No *entrance*, *scroll*, or *loop* animation touches
anything but `transform` and `opacity`. `transition: all` and `will-change: all` appear nowhere.

The season switch changes colour **instantly**, with no transition. The brief permits a 320ms
custom-property transition; it is declined because animating a registered `<color>` custom
property repaints the entire document, and the binding performance rule wins over the optional
flourish.

### 9.4 Accessibility

Verified by reading the markup and computing contrast by hand — Playwright cannot launch here,
so nothing below is claimed on the basis of an automated pass.

- Real landmarks: `<header>`, `<nav aria-label="Main">`, `<main>`, `<section aria-labelledby>`,
  `<footer>`. Every `<section>` has an `id`-bound heading, and **each `aria-labelledby` points at
  exactly one heading** — a section that named two produced a run-on landmark name, so the two
  entries it held are now two sections (`index.html` and `membership-full.html`, Scope and The
  visit).
- Skip link to `#main`, visible on focus, first in tab order.
- One `<h1>` per page. Headings descend without skipping.
- Focus is visible on every interactive element. The ring is **`--copper` on paper-side grounds
  and `--paper` on the reversed footer panel**, and both clear 3:1 in both seasons — see the
  sweep below, which is where the footer defect was found.
- The season switch is a real checkbox with a real `<label>`; it is reachable by keyboard,
  toggles with Space, and announces its state.
- `aria-current="page"` on the active nav link.
- Tap targets: **≥44px** (`--tap-target`) on nav links, buttons, footer links, and the season
  switch; **≥24px** (`--tap-min`, the SC 2.5.8 floor) on the two checkboxes, which draw their own
  box and cannot be padded out. The header wordmark is a link and gets vertical padding for the
  same reason — inherited flex spacing is not a target.
- Both required fields carry the word "Required" in visible help text (SC 3.3.2), and the invalid
  state carries a sentence as well as a colour (SC 1.4.1).
- Decorative SVG (grain, season divider, plate ruling) is `aria-hidden="true"` or
  `role="presentation"`.
- The grain layer is `pointer-events: none` and sits behind nothing interactive.

### The contrast sweep — every token against every ground, in both seasons

**Computed by hand from the sRGB relative-luminance formula and checked against WCAG 2.2 AA:
4.5:1 for body text, 3:1 for large text and for meaningful non-text (SC 1.4.11).**

**This sweep replaces an earlier one that was wrong by omission.** The first pass listed only
pairs it expected to occur, and it checked `--paper` and `--paper-deep` as grounds. It never
checked **`--season-accent` as a ground at all** — which is exactly where the footer lives, on
every one of the ten pages, with seven to nine focusable links in it. The result was a focus ring
at 2.01:1 in Green Season and 1.20:1 in Dormant, where it is effectively invisible. The lesson is
in the method, not the number: **sweep the matrix, not the list you thought of.** What follows is
the full matrix.

**Green Season.** Grounds across, foregrounds down.

| | on `--paper` | on `--paper-deep` | on `--season-accent` |
|---|---|---|---|
| `--ink` | **14.53** | **12.59** | 1.40 |
| `--ink-muted` | **5.97** | **5.17** | 1.74 |
| `--rule` | 1.59 | 1.38 | **6.53** |
| `--copper` | **5.19** | 4.49 | 2.01 |
| `--flag-ochre` | 2.65 | 2.29 | **3.93** |
| `--paper` | — | 1.15 | **10.40** |
| `--paper-deep` | 1.15 | — | **9.01** |
| `--season-accent` | **10.40** | **9.01** | — |
| `--season-support` | **5.47** | 4.74 | 1.90 |

On the Green hover fill `--wash-green`: `--ink` 13.79, `--ink-muted` 5.67, `--copper` 4.92,
`--season-support` 5.19, `--season-accent` 9.87.

**Dormant Season.** Only the two `--season-*` tokens change; every constant pair is identical to
the table above and is repeated so the matrix can be read on its own.

| | on `--paper` | on `--paper-deep` | on `--season-accent` |
|---|---|---|---|
| `--ink` | **14.53** | **12.59** | 2.33 |
| `--ink-muted` | **5.97** | **5.17** | 1.05 |
| `--rule` | 1.59 | 1.38 | **3.92** |
| `--copper` | **5.19** | 4.49 | 1.20 |
| `--flag-ochre` | 2.65 | 2.29 | 2.36 |
| `--paper` | — | 1.15 | **6.24** |
| `--paper-deep` | 1.15 | — | **5.41** |
| `--season-accent` | **6.24** | **5.41** | — |
| `--season-support` | 4.95 | 4.29 | 1.26 |

On the Dormant hover fill, which is `--paper-deep`: `--ink` 12.59, `--ink-muted` 5.17,
`--copper` 4.49, `--season-support` 4.29, `--season-accent` 5.41.

### What actually lands on the `--season-accent` ground

The footer is the only reversed panel on the site. Everything in it:

| Element | Foreground | Green | Dormant | |
|---|---|---|---|---|
| Wordmark, `WPC513`, headings, notes, project prices | `--paper` | 10.40 | 6.24 | pass |
| Links (`--paper` with a `--paper` underline) | `--paper` | 10.40 | 6.24 | pass |
| **Focus ring and rail marker — fixed** | `--paper` | **10.40** | **6.24** | pass |
| ~~Focus ring and rail marker — as shipped before~~ | ~~`--copper`~~ | ~~2.01~~ | ~~1.20~~ | **fail** |
| `.foot__rule` divider, `--paper` at 45% | — | — | — | decorative, no meaning of its own |

The fix is one declaration pair in `components.css` §13 — `outline-color` and the `::before`
marker's `background-color`, both to `--paper` — and `base.css` now carries a comment at the
global focus rule saying that copper assumes a paper-side ground and that any future reversed
surface must override it the same way.

### Pairs that do not clear 4.5:1, and what was done about each

Each is designed around rather than waved through. The first three were confirmed unchanged by
review; the fourth and fifth are new entries for pairs the old sweep never reached.

1. **`--copper` on `--paper-deep` = 4.49:1.** Misses AA for body text by a hundredth.
   **Rule enforced in the markup: copper never appears as text on a `--paper-deep` ground.**
   The two `--paper-deep` surfaces are the report facsimile and the image plates; verified
   programmatically that neither contains a single `<a>`. The `MEMBERSHIP FULL` stamp is
   `--paper` reversed *out of* copper rather than copper on a tint, so it is unaffected.

2. **Dormant `--season-support` on `--paper-deep` = 4.29:1.** This would have occurred on a
   `.pool` marker inside a price-ledger row during hover in Dormant Season. Fixed at the
   semantic level rather than by nudging a hex: **`.pool` carries the teal only in Green
   Season**, because in Dormant Season `--season-support` means freeze protection, not water
   — the brief's own palette rule. In Dormant it reverts to `inherit`, which is `--ink` at
   12.59:1. This is a case where the accessible fix and the correct semantic reading turned out
   to be the same change.

3. **`--flag-ochre` on `--paper-deep` = 2.29:1.** Ochre is never text — it appears exactly once
   in the entire stylesheet, as `border-inline-start: 2px solid var(--flag-ochre)` on
   `.report__finding`. It is redundant emphasis on a block that is already labelled in text
   ("What I found") and already carries its price in the rail, so it is not a graphical object
   required to understand the content and SC 1.4.11 does not apply to it. Recorded rather than
   quietly omitted.

4. 🔶 **Dormant `--season-support` on `--paper` = 4.95:1 — passes, but it is the tightest pass on
   the site.** This is the `.freeze` marker, live only in Dormant Season, and it appears only in
   headings on the page ground. It clears 4.5:1 with 0.45 to spare, which is real margin in
   arithmetic and thin margin in practice: the site currently renders in a **fallback** text face
   (§9.5), and the day IBM Plex Sans is installed the stem weights, x-height, and rasterisation
   all change. Nothing about the ratio changes — contrast is a colour computation, not a type one
   — but perceived legibility at small sizes does. **Action when the real fonts land: look at a
   `.freeze` heading in Dormant Season on a real screen.** If it reads thin, the fix is to darken
   `--season-support` in the Dormant block, which is one hex in `tokens.css` and touches nothing
   else. Do not fix it by making the text larger; the size is doing hierarchy work.

5. **`--rule` on `--paper` = 1.59:1, and `--rule` on `--paper-deep` = 1.38:1.** The hairline is a
   decorative separator and never carries meaning alone — every entry it separates is also
   separated by whitespace and a heading. **But it is not acceptable as the only edge of a
   control**, which is what it was on the form fields and on `.btn--quiet`: a boundary at 1.59:1
   means the input has no perceivable edge at rest, and the button's label is legible while its
   affordance is not. Both now use `--ink-muted` at 5.97:1. That introduces a fourth hairline
   colour beyond the three in `visual-direction.md` §5.2 — deliberately, and only on controls: the
   three-weight system governs the page's *separators*, and a control border is a different
   object with a WCAG floor of its own. Form fields already distinguished themselves from the
   hairline system with a 2px bottom edge, so the change reads as the same ledger underline,
   darker.

**Also verified as unchanged and still passing:** the focus ring against paper-side grounds
(`--copper` at 5.19:1), the `.btn` reversal (`--paper` on `--copper`, 5.19:1), the `MEMBERSHIP
FULL` stamp (same pair), and the season stamp and slot count (`--season-accent` on `--paper`,
10.40 / 6.24).

### 9.5 Fonts — shipped state and the human action required

`01-brand/visual-direction.md` §3 specifies **Fraunces** (display), **IBM Plex Sans** (text),
and **IBM Plex Mono** (data). All three are SIL OFL and all three are correct choices.

**None of them ship in this repository**, because the environment has no outbound network
(`CANON.md` §8) and font binaries cannot be fetched or generated here. Rather than link a CDN
URL that cannot be verified, the site ships on the fallback chains from the brief §3.2 — which
were explicitly chosen so that a Fraunces failure lands on Iowan Old Style or Palatino rather
than on Times, and so the page degrades in the right direction.

**The site is complete and looks intentional as shipped.** Installing the real faces is a
one-line change and is documented in `site/fonts/README.md`, including the `@font-face` block,
the Plex Mono subset (`uppercase, digits, . , : · $ + — / ( )`, one weight), `font-display: swap`,
and the single preload. Budget when installed: ≈70 KB, inside the microsite allowance.

🔶 **HUMAN ACTION.** Download the three families and drop them in `site/fonts/`. Until then the
display face is a system old-style serif. This is the one place the shipped site differs from
the brief, it is flagged rather than hidden, and it is reversible in one line.

### 9.6 Security

`rules/web/security.md`, applied to a static site with no server of its own.

- `_headers` ships CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  and `Permissions-Policy` in Netlify/Cloudflare Pages format, with the Apache and nginx
  equivalents commented beside them.
- The CSP is `default-src 'self'` with **no** `'unsafe-inline'` for scripts, `object-src 'none'`,
  `frame-ancestors 'none'`, `base-uri 'self'`, and `form-action` pinned to `[FORM_ENDPOINT]`.
  `img-src` allows `data:` for the grain and the plates. `style-src` is `'self'` only — there is
  no inline `<style>` and no inline `style=` attribute anywhere in the site.
- Both scripts are external and same-origin, so `script-src 'self'` covers them with no nonce and
  no `'unsafe-inline'`. `season.js` touches a single checkbox; `forms.js` sets and removes one
  attribute on form controls. There is no `innerHTML`, no `eval`, no template interpolation, no
  `document.write`, and **no user input reaches the DOM** — `forms.js` reads `el.validity.valid`
  and writes a fixed attribute value, and never reads or echoes what was typed.
- No third-party script, no analytics, no font CDN, no tag manager, no embed, no iframe.
- Forms carry a honeypot; there is no state-changing endpoint on this origin to protect with a
  CSRF token, and rate limiting belongs to the form service.
- `rel="noopener"` on any external link.

---

## 10. `design-quality.md` — the required qualities, and how this build delivers them

The rule asks for at least four of ten. This build delivers **eight**, and declines two on the
record. Each row names the mechanism and where to look.

| # | Quality | How it is delivered here |
|---|---|---|
| **1** | **Hierarchy through scale contrast** | `--type-body` is 17px; `--type-display` reaches 100px. That is a **5.9× jump**, and the rail labels sit at 11px mono against it — an 9× span across one page. Hierarchy is carried by size only. No heading anywhere is distinguished by being bold-and-grey. `tokens.css` type scale; `base.css` heading rules. |
| **2** | **Intentional spacing rhythm, not uniform padding** | Five non-interchangeable vertical gaps — `--space-row` 12px, `--space-entry` 24px, `--space-block` 32–56px, `--space-section` 64–160px, `--space-chapter` 96–256px — with a rule enforced in review that **no two adjacent levels of hierarchy may use the same gap.** The season divider is the only thing that gets `--space-chapter`, once per page. |
| **3** | **Depth and layering** | Four mechanisms, none of them elevation: the **bleed track** (grid columns 11–12) runs the masthead plate off the right edge of the viewport past the container; the sticky status strip **overlaps** the masthead rule and is one of exactly two elements permitted a shadow; the report facsimile is **inset** on `--paper-deep` between two hairlines so it reads as a document reproduced on the page; and a fixed 4% fractal-noise grain multiplies over everything. |
| **4** | **Typography with a real pairing strategy** | A display old-style serif against the IBM Plex superfamily — one type system plus a display face, not three unrelated fonts. Every axis is pinned rather than defaulted (`--display-axes: "opsz" 120, "SOFT" 0, "WONK" 0`), tracking and leading are specified per role, and `font-variant-numeric: tabular-nums` is set on every price, date, and count so the ledger columns do not shimmy. The mono is not decoration — it is what makes a price row read as a record instead of a pricing table. |
| **5** | **Colour used semantically** | `--copper` is a **semantic monopoly on "act"**: if something is copper and is not a link, a button, or the MEMBERSHIP FULL stamp, it is a bug. `--season-support` teal appears **only where a pool does** — the pool row in the ledger, the pool lines in the Green Season scope, and nowhere else. `--flag-ochre` appears only on a *finding*, and never as text. And the entire palette flips on the calendar, so the page tells you which scope you are reading before you read a word. |
| **6** | **Designed hover / focus / active states** | Hover on a ledger row makes **three coordinated changes on one gesture**: the row fills `--season-wash`, the hairline beneath thickens by `scaleY(2)` and takes the season accent, and the rail label translates 2px right. Focus draws an outline **plus a filled 6px square in the rail** — the same margin marker the report uses for a finding, so keyboard users get the brand's own notation. Copper on paper-side grounds, `--paper` on the reversed footer, both above 3:1 in both seasons: the marker is a *designed* indicator, so it inverts with the panel rather than being dropped on it (§9.4). Active drops 1px and darkens the rule. |
| **7** | **Grid-breaking editorial composition** | An asymmetric **rail-and-measure** page: 12 columns, but never twelve equal cells — the rail is 1–3, the measure is 4–10, and 11–12 are a live **bleed track**. The display headline starts flush with the rail, one column *left* of the body it introduces, so it visibly does not respect the grid the body respects. That single decision is what takes the page out of a centred content well. |
| **8** | **Texture and atmosphere** | A 4% `feTurbulence` paper grain, generated as an inline data-URI SVG at **241 bytes** with **no network request**; a three-weight hairline system (`1px --rule` separator, `1px --ink` section boundary, `2px --flag-ochre` finding) that does more visual work than any image on the site; and a hand-set **survey-tick season divider** whose ticks halve and whose gaps double in Dormant Season, so the ornament itself gets sparser in winter. |

**Not claimed, on the record:**

- **#9 Purposeful motion.** Motion here is deliberately near-absent. The hairline draw makes
  the page's structure legible as it arrives and does nothing else. Claiming motion as a design
  quality on a site this still would be dishonest.
- **#10 Designed data display.** There is no data visualisation, because a six-client service
  business has nothing honest to chart. The price ledger and the report facsimile are typeset
  documents, not charts, and dressing them as dashboards would be exactly the
  "dashboard-by-numbers" the rule warns against.

### Against the banned-pattern list

| Banned | Refused by |
|---|---|
| Default card grids with uniform spacing | **There are no cards.** `grep -i card styles/*.css` returns exactly two lines, both comments stating that there are none — there is no `.card` rule and no `class="card"` in any page. Content units are ledger entries: rail label, measure, hairline. |
| Stock centred hero with a gradient blob | Left-aligned masthead, headline breaking the grid left, plate bleeding off the right edge, and a live open-slot count where the generic CTA would be. Gradients are banned outright and none appear. |
| Unmodified library defaults | No library. Every font axis, tracking value, leading, gap, radius, and duration is a named token with a stated reason. |
| Flat layouts with no layering | Bleed track, sticky overlap, inset facsimile, grain layer. |
| Uniform radius, spacing, and shadows | Radius is `0` by default with two meaningful exceptions capped at 3px; five non-interchangeable spacing tokens; shadows on exactly two elements, both of which physically overlap something. |
| Safe grey-on-white with one decorative accent | The ground is warm oat `#F4EFE4` and is never white; the ink is a green-cast near-black and is never `#000`; copper is semantic rather than decorative; and the palette carries two seasonal states. |
| Dashboard-by-numbers | No dashboard, no sidebar, no charts. |
| Default font stacks used without a reason | The stack and every fallback in it is argued in `01-brand/visual-direction.md` §3.2 and reproduced in `tokens.css` with the reasoning in a comment. |
| Defaulting to dark mode | **Both seasonal modes are light.** The product happens outdoors in Ohio daylight, on paper, in a truck. |

---

## 11. Responsive behaviour

| Breakpoint | Layout |
|---|---|
| **≥1024px** | Rail and measure side by side. Bleed track live — the masthead plate and the season divider run off the right edge of the viewport, past the container. Status strip sticky. |
| **768–1023px** | Rail collapses to a mono label line sitting *on* the rule above each entry. Bleed becomes full-width. Status strip sticky. |
| **<768px** | Single column, 20px side margin. Hairlines run full-bleed to the margins so the ledger read survives. Rail labels sit above each entry. Header is **static**, not sticky, so it does not eat a phone viewport; the footer carries the full nav. |

Verified by reading the CSS at 320, 375, 768, 1024, 1440, and 1920. No horizontal overflow: the
container is `max-width` with `padding-inline`, the bleed uses `margin-right` against a clipped
`overflow-x: clip` on `main` rather than a negative viewport-width trick, and the price ledger's
leader rule is a flexible `flex: 1` element that collapses to zero before it can push the price
column off-screen.

---

## 12. Verification performed, and what could not be verified

**Done here:**

- Served with `python3 -m http.server` and every page and asset fetched — all `200`, including
  `js/forms.js`, `robots.txt`, and `sitemap.xml`.
- Gzipped byte counts measured with `gzip -c <file> | wc -c` and recorded in §9.2. Re-measured
  after the accessibility work; the numbers in §9.2 are the current files, not the earlier ones.
- **Contrast swept as a full matrix** — every token against `--paper`, `--paper-deep`, **and
  `--season-accent`**, in both seasons, plus each season's hover fill, computed by hand from the
  sRGB relative-luminance formula. The table is §9.4. An earlier pass checked a *list* of pairs
  it expected rather than the matrix, never evaluated `--season-accent` as a ground, and so
  missed a focus ring at 2.01:1 / 1.20:1 in the footer of all ten pages. Sweep the matrix.
- Markup read against `rules/web/coding-style.md` for landmarks, heading order, and semantics.
  Tag balance verified programmatically across all ten pages after the section split.
- JSON-LD parsed with a JSON parser after editing, and re-checked property by property against
  the schema.org type hierarchy — `seo.md` §3.
- Copy audited against `01-brand/voice.md` §8. **Items 1–30 against the prose, items 31–34
  against the built site** — the structured data, the rendered CSS case, the alt and label
  strings, and the meta values. The prose pass alone returned thirty passes while two real
  defects were live in non-prose surfaces; `copy-deck.md` §10 records both and now states its own
  scope.
- Every price traced to `00-model/pricing.md` — `$229 · $269 · $289 · $329 · $249+ · $49+`, and
  the two internal figures ($100/hr, $149 floor) confirmed absent.
- `grep` for every banned phrase in `voice.md` §6.1–§6.7 across `site/` and `copy-deck.md`.

**Not possible in this environment, and therefore not claimed:**

- No browser rendering, no screenshots, no visual regression — Playwright cannot launch.
- No Lighthouse run, so the Core Web Vitals in `rules/web/performance.md` are *designed for*
  (no render-blocking third party, no layout shift source, no JS on the critical path) rather
  than *measured*.
- No automated accessibility audit. The a11y claims in §9.4 come from reading markup and
  computing contrast, not from axe.
- No cross-browser check. The two modern features used — `:has()` for the season switch and
  `animation-timeline: view()` for the hairline draw — both degrade to a correct static state
  and neither is load-bearing.

---

## 13. Open items for the owner

1. 🔶 **Shoot the seven frames in §6.** This is the single biggest quality lever on the site and
   no agent can produce it. Priority order if he only does three: **IMG-05** (the finding),
   **IMG-03** (winter), **IMG-01** (the masthead).
2. 🔶 **Supply `[PHONE]`, `[EMAIL]`, `[URL]`, `[FORM_ENDPOINT]`, `[GBP_URL]`** — §8.
3. 🔶 **Install the three webfonts** — §9.5. **And when they land, look at one thing:** a
   `.freeze` heading in Dormant Season. It is `--season-support` on `--paper` at **4.95:1**,
   which passes AA and is the narrowest pass on the site. The ratio will not change with the
   font — contrast is a colour computation — but perceived weight will, and this is the one pair
   worth a human eye rather than arithmetic. If it reads thin, darken `--season-support` in the
   Dormant block of `tokens.css`. One hex, nothing else. §9.4, near-miss 4.
4. 🔶 **Keep the slot count true.** §3.1. It is the most valuable element on the page precisely
   because it is a fact.
5. 🔶 **Replace the report facsimile with a real redacted report** the day one exists. It ships
   labelled as a format, not as a client report, because `brand-brief.md` §4.3 forbids a sample
   report built from imagination. The label comes off when the report is real.
6. 🔶 **Do not paste the insurance or LLC wording** until the policy is bound and the Articles
   are filed. Approved wording is held in `copy-deck.md`, unused.

---

## Related files

- `copy-deck.md` — every word on every page, both enrolment states, all microcopy
- `seo.md` — titles, descriptions, JSON-LD, service area, and why SEO is secondary here
- `01-brand/visual-direction.md` — the design brief this implements
- `01-brand/voice.md` §8 — the checklist all copy passed
- `00-model/pricing.md` — every price on the site
- `05-playbook/human-checklist.md` §8 — the shot list §6 cross-references
