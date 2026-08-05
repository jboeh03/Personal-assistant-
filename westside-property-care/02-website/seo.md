# SEO

**Owner:** `wpc-web` · **Status:** the search and local-listing plan for `02-website/site/`
**Reads from:** `CANON.md`, `00-model/`, `01-brand/`, `03-marketing/google-business-profile.md`

> **Re-baselined 2026-08-05.** Every title, description, Open Graph value and structured-data
> field on this page was rewritten. The four dead prices are gone from `priceRange`, the season
> is stated, the name is the full **Westside Property Care 513** with **WPC513** as the
> alternate, and **bare "WPC" appears nowhere** — including in slugs, `alt` text and JSON-LD,
> which is where a banned string is most likely to survive a rewrite (`voice.md` §3, the
> non-prose surface rule).

---

## 1. The honest framing, first, because it governs everything below

`CANON.md` §6: **the site is not a lead-generation engine. It is what closes someone who already
heard his name.** SEO matters, but it must not drive the architecture.

**He needs six clients. Ever.** Not six a month. A page farm optimised for
"pool cleaning green township ohio" would be an enormous amount of work aimed at a problem he
does not have, and it would make the site look like every other home-services site — which is
precisely the register `brand-brief.md` spent its length escaping.

### What that means in practice

- **No doorway pages.** No `/pool-service-delhi`, no `/outdoor-kitchen-cleaning-oak-hills`. Ten
  pages is the site.
- **No blog.** A blog is a content commitment a one-person seasonal business cannot keep, and an
  abandoned blog whose last post is eighteen months old is worse for trust than no blog.
- **No keyword stuffing in the copy.** Every page is written to `01-brand/voice.md` first. Where
  a search phrase and the voice disagree, the voice wins.
- **The one place SEO gets to be greedy is `projects.html`**, because that is a real search
  market. "Grill cleaning Cincinnati" is a thing people actually type, the price is published,
  and the job does not require a membership slot. It is the only page whose title leads with a
  service phrase rather than with the brand.

### The three things search actually has to do here

1. **Win the brand query.** Somebody heard the name from a neighbour, half-remembers it, and
   types *"westside property care"* or *"westside property care 513"* or *"wpc 513 cincinnati."*
   This has to land on the home page. It is the highest-value query on the list and also the
   easiest to lose, because the name is generic and **the 513 is what disambiguates it**.
2. **Win the map pack for grill cleaning on the west side.** Google Business Profile does most of
   this, not the site. SEO supports it; it does not lead it.
3. **Answer the objection query.** Somebody quoted $279 goes and searches *"what does pool
   service cost cincinnati"* or *"is a property care membership worth it."* The answers are on
   the site, above the price, in plain language — the only SEO play here that is also a trust
   play.

**The season changes one thing about all of this.** From November through February there is
nothing to sell but project work, and the site says so. Search traffic in those months should be
routed to `projects.html`, which is why project work is described as running year round on five
pages and why the off-season state points at it explicitly.

---

## 2. Per-page titles and meta descriptions

Rules applied to every one: sentence case, no banned phrase from `voice.md` §6, no invented
credential, no urgency, the full name on first reference, and the price stated wherever it is
the reason someone clicks. Titles keep their meaningful content under ~60 characters before the
brand suffix; descriptions under ~155.

**These are shipped values.** They are in the built files, not proposals.

### `index.html`

```
Title:       Westside Property Care 513 — sixteen visits, six properties, $279 a month
Description: Seasonal outdoor living and property care for six homes on the west side of
             Cincinnati. Two visits a month, March 1 to October 31. $279 a month, and the
             exclusions are on the page.
og:title:    Westside Property Care 513
og:desc:     Sixteen visits. Six properties. Written down every time. $279 a month,
             March 1 through October 31.
og:type:     website
canonical:   [URL]/
```

The title carries all four ten-second facts: what, who, price, and — via the season — when. The
description leads with the category and the geography because that is what a
half-remembered-name searcher needs to recognise, and closes on "the exclusions are on the page,"
which is the one thing no competitor's meta description will contain.

### `whats-included.html`

```
Title:       What's included, and what isn't — Westside Property Care 513
Description: The eight parts of a visit, the pool scope with the disclaimer attached, the
             season, and every exclusion in the words the agreement uses.
og:desc:     Every exclusion, published before you're asked to sign anything. Maintain
             everything, deep-clean nothing unless it's scheduled.
canonical:   [URL]/whats-included.html
```

"The pool scope with the disclaimer attached" is doing deliberate work in a description: it is
the phrase that makes a pool owner click, and it pre-empts the false expectation in the same
breath, which is `voice.md` rule 5 applied to a SERP snippet.

### `pricing.html`

```
Title:       $279 a month — Westside Property Care 513
Description: One price, $279 a month, March 1 through October 31. Sixteen visits a season.
             The exclusions and the season are on the page, above the number.
og:desc:     One number, published, and the same whether the property has a pool and an
             outdoor kitchen or a plain patio.
canonical:   [URL]/pricing.html
```

**Leading the title with the number is deliberate.** Almost nobody in this category publishes a
price, so the number in the SERP is itself the differentiator — and it pre-qualifies. A person
who bounces off "$279" in a search result was never a client and has cost him nothing.

### `projects.html`

```
Title:       Grill cleaning and project work in Cincinnati — Westside Property Care 513
Description: Grill and outdoor kitchen deep clean from $249. Window well cleanout from $49.
             Everything else quoted after I look at it. No membership needed, year round.
og:desc:     Grill and outdoor kitchen deep clean from $249. Window well cleanout from $49.
             Everything else quoted after I look at it.
canonical:   [URL]/projects.html
```

The one page whose title leads with a service phrase. "No membership needed, year round" is what
makes this page useful in December, when the membership has nothing to sell.

Two published prices appear and no others. The internal quoting anchors are **not** on this page
and must never be: publishing "pressure washing from $249" would be the anchor table read aloud
(`voice.md` §3, the anchor-leak rule).

### `about.html`

```
Title:       This is new. I'd be starting with you. — Westside Property Care 513
Description: Local, military roots, one person, west side of Cincinnati, out of a family
             grill-cleaning business. Six properties is the cap and everything I don't do
             is published.
og:desc:     One person, six properties, and a cap that is a schedule constraint rather
             than a sales line.
canonical:   [URL]/about.html
```

**A title that admits weakness is unusual and it works here**, because the searcher who lands on
an About page is checking whether this is real. "Military roots" is stated exactly as he stated
it, with no rank, branch, unit or span attached — `voice.md` §6.4 bans every one of those.

### `apply.html`

```
Title:       Two questions, then I'll come look — Westside Property Care 513
Description: Tell me what the property has and your cross street. If it fits the route,
             I'll walk it with you and price it standing there. About forty minutes.
og:desc:     What the property has, and where it is. Those two answers decide it.
canonical:   [URL]/apply.html
```

### `waitlist.html`

```
Title:       The waitlist is a real list — Westside Property Care 513
Description: A written list with your street on it. When a spot opens it goes to whoever is
             closest to the route I'm already driving. Project work in the meantime.
og:desc:     Written down, with your street on it. When a spot opens it goes to whoever is
             closest to the route.
canonical:   [URL]/waitlist.html
```

### Not indexed

`thanks.html`, `404.html`, and `membership-full.html` while it is the staging copy, all carry
`<meta name="robots" content="noindex">`.

#### `noindex`, never `Disallow` — and why they are not interchangeable

`robots.txt` allows everything. That is deliberate and it is the most commonly-got-wrong thing in
this file.

A `Disallow`ed page is **never crawled**, so the `noindex` on it is **never read**. Google can
still index the bare URL from an inbound link and show it with no title and no description —
which is the worst of both outcomes. `membership-full.html` is a near-duplicate of the home page,
so blocking it is the one reliable way to make it surface looking unexplained.

**Allow the crawl. Let the crawler read the `noindex`.**

**One thing to remember on the day the book fills.** When `membership-full.html` is copied over
`index.html`, the `noindex` goes with it — and would silently de-index the home page. Delete the
`<meta name="robots">` line during the copy. The instruction is in `site-spec.md` §3.2 and it is
repeated here because this is where somebody will look for it.

---

## 3. JSON-LD — hand-checked against schema.org

One block, on `index.html` and `membership-full.html` only. Inner pages carry no structured data
because they have nothing honest to add.

### The type, and why not `LocalBusiness` directly

`HomeAndConstructionBusiness` is a direct subtype of `LocalBusiness`, which is a subtype of
`Organization` and `Place`. Everything a `LocalBusiness` accepts, this accepts.

It is used instead of the parent because the parent is a container: `LocalBusiness` says "a
business with a physical location," which is true and useless. `HomeAndConstructionBusiness` says
"a business that does work at a customer's home." That is the actual category, it is the closest
type in the vocabulary, and the alternatives are worse — `HousePainter`, `Plumber`, `Roofer` and
`Electrician` are sibling subtypes and all wrong. There is no `PropertyMaintenance` type.

The more specific type also keeps him out of `ProfessionalService`, which would put a maintenance
business in the same bucket as an accountant.

### The block, as shipped

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "[URL]/#business",
  "name": "Westside Property Care 513",
  "alternateName": "WPC513",
  "slogan": "Seasonal Outdoor Living & Property Care",
  "url": "[URL]/",
  "telephone": "[PHONE]",
  "email": "[EMAIL]",
  "description": "Seasonal outdoor living and property care for six homes on the west side of Cincinnati. Two scheduled visits a month from March 1 through October 31 - sixteen visits a season - covering the pool area, patio, outdoor kitchen and the hardscape serving them, with a short written summary after every visit.",
  "priceRange": "$279 per month",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit card",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cincinnati",
    "addressRegion": "OH",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Green Township, Ohio" },
    { "@type": "Place", "name": "Oak Hills, Cincinnati, Ohio" },
    { "@type": "Place", "name": "Upper Delhi, Cincinnati, Ohio" },
    { "@type": "Place", "name": "Covedale, Cincinnati, Ohio" }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Seasonal property care membership",
      "description": "Two scheduled property-care visits each month with up to two hours of on-site service per visit. Highest-priority maintenance items first. Completion of every possible task during every visit is not guaranteed and unused service time does not roll over.",
      "availabilityStarts": "2026-03-01",
      "availabilityEnds": "2026-10-31",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "279",
        "priceCurrency": "USD",
        "unitCode": "MON",
        "valueAddedTaxIncluded": false
      }
    },
    {
      "@type": "Offer",
      "name": "Grill and outdoor kitchen deep clean",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "249",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": false
      }
    },
    {
      "@type": "Offer",
      "name": "Window well cleanout",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "49",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": false
      }
    }
  ]
}
```

**Parsed with a real JSON parser after every edit. Valid.**

### Property-by-property check

| Property | Value | Verdict |
|---|---|---|
| `@type` | `HomeAndConstructionBusiness` | Direct subtype of `LocalBusiness`. Valid. |
| `@id` | `[URL]/#business` | A stable node identifier so later blocks can reference it. |
| `name` | `Westside Property Care 513` | The full name, per `brand-brief.md` §1.2. |
| `alternateName` | `WPC513` | The mark. **Not** the bare three letters — that string is banned everywhere including here. |
| `slogan` | `Seasonal Outdoor Living & Property Care` | Valid on `Organization`. Verbatim, never rewritten, never given a verb. |
| `priceRange` | `$279 per month` | 🔁 **Rewritten.** It previously read `$229-$329 per month`, which is now three dead prices in a machine-readable field. `priceRange` is free text by definition; it states the one price and the billing period, and it is never expressed per hour or per visit. |
| `description` | see block | States the season, the count and the summary. No banned phrase, no crew, no credential. |
| `address` | locality / region / country only | 🔶 **No `streetAddress`, no `postalCode`, deliberately.** He works from home. Publishing a residential address in structured data is a privacy decision, not an SEO one, and `voice.md` bans a full address on any public surface. GBP is where a service-area business declares its address privately. |
| `areaServed` | four entries | Exactly the four qualified areas in §4. |
| `makesOffer[0]` | the membership | `UnitPriceSpecification` with `unitCode: "MON"` (UN/CEFACT for month) states a **monthly** price. This is the field where an hourly or per-visit derivation would be a defect, and there is none. |
| `makesOffer[0].availabilityStarts` / `Ends` | `2026-03-01` / `2026-10-31` | 🆕 The season, machine-readable. The structured-data equivalent of putting the season above the price. |
| `makesOffer[1..2]` | $249+ / $49+ | `minPrice` on a `PriceSpecification` is exactly what a published "from" price is. |

### `areaServed` says the same thing the footer says

Four entries, matching the footer line and `CANON.md` §5 exactly:
**Green Township · Oak Hills · Upper Delhi · Covedale.**

`AdministrativeArea` is used for Green Township because it is a real civil township with legal
boundaries. The other three are neighbourhoods, so they are `Place`. That distinction is not
pedantry — an `AdministrativeArea` that is not one is a wrong claim in a machine-readable field.

### Deliberate omissions, each with a reason

**Where there is no honest value, the field is omitted. Absent is not a defect; wrong is.**

| Omitted | Why |
|---|---|
| `openingHoursSpecification` | **The most important omission on the site.** Routine visits are Monday and Friday only, Tuesday to Thursday is project time, and there is no scheduled service at all between November and February. `Mo-Fr 08:00-17:00` would publish a machine-readable forty-hour week with someone at a desk, and Google would render it as "Open · Closes 5 PM." That is the same false-availability defect as "within 24 hours" wearing a different hat (`voice.md` §8 item 14a). **Do not add it back**, and do not add a seasonal version either — a business marked "closed" for four months in structured data is a different and worse problem. |
| `aggregateRating`, `review` | No reviews exist. Fabricating either is the single most consequential lie available in this file. |
| `employee`, `numberOfEmployees`, `founder` | One person, and `CANON.md` §1 forbids anything implying a crew. |
| `foundingDate` | The business is days old. Publishing it invites "established 2026" as a snippet — technically true, rhetorically awful. |
| `image`, `logo` | 🔶 **Add `logo` the day an `og:image` exists.** `visual-direction.md` §7.3 specifies it: the full lockup on `--navy`, centred in a 1200×630 or 1:1 field with the tagline beneath in `--paper`, no photograph behind it. The three shipped SVGs are favicons, not an `og:image`. |
| `sameAs` | 🔶 **Add `[GBP_URL]` the day the Google Business Profile is live.** The highest-value addition available to this block, because it welds the site to the profile that does most of the local ranking work. |
| `hasOfferCatalog` | The two published project prices are already `makesOffer`. A catalogue of quoted categories with no prices would be a list of nouns. |
| `serviceArea` with a `GeoCircle` | The real constraint is route-cluster proximity, not a radius. §4. |
| `award`, `hasCredential`, `memberOf` | None exist. "Licensed" is banned outright — Ohio does not license this trade, so the claim is wrong rather than early. |

### Two things to do before this goes live

1. Replace `[URL]`, `[PHONE]` and `[EMAIL]`. A JSON-LD block with placeholders in it is worse
   than no block, because it validates.
2. Run it through the Rich Results Test and the Schema Markup Validator. Both are free, both take
   a minute, and neither could be run from this environment — `CANON.md` §9, every outbound host
   returns 403.

---

## 4. Service area — the qualified geography, not all of Cincinnati

`CANON.md` §5 is binding on this file. West-side home values are modest and a $279/month
membership addresses a narrow slice of them. **The narrowness is a feature.** He needs six
clients.

### Qualified — publish these four

| Area | Why |
|---|---|
| **Green Township** | Subdivision stock in the $250–450k band; the largest concentration of pools and outdoor kitchens on the west side |
| **Oak Hills** | Same profile, and the school-district identity does the targeting for you |
| **Upper Delhi** | The top of the Delhi range, not Delhi generally |
| **Covedale** | The upper end only |

These four, in this wording, appear in: the footer of every page, the About route section, the
home route section, `areaServed` in the JSON-LD, and the GBP service area. **They must not drift
between those five surfaces.** A service area that says one thing on the page and another in the
structured data is the kind of inconsistency local ranking systems notice and people do not.

### Explicitly excluded, and this is binding on the site

**Westwood, Price Hill, and Cheviot.** Median values around $175k. `CANON.md` §5 says do not write
copy or targeting aimed at them, and `messaging.md` §7 makes it one of three things never to say
on any surface.

**This is arithmetic, not a judgment**, and the distinction matters for how it is implemented: an
inquiry from one of those areas that qualifies on property attributes and route proximity is
welcome and should be treated exactly like any other. **An exception is fine; a strategy is not.**
So they are absent from `areaServed`, absent from the footer and absent from the GBP service
area — and no page anywhere says he does not serve them, because that would be both rude and
pointless.

### The service radius that actually governs

Not a radius. **Route-cluster proximity.** A qualified property fifteen minutes from an existing
client is a better fit than a qualified property twenty-five minutes away in a "better"
neighbourhood, and no price fixes distance.

This cannot be expressed in structured data and should not be attempted. It is expressed in
prose, on `about.html`, `waitlist.html` and the home route section, because it is a real
constraint a prospect deserves to understand before they ask.

---

## 5. Google Business Profile alignment

`03-marketing/google-business-profile.md` owns the profile. This section owns **keeping the site
and the profile saying the same thing**, which is the only part of local SEO that is genuinely
load-bearing for a business this size.

### NAP consistency — the one thing that must not drift

| Field | The value, everywhere |
|---|---|
| **Name** | `Westside Property Care 513` — exactly this, with the numerals, on the site, the profile, the truck, the invoice and the agreement. Never "Westside Property Care," never the bare three letters. |
| **Address** | Service-area business. Address hidden on the profile, absent from the site's structured data. §3. |
| **Phone** | `[PHONE]` — one number, and it must be the one that receives texts, because every CTA on the site is an `sms:` link. |

**The name is the whole ball game for the brand query.** "Westside Property Care" is generic
enough that it will collide; "Westside Property Care 513" is not. Every surface that shortens it
weakens the one query he is guaranteed to get.

### Category

Decided in `03-marketing/google-business-profile.md` §3, not here. This file's only requirement is
that whatever primary category is chosen, **the site's `@type` and the profile's category
describe the same business**, and that no category is selected which implies pool service,
landscaping or snow removal — all three of which the membership excludes, and two of which would
generate exactly the inquiries he has to turn down.

### Description

The profile description should be the site's meta description, not a second piece of writing.
Same facts, same order, same voice:

> Seasonal outdoor living and property care for six homes on the west side of Cincinnati. Two
> scheduled visits a month, March 1 through October 31 — sixteen visits a season — covering the
> pool area, patio, outdoor kitchen and the hardscape serving them, with a short written summary
> after every visit. $279 a month. Grill and outdoor kitchen deep cleans from $249.

**No banned phrase, no crew, no credential, no urgency, and the season stated.** It passes
`voice.md` §8 as written.

### Products and services on the profile

Only the two published prices: **grill and outdoor kitchen deep clean $249+**, **window well
cleanout $49+**. Everything else is "quoted after I look at it." Publishing the internal quoting
anchors on a Google profile is the same anchor leak as publishing them on a page, with the added
problem that a profile listing is harder to correct quietly.

### Photos

**The profile needs the same photographs the site needs** — `site-spec.md` §7. It is a second
reason to shoot them, and the profile is where they will do the most immediate work: a map
listing with real photographs of real work beats one with a logo and nothing else.

**No stock photography on the profile either.** Same rule, same reason.

### Reviews

**Zero exist.** Nothing on the site claims otherwise and nothing may.

When they exist they go on the profile, not on the site — a review displayed on your own site is a
testimonial, and `brand-brief.md` §4.4 forbids those until they are real, attributed and
permitted. A review count may only ever be published as the exact true count.

---

## 6. On-page technical state

| Item | State |
|---|---|
| `<title>` | Unique on all ten pages. §2. |
| Meta description | Unique on all ten pages. §2. |
| Canonical | Absolute, on every page. `index.html` and `membership-full.html` both canonicalise to `[URL]/`. |
| Open Graph | `og:type`, `og:title`, `og:description`, `og:url` on all ten. 🔶 `og:image` pending — §3. |
| Twitter cards | Absent. Twitter falls back to Open Graph and a duplicate tag set is bytes for nothing. |
| `robots.txt` | Allows everything, points at the sitemap. §2. |
| `sitemap.xml` | Seven URLs. `thanks.html`, `404.html` and `membership-full.html` are absent — they are not entry points. |
| `noindex` | `thanks.html`, `404.html`, `membership-full.html`. Remove it from `membership-full.html` on the day it becomes the home page. |
| Favicons | Three files: `favicon-16.svg`, `favicon.svg`, `apple-touch-icon.svg`. `site-spec.md` §8. |
| `lang` | `en` on `<html>`, every page. |
| Headings | One `<h1>` per page, no skipped levels, verified programmatically. |
| Structured data | `index.html` and `membership-full.html` only. §3. |
| Page weight | Heaviest first load 27.4 KB gzipped over six requests. `site-spec.md` §11.2. |
| Third-party | None. No analytics, no fonts from a CDN, no tag manager, no embeds. |
| HTTPS / headers | `_headers` ships CSP, HSTS and the rest. `site-spec.md` §11.6. |

---

## 7. What to actually do, in order

1. **Set `[URL]`, `[PHONE]`, `[EMAIL]`, `[FORM_ENDPOINT]`.** Nothing else on this list matters
   until this is done.
2. **Create the Google Business Profile and verify it.** It will outrank the site for every local
   query and it is free. `03-marketing/google-business-profile.md`.
3. **Add `sameAs: [GBP_URL]`** to the JSON-LD the day the profile is live.
4. **Shoot the photographs.** They serve the site and the profile simultaneously and they are the
   biggest quality lever on both.
5. **Produce the `og:image`** — the full lockup on navy, 1200×630, tagline beneath, no photograph
   behind it — and add `logo` and `image` to the JSON-LD.
6. **Submit the sitemap** in Search Console.
7. **Then stop.** Everything after this point is optimising a channel that is not how this
   business gets clients. Six neighbours and a yard sign will outperform all of it.

---

## 8. What would make this plan wrong

Stated so it can be checked rather than assumed.

- **If he ever needs more than six clients**, the whole framing changes and a real content plan
  becomes worth building. `CANON.md` §1 says that is not the plan and copy implying growth is
  banned, so this stays a six-client SEO plan.
- **If project work becomes the primary business** rather than the profit centre behind the
  membership, `projects.html` deserves to become a small site of its own — one page per service,
  with real before-and-after photography. That would be a good problem, and it is worth watching
  for in the four off-season months when project work is the *only* thing to sell.
- **If a competitor starts publishing prices**, the price-in-the-title move on `pricing.html`
  stops being a differentiator and becomes table stakes. It would still be the right thing to do.
- **If the season changes**, every date in §2, §3 and §5 changes with it. The season is stated in
  six places on this page and in `availabilityStarts` / `availabilityEnds` in the structured data;
  they move together or not at all.

---

## Related files

- `site-spec.md` — the architecture, the budgets, and the recomputed contrast audit
- `copy-deck.md` — the prose these titles and descriptions have to agree with
- `03-marketing/google-business-profile.md` — the profile this file aligns to
- `01-brand/voice.md` §3 (the non-prose surface rule), §8 items 31 and 34
- `CANON.md` §5 (who the customer is), §6 (what the site is for)
