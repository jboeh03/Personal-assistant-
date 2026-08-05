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

**The length targets, and why they are what they are.** Titles aim at **≈60 characters** and
descriptions at **≈155**. Google truncates on pixel width rather than character count, so these
are approximations of a moving line — but the consequence of overshooting is specific and it is
the reason every value below was shortened: **the last clause is the first casualty.** Each of
these descriptions is written to close on the one thing a competitor would not publish, and a
closing differentiator that gets cut has been written for nothing. Where a value still runs a
little long, the load-bearing words are at the front.

Character counts below are measured on the shipped files, not estimated.

### `index.html`

| | |
|---|---|
| **Title** | `Westside Property Care — six properties, twice a month` (54 ch) |
| **Description** | `Twice-monthly outdoor living care for six west-side Cincinnati homes — pool deck, patio, outdoor kitchen. A written report every visit. Price published.` (152 ch) |
| **H1** | Six properties. Twice a month. Written down every time. |

The description leads with what it is and where, then closes on the differentiator a competitor
will not copy: the price is on the page rather than behind a form.

**The title is deliberately short**, because the one search this site genuinely has to win is
the branded one — someone hears "Westside Property Care" over a fence and types it in that
evening (§1). At 78 characters the previous title was long enough that Google would truncate it
or silently rewrite it, and on the highest-value query available that is a bad trade for three
extra words. The brand goes first and the two facts that survive are the two the business runs
on.

### `whats-included.html`

| | |
|---|---|
| **Title** | `What's included, and what isn't — Westside Property Care` (56 ch) |
| **Description** | `The scope of both seasons — Green Season, April through October, and Dormant Season, November through March. Every exclusion, in the agreement's words.` (151 ch) |
| **H1** | What's included, and what isn't |

**This is the most important page in the site for search**, and not for the reason SEO people
usually give. It is the page that answers "what happens in December," and it is the only page a
competitor could not publish, because publishing your own exclusions is a costly signal.

### `pricing.html`

| | |
|---|---|
| **Title** | `Pricing — Westside Property Care` (32 ch) |
| **Description** | `What you pay depends on what your property has: $289 a month with a pool, $329 with a pool and an outdoor kitchen. The same price in January as in July.` (152 ch) |
| **H1** | What you pay depends on what your property has |

The description carries $289 and $329 and does not carry $229 — `CANON.md` §3, lead with the
higher configurations. It states no count of price points (`voice.md` §3), so adding or removing
a configuration does not break the sentence. It does not carry the module arithmetic.

### `projects.html`

| | |
|---|---|
| **Title** | `Grill cleaning and project work in Cincinnati — Westside Property Care` (70 ch) |
| **Description** | `Grill and outdoor kitchen deep clean from $249. Window well cleanout from $49. Everything else quoted after I look at it. No membership needed.` (143 ch) |
| **H1** | Project work, membership or not |

This is the page most likely to catch a genuine search, because "grill cleaning Cincinnati" is a
thing people actually look for and it is a thing he actually does. It is also the page that
converts a prospect who fails the route test into revenue.

**Geography is added here, on this page only, and in one field.** The title previously carried
no place name at all — neither did the description, the `h1`, or the lede — so the one page in
the site with a plausible non-branded query was invisible to it. `Cincinnati` now sits in the
`<title>`, which is the strongest of the three fields, and the `og:title` is kept in sync so the
two do not disagree.

Two things this deliberately is **not**:

- **Not a new page.** No `/grill-cleaning-cincinnati` doorway. §1 is explicit that SEO must never
  be allowed to add pages here, and one honest title beats a page farm.
- **Not geography everywhere.** The description is not also stuffed with "west side" —
  duplicating the same signal across every field on the page buys nothing and starts to read
  like it was written for a crawler.

At 70 characters the title will be truncated in some results. That is accepted rather than
overlooked: the two words that matter, `Grill cleaning` and `Cincinnati`, sit inside the first
44 characters, so what gets cut is the brand suffix — the part a reader can already see in the
URL and the part Google frequently re-adds itself.

### `about.html`

| | |
|---|---|
| **Title** | `This is new. I'd be starting with you. — Westside Property Care` (63 ch) |
| **Description** | `New, one person, west side of Cincinnati, out of a family grill-cleaning business. Six properties is the cap, and everything I don't do is published.` (149 ch) |
| **H1** | This is new. I'd be starting with you. |

A title that opens with the weakness is unusual in a result page, which is exactly why it earns
a click from someone who has already heard the name. It is also true, which is the only reason
it is there.

### `apply.html`

| | |
|---|---|
| **Title** | `Two questions, then I'll come look — Westside Property Care` (59 ch) |
| **Description** | `Tell me what the property has and your cross street. If it fits the route, I'll walk it with you and price it standing there. About forty minutes.` (146 ch) |
| **H1** | Two questions, then I'll come look |

### `waitlist.html`

| | |
|---|---|
| **Title** | `The waitlist is a real list — Westside Property Care` (52 ch) |
| **Description** | `A written list with your street on it. When a spot opens it goes to whoever is closest to the route I'm already driving. Project work in the meantime.` (150 ch) |
| **H1** | The waitlist is a real list |

### Not indexed

| Page | Treatment | Why |
|---|---|---|
| `membership-full.html` | `noindex` **only** | It duplicates `index.html` and would split the one page that matters. The meta line is removed at the moment it *becomes* `index.html`. |
| `thanks.html` | `noindex` **only** | A form success page has no business in an index. |
| `404.html` | `noindex` **only** | — |

### `noindex`, never `Disallow` — and why they are not interchangeable

**`robots.txt` allows everything.** All three pages above are kept out of the index by the meta
tag alone, and `robots.txt` carries a comment saying so, so nobody re-adds the `Disallow` lines
as a belt-and-braces improvement.

They are not additive. They are in direct conflict:

- A `Disallow`ed URL is **never fetched**, so the `noindex` on it is **never read**. The
  instruction and the only channel that could deliver it cancel each other out.
- Google may still index a blocked URL it finds linked, as a bare result with no title and no
  description — which is the outcome the `noindex` existed to prevent, arrived at by the
  mechanism meant to prevent it.
- `membership-full.html` is the case where that actually bites. It is a near-duplicate of the
  home page, so a bare, description-less result for it looks to a reader like an unexplained
  second copy of the site.

`404.html` was already handled correctly — `noindex`, no `Disallow` — and is the pattern the
other two now follow. `sitemap.xml` lists the seven real URLs and none of these.

---

## 3. JSON-LD — hand-checked against schema.org

The block lives in `site/index.html` only. One business entity, one page, one `@id`. Duplicating
it across pages produces multiple conflicting entities, which is the most common way this markup
goes wrong.

### The type, and why not `LocalBusiness` directly

`LocalBusiness` is the general type. **`HomeAndConstructionBusiness`** is its direct subtype and
is the correct one here — it inherits every property `LocalBusiness` has, so every consumer that
understands `LocalBusiness` understands this, and it is more specific about what the business
actually is. `LocalBusiness` itself is a subtype of `Organization` and of `Place`, which is why `address` and
`areaServed` are valid on it. (`openingHoursSpecification` is valid on it too, and is
deliberately not used — see the omissions table below.)

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
    { "@type": "Place", "name": "Upper Delhi, Cincinnati, Ohio" },
    { "@type": "Place", "name": "Covedale, Cincinnati, Ohio" }
  ],
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
| `makesOffer` | Offer | Two offers, each with a `PriceSpecification` carrying `minPrice` and `priceCurrency` and no `price` | Valid |

### `areaServed` says the same thing the footer says

The third entry reads **`Upper Delhi, Cincinnati, Ohio`**, not `Delhi Township, Ohio`. The
narrowing is load-bearing, not cosmetic: `00-model/ideal-client.md` §3 qualifies *the top of the
Delhi range only* — the higher-value streets — and explicitly not Delhi generally, whose median
sits well below what a $289–$329 membership addresses. Every other surface already said "upper
Delhi": the footer of all ten pages, the copy on `index.html` and `about.html`, §4 of this file,
and the GBP service area in `03-marketing/google-business-profile.md` §2. The structured data was
the one place that had quietly widened it to the whole township, which is a machine-readable
claim to serve an area the route cannot and the price does not fit.

**What is deliberately not done here:** no `GeoShape`, no `polygon`, no `circle` with a radius.
The real boundary is not a shape — it is the 15-minute, 25-minute, and 5-hour route tests in
`operating-model.md` §4, and a qualified property that is not near a cluster goes on the waitlist
even at $329 (§4 below). Drawing a polygon would encode a precision that does not exist, would
need maintaining every time the route changes, and would be exactly the over-engineering §1 says
this site must not acquire. Four named places is the honest resolution.

### Deliberate omissions, each with a reason

Every one of these is a property Google likes and this business cannot honestly supply. Adding
any of them would be fabricated proof (`brand-brief.md` §4.4).

| Omitted | Why |
|---|---|
| `openingHoursSpecification` | **Removed, and it must not come back.** The block previously declared Monday–Friday `08:00`–`17:00`. No prose on the site says that and it is not true: he works **1.5–2 days a week**, routine visits are the first and third Monday and Friday, and Tuesday through Thursday is project time (`CANON.md` §3). Published as structured data it is a machine-readable staffed forty-hour week, and Google renders it in the knowledge panel as "Open · Closes 5 PM" — a false availability claim identical in kind to "within 24 hours" and banned by the same rule (`voice.md` §8 item 14a, §6.4). `03-marketing/google-business-profile.md` §2 had already made the correct call for the profile — "by appointment / does not apply in the traditional sense" — and the site now agrees with it. There is no honest value for this field, so the field is absent. |
| `price` inside `makesOffer` → `priceSpecification` | Both offers previously set `price` **and** `minPrice` to the same number, which asserts an exact price. Every other surface publishes these as **$249+** and **$49+** — starting prices, with the plus doing real work (`pricing.md` §5.1, and the `projects.html` copy that explains what the plus covers). `minPrice` alone is the honest shape and it is what the rest of the site says. |
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

### Category — decided in `03-marketing/google-business-profile.md` §3, not here

**That file is the source of truth for the GBP categories and this one defers to it.** Whoever
sits down to set the profile up must not find two answers.

| | Category |
|---|---|
| **Primary** | **Property maintenance** |
| **Secondary** | **Pressure washing service** |

Two categories, and no third.

**An earlier version of this file suggested "grill cleaning" as the secondary. That is
withdrawn.** It was reasoning from the search — "grill cleaning Cincinnati" is a real query and
the $249+ deep clean is real work — rather than from Google's actual taxonomy, which has no such
category to select. `03-marketing/google-business-profile.md` §3 did the harder work of checking
what can actually be chosen, and landed on **Pressure washing service**: a real, quoted offering
(`pricing.md` §5.2, `service-catalog.md` §4.4), specific enough to catch a search that "property
maintenance" alone would miss, and — unlike a category invented to fit a keyword — selectable.

The grill deep clean is still published, in the two places it belongs: the **Services** list on
the profile at **$249+** (that file §4, and the products list below), and the `<title>` of
`projects.html` (§2). A service entry and a page title are where a specific offering is named.
A category is not.

**Do not add** "Pool Cleaning Service," "Lawn Care Service," "Landscaper," "Handyman," or "Home
cleaning service." Every one is something he explicitly does not do
(`service-catalog.md` §4.1, §4.2, §4.3, §4.9). Adding any would generate inquiries he has to
decline and would contradict the exclusions published on his own site, which is the one place
his story has to be consistent. The full reasoning, category by category, is in
`03-marketing/google-business-profile.md` §3.

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
| `robots.txt` with a sitemap reference, and **no `Disallow` lines** | Done — the reasoning is in §2 |
| `sitemap.xml` listing the seven real URLs | Done |
| `noindex` on `thanks.html`, `404.html`, `membership-full.html`, crawlable so it can be read | Done — see the note in §2 |
| Semantic landmarks and descriptive link text | Done. No "click here" and no "learn more" anywhere — `voice.md` bans the latter as a CTA |
| Mobile-first, no horizontal overflow | Done — `site-spec.md` §11 |
| Fast: 12.9 KB of gzipped CSS, 1.3 KB of JS, no third-party request at all | Done — `site-spec.md` §9.2 carries the measured figures |
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
