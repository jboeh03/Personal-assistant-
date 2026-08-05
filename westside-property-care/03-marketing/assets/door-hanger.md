# Asset — Door Hanger

**Used by:** `neighborhood-campaign.md` §6 · **Track:** B
**Placeholders in this file:** `[PHONE]`, `[OWNER FIRST NAME]` — see `gtm-plan.md` §8 for the full registry

> **Re-baselined 2026-08-05.** Name is **Westside Property Care 513**. No price appears on this
> piece — that was already true and stays true under the flat $279 price too.

---

## Copy

### Front

> **Westside Property Care 513**
>
> I take care of six properties on the west side. Pool deck, patio, outdoor kitchen — twice a
> month, March through October, with a written report after every visit.
>
> **{{slots_open}} of the six spots are open right now.**
>
> `[OWNER FIRST NAME]` · `[PHONE]` · WPC513

### Back

> Not lawn care. Not pool service. Everything I don't do is written down before you sign
> anything.
>
> `[PHONE]`

---

## Why this copy and nothing more

Four lines on the front, per `voice.md`'s channel notes ("Door hanger: four lines maximum. The
current open-slot count is one of them") and `brand-brief.md` §7 ("its one job is to make a
qualified neighbor recognize the name later and know it is nearby — not sell. Nobody buys
$279/month off a door hanger"). No price appears anywhere on this piece — a door-hanger reader is
cold, not qualifying, and printing a price invites exactly the kind of "compute the number
yourself" reading `voice.md` §3 warns against for a piece nobody is standing next to him to
explain. The back exists to pre-empt the single most common misunderstanding named in
`brand-brief.md` §6 ("Property Care" sounds like lawn care) in three words, without turning the
piece into a scope document — that job belongs to `leave-behind.md` and `flyer.md`.

**The back does not claim the exclusions are printed on it.** "On this page" would be false on
this specific surface, since the back carries three lines and no list. "Written down" is true:
the exclusions are written down, in the service agreement and the leave-behind, and the
walkthrough covers them out loud before the price (`ideal-client.md` §7, step 5).

**No URL on this piece, and that's a decision, not an oversight.** `gtm-plan.md` §8 lists `[URL]`
as not yet resolved — no production domain exists yet — and the front is already at the
`voice.md` four-line cap, so adding one would mean cutting the slot count or the phone number,
not appending for free. Revisit once the site ships and `[URL]` has a real value; until then,
`[PHONE]` is the one working channel this piece can point to.

---

## Dimensions and production

| Spec | Value |
|---|---|
| Finished size | 4.25" × 11" — the standard door-hanger size, sized for a door-knob die cut |
| Bleed | 0.125" (1/8") on all four sides — set up the file at 4.5" × 11.25" |
| Die cut | Standard door-knob slot, positioned per the printer's template — confirm exact placement with the chosen vendor before finalizing layout, since slot position varies slightly by supplier |
| Safe margin | Keep all text at least 0.25" inside the trim edge, and further from the die-cut slot itself so no text is interrupted by the knob cutout |
| Stock | 14pt or 16pt cardstock, matte or satin — coated stock reads as a mailer more than a personal note; a lighter matte finish fits the field-ledger register in `visual-direction.md` |
| Color | `--paper` ground, `--ink` text, `--ember-deep` used only if the piece is printed in more than one color and only on the phone number or the mark rule — per `visual-direction.md` §2, ember is the only action color and nothing else on the piece should carry it. **Do not use `--ember`** at door-hanger text sizes — it is a large-text/non-text color only (3.3:1 on paper) and fails contrast for body copy. |
| Print run | 150–250 per pass, per `neighborhood-campaign.md` §5 — small batches, because `{{slots_open}}` changes every time a member signs |
| Typography | Front headline in Fraunces (`visual-direction.md` §3); body and the `[OWNER FIRST NAME]` / `[PHONE]` / WPC513 line in IBM Plex Sans; sentence case throughout, no exclamation marks, no glyphs |

## Call to action

Call or text `[PHONE]`. One ask, stated once, in the line that already carries the name — no
separate "call now" banner, which `voice.md` §6.5 bans outright as manufactured urgency.

## Before this prints

- `[PHONE]` and `[OWNER FIRST NAME]` must be real.
- `{{slots_open}}` must be the true count on the day of the print run, not an estimate —
  reprint rather than let this drift, per `voice.md` §6.5's ban on any count that isn't the real
  one.
- **Distribution stays inside the qualified geography** (`neighborhood-campaign.md` §2) —
  Green Township, Oak Hills, upper Delhi, Covedale. Never Westwood, Price Hill, or Cheviot.
