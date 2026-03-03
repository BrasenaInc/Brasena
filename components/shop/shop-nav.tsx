"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { BrasenaLogo } from "@/components/brand/brasena-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { users } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type User = InferSelectModel<typeof users>;

const shopNavLinks = [
  { href: "/home", labelEn: "Shop", labelEs: "Tienda" },
  { href: "/orders", labelEn: "My Orders", labelEs: "Mis Pedidos" },
  { href: "/account", labelEn: "Account", labelEs: "Cuenta" },
];

export function ShopNav({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const lang = user.language ?? "en";

  const label = (en: string, es: string) => lang === "es" ? es : en;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2">
          <BrasenaLogo className="h-8 w-8" />
          <span className="font-serif text-lg font-bold tracking-wider text-sage">
            BRASENA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {shopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label(link.labelEn, link.labelEs)}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="flex items-center justify-between border-b pb-4">
                <BrasenaLogo className="h-7 w-7" />
                <span className="font-serif font-bold tracking-wider text-sage">
                  BRASENA
                </span>
              </div>
              <nav className="mt-6 flex flex-col gap-1">
                {shopNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    {label(link.labelEn, link.labelEs)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
