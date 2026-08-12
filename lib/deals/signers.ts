// Signer identities come from env so no personal emails live in the repo.
//
//   SIGNER1_NAME / SIGNER1_EMAIL — signs first (Jeff)
//   SIGNER2_NAME / SIGNER2_EMAIL — signs second (Olivia)

export interface ConfiguredSigner {
  role: string;
  name: string;
  email: string;
}

/** Ordered signer list, or null when env is incomplete. */
export function getConfiguredSigners(): ConfiguredSigner[] | null {
  const s1name = process.env.SIGNER1_NAME;
  const s1email = process.env.SIGNER1_EMAIL;
  const s2name = process.env.SIGNER2_NAME;
  const s2email = process.env.SIGNER2_EMAIL;
  if (!s1name || !s1email || !s2name || !s2email) return null;
  return [
    { role: "Seller 1", name: s1name, email: s1email },
    { role: "Seller 2", name: s2name, email: s2email },
  ];
}
