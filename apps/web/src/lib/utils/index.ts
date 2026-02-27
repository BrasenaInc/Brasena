import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { BUSINESS, config } from "@/config"

/**
 * Merge Tailwind classes safely.
 * Handles conflicts like "bg-red-500 bg-blue-500" → "bg-blue-500"
 * This is the standard pattern for any Tailwind + React project.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as USD currency.
 * Used throughout the UI for prices.
 */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100)
}

/**
 * Format price per pound display.
 * e.g. "$3.49/lb"
 */
export function formatPricePerLb(pricePerLbCents: number): string {
  return `${formatPrice(pricePerLbCents)}/lb`
}

/**
 * Calculate savings percentage between base and tier price.
 */
export function calcSavingsPercent(base: number, sale: number): number {
  if (base === 0) return 0
  return Math.round(((base - sale) / base) * 100)
}

/**
 * Determine delivery provider based on total order weight.
 * Orders over 30lb go to private van per business rules.
 */
export function getDeliveryProvider(
  totalWeightLbs: number
): "uber_direct" | "doordash" | "private_van" {
  if (totalWeightLbs > config.delivery.maxWeightForUber) {
    return "private_van"
  }
  // Under 30lb - Uber Direct preferred, DoorDash as fallback
  return "uber_direct"
}

/**
 * Check if a zip code is in the current service area.
 */
export function isZipCodeServiced(zip: string): boolean {
  return (BUSINESS.SERVICE_ZIPCODES as readonly string[]).includes(zip)
}

/**
 * Generate a human-readable order number.
 * e.g. "BR-2024-00042"
 */
export function generateOrderNumber(id: number): string {
  const year = new Date().getFullYear()
  return `BR-${year}-${String(id).padStart(5, "0")}`
}

/**
 * Generate a unique order number for insert (timestamp-based).
 * e.g. "BR-2025-12345"
 */
export function generateOrderNumberForInsert(): string {
  const year = new Date().getFullYear()
  const suffix = String(Date.now() % 100000).padStart(5, "0")
  return `BR-${year}-${suffix}`
}

/**
 * Format a date for display in order tracking.
 */
export function formatDeliveryDate(isoString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(isoString))
}

/**
 * Get the next business day as an ISO date string.
 * Used for "next day delivery" display.
 */
export function getNextDeliveryDate(): string {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  // Skip Sunday (0) - no deliveries
  if (tomorrow.getDay() === 0) {
    tomorrow.setDate(tomorrow.getDate() + 1)
  }

  return tomorrow.toISOString()
}

/**
 * Calculate total weight of a cart in lbs.
 */
export function calcTotalWeight(
  items: Array<{ weightLbs: number; quantity: number }>
): number {
  return items.reduce((sum, i) => sum + i.weightLbs * i.quantity, 0)
}

/**
 * Debounce a function - useful for search inputs.
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), ms)
  }
}
