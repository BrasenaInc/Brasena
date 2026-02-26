"use client"

/**
 * First screen for new users: choose language (EN/ES). Sets language in context
 * and localStorage; Continue navigates to login.
 */

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { cn } from "@/lib/utils"

export default function LanguagePage(): JSX.Element {
  const router = useRouter()
  const { language, setLanguage, t } = useLanguage()

  return (
    <>
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo.png"
            alt="Brasena"
            width={180}
            height={80}
            className="h-auto w-[180px] object-contain"
            priority
          />
        </div>
        <span className="text-text-muted text-[13px] tracking-[0.05em] text-center mt-1">
          Bronx · Queens · NYC
        </span>
      </div>

      <div className="flex flex-col gap-6 mb-6">
        <div className="text-center">
          <h2 className="font-display text-[22px] font-semibold text-text-primary mb-1.5">
            {t("lang.choose")}
          </h2>
          <p className="text-text-muted text-[13px]">
            {t("lang.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={cn(
              "min-h-[120px] rounded-[20px] py-6 px-4 flex flex-col justify-center items-center gap-2.5 relative transition-all border-[1.5px] overflow-hidden",
              language === "en"
                ? "border-brand-sage bg-brand-sage/10"
                : "bg-surface-muted border-surface-border hover:border-brand-sage/40"
            )}
          >
            {language === "en" && (
              <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-brand-sage flex items-center justify-center transition-all" aria-hidden>
                <Check className="w-2.5 h-2.5 text-brand-black" strokeWidth={2.5} />
              </span>
            )}
            <span className="font-display font-bold text-[22px] text-text-primary tracking-wide">
              English
            </span>
            <span className="text-text-muted text-xs tracking-[0.06em] uppercase">
              EN
            </span>
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={cn(
              "min-h-[120px] rounded-[20px] py-6 px-4 flex flex-col justify-center items-center gap-2.5 relative transition-all border-[1.5px] overflow-hidden",
              language === "es"
                ? "border-brand-sage bg-brand-sage/10"
                : "bg-surface-muted border-surface-border hover:border-brand-sage/40"
            )}
          >
            {language === "es" && (
              <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-brand-sage flex items-center justify-center transition-all" aria-hidden>
                <Check className="w-2.5 h-2.5 text-brand-black" strokeWidth={2.5} />
              </span>
            )}
            <span className="font-display font-bold text-[22px] text-text-primary tracking-wide">
              Español
            </span>
            <span className="text-text-muted text-xs tracking-[0.06em] uppercase">
              ES
            </span>
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => router.push(ROUTES.LOGIN)}
        className="btn-primary w-full h-[54px] rounded-2xl text-[15px] font-semibold"
      >
        {t("lang.continue")}
      </button>

      <p className="text-text-muted text-xs text-center mt-3">
        {t("lang.settingsHint")}
      </p>
    </>
  )
}
