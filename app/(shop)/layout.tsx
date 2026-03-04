import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { getAuthUser } from "@/lib/supabase/server";
import { trpc } from "@/lib/trpc/server";
import { ShopNav } from "@/components/shop/shop-nav";
import { ShopLanguageProvider } from "@/components/shop/shop-language-provider";

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
  if (user.role === "admin") {
    redirect("/admin/dashboard");
  }

  return (
    <ShopLanguageProvider initialUser={user}>
      <div className="min-h-screen bg-background">
        <ShopNav />
        <Toaster richColors position="top-right" />
        <main className="mx-auto max-w-screen-xl px-4 py-6">
          {children}
        </main>
      </div>
    </ShopLanguageProvider>
  );
}
