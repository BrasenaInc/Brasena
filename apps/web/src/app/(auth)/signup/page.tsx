"use client"

/**
 * Signup Step 1: profile type selection (Personal vs Business). Stacked cards
 * per prototype; user picks then continues to residential or business form.
 */

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, Building2, ChevronLeft } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { BrasenaLogo } from "@/components/brasena-logo"
import { cn } from "@/lib/utils"

type ProfileChoice = "residential" | "business" | null

export default function SignupPage(): JSX.Element {
  const router = useRouter()
  const { t } = useLanguage()
  const [choice, setChoice] = useState<ProfileChoice>(null)

  function handleContinue(): void {
    if (choice === "residential") router.push("/signup/residential")
    if (choice === "business") router.push("/signup/business")
  }

  return (
    <>
      <div className="mb-6 flex justify-center">
        <BrasenaLogo size="sm" />
      </div>

      <Link
        href={ROUTES.LOGIN}
        className="mb-5 inline-flex items-center gap-1.5 text-text-muted text-[13px] hover:text-brand-sage transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        {t("common.back")}
      </Link>

      <div className="flex gap-1.5 mb-5">
        <span className="h-0.5 w-6 rounded-full bg-brand-sage" aria-hidden />
        <span className="h-0.5 w-3 rounded-full bg-surface-border" aria-hidden />
      </div>

      <h1 className="font-display text-[26px] font-bold text-text-primary mb-1.5">
        {t("signup.title")}
      </h1>
      <p className="text-text-muted text-[13px] mb-8">
        {t("signup.subtitle")}
      </p>

      <div className="flex flex-col gap-3.5 flex-1 mb-8">
        <button
          type="button"
          onClick={() => setChoice("residential")}
          className={cn(
            "bg-surface-card border rounded-[20px] p-5 flex items-center gap-4 transition-all text-left relative",
            choice === "residential"
              ? "border-brand-sage bg-brand-sage/[0.07]"
              : "border-surface-border hover:border-brand-sage/40"
          )}
        >
          <div
            className={cn(
              "w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0 transition-colors",
              choice === "residential" ? "bg-brand-sage/15" : "bg-surface-muted"
            )}
          >
            <Home className="w-[26px] h-[26px] text-brand-sage" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-[17px] font-semibold text-text-primary mb-0.5">
              {t("signup.personal.title")}
            </h3>
            <p className="text-[12px] text-text-muted leading-snug">
              {t("signup.personal.desc")}
            </p>
          </div>
          <div
            className={cn(
              "w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
              choice === "residential"
                ? "border-brand-sage bg-brand-sage"
                : "border-surface-border"
            )}
          >
            {choice === "residential" && (
              <span className="w-2 h-2 rounded-full bg-brand-black" aria-hidden />
            )}
          </div>
        </button>

        <button
          type="button"
          onClick={() => setChoice("business")}
          className={cn(
            "bg-surface-card border rounded-[20px] p-5 flex items-center gap-4 transition-all text-left relative",
            choice === "business"
              ? "border-brand-sage bg-brand-sage/[0.07]"
              : "border-surface-border hover:border-brand-sage/40"
          )}
        >
          <span
            className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide text-brand-gold bg-brand-gold/10 border border-brand-gold/25 rounded-lg px-2 py-0.5"
            aria-hidden
          >
            {t("signup.b2bBadge")}
          </span>
          <div
            className={cn(
              "w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0 transition-colors",
              choice === "business" ? "bg-brand-sage/15" : "bg-surface-muted"
            )}
          >
            <Building2 className="w-[26px] h-[26px] text-brand-sage" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-[17px] font-semibold text-text-primary mb-0.5">
              {t("signup.business.title")}
            </h3>
            <p className="text-[12px] text-text-muted leading-snug">
              {t("signup.business.desc")}
            </p>
          </div>
          <div
            className={cn(
              "w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
              choice === "business"
                ? "border-brand-sage bg-brand-sage"
                : "border-surface-border"
            )}
          >
            {choice === "business" && (
              <span className="w-2 h-2 rounded-full bg-brand-black" aria-hidden />
            )}
          </div>
        </button>
      </div>

      <button
        type="button"
        onClick={handleContinue}
        disabled={choice === null}
        className="btn-primary w-full min-h-[54px] rounded-2xl"
      >
        {t("signup.continue")} →
      </button>

      <p className="mt-6 text-center text-text-muted text-[13px]">
        {t("signup.haveAccount")}{" "}
        <Link href={ROUTES.LOGIN} className="text-brand-sage font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </>
  )
}
