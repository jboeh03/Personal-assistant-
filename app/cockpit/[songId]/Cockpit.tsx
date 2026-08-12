"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Card, Pill } from "@/app/deals/ui";
import { sectionsToLyrics } from "@/lib/cockpit/sections";
import type {
  Controls,
  Section,
  Suggestion,
  Version,
  Song,
} from "@/lib/cockpit/types";
import { getJson, postJson } from "../api";
import Player from "./Player";

type EditSection = {
  id: string | null;
  idx: number;
  kind: string;
  label: string | null;
  text: string;
};

const toEdit = (s: Section[]): EditSection[] =>
  s
    .slice()
    .sort((a, b) => a.idx - b.idx)
    .map((x) => ({ id: x.id, idx: x.idx, kind: x.kind, label: x.label, text: x.text }));

function Btn({
  onClick,
  disabled,
  children,
  variant = "primary",
}: {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  variant?: "primary" | "ghost" | "accent";
}) {
  const cls =
    variant === "primary"
      ? "bg-[#326295] text-white hover:bg-[#003a70]"
      : variant === "accent"
        ? "bg-[#b8791b] text-white hover:bg-[#8f5e13]"
        : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md px-3 py-1.5 text-sm font-semibold disabled:opacity-50 ${cls}`}
    >
      {children}
    </button>
  );
}

export default function Cockpit({
  song,
  versions: initialVersions,
  initialSections,
  initialSuggestions,
}: {
  song: Song;
  versions: Version[];
  initialSections: Section[];
  initialSuggestions: Suggestion[];
}) {
  const songId = song.id;
  const startCurrent = initialVersions.find((v) => v.id === song.current_version_id) ?? null;

  const [title, setTitle] = useState(song.title);
  const [status, setStatus] = useState(song.status);
  const [versions, setVersions] = useState<Version[]>(initialVersions);
  const [currentVersionId, setCurrentVersionId] = useState<string | null>(song.current_version_id);
  const [sections, setSections] = useState<EditSection[]>(
    initialSections.length ? toEdit(initialSections) : [{ id: null, idx: 0, kind: "verse", label: "Verse 1", text: "" }],
  );
  const [controls, setControls] = useState<Controls>(
    (startCurrent?.controls as Controls) ?? { tempo: 64, key: "C", style: "", model: "" },
  );
  const [suggestions, setSuggestions] = useState<Suggestion[]>(initialSuggestions);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [err, setErr] = useState("");
  const [panel, setPanel] = useState<Record<string, string> | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelContext, setPanelContext] = useState("");
  const [compareId, setCompareId] = useState<string | null>(null);
  const [job, setJob] = useState<{ id: string; status: string; position: number; error: string | null } | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentVersion = useMemo(
    () => versions.find((v) => v.id === currentVersionId) ?? null,
    [versions, currentVersionId],
  );
  const compareVersion = useMemo(
    () => versions.find((v) => v.id === compareId) ?? null,
    [versions, compareId],
  );
  const lyrics = useMemo(() => sectionsToLyrics(sections), [sections]);

  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current); }, []);

  function touch<T>(fn: () => T): T {
    setDirty(true);
    return fn();
  }

  function setSectionText(i: number, text: string) {
    touch(() => setSections((s) => s.map((x, j) => (j === i ? { ...x, text } : x))));
  }
  function setSectionLabel(i: number, label: string) {
    touch(() => setSections((s) => s.map((x, j) => (j === i ? { ...x, label } : x))));
  }
  function addSection() {
    touch(() =>
      setSections((s) => [...s, { id: null, idx: s.length, kind: "verse", label: `Section ${s.length + 1}`, text: "" }]),
    );
  }
  function removeSection(i: number) {
    touch(() => setSections((s) => s.filter((_, j) => j !== i).map((x, k) => ({ ...x, idx: k }))));
  }

  async function saveTitle() {
    try {
      await postJson("/api/cockpit/songs", { action: "patch", id: songId, patch: { title } });
    } catch { /* ignore */ }
  }

  async function ensureVersion(): Promise<string> {
    if (!dirty && currentVersionId) return currentVersionId;
    const { version, sections: secs } = await postJson<{ version: Version; sections: Section[] }>(
      "/api/cockpit/versions",
      { songId, lyrics, controls, parentId: currentVersionId, label: null },
    );
    setVersions((v) => [...v, version]);
    setCurrentVersionId(version.id);
    setSections(toEdit(secs));
    setSuggestions([]);
    setDirty(false);
    return version.id;
  }

  async function run(name: string, fn: () => Promise<void>) {
    setBusy(name);
    setErr("");
    try {
      await fn();
    } catch (e) {
      setErr(e instanceof Error ? e.message : `${name} failed`);
    } finally {
      setBusy(null);
    }
  }

  const runInline = () =>
    run("inline", async () => {
      const vid = await ensureVersion();
      const { suggestions: sug } = await postJson<{ suggestions: Suggestion[] }>(
        "/api/cockpit/judge-inline",
        { versionId: vid },
      );
      setSuggestions((prev) => [...prev.filter((p) => p.status === "open"), ...sug]);
    });

  const runPanel = () =>
    run("panel", async () => {
      const vid = await ensureVersion();
      const { review } = await postJson<{ review: Record<string, string> }>(
        "/api/cockpit/judge-panel",
        { versionId: vid, context: panelContext },
      );
      setPanel(review);
      setPanelOpen(true);
    });

  const regenerate = () =>
    run("regen", async () => {
      const { jobId, versionId, status: st } = await postJson<{ jobId: string; versionId: string; status: string }>(
        "/api/cockpit/regenerate",
        { songId, lyrics, controls, parentId: currentVersionId },
      );
      setCurrentVersionId(versionId);
      setDirty(false);
      setJob({ id: jobId, status: st, position: 0, error: null });
      startPolling(jobId);
    });

  function startPolling(jobId: string) {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      try {
        const j = await getJson<{ status: string; position: number; error: string | null; resultVersionId: string | null }>(
          `/api/cockpit/jobs?id=${jobId}`,
        );
        setJob({ id: jobId, status: j.status, position: j.position, error: j.error });
        if (j.status === "done" || j.status === "error") {
          if (pollRef.current) clearInterval(pollRef.current);
          pollRef.current = null;
          if (j.status === "done") await refetchSong(j.resultVersionId);
        }
      } catch { /* keep polling */ }
    }, 3000);
  }

  async function refetchSong(focusVersionId?: string | null) {
    const data = await getJson<{ song: Song; versions: Version[]; sections: Section[]; suggestions: Suggestion[] }>(
      `/api/cockpit/songs?id=${songId}`,
    );
    setVersions(data.versions);
    const cur = focusVersionId ?? data.song.current_version_id;
    setCurrentVersionId(cur);
    setStatus(data.song.status);
    if (cur === data.song.current_version_id) {
      setSections(data.sections.length ? toEdit(data.sections) : sections);
      setSuggestions(data.suggestions);
      const cv = data.versions.find((v) => v.id === cur);
      if (cv) setControls((cv.controls as Controls) ?? controls);
      setDirty(false);
    }
  }

  async function loadVersion(vid: string) {
    setBusy("load");
    try {
      const { version, sections: secs, suggestions: sug } = await getJson<{
        version: Version; sections: Section[]; suggestions: Suggestion[];
      }>(`/api/cockpit/versions?id=${vid}`);
      setCurrentVersionId(vid);
      setSections(secs.length ? toEdit(secs) : sections);
      setSuggestions(sug);
      setControls((version.controls as Controls) ?? controls);
      setDirty(false);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "load failed");
    } finally {
      setBusy(null);
    }
  }

  async function pickCurrent(vid: string) {
    await postJson("/api/cockpit/songs", { action: "patch", id: songId, patch: { current_version_id: vid } });
    await loadVersion(vid);
  }

  async function applySuggestion(sug: Suggestion) {
    const i = sections.findIndex((s) => s.id && s.id === sug.section_id);
    if (i >= 0 && sug.replacement != null) {
      const lines = sections[i].text.split("\n");
      if (sug.line_start == null) {
        setSectionText(i, sug.replacement);
      } else {
        const a = sug.line_start;
        const b = sug.line_end ?? sug.line_start;
        const next = [...lines.slice(0, a), ...sug.replacement.split("\n"), ...lines.slice(b + 1)];
        setSectionText(i, next.join("\n"));
      }
    }
    setSuggestions((prev) => prev.filter((p) => p.id !== sug.id));
    try {
      await postJson("/api/cockpit/suggestions", { action: "resolve", id: sug.id, status: "accepted" });
    } catch { /* ignore */ }
  }

  async function dismissSuggestion(sug: Suggestion) {
    setSuggestions((prev) => prev.filter((p) => p.id !== sug.id));
    try {
      await postJson("/api/cockpit/suggestions", { action: "resolve", id: sug.id, status: "rejected" });
    } catch { /* ignore */ }
  }

  async function toggleFinished() {
    const next = status === "finished" ? "draft" : "finished";
    setStatus(next);
    await postJson("/api/cockpit/songs", { action: "patch", id: songId, patch: { status: next } });
  }

  const openSuggestions = suggestions.filter((s) => s.status === "open");
  const labelForSection = (id: string | null) => sections.find((s) => s.id === id)?.label ?? "section";

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* header */}
      <div className="mb-5 flex items-center gap-3">
        <Link href="/cockpit" className="text-sm text-neutral-500 hover:underline">← songs</Link>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={saveTitle}
          className="flex-1 bg-transparent text-xl font-semibold text-[#101820] outline-none dark:text-[#eef4f8]"
        />
        <Pill cls={status === "finished" ? "bg-green-100 text-green-800" : "bg-neutral-200 text-neutral-700"}>{status}</Pill>
        <Btn variant="ghost" onClick={toggleFinished}>{status === "finished" ? "Reopen" : "Finish"}</Btn>
      </div>

      {err ? <div className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{err}</div> : null}

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        {/* LEFT — editor + suggestions */}
        <div className="space-y-4">
          <Card className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Lyrics</div>
              {dirty ? <span className="text-xs text-[#b8791b]">unsaved edits</span> : null}
            </div>
            <div className="space-y-3">
              {sections.map((s, i) => {
                const n = openSuggestions.filter((g) => g.section_id === s.id).length;
                return (
                  <div key={i} className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
                    <div className="mb-1 flex items-center gap-2">
                      <input
                        value={s.label ?? ""}
                        onChange={(e) => setSectionLabel(i, e.target.value)}
                        className="w-40 rounded bg-neutral-100 px-2 py-0.5 text-xs font-semibold dark:bg-neutral-800"
                      />
                      {n > 0 ? <Pill cls="bg-amber-100 text-amber-800">{n} note{n > 1 ? "s" : ""}</Pill> : null}
                      <button onClick={() => removeSection(i)} className="ml-auto text-xs text-neutral-400 hover:text-red-600">remove</button>
                    </div>
                    <textarea
                      value={s.text}
                      onChange={(e) => setSectionText(i, e.target.value)}
                      className="h-28 w-full resize-y rounded bg-white px-2 py-1 font-mono text-sm dark:bg-neutral-900"
                    />
                  </div>
                );
              })}
              <button onClick={addSection} className="text-sm text-[#326295] hover:underline">+ add section</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Btn onClick={runInline} disabled={!!busy}>{busy === "inline" ? "Judging…" : "Inline feedback"}</Btn>
              <Btn variant="ghost" onClick={runPanel} disabled={!!busy}>{busy === "panel" ? "Panel…" : "Run 5-judge panel"}</Btn>
              <Btn variant="accent" onClick={regenerate} disabled={!!busy}>{busy === "regen" ? "Queuing…" : "Regenerate demo"}</Btn>
            </div>
          </Card>

          {openSuggestions.length > 0 ? (
            <Card className="p-4">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Inline notes</div>
              <div className="space-y-2">
                {openSuggestions.map((sug) => (
                  <div key={sug.id} className="rounded-md border border-neutral-200 p-2 text-sm dark:border-neutral-800">
                    <div className="mb-1 flex items-center gap-2">
                      <Pill cls={sug.kind === "praise" ? "bg-green-100 text-green-800" : sug.kind === "warning" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}>{sug.kind}</Pill>
                      <span className="text-xs text-neutral-400">{labelForSection(sug.section_id)}{sug.line_start != null ? ` · line ${sug.line_start}${sug.line_end != null && sug.line_end !== sug.line_start ? `–${sug.line_end}` : ""}` : ""}</span>
                    </div>
                    <div className="text-neutral-700 dark:text-neutral-200">{sug.comment}</div>
                    {sug.replacement ? (
                      <div className="mt-1 whitespace-pre-wrap rounded bg-neutral-50 px-2 py-1 font-mono text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">{sug.replacement}</div>
                    ) : null}
                    <div className="mt-2 flex gap-2">
                      {sug.replacement ? <Btn onClick={() => applySuggestion(sug)}>Apply</Btn> : null}
                      <Btn variant="ghost" onClick={() => dismissSuggestion(sug)}>Dismiss</Btn>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ) : null}
        </div>

        {/* RIGHT — controls, player, versions */}
        <div className="space-y-4">
          <Card className="p-4">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Controls</div>
            <div className="grid grid-cols-2 gap-2">
              <label className="text-xs text-neutral-500">Tempo (BPM)
                <input type="number" value={controls.tempo ?? ""} onChange={(e) => touch(() => setControls((c) => ({ ...c, tempo: Number(e.target.value) || undefined })))}
                  className="mt-0.5 w-full rounded border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
              </label>
              <label className="text-xs text-neutral-500">Key
                <input value={controls.key ?? ""} onChange={(e) => touch(() => setControls((c) => ({ ...c, key: e.target.value })))}
                  className="mt-0.5 w-full rounded border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
              </label>
            </div>
            <label className="mt-2 block text-xs text-neutral-500">Style prompt
              <textarea value={controls.style ?? ""} onChange={(e) => touch(() => setControls((c) => ({ ...c, style: e.target.value })))}
                className="mt-0.5 h-20 w-full rounded border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
            </label>
            <label className="mt-2 block text-xs text-neutral-500">Model (blank = minimax/music-2.6)
              <input value={controls.model ?? ""} onChange={(e) => touch(() => setControls((c) => ({ ...c, model: e.target.value })))}
                className="mt-0.5 w-full rounded border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
            </label>
          </Card>

          <Card className="p-4">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Player</div>
            <Player url={currentVersion?.audio_url ?? null} label={currentVersion?.label ?? "current version"} />
            {compareVersion ? (
              <div className="mt-2">
                <Player url={compareVersion.audio_url ?? null} label={`A/B: ${compareVersion.label ?? "version"}`} />
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <pre className="max-h-40 overflow-auto whitespace-pre-wrap rounded bg-neutral-50 p-2 dark:bg-neutral-800">{currentVersion?.lyrics}</pre>
                  <pre className="max-h-40 overflow-auto whitespace-pre-wrap rounded bg-neutral-50 p-2 dark:bg-neutral-800">{compareVersion.lyrics}</pre>
                </div>
                <button onClick={() => setCompareId(null)} className="mt-1 text-xs text-neutral-400 hover:underline">close A/B</button>
              </div>
            ) : null}
          </Card>

          <Card className="p-4">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">Versions</div>
            <div className="space-y-1">
              {versions.slice().reverse().map((v) => (
                <div key={v.id} className={`flex items-center gap-2 rounded px-2 py-1 text-sm ${v.id === currentVersionId ? "bg-[#eaf1f8] dark:bg-[#16222e]" : ""}`}>
                  <span className="flex-1 truncate">
                    {v.label ?? new Date(v.created_at).toLocaleString()} {v.audio_url ? "♪" : "·"}
                  </span>
                  <button onClick={() => loadVersion(v.id)} className="text-xs text-[#326295] hover:underline">load</button>
                  <button onClick={() => pickCurrent(v.id)} className="text-xs text-neutral-500 hover:underline">pick</button>
                  <button onClick={() => setCompareId(v.id)} className="text-xs text-neutral-500 hover:underline">A/B</button>
                </div>
              ))}
              {versions.length === 0 ? <div className="text-xs text-neutral-400">No versions yet — edit lyrics and Regenerate.</div> : null}
            </div>
          </Card>
        </div>
      </div>

      {/* panel modal */}
      {panelOpen && panel ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4" onClick={() => setPanelOpen(false)}>
          <Card className="max-h-[85vh] w-full max-w-2xl overflow-auto p-5" >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">5-Judge Panel</h3>
              <button onClick={() => setPanelOpen(false)} className="text-sm text-neutral-400">close</button>
            </div>
            <div className="mb-3">
              <input value={panelContext} onChange={(e) => setPanelContext(e.target.value)} placeholder="context for the panel (what you're fixing / the goal)"
                className="w-full rounded border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900" />
            </div>
            {(["hardtruth", "craft", "vocal", "aandr", "verdict"] as const).map((k) =>
              panel[k] ? (
                <details key={k} className="mb-2 rounded border border-neutral-200 p-2 dark:border-neutral-800" open={k === "verdict"}>
                  <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wide text-neutral-600">{k}</summary>
                  <pre className="mt-2 whitespace-pre-wrap text-sm text-neutral-700 dark:text-neutral-200">{panel[k]}</pre>
                </details>
              ) : null,
            )}
          </Card>
        </div>
      ) : null}

      {/* job toast */}
      {job && job.status !== "done" ? (
        <div className="fixed bottom-4 right-4 z-30 rounded-lg bg-[#101820] px-4 py-3 text-sm text-white shadow-lg">
          {job.status === "error" ? (
            <span className="text-red-300">Render failed: {job.error}</span>
          ) : job.status === "queued" ? (
            <span>Render queued{job.position ? ` (position ${job.position})` : ""}…</span>
          ) : (
            <span>Rendering demo… (≈1–3 min)</span>
          )}
        </div>
      ) : null}
    </div>
  );
}
