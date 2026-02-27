"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import {
  Users,
  Minus,
  Plus,
  CheckCircle2,
  Beef,
  UtensilsCrossed,
  Bird,
  Package,
} from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useProduct } from "@/lib/hooks/useProducts"
import { useCartStore } from "@/store/cart.store"
import { useToast } from "@/lib/hooks/useToast"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

const CATEGORY_ICONS: Record<string, typeof Beef> = {
  Beef,
  Pork: UtensilsCrossed,
  Chicken: Bird,
}

function CategoryIcon({ category }: { category: string }): JSX.Element {
  const Icon = CATEGORY_ICONS[category] ?? Package
  return <Icon className="h-16 w-16" style={{ color: "var(--text3)" }} strokeWidth={1.5} />
}

type WeightTier = {
  weight_lbs: number
  price_per_lb: number
  savings_percent?: number
}

export default function ProductDetailPage(): JSX.Element {
  const params = useParams()
  const slug = typeof params.slug === "string" ? params.slug : ""
  const { t } = useLanguage()
  const { data: product, isLoading } = useProduct(slug)
  const addItem = useCartStore((s) => s.addItem)
  const { showToast } = useToast()

  const [selectedTierIndex, setSelectedTierIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)

  const tiers = product?.weight_tiers ?? []
  const selectedTier: WeightTier | undefined = tiers[selectedTierIndex]
  const totalCents = selectedTier
    ? selectedTier.weight_lbs * selectedTier.price_per_lb * quantity
    : 0

  function handleAddToCart(): void {
    if (!product || !selectedTier) return
    setAdding(true)
    try {
      addItem({
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        productSku: product.sku,
        category: product.category,
        weightLbs: selectedTier.weight_lbs,
        pricePerLb: selectedTier.price_per_lb,
        quantity,
      })
      showToast({ message: t("product.addedToCart"), type: "success" })
    } catch {
      showToast({ message: "Something went wrong", type: "error" })
    } finally {
      setAdding(false)
    }
  }

  if (isLoading || !slug) {
    return (
      <>
        <TopNav backHref={ROUTES.CATEGORIES} title="..." showCart />
        <main className="flex-1 flex items-center justify-center min-h-[200px]">
          <Spinner size="lg" />
        </main>
        <BottomNav />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <TopNav backHref={ROUTES.CATEGORIES} title={t("common.back")} showCart />
        <main className="flex-1 p-4">
          <p className="text-sm" style={{ color: "var(--text3)" }}>Product not found.</p>
        </main>
        <BottomNav />
      </>
    )
  }

  return (
    <>
      <TopNav backHref={ROUTES.CATEGORIES} title={product.name} showCart />
      <main className="flex-1 overflow-y-auto pb-[120px]">
        <div className="relative h-[280px] w-full flex items-center justify-center" style={{ background: "var(--thumb-bg)" }}>
          <CategoryIcon category={product.category} />
          <span
            className="absolute bottom-3 left-3 uppercase text-xs font-semibold tracking-widest rounded-lg px-2.5 py-1"
            style={{ background: "var(--sage-bg)", color: "var(--sage)" }}
          >
            {product.category}
          </span>
          {product.featured && (
            <span
              className="absolute top-3 right-3 text-xs font-semibold rounded-lg px-2.5 py-1"
              style={{ background: "var(--gold-bg)", color: "var(--gold-lt)" }}
            >
              Featured
            </span>
          )}
        </div>

        <div className="px-5 pt-5">
          <h1 className="font-display text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            {product.name}
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text3)" }}>
            {product.cut_type}
          </p>
          {product.usda_grade && product.usda_grade !== "N/A" && (
            <span
              className="inline-block mt-2 font-mono text-xs px-2 py-1 rounded-full"
              style={{ background: "var(--card2)", color: "var(--text-secondary)" }}
            >
              {product.usda_grade}
            </span>
          )}
          <div className="flex items-center gap-2 mt-2" style={{ color: "var(--text3)" }}>
            <Users className="h-4 w-4" strokeWidth={1.8} />
            <span className="text-sm">{product.serving_size}</span>
          </div>
          <div className="h-px my-4" style={{ background: "var(--border)" }} />
        </div>

        <div className="px-5">
          <p className="uppercase text-xs tracking-widest mb-2.5" style={{ color: "var(--text3)" }}>
            {t("product.selectWeight")}
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {tiers.map((tier, idx) => {
              const isSelected = selectedTierIndex === idx
              const totalDollars = ((tier.weight_lbs * tier.price_per_lb) / 100).toFixed(2)
              const perLb = (tier.price_per_lb / 100).toFixed(2)
              const savings = "savings_percent" in tier && typeof tier.savings_percent === "number" ? tier.savings_percent : 0
              return (
                <button
                  key={tier.weight_lbs}
                  type="button"
                  onClick={() => setSelectedTierIndex(idx)}
                  className={cn(
                    "relative rounded-[14px] border-2 p-3.5 text-left transition-all min-h-[80px]",
                    isSelected ? "border-[var(--sage)]" : "border-[var(--border)]"
                  )}
                  style={{
                    background: isSelected ? "var(--sage-bg)" : "var(--card)",
                  }}
                >
                  {isSelected && (
                    <CheckCircle2
                      className="absolute top-2 right-2 h-4 w-4"
                      style={{ color: "var(--sage)" }}
                      strokeWidth={2}
                    />
                  )}
                  <p className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                    {tier.weight_lbs} lb
                  </p>
                  <p className="font-mono font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    ${totalDollars}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                    ${perLb} / lb
                  </p>
                  {savings > 0 && (
                    <p className="text-xs font-medium mt-1" style={{ color: "var(--sage)" }}>
                      -{Math.round(savings)}% savings
                    </p>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="px-5 mt-6 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center min-h-[44px] min-w-[44px]"
            style={{ background: "var(--card2)", borderColor: "var(--border)" }}
            aria-label="Decrease quantity"
          >
            <Minus className="h-5 w-5" style={{ color: "var(--text-primary)" }} strokeWidth={2} />
          </button>
          <span className="font-mono font-semibold text-lg min-w-[40px] text-center" style={{ color: "var(--text-primary)" }}>
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            className="h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center min-h-[44px] min-w-[44px]"
            style={{ background: "var(--card2)", borderColor: "var(--border)" }}
            aria-label="Increase quantity"
          >
            <Plus className="h-5 w-5" style={{ color: "var(--text-primary)" }} strokeWidth={2} />
          </button>
          <p className="text-sm ml-2" style={{ color: "var(--text3)" }}>
            Total: {selectedTier ? selectedTier.weight_lbs * quantity : 0} lb
          </p>
        </div>

        <div className="mx-5 mt-4 rounded-[14px] border p-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <div className="flex justify-between items-center">
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{t("product.subtotal")}</span>
            <span className="font-mono font-semibold" style={{ color: "var(--sage)" }}>
              ${(totalCents / 100).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm" style={{ color: "var(--text3)" }}>
            <span>{t("product.estDelivery")}</span>
            <span>{t("product.nextDay")}</span>
          </div>
        </div>
      </main>

      <div
        className="sticky bottom-0 left-0 right-0 z-40 px-4 py-3 border-t"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!selectedTier || adding}
          className={cn(
            "w-full btn-primary rounded-2xl h-[54px] flex items-center justify-between px-5",
            (!selectedTier || adding) && "opacity-50"
          )}
        >
          <span>{adding ? <Spinner size="sm" color="white" /> : t("product.addToCart")}</span>
          <span className="font-mono font-semibold">${(totalCents / 100).toFixed(2)}</span>
        </button>
      </div>
      <BottomNav />
    </>
  )
}

