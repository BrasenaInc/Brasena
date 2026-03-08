"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Bell,
  Users,
  BarChart3,
  ListChecks,
  Settings,
  TrendingUp,
  Grid3X3,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter,
  SidebarHeader, SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import { ThemeToggle } from "@/components/brand/theme-toggle";
import { BrasenaLogo } from "@/components/brand/brasena-logo";
import type { users } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type User = InferSelectModel<typeof users>;

const adminNavItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard, items: [] },
  { title: "Products", url: "/admin/products", icon: Package, items: [] },
  { title: "Orders", url: "/admin/orders", icon: ShoppingBag, items: [] },
  { title: "Customers", url: "/admin/customers", icon: Users, items: [] },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3, items: [] },
  { title: "Notifications", url: "/admin/notifications", icon: Bell, items: [] },
  { title: "Waitlist", url: "/admin/waitlist", icon: ListChecks, items: [] },
  { title: "Growth", url: "/admin/growth", icon: TrendingUp, items: [] },
  { title: "QR Codes", url: "/admin/qr", icon: Grid3X3, items: [] },
  { title: "Settings", url: "/admin/settings", icon: Settings, items: [] },
];

export function AdminSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: User }) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  useEffect(() => {
    if (isMobile) setOpenMobile(false);
  }, [pathname, isMobile, setOpenMobile]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2 py-3">
          <BrasenaLogo className="h-7 w-7 shrink-0" />
          <span className="font-serif text-base font-bold tracking-wider text-sage group-data-[collapsible=icon]:hidden">
            BRASENA
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={adminNavItems} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NavUser />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
