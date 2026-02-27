-- Promotions table for hero/daily specials. Optional for Sprint 3 home feed.

create table if not exists public.promotions (
  id uuid primary key default uuid_generate_v4(),
  description text not null,
  code text not null,
  is_active boolean not null default true,
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_promotions_active_expires on public.promotions (is_active, expires_at);

alter table public.promotions enable row level security;

create policy "Anyone can view active promotions"
  on public.promotions for select
  using (is_active = true and expires_at > now());

create trigger promotions_updated_at
  before update on public.promotions
  for each row execute function public.set_updated_at();
