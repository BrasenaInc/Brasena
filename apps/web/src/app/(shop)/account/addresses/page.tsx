"use client"

import Link from "next/link"
import { TopNav, BottomNav } from "@/components/features/shop"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"

export default function AccountAddressesPage(): JSX.Element {
  const { t } = useLanguage()
  return (
    <>
      <TopNav title={t("account.addresses")} backHref={ROUTES.ACCOUNT} showCart={false} />
      <main className="flex-1 overflow-y-auto w-full pb-24">
        <div className="mx-auto w-full max-w-[480px] px-4 py-6">
          <p className="text-sm" style={{ color: "var(--text3)" }}>
            Manage delivery addresses. (Coming soon.)
          </p>
          <Link href={ROUTES.ACCOUNT} className="btn-ghost mt-4 inline-block min-h-[44px] px-4">
            {t("nav.account")}
          </Link>
        </div>
      </main>
      <BottomNav />
    </>
  )
}
