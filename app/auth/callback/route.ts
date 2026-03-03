import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/supabase/server";
import { trpc } from "@/lib/trpc/server";
import { login } from "@/actions/login";

export async function GET(request: Request) {
  const { user: authUser, error } = await getAuthUser();

  if (error || !authUser) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Sync user to DB (creates row if first login)
  await login();

  // Fetch DB user to check role
  try {
    const user = await trpc.users.me();
    if (user.role === 'admin') {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  } catch {
    // User row may not exist yet on very first load, default to shop
  }

  return NextResponse.redirect(new URL("/home", request.url));
}
