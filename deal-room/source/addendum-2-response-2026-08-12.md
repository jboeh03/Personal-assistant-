# Addendum #2 — Seller Response to Defect Notice (2026-08-12)

> ⚠️ Informational analysis only — not legal advice. Confirm with Zach West and, on the
> wording issue below, an Ohio real estate attorney.

**Two DocuSign envelopes exist for Addendum #2.** Read this whole file before quoting any figure.

| Version | File | Envelope ID | Created | State |
|---|---|---|---|---|
| v1 (flattened) | `addendum-2-response-2026-08-12.pdf` | 734194BB…0AC9 | 08/12 1:31pm EDT | Flattened; form values baked into the page image. Jeff's signature only. |
| **v2 (live form)** | `addendum-2-response-2026-08-12-v2-unflattened.pdf` | E9D8839E…D6AD | 08/12 3:26pm EDT | **Both sellers signed.** AcroForm fields still live and readable. Render: `addendum-2-response-2026-08-12-v2-render.png` |

## Header (EVIDENCE — v2 form fields)

- Addendum #: **2**
- Contract dated: **7/31/2026**
- Buyer/Lessee: Robert Sipniewski and Catherine Sipniewski (renders clipped as "Robert Sipniewski and Catheri")
- Seller/Lessor: Jeffrey Boeh and Olivia Boeh
- Real estate: 6840 Stonington Rd Cincinnati OH 45230

## Signatures (EVIDENCE — v2 render)

| Party | Status |
|---|---|
| **Olivia Boeh (Seller)** | ✅ DocuSigned **8/12/2026 3:06pm EDT** |
| **Jeffrey Boeh (Seller)** | ✅ DocuSigned **8/12/26 3:15pm EDT** |
| Robert Sipniewski (Buyer) | ❌ blank |
| Catherine Sipniewski (Buyer) | ❌ blank |

**Seller side is fully executed.** The only signatures missing are the two buyers'.
Per §15(b), mutual signed agreement is required before the Settlement Period ends
(~08/14) or the contract auto-terminates under §15(c).

## Terms — what the FORM DATA says vs. what the PAGE SHOWS

This is the critical finding. The typed text overflows each line's field width, so the
right-hand end of every long line is **invisible on the rendered/printed page** — including
the dollar cap.

### Form field values (the data actually stored in the PDF)

1. `Seller agrees to have radon mitigation system installed`
2. `In lieu of completing RS-1, RS-2, EG-2-6 requested on the defect notice by Buyer, Seller offers to pay actual `
3. `settlement charges and/or other fees due at Closing on behalf of Buyer, including but not limited to, discount points, `
4. `closing costs, pre-paid fees or escrows, and any other fees allowed by Buyer's lender in an amount not to exceed $6325`
5. `Buyer and seller agree that these agreed upon terms shall end the settlement period`

### What the page actually renders (clipped at the right margin)

```
Seller agrees to have radon mitigation system installed

In lieu of completing RS-1, RS-2, EG-2-6 requested on the defect notice by Buyer, Seller offers to pay ac▮
settlement charges and/or other fees due at Closing on behalf of Buyer, including but not limited to, disco▮
closing costs, pre-paid fees or escrows, and any other fees allowed by Buyer's lender in an amount not▮

Buyer and seller agree that these agreed upon terms shall end the settlement period
```

**`to exceed $6325` is cut off. It does not appear on the document a human reads.**

## ⚠️ Two defects to fix before the buyers sign

### 1. The cap is invisible → the visible sentence reads as UNCAPPED (HIGH)

The figure **$6325 exists in the PDF form data** — that resolves the earlier "is there a
number at all?" question, and it matches the same-day Tecta America quote total of
**$6,325.00** exactly, and matches the $6,325 Jeff typed in the 10:52am group chat.

But the sentence a signer, a lender, or a court reads on the page ends at
"…in an amount **not**". A signed document whose operative sentence promises to pay the
buyer's settlement charges with the cap clipped off is, on its face, an **open-ended
obligation**. Flattening (which is what v1 already did) makes the clipped text permanent.

Also lost to clipping: "pay **actual**" and "discount **points**".

### 2. "RS-1, RS-2, EG-2-6" does not name the items it is meant to cover (MEDIUM–HIGH)

The Defect Notice roof package is **RS-1, RS-2, EG-2, RS-3, RS-4, RS-5, RS-6** — seven
items, and all seven are what the $6,325 quote prices. `EG-2-6` reads literally as
"EG-2 through EG-6", a range that does not exist in the Defect Notice (EG-1 brick and EG-5
grading were *waived*; there is no EG-3/EG-4/EG-6).

A buyer could later argue **RS-3 (kick-out/missing flashing), RS-4 (gutter cleaning/
fasteners), RS-5 (gutter slope), and RS-6 (chimney crown/cap)** — $3,753 of the $6,325 —
were never included in the credit and are still owed as seller-performed repairs.

### Recommended fix

Re-issue Addendum #2 (nothing is lost — the buyers have not signed yet) with the terms
re-typed to fit the lines, e.g.:

```
1. Seller agrees to have a radon mitigation system installed prior to Closing.

2. In lieu of completing items RS-1, RS-2, RS-3, RS-4, RS-5, RS-6 and EG-2
   requested on the Defect Notice, Seller shall pay Buyer's actual settlement
   charges and other fees due at Closing (including discount points, closing
   costs, pre-paid fees and escrows, and any other fees permitted by Buyer's
   lender) in an amount not to exceed $6,325.00.

3. Buyer and Seller agree these terms end the Settlement Period.
```

Every line fits, every item is named, and the cap is legible. If the buyers sign the
current version before this can be done, fix it with a short **Addendum #3** stating the
cap is $6,325.00 and listing the seven items — per §28, modifications are invalid unless
written and signed by all parties.

## Companion evidence: roofer quote (same day)

`roofer-quote-tecta-america-2026-08-12.png` — Mike Morris, Tecta America Zero Co. LLC
(513-615-7239 / mmorris@tectaamerica.com) to Zach West:

| Item | Price |
|---|---|
| RS-1 | $448.00 |
| RS-2 | $1,755.00 |
| EG-2 | $369.00 |
| RS-3 | $825.00 |
| RS-4 | $445.00 |
| RS-5 | $295.00 |
| RS-6 | $2,188.00 |
| **Total** | **$6,325.00** |

Radon (Velocity, quoted separately): ~$1,400 → **$7,725 all-in** if self-performed.
Credit path exposure is capped at **$6,325 + ~$1,400 radon = $7,725**, i.e. the credit is
*not* more expensive than doing the work — the earlier "strategic flip" note assumed an
$8,500 credit and no longer applies.

## Extraction method note

v1's text layer is flattened, which is why the original extraction showed the sentence
truncated with no figure — the clipped appearance *is* the document. v2 retains live
AcroForm fields, so `pypdf.get_fields()` recovers the full typed strings including `$6325`;
`pypdfium2` rendering with `may_draw_forms=True` shows what a human sees. Both were run —
the gap between them is the finding.
