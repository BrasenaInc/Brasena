"use client"

/**
 * Client-side providers (language, etc.) for the root layout.
 */

import { type ReactNode } from "react"
import { LanguageProvider } from "@/lib/context/language"

export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return <LanguageProvider>{children}</LanguageProvider>
}
