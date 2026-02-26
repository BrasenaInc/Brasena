import { createBrowserClient } from "@supabase/ssr"
import type { SupabaseClient } from "@supabase/supabase-js"
import { config } from "@/config"
import type { Database } from "@/types/supabase"

/**
 * Client-side Supabase instance.
 * Use this in Client Components ("use client").
 *
 * Why: Supabase SSR package handles cookie-based auth
 * automatically, keeping session state in sync between
 * server and client without manual token management.
 */
export function createClient(): SupabaseClient<Database> {
  return createBrowserClient<Database>(
    config.supabase.url,
    config.supabase.anonKey
  )
}
