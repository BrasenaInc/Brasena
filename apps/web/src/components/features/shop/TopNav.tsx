"use client"

import Link from "next/link"
import { ChevronLeft, ShoppingBag } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useAuth } from "@/lib/hooks/useAuth"
import { useCartStore } from "@/store/cart.store"

export interface TopNavProps {
  greeting?: boolean
  title?: string
  backHref?: string
  showCart?: boolean
}

function getGreetingKey(): "nav.greetingMorning" | "nav.greetingAfternoon" | "nav.greetingEvening" {
  const h = new Date().getHours()
  if (h < 12) return "nav.greetingMorning"
  if (h < 18) return "nav.greetingAfternoon"
  return "nav.greetingEvening"
}

export function TopNav({
  greeting = false,
  title,
  backHref,
  showCart = true,
}: TopNavProps): JSX.Element {
  const { t } = useLanguage()
  const { profile } = useAuth()
  const itemCount = useCartStore((s) => s.itemCount())

  const name = profile?.full_name?.trim() || "there"
  const greetingKey = getGreetingKey()

  return (
    <header
      className="sticky top-0 z-40 border-b flex items-center justify-between"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        borderColor: "var(--border-lt)",
        padding: "46px 20px 12px",
      }}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {backHref ? (
          <>
            <Link
              href={backHref}
              className="flex shrink-0 items-center justify-center text-[var(--text3)] hover:text-[var(--sage)] min-h-[44px] min-w-[44px]"
              aria-label={t("common.back")}
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2} />
            </Link>
            {title && (
              <span className="font-display font-semibold text-xl truncate" style={{ color: "var(--text-primary)" }}>
                {title}
              </span>
            )}
          </>
        ) : greeting ? (
          <div className="min-w-0">
            <p className="text-[11px] truncate" style={{ color: "var(--text3)" }}>
              {t(greetingKey)}, {name}
            </p>
            <p className="font-display font-bold text-lg tracking-[0.12em] truncate" style={{ color: "var(--sage)" }}>
              BRASENA
            </p>
          </div>
        ) : title ? (
          <span className="font-display font-semibold text-xl truncate" style={{ color: "var(--text-primary)" }}>
            {title}
          </span>
        ) : (
          <span className="font-display font-bold tracking-[0.12em]" style={{ color: "var(--sage)" }}>
            BRASENA
          </span>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {showCart && (
          <Link
            href={ROUTES.CART}
            className="relative flex items-center justify-center min-h-[44px] min-w-[44px] rounded-[10px] border"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
            aria-label={t("nav.cart")}
          >
            <ShoppingBag className="h-5 w-5" style={{ color: "var(--text-secondary)" }} strokeWidth={1.8} />
            {itemCount > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold px-1"
                style={{ background: "var(--sage)", color: "var(--color-brand-black)" }}
              >
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>
        )}
      </div>
    </header>
  )
}
