import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { pumpUserJobs, queuePosition } from "@/lib/cockpit/jobs";

export const runtime = "nodejs";
export const maxDuration = 60;

// Poll a job. Side effect: pumps the user's queue (finalize succeeded renders,
// promote the next queued one) so progress advances while the UI polls.
export async function GET(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase, user } = auth;

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  await pumpUserJobs(supabase, user.id);

  const { data: job } = await supabase
    .from("cockpit_jobs")
    .select("status, error, result_version_id")
    .eq("id", id)
    .single();
  if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const position = job.status === "queued" ? await queuePosition(supabase, user.id, id) : 0;

  return NextResponse.json({
    status: job.status,
    error: job.error,
    resultVersionId: job.result_version_id,
    position,
  });
}
