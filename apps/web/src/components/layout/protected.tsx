"use client"

/**
 * Client-side protected route wrapper: shows spinner while auth is loading,
 * redirects to /login if no user, otherwise renders children. Use in addition to middleware.
 */

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/config"
import { useAuth } from "@/lib/hooks/useAuth"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

interface ProtectedProps {
  children: React.ReactNode
}

export function Protected({ children }: ProtectedProps): JSX.Element {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return
    if (!user) router.push(ROUTES.LOGIN)
  }, [user, loading, router])

  if (loading) {
    return (
      <div
        className={cn(
          "min-h-screen bg-surface flex items-center justify-center"
        )}
      >
        <Spinner size="lg" />
      </div>
    )
  }

  if (!user) {
    return (
      <div
        className={cn(
          "min-h-screen bg-surface flex items-center justify-center"
        )}
      >
        <Spinner size="lg" />
      </div>
    )
  }

  return <>{children}</>
}
