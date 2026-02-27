"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/context/theme"
import { cn } from "@/lib/utils"

export function ThemeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="inline-flex rounded-[20px] border p-0.5 gap-0.5"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
      role="group"
      aria-label="Theme"
    >
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "rounded-2xl px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 min-h-[44px] transition-all",
          theme === "dark" ? "bg-[var(--sage)] text-[var(--color-brand-black)]" : "bg-transparent"
        )}
        style={theme !== "dark" ? { color: "var(--text3)" } : undefined}
      >
        <Moon className="h-4 w-4" strokeWidth={1.8} />
        Dark
      </button>
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          "rounded-2xl px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 min-h-[44px] transition-all",
          theme === "light" ? "bg-[var(--sage)] text-[var(--color-brand-black)]" : "bg-transparent"
        )}
        style={theme !== "light" ? { color: "var(--text3)" } : undefined}
      >
        <Sun className="h-4 w-4" strokeWidth={1.8} />
        Light
      </button>
    </div>
  )
}
