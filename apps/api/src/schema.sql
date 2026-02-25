-- ============================================================
-- Brasena Database Schema
-- Run this in Supabase SQL editor or via Alembic migration
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Users (extends Supabase auth.users) ──────────────
CREATE TABLE public.profiles (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  phone           TEXT,
  profile_type    TEXT NOT NULL CHECK (profile_type IN ('residential', 'business')),
  role            TEXT NOT NULL DEFAULT 'customer'
                  CHECK (role IN ('customer', 'vendor', 'driver', 'csr', 'admin')),
  preferred_lang  TEXT NOT NULL DEFAULT 'en' CHECK (preferred_lang IN ('en', 'es')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Business Profiles ────────────────────────────────
CREATE TABLE public.business_profiles (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id       UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  ein           TEXT NOT NULL,
  verified      BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Addresses ────────────────────────────────────────
CREATE TABLE public.addresses (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  street       TEXT NOT NULL,
  apt          TEXT,
  city         TEXT NOT NULL,
  state        CHAR(2) NOT NULL,
  zip          CHAR(5) NOT NULL,
  instructions TEXT,
  is_default   BOOLEAN NOT NULL DEFAULT FALSE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Vendors ──────────────────────────────────────────
CREATE TABLE public.vendors (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name             TEXT NOT NULL,
  type             TEXT NOT NULL CHECK (type IN ('meat_market', 'warehouse')),
  street           TEXT NOT NULL,
  city             TEXT NOT NULL,
  state            CHAR(2) NOT NULL,
  zip              CHAR(5) NOT NULL,
  service_zipcodes TEXT[] NOT NULL DEFAULT '{}',
  contact_name     TEXT NOT NULL,
  contact_phone    TEXT NOT NULL,
  is_active        BOOLEAN NOT NULL DEFAULT TRUE,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Products ─────────────────────────────────────────
CREATE TABLE public.products (
  id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name                  TEXT NOT NULL,
  slug                  TEXT NOT NULL UNIQUE,
  description           TEXT,
  category              TEXT NOT NULL CHECK (category IN ('Beef', 'Pork', 'Chicken')),
  cut_type              TEXT NOT NULL,
  images                TEXT[] NOT NULL DEFAULT '{}',
  cut_diagram_url       TEXT,
  usda_grade            TEXT,
  serving_size          TEXT,
  piece_count           TEXT,
  sku                   TEXT NOT NULL UNIQUE,
  in_stock              BOOLEAN NOT NULL DEFAULT TRUE,
  featured              BOOLEAN NOT NULL DEFAULT FALSE,
  b2b_price_multiplier  DECIMAL(4,2) NOT NULL DEFAULT 1.0,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Weight Tiers (pricing per product) ───────────────
CREATE TABLE public.weight_tiers (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id       UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  weight_lbs       INTEGER NOT NULL CHECK (weight_lbs IN (10, 20, 30, 40)),
  price_per_lb     INTEGER NOT NULL, -- stored in cents
  total_price      INTEGER NOT NULL, -- stored in cents
  savings_amount   INTEGER NOT NULL DEFAULT 0, -- cents saved vs base tier
  savings_percent  INTEGER NOT NULL DEFAULT 0,
  UNIQUE(product_id, weight_lbs)
);

-- ─── Orders ───────────────────────────────────────────
CREATE TABLE public.orders (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number      TEXT NOT NULL UNIQUE,
  customer_id       UUID NOT NULL REFERENCES public.profiles(id),
  vendor_id         UUID NOT NULL REFERENCES public.vendors(id),
  profile_type      TEXT NOT NULL CHECK (profile_type IN ('residential', 'business')),
  status            TEXT NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending','confirmed','preparing',
                                      'out_for_delivery','delivered','cancelled')),
  -- Address snapshot (not FK - address could be deleted later)
  delivery_street   TEXT NOT NULL,
  delivery_apt      TEXT,
  delivery_city     TEXT NOT NULL,
  delivery_state    CHAR(2) NOT NULL,
  delivery_zip      CHAR(5) NOT NULL,
  delivery_notes    TEXT,
  -- Financials (stored in cents)
  subtotal          INTEGER NOT NULL,
  savings           INTEGER NOT NULL DEFAULT 0,
  tax               INTEGER NOT NULL DEFAULT 0,
  delivery_fee      INTEGER NOT NULL DEFAULT 0,
  total             INTEGER NOT NULL,
  -- Payment
  payment_intent_id TEXT NOT NULL,
  -- Timestamps
  estimated_delivery DATE NOT NULL,
  confirmed_at       TIMESTAMPTZ,
  prepared_at        TIMESTAMPTZ,
  picked_up_at       TIMESTAMPTZ,
  delivered_at       TIMESTAMPTZ,
  delivery_photo_url TEXT,
  notes              TEXT,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Order Items ──────────────────────────────────────
CREATE TABLE public.order_items (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id     UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id   UUID NOT NULL REFERENCES public.products(id),
  product_name TEXT NOT NULL,   -- snapshot at time of order
  sku          TEXT NOT NULL,
  weight_lbs   INTEGER NOT NULL,
  quantity     INTEGER NOT NULL CHECK (quantity > 0),
  unit_price   INTEGER NOT NULL, -- cents
  subtotal     INTEGER NOT NULL  -- cents
);

-- ─── Deliveries ───────────────────────────────────────
CREATE TABLE public.deliveries (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id            UUID NOT NULL UNIQUE REFERENCES public.orders(id),
  provider            TEXT NOT NULL CHECK (provider IN ('uber_direct','doordash','private_van')),
  driver_id           TEXT,   -- external driver ID from delivery provider
  driver_name         TEXT,
  driver_phone        TEXT,
  tracking_url        TEXT,
  estimated_pickup    TIMESTAMPTZ,
  estimated_delivery  TIMESTAMPTZ,
  current_lat         DECIMAL(10,8),
  current_lng         DECIMAL(11,8),
  status              TEXT NOT NULL DEFAULT 'pending'
                      CHECK (status IN ('pending','assigned','picked_up','delivered','failed')),
  photo_proof_url     TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Indexes for common queries ───────────────────────
CREATE INDEX idx_orders_customer     ON public.orders(customer_id);
CREATE INDEX idx_orders_vendor       ON public.orders(vendor_id);
CREATE INDEX idx_orders_status       ON public.orders(status);
CREATE INDEX idx_order_items_order   ON public.order_items(order_id);
CREATE INDEX idx_addresses_user      ON public.addresses(user_id);
CREATE INDEX idx_products_category   ON public.products(category);
CREATE INDEX idx_products_slug       ON public.products(slug);
CREATE INDEX idx_weight_tiers_product ON public.weight_tiers(product_id);

-- ─── Row Level Security ───────────────────────────────
-- Customers can only see their own data
ALTER TABLE public.profiles        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses       ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users see own orders"
  ON public.orders FOR SELECT
  USING (auth.uid() = customer_id);

CREATE POLICY "Users see own addresses"
  ON public.addresses FOR ALL
  USING (auth.uid() = user_id);

-- Products are public (no auth needed to browse)
ALTER TABLE public.products      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weight_tiers  ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are public"
  ON public.products FOR SELECT
  USING (TRUE);

CREATE POLICY "Weight tiers are public"
  ON public.weight_tiers FOR SELECT
  USING (TRUE);
