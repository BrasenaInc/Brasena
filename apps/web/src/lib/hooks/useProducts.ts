"use client"

import { useQuery } from "@tanstack/react-query"
import type { Database } from "@/types/supabase"
import { useSupabase } from "@/lib/hooks/useSupabase"

type ProductRow = Database["public"]["Tables"]["products"]["Row"]
type WeightTierRow = Database["public"]["Tables"]["weight_tiers"]["Row"]

export interface ProductWithTiers extends ProductRow {
  weight_tiers: (WeightTierRow & {
    total_price?: number
    savings_amount?: number
    savings_percent?: number
  })[]
}

function computeTierExtras(
  tiers: WeightTierRow[],
  basePricePerLb: number
): (WeightTierRow & { total_price: number; savings_amount: number; savings_percent: number })[] {
  return tiers.map((t) => {
    const total_price = t.weight_lbs * t.price_per_lb
    const baseTotal = t.weight_lbs * basePricePerLb
    const savings_amount = baseTotal - total_price
    const savings_percent = basePricePerLb > 0 ? (savings_amount / baseTotal) * 100 : 0
    return { ...t, total_price, savings_amount, savings_percent }
  })
}

function buildProductWithTiers(
  product: ProductRow,
  tiers: WeightTierRow[]
): ProductWithTiers {
  const sorted = [...tiers].sort((a, b) => a.weight_lbs - b.weight_lbs)
  const basePrice = sorted[0]?.price_per_lb ?? 0
  const weight_tiers = computeTierExtras(sorted, basePrice)
  return { ...product, weight_tiers }
}

export function useProducts(category?: string, options?: { limit?: number }): {
  data: ProductWithTiers[] | undefined
  isLoading: boolean
  error: Error | null
} {
  const supabase = useSupabase()
  const limit = options?.limit

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", category ?? "all", limit ?? "none"],
    queryFn: async (): Promise<ProductWithTiers[]> => {
      let q = supabase
        .from("products")
        .select("*")
        .eq("in_stock", true)
        .order("created_at", { ascending: false })
      if (typeof limit === "number") {
        q = q.limit(limit)
      }
      if (category && category !== "All") {
        q = q.eq("category", category)
      }
      const { data: products, error: productsError } = await q
      if (productsError) throw productsError
      if (!products?.length) return []

      const ids = products.map((p) => p.id)
      const { data: tiers, error: tiersError } = await supabase
        .from("weight_tiers")
        .select("*")
        .in("product_id", ids)
        .order("weight_lbs", { ascending: true })
      if (tiersError) throw tiersError

      const tiersByProduct = (tiers ?? []).reduce<Record<string, WeightTierRow[]>>((acc, t) => {
        if (!acc[t.product_id]) acc[t.product_id] = []
        acc[t.product_id].push(t)
        return acc
      }, {})

      return products.map((p) => {
        const productTiers = tiersByProduct[p.id] ?? []
        return buildProductWithTiers(p, productTiers)
      })
    },
  })

  return { data, isLoading, error: error as Error | null }
}

export function useProduct(slug: string): {
  data: ProductWithTiers | undefined
  isLoading: boolean
  error: Error | null
} {
  const supabase = useSupabase()

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", slug],
    queryFn: async (): Promise<ProductWithTiers | undefined> => {
      const { data: product, error: productError } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .maybeSingle()
      if (productError) throw productError
      if (!product) return undefined

      const { data: tiers, error: tiersError } = await supabase
        .from("weight_tiers")
        .select("*")
        .eq("product_id", product.id)
        .order("weight_lbs", { ascending: true })
      if (tiersError) throw tiersError

      return buildProductWithTiers(product, tiers ?? [])
    },
    enabled: !!slug,
  })

  return { data, isLoading, error: error as Error | null }
}

export function useFeaturedProduct(): {
  data: ProductWithTiers | undefined
  isLoading: boolean
  error: Error | null
} {
  const supabase = useSupabase()

  const { data, isLoading, error } = useQuery({
    queryKey: ["featured-product"],
    queryFn: async (): Promise<ProductWithTiers | undefined> => {
      const { data: product, error: productError } = await supabase
        .from("products")
        .select("*")
        .eq("featured", true)
        .eq("in_stock", true)
        .limit(1)
        .maybeSingle()
      if (productError) throw productError
      if (!product) return undefined

      const { data: tiers, error: tiersError } = await supabase
        .from("weight_tiers")
        .select("*")
        .eq("product_id", product.id)
        .order("weight_lbs", { ascending: true })
      if (tiersError) throw tiersError

      return buildProductWithTiers(product, tiers ?? [])
    },
  })

  return { data, isLoading, error: error as Error | null }
}

export type PromotionRow = Database["public"]["Tables"]["promotions"]["Row"]

export function useActivePromotion(): {
  data: PromotionRow | null | undefined
  isLoading: boolean
  error: Error | null
} {
  const supabase = useSupabase()

  const { data, isLoading, error } = useQuery({
    queryKey: ["active-promotion"],
    queryFn: async (): Promise<PromotionRow | null> => {
      const { data: rows, error: e } = await supabase
        .from("promotions")
        .select("*")
        .eq("is_active", true)
        .gt("expires_at", new Date().toISOString())
        .limit(1)
        .maybeSingle()
      if (e) {
        if ((e as { code?: string }).code === "42P01") return null
        throw e
      }
      return rows
    },
  })

  return { data, isLoading, error: error as Error | null }
}
