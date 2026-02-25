import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { config } from "@/config"

/**
 * Server-side Supabase instance.
 * Use this in Server Components, Server Actions, and Route Handlers.
 *
 * Why: Server components can't use browser APIs, so we need
 * a separate client that reads/writes cookies via Next.js headers.
 * This is what allows auth state to persist across page loads.
 */
export async function createServerSupabaseClient() {
  const cookieStore = await cookies()

  return createServerClient(
    config.supabase.url,
    config.supabase.anonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
          try {
            cookiesToSet.forEach(({ name, value, options }: { name: string; value: string; options?: Record<string, unknown> }) => {
              cookieStore.set(name, value, options)
            })
          } catch {
            // Server Component - cookies can't be set here.
            // Middleware handles session refresh instead.
          }
        },
      },
    }
  )
}
