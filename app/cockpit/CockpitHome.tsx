"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Pill } from "@/app/deals/ui";
import { postJson } from "./api";

type SongRow = { id: string; title: string; status: string; updated_at: string };

export default function CockpitHome({
  initialSongs,
  email,
}: {
  initialSongs: SongRow[];
  email: string;
}) {
  const router = useRouter();
  const [songs, setSongs] = useState<SongRow[]>(initialSongs);
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function create() {
    if (!title.trim() && !lyrics.trim()) return;
    setBusy(true);
    setErr("");
    try {
      const { song } = await postJson<{ song: SongRow }>("/api/cockpit/songs", {
        action: "create",
        title: title.trim() || "Untitled",
        lyrics: lyrics.trim() || undefined,
      });
      router.push(`/cockpit/${song.id}`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "create failed");
      setBusy(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this song and all its versions?")) return;
    setSongs((s) => s.filter((x) => x.id !== id));
    try {
      await postJson("/api/cockpit/songs", { action: "delete", id });
    } catch {
      /* optimistic; ignore */
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-semibold text-[#101820] dark:text-[#eef4f8]">
          Song Cockpit
        </h1>
        <span className="text-xs text-neutral-500">{email}</span>
      </div>

      <Card className="mb-8 p-4">
        <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          New song
        </div>
        <input
          className="mb-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="mb-3 h-40 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 font-mono text-sm dark:border-neutral-700 dark:bg-neutral-900"
          placeholder={"Paste a lyric to start editing (optional).\n\n[Verse 1]\n...\n\n[Chorus]\n..."}
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
        />
        {err ? <div className="mb-2 text-sm text-red-600">{err}</div> : null}
        <button
          onClick={create}
          disabled={busy}
          className="rounded-md bg-[#326295] px-4 py-2 text-sm font-semibold text-white hover:bg-[#003a70] disabled:opacity-50"
        >
          {busy ? "Creating…" : "Create & open"}
        </button>
      </Card>

      <div className="space-y-2">
        {songs.length === 0 ? (
          <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500 dark:border-neutral-700">
            No songs yet. Create one above.
          </div>
        ) : (
          songs.map((s) => (
            <Card key={s.id} className="flex items-center justify-between p-3">
              <button
                onClick={() => router.push(`/cockpit/${s.id}`)}
                className="flex flex-1 items-center gap-3 text-left"
              >
                <span className="font-medium text-[#101820] dark:text-[#eef4f8]">
                  {s.title}
                </span>
                <Pill
                  cls={
                    s.status === "finished"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                      : "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  }
                >
                  {s.status}
                </Pill>
              </button>
              <button
                onClick={() => remove(s.id)}
                className="ml-3 text-xs text-neutral-400 hover:text-red-600"
              >
                Delete
              </button>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
