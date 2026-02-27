"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, ShoppingBag, User } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useCartStore } from "@/store/cart.store"
import { cn } from "@/lib/utils"

const ITEMS = [
  { href: ROUTES.SHOP, icon: Home, key: "nav.home" },
  { href: ROUTES.CATEGORIES, icon: Search, key: "nav.browse" },
  { href: ROUTES.CART, icon: ShoppingBag, key: "nav.cart" },
  { href: ROUTES.ACCOUNT, icon: User, key: "nav.account" },
] as const

export function BottomNav(): JSX.Element {
  const pathname = usePathname()
  const { t } = useLanguage()
  const itemCount = useCartStore((s) => s.itemCount())

  return (
    <nav
      className="sticky bottom-0 left-0 right-0 flex items-center border-t"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        borderColor: "var(--border)",
        padding: "10px 0 24px",
      }}
    >
      {ITEMS.map(({ href, icon: Icon, key }) => {
        const active = pathname === href
        const isCart = href === ROUTES.CART
        return (
          <Link
            key={href}
            href={href}
            className="flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] min-w-[44px]"
            aria-current={active ? "page" : undefined}
          >
            <span className="relative inline-flex">
              <Icon
                className="h-[22px] w-[22px] transition-colors"
                style={{ color: active ? "var(--sage)" : "var(--text3)" }}
                strokeWidth={1.8}
              />
              {isCart && itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[10px] font-bold px-1"
                  style={{ background: "var(--sage)", color: "var(--color-brand-black)" }}
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </span>
            <span
              className={cn("text-[10px] font-medium")}
              style={{ color: active ? "var(--sage)" : "var(--text3)" }}
            >
              {t(key)}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
