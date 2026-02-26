// ─── Environment Variables ─────────────────────────────
// All env vars flow through here. Never import process.env directly
// in components - always use this config object instead.
// Required vars are validated at boot via @/lib/env.

import { env } from "@/lib/env"

export const config = {
  app: {
    name: "Brasena",
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    env: process.env.NODE_ENV ?? "development",
  },

  supabase: {
    url: env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  stripe: {
    publishableKey: env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    // secretKey only on server - never expose to client
  },

  maps: {
    mapboxToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },

  delivery: {
    uberDirectEnabled: process.env.NEXT_PUBLIC_UBER_DIRECT_ENABLED === "true",
    maxWeightForUber: 30, // lbs - orders over 30lb go to private van
  },
} as const

// ─── Business Constants ────────────────────────────────
export const BUSINESS = {
  // Bulk pricing thresholds (lbs)
  WEIGHT_TIERS: [10, 20, 30, 40] as const,

  // Order routing
  DRIVER_NOTIFY_DELAY_MS: 7 * 60 * 1000, // 5-10 min delay after vendor confirms

  // Operating hours (EST)
  HOURS: { open: 6, close: 23 }, // 6 AM - 11 PM

  // Geographic
  INITIAL_BOROUGH: "Bronx",
  SERVICE_ZIPCODES: [
    "10451", "10452", "10453", "10454", "10455",
    "10456", "10457", "10458", "10459", "10460",
    "10461", "10462", "10463", "10464", "10465",
    "10466", "10467", "10468", "10469", "10470",
    "10471", "10472", "10473", "10474", "10475",
  ],

  // Product
  MAX_PHASE_1_PRODUCTS: 25,
  CATEGORIES: ["Beef", "Pork", "Chicken"] as const,
} as const

// ─── Route Constants ───────────────────────────────────
export const ROUTES = {
  // Public
  HOME:     "/",
  LANGUAGE: "/language",
  LOGIN:    "/login",
  SIGNUP:   "/signup",

  // Shop (authenticated)
  SHOP:       "/home",
  CATEGORIES: "/categories",
  PRODUCTS:   (category: string) => `/categories/${category}`,
  PRODUCT:    (slug: string) => `/products/${slug}`,
  CART:       "/cart",
  CHECKOUT:   "/checkout",

  // Orders
  ORDERS:      "/orders",
  ORDER:       (id: string) => `/orders/${id}`,
  ORDER_TRACK: (id: string) => `/orders/${id}/track`,

  // Account
  ACCOUNT: "/account",

  // Vendor (iPad interface)
  VENDOR_QUEUE:  "/vendor/queue",
  VENDOR_ORDER:  (id: string) => `/vendor/orders/${id}`,

  // Admin
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_PRODUCTS:  "/admin/products",
  ADMIN_ORDERS:    "/admin/orders",
} as const

// ─── Profile Types ─────────────────────────────────────
export type ProfileType = "residential" | "business"
export type UserRole = "customer" | "vendor" | "driver" | "csr" | "admin"

// ─── Order Status ──────────────────────────────────────
export const ORDER_STATUS = {
  PENDING:         "pending",
  CONFIRMED:       "confirmed",
  PREPARING:       "preparing",
  OUT_FOR_DELIVERY:"out_for_delivery",
  DELIVERED:       "delivered",
  CANCELLED:       "cancelled",
} as const

export type OrderStatus = typeof ORDER_STATUS[keyof typeof ORDER_STATUS]
