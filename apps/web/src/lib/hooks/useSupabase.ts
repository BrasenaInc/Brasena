"use client"

/**
 * Returns a memoized Supabase browser client for use in Client Components.
 * Prevents creating a new client on every render and keeps auth in sync.
 */

import { useMemo } from "react"
import { createClient } from "@/lib/supabase"

export function useSupabase() {
  return useMemo(() => createClient(), [])
}
