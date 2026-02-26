"use client"

/**
 * Wrapper for auth layout: positions the language toggle (EN/ES) at top-right
 * and renders children. Used only under (auth) routes.
 */

import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"

export function AuthShell({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <div className={cn("relative w-full flex-1 flex flex-col", className)}>
      <LanguageToggle />
      {children}
    </div>
  )
}
