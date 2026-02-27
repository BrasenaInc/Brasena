"use client"

import { useCallback } from "react"
import { useToastStore, type ToastType } from "@/store/toast.store"

export function useToast(): {
  showToast: (params: { message: string; type: ToastType; duration?: number }) => void
} {
  const showToast = useToastStore((s) => s.showToast)
  return {
    showToast: useCallback(
      (params) => {
        showToast(params)
      },
      [showToast]
    ),
  }
}
