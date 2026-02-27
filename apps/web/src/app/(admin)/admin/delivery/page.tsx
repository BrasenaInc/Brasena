"use client"

import { ThemeToggle } from "@/components/ui/ThemeToggle"

export default function AdminDeliveryPage(): JSX.Element {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Delivery
        </h1>
        <ThemeToggle />
      </div>
      <p className="text-sm" style={{ color: "var(--text3)" }}>Delivery — Sprint 4.</p>
    </div>
  )
}
