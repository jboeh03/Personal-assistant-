import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { recordTaste } from "@/lib/cockpit/taste";
import type { SuggestionStatus } from "@/lib/cockpit/types";

export const runtime = "nodejs";

// Resolve an inline suggestion (accept / reject / edit). The editor applies the
// text locally and snapshots a new version; here we record the decision + taste.
export async function POST(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase, user } = auth;

  let body: {
    action?: string;
    id?: string;
    status?: SuggestionStatus;
    replacement?: string;
    appliedVersionId?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.id || !body.status) {
    return NextResponse.json({ error: "id and status required" }, { status: 400 });
  }

  const { data: existing } = await supabase
    .from("cockpit_suggestions")
    .select("comment, judge")
    .eq("id", body.id)
    .single();

  const patch: Record<string, unknown> = { status: body.status };
  if (body.status === "edited" && typeof body.replacement === "string") {
    patch.replacement = body.replacement.slice(0, 2000);
  }
  if (body.appliedVersionId) patch.applied_version_id = body.appliedVersionId;

  const { data: updated, error } = await supabase
    .from("cockpit_suggestions")
    .update(patch)
    .eq("id", body.id)
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const tasteKind = body.status === "rejected" ? "reject" : body.status === "open" ? null : "accept";
  if (tasteKind) {
    await recordTaste(supabase, user.id, {
      kind: tasteKind,
      suggestion_id: body.id,
      note: existing ? `${existing.judge}: ${String(existing.comment).slice(0, 160)}` : null,
    });
  }

  return NextResponse.json({ suggestion: updated });
}
