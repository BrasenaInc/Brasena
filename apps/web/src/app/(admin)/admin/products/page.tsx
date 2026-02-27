"use client"

import { useState, useMemo, useCallback } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import {
  Search,
  Filter,
  Plus,
  Upload,
  Pencil,
  Trash2,
  Beef,
  UtensilsCrossed,
  Bird,
  Package,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { BUSINESS } from "@/config"
import { useSupabase } from "@/lib/hooks/useSupabase"
import type { Database } from "@/types/supabase"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { cn } from "@/lib/utils"

type ProductRow = Database["public"]["Tables"]["products"]["Row"]
type WeightTierRow = Database["public"]["Tables"]["weight_tiers"]["Row"]

interface ProductWithTiers extends ProductRow {
  weight_tiers: WeightTierRow[]
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

function CategoryIcon({ category }: { category: string }): JSX.Element {
  switch (category) {
    case "Beef":
      return <Beef className="h-5 w-5" style={{ color: "var(--text3)" }} />
    case "Pork":
      return <UtensilsCrossed className="h-5 w-5" style={{ color: "var(--text3)" }} />
    case "Chicken":
      return <Bird className="h-5 w-5" style={{ color: "var(--text3)" }} />
    default:
      return <Package className="h-5 w-5" style={{ color: "var(--text3)" }} />
  }
}

export default function AdminProductsPage(): JSX.Element {
  const supabase = useSupabase()
  const queryClient = useQueryClient()
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("All")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<ProductWithTiers | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async (): Promise<ProductWithTiers[]> => {
      const { data: prods, error: e1 } = await supabase.from("products").select("*").order("created_at", { ascending: false })
      if (e1) throw e1
      if (!prods?.length) return []
      const ids = prods.map((p) => p.id)
      const { data: tiers, error: e2 } = await supabase.from("weight_tiers").select("*").in("product_id", ids)
      if (e2) throw e2
      const map = (tiers ?? []).reduce<Record<string, WeightTierRow[]>>((acc, t) => {
        if (!acc[t.product_id]) acc[t.product_id] = []
        acc[t.product_id].push(t)
        return acc
      }, {})
      return prods.map((p) => ({ ...p, weight_tiers: map[p.id] ?? [] }))
    },
  })

  const filtered = useMemo(() => {
    let list = products
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }
    if (categoryFilter !== "All") {
      list = list.filter((p) => p.category === categoryFilter)
    }
    return list
  }, [products, search, categoryFilter])

  const inStockCount = products.filter((p) => p.in_stock).length
  const phase1Limit = BUSINESS.MAX_PHASE_1_PRODUCTS
  const slotsUsed = products.length
  const slotsRemaining = Math.max(0, phase1Limit - slotsUsed)

  const openAdd = useCallback(() => {
    setEditingProduct(null)
    setDrawerOpen(true)
  }, [])

  const openEdit = useCallback((p: ProductWithTiers) => {
    setEditingProduct(p)
    setDrawerOpen(true)
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    setEditingProduct(null)
  }, [])

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "var(--border)" }}>
        <div>
          <h1 className="font-display text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
            Products
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text3)" }}>
            {slotsUsed} of {phase1Limit} Phase 1 slots used
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button type="button" className="btn-ghost min-h-[44px] flex items-center gap-2 px-4">
            <Upload className="h-4 w-4" />
            Import CSV
          </button>
          <button type="button" onClick={openAdd} className="btn-primary min-h-[44px] flex items-center gap-2 px-4">
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "TOTAL PRODUCTS", value: products.length, change: null },
            { label: "IN STOCK", value: inStockCount, change: "up" as const },
            { label: "LOW STOCK", value: 0, change: null },
            { label: "PHASE 1 LIMIT", value: phase1Limit, sub: `${slotsRemaining} slots remaining` },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[14px] border p-4"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <p className="font-mono text-2xl font-medium" style={{ color: "var(--text-primary)" }}>
                {stat.value}
              </p>
              <p className="text-xs uppercase mt-1" style={{ color: "var(--text3)" }}>
                {stat.label}
              </p>
              {stat.sub && (
                <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>
                  {stat.sub}
                </p>
              )}
              {stat.change && (
                <span className="inline-flex mt-1">
                  {stat.change === "up" ? (
                    <TrendingUp className="h-4 w-4" style={{ color: "var(--color-success)" }} />
                  ) : (
                    <TrendingDown className="h-4 w-4" style={{ color: "var(--color-error)" }} />
                  )}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "var(--text3)" }} />
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input pl-10 min-h-[44px]"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            />
          </div>
          {(["All", ...BUSINESS.CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border",
                categoryFilter === cat ? "border-[var(--sage)]" : "border-[var(--border)]"
              )}
              style={{
                background: categoryFilter === cat ? "var(--sage-bg)" : "var(--card)",
                color: categoryFilter === cat ? "var(--sage)" : "var(--text-secondary)",
              }}
            >
              {cat}
            </button>
          ))}
          <button
            type="button"
            className="btn-ghost min-h-[44px] flex items-center gap-2 px-4"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>

        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--border)" }}>
                <th className="p-3 text-xs uppercase font-semibold w-14" style={{ color: "var(--text3)" }} />
                <th className="p-3 text-xs uppercase font-semibold" style={{ color: "var(--text3)" }}>Product</th>
                <th className="p-3 text-xs uppercase font-semibold" style={{ color: "var(--text3)" }}>Category</th>
                <th className="p-3 text-xs uppercase font-semibold" style={{ color: "var(--text3)" }}>Weight Tiers</th>
                <th className="p-3 text-xs uppercase font-semibold" style={{ color: "var(--text3)" }}>Base Price</th>
                <th className="p-3 text-xs uppercase font-semibold" style={{ color: "var(--text3)" }}>Status</th>
                <th className="p-3 text-xs uppercase font-semibold w-24" style={{ color: "var(--text3)" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={7} className="p-8 text-center text-sm" style={{ color: "var(--text3)" }}>Loading…</td></tr>
              ) : (
                filtered.map((p) => (
                  <tr
                    key={p.id}
                    className="group border-b hover:bg-[var(--surface-muted)]/50 transition-colors"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <td className="p-3">
                      <div
                        className="w-[42px] h-[42px] rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "var(--thumb-bg)" }}
                      >
                        <CategoryIcon category={p.category} />
                      </div>
                    </td>
                    <td className="p-3">
                      <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>{p.name}</p>
                      <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text3)" }}>{p.sku}</p>
                    </td>
                    <td className="p-3 text-sm" style={{ color: "var(--text-secondary)" }}>{p.category}</td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {[10, 20, 30, 40].map((w) => {
                          const has = p.weight_tiers.some((t) => t.weight_lbs === w)
                          if (!has) return null
                          return (
                            <span
                              key={w}
                              className="font-mono text-xs px-2 py-0.5 rounded"
                              style={{ background: "var(--card2)" }}
                            >
                              {w}lb
                            </span>
                          )
                        })}
                      </div>
                    </td>
                    <td className="p-3">
                      {(() => {
                        const sorted = [...p.weight_tiers].sort((a, b) => a.weight_lbs - b.weight_lbs)
                        const min = sorted[0]
                        if (!min) return "—"
                        return (
                          <span className="font-mono font-medium" style={{ color: "var(--sage)" }}>
                            ${(min.price_per_lb / 100).toFixed(2)}/lb
                          </span>
                        )
                      })()}
                    </td>
                    <td className="p-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full",
                          p.in_stock ? "bg-[var(--color-success)]/15 text-[var(--color-success)]" : "bg-[var(--color-error)]/15 text-[var(--color-error)]"
                        )}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {p.in_stock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={() => openEdit(p)}
                          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--sage-bg)]"
                          style={{ color: "var(--sage)" }}
                          aria-label="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteConfirm(p.id)}
                          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--color-error)]/15"
                          style={{ color: "var(--color-error)" }}
                          aria-label="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {drawerOpen && (
        <ProductDrawer
          product={editingProduct}
          onClose={closeDrawer}
          onSuccess={() => {
            queryClient.invalidateQueries({ queryKey: ["admin-products"] })
            closeDrawer()
          }}
          supabase={supabase}
        />
      )}

      {deleteConfirm && (
        <DeleteConfirmModal
          onConfirm={async () => {
            await supabase.from("weight_tiers").delete().eq("product_id", deleteConfirm)
            await supabase.from("products").delete().eq("id", deleteConfirm)
            queryClient.invalidateQueries({ queryKey: ["admin-products"] })
            setDeleteConfirm(null)
          }}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}
    </div>
  )
}

function DeleteConfirmModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => Promise<void>
  onCancel: () => void
}): JSX.Element {
  const [loading, setLoading] = useState(false)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="rounded-2xl border p-6 max-w-sm w-full" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
        <p className="font-display font-semibold" style={{ color: "var(--text-primary)" }}>Delete product?</p>
        <p className="text-sm mt-1" style={{ color: "var(--text3)" }}>This cannot be undone.</p>
        <div className="flex gap-3 mt-6">
          <button type="button" onClick={onCancel} className="btn-ghost flex-1 min-h-[44px]">
            Cancel
          </button>
          <button
            type="button"
            onClick={async () => {
              setLoading(true)
              try {
                await onConfirm()
              } finally {
                setLoading(false)
              }
            }}
            disabled={loading}
            className="flex-1 min-h-[44px] rounded-xl font-semibold"
            style={{ background: "var(--color-error)", color: "white" }}
          >
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  )
}

interface ProductDrawerProps {
  product: ProductWithTiers | null
  onClose: () => void
  onSuccess: () => void
  supabase: ReturnType<typeof useSupabase>
}

function ProductDrawer({ product, onClose, onSuccess, supabase }: ProductDrawerProps): JSX.Element {
  const isEdit = !!product
  const [name, setName] = useState(product?.name ?? "")
  const [category, setCategory] = useState(product?.category ?? "Chicken")
  const [cutType, setCutType] = useState(product?.cut_type ?? "")
  const [sku, setSku] = useState(product?.sku ?? "")
  const [prices, setPrices] = useState({
    "10": product?.weight_tiers?.find((t) => t.weight_lbs === 10)?.price_per_lb ?? 0,
    "20": product?.weight_tiers?.find((t) => t.weight_lbs === 20)?.price_per_lb ?? 0,
    "30": product?.weight_tiers?.find((t) => t.weight_lbs === 30)?.price_per_lb ?? 0,
    "40": product?.weight_tiers?.find((t) => t.weight_lbs === 40)?.price_per_lb ?? 0,
  })
  const [usdaGrade, setUsdaGrade] = useState(product?.usda_grade ?? "N/A")
  const [servingSize, setServingSize] = useState(product?.serving_size ?? "")
  const [inStock, setInStock] = useState(product?.in_stock ?? true)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const handleSave = async (): Promise<void> => {
    setError(null)
    if (!name.trim()) {
      setError("Product name is required.")
      return
    }
    if (!prices["10"] || prices["10"] <= 0) {
      setError("10lb tier price is required.")
      return
    }
    setSaving(true)
    try {
      if (isEdit && product) {
        await supabase
          .from("products")
          .update({
            name: name.trim(),
            category,
            cut_type: cutType.trim(),
            sku: sku.trim() || slugify(name),
            usda_grade: usdaGrade === "N/A" ? null : usdaGrade,
            serving_size: servingSize.trim() || "—",
            in_stock: inStock,
            updated_at: new Date().toISOString(),
          })
          .eq("id", product.id)
        const { error: tiersErr } = await supabase.from("weight_tiers").delete().eq("product_id", product.id)
        if (tiersErr) throw tiersErr
        for (const w of [10, 20, 30, 40]) {
          await supabase.from("weight_tiers").insert({
            product_id: product.id,
            weight_lbs: w,
            price_per_lb: prices[String(w) as keyof typeof prices],
          })
        }
      } else {
        const slug = slugify(name) + "-" + Date.now().toString(36)
        const { data: inserted, error: insertErr } = await supabase
          .from("products")
          .insert({
            name: name.trim(),
            slug,
            description: "",
            category,
            cut_type: cutType.trim(),
            sku: sku.trim() || slug.toUpperCase().slice(0, 12),
            images: [],
            serving_size: servingSize.trim() || "—",
            usda_grade: usdaGrade === "N/A" ? null : usdaGrade,
            in_stock: inStock,
          })
          .select("id")
          .single()
        if (insertErr) throw insertErr
        if (!inserted?.id) throw new Error("Insert failed")
        for (const w of [10, 20, 30, 40]) {
          await supabase.from("weight_tiers").insert({
            product_id: inserted.id,
            weight_lbs: w,
            price_per_lb: prices[String(w) as keyof typeof prices],
          })
        }
      }
      onSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close overlay"
      />
      <div
        className="fixed right-0 top-0 z-50 h-full w-[360px] flex flex-col border-l overflow-y-auto"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: "var(--border)" }}>
          <h2 className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            {isEdit ? "Edit Product" : "Add Product"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--surface-muted)]"
            style={{ color: "var(--text3)" }}
            aria-label="Close"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase mb-1.5" style={{ color: "var(--text3)" }}>Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input min-h-[44px]"
              style={{ background: "var(--surface-muted)", borderColor: "var(--border)" }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase mb-1.5" style={{ color: "var(--text3)" }}>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input min-h-[44px]"
              style={{ background: "var(--surface-muted)", borderColor: "var(--border)" }}
            >
              <option value="Chicken">Chicken</option>
              <option value="Beef">Beef</option>
              <option value="Pork">Pork</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase mb-1.5" style={{ color: "var(--text3)" }}>Cut Type</label>
            <input
              type="text"
              value={cutType}
              onChange={(e) => setCutType(e.target.value)}
              className="input min-h-[44px]"
              style={{ background: "var(--surface-muted)", borderColor: "var(--border)" }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase mb-1.5" style={{ color: "var(--text3)" }}>SKU</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="Auto-generated"
              className="input min-h-[44px] font-mono"
              style={{ background: "var(--surface-muted)", borderColor: "var(--border)" }}
            />
          </div>
          <div>
            <p className="block text-xs font-semibold uppercase mb-2" style={{ color: "var(--text3)" }}>Pricing Tiers (price per lb in cents)</p>
            <div className="grid grid-cols-2 gap-3">
              {([10, 20, 30, 40] as const).map((w) => (
                <div key={w} className="rounded-xl border p-3" style={{ background: "var(--surface-muted)", borderColor: "var(--border)" }}>
                  <label className="block text-xs mb-1" style={{ color: "var(--text3)" }}>{w}lb</label>
                  <input
                    type="number"
                    min={0}
                    value={prices[String(w) as keyof typeof prices] || ""}
                    onChange={(e) => setPrices((prev) => ({ ...prev, [String(w)]: Number(e.target.value) || 0 }))}
                    className="input min-h-[40px] font-mono text-sm py-2"
                    style={{ background: "var(--card)", borderColor: "var(--border)" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase mb-1.5" style={{ color: "var(--text3)" }}>USDA Grade</label>
            <select
              value={usdaGrade}
              onChange={(e) => setUsdaGrade(e.target.value)}
              className="input min-h-[44px]"
              style={{ background: "var(--surface-muted)", borderColor: "var(--border)" }}
            >
              <option value="Choice">Choice</option>
              <option value="Select">Select</option>
              <option value="Prime">Prime</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase mb-1.5" style={{ color: "var(--text3)" }}>Serving Size</label>
            <input
              type="text"
              value={servingSize}
              onChange={(e) => setServingSize(e.target.value)}
              className="input min-h-[44px]"
              style={{ background: "var(--surface-muted)", borderColor: "var(--border)" }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>In Stock</span>
            <button
              type="button"
              role="switch"
              aria-checked={inStock}
              onClick={() => setInStock((v) => !v)}
              className={cn(
                "w-11 h-6 rounded-full transition-colors relative",
                inStock ? "bg-[var(--sage)]" : "bg-[var(--card2)]"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                  inStock ? "left-6" : "left-1"
                )}
              />
            </button>
          </div>
        </div>
        <div className="p-4 border-t mt-auto" style={{ borderColor: "var(--border)" }}>
          {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}
          <div className="flex gap-3">
            <button type="button" onClick={onClose} className="btn-ghost flex-1 min-h-[44px]">
              Cancel
            </button>
            <button type="button" onClick={handleSave} disabled={saving} className="btn-primary flex-1 min-h-[44px]">
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
