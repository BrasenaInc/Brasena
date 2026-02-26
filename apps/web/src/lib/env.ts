/**
 * Validates required environment variables at startup and exports a typed env object.
 * Uses static process.env.X references so Next.js inlines them in the client bundle.
 */

function validateEnv(): {
  NEXT_PUBLIC_SUPABASE_URL: string
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
} {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""

  if (url.trim() === "") {
    throw new Error(
      "Missing required environment variable: NEXT_PUBLIC_SUPABASE_URL - check your .env.local file"
    )
  }
  if (anonKey.trim() === "") {
    throw new Error(
      "Missing required environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY - check your .env.local file"
    )
  }
  if (stripeKey.trim() === "") {
    throw new Error(
      "Missing required environment variable: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY - check your .env.local file"
    )
  }

  if (!url.startsWith("https://") || !url.includes(".supabase.co")) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL must be the Supabase API URL (e.g. https://YOUR_REF.supabase.co). Use Project Settings → API → Project URL in the dashboard, not the Postgres connection string."
    )
  }

  if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(
      "[Brasena] Env loaded: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
    )
  }

  return {
    NEXT_PUBLIC_SUPABASE_URL: url.trim(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: anonKey.trim(),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: stripeKey.trim(),
  }
}

export const env = validateEnv()
