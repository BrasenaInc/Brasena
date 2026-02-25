import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"
import { config, ROUTES } from "@/config"

/**
 * Middleware runs on every request BEFORE the page renders.
 * It does two things:
 * 1. Refreshes the Supabase auth session (prevents expiry)
 * 2. Protects routes that require authentication
 *
 * Why middleware vs page-level auth checks:
 * Middleware runs at the edge (before any JS executes), so
 * unauthenticated users never see a flash of protected content.
 */
export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    config.supabase.url,
    config.supabase.anonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session - must be called before any auth checks
  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  // ── Protected route groups ──────────────────────────
  const isShopRoute    = pathname.startsWith("/home") ||
                         pathname.startsWith("/categories") ||
                         pathname.startsWith("/products") ||
                         pathname.startsWith("/cart") ||
                         pathname.startsWith("/checkout") ||
                         pathname.startsWith("/orders") ||
                         pathname.startsWith("/account")

  const isVendorRoute  = pathname.startsWith("/vendor")
  const isAdminRoute   = pathname.startsWith("/admin")
  const isAuthRoute    = pathname.startsWith("/login") ||
                         pathname.startsWith("/signup")

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

  return supabaseResponse
}

export const config_middleware = {
  matcher: [
    // Skip static files and API routes that handle their own auth
    "/((?!_next/static|_next/image|favicon.ico|api/webhooks).*)",
  ],
}
