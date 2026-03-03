import { redirect } from "next/navigation";
import { getAuthUser } from "@/lib/supabase/server";
import { trpc } from "@/lib/trpc/server";
import { ShopNav } from "@/components/shop/shop-nav";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user: authUser, error } = await getAuthUser();
  if (error || !authUser) {
    redirect("/auth/login");
  }

  const user = await trpc.users.me();

  // Admins who land on shop routes get redirected to admin
  if (user.role === 'admin') {
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen bg-background">
      <ShopNav user={user} />
      <main className="mx-auto max-w-screen-xl px-4 py-6">
        {children}
      </main>
    </div>
  );
}
