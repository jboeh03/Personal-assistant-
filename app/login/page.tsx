"use client";

import { useActionState, useState } from "react";
import { createClient } from "@/lib/supabase/client";
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
  const [googlePending, setGooglePending] = useState(false);
  const [googleError, setGoogleError] = useState<string | null>(null);

  const error = googleError ?? signInState?.error ?? signUpState?.error;

  async function signInWithGoogle() {
    setGooglePending(true);
    setGoogleError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) {
      setGoogleError(error.message);
      setGooglePending(false);
    }
    // On success the browser is redirected to Google's consent screen.
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold">Personal Assistant</h1>
          <p className="text-sm text-neutral-500">Sign in to start chatting.</p>
        </div>

        <button
          type="button"
          onClick={signInWithGoogle}
          disabled={googlePending}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.583-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
            />
          </svg>
          {googlePending ? "Redirecting…" : "Continue with Google"}
        </button>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="text-xs text-neutral-400">or with email</span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
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
