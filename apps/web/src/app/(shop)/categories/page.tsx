"use client"

import { TopNav } from "@/components/features/shop"
import { BottomNav } from "@/components/features/shop"

export default function CategoriesPage(): JSX.Element {
  return (
    <>
      <TopNav title="Browse" showCart />
      <main className="flex-1 p-4">
        <p className="text-sm" style={{ color: "var(--text3)" }}>
          Categories listing — Sprint 4.
        </p>
      </main>
      <BottomNav />
    </>
  )
}
