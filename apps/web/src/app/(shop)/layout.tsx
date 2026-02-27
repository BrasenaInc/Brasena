"use client"

/**
 * Shop layout: app shell (responsive width), auth check. Unauthenticated users
 * are redirected to login with ?next=<current path> so they can return after signing in.
 */

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { ROUTES } from "@/config"
import { useAuth } from "@/lib/hooks/useAuth"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (loading) return
    if (!user) {
      if (pathname === "/home") {
        router.push("/")
        return
      }
      const next = pathname ? `${pathname}` : ROUTES.SHOP
      router.push(`${ROUTES.LOGIN}?next=${encodeURIComponent(next)}`)
    }
  }, [user, loading, router, pathname])

  if (loading) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center")} style={{ background: "var(--surface)" }}>
        <Spinner size="lg" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center")} style={{ background: "var(--surface)" }}>
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="app-shell">
      {children}
    </div>
  )
}
