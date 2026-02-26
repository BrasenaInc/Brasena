/**
 * Supabase session refresh for Next.js middleware.
 * Exports updateSession so the root middleware can refresh the auth session
 * on every request (keeping tokens valid) without duplicating client/cookie logic.
 */

import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"
import type { Database } from "@/types/supabase"
import { config } from "@/config"

type CookieEntry = { name: string; value: string; options?: Record<string, unknown> }

export async function updateSession(
  request: NextRequest
): Promise<{ response: NextResponse; user: { id: string } | null }> {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient<Database>(
    config.supabase.url,
    config.supabase.anonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: CookieEntry[]) {
          cookiesToSet.forEach(({ name, value }: CookieEntry) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }: CookieEntry) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return {
    response: supabaseResponse,
    user: user ? { id: user.id } : null,
  }
}
