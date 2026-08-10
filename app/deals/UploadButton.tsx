"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { MediaKind } from "@/lib/deals/types";

export function UploadButton({
  kind,
  findingId,
  label,
  accept = "image/*,application/pdf",
}: {
  kind: MediaKind;
  findingId?: string;
  label: string;
  accept?: string;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("kind", kind);
    if (findingId) fd.append("findingId", findingId);
    fd.append("label", file.name);
    try {
      await fetch("/api/deals/uploads", { method: "POST", body: fd });
      router.refresh();
    } finally {
      setBusy(false);
      if (ref.current) ref.current.value = "";
    }
  }

  return (
    <label
      className={
        "inline-flex cursor-pointer items-center gap-1 rounded-md border border-[#e5e9ec] px-2 py-1 text-xs font-medium text-neutral-700 transition hover:bg-[#f4f6f8] dark:border-[#2a3a48] dark:text-neutral-300 dark:hover:bg-[#182530] " +
        (busy ? "opacity-50" : "")
      }
    >
      <span aria-hidden className="text-[#98a4ae]">+</span>
      {busy ? "Uploading…" : label}
      <input
        ref={ref}
        type="file"
        accept={accept}
        className="hidden"
        onChange={onChange}
        disabled={busy}
      />
    </label>
  );
}
