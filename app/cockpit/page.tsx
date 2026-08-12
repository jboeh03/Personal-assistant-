import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import CockpitHome from "./CockpitHome";

export const dynamic = "force-dynamic";

export default async function CockpitPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: songs } = await supabase
    .from("cockpit_songs")
    .select("id, title, status, updated_at")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  return <CockpitHome initialSongs={songs ?? []} email={user.email ?? ""} />;
}
