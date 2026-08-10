import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

// Streams a generated report PDF from deal-room/deliverables (which lives
// outside /public so it isn't statically served).
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const safe = path.basename(name); // prevent traversal
  if (!safe.endsWith(".pdf")) {
    return NextResponse.json({ error: "Not a report" }, { status: 400 });
  }
  const file = path.join(process.cwd(), "deal-room", "deliverables", safe);
  try {
    const bytes = await fs.readFile(file);
    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${safe}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
