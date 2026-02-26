/**
 * Shop home placeholder. Shown after login; Sprint 3 will add the home feed and product catalog.
 */

import { BrasenaLogo } from "@/components/brasena-logo"
import { cn } from "@/lib/utils"

export default function HomePage(): JSX.Element {
  return (
    <main className={cn("min-h-screen bg-surface")}>
      <header className="flex items-center justify-center border-b border-surface-border py-3">
        <BrasenaLogo size="sm" />
      </header>
      <div className="p-4">
        <h1 className="font-display text-2xl font-semibold text-text-primary">
          Welcome home
        </h1>
      <p className="mt-2 text-text-secondary">
        Home feed and catalog coming in Sprint 3.
      </p>
      </div>
    </main>
  )
}
