import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  SUPABASE_ANON_KEY,
  SUPABASE_URL,
  isDealRoomOnly,
  isSupabaseConfigured,
} from "./config";

type CookieToSet = { name: string; value: string; options: CookieOptions };

/** Pages that belong to the chat app, not the deal room. */
function isChatSurface(path: string): boolean {
  return (
    path.startsWith("/login") ||
    path.startsWith("/chat") ||
    path.startsWith("/auth") ||
    path.startsWith("/api/chat")
  );
}

export async function updateSession(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // This deployment fronts only the deal room: send chat/login traffic there
  // instead of letting it fail against an unconfigured auth backend.
  if (isDealRoomOnly && isChatSurface(path)) {
    const url = request.nextUrl.clone();
    url.pathname = "/deals";
    return NextResponse.redirect(url);
  }

  // No Supabase configured — run without auth. The deal room is public by
  // design, so this keeps the app fully functional instead of 500-ing.
  if (!isSupabaseConfigured) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  // IMPORTANT: do not run code between createServerClient and getUser().
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Gate pages, but let API routes handle their own auth (they return JSON,
  // not a redirect). Login/auth/static assets and the deal room stay public.
  const isPublic =
    path.startsWith("/login") ||
    path.startsWith("/auth") ||
    path.startsWith("/api") ||
    path.startsWith("/deals") ||
    path.startsWith("/_next") ||
    path === "/favicon.ico";

  if (!user && !isPublic) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
