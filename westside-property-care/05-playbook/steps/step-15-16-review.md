# Steps 15–16 — Review pass and consistency sweep

**Depends on:** Steps 07, 10, 13 (all three workstreams landed)

Five agents wrote into this project. The failure mode is not bad work — it is quiet
disagreement between documents. This is where that gets caught.

---

## Step 15 — Review pass

Four reviewers, run **in parallel**. All are read-only: they report, and the owning agent
applies. Never let a reviewer edit another agent's directory.

### 15a — SEO audit (`seo-specialist`)

> Audit `westside-property-care/02-website/`. Read `seo.md`, `site-spec.md`, and the built
> HTML in `site/`. Check: title and meta description per page, heading hierarchy, JSON-LD
> `LocalBusiness` validity against schema.org, internal linking, service-area definition,
> image alt text, canonical URLs, and Google Business Profile alignment.
> **You have no WebFetch (403 on every host) and no Ahrefs keyword data ("Insufficient
> plan") — do not attempt either.** Audit from the markup and reasoning alone. Bear in mind
> this is a six-client local business: flag over-engineering as a finding too. Report
> findings ranked by severity; do not edit files.

### 15b — Accessibility audit (`a11y-architect`)

> Audit the built site at `westside-property-care/02-website/site/` against WCAG 2.2 AA.
> Check: semantic structure and landmarks, heading order, keyboard operability and focus
> visibility, colour contrast (compute it from the token values in `styles/tokens.css`),
> form labels and error handling, `prefers-reduced-motion`, and alt text.
> **Playwright cannot launch — audit statically from the markup and CSS.** Report findings
> ranked by severity; do not edit files.

### 15c — Voice audit (`wpc-brand`)

> Audit all copy in `westside-property-care/02-website/copy-deck.md`, the built HTML, and
> everything in `westside-property-care/03-marketing/` against your own
> `01-brand/voice.md` checklist. Report every violation as a table: file, section, the
> offending text, the rule broken, and a suggested rewrite. Flag any fabricated social
> proof, any manufactured urgency beyond the real six-slot cap, and any phrase from the
> banned list. Do not edit outside `01-brand/`.

### 15d — Build and rules review (`code-reviewer`)

> Review `westside-property-care/02-website/site/` against `.claude/rules/web/`:
> `design-quality.md` (the anti-template policy — confirm ≥4 required qualities are actually
> present, not just claimed), `performance.md` (verify the recorded gzipped byte counts by
> re-measuring with `gzip -c <file> | wc -c`), `coding-style.md` (CSS custom-property tokens,
> semantic HTML, compositor-only animation), and `security.md`. Confirm the site works with
> JavaScript disabled. Report findings; do not edit.

---

## Step 16 — Consistency sweep

Run by the orchestrator after Step 15's findings are applied.

### The sweep

```bash
cd westside-property-care

# 1. Price drift — the most likely defect in the whole project.
grep -rn '\$[0-9][0-9,]*' --include='*.md' --include='*.html' . | grep -v '_source/'

# 2. Banned geography — Westwood, Price Hill, Cheviot are not the market.
grep -rniE 'westwood|price hill|cheviot' --include='*.md' --include='*.html' . | grep -v '_source/'

# 3. The forbidden metric.
grep -rniE '[0-9]+ ?(minute|min)\b' --include='*.md' --include='*.html' . | grep -v '_source/'

# 4. Unfilled placeholder slots — confirm each is deliberate and listed.
grep -rnE '\[(PHONE|EMAIL|URL|ADDRESS|NAME)\]|TODO|TBD|lorem' --include='*.md' --include='*.html' . | grep -v '_source/'

# 5. Real byte budgets.
find 02-website/site -name '*.css' -o -name '*.js' | while read f; do
  echo "$(gzip -c "$f" | wc -c) bytes gzipped  $f"
done
```

### Checklist

- [ ] Every price string outside `_source/` is `$229`, `$289`, `$329`, or an add-on price
      that appears in `00-model/pricing.md`
- [ ] No targeting copy aimed at Westwood, Price Hill, or Cheviot
- [ ] No minutes-per-visit target anywhere outside `_source/`
- [ ] Every remaining placeholder is deliberate and listed in one place per workstream
- [ ] Gzipped CSS < 30kb, JS < 150kb, and the numbers in `site-spec.md` match reality
- [ ] `unit-economics.md` arithmetic re-checked by hand
- [ ] Both enrolment states (open and MEMBERSHIP FULL) exist on the site
- [ ] Every exclusion in `service-catalog.md` appears in `service-agreement.md`
- [ ] No fabricated testimonials, review counts, credentials, crews, or years in business
      anywhere in the project
- [ ] `human-checklist.md` has an owner and a date on every line

### Launch readiness

Cross-check `human-checklist.md`. Agent work being finished does not mean the business can
take money — insurance, the verified Google Business Profile, tested card-on-file billing,
and at least one set of real photographs all gate the first paying customer.
