"use client"

/**
 * Client-side auth state: current user, profile (from public.profiles), loading,
 * and signOut. Fetches profile after user is set; memoized return.
 */

import { useState, useEffect, useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"
import { ROUTES } from "@/config"
import { useSupabase } from "@/lib/hooks/useSupabase"

export type Profile = Database["public"]["Tables"]["profiles"]["Row"]

export function useAuth(): {
  user: User | null
  profile: Profile | null
  loading: boolean
  signOut: () => Promise<void>
} {
  const supabase = useSupabase()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function init(): Promise<void> {
      try {
        const { data: { user: u } } = await supabase.auth.getUser()
        if (mounted) setUser(u)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    init()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setUser(session?.user ?? null)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [supabase])

  const userId = user?.id

  useEffect(() => {
    if (!userId) {
      setProfile(null)
      return
    }

    let mounted = true

    async function fetchProfile(): Promise<void> {
      const id = userId
      if (!id) return
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .maybeSingle()

      if (mounted && !error) setProfile(data ?? null)
    }

    fetchProfile()
    return () => {
      mounted = false
    }
  }, [supabase, userId])

  const signOut = useCallback(async (): Promise<void> => {
    await supabase.auth.signOut()
    setProfile(null)
    router.push(ROUTES.LOGIN)
  }, [supabase, router])

  return useMemo(() => ({ user, profile, loading, signOut }), [user, profile, loading, signOut])
}
