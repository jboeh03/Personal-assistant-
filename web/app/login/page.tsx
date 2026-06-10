"use client";

import { useActionState } from "react";
import { signIn, signUp } from "./actions";

export default function LoginPage() {
  const [signInState, signInAction, signInPending] = useActionState(
    signIn,
    undefined,
  );
  const [signUpState, signUpAction, signUpPending] = useActionState(
    signUp,
    undefined,
  );

  const error = signInState?.error ?? signUpState?.error;

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold">Personal Assistant</h1>
          <p className="text-sm text-neutral-500">Sign in to start chatting.</p>
        </div>

        <form className="space-y-3">
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
          />
          <input
            name="password"
            type="password"
            required
            minLength={6}
            placeholder="Password (min 6 chars)"
            autoComplete="current-password"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
          />

          {error ? (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          ) : null}

          <div className="flex gap-2">
            <button
              formAction={signInAction}
              disabled={signInPending}
              className="flex-1 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-neutral-900"
            >
              {signInPending ? "Signing in…" : "Sign in"}
            </button>
            <button
              formAction={signUpAction}
              disabled={signUpPending}
              className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium disabled:opacity-50 dark:border-neutral-700"
            >
              {signUpPending ? "Creating…" : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
