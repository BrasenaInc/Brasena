"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/config"
import { useAuth } from "@/lib/hooks/useAuth"
import { AdminSidebar } from "@/components/features/admin"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const { user, profile, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return
    if (!user) {
      router.push(ROUTES.LOGIN)
      return
    }
    if (profile?.role !== "admin") {
      router.push(ROUTES.SHOP)
    }
  }, [user, profile?.role, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--surface)" }}>
        <Spinner size="lg" />
      </div>
    )
  }

  if (!user || profile?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--surface)" }}>
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className={cn("flex h-screen overflow-hidden")} style={{ background: "var(--surface)" }}>
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
