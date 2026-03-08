# Brasena

Next.js app: marketing site, waitlist (raffle + referrals), shop (cart, checkout, orders), and admin (products, orders, waitlist, analytics). Auth and storage via Supabase; API via tRPC; DB with Drizzle + Postgres.

## Stack

- **Next.js 15** (App Router), **React 19**
- **Supabase**: auth (session cookies via `@supabase/ssr`), Postgres, Storage
- **Drizzle ORM** for DB; schema in `db/schema.ts` and `db/schema/waitlist.ts`
- **tRPC** for all server API; procedures in `server/routers/`, mounted at `app/api/trpc/[trpc]/route.ts`
- **Stripe** (optional): subscriptions; see `.env.example` for `STRIPE_*` and `CLAUDE.md` for usage

## How it fits together

- **Auth**: `middleware.ts` refreshes Supabase session; `app/(app)/` layout redirects unauthenticated users to `/auth/login`. `actions/login.ts` syncs auth user to `users` on first login. Protected tRPC procedures use `protectedProcedure` from `server/trpc.ts`.
- **Data**: Server components call `trpc` from `lib/trpc/server.ts`; client components use hooks from `lib/trpc/client.tsx`. Mutations invalidate cache via `utils.[router].[procedure].invalidate()`.
- **Waitlist**: Signup and survey live in `app/waitlist/page.tsx`; backend in `server/routers/waitlist.ts` (customers, waitlist_entries, survey_responses, referrals, events_log). Email/SMS are gated by `NOTIFICATIONS_LIVE` and Resend/Twilio env vars; see `lib/messaging/`.
- **Shop**: Products, cart, addresses, orders each have a tRPC router. Checkout and order flows use Stripe and Supabase as needed.
- **Admin**: Routes under `app/(admin)/`; sidebar in `components/admin/admin-sidebar.tsx`. Waitlist stats, signups, leaderboard, and raffle draw use `waitlist` router; products and orders use their routers.

## Key paths

| Area        | Path |
|------------|------|
| tRPC root  | `server/routers/index.ts` |
| Waitlist API | `server/routers/waitlist.ts` |
| Waitlist UI | `app/waitlist/page.tsx` |
| DB schema  | `db/schema.ts`, `db/schema/waitlist.ts` |
| Auth layout | `app/(app)/layout.tsx` |
| Messaging  | `lib/messaging/email.ts`, `lib/messaging/sms.ts` |

See `CLAUDE.md` for conventions (no server actions for data, protectedProcedure for user data, etc.).
