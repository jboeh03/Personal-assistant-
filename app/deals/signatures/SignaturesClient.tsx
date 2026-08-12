"use client";

// Signatures tab: create a request (PDF + title), track per-signer status,
// sign via hosted link, nudge the other signer, and land the completed PDF in
// the vault. Fetching goes through GET /api/deals/signatures, which also runs
// the DocuSeal poll-on-load sync.

import { useCallback, useEffect, useRef, useState } from "react";
import type { SignatureRequest, SignatureSigner } from "@/lib/deals/types";
import { Card, Pill, SectionTitle } from "../ui";

type SignatureItem = SignatureRequest & { signedUrl?: string | null };

interface ListResponse {
  items: SignatureItem[];
  docusealConfigured: boolean;
  syncError: string | null;
}

const SIGNER_PILL: Record<SignatureSigner["status"], string> = {
  awaiting: "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  opened: "bg-[#fdf3e3] text-[#8a5a00] dark:bg-[#3a2f14] dark:text-[#e3b95d]",
  completed: "bg-[#e5f2e9] text-[#1a6b3c] dark:bg-[#14311f] dark:text-[#7cc79a]",
  declined: "bg-[#fbe9e7] text-[#b91c1c] dark:bg-[#391b18] dark:text-[#e06666]",
};

const SIGNER_LABEL: Record<SignatureSigner["status"], string> = {
  awaiting: "awaiting",
  opened: "viewed",
  completed: "signed ✓",
  declined: "declined",
};

export function SignaturesClient() {
  const [data, setData] = useState<ListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/deals/signatures", { cache: "no-store" });
      const json = (await res.json()) as ListResponse;
      setData(json);
    } catch {
      setError("Could not load signature requests.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="space-y-6">
      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <SectionTitle>Signatures</SectionTitle>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Send a document for e-signature — you sign first, then it goes to
              the other signer. The completed PDF files itself into the vault.
            </p>
          </div>
          <NewRequestForm
            disabled={!data?.docusealConfigured}
            onCreated={() => {
              setNotice("Request created — your signing link is ready below.");
              void load();
            }}
            onError={setError}
          />
        </div>

        {data && !data.docusealConfigured ? (
          <Banner tone="warn">
            Signing service not connected yet — set{" "}
            <code className="font-mono text-xs">DOCUSEAL_URL</code> and{" "}
            <code className="font-mono text-xs">DOCUSEAL_API_TOKEN</code> to
            enable sending documents for signature.
          </Banner>
        ) : null}
        {data?.syncError ? <Banner tone="warn">{data.syncError}</Banner> : null}
        {error ? <Banner tone="error">{error}</Banner> : null}
        {notice ? <Banner tone="ok">{notice}</Banner> : null}

        {loading ? (
          <p className="mt-4 text-sm text-neutral-400">Loading…</p>
        ) : data && data.items.length ? (
          <ul className="mt-4 space-y-3">
            {data.items.map((item) => (
              <RequestCard
                key={item.id}
                item={item}
                onChanged={() => void load()}
                onError={setError}
              />
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-neutral-400">
            No signature requests yet.
          </p>
        )}
      </Card>
    </div>
  );
}

function Banner({
  tone,
  children,
}: {
  tone: "warn" | "error" | "ok";
  children: React.ReactNode;
}) {
  const cls =
    tone === "error"
      ? "border-[#f3c1bd] bg-[#fbe9e7] text-[#8a1f1a] dark:border-[#5c2622] dark:bg-[#391b18] dark:text-[#e8a29d]"
      : tone === "ok"
        ? "border-[#bfe0cb] bg-[#e5f2e9] text-[#1a5c34] dark:border-[#245c3a] dark:bg-[#14311f] dark:text-[#9ed4b2]"
        : "border-[#ecd9b0] bg-[#fdf3e3] text-[#7a5200] dark:border-[#5c4a1e] dark:bg-[#3a2f14] dark:text-[#dbb45e]";
  return (
    <div className={"mt-4 rounded-lg border px-3 py-2 text-sm " + cls}>
      {children}
    </div>
  );
}

function NewRequestForm({
  disabled,
  onCreated,
  onError,
}: {
  disabled?: boolean;
  onCreated: () => void;
  onError: (message: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file || !title.trim() || busy) return;
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("title", title.trim());
      const res = await fetch("/api/deals/signatures", {
        method: "POST",
        body: fd,
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        onError(json.error ?? "Could not create the signature request.");
        return;
      }
      setTitle("");
      if (fileRef.current) fileRef.current.value = "";
      onCreated();
    } catch {
      onError("Could not create the signature request.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-wrap items-center gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Document title"
        className="w-44 rounded-md border border-[#e5e9ec] bg-white px-2 py-1.5 text-sm outline-none focus:border-[#326295] dark:border-[#2a3a48] dark:bg-[#0d141c] dark:text-neutral-200"
        disabled={disabled || busy}
      />
      <input
        ref={fileRef}
        type="file"
        accept="application/pdf"
        className="w-52 text-xs text-neutral-500 file:mr-2 file:rounded-md file:border file:border-[#e5e9ec] file:bg-white file:px-2 file:py-1 file:text-xs file:font-medium dark:file:border-[#2a3a48] dark:file:bg-[#0d141c] dark:file:text-neutral-300"
        disabled={disabled || busy}
      />
      <button
        type="submit"
        disabled={disabled || busy || !title.trim()}
        className="rounded-md bg-[#101820] px-3 py-1.5 text-sm font-medium text-white transition hover:bg-[#22303c] disabled:opacity-40 dark:bg-[#c6dae7] dark:text-[#0d141c]"
      >
        {busy ? "Sending…" : "Send for signature"}
      </button>
    </form>
  );
}

function RequestCard({
  item,
  onChanged,
  onError,
}: {
  item: SignatureItem;
  onChanged: () => void;
  onError: (message: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const nextSigner = item.signers.find((s) => s.status !== "completed");

  async function remind() {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/deals/signatures/${item.id}/remind`, {
        method: "POST",
      });
      const json = (await res.json()) as {
        ok?: boolean;
        reminded?: string;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        onError(json.error ?? "Could not send the reminder.");
      }
      onChanged();
    } finally {
      setBusy(false);
    }
  }

  async function copy(signer: SignatureSigner) {
    if (!signer.signUrl) return;
    await navigator.clipboard.writeText(signer.signUrl);
    setCopied(signer.role);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <li className="rounded-lg border border-[#f4f6f8] p-4 dark:border-[#182530]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#101820] dark:text-[#eef4f8]">
            {item.title}
          </span>
          {item.status === "completed" ? (
            <Pill cls={SIGNER_PILL.completed}>completed</Pill>
          ) : item.status === "declined" ? (
            <Pill cls={SIGNER_PILL.declined}>declined</Pill>
          ) : (
            <Pill cls={SIGNER_PILL.opened}>in progress</Pill>
          )}
        </div>
        <span className="text-xs text-neutral-400">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>

      <ul className="mt-3 space-y-1.5">
        {item.signers.map((s) => {
          const isNext = item.status === "pending" && s.role === nextSigner?.role;
          return (
            <li
              key={s.role}
              className="flex flex-wrap items-center gap-2 text-sm"
            >
              <span className="w-36 text-neutral-700 dark:text-neutral-300">
                {s.name}
              </span>
              <Pill cls={SIGNER_PILL[s.status]}>{SIGNER_LABEL[s.status]}</Pill>
              {isNext && s.signUrl ? (
                <a
                  href={s.signUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-[#326295] px-2 py-0.5 text-xs font-medium text-white transition hover:bg-[#003a70]"
                >
                  Sign now →
                </a>
              ) : null}
              {item.status === "pending" && s.signUrl ? (
                <button
                  type="button"
                  onClick={() => void copy(s)}
                  className="rounded-md border border-[#e5e9ec] px-2 py-0.5 text-xs text-neutral-600 transition hover:bg-[#f4f6f8] dark:border-[#2a3a48] dark:text-neutral-300 dark:hover:bg-[#182530]"
                >
                  {copied === s.role ? "Copied ✓" : "Copy link"}
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {item.status === "pending" && nextSigner ? (
          <button
            type="button"
            onClick={() => void remind()}
            disabled={busy}
            className="rounded-md border border-[#e5e9ec] px-2 py-1 text-xs font-medium text-neutral-600 transition hover:bg-[#f4f6f8] disabled:opacity-40 dark:border-[#2a3a48] dark:text-neutral-300 dark:hover:bg-[#182530]"
          >
            {busy ? "Sending…" : `Email reminder to ${nextSigner.name}`}
          </button>
        ) : null}
        {item.signedUrl ? (
          <a
            href={item.signedUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-[#003a70] hover:underline dark:text-[#c6dae7]"
          >
            Signed PDF (in vault) →
          </a>
        ) : null}
      </div>
    </li>
  );
}
