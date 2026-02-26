"use client"

/**
 * EN/ES pill toggle for auth screens (login, signup). Shown only on those routes;
 * language selection screen has its own full UI.
 */

import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/context/language"
import { cn } from "@/lib/utils"

const AUTH_WITH_TOGGLE = ["/login", "/signup", "/signup/residential", "/signup/business"]

export function LanguageToggle(): JSX.Element | null {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  if (!pathname || !AUTH_WITH_TOGGLE.includes(pathname)) return null

  return (
    <div
      className={cn(
        "absolute top-4 right-4 z-50 flex rounded-[20px] border border-surface-border bg-surface-card p-0.5 gap-0.5"
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "rounded-2xl px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-all",
          language === "en"
            ? "bg-brand-sage text-brand-black"
            : "bg-transparent text-text-muted hover:text-text-secondary"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={cn(
          "rounded-2xl px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-all",
          language === "es"
            ? "bg-brand-sage text-brand-black"
            : "bg-transparent text-text-muted hover:text-text-secondary"
        )}
      >
        ES
      </button>
    </div>
  )
}
