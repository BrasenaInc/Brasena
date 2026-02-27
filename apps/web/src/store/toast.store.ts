import { create } from "zustand"

export type ToastType = "success" | "error" | "info"

export interface ToastState {
  message: string
  type: ToastType
  duration: number
}

interface ToastStore {
  toast: ToastState | null
  showToast: (params: { message: string; type: ToastType; duration?: number }) => void
  hideToast: () => void
}

const DEFAULT_DURATION = 2500

export const useToastStore = create<ToastStore>((set) => ({
  toast: null,

  showToast: ({ message, type, duration = DEFAULT_DURATION }) => {
    set({ toast: { message, type, duration } })
  },

  hideToast: () => set({ toast: null }),
}))
