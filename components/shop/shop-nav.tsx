"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { BrasenaLogo } from "@/components/brand/brasena-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useShopLanguage } from "@/components/shop/shop-language-provider";
import { ThemeToggle } from "@/components/brand/theme-toggle";

function CartBadge() {
  const { data } = trpc.cart.get.useQuery();
  const count = data?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;
  if (count === 0) return null;
  return (
    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-white">
      {count > 9 ? "9+" : count}
    </span>
  );
}

const shopNavLinks = [
  { href: "/home", key: "nav.shop" as const },
  { href: "/orders", key: "nav.myOrders" as const },
  { href: "/account", key: "nav.account" as const },
];

export function ShopNav() {
  const [open, setOpen] = useState(false);
  const { t } = useShopLanguage();

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
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <div className="relative">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart" aria-label={t("nav.cart")}>
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <CartBadge />
          </div>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="relative">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart" aria-label={t("nav.cart")}>
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <CartBadge />
          </div>
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
                    {t(link.key)}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 border-t pt-4">
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
