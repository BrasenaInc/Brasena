"use client"

/**
 * Website header for public pages (landing, etc.). Logo + nav (Shop, Sign in, Sign up).
 * Website-first: horizontal layout, responsive.
 */

import Link from "next/link"
import { useLanguage } from "@/lib/context/language"
import { BrasenaLogo } from "@/components/brasena-logo"
import { cn } from "@/lib/utils"

export function SiteHeader(): JSX.Element {
  const { t } = useLanguage()

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        borderColor: "var(--border-lt)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Brasena home"
        >
          <BrasenaLogo size="sm" className="h-9 w-auto" />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          <Link
            href="/home"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              "min-h-[44px] min-w-[44px] sm:min-w-0 sm:px-4 flex items-center justify-center"
            )}
            style={{ color: "var(--text-secondary)" }}
          >
            {t("shop.shopNow")}
          </Link>
          <Link
            href="/login"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              "min-h-[44px] min-w-[44px] sm:min-w-0 sm:px-4 flex items-center justify-center"
            )}
            style={{ color: "var(--text-secondary)" }}
          >
            {t("landing.ctaSignIn")}
          </Link>
          <Link
            href="/signup"
            className={cn(
              "rounded-xl px-4 py-2.5 text-sm font-semibold transition-all min-h-[44px] flex items-center justify-center",
              "bg-[var(--sage)] text-[var(--color-brand-black)] hover:opacity-90"
            )}
          >
            {t("landing.ctaSignUp")}
          </Link>
        </nav>
      </div>
    </header>
  )
}
