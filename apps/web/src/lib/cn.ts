/**
 * Tailwind class merger with no config/env dependencies.
 * Use this in error boundaries and any code that must load before or without env (e.g. error.tsx).
 * For other code, prefer importing cn from @/lib/utils.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
