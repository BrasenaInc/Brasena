import { createBrowserClient } from "@supabase/ssr"
import { config } from "@/config"

/**
 * Client-side Supabase instance.
 * Use this in Client Components ("use client").
 *
 * Why: Supabase SSR package handles cookie-based auth
 * automatically, keeping session state in sync between
 * server and client without manual token management.
 */
export function createClient() {
  return createBrowserClient(
    config.supabase.url,
    config.supabase.anonKey
  )
}
