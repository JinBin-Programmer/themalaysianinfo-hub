import { NextRequest, NextResponse } from "next/server";

// Detects ?lang=en on any request and forwards it as a header so Server
// Components (root layout, per-page generateMetadata) can render the correct
// language on the server — without this, only the client-side toggle would
// ever show English, which Google's crawler never sees.
export function proxy(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") === "en" ? "en" : "ms";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", lang);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
