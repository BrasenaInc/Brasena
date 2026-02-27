"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, LogOut, MapPin, Package, Lock, type LucideIcon } from "lucide-react"
import { TopNav, BottomNav } from "@/components/features/shop"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { FormField } from "@/components/ui/form-field"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useAuth } from "@/lib/hooks/useAuth"
import { useToast } from "@/lib/hooks/useToast"
import { useSupabase } from "@/lib/hooks/useSupabase"
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
  icon: LucideIcon
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
  const { user, profile, signOut } = useAuth()
  const { showToast } = useToast()
  const supabase = useSupabase()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name ?? "")
      setEmail(profile.email ?? "")
      setPhone(profile.phone ?? "")
    }
  }, [profile])

  async function handleSaveProfile(): Promise<void> {
    if (!user?.id) return
    setSaving(true)
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ full_name: fullName || null, email, phone: phone || null })
        .eq("id", user.id)
      if (error) throw error
      showToast({ message: t("account.saveSuccess") ?? "Saved", type: "success" })
    } catch {
      showToast({ message: t("account.saveError") ?? "Could not save", type: "error" })
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <TopNav title={t("nav.account")} showCart={false} />
      <main className="flex-1 overflow-y-auto w-full">
        <div className="mx-auto w-full max-w-[480px] px-4 py-6 sm:px-6 pb-24">
          {/* Profile */}
          <SettingsSection title={t("account.profile")}>
            <div className="space-y-4">
              <FormField
                label={t("form.name")}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name"
              />
              <FormField
                label={t("form.email")}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
              <FormField
                label={t("form.phone")}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
              />
              <button
                type="button"
                onClick={handleSaveProfile}
                disabled={saving}
                className="btn-primary w-full rounded-2xl min-h-[48px]"
              >
                {saving ? "..." : t("account.saveChanges")}
              </button>
            </div>
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
                href={ROUTES.ACCOUNT_ADDRESSES}
                label={t("account.addresses")}
                description={t("account.addressesDesc")}
                icon={MapPin}
              />
            </SettingsCard>
          </SettingsSection>

          {/* Security */}
          <SettingsSection title={t("account.security")}>
            <SettingsCard>
              <Link
                href={ROUTES.ACCOUNT_PASSWORD}
                className="flex items-center gap-4 px-4 py-3 transition-colors hover:opacity-90"
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
                <ChevronRight className="h-5 w-5 shrink-0" style={{ color: "var(--text3)" }} strokeWidth={2} />
              </Link>
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
