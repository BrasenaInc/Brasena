"use client"

import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"

export default function CartPage(): JSX.Element {
  return (
    <>
      <TopNav title="Cart" showCart />
      <main className="flex-1 p-4">
        <p className="text-sm" style={{ color: "var(--text3)" }}>
          Cart — Sprint 4.
        </p>
      </main>
      <BottomNav />
    </>
  )
}
