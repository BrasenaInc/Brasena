import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem, Product } from "@/types"

/**
 * Cart store using Zustand with localStorage persistence.
 *
 * Why Zustand over Context API:
 * - No provider wrapping needed, import and use anywhere
 * - Built-in persist middleware handles localStorage sync
 * - Minimal re-renders: components only re-render when their
 *   specific slice of state changes, not the whole cart
 */

interface CartStore {
  items: CartItem[]
  isOpen: boolean

  // Actions
  addItem: (product: Product, weightLbs: 10 | 20 | 30 | 40) => void
  removeItem: (productId: string, weightLbs: number) => void
  updateQuantity: (productId: string, weightLbs: number, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void

  // Computed (derived from items)
  itemCount: () => number
  subtotal: () => number
  totalSavings: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, weightLbs) => {
        const { items } = get()
        const tier = product.weightTiers.find(t => t.weightLbs === weightLbs)

        if (!tier) {
          console.error(`No pricing tier found for ${weightLbs}lb`)
          return
        }

        const existingIndex = items.findIndex(
          i => i.productId === product.id && i.weightLbs === weightLbs
        )

        if (existingIndex >= 0) {
          // Increment quantity if already in cart
          const updated = [...items]
          const existing = updated[existingIndex]
          updated[existingIndex] = {
            ...existing,
            quantity: existing.quantity + 1,
            subtotal: (existing.quantity + 1) * tier.totalPrice,
          }
          set({ items: updated })
        } else {
          // Add new cart item
          const newItem: CartItem = {
            productId: product.id,
            product,
            weightLbs,
            quantity: 1,
            unitPrice: tier.totalPrice,
            subtotal: tier.totalPrice,
          }
          set({ items: [...items, newItem] })
        }
      },

      removeItem: (productId, weightLbs) => {
        set(state => ({
          items: state.items.filter(
            i => !(i.productId === productId && i.weightLbs === weightLbs)
          ),
        }))
      },

      updateQuantity: (productId, weightLbs, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, weightLbs)
          return
        }
        set(state => ({
          items: state.items.map(i =>
            i.productId === productId && i.weightLbs === weightLbs
              ? { ...i, quantity, subtotal: quantity * i.unitPrice }
              : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),

      // Derived values - computed on demand, not stored
      itemCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      subtotal: () =>
        get().items.reduce((sum, item) => sum + item.subtotal, 0),

      totalSavings: () =>
        get().items.reduce((sum, item) => {
          const tier = item.product.weightTiers.find(
            t => t.weightLbs === item.weightLbs
          )
          return sum + (tier?.savingsAmount ?? 0) * item.quantity
        }, 0),
    }),
    {
      name: "brasena-cart",
      // Only persist items, not UI state like isOpen
      partialize: (state) => ({ items: state.items }),
    }
  )
)
