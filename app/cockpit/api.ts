// Tiny client fetch helpers for the cockpit UI.

export async function getJson<T = unknown>(path: string): Promise<T> {
  const r = await fetch(path, { cache: "no-store" });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error((j as { error?: string }).error || r.statusText);
  return j as T;
}

export async function postJson<T = unknown>(path: string, body: unknown): Promise<T> {
  const r = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error((j as { error?: string }).error || r.statusText);
  return j as T;
}
