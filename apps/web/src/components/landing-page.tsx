"use client"

/**
 * Public landing page: hero, how it works, CTAs. Website-first layout.
 * No auth required; Shop / Sign in / Sign up in header.
 */

import Link from "next/link"
import { Package, Truck, TrendingDown } from "lucide-react"
import { useLanguage } from "@/lib/context/language"
import { SiteHeader } from "@/components/site-header"

export function LandingPage(): JSX.Element {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--surface)" }}>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          style={{
            background: "var(--hero-bg)",
            borderColor: "var(--hero-border)",
          }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              {t("landing.heroTitle")}
            </h1>
            <p
              className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("landing.heroSubtitle")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/home"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold min-h-[48px] transition-opacity hover:opacity-90"
                style={{
                  background: "var(--sage)",
                  color: "var(--color-brand-black)",
                }}
              >
                {t("landing.ctaShop")}
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center rounded-xl border px-6 py-3.5 text-base font-medium min-h-[48px] transition-colors hover:opacity-90"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                  background: "var(--card)",
                }}
              >
                {t("landing.ctaSignIn")}
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2
            className="font-display text-2xl font-semibold text-center sm:text-3xl"
            style={{ color: "var(--text-primary)" }}
          >
            {t("landing.howItWorks")}
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            <div
              className="rounded-2xl border p-6 sm:p-8 text-center"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                style={{ background: "var(--sage-bg)" }}
              >
                <Package className="h-6 w-6" style={{ color: "var(--sage)" }} strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                {t("landing.step1Title")}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                {t("landing.step1Desc")}
              </p>
            </div>
            <div
              className="rounded-2xl border p-6 sm:p-8 text-center"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                style={{ background: "var(--sage-bg)" }}
              >
                <Truck className="h-6 w-6" style={{ color: "var(--sage)" }} strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                {t("landing.step2Title")}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                {t("landing.step2Desc")}
              </p>
            </div>
            <div
              className="rounded-2xl border p-6 sm:p-8 text-center"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                style={{ background: "var(--sage-bg)" }}
              >
                <TrendingDown className="h-6 w-6" style={{ color: "var(--sage)" }} strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                {t("landing.step3Title")}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                {t("landing.step3Desc")}
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center rounded-xl px-6 py-3.5 text-base font-semibold min-h-[48px] transition-opacity hover:opacity-90"
              style={{
                background: "var(--sage)",
                color: "var(--color-brand-black)",
              }}
            >
              {t("landing.ctaSignUp")}
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t py-8 px-4 sm:px-6 lg:px-8"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
        >
          <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-display text-sm font-medium" style={{ color: "var(--sage)" }}>
              {t("landing.footerTagline")}
            </p>
            <p className="text-xs" style={{ color: "var(--text3)" }}>
              © {new Date().getFullYear()} Brasena. {t("landing.footerRights")}
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
