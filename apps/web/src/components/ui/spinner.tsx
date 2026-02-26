/**
 * Reusable loading spinner: pure CSS animated ring. Used across loading states.
 * Supports size (sm, md, lg) and color (defaults to brand sage).
 */

import { cn } from "@/lib/utils"

type SpinnerSize = "sm" | "md" | "lg"
type SpinnerColor = "sage" | "primary" | "mint" | "white"

const sizeClasses: Record<SpinnerSize, string> = {
  sm: "w-6 h-6 border-2",
  md: "w-10 h-10 border-2",
  lg: "w-14 h-14 border-[3px]",
}

const colorClasses: Record<SpinnerColor, string> = {
  sage: "border-brand-sage border-t-transparent",
  primary: "border-primary border-t-transparent",
  mint: "border-brand-mint border-t-transparent",
  white: "border-text-primary border-t-transparent",
}

interface SpinnerProps {
  size?: SpinnerSize
  color?: SpinnerColor
  className?: string
}

export function Spinner({
  size = "md",
  color = "sage",
  className,
}: SpinnerProps): JSX.Element {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "rounded-full animate-spin",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  )
}
