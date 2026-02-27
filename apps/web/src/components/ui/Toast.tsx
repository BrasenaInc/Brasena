"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, AlertCircle, Info } from "lucide-react"
import { useToastStore, type ToastType } from "@/store/toast.store"
import { cn } from "@/lib/utils"

const TOAST_ICONS: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
}

const TOAST_BORDER: Record<ToastType, string> = {
  success: "var(--color-success)",
  error: "var(--color-error)",
  info: "var(--sage)",
}

export function ToastContainer(): JSX.Element | null {
  const toast = useToastStore((s) => s.toast)
  const hideToast = useToastStore((s) => s.hideToast)
  const [mounted, setMounted] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!toast) return
    setMounted(false)
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [toast])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setExiting(true), toast.duration)
    return () => clearTimeout(t)
  }, [toast])

  useEffect(() => {
    if (!exiting || !toast) return
    const t = setTimeout(() => {
      hideToast()
      setExiting(false)
    }, 200)
    return () => clearTimeout(t)
  }, [exiting, toast, hideToast])

  if (!toast) return null

  const Icon = TOAST_ICONS[toast.type]
  const borderColor = TOAST_BORDER[toast.type]
  const isVisible = mounted && !exiting

  return (
    <div
      role="alert"
      className={cn(
        "absolute top-16 left-4 right-4 z-50 rounded-[14px] border px-4 py-3 transition-all duration-200 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[-8px] opacity-0"
      )}
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        borderLeftWidth: "3px",
        borderLeftColor: borderColor,
      }}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0" style={{ color: borderColor }} strokeWidth={1.8} />
        <p className="text-sm font-medium flex-1" style={{ color: "var(--text-primary)" }}>
          {toast.message}
        </p>
      </div>
    </div>
  )
}
