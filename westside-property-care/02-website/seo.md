# SEO

**Owner:** `wpc-web` · **Status:** search and local-listing plan for `02-website/site/`
**Reads from:** `CANON.md` §5, `00-model/ideal-client.md` §3, `01-brand/brand-brief.md` §7

---

## 1. The honest framing, first, because it governs everything below

**SEO is a slow, secondary channel for this business, and it must not drive the site's
architecture.** `CANON.md` §5 is explicit: the site is not a lead-generation engine. It is what
closes someone who **already heard his name** — from a neighbor, a yard sign, a grill-cleaning
job, or a Google Business Profile listing.

Three of those four channels transmit the name by ear. None of them is a search engine.

### What that means in practice

- **He needs six clients.** Not six hundred. There are a few hundred qualifying homes in Green
  Township, Oak Hills, upper Delhi, and Covedale (`ideal-client.md` §3), and he needs roughly a
  2% conversion of a list he could physically walk in a few weekends. Organic search is not the
  efficient way to find six houses inside that set.
- **The timeline is wrong for the need.** A new domain with no links takes months to rank for
  anything competitive. He wants members this season. Referrals, the warm list, yard signs, and
  a verified GBP all move faster than a page ever will.
- **The keywords that would convert barely exist.** Nobody searches "outdoor living area
  membership Green Township." The searches that do exist — "pool service Cincinnati," "lawn care
  Delhi" — are for things he explicitly **does not do** (`service-catalog.md` §4.1, §4.2).
  Ranking for them would produce unqualified inquiries he would have to decline, which costs
  time and produces nothing.
- **No keyword data is available.** The research tooling in this environment returns
  "Insufficient plan" for volume (`CANON.md` §8). Nothing below claims a search volume, and no
  plan here depends on one.

### The three things SEO actually has to do

Narrow, achievable, and worth doing:

1. **Win his own name.** Someone hears "Westside Property Care" over a fence and types it in
   that evening. That search must land on the GBP and this site, and nothing else. This is the
   single highest-value search outcome available and it is easy.
2. **Be legible to Google's local index** so the GBP has a website to corroborate — matching
   name, matching phone, matching service area, matching category.
3. **Answer the two questions that decide the sale**, in indexable text, so that a prospect who
   is already interested can find them: *what isn't included*, and *what happens in winter*.

**What SEO must never be allowed to do here:** add pages. The moment this site grows a
`/pool-cleaning-green-township` doorway page or a suburb-by-suburb page farm, it starts looking
like every other home-services site and stops looking like a man who writes things down. That
trade is not worth a ranking he does not need.

---

## 2. Per-page titles and meta descriptions

Titles are written for a human scanning a result, not for a keyword tool. Sentence case, per
`voice.md` §3. Every price is quoted from `00-model/pricing.md`.

Lengths are given because they are the one place a description gets silently truncated.

### `index.html`

| | |
|---|---|
| **Title** | `Westside Property Care — six properties, twice a month, written down every time` (78 ch) |
| **Description** | `Twice-monthly care for the outdoor living areas of six west-side Cincinnati homes — pool deck, patio, and outdoor kitchen — with a written report after every visit. Scope and price published.` (191 ch) |
| **H1** | Six properties. Twice a month. Written down every time. |

The description leads with what it is and where, then closes on the differentiator a competitor
will not copy: the scope and the price are on the page rather than behind a form.

### `whats-included.html`

| | |
|---|---|
| **Title** | `What's included, and what isn't — Westside Property Care` (55 ch) |
| **Description** | `The full scope of both seasons — Green Season April through October, Dormant Season November through March — and every exclusion, in the words they're written in the agreement.` (174 ch) |
| **H1** | What's included, and what isn't |

**This is the most important page in the site for search**, and not for the reason SEO people
usually give. It is the page that answers "what happens in December," and it is the only page a
competitor could not publish, because publishing your own exclusions is a costly signal.

### `pricing.html`

| | |
|---|---|
| **Title** | `Pricing — Westside Property Care` (32 ch) |
| **Description** | `What you pay depends on what your property has. A property with a pool is $289 a month; with a pool and an outdoor kitchen, $329. Two visits a month, the same price in January as in July.` (183 ch) |
| **H1** | What you pay depends on what your property has |

The description carries $289 and $329 and does not carry $229 — `CANON.md` §3, lead with the
higher configurations. It states no count of price points (`voice.md` §3), so adding or removing
a configuration does not break the sentence. It does not carry the module arithmetic.

### `projects.html`

| | |
|---|---|
| **Title** | `Project work, membership or not — Westside Property Care` (55 ch) |
| **Description** | `Grill and outdoor kitchen deep clean from $249. Window well cleanout from $49. Pressure washing, gutters, drainage, and storm work quoted after I look at it. No membership needed.` (177 ch) |
| **H1** | Project work, membership or not |

This is the page most likely to catch a genuine search, because "grill cleaning Cincinnati" is a
thing people actually look for and it is a thing he actually does. It is also the page that
converts a prospect who fails the route test into revenue.

### `about.html`

| | |
|---|---|
| **Title** | `This is new. I'd be starting with you. — Westside Property Care` (62 ch) |
| **Description** | `A new one-person business on the west side of Cincinnati, out of a family grill-cleaning business. Six properties is the cap, the route decides who fits, and everything I don't do is published.` (191 ch) |
| **H1** | This is new. I'd be starting with you. |

A title that opens with the weakness is unusual in a result page, which is exactly why it earns
a click from someone who has already heard the name. It is also true, which is the only reason
it is there.

### `apply.html`

| | |
|---|---|
| **Title** | `Two questions, then I'll come look — Westside Property Care` (58 ch) |
| **Description** | `Tell me what the property has and what your cross street is. If it fits the route, I'll walk the property with you, show you what isn't included, and give you the price standing there.` (180 ch) |
| **H1** | Two questions, then I'll come look |

### `waitlist.html`

| | |
|---|---|
| **Title** | `The waitlist is a real list — Westside Property Care` (51 ch) |
| **Description** | `A written list with your street on it. When a spot opens it goes to whoever is closest to the route I'm already driving. Project work Tuesday through Thursday in the meantime.` (172 ch) |
| **H1** | The waitlist is a real list |

### Not indexed

| Page | Treatment | Why |
|---|---|---|
| `membership-full.html` | `noindex` while it is the staging copy | It duplicates `index.html` and would split the one page that matters. The meta line is removed at the moment it *becomes* `index.html`. |
| `thanks.html` | `noindex` | A form success page has no business in an index. |
| `404.html` | `noindex` | — |

All three are also `Disallow`ed in `robots.txt`. `sitemap.xml` lists the seven real URLs and
none of these.

---

## 3. JSON-LD — hand-checked against schema.org

The block lives in `site/index.html` only. One business entity, one page, one `@id`. Duplicating
it across pages produces multiple conflicting entities, which is the most common way this markup
goes wrong.

### The type, and why not `LocalBusiness` directly

`LocalBusiness` is the general type. **`HomeAndConstructionBusiness`** is its direct subtype and
is the correct one here — it inherits every property `LocalBusiness` has, so every consumer that
understands `LocalBusiness` understands this, and it is more specific about what the business
actually is. `LocalBusiness` itself is a subtype of `Organization` and of `Place`, which is why
`address` and `openingHoursSpecification` are valid on it.

`HomeAndConstructionBusiness` has three subtypes — `Electrician`, `HVACBusiness`, `Plumber`,
`RoofingContractor`, `HousePainter`, `Locksmith`, `MovingCompany`, `GeneralContractor` — and
**none of them fit.** Claiming `GeneralContractor` would be a small lie in structured data, and
structured data is exactly the wrong place to be loose. The parent type is the honest choice.

### The block, as shipped

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "[URL]/#business",
  "name": "Westside Property Care",
  "alternateName": "WPC513",
  "url": "[URL]/",
  "telephone": "[PHONE]",
  "email": "[EMAIL]",
  "description": "Twice-monthly care for the outdoor living areas of six homes on the west side of Cincinnati — pool deck, patio, outdoor kitchen, and the hardscape serving them — with a written report after every visit.",
  "priceRange": "$229-$329 per month",
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
    { "@type": "Place", "name": "Delhi Township, Ohio" },
    { "@type": "Place", "name": "Covedale, Cincinnati, Ohio" }
  ],
  "openingHoursSpecification": [ … ],
  "makesOffer": [ … ]
}
```

### Property-by-property check

| Property | Expected type | What is supplied | Verdict |
|---|---|---|---|
| `@type` | — | `HomeAndConstructionBusiness`, a direct subtype of `LocalBusiness` | Valid |
| `@id` | URL | `[URL]/#business` — a stable fragment identifier for the entity, distinct from `url` | Valid, and correct practice |
| `name` | Text | The customer-facing name from `brand-brief.md` §1 | Valid |
| `alternateName` | Text | `WPC513`, the short mark | Valid |
| `url` / `telephone` / `email` | URL / Text / Text | Placeholders | Valid once filled |
| `description` | Text | Matches the GBP description opener in `brand-brief.md` §2 | Valid |
| `priceRange` | Text | `"$229-$329 per month"` — a free-text field by spec, and the range is exactly the four published prices with nothing invented | Valid |
| `currenciesAccepted` / `paymentAccepted` | Text | `USD` / `Credit card` — matches card-on-file in `pricing.md` §4 | Valid |
| `address` | PostalAddress | Locality, region, country. **No street address on purpose** — see below | Valid |
| `areaServed` | Text, Place, AdministrativeArea, or GeoShape | Four entries. Green Township is a real Ohio civil township, so `AdministrativeArea`; the other three are neighbourhoods and communities, so `Place` | Valid |
| `openingHoursSpecification` | OpeningHoursSpecification | `dayOfWeek` as an array plus `opens`/`closes` in 24-hour `HH:MM` | Valid |
| `makesOffer` | Offer | Two offers, each with a `PriceSpecification` carrying `price`, `minPrice`, and `priceCurrency` | Valid |

### Deliberate omissions, each with a reason

Every one of these is a property Google likes and this business cannot honestly supply. Adding
any of them would be fabricated proof (`brand-brief.md` §4.4).

| Omitted | Why |
|---|---|
| `aggregateRating`, `review` | **No reviews exist.** This is the single most commonly faked property in local schema and it is the one that gets a manual action. It goes in when there are real reviews, with the real count. |
| `image`, `logo` | No real photography exists yet (`CANON.md` §9.3). Pointing at a plate placeholder would be worse than omitting. **Add `image` the day frame 1 is shot** — it is the highest-value addition available. |
| `sameAs` | Nothing to link to yet. **Add `[GBP_URL]` the moment the Google Business Profile is verified.** This is the second-highest-value addition. |
| `streetAddress`, `geo` | He is a **service-area business** with no storefront and no public premises. Publishing a home address in structured data is a genuine privacy and safety mistake, and it is not required for a service-area listing. |
| `foundingDate` | It would read as a credential he does not have. |
| `numberOfEmployees` | True answer is 1. Technically publishable, omitted because it invites a "growing team" read the business explicitly refuses (`CANON.md` §1). |
| `Service` / `OfferCatalog` for the membership | Deliberate. Modelling the four configurations as a catalog of offers is exactly the plan-grid framing `CANON.md` §3 forbids, in machine-readable form. The two published *project* prices are offers because they genuinely are. |
| `priceValidUntil` | No expiry exists and inventing one is manufactured urgency (`voice.md` §6.5). |

### Two things to do before this goes live

1. **Fill `[URL]`, `[PHONE]`, and `[EMAIL]`.** The block is syntactically valid with the
   placeholders in it, but `telephone: "[PHONE]"` is worse than no `telephone` property.
2. **Paste it into Google's Rich Results Test and schema.org's validator.** Neither is reachable
   from this environment (`CANON.md` §8), so the check above is by hand against the schema.org
   type hierarchy. It is careful, and it is not a substitute for the validator.

---

## 4. Service area — the qualified geography, not all of Cincinnati

Taken directly from `00-model/ideal-client.md` §3. **This list appears identically in the JSON-LD,
in the Google Business Profile, in the footer of every page, and in the copy on `index.html` and
`about.html`.** Consistency across those four surfaces is worth more than any on-page tactic in
this document.

### Qualified — publish these four

| Area | Why it is in |
|---|---|
| **Green Township subdivisions** | $250–450k, newer construction, the highest density of in-ground pools and built outdoor kitchens on the west side. This is the core. |
| **Oak Hills** | Established, well-kept, higher-value stock with mature outdoor investment. |
| **Upper Delhi** | The top of the $180–350k range only — the higher-value streets, not Delhi generally. |
| **Covedale** | Well-maintained pockets, owner-occupied, above the west-side median. |

**Bridgetown is conditional and is not published as a target.** It sits inside Green Township and
qualifies on the attribute test — a real pool or outdoor kitchen and an owner who already
outsources — never on the address alone. It needs no separate mention anywhere.

### Explicitly excluded, and this is binding on the site

**Westwood. Price Hill. Cheviot.**

At roughly $175k median these are not the market for a $229–$329/month membership. This is
arithmetic, not a judgment, and `messaging.md` §7 makes it one of only two things never to say on
any surface.

**No page, meta description, schema property, GBP service area, or alt text names any of them.**
Verified by search across `site/`: zero occurrences. An inquiry from one of them that qualifies on
attributes and route is welcome — an *exception* is fine, a *strategy* is not.

### The service radius that actually governs

Worth stating because it is the thing a geography list cannot express: even inside the four
qualified areas, a property has to pass the **15-minute, 25-minute, and 5-hour route tests**
(`operating-model.md` §4). A qualified property that is not near a cluster goes on the waitlist
even at $329. The site says this in plain English on `index.html`, `about.html`, and
`waitlist.html`, which is the honest version of a service-area page.

---

## 5. Google Business Profile alignment

**The GBP matters more than the website's ranking**, and it is the longest lead item in the whole
project — postcard verification runs days to several weeks (`05-playbook/human-checklist.md` §1).
Start it before the site is finished, not after.

### NAP consistency — the one thing that must not drift

The name, phone, and service area must be **byte-identical** across the GBP, the site footer, the
JSON-LD, the service agreement, the invoice, and every printed piece.

| Field | The exact value |
|---|---|
| **Name** | `Westside Property Care` — not "WPC513," not "Westside Property Care LLC," not "Westside Property Care | Cincinnati." Keyword-stuffing the GBP name is a suspension risk and it is against Google's guidelines. |
| **Phone** | `[PHONE]` — the same 513 number that is on the site, the truck, and the door hanger. One number, everywhere. |
| **Website** | `[URL]/` — the home page, not a tracking URL. |
| **Business type** | **Service-area business. Hide the address.** He works out of a vehicle on other people's property; there is no location a customer visits. |
| **Service area** | The four qualified areas in §4. **Not "Cincinnati."** Setting the area to the whole metro produces unqualified inquiries from places the route cannot serve, and each one costs time he does not have. |

### Category

- **Primary:** the closest available to a twice-monthly outdoor-living property-care service.
  Google's category list has no exact match; pick the nearest honest one and do not stack
  unrelated categories to catch more searches.
- **Do not add** "Pool Cleaning Service," "Lawn Care Service," or "Landscaper." All three are
  things he explicitly does not do (`service-catalog.md` §4.1, §4.2). Adding them would generate
  inquiries he has to decline and would contradict the exclusions published on his own site,
  which is the one place his story has to be consistent.
- **"Grill cleaning" or the nearest equivalent is a legitimate secondary**, because the deep
  clean at $249+ is real work he really performs.

### Description

Use the approved opener from `brand-brief.md` §2 verbatim:

> Twice-monthly care for the outdoor living areas of six west-side homes — pool deck, patio, and
> outdoor kitchen — with a written report after every visit.

Then the two published project prices, then the geography. No superlatives, no "premier," no
"licensed and insured," no exclamation marks. `voice.md` §6 applies to the GBP exactly as it
applies to the site.

### Products / services on the profile

Only the two prices that are published anywhere (`pricing.md` §5.1):

- Grill and outdoor kitchen deep clean — **$249+**
- Window well cleanout — **$49+**

**Never publish the internal quoting anchors** from `pricing.md` §5.3 on the profile or anywhere
else. Everything else is "quoted after I look at it."

### Photos

The GBP photo requirement is the same requirement as the site's, and it is satisfied by the same
shoot: the seven frames in `site-spec.md` §6. **Stock photography on a GBP is worse than no
photography** — a Green Township homeowner can tell instantly, and a profile that looks generic
undoes the specificity the whole brand runs on.

Priority for the profile, in order: the truck and mark (frame 6), a finished pool deck or patio
(frame 1), the winter frame (frame 5).

### Reviews

- **Ask, but only after a real visit and a real report.** The report is the natural moment: the
  work is documented, the value is visible, and the member has something specific to describe.
- **Never buy, incentivise, or write one.** With six clients, one fake review is
  business-ending — and the fake ones read as fake to precisely the sort of careful homeowner
  this service is for.
- **Publish the real count, never a rounded impression.** "Three reviews on Google," not
  "highly rated." `brand-brief.md` §4.3.

---

## 6. On-page technical state

What is already true of the built site, so nobody re-does it.

| Item | State |
|---|---|
| One `<h1>` per page, headings descending without gaps | Done, verified across all ten pages |
| `<title>` and `<meta name="description">` unique per page | Done — §2 |
| `<link rel="canonical">` on every page | Done, `[URL]`-templated |
| Open Graph title, description, type, and url | Done on all seven public pages |
| `robots.txt` with a sitemap reference | Done |
| `sitemap.xml` listing the seven real URLs | Done |
| `noindex` on `thanks.html`, `404.html`, `membership-full.html` | Done — see the note in §2 |
| Semantic landmarks and descriptive link text | Done. No "click here" and no "learn more" anywhere — `voice.md` bans the latter as a CTA |
| Mobile-first, no horizontal overflow | Done — `site-spec.md` §11 |
| Fast: ~9.5 KB of gzipped CSS, ~0.6 KB of JS, no third-party request at all | Done — `site-spec.md` §9.2 |
| Explicit dimensions on media so nothing shifts | Required when photos land; the plate placeholders already reserve their space by `aspect-ratio` |
| Structured data | Done — §3 |
| HTTPS and security headers | `_headers` ships ready; the host must apply it |

**No `hreflang`, no AMP, no `og:image` yet** (there is no image to point at), and no schema
beyond the one business entity. All three are correct absences rather than omissions.

---

## 7. What to actually do, in order

Ranked by return, not by convention. The first three are worth more than everything after them
combined.

1. **Get the Google Business Profile verified.** Longest lead time in the project, highest value,
   and it is the thing that makes him findable to someone who heard his name once. Start it now.
2. **Shoot the seven frames.** They serve the site, the GBP, the door hanger, and the yard sign
   from one afternoon's work. No agent can produce them.
3. **Get the name, phone, and service area identical everywhere.** Site, GBP, agreement, invoice,
   truck, sign. This is the whole of local SEO for a business this size.
4. **Fill the placeholders and add `sameAs` and `image` to the JSON-LD** once the GBP and the
   photos exist.
5. **Ask the first four members for a review after their first real report** — and publish the
   real count.
6. **Leave the site alone otherwise.** Do not add pages. Do not add a blog nobody will write. Do
   not build service-area landing pages. If a page is ever added, it should be added because a
   prospect asked the same question three times, not because a keyword tool suggested it.

---

## 8. What would make this plan wrong

Stated so it can be checked later rather than assumed forever.

- **If the book fills from search rather than referral**, the assumption here is wrong and the
  channel deserves more. Watch where the six actually come from; `operating-model.md` §6.4
  already tracks referrals as a health metric.
- **If the grill deep clean starts producing real search volume**, `projects.html` is the page
  that would justify expansion — and it would be expansion into a service he genuinely performs,
  which is the only kind worth doing.
- **If the business ever stops being capped at six**, everything in this file changes. It is not
  going to (`CANON.md` §1), but the dependency is worth naming.

---

## Related files

- `site-spec.md` — the architecture this plan deliberately does not disturb
- `copy-deck.md` — the on-page copy; titles and descriptions here are the only copy not in it
- `00-model/ideal-client.md` §3 — the geography in §4
- `01-brand/brand-brief.md` §1, §2, §4.3 — the name rules, the GBP opener, and what may be claimed
- `01-brand/voice.md` §6 — applies to the GBP exactly as it applies to the site
- `05-playbook/human-checklist.md` §1, §8 — the GBP lead time and the shot list
