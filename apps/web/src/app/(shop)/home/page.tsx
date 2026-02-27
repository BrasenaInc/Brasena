"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Flame,
  LayoutGrid,
  Beef,
  UtensilsCrossed,
  Bird,
  ChevronRight,
  Tag,
  Package,
} from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import {
  useFeaturedProduct,
  useProducts,
  useActivePromotion,
  type ProductWithTiers,
} from "@/lib/hooks/useProducts"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: "All", icon: LayoutGrid },
  { id: "Beef", icon: Beef },
  { id: "Pork", icon: UtensilsCrossed },
  { id: "Chicken", icon: Bird },
] as const

function HeroSkeleton(): JSX.Element {
  return (
    <div
      className="mx-4 mt-4 h-[180px] rounded-[22px] animate-pulse"
      style={{ background: "var(--card2)" }}
    />
  )
}

function ProductCardSkeleton(): JSX.Element {
  return (
    <div
      className="h-[220px] w-[155px] shrink-0 rounded-[18px] animate-pulse"
      style={{ background: "var(--card2)" }}
    />
  )
}

function CategoryIcon({ category }: { category: string }): JSX.Element {
  const C = CATEGORIES.find((c) => c.id === category)?.icon ?? Package
  return <C className="h-8 w-8" style={{ color: "var(--text3)" }} strokeWidth={1.5} />
}

export default function ShopHomePage(): JSX.Element {
  const { t, language } = useLanguage()
  const [category, setCategory] = useState<string>("All")
  const { data: featured, isLoading: loadingFeatured } = useFeaturedProduct()
  const { data: products, isLoading: loadingProducts } = useProducts(category === "All" ? undefined : category)
  const { data: promotion } = useActivePromotion()

  const heroEyebrow = language === "es" ? t("shop.heroOferta") : t("shop.heroEyebrow")
  const shopNow = language === "es" ? t("shop.comprarAhora") : t("shop.shopNow")
  const categoriesLabel = language === "es" ? t("shop.categorias") : t("shop.categories")
  const seeAll = language === "es" ? t("shop.verTodo") : t("shop.seeAll")
  const popularLabel = t("shop.popular")
  const viewMore = language === "es" ? t("shop.verMas") : t("shop.viewMore")
  const saveLabel = language === "es" ? t("shop.save") : t("shop.save")

  return (
    <>
      <TopNav greeting showCart />

      <main className="flex-1 overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: "none" }}>
        {/* Hero */}
        <section className="px-4 pt-2">
          {loadingFeatured ? (
            <HeroSkeleton />
          ) : featured ? (
            <div
              className="relative rounded-[22px] p-6 overflow-hidden border"
              style={{
                background: "var(--hero-bg)",
                borderColor: "var(--hero-border)",
              }}
            >
              {(() => {
                const tiers = featured.weight_tiers
                const maxTier = tiers.length ? tiers[tiers.length - 1] : null
                const savings =
                  maxTier && "savings_amount" in maxTier && maxTier.savings_amount
                    ? (maxTier.savings_amount / 100).toFixed(0)
                    : "0"
                const weightRange =
                  tiers.length >= 2
                    ? `${tiers[0].weight_lbs}lb – ${tiers[tiers.length - 1].weight_lbs}lb`
                    : tiers[0]
                      ? `${tiers[0].weight_lbs}lb`
                      : ""
                return (
                  <>
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold-lt)" }}>
                      <Flame className="h-3.5 w-3.5" strokeWidth={2} />
                      {heroEyebrow}
                    </div>
                    <h2 className="font-display text-2xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                      {language === "es" ? t("shop.heroTitle1") : t("shop.heroTitle1")}
                      <br />
                      <span style={{ color: "var(--sage)" }}>{language === "es" ? t("shop.heroTitle2") : t("shop.heroTitle2")}</span>
                    </h2>
                    <p className="text-xs mt-1.5 mb-4" style={{ color: "var(--text3)" }}>
                      {featured.name} {weightRange && `· ${weightRange} bags`}
                    </p>
                    <Link
                      href={ROUTES.PRODUCT(featured.slug)}
                      className="btn-primary inline-flex items-center gap-1.5 text-sm px-4 py-2.5 rounded-xl min-h-[44px]"
                    >
                      {shopNow}
                      <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                    </Link>
                    <div
                      className="absolute top-3 right-3 text-xs font-mono font-semibold px-2 py-1 rounded-lg"
                      style={{ background: "var(--gold-bg)", color: "var(--gold-lt)" }}
                    >
                      {saveLabel} ${savings}
                    </div>
                  </>
                )
              })()}
            </div>
          ) : (
            <div
              className="mx-4 mt-4 rounded-2xl border p-6 text-center"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <p className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                {t("home.comingSoon")}
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--text3)" }}>
                {t("home.comingSoonSub")}
              </p>
            </div>
          )}
        </section>

        {/* Daily special strip */}
        {promotion && (
          <section className="mx-4 mt-4 rounded-xl border p-4 flex items-center gap-3" style={{ background: "var(--gold-bg)", borderColor: "var(--gold-border)" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--card)" }}>
              <Tag className="h-5 w-5" style={{ color: "var(--gold-lt)" }} strokeWidth={1.8} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate" style={{ color: "var(--text-primary)" }}>
                {promotion.description}
              </p>
              <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: "var(--card)", color: "var(--gold-lt)" }}>
                {promotion.code}
              </span>
            </div>
            <Link href="#" className="text-xs font-medium shrink-0 min-h-[44px] flex items-center" style={{ color: "var(--sage)" }}>
              {t("shop.promoView")}
            </Link>
          </section>
        )}

        {/* Categories */}
        <section className="mt-6 px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
              {categoriesLabel}
            </h3>
            <Link href={ROUTES.CATEGORIES} className="text-xs" style={{ color: "var(--sage)" }}>
              {seeAll}
            </Link>
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const active = category === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={cn(
                    "shrink-0 flex items-center gap-2 rounded-full border px-4 py-2.5 min-h-[44px] transition-all",
                    active ? "border-[var(--sage)]" : "border-[var(--border)]"
                  )}
                  style={{
                    background: active ? "var(--sage-bg)" : "var(--card)",
                    color: active ? "var(--sage)" : "var(--text-secondary)",
                  }}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  <span className="text-sm font-medium">{cat.id}</span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Products */}
        <section className="mt-4 px-4 pb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
              {popularLabel}
            </h3>
            <Link href={ROUTES.CATEGORIES} className="text-xs" style={{ color: "var(--sage)" }}>
              {viewMore}
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {loadingProducts ? (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            ) : (products ?? []).length === 0 ? (
              <div className="px-5 py-8 text-center w-full">
                <p className="text-sm" style={{ color: "var(--text3)" }}>
                  {t("home.noProducts")}
                </p>
              </div>
            ) : (
              (products ?? []).map((product) => (
                <ProductCard key={product.id} product={product} saveLabel={saveLabel} />
              ))
            )}
          </div>
        </section>
      </main>

      <BottomNav />
    </>
  )
}

function ProductCard({ product, saveLabel }: { product: ProductWithTiers; saveLabel: string }): JSX.Element {
  const tiers = product.weight_tiers ?? []
  const cheapest = tiers[0]
  const pricePerLb = cheapest ? (cheapest.price_per_lb / 100).toFixed(2) : "0.00"
  const maxTier = tiers.length ? tiers[tiers.length - 1] : null
  const savingsPercent =
    maxTier && "savings_percent" in maxTier && typeof maxTier.savings_percent === "number" && maxTier.savings_percent > 0
      ? Math.round(maxTier.savings_percent)
      : 0
  const weightRange = tiers.length >= 2 ? `10lb – ${tiers[tiers.length - 1].weight_lbs}lb` : tiers[0] ? `${tiers[0].weight_lbs}lb` : ""

  return (
    <Link
      href={ROUTES.PRODUCT(product.slug)}
      className="w-[155px] shrink-0 rounded-[18px] border overflow-hidden transition-all hover:border-[var(--sage)]/30"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div
        className="h-[110px] flex items-center justify-center relative"
        style={{ background: "var(--thumb-bg)" }}
      >
        <CategoryIcon category={product.category} />
        {savingsPercent > 0 && (
          <span
            className="absolute top-2 right-2 text-[10px] font-semibold px-1.5 py-0.5 rounded"
            style={{ background: "var(--sage-bg-lt)", color: "var(--sage)" }}
          >
            -{savingsPercent}%
          </span>
        )}
      </div>
      <div className="p-3">
        <h4 className="font-semibold text-xs leading-tight line-clamp-2" style={{ color: "var(--text-primary)" }}>
          {product.name}
        </h4>
        <p className="text-[11px] mt-0.5" style={{ color: "var(--text3)" }}>
          {weightRange} bags
        </p>
        <p className="font-mono text-sm font-medium mt-1" style={{ color: "var(--sage)" }}>
          ${pricePerLb}
          <span className="text-[11px] font-normal ml-0.5" style={{ color: "var(--text3)" }}>
            /lb
          </span>
        </p>
      </div>
    </Link>
  )
}

