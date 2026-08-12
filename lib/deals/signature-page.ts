// Appends a standard signature page to a PDF and returns the merged bytes plus
// DocuSeal field placements for that page.
//
// Because this code draws the page, it knows the exact coordinates — no manual
// field-dragging in DocuSeal. pdf-lib uses a bottom-left origin in points;
// DocuSeal areas use top-left-origin fractions of the page, so we convert.

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { DocuSealField } from "@/lib/docuseal";

const PAGE_W = 612; // US Letter, points
const PAGE_H = 792;
const MARGIN = 72;

const SIG_BOX_W = 260;
const SIG_BOX_H = 56;
const DATE_BOX_W = 130;
const DATE_BOX_H = 28;

export interface SignaturePageSigner {
  role: string;
  name: string;
}

export interface SignaturePageResult {
  pdf: Buffer;
  fields: DocuSealField[];
  /** 0-based index of the appended page in the merged document. */
  pageIndex: number;
}

/** Convert a pdf-lib rect (bottom-left origin, points) to a DocuSeal area. */
function toArea(
  x: number,
  yBottom: number,
  w: number,
  h: number,
  page: number,
) {
  return {
    x: x / PAGE_W,
    y: (PAGE_H - yBottom - h) / PAGE_H,
    w: w / PAGE_W,
    h: h / PAGE_H,
    page,
  };
}

export async function appendSignaturePage(
  source: Buffer,
  title: string,
  signers: SignaturePageSigner[],
): Promise<SignaturePageResult> {
  const doc = await PDFDocument.load(source);
  const pageIndex = doc.getPageCount();
  const page = doc.addPage([PAGE_W, PAGE_H]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const gray = rgb(0.45, 0.45, 0.45);
  const line = rgb(0.7, 0.7, 0.7);

  page.drawText("Signature Page", {
    x: MARGIN,
    y: PAGE_H - 90,
    size: 20,
    font: bold,
  });
  page.drawText(title, {
    x: MARGIN,
    y: PAGE_H - 116,
    size: 12,
    font,
    maxWidth: PAGE_W - 2 * MARGIN,
  });
  page.drawText(
    "This signature page is appended to and made a part of the document titled above.",
    { x: MARGIN, y: PAGE_H - 140, size: 10, font, color: gray },
  );

  const fields: DocuSealField[] = [];
  let blockTop = PAGE_H - 200; // top edge of the first signer block

  for (const signer of signers) {
    page.drawText(signer.name, {
      x: MARGIN,
      y: blockTop,
      size: 12,
      font: bold,
    });

    const sigBottom = blockTop - 24 - SIG_BOX_H;
    // Signature ruled line + caption
    page.drawLine({
      start: { x: MARGIN, y: sigBottom },
      end: { x: MARGIN + SIG_BOX_W, y: sigBottom },
      thickness: 1,
      color: line,
    });
    page.drawText("Signature", {
      x: MARGIN,
      y: sigBottom - 14,
      size: 9,
      font,
      color: gray,
    });

    // Date ruled line + caption
    const dateX = MARGIN + SIG_BOX_W + 48;
    const dateBottom = sigBottom;
    page.drawLine({
      start: { x: dateX, y: dateBottom },
      end: { x: dateX + DATE_BOX_W, y: dateBottom },
      thickness: 1,
      color: line,
    });
    page.drawText("Date", {
      x: dateX,
      y: dateBottom - 14,
      size: 9,
      font,
      color: gray,
    });

    fields.push(
      {
        name: `${signer.name} — signature`,
        role: signer.role,
        type: "signature",
        required: true,
        areas: [toArea(MARGIN, sigBottom, SIG_BOX_W, SIG_BOX_H, pageIndex)],
      },
      {
        name: `${signer.name} — date`,
        role: signer.role,
        type: "date",
        required: true,
        areas: [
          toArea(dateX, dateBottom, DATE_BOX_W, DATE_BOX_H, pageIndex),
        ],
      },
    );

    blockTop = sigBottom - 90; // next block below this one
  }

  const bytes = await doc.save();
  return { pdf: Buffer.from(bytes), fields, pageIndex };
}
