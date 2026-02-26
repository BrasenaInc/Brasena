-- Brasena initial schema: profiles, business_profiles, addresses, vendors,
-- products, weight_tiers, orders, order_items, deliveries.
-- Run with: supabase db push (or apply via Dashboard SQL editor).

-- ─── Extensions ───────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Enums ─────────────────────────────────────────────
create type public.profile_type as enum ('residential', 'business');
create type public.user_role as enum ('customer', 'vendor', 'driver', 'csr', 'admin');
create type public.preferred_language as enum ('en', 'es');
create type public.vendor_type as enum ('meat_market', 'warehouse');
create type public.order_status as enum (
  'pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'
);
create type public.delivery_provider as enum ('uber_direct', 'doordash', 'private_van');
create type public.delivery_status as enum ('pending', 'assigned', 'picked_up', 'delivered', 'failed');

-- ─── Profiles (1:1 with auth.users) ───────────────────
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  phone text,
  role public.user_role not null default 'customer',
  profile_type public.profile_type not null,
  preferred_language public.preferred_language not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'User profiles; id matches auth.users.id';

-- ─── Business profiles (B2B) ───────────────────────────
create table public.business_profiles (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  business_name text not null,
  ein text not null,
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── Addresses (customers and vendor locations) ────────
create table public.addresses (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles (id) on delete cascade,  -- null for vendor addresses
  street text not null,
  apt text,
  city text not null,
  state text not null,
  zip text not null,
  instructions text,
  is_default boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on column public.addresses.user_id is 'Null for vendor addresses (linked via vendors.address_id)';

create index idx_addresses_user_id on public.addresses (user_id);

-- ─── Vendors ──────────────────────────────────────────
create table public.vendors (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type public.vendor_type not null,
  address_id uuid not null references public.addresses (id) on delete restrict,
  contact_name text not null,
  contact_phone text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_vendors_address_id on public.vendors (address_id);

-- ─── Products ─────────────────────────────────────────
create table public.products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text not null,
  category text not null,
  cut_type text not null,
  images text[] not null default '{}',
  cut_diagram_url text,
  usda_grade text,
  serving_size text not null,
  piece_count text,
  sku text not null unique,
  in_stock boolean not null default true,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_products_slug on public.products (slug);
create index idx_products_category on public.products (category);

-- ─── Weight tiers (pricing per product) ────────────────
create table public.weight_tiers (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references public.products (id) on delete cascade,
  weight_lbs integer not null check (weight_lbs in (10, 20, 30, 40)),
  price_per_lb integer not null check (price_per_lb >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (product_id, weight_lbs)
);

create index idx_weight_tiers_product_id on public.weight_tiers (product_id);

-- ─── Orders ───────────────────────────────────────────
create table public.orders (
  id uuid primary key default uuid_generate_v4(),
  order_number text not null unique,
  customer_id uuid not null references public.profiles (id) on delete restrict,
  vendor_id uuid not null references public.vendors (id) on delete restrict,
  status public.order_status not null default 'pending',
  profile_type public.profile_type not null,
  subtotal integer not null check (subtotal >= 0),
  savings integer not null check (savings >= 0),
  tax integer not null check (tax >= 0),
  delivery_fee integer not null check (delivery_fee >= 0),
  total integer not null check (total >= 0),
  payment_intent_id text not null,
  estimated_delivery timestamptz not null,
  delivery_address_id uuid not null references public.addresses (id) on delete restrict,
  confirmed_at timestamptz,
  prepared_at timestamptz,
  picked_up_at timestamptz,
  delivered_at timestamptz,
  delivery_photo_url text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_orders_customer_id on public.orders (customer_id);
create index idx_orders_vendor_id on public.orders (vendor_id);
create index idx_orders_status on public.orders (status);

-- ─── Order items ───────────────────────────────────────
create table public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references public.orders (id) on delete cascade,
  product_id uuid not null references public.products (id) on delete restrict,
  product_name text not null,
  sku text not null,
  weight_lbs integer not null,
  quantity integer not null check (quantity >= 1),
  unit_price integer not null check (unit_price >= 0),
  subtotal integer not null check (subtotal >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_order_items_order_id on public.order_items (order_id);

-- ─── Deliveries ───────────────────────────────────────
create table public.deliveries (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references public.orders (id) on delete cascade,
  provider public.delivery_provider not null,
  driver_id text,
  driver_name text,
  driver_phone text,
  tracking_url text,
  estimated_pickup timestamptz,
  estimated_delivery timestamptz,
  current_lat numeric,
  current_lng numeric,
  status public.delivery_status not null default 'pending',
  photo_proof_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_deliveries_order_id on public.deliveries (order_id);

-- ─── updated_at trigger ───────────────────────────────
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger business_profiles_updated_at
  before update on public.business_profiles
  for each row execute function public.set_updated_at();
create trigger addresses_updated_at
  before update on public.addresses
  for each row execute function public.set_updated_at();
create trigger vendors_updated_at
  before update on public.vendors
  for each row execute function public.set_updated_at();
create trigger products_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();
create trigger weight_tiers_updated_at
  before update on public.weight_tiers
  for each row execute function public.set_updated_at();
create trigger orders_updated_at
  before update on public.orders
  for each row execute function public.set_updated_at();
create trigger order_items_updated_at
  before update on public.order_items
  for each row execute function public.set_updated_at();
create trigger deliveries_updated_at
  before update on public.deliveries
  for each row execute function public.set_updated_at();

-- ─── RLS ───────────────────────────────────────────────
alter table public.profiles enable row level security;
alter table public.business_profiles enable row level security;
alter table public.addresses enable row level security;
alter table public.vendors enable row level security;
alter table public.products enable row level security;
alter table public.weight_tiers enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.deliveries enable row level security;

-- Profiles: user can read/update own; can insert own row (for signup)
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Business profiles: same (own row only)
create policy "Users can view own business profile"
  on public.business_profiles for select
  using (auth.uid() = user_id);

create policy "Users can insert own business profile"
  on public.business_profiles for insert
  with check (auth.uid() = user_id);

create policy "Users can update own business profile"
  on public.business_profiles for update
  using (auth.uid() = user_id);

-- Addresses: user can CRUD own; anyone can read vendor addresses (for delivery display)
create policy "Users can view own or vendor addresses"
  on public.addresses for select
  using (
    user_id = auth.uid()
    or id in (select address_id from public.vendors)
  );

create policy "Users can insert own addresses"
  on public.addresses for insert
  with check (user_id = auth.uid());

create policy "Users can update own addresses"
  on public.addresses for update
  using (user_id = auth.uid());

create policy "Users can delete own addresses"
  on public.addresses for delete
  using (user_id = auth.uid());

-- Vendors: readable by all (for shop); insert/update/delete by service or admin only (no anon policy for write)
create policy "Anyone can view vendors"
  on public.vendors for select
  using (true);

-- Products: readable by all
create policy "Anyone can view products"
  on public.products for select
  using (true);

-- Weight tiers: readable by all
create policy "Anyone can view weight_tiers"
  on public.weight_tiers for select
  using (true);

-- Orders: customer sees own orders
create policy "Users can view own orders"
  on public.orders for select
  using (auth.uid() = customer_id);

create policy "Users can insert own orders"
  on public.orders for insert
  with check (auth.uid() = customer_id);

-- Order items: readable when order is readable
create policy "Users can view own order items"
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = order_items.order_id and o.customer_id = auth.uid()
    )
  );

create policy "Users can insert order items for own orders"
  on public.order_items for insert
  with check (
    exists (
      select 1 from public.orders o
      where o.id = order_items.order_id and o.customer_id = auth.uid()
    )
  );

-- Deliveries: readable when order is readable
create policy "Users can view deliveries for own orders"
  on public.deliveries for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = deliveries.order_id and o.customer_id = auth.uid()
    )
  );

-- ─── Allow service role full access (default) ───────────
-- No additional policies needed for service role; RLS is bypassed for service_role key.
