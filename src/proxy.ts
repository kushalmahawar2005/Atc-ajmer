import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/admin/session";

/**
 * While on, every public page shows the "under development" screen. The admin
 * panel and API keep working. Set MAINTENANCE_MODE=off to bring the site back.
 */
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE !== "off";

/**
 * Lets the client see the real site during maintenance: opening any page with
 * ?preview=<key> stores the key in a cookie, and requests carrying it skip the
 * maintenance screen. Unset means no bypass. The key lives in the environment
 * because the repository is public.
 */
const PREVIEW_KEY = process.env.MAINTENANCE_PREVIEW_KEY;
const PREVIEW_COOKIE = "atc_preview";

/**
 * Gate on the presence of the admin cookie so unauthenticated requests never
 * reach a page that would query the database. The signature is still verified
 * per page by requireAdmin(); this only avoids the round trip.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    if (pathname !== "/admin/login" && !request.cookies.get(SESSION_COOKIE)) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (MAINTENANCE_MODE && PREVIEW_KEY) {
    if (request.nextUrl.searchParams.get("preview") === PREVIEW_KEY) {
      const url = request.nextUrl.clone();
      url.searchParams.delete("preview");
      const response = NextResponse.redirect(url);
      response.cookies.set(PREVIEW_COOKIE, PREVIEW_KEY, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 14,
        path: "/",
      });
      return response;
    }
    if (request.cookies.get(PREVIEW_COOKIE)?.value === PREVIEW_KEY) {
      const response = NextResponse.next();
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
      return response;
    }
  }

  if (MAINTENANCE_MODE && pathname !== "/maintenance") {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    url.search = "";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Everything except API routes, Next internals and files with an extension
  // (images, fonts, favicon, sw.js, robots.txt, …).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
