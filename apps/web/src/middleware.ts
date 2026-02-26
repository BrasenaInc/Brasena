/**
 * Middleware runs on every request BEFORE the page renders.
 * It does two things:
 * 1. Refreshes the Supabase auth session (prevents expiry) via updateSession
 * 2. Protects routes that require authentication
 *
 * Why middleware vs page-level auth checks:
 * Middleware runs at the edge (before any JS executes), so
 * unauthenticated users never see a flash of protected content.
 */

import { NextResponse, type NextRequest } from "next/server"
import { ROUTES } from "@/config"
import { updateSession } from "@/lib/supabase/middleware"

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request)

  const pathname = request.nextUrl.pathname

  // ── Protected route groups ──────────────────────────
  const isShopRoute =
    pathname.startsWith("/home") ||
    pathname.startsWith("/categories") ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/cart") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/orders") ||
    pathname.startsWith("/account")

  const isVendorRoute = pathname.startsWith("/vendor")
  const isAdminRoute = pathname.startsWith("/admin")
  const isAuthRoute =
    pathname.startsWith("/login") || pathname.startsWith("/signup")

  // ── Redirect unauthenticated users ─────────────────
  if (!user && (isShopRoute || isVendorRoute || isAdminRoute)) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = ROUTES.LOGIN
    redirectUrl.searchParams.set("redirectTo", pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // ── Redirect authenticated users away from auth pages ──
  if (user && isAuthRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = ROUTES.SHOP
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/webhooks).*)",
  ],
}
