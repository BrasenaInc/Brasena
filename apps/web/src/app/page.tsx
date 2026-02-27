/**
 * Root page (/). Public landing — no auth required.
 * Shop, cart, account, and ordering require sign-in (handled by (shop) layout).
 */

import { LandingPage } from "@/components/landing-page"

export default function RootPage(): JSX.Element {
  return <LandingPage />
}
