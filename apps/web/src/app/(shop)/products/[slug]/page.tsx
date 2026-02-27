"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { ROUTES } from "@/config"
import { useProduct } from "@/lib/hooks/useProducts"
import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"

export default function ProductDetailPage(): JSX.Element {
  const params = useParams()
  const slug = typeof params.slug === "string" ? params.slug : ""
  const { data: product, isLoading } = useProduct(slug)

  return (
    <>
      <TopNav backHref={ROUTES.SHOP} title={product?.name ?? "Product"} showCart />
      <main className="flex-1 p-4">
        {isLoading && <p style={{ color: "var(--text3)" }}>Loading…</p>}
        {!isLoading && product && (
          <div>
            <p className="font-display font-semibold" style={{ color: "var(--text-primary)" }}>
              {product.name}
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--text3)" }}>
              Product detail — Sprint 4.
            </p>
          </div>
        )}
        {!isLoading && !product && slug && (
          <p style={{ color: "var(--text3)" }}>Product not found.</p>
        )}
      </main>
      <BottomNav />
    </>
  )
}
