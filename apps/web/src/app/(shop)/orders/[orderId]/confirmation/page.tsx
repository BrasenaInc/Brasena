"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useSupabase } from "@/lib/hooks/useSupabase"
import { useLanguage } from "@/lib/context/language"

interface OrderRow {
  id: string
  order_number: string
  estimated_delivery: string
}

export default function OrderConfirmationPage(): JSX.Element {
  const params = useParams()
  const orderId = typeof params.orderId === "string" ? params.orderId : ""
  const { t } = useLanguage()
  const supabase = useSupabase()
  const [order, setOrder] = useState<OrderRow | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!orderId) return
    let mounted = true
    async function load(): Promise<void> {
      try {
        const { data, error } = await supabase
          .from("orders")
          .select("id, order_number, estimated_delivery")
          .eq("id", orderId)
          .single()
        if (!mounted) return
        if (error) throw error
        setOrder(data as OrderRow)
      } catch {
        setOrder(null)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [orderId, supabase])

  const deliveryDateStr = order?.estimated_delivery
    ? new Date(order.estimated_delivery).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
    : ""

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--surface)" }}>
        <div className="animate-pulse rounded-full h-12 w-12" style={{ background: "var(--card2)" }} />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: "var(--surface)" }}>
        <p className="text-sm mb-4" style={{ color: "var(--text3)" }}>Order not found.</p>
        <Link href="/home" className="btn-primary min-h-[44px] px-6">
          {t("nav.home")}
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ background: "var(--surface)" }}>
      <div className="w-full max-w-sm flex flex-col items-center">
        <svg
          className="w-20 h-20 mb-6"
          viewBox="0 0 80 80"
          fill="none"
          role="img"
          aria-hidden
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="var(--color-success)"
            strokeWidth="4"
            fill="rgba(76,175,125,0.08)"
            style={{ strokeDasharray: 226, strokeDashoffset: 226, animation: "checkmarkCircle 600ms ease forwards" }}
          />
          <path
            d="M24 40 L34 50 L56 28"
            stroke="var(--color-success)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{ strokeDasharray: 50, strokeDashoffset: 50, animation: "checkmarkDraw 600ms ease 200ms forwards" }}
          />
        </svg>
        <style>{`
          @keyframes checkmarkCircle {
            from { stroke-dashoffset: 226; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes checkmarkDraw {
            from { stroke-dashoffset: 50; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>
        <h1 className="font-display text-2xl font-bold text-center mt-2" style={{ color: "var(--text-primary)" }}>
          {t("order.placed")}
        </h1>
        <p className="font-mono text-sm mt-2" style={{ color: "var(--text3)" }}>
          Order #{order.order_number}
        </p>
        <p className="text-sm mt-2 text-center" style={{ color: "var(--text3)" }}>
          {t("order.weSendUpdates")}
        </p>
        <p className="text-sm font-medium mt-1" style={{ color: "var(--text-primary)" }}>
          {t("order.estimatedDelivery")}: {deliveryDateStr || t("order.tomorrow")}
        </p>
        <div className="flex flex-col gap-3 w-full mt-8">
          <Link
            href={`/orders/${orderId}`}
            className="btn-primary w-full rounded-2xl h-[54px] flex items-center justify-center"
          >
            {t("order.trackOrder")}
          </Link>
          <Link
            href={"/home"}
            className="btn-ghost w-full rounded-2xl h-[54px] flex items-center justify-center border"
            style={{ borderColor: "var(--border)" }}
          >
            {t("order.continueShopping")}
          </Link>
        </div>
      </div>
    </div>
  )
}
