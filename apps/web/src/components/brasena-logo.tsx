/**
 * Brasena logo (PNG). Use size="sm" in headers/nav so the site is recognizable
 * without making the logo the main feature.
 */

import Image from "next/image"
import { cn } from "@/lib/utils"

type Size = "sm" | "md"

const sizes: Record<Size, { width: number; height: number; className?: string }> = {
  sm: { width: 88, height: 40, className: "h-8 w-[88px] object-contain" },
  md: { width: 140, height: 62, className: "h-auto w-[140px] object-contain" },
}

export function BrasenaLogo({
  size = "sm",
  className,
}: {
  size?: Size
  className?: string
}): JSX.Element {
  const { width, height, className: sizeClass } = sizes[size]
  return (
    <Image
      src="/logo.png"
      alt="Brasena"
      width={width}
      height={height}
      className={cn(sizeClass, className)}
    />
  )
}
