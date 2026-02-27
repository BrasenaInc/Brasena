"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Trash2, Beef, UtensilsCrossed, Bird, Package } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useCartStore } from "@/store/cart.store"
import { useToast } from "@/lib/hooks/useToast"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { cn } from "@/lib/utils"

const CATEGORY_ICONS: Record<string, typeof Beef> = {
  Beef,
  Pork: UtensilsCrossed,
  Chicken: Bird,
}

function CategoryIcon({ category }: { category: string }): JSX.Element {
  const Icon = CATEGORY_ICONS[category] ?? Package
  return <Icon className="h-6 w-6" style={{ color: "var(--text3)" }} strokeWidth={1.5} />
}

const DELIVERY_FEE_CENTS = 499
const FREE_DELIVERY_THRESHOLD_CENTS = 5000

export default function CartPage(): JSX.Element {
  const { t } = useLanguage()
  const items = useCartStore((s) => s.items)
  const subtotalCents = useCartStore((s) => s.subtotal())
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const removeItem = useCartStore((s) => s.removeItem)
  const { showToast } = useToast()

  const [promoCode, setPromoCode] = useState("")

  const deliveryFeeCents = subtotalCents >= FREE_DELIVERY_THRESHOLD_CENTS ? 0 : DELIVERY_FEE_CENTS
  const totalCents = subtotalCents + deliveryFeeCents

  function handleApplyPromo(): void {
    if (!promoCode.trim()) return
    showToast({ message: t("cart.invalidCode"), type: "error" })
  }

  const isEmpty = items.length === 0

  return (
    <>
      <TopNav title={t("cart.title")} showCart={false} />
      <main className="flex-1 overflow-y-auto pb-[120px]">
        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center py-16 px-4">
            <ShoppingBag
              className="h-12 w-12 mb-4"
              style={{ color: "var(--text3)" }}
              strokeWidth={1.5}
            />
            <p className="font-display text-xl font-semibold text-center" style={{ color: "var(--text-primary)" }}>
              {t("cart.emptyTitle")}
            </p>
            <p className="text-sm mt-1 text-center" style={{ color: "var(--text3)" }}>
              {t("cart.emptySub")}
            </p>
            <Link
              href={ROUTES.CATEGORIES}
              className="btn-primary mt-6 inline-flex items-center justify-center min-h-[44px] px-6"
            >
              {t("cart.browseProducts")}
            </Link>
          </div>
        ) : (
          <div className="px-4 py-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border p-3.5 mb-2.5 flex items-start gap-3"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--thumb-bg)" }}
                >
                  <CategoryIcon category={item.category} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    {item.productName}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                    {item.weightLbs} lb
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                    ${(item.pricePerLb / 100).toFixed(2)}/lb
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-9 w-9 flex items-center justify-center min-h-[44px] min-w-[44px]"
                        style={{ background: "var(--card2)" }}
                        aria-label="Decrease quantity"
                      >
                        <span className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>-</span>
                      </button>
                      <span className="font-mono text-sm min-w-[32px] text-center" style={{ color: "var(--text-primary)" }}>
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-9 w-9 flex items-center justify-center min-h-[44px] min-w-[44px]"
                        style={{ background: "var(--card2)" }}
                        aria-label="Increase quantity"
                      >
                        <span className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>+</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-lg hover:opacity-80 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      style={{ color: "var(--text3)" }}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
                <p className="font-mono font-semibold text-sm shrink-0" style={{ color: "var(--sage)" }}>
                  ${(item.subtotal / 100).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder={t("cart.promoPlaceholder")}
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 rounded-[10px] border px-3 py-2.5 text-sm outline-none min-h-[44px]"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="btn-secondary rounded-[10px] px-4 min-h-[44px] shrink-0"
              >
                {t("cart.apply")}
              </button>
            </div>

            <div className="mt-4 rounded-2xl border p-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <p className="uppercase text-xs tracking-widest mb-3" style={{ color: "var(--text3)" }}>
                {t("cart.orderSummary")}
              </p>
              <div className="flex justify-between text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                <span>Subtotal</span>
                <span className="font-mono">${(subtotalCents / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                <span>Delivery</span>
                <span className="font-mono">
                  {deliveryFeeCents === 0 ? t("cart.deliveryFreeOver50") : `$${(deliveryFeeCents / 100).toFixed(2)}`}
                </span>
              </div>
              <div className="h-px my-2" style={{ background: "var(--border)" }} />
              <div className="flex justify-between font-semibold" style={{ color: "var(--text-primary)" }}>
                <span>Total</span>
                <span className="font-mono">${(totalCents / 100).toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {!isEmpty && (
        <div
          className="sticky bottom-0 left-0 right-0 z-40 px-4 py-3 border-t"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <Link
            href={ROUTES.CHECKOUT}
            className="btn-primary w-full rounded-2xl h-[54px] flex items-center justify-between px-5"
          >
            <span>{t("cart.proceedToCheckout")}</span>
            <span className="font-mono font-semibold">${(totalCents / 100).toFixed(2)}</span>
          </Link>
        </div>
      )}
      <BottomNav />
    </>
  )
}
