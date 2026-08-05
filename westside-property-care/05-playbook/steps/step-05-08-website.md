# Steps 05–08 — The website

**Agent:** `wpc-web` · **Depends on:** Step 04 · **Parallel with:** Steps 09–11, Steps 12–14

Four steps, one agent, one directory. Run them as a single engagement — the agent needs the
spec in context to write the copy, and the copy in context to build the site.

**The site's job:** close someone who already heard his name from a neighbor, a yard sign, a
grill-cleaning job, or the Google listing. It is not a lead-generation engine and must not be
architected like one.

## Brief — paste this to the subagent

> You are acting as `wpc-web`. Read `.claude/agents/wpc-web.md` and follow it as your system
> prompt. Working directory: the repository root.
>
> Read `westside-property-care/CANON.md` (especially §5, what the site is for, and §3, the
> only three prices that exist), then all of `westside-property-care/00-model/` and
> `westside-property-care/01-brand/`. `01-brand/visual-direction.md` is your design brief —
> follow it rather than inventing your own. Read `.claude/rules/web/design-quality.md`,
> `performance.md`, `coding-style.md`, and `security.md`; they are binding. Invoke
> `frontend-design-direction`, `design-system`, and `make-interfaces-feel-better`.
>
> **Step 05 — `02-website/site-spec.md`.** Information architecture and page inventory. Keep
> it small: a six-client business needs roughly Home, What's Included (scope + seasons),
> Pricing, Projects, About, and Contact/Apply — collapse or split only with a stated reason.
> For each page give the purpose, the single conversion goal, the section order, and the
> component inventory. Document every image slot with **exactly what the real photo must
> show** (no stock photos as a final answer — real photography is the biggest quality lever
> and no agent can produce it). State which of `design-quality.md`'s ten required qualities
> this design delivers and how — at least four.
>
> **Step 06 — `02-website/copy-deck.md`.** Every word of every page, paste-ready, organized by
> page and section. Prices come from `00-model/pricing.md` verbatim — lead with $289/$329, not
> $229. Every line passes the checklist in `01-brand/voice.md`. **Write both enrolment states:**
> the open state and the MEMBERSHIP FULL / waitlist state, since the waitlist is the real
> steady-state offer once six slots fill. Include the winter answer prominently — "what happens
> in December" is the objection that kills this sale. Include microcopy: form labels, button
> text, error and success states, the footer.
>
> **Step 07 — `02-website/site/`.** Build it. Hand-authored HTML and CSS, no framework, no
> bundler, no build step, no npm install. Any JavaScript is vanilla, tiny, and
> progressive-enhancement only — the site must work fully with JS disabled. Design tokens as
> CSS custom properties in a single `styles/tokens.css`; no repeated hardcoded colour, spacing,
> or type values. Semantic HTML — real `<header>`, `<nav>`, `<main>`,
> `<section aria-labelledby>`, `<footer>`, no div soup. Animate only `transform`, `opacity`,
> `clip-path`, `filter`, and honour `prefers-reduced-motion`. Keyboard navigable with visible
> focus states; colour contrast meets WCAG 2.2 AA. Image slots get lightweight documented
> placeholders (inline SVG is fine) plus an HTML comment naming the real photo required.
> **Measure the real gzipped size** with `gzip -c <file> | wc -c` and record the numbers in
> `site-spec.md` — CSS under 30kb gzipped, JS under 150kb gzipped. Do not estimate.
>
> **Step 08 — `02-website/seo.md`.** Per-page title and meta description, JSON-LD
> `LocalBusiness` schema (hand-checked against schema.org — no external validator is
> reachable), the service-area definition matching `00-model/ideal-client.md` rather than all
> of Cincinnati, alignment with the Google Business Profile plan, and the local trust signals
> that matter. Be honest in the file about SEO's real priority here: it is a slow channel for a
> six-client business and must not drive the architecture.
>
> Constraints: write ONLY inside `westside-property-care/02-website/`. Never touch the Next.js
> app at the repository root. Never invent a price, a testimonial, a review count, a badge, or
> a "serving families since" claim. **WebFetch and curl are blocked (403 on every host) — do
> not attempt to fetch the existing site or any reference URL. Playwright cannot launch, so
> there is no screenshot QA**; verify by reading your markup, measuring bytes, and checking
> against the rules files. You can serve locally with `python3 -m http.server` to confirm it
> loads.

## Inputs
`CANON.md`, `00-model/*`, `01-brand/*`, `.claude/rules/web/*`

## Outputs
`02-website/site-spec.md`, `copy-deck.md`, `seo.md`, `site/`

## Acceptance
- [ ] Every page in `site-spec.md` exists in `site/` with final copy from `copy-deck.md`
- [ ] Both the open-enrolment and MEMBERSHIP FULL states are written and reachable
- [ ] Measured gzipped CSS and JS recorded in `site-spec.md` and inside budget
- [ ] Valid JSON-LD `LocalBusiness`, hand-checked
- [ ] Keyboard navigable, visible focus, WCAG 2.2 AA contrast
- [ ] ≥4 of the `design-quality.md` required qualities named and demonstrably present
- [ ] Every price traces to `00-model/pricing.md`
- [ ] Every image slot documents the real photo needed
- [ ] No lorem, no stock-photo dependency, no fabricated proof

## Human action required
Shoot the real photos (see `human-checklist.md` §8). Supply the real phone number, email, and
final domain before anything goes live.
