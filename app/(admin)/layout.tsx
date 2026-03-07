import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { getAuthUser } from "@/lib/supabase/server";
import { trpc } from "@/lib/trpc/server";
import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AuthProvider } from "@/components/auth/auth-provider";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user: authUser, error } = await getAuthUser();
  if (error || !authUser) {
    redirect("/auth/login");
  }

  const user = await trpc.users.me();

  if (user.role !== "admin") {
    redirect("/home");
  }

  return (
    <AuthProvider user={user}>
      <SidebarProvider>
        <AdminSidebar user={user} />
        <SidebarInset>
          <AdminHeader />
          <div className="flex-1">{children}</div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster richColors position="top-right" />
    </AuthProvider>
  );
}
