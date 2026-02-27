"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Check, MessageCircle, ChevronRight } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import type { TranslationKey } from "@/lib/context/translations"
import { useSupabase } from "@/lib/hooks/useSupabase"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { cn } from "@/lib/utils"

type OrderStatus = "pending" | "confirmed" | "out_for_delivery" | "delivered" | "cancelled"

interface OrderRow {
  id: string
  order_number: string
  status: OrderStatus
  subtotal: number
  delivery_fee: number
  total: number
  estimated_delivery: string
  delivery_address_id: string
}

interface AddressRow {
  id: string
  street: string
  apt: string | null
  city: string
  state: string
  zip: string
}

interface OrderItemRow {
  product_name: string
  weight_lbs: number
  quantity: number
  subtotal: number
}

const STATUS_STEPS: { key: OrderStatus; labelKey: string }[] = [
  { key: "pending", labelKey: "orderTracking.orderPlaced" },
  { key: "confirmed", labelKey: "orderTracking.confirmed" },
  { key: "out_for_delivery", labelKey: "orderTracking.outForDelivery" },
  { key: "delivered", labelKey: "orderTracking.delivered" },
]

function statusStepIndex(status: OrderStatus): number {
  const i = STATUS_STEPS.findIndex((s) => s.key === status)
  return i >= 0 ? i : 0
}

const STATUS_COLOR: Record<string, string> = {
  pending: "var(--color-warning)",
  confirmed: "var(--sage)",
  out_for_delivery: "var(--gold-lt)",
  delivered: "var(--color-success)",
  cancelled: "var(--color-error)",
}

export default function OrderTrackingPage(): JSX.Element {
  const params = useParams()
  const orderId = typeof params.orderId === "string" ? params.orderId : ""
  const { t } = useLanguage()
  const supabase = useSupabase()
  const [order, setOrder] = useState<OrderRow | null>(null)
  const [address, setAddress] = useState<AddressRow | null>(null)
  const [items, setItems] = useState<OrderItemRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!orderId) return
    let mounted = true
    async function load(): Promise<void> {
      try {
        const { data: orderData, error: orderErr } = await supabase
          .from("orders")
          .select("*")
          .eq("id", orderId)
          .single()
        if (!mounted) return
        if (orderErr || !orderData) {
          setOrder(null)
          setLoading(false)
          return
        }
        setOrder(orderData as OrderRow)
        const addrId = (orderData as OrderRow).delivery_address_id
        const { data: addrData } = await supabase
          .from("addresses")
          .select("id, street, apt, city, state, zip")
          .eq("id", addrId)
          .single()
        if (mounted && addrData) setAddress(addrData as AddressRow)
        const { data: itemsData } = await supabase
          .from("order_items")
          .select("product_name, weight_lbs, quantity, subtotal")
          .eq("order_id", orderId)
        if (mounted && itemsData) setItems(itemsData as OrderItemRow[])
      } catch {
        setOrder(null)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [orderId, supabase])

  if (loading) {
    return (
      <>
        <TopNav backHref={ROUTES.ACCOUNT} title={t("orderTracking.title")} showCart={false} />
        <main className="flex-1 p-4">
          <div className="animate-pulse rounded-xl h-32" style={{ background: "var(--card2)" }} />
        </main>
        <BottomNav />
      </>
    )
  }

  if (!order) {
    return (
      <>
        <TopNav backHref={ROUTES.ACCOUNT} title={t("orderTracking.title")} showCart={false} />
        <main className="flex-1 p-4">
          <p className="text-sm" style={{ color: "var(--text3)" }}>Order not found.</p>
        </main>
        <BottomNav />
      </>
    )
  }

  const currentStep = statusStepIndex(order.status)
  const deliveryDateStr = order.estimated_delivery
    ? new Date(order.estimated_delivery).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
    : ""

  return (
    <>
      <TopNav backHref={ROUTES.ACCOUNT} title={t("orderTracking.title")} showCart={false} />
      <main className="flex-1 overflow-y-auto pb-[100px]">
        <div className="px-4 py-4 space-y-6">
          <div className="flex flex-col">
            {STATUS_STEPS.map((step, idx) => {
              const isCompleted = idx < currentStep
              const isCurrent = idx === currentStep
              const isFuture = idx > currentStep
              return (
                <div key={step.key} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        isCompleted && "bg-[var(--sage)]",
                        isCurrent && "border-2 border-[var(--sage)]",
                        isFuture && "bg-[var(--border)]"
                      )}
                      style={isCurrent ? { borderColor: "var(--sage)", background: "transparent" } : undefined}
                    >
                      {isCompleted && <Check className="h-4 w-4 text-white" strokeWidth={2.5} />}
                      {isCurrent && (
                        <div
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ background: "var(--sage)" }}
                        />
                      )}
                    </div>
                    {idx < STATUS_STEPS.length - 1 && (
                      <div
                        className="w-0.5 flex-1 min-h-[24px] mt-1"
                        style={{ background: isCompleted ? "var(--sage)" : "var(--border)" }}
                      />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                      {t(step.labelKey as TranslationKey)}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                      {isCurrent ? "In progress" : isCompleted ? "Done" : ""}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="rounded-2xl border p-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <div className="flex justify-between items-start mb-2">
              <p className="font-mono text-xs" style={{ color: "var(--text3)" }}>
                {order.order_number}
              </p>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full capitalize"
                style={{ background: `${STATUS_COLOR[order.status] ?? "var(--border)"}20`, color: STATUS_COLOR[order.status] ?? "var(--text-secondary)" }}
              >
                {order.status.replace("_", " ")}
              </span>
            </div>
            {address && (
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                {address.street}
                {address.apt ? `, ${address.apt}` : ""}
                <br />
                {address.city}, {address.state} {address.zip}
              </p>
            )}
            <p className="text-sm font-medium mt-2" style={{ color: "var(--text-primary)" }}>
              Est. delivery: {deliveryDateStr}
            </p>
          </div>

          <section>
            <p className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>
              {t("orderTracking.yourOrder")}
            </p>
            <div className="rounded-xl border divide-y" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              {items.map((row, i) => (
                <div key={i} className="flex justify-between items-center py-3 px-3 text-sm">
                  <span style={{ color: "var(--text-primary)" }}>
                    {row.product_name} {row.weight_lbs} lb × {row.quantity}
                  </span>
                  <span className="font-mono" style={{ color: "var(--text-secondary)" }}>
                    ${(row.subtotal / 100).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-2xl border p-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <div className="flex justify-between text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
              <span>Subtotal</span>
              <span className="font-mono">${(order.subtotal / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
              <span>Delivery</span>
              <span className="font-mono">${(order.delivery_fee / 100).toFixed(2)}</span>
            </div>
            <div className="h-px my-2" style={{ background: "var(--border)" }} />
            <div className="flex justify-between font-semibold" style={{ color: "var(--text-primary)" }}>
              <span>Total</span>
              <span className="font-mono">${(order.total / 100).toFixed(2)}</span>
            </div>
          </div>

          <Link
            href={ROUTES.ACCOUNT}
            className="flex items-center gap-3 rounded-[14px] border p-3.5"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <MessageCircle className="h-5 w-5 shrink-0" style={{ color: "var(--text-secondary)" }} strokeWidth={1.8} />
            <span className="text-sm flex-1" style={{ color: "var(--text-secondary)" }}>
              {t("orderTracking.needHelp")}
            </span>
            <ChevronRight className="h-5 w-5 shrink-0" style={{ color: "var(--text3)" }} strokeWidth={2} />
          </Link>
        </div>
      </main>
      <BottomNav />
    </>
  )
}
