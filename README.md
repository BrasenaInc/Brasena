<div align="center">

<br />

```
██████╗ ██████╗  █████╗ ███████╗███████╗███╗   ██╗ █████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝████╗  ██║██╔══██╗
██████╔╝██████╔╝███████║███████╗█████╗  ██╔██╗ ██║███████║
██╔══██╗██╔══██╗██╔══██║╚════██║██╔══╝  ██║╚██╗██║██╔══██║
██████╔╝██║  ██║██║  ██║███████║███████╗██║ ╚████║██║  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝
```

**Wholesale meat, delivered fresh.**

*A full logistics platform connecting wholesale meat distributors to restaurants, lounges, and families — built in The Bronx, NY.*

<br />

[![Live Site](https://img.shields.io/badge/Live%20Site-brasenabx.com-4a7c59?style=for-the-badge&logo=vercel&logoColor=white)](https://brasenabx.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js%2015-App%20Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-Postgres-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

<br />

</div>

---

## What is Brasena?

Brasena cuts out the middleman between wholesale meat distributors and the people who actually need the product — restaurants ordering by the case, families buying bulk at real prices. Built first for The Bronx, expanding to all five boroughs and beyond.

The platform handles the full loop: order placement, vendor routing, driver dispatch, live tracking, and delivery — the same experience you'd expect from a consumer app, built for wholesale volume.

```
Customer places order  →  Vendor confirms (<2 min)  →  Driver dispatched  →  Live map tracking  →  Delivery
```

**B2C** — Families and households. From $4.99/lb vs $8–12/lb retail. No membership.  
**B2B** — Restaurants and lounges. Automatic 15% wholesale pricing. Invoice/Net 30 available.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **API Layer** | tRPC v11 |
| **Database** | Supabase (PostgreSQL) |
| **ORM** | Drizzle ORM |
| **Auth** | Supabase Auth |
| **Email** | Resend + React Email |
| **SMS** | Twilio |
| **Deployment** | Vercel |
| **Fonts** | Playfair Display · DM Sans |

---

## Project Structure

```
brasena/
├── app/
│   ├── (marketing)/          # Public-facing pages
│   │   ├── marketing/        # Landing page — hero, how it works, product catalog
│   │   ├── waitlist/         # 4-step waitlist flow (type → info → survey → share)
│   │   ├── privacy-policy/
│   │   └── terms/
│   ├── (admin)/              # Protected admin dashboard
│   │   ├── admin/
│   │   │   ├── waitlist/     # Waitlist command center
│   │   │   ├── growth/       # Growth analytics + raffle draw
│   │   │   └── ...
│   └── auth/                 # Login / signup
│
├── server/
│   └── routers/
│       └── waitlist.ts       # tRPC router — all waitlist procedures
│
├── lib/
│   ├── messaging/
│   │   ├── email.ts          # Resend send functions
│   │   ├── sms.ts            # Twilio send functions
│   │   └── templates/        # React Email templates
│   │       ├── shared/
│   │       │   └── email-wrapper.tsx
│   │       ├── waitlist-confirmation.tsx
│   │       ├── survey-completion.tsx
│   │       ├── referral-notification.tsx
│   │       └── milestone-notification.tsx
│   └── trpc/
│
├── db/
│   └── schema.ts             # Drizzle schema — customers, waitlist_entries, referrals, events_log
│
└── components/
```

---

## Waitlist Growth Engine

The waitlist is a full referral system with raffle entry tracking.

### Entry Ladder

| Action | Entries Earned |
|---|---|
| Join the waitlist | +1 |
| Complete the survey | +2 |
| Refer a friend | +3 per referral |
| 5 referrals | +10 bonus |
| 10 referrals | +25 bonus |
| 25 referrals | +75 bonus |

### Grand Opening Raffle

| Prize | Value |
|---|---|
| Grand Prize | $500 Meat Bundle |
| 2nd Place | $250 Freezer Box |
| 3rd Place | $100 + 20×$25 |

### Messaging Triggers

| Event | Channel | Subject |
|---|---|---|
| Signup | Email + SMS | `Brasena — You're on the waitlist` |
| Survey submitted | Email | `Brasena — Survey complete, you've got bonus entries` |
| Someone uses your referral link | Email | `Brasena — Someone used your referral link` |
| Hit 5 / 10 / 25 referrals | Email | `Brasena — You hit a referral milestone` |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project
- A Resend account with verified domain
- A Twilio account with a 10DLC-registered phone number

### 1. Clone & install

```bash
git clone https://github.com/visuxlize/brasena.git
cd brasena
npm install
```

### 2. Environment variables

Create `.env.local` in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
DATABASE_URL=your_postgres_connection_string

# Email — Resend
RESEND_API_KEY=re_your_key_here
RESEND_FROM_EMAIL=waitlist@yourdomain.com
EMAIL_PROVIDER=resend

# SMS — Twilio
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1xxxxxxxxxx
SMS_PROVIDER=twilio

# App
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NOTIFICATIONS_LIVE=true   # set to false in dev to suppress sends
```

### 3. Run the database migration

```bash
npx drizzle-kit push
```

> If you hit a column type error on `survey_answers`, run this in your Supabase SQL editor first:
> ```sql
> UPDATE waitlist_entries SET survey_answers = NULL
> WHERE survey_answers IS NOT NULL AND survey_answers::text = '';
>
> ALTER TABLE waitlist_entries
> ALTER COLUMN survey_answers TYPE jsonb
> USING survey_answers::jsonb;
> ```
> Then re-run `drizzle-kit push`.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000/marketing](http://localhost:3000/marketing).

---

## Key Routes

| Route | Description |
|---|---|
| `/marketing` | Public landing page |
| `/waitlist` | Waitlist signup flow |
| `/waitlist?ref=CODE` | Referral entry — attributes signup to referrer |
| `/admin` | Admin dashboard (auth required) |
| `/admin/waitlist` | Waitlist command center — browse, filter, export signups |
| `/admin/growth` | Growth analytics + raffle draw |
| `/auth/login` | Admin login |
| `/privacy-policy` | Privacy policy (required for Twilio 10DLC) |
| `/terms` | Terms of service (required for Twilio 10DLC) |

---

## tRPC Procedures

All waitlist logic lives in `server/routers/waitlist.ts`. Every procedure is wrapped in `try/catch` and returns safe defaults on DB errors so the frontend never crashes if the DB is unreachable.

```
waitlist.signup              →  Creates customer + waitlist entry, fires email + SMS
waitlist.submitSurvey        →  Saves survey answers, awards +2 entries, fires email
waitlist.getReferralStatus   →  Looks up entry by referral code (used on page load with ?ref=)
waitlist.export              →  Returns a single entry by email
waitlist.leaderboard         →  Top referrers sorted by entries
waitlist.unsubscribe         →  Marks entry as unsubscribed

waitlist.adminList           →  Paginated list for the admin dashboard
waitlist.adminStats          →  Aggregate counts — total, B2C, B2B, entries
waitlist.adminSignupsByDay   →  Time-series data for the growth chart
waitlist.adminSourceBreakdown→  Pie chart data — direct vs referral vs other
waitlist.adminGetById        →  Single entry detail view
waitlist.adminDelete         →  Soft delete a signup
waitlist.adminClearAll       →  Wipe all entries (dev/reset only)
waitlist.adminDrawWinner      →  Weighted random draw from active entries
waitlist.adminDrawLog        →  History of all raffle draws
```

---

## Email Templates

Templates are React Email components with inline styles only (required for email client compatibility). They are stored in `lib/messaging/templates/` and sent via Resend.

All templates share a base layout (`email-wrapper.tsx`) that includes:
- Forest green header with subtle grid texture matching the website hero
- Parchment `#F8F6F2` body background matching the site's light mode
- Sage green gradient ribbon across the top
- Playfair Display headings loaded via Google Fonts
- DM Sans body text
- Footer with Privacy Policy and Terms links

---

## SMS (Twilio)

SMS notifications are sent via a Twilio 10DLC-registered number (`+1 929-295-4898`, The Bronx area code). All outbound messages include a STOP opt-out instruction as required by 10DLC compliance.

Set `NOTIFICATIONS_LIVE=false` in `.env.local` to suppress all SMS and email sends during local development.

---

## Design System

Pulled directly from the live site:

| Token | Value |
|---|---|
| `--forest-green` | `#192019` |
| `--near-black` | `#0C0F0C` |
| `--parchment` | `#F8F6F2` |
| `--sage` | `#7a9e80` |
| `--sage-dark` | `#6B8F71` |
| `--gold` | `#d4af37` |
| `--silver` | `#b0b0b0` |
| `--bronze` | `#c4885a` |
| Display font | Playfair Display |
| Body font | DM Sans |

---

## Deployment

The app is deployed on Vercel at [brasenabx.com](https://brasenabx.com). Production environment variables are managed through the Vercel dashboard.

DNS is managed through Namecheap. Resend domain verification requires 4 DNS records (DKIM TXT, MX, SPF TXT, DMARC TXT) added to the sending subdomain.

To deploy your own fork:

```bash
# Push to your repo and connect to Vercel
# Add all environment variables in Vercel → Settings → Environment Variables
# Run drizzle-kit push once on production DB
npx drizzle-kit push
```

---

## Roadmap

- [x] Marketing landing page
- [x] 4-step waitlist flow (type → info → survey → share)
- [x] Referral system with entry ladder
- [x] Twilio SMS — waitlist confirmation
- [x] Resend email — all 4 email types
- [x] Admin dashboard — waitlist command center
- [x] Admin dashboard — growth analytics + raffle draw
- [x] Privacy policy + Terms (Twilio 10DLC compliance)
- [ ] QR code generator for physical marketing
- [ ] Order placement flow (B2C + B2B)
- [ ] Vendor portal
- [ ] Driver dispatch + live tracking
- [ ] Expand to Queens, Brooklyn, Long Island, Connecticut, New Jersey

---

## License

Private. All rights reserved. © 2026 Brasena Inc., The Bronx, New York.

---

<div align="center">

*Launching in The Bronx · 2026*

**[brasenabx.com](https://brasenabx.com) · [@brasenabx](https://instagram.com/brasenabx)**

</div>