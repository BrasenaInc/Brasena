"use client"

import Link from "next/link"
import { ChevronRight, LogOut, MapPin, Package, Lock } from "lucide-react"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useAuth } from "@/lib/hooks/useAuth"
import { cn } from "@/lib/utils"

function SettingsSection({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <section className={cn("mb-8", className)}>
      <h2
        className="text-sm font-semibold mb-3"
        style={{ color: "var(--text-secondary)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

function SettingsCard({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      {children}
    </div>
  )
}

function SettingsRow({
  label,
  value,
  children,
}: {
  label: string
  value?: string
  children?: React.ReactNode
}): JSX.Element {
  return (
    <div
      className="flex items-center justify-between gap-4 px-4 py-3 border-b last:border-b-0"
      style={{ borderColor: "var(--border)" }}
    >
      <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
        {label}
      </span>
      {value !== undefined ? (
        <span className="text-sm truncate max-w-[60%]" style={{ color: "var(--text-secondary)" }}>
          {value || "—"}
        </span>
      ) : (
        children
      )}
    </div>
  )
}

function SettingsLink({
  href,
  label,
  description,
  icon: Icon,
}: {
  href: string
  label: string
  description: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
}): JSX.Element {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 px-4 py-3 border-b last:border-b-0 transition-colors hover:opacity-90"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        style={{ background: "var(--sage-bg)" }}
      >
        <Icon className="h-5 w-5" style={{ color: "var(--sage)" }} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {label}
        </p>
        <p className="text-xs mt-0.5 truncate" style={{ color: "var(--text3)" }}>
          {description}
        </p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0" style={{ color: "var(--text3)" }} strokeWidth={2} />
    </Link>
  )
}

export default function AccountPage(): JSX.Element {
  const { language, setLanguage, t } = useLanguage()
  const { profile, signOut } = useAuth()

  return (
    <>
      <TopNav title={t("nav.account")} showCart />
      <main className="flex-1 overflow-y-auto w-full">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 lg:px-8 pb-24">
          {/* Profile */}
          <SettingsSection title={t("account.profile")}>
            <SettingsCard>
              <SettingsRow label={t("form.name")} value={profile?.full_name ?? undefined} />
              <SettingsRow label={t("form.email")} value={profile?.email ?? undefined} />
              <SettingsRow label={t("form.phone")} value={profile?.phone ?? undefined} />
            </SettingsCard>
          </SettingsSection>

          {/* Preferences */}
          <SettingsSection title={t("account.preferences")}>
            <SettingsCard>
              <div
                className="flex items-center justify-between gap-4 px-4 py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {t("account.language")}
                </span>
                <div
                  className="flex rounded-[20px] border p-0.5 gap-0.5"
                  style={{ borderColor: "var(--border)", background: "var(--nav-bg)" }}
                  role="group"
                  aria-label="Language"
                >
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "rounded-2xl px-3 py-1.5 text-[11px] font-semibold tracking-wide min-h-[44px] min-w-[44px] flex items-center justify-center transition-all",
                      language === "en" ? "bg-[var(--sage)] text-[var(--color-brand-black)]" : "bg-transparent hover:opacity-80"
                    )}
                    style={language !== "en" ? { color: "var(--text3)" } : undefined}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("es")}
                    className={cn(
                      "rounded-2xl px-3 py-1.5 text-[11px] font-semibold tracking-wide min-h-[44px] min-w-[44px] flex items-center justify-center transition-all",
                      language === "es" ? "bg-[var(--sage)] text-[var(--color-brand-black)]" : "bg-transparent hover:opacity-80"
                    )}
                    style={language !== "es" ? { color: "var(--text3)" } : undefined}
                  >
                    ES
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {t("account.appearance")}
                </span>
                <ThemeToggle />
              </div>
            </SettingsCard>
          </SettingsSection>

          {/* Order history & Addresses */}
          <SettingsSection title={t("account.orderHistory")}>
            <SettingsCard>
              <SettingsLink
                href={ROUTES.ORDERS}
                label={t("account.orderHistory")}
                description={t("account.orderHistoryDesc")}
                icon={Package}
              />
              <SettingsLink
                href="#"
                label={t("account.addresses")}
                description={t("account.addressesDesc")}
                icon={MapPin}
              />
            </SettingsCard>
          </SettingsSection>

          {/* Security placeholder - optional for later */}
          <SettingsSection title={t("account.security")}>
            <SettingsCard>
              <div
                className="flex items-center gap-4 px-4 py-3"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--sage-bg)" }}
                >
                  <Lock className="h-5 w-5" style={{ color: "var(--sage)" }} strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {t("account.changePassword")}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                    {t("account.changePasswordDesc")}
                  </p>
                </div>
              </div>
            </SettingsCard>
          </SettingsSection>

          {/* Log out */}
          <SettingsSection title={t("account.logout")}>
            <button
              type="button"
              onClick={() => signOut()}
              className="w-full flex items-center justify-center gap-2 rounded-2xl border px-4 py-3.5 min-h-[48px] font-medium transition-colors hover:opacity-90"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                background: "var(--card)",
              }}
            >
              <LogOut className="h-5 w-5" strokeWidth={1.8} />
              {t("account.logout")}
            </button>
          </SettingsSection>
        </div>
      </main>
      <BottomNav />
    </>
  )
}
