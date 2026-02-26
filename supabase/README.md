# Brasena Supabase schema

This folder contains the database schema and migrations for the Brasena app. The schema matches the TypeScript types in `apps/web/src/types/supabase.ts` and supports Sprint 1–2 (auth, profiles, addresses, and the catalog/order tables for later sprints).

## Tables

| Table | Purpose |
|-------|--------|
| `profiles` | User profile (1:1 with `auth.users`); role, profile_type, preferred_language |
| `business_profiles` | B2B profile: business_name, ein, verified |
| `addresses` | Delivery addresses (user_id set) or vendor locations (user_id null) |
| `vendors` | Meat market / warehouse; links to an address |
| `products` | Product catalog; category, slug, images, sku, etc. |
| `weight_tiers` | Per-product pricing (10/20/30/40 lb tiers) |
| `orders` | Order header; customer, vendor, status, totals, delivery_address_id |
| `order_items` | Line items for an order |
| `deliveries` | Delivery tracking (provider, driver, status, proof) |

Monetary and price columns use **integer (cents)**.

## Running the migration

### Option A: Supabase Dashboard (hosted project)

1. Open your project in the [Supabase Dashboard](https://supabase.com/dashboard).
2. Go to **SQL Editor**.
3. Paste the contents of `migrations/20250226000000_initial_schema.sql`.
4. Run the script.

### Option B: Supabase CLI (linked project)

1. Install the [Supabase CLI](https://supabase.com/docs/guides/cli) if needed.
2. From the repo root: `supabase link --project-ref YOUR_PROJECT_REF` (get the ref from Project Settings → General).
3. Apply migrations: `supabase db push`.

For a **local** Supabase instance: `supabase start` then `supabase db push`.

## Regenerating TypeScript types

After the schema is applied, generate types for the app:

```bash
# Hosted project (replace YOUR_PROJECT_REF)
npx supabase gen types typescript --project-id YOUR_PROJECT_REF > apps/web/src/types/supabase.ts

# Or if linked
npx supabase gen types typescript --linked > apps/web/src/types/supabase.ts
```

Then remove any `@ts-expect-error` comments in the app that were added for the scaffold types; the generated types will match the DB and fix insert/select inference.

## RLS

- **profiles / business_profiles / addresses**: users can read/write only their own rows (and read vendor addresses).
- **vendors / products / weight_tiers**: readable by everyone (anon + authenticated); writes are service-role only for now.
- **orders / order_items / deliveries**: customers can read and create their own orders; vendor/admin updates are service-role or future policies.
