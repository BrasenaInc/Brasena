"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronDown, ChevronUp, CreditCard } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useAuth } from "@/lib/hooks/useAuth"
import { useSupabase } from "@/lib/hooks/useSupabase"
import { useCartStore } from "@/store/cart.store"
import { useToast } from "@/lib/hooks/useToast"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { FormField } from "@/components/ui/form-field"
import { generateOrderNumberForInsert, getNextDeliveryDate } from "@/lib/utils"
import { cn } from "@/lib/utils"

const DELIVERY_FEE_CENTS = 499
const FREE_DELIVERY_THRESHOLD_CENTS = 5000
const MAX_INSTRUCTIONS = 200

interface AddressRow {
  id: string
  street: string
  apt: string | null
  city: string
  state: string
  zip: string
}

export default function CheckoutPage(): JSX.Element {
  const { t } = useLanguage()
  const router = useRouter()
  const supabase = useSupabase()
  const { user, profile } = useAuth()
  const items = useCartStore((s) => s.items)
  const subtotalCents = useCartStore((s) => s.subtotal())
  const clearCart = useCartStore((s) => s.clearCart)
  const { showToast } = useToast()

  const [addresses, setAddresses] = useState<AddressRow[]>([])
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)
  const [useNewAddress, setUseNewAddress] = useState(false)
  const [street, setStreet] = useState("")
  const [apt, setApt] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [instructions, setInstructions] = useState("")
  const [itemsExpanded, setItemsExpanded] = useState(false)
  const [placing, setPlacing] = useState(false)

  const deliveryFeeCents = subtotalCents >= FREE_DELIVERY_THRESHOLD_CENTS ? 0 : DELIVERY_FEE_CENTS
  const totalCents = subtotalCents + deliveryFeeCents

  useEffect(() => {
    if (!user?.id) return
    let mounted = true
    async function load(): Promise<void> {
      try {
        const { data, error } = await supabase
          .from("addresses")
          .select("id, street, apt, city, state, zip")
          .eq("user_id", user!.id)
        if (!mounted) return
        if (error) throw error
        const list = (data ?? []) as AddressRow[]
        setAddresses(list)
        if (list.length > 0 && !selectedAddressId) setSelectedAddressId(list[0].id)
      } catch {
        setAddresses([])
      }
    }
    load()
    return () => { mounted = false }
  }, [user?.id, supabase])

  async function placeOrder(): Promise<void> {
    if (!user || !profile) return
    setPlacing(true)
    try {
      let deliveryAddressId: string
      if (useNewAddress) {
        const { data: newAddr, error: addrErr } = await supabase
          .from("addresses")
          .insert({
            user_id: user.id,
            street,
            apt: apt.trim() || null,
            city,
            state,
            zip,
            instructions: instructions.trim() || null,
            is_default: false,
          })
          .select("id")
          .single()
        if (addrErr) throw addrErr
        if (!newAddr?.id) throw new Error("No address id")
        deliveryAddressId = newAddr.id
      } else {
        const sel = addresses.find((a) => a.id === selectedAddressId)
        if (!sel) throw new Error("No address selected")
        deliveryAddressId = sel.id
      }

      const { data: vendors } = await supabase
        .from("vendors")
        .select("id")
        .eq("is_active", true)
        .limit(1)
      const vendorId = vendors?.[0]?.id
      if (!vendorId) throw new Error("No vendor available")

      const orderNumber = generateOrderNumberForInsert()
      const estimatedDelivery = getNextDeliveryDate()

      const { data: order, error: orderErr } = await supabase
        .from("orders")
        .insert({
          order_number: orderNumber,
          customer_id: user.id,
          vendor_id: vendorId,
          status: "pending",
          profile_type: profile.profile_type,
          subtotal: subtotalCents,
          savings: 0,
          tax: 0,
          delivery_fee: deliveryFeeCents,
          total: totalCents,
          payment_intent_id: "pending_sprint5",
          estimated_delivery: estimatedDelivery,
          delivery_address_id: deliveryAddressId,
          notes: instructions.trim() || null,
        })
        .select()
        .single()

      if (orderErr) throw orderErr
      if (!order) throw new Error("No order returned")

      const orderItems = items.map((item) => ({
        order_id: order.id,
        product_id: item.productId,
        product_name: item.productName,
        sku: item.productSku,
        weight_lbs: item.weightLbs,
        quantity: item.quantity,
        unit_price: item.weightLbs * item.pricePerLb,
        subtotal: item.subtotal,
      }))

      const { error: itemsErr } = await supabase.from("order_items").insert(orderItems)
      if (itemsErr) throw itemsErr

      clearCart()
      router.push(`/orders/${order.id}/confirmation`)
    } catch (err) {
      showToast({
        message: t("checkout.placeOrderError"),
        type: "error",
      })
    } finally {
      setPlacing(false)
    }
  }

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId)
  const canPlace = items.length > 0 && (useNewAddress ? street && city && state && zip : !!selectedAddressId)

  return (
    <>
      <TopNav backHref={ROUTES.CART} title={t("checkout.title")} showCart={false} />
      <main className="flex-1 overflow-y-auto pb-[120px]">
        <div className="px-4 py-4 space-y-6">
          <section>
            <p className="uppercase text-xs tracking-widest mb-2" style={{ color: "var(--text3)" }}>
              {t("checkout.deliverTo")}
            </p>
            {!useNewAddress && addresses.length > 0 && (
              <div className="space-y-2">
                {addresses.map((addr) => (
                  <button
                    key={addr.id}
                    type="button"
                    onClick={() => setSelectedAddressId(addr.id)}
                    className={cn(
                      "w-full rounded-[14px] border p-3.5 text-left",
                      selectedAddressId === addr.id ? "border-2 border-[var(--sage)]" : "border-[var(--border)]"
                    )}
                    style={{ background: "var(--card)" }}
                  >
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {profile?.full_name ?? "Delivery"}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {addr.street}
                      {addr.apt ? `, ${addr.apt}` : ""}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {addr.city}, {addr.state} {addr.zip}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setUseNewAddress(true); }}
                      className="text-sm mt-2"
                      style={{ color: "var(--sage)" }}
                    >
                      {t("checkout.change")}
                    </button>
                  </button>
                ))}
              </div>
            )}
            {(useNewAddress || addresses.length === 0) && (
              <div className="rounded-[14px] border p-4 space-y-3" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                <FormField label={t("form.street")} value={street} onChange={(e) => setStreet(e.target.value)} required />
                <FormField label={t("form.apt")} value={apt} onChange={(e) => setApt(e.target.value)} />
                <FormField label={t("form.city")} value={city} onChange={(e) => setCity(e.target.value)} required />
                <FormField label={t("form.state")} value={state} onChange={(e) => setState(e.target.value)} required />
                <FormField label={t("form.zip")} value={zip} onChange={(e) => setZip(e.target.value)} required />
                {addresses.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setUseNewAddress(false)}
                    className="text-sm"
                    style={{ color: "var(--sage)" }}
                  >
                    {t("checkout.change")}
                  </button>
                )}
              </div>
            )}
            <div className="mt-3">
              <textarea
                placeholder={t("checkout.deliveryInstructions")}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value.slice(0, MAX_INSTRUCTIONS))}
                maxLength={MAX_INSTRUCTIONS}
                rows={2}
                className="w-full rounded-xl border px-3 py-2.5 text-sm resize-none outline-none min-h-[44px]"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              <p className="text-xs text-right mt-1" style={{ color: "var(--text3)" }}>
                {instructions.length}/{MAX_INSTRUCTIONS}
              </p>
            </div>
          </section>

          <section>
            <button
              type="button"
              onClick={() => setItemsExpanded((e) => !e)}
              className="w-full flex items-center justify-between py-2 rounded-xl min-h-[44px]"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="text-sm">
                {items.length} {t("checkout.itemsInOrder")}
              </span>
              {itemsExpanded ? (
                <ChevronUp className="h-5 w-5" strokeWidth={2} />
              ) : (
                <ChevronDown className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
            {itemsExpanded && (
              <div className="rounded-xl border p-3 space-y-2 mt-1" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span style={{ color: "var(--text-primary)" }}>
                      {item.productName} {item.weightLbs} lb × {item.quantity}
                    </span>
                    <span className="font-mono" style={{ color: "var(--text-secondary)" }}>
                      ${(item.subtotal / 100).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <p className="uppercase text-xs tracking-widest mb-2" style={{ color: "var(--text3)" }}>
              {t("checkout.payment")}
            </p>
            <div className="rounded-[14px] border p-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="h-5 w-5" style={{ color: "var(--text3)" }} strokeWidth={1.8} />
                <span className="text-sm" style={{ color: "var(--text3)" }}>
                  {t("checkout.securePaymentStripe")}
                </span>
              </div>
              <input
                type="text"
                placeholder="•••• •••• •••• ••••"
                readOnly
                className="w-full rounded-xl border px-3 py-2.5 text-sm mb-2 bg-transparent"
                style={{ borderColor: "var(--border)", color: "var(--text3)" }}
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  readOnly
                  className="rounded-xl border px-3 py-2.5 text-sm bg-transparent"
                  style={{ borderColor: "var(--border)", color: "var(--text3)" }}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  readOnly
                  className="rounded-xl border px-3 py-2.5 text-sm bg-transparent"
                  style={{ borderColor: "var(--border)", color: "var(--text3)" }}
                />
              </div>
              <p className="text-xs mt-2" style={{ color: "var(--text3)" }}>
                Live payments activate in the next update.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border p-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
            <div className="flex justify-between text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
              <span>Subtotal</span>
              <span className="font-mono">${(subtotalCents / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
              <span>Delivery</span>
              <span className="font-mono">
                {deliveryFeeCents === 0 ? t("cart.deliveryFreeOver50") : `$${(deliveryFeeCents / 100).toFixed(2)}`}
              </span>
            </div>
            <div className="h-px my-2" style={{ background: "var(--border)" }} />
            <div className="flex justify-between font-semibold" style={{ color: "var(--text-primary)" }}>
              <span>Total</span>
              <span className="font-mono">${(totalCents / 100).toFixed(2)}</span>
            </div>
          </section>
        </div>
      </main>

      <div
        className="sticky bottom-0 left-0 right-0 z-40 px-4 py-3 border-t"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <button
          type="button"
          onClick={placeOrder}
          disabled={!canPlace || placing}
          className={cn(
            "w-full btn-primary rounded-2xl h-[54px] flex items-center justify-between px-5",
            (!canPlace || placing) && "opacity-50 pointer-events-none"
          )}
        >
          <span>{placing ? "..." : t("checkout.placeOrder")}</span>
          <span className="font-mono font-semibold">${(totalCents / 100).toFixed(2)}</span>
        </button>
      </div>
      <BottomNav />
    </>
  )
}
