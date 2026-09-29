import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/admin/session";

/**
 * While on, every public page shows the "under development" screen. The admin
 * panel and API keep working. Set MAINTENANCE_MODE=off to bring the site back.
 */
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE !== "off";

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
