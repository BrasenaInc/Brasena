import { redirect } from "next/navigation";
import { getAuthUser } from "@/lib/supabase/server";
import { trpc } from "@/lib/trpc/server";
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

  if (user.role !== 'admin') {
    redirect("/home");
  }

  return (
    <AuthProvider user={user}>
      <SidebarProvider>
        <AdminSidebar user={user} />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  );
}
