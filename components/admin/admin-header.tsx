"use client";

import { Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BrasenaLogo } from "@/components/brand/brasena-logo";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:px-6">
      <SidebarTrigger className="-ml-1 size-9 rounded-lg md:size-8" aria-label="Open menu">
        <Menu className="size-5" />
      </SidebarTrigger>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <BrasenaLogo className="h-6 w-6 shrink-0 text-sage md:hidden" />
        <span className="truncate font-serif text-sm font-semibold tracking-wide text-foreground md:text-base">
          Admin
        </span>
      </div>
    </header>
  );
}
