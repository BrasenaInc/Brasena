"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingBag,
  Tag,
  Package,
  Users,
  Truck,
  ClipboardList,
} from "lucide-react"
import { ROUTES } from "@/config"
import { useAuth } from "@/lib/hooks/useAuth"
import { cn } from "@/lib/utils"

const NAV = [
  {
    label: "Overview",
    items: [
      { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
      { href: ROUTES.ADMIN_ORDERS, icon: ClipboardList, label: "Orders", badge: true },
    ],
  },
  {
    label: "Catalog",
    items: [
      { href: ROUTES.ADMIN_PRODUCTS, icon: Package, label: "Products" },
      { href: "/admin/promotions", icon: Tag, label: "Promotions" },
    ],
  },
  {
    label: "Operations",
    items: [
      { href: "/admin/customers", icon: Users, label: "Customers" },
      { href: "/admin/vendors", icon: ShoppingBag, label: "Vendors" },
      { href: "/admin/delivery", icon: Truck, label: "Delivery" },
    ],
  },
] as const

export function AdminSidebar(): JSX.Element {
  const pathname = usePathname()
  const { profile } = useAuth()
  const initials = profile?.full_name
    ? profile.full_name
        .trim()
        .split(/\s+/)
        .map((s) => s[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "—"
  const name = profile?.full_name?.trim() ?? "Admin"
  const role = profile?.role ?? "admin"

  return (
    <aside
      className="w-[220px] shrink-0 flex flex-col border-r"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
        <p className="font-display font-bold tracking-[0.12em]" style={{ color: "var(--sage)" }}>
          BRASENA
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {NAV.map((section) => (
          <div key={section.label} className="mb-6">
            <p
              className="px-5 text-[10px] font-semibold uppercase tracking-wider mb-2"
              style={{ color: "var(--text3)" }}
            >
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href)
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-5 py-2.5 min-h-[44px] transition-colors",
                        active && "font-medium"
                      )}
                      style={{
                        background: active ? "var(--sage-bg)" : "transparent",
                        color: active ? "var(--sage)" : "var(--text-secondary)",
                      }}
                    >
                      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.8} />
                      <span>{item.label}</span>
                      {"badge" in item && item.badge && (
                        <span
                          className="ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded"
                          style={{ background: "var(--card2)", color: "var(--text3)" }}
                        >
                          0
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div
        className="p-4 border-t flex items-center gap-3"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
          style={{ background: "var(--sage-bg)", color: "var(--sage)" }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
            {name}
          </p>
          <p className="text-xs capitalize truncate" style={{ color: "var(--text3)" }}>
            {role}
          </p>
        </div>
      </div>
    </aside>
  )
}
