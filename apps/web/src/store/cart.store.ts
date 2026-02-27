import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem } from "@/types"

/**
 * Cart store using Zustand with localStorage persistence.
 * CartItem id = `${productId}-${weightLbs}`. addItem merges by id (increments quantity).
 */

export interface AddItemParams {
  productId: string
  productName: string
  productSlug: string
  productSku: string
  category: string
  weightLbs: number
  pricePerLb: number // cents
  quantity?: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean

  addItem: (params: AddItemParams) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void

  itemCount: () => number
  subtotal: () => number
}

function cartItemId(productId: string, weightLbs: number): string {
  return `${productId}-${weightLbs}`
}

function calcSubtotal(weightLbs: number, pricePerLb: number, quantity: number): number {
  return weightLbs * pricePerLb * quantity
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (params) => {
        const qty = params.quantity ?? 1
        const id = cartItemId(params.productId, params.weightLbs)
        const { items } = get()
        const existingIndex = items.findIndex((i) => i.id === id)

        if (existingIndex >= 0) {
          const updated = [...items]
          const existing = updated[existingIndex]
          const newQty = existing.quantity + qty
          updated[existingIndex] = {
            ...existing,
            quantity: newQty,
            subtotal: calcSubtotal(existing.weightLbs, existing.pricePerLb, newQty),
          }
          set({ items: updated })
        } else {
          const newItem: CartItem = {
            id,
            productId: params.productId,
            productName: params.productName,
            productSlug: params.productSlug,
            productSku: params.productSku,
            category: params.category,
            weightLbs: params.weightLbs,
            pricePerLb: params.pricePerLb,
            quantity: qty,
            subtotal: calcSubtotal(params.weightLbs, params.pricePerLb, qty),
          }
          set({ items: [...items, newItem] })
        }
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }))
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id
              ? { ...i, quantity, subtotal: calcSubtotal(i.weightLbs, i.pricePerLb, quantity) }
              : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

      subtotal: () => get().items.reduce((sum, item) => sum + item.subtotal, 0),
    }),
    {
      name: "brasena-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
)
