"use client"

import Link from "next/link"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"

export default function OrdersPage(): JSX.Element {
  const { t } = useLanguage()

  return (
    <>
      <TopNav title={t("account.orderHistory")} backHref={ROUTES.ACCOUNT} showCart />
      <main className="flex-1 overflow-y-auto w-full">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 lg:px-8 pb-24">
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Your orders will appear here. Place an order from the shop to get started.
          </p>
          <Link
            href={ROUTES.SHOP}
            className="inline-block mt-4 rounded-xl px-4 py-2.5 text-sm font-medium min-h-[44px]"
            style={{ background: "var(--sage)", color: "var(--color-brand-black)" }}
          >
            {t("nav.home")}
          </Link>
        </div>
      </main>
      <BottomNav />
    </>
  )
}
