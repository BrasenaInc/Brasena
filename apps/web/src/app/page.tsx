/**
 * Root page (/). Redirects unauthenticated users to the login page so that
 * the app always lands on a valid route. Auth and shop routing are handled
 * by middleware and layout groups.
 */

import { redirect } from "next/navigation"
import { ROUTES } from "@/config"

export default function RootPage(): never {
  redirect(ROUTES.LOGIN)
}
