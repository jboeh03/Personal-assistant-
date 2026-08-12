"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

function fmt(s: number) {
  if (!s || Number.isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${String(r).padStart(2, "0")}`;
}

export default function Player({ url, label }: { url: string | null; label?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WaveSurfer | null>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !url) return;
    const ws = WaveSurfer.create({
      container: containerRef.current,
      url,
      height: 48,
      waveColor: "#9db7cf",
      progressColor: "#326295",
      cursorColor: "#003a70",
      barWidth: 2,
      barGap: 1,
    });
    wsRef.current = ws;
    ws.on("ready", () => setDur(ws.getDuration()));
    ws.on("timeupdate", (t) => setCur(t));
    ws.on("play", () => setPlaying(true));
    ws.on("pause", () => setPlaying(false));
    ws.on("finish", () => setPlaying(false));
    return () => {
      ws.destroy();
      wsRef.current = null;
      setPlaying(false);
      setCur(0);
      setDur(0);
    };
  }, [url]);

  if (!url) {
    return (
      <div className="rounded-md border border-dashed border-neutral-300 p-3 text-xs text-neutral-400 dark:border-neutral-700">
        No demo rendered yet for this version.
      </div>
    );
  }

  return (
    <div className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
      {label ? <div className="mb-1 text-xs text-neutral-500">{label}</div> : null}
      <div className="flex items-center gap-3">
        <button
          onClick={() => wsRef.current?.playPause()}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#326295] text-white hover:bg-[#003a70]"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? "❚❚" : "▶"}
        </button>
        <div ref={containerRef} className="flex-1" />
        <span className="w-16 text-right text-xs tabular-nums text-neutral-500">
          {fmt(cur)} / {fmt(dur)}
        </span>
      </div>
    </div>
  );
}
