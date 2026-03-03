-- Run this in Supabase SQL Editor to wipe the public schema before db-push.
-- Project: Settings → SQL Editor → New query → paste → Run.

-- Drop tables (order matters for FKs; CASCADE removes dependent objects)
DROP TABLE IF EXISTS public.notification_log CASCADE;
DROP TABLE IF EXISTS public.order_items CASCADE;
DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.cart_items CASCADE;
DROP TABLE IF EXISTS public.weight_tiers CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.todos CASCADE;  -- old starter kit
DROP TABLE IF EXISTS public.users CASCADE;

-- Drop custom enums (Brasena + any leftovers)
DROP TYPE IF EXISTS public.order_status CASCADE;
DROP TYPE IF EXISTS public.user_role CASCADE;
DROP TYPE IF EXISTS public.language CASCADE;

-- Optional: drop any other custom enums that might exist from other projects
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN (
    SELECT typname
    FROM pg_type t
    JOIN pg_namespace n ON n.oid = t.typnamespace
    WHERE n.nspname = 'public' AND t.typtype = 'e'
  ) LOOP
    EXECUTE format('DROP TYPE IF EXISTS public.%I CASCADE', r.typname);
  END LOOP;
END $$;
