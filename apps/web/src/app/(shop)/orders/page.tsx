"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ClipboardList } from "lucide-react"
import { TopNav, BottomNav } from "@/components/features/shop"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useAuth } from "@/lib/hooks/useAuth"
import { useSupabase } from "@/lib/hooks/useSupabase"

type OrderStatus = "pending" | "confirmed" | "out_for_delivery" | "delivered" | "cancelled"

interface OrderRow {
  id: string
  order_number: string
  status: OrderStatus
  total: number
  created_at: string
}

const STATUS_COLOR: Record<string, string> = {
  pending: "var(--color-warning)",
  confirmed: "var(--sage)",
  out_for_delivery: "var(--gold-lt)",
  delivered: "var(--color-success)",
  cancelled: "var(--color-error)",
}

export default function OrdersPage(): JSX.Element {
  const { t } = useLanguage()
  const { user } = useAuth()
  const supabase = useSupabase()
  const [orders, setOrders] = useState<OrderRow[]>([])
  const [itemCounts, setItemCounts] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)

  const userId = user?.id
  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }
    const uid = userId
    let mounted = true
    async function load(): Promise<void> {
      try {
        const { data: ordersData, error: ordersErr } = await supabase
          .from("orders")
          .select("id, order_number, status, total, created_at")
          .eq("customer_id", uid)
          .order("created_at", { ascending: false })
        if (!mounted) return
        if (ordersErr || !ordersData) {
          setOrders([])
          setLoading(false)
          return
        }
        const list = ordersData as OrderRow[]
        setOrders(list)
        if (list.length === 0) {
          setItemCounts({})
          setLoading(false)
          return
        }
        const ids = list.map((o) => o.id)
        const { data: itemsData } = await supabase
          .from("order_items")
          .select("order_id")
          .in("order_id", ids)
        const counts: Record<string, number> = {}
        ids.forEach((id) => { counts[id] = 0 })
        if (itemsData && Array.isArray(itemsData)) {
          itemsData.forEach((row: { order_id: string }) => {
            counts[row.order_id] = (counts[row.order_id] ?? 0) + 1
          })
        }
        if (mounted) setItemCounts(counts)
      } catch {
        setOrders([])
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [userId, supabase])

  return (
    <>
      <TopNav title={t("orders.title")} backHref={ROUTES.ACCOUNT} showCart={false} />
      <main className="flex-1 overflow-y-auto w-full pb-24">
        <div className="mx-auto w-full max-w-[480px] px-4 py-6">
          {loading ? (
            <div className="animate-pulse rounded-xl h-24 mb-3" style={{ background: "var(--card2)" }} />
          ) : orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ClipboardList className="h-12 w-12 mb-4" style={{ color: "var(--text3)" }} strokeWidth={1.5} />
              <p className="font-display text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                {t("orders.emptyTitle")}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text3)" }}>
                {t("orders.emptySub")}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {orders.map((order) => (
                <Link
                  key={order.id}
                  href={ROUTES.ORDER(order.id)}
                  className="block rounded-[14px] border p-3.5 transition-opacity hover:opacity-90"
                  style={{ background: "var(--card)", borderColor: "var(--border)" }}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-mono text-xs" style={{ color: "var(--text3)" }}>
                      {order.order_number}
                    </p>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full capitalize"
                      style={{
                        background: `${STATUS_COLOR[order.status] ?? "var(--border)"}20`,
                        color: STATUS_COLOR[order.status] ?? "var(--text-secondary)",
                      }}
                    >
                      {order.status.replace("_", " ")}
                    </span>
                  </div>
                  <p className="font-mono font-semibold mt-1.5" style={{ color: "var(--text-primary)" }}>
                    ${(order.total / 100).toFixed(2)}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                    {itemCounts[order.id] ?? 0} items
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </>
  )
}
