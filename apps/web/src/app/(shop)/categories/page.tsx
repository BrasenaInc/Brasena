"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, X, PackageSearch, LayoutGrid, Beef, UtensilsCrossed, Bird, Package } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useProducts } from "@/lib/hooks/useProducts"
import type { ProductWithTiers } from "@/lib/hooks/useProducts"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: "All", icon: LayoutGrid },
  { id: "Beef", icon: Beef },
  { id: "Pork", icon: UtensilsCrossed },
  { id: "Chicken", icon: Bird },
] as const

function CategoryIcon({ category }: { category: string }): JSX.Element {
  const C = CATEGORIES.find((c) => c.id === category)?.icon ?? Package
  return <C className="h-8 w-8" style={{ color: "var(--text3)" }} strokeWidth={1.5} />
}

function ProductCardSkeleton(): JSX.Element {
  return (
    <div
      className="rounded-[18px] overflow-hidden animate-pulse"
      style={{ background: "var(--card2)" }}
    >
      <div className="h-[120px]" />
      <div className="p-3 h-[90px]" />
    </div>
  )
}

export default function CategoriesPage(): JSX.Element {
  const { t } = useLanguage()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<string>("All")
  const { data: products, isLoading } = useProducts(undefined)

  const filtered = useMemo(() => {
    const list = products ?? []
    const byCategory =
      category === "All" ? list : list.filter((p) => p.category === category)
    if (!search.trim()) return byCategory
    const q = search.trim().toLowerCase()
    return byCategory.filter((p) => p.name.toLowerCase().includes(q))
  }, [products, category, search])

  return (
    <>
      <TopNav title={t("nav.browse")} showCart />
      <main className="flex-1 overflow-y-auto">
        <div
          className="sticky top-14 z-30 px-4 pt-3 pb-2"
          style={{ background: "var(--surface)" }}
        >
          <div
            className="flex items-center gap-2 rounded-[14px] border h-[44px] px-4"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <Search className="h-5 w-5 shrink-0" style={{ color: "var(--text3)" }} strokeWidth={1.8} />
            <input
              type="search"
              placeholder={t("browse.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-0 bg-transparent text-sm outline-none"
              style={{ color: "var(--text-primary)" }}
              aria-label="Search products"
            />
            {search.length > 0 && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{ color: "var(--text3)" }}
                aria-label="Clear search"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto mt-3 pb-1" style={{ scrollbarWidth: "none" }}>
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
        </div>
        <div className="px-4 pb-[100px] pt-2">
          <div className="grid grid-cols-2 gap-3">
            {isLoading ? (
              <>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </>
            ) : filtered.length === 0 ? (
              <div className="col-span-2 flex flex-col items-center justify-center py-12 px-4">
                <PackageSearch
                  className="h-10 w-10 mb-3"
                  style={{ color: "var(--text3)" }}
                  strokeWidth={1.5}
                />
                <p className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                  {t("browse.noResults")}
                </p>
                <p className="text-sm mt-1 text-center" style={{ color: "var(--text3)" }}>
                  {t("browse.tryDifferentSearch")}
                </p>
              </div>
            ) : (
              filtered.map((product) => (
                <ProductGridCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  )
}

function ProductGridCard({ product }: { product: ProductWithTiers }): JSX.Element {
  const tiers = product.weight_tiers ?? []
  const cheapest = tiers[0]
  const pricePerLb = cheapest ? cheapest.price_per_lb : 0
  const maxTier = tiers.length ? tiers[tiers.length - 1] : null
  const savingsPercent =
    maxTier && "savings_percent" in maxTier && typeof maxTier.savings_percent === "number" && maxTier.savings_percent > 0
      ? Math.round(maxTier.savings_percent)
      : 0
  const weightRange =
    tiers.length >= 2
      ? `10lb – ${tiers[tiers.length - 1].weight_lbs}lb`
      : tiers[0]
        ? `${tiers[0].weight_lbs}lb`
        : ""

  return (
    <Link
      href={ROUTES.PRODUCT(product.slug)}
      className="rounded-[18px] border overflow-hidden transition-all hover:opacity-95 active:opacity-95"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div
        className="h-[120px] flex items-center justify-center relative"
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
      <div className="p-[10px_12px_13px]">
        <p className="font-semibold text-sm leading-tight line-clamp-2" style={{ color: "var(--text-primary)" }}>
          {product.name}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
          {weightRange}
        </p>
        <p className="font-mono text-sm mt-1" style={{ color: "var(--sage)" }}>
          ${(pricePerLb / 100).toFixed(2)}
          <span className="text-xs font-normal ml-0.5" style={{ color: "var(--text3)" }}>
            /lb
          </span>
        </p>
      </div>
    </Link>
  )
}
