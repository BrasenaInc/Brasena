# Supabase setup for Brasena

## 1. Create or open a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign in.
2. **New project:** Click **New project**, pick your org, name it (e.g. `brasena`), set a DB password, and choose a region.
3. **Existing project:** Open the project from the dashboard.

## 2. Get your API keys

1. In the project, open **Project Settings** (gear icon in the sidebar).
2. Go to **API**.
3. Copy:
   - **Project URL** (the HTTPS URL, e.g. `https://xxxx.supabase.co`) → use for `NEXT_PUBLIC_SUPABASE_URL`  
     **Do not** use the Postgres connection string (`postgresql://...`); the app needs the REST/API URL.
   - **anon public** key (under "Project API keys") → use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. Configure the app

1. Open `apps/web/.env.local`.
2. Replace the placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Restart the dev server (`npm run dev:web`).

## 4. Apply the database schema (before Sprint 2)

The repo includes a full schema in `supabase/migrations/` (profiles, business_profiles, addresses, vendors, products, weight_tiers, orders, order_items, deliveries). Apply it once so signup and app features work.

**Option A — Dashboard:** In the Supabase project, open **SQL Editor**, paste the contents of `supabase/migrations/20250226000000_initial_schema.sql`, and run it.

**Option B — CLI:** From the repo root run `supabase link --project-ref YOUR_PROJECT_REF`, then `supabase db push`.

See `supabase/README.md` for details and for regenerating TypeScript types from the schema.
