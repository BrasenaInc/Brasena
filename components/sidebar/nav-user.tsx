"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BadgeCheck,
  Bell,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  Loader2,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useAuth } from "@/components/auth/auth-provider"
import { createClient } from "@/lib/supabase/client"
import { trpc } from "@/lib/trpc/client"

function getInitials(name: string | null, email: string | null) {
  if (name) {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }
  return (email ?? "").slice(0, 2).toUpperCase()
}

export function NavUser() {
  const router = useRouter()
  const supabase = createClient()
  const user = useAuth()
  const { isMobile } = useSidebar()
  const initials = getInitials(user.fullName, user.email)
  const displayName = user.fullName ?? user.email ?? ""
  const sublabel = user.fullName && user.email ? user.email : ""

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/auth/login")
  }

  const { data: subscription } = trpc.stripe.getSubscriptionStatus.useQuery()
  const isActive = subscription?.isActive ?? false
  const isStripeConfigured = subscription?.isConfigured ?? true

  const checkout = trpc.stripe.createCheckoutSession.useMutation({
    onSuccess: ({ url }) => {
      window.location.href = url
    },
  })

  const portal = trpc.stripe.createPortalSession.useMutation({
    onSuccess: ({ url }) => {
      window.location.href = url
    },
  })

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
              </Avatar>
              <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{displayName}</span>
                {sublabel ? (
                  <span className="truncate text-xs text-muted-foreground">{sublabel}</span>
                ) : null}
              </div>
              <ChevronsUpDown className="ml-auto size-4 shrink-0 text-muted-foreground" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-[220px] rounded-xl border-border bg-popover p-1.5 shadow-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 rounded-lg px-2 py-2.5">
                <Avatar className="h-10 w-10 rounded-lg border-2 border-border/50">
                  <AvatarFallback className="rounded-lg text-sm font-semibold">{initials}</AvatarFallback>
                </Avatar>
                <div className="grid min-w-0 flex-1">
                  <span className="truncate font-semibold text-foreground">{displayName}</span>
                  {sublabel ? (
                    <span className="truncate text-xs text-muted-foreground">{sublabel}</span>
                  ) : null}
                </div>
              </div>
            </DropdownMenuLabel>
            {isStripeConfigured && (
              <>
                <DropdownMenuSeparator className="my-1.5" />
                <DropdownMenuGroup className="p-0.5">
                  {isActive ? (
                    <DropdownMenuItem
                      className="cursor-pointer rounded-lg py-2.5"
                      onClick={() => portal.mutate()}
                      disabled={portal.isPending}
                    >
                      {portal.isPending ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <CreditCard className="size-4" />
                      )}
                      <span className="flex-1">Manage Subscription</span>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem
                      className="cursor-pointer rounded-lg py-2.5"
                      onClick={() => checkout.mutate()}
                      disabled={checkout.isPending}
                    >
                      {checkout.isPending ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <Sparkles className="size-4" />
                      )}
                      <span className="flex-1">Upgrade to Pro</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuGroup>
              </>
            )}
            <DropdownMenuSeparator className="my-1.5" />
            <DropdownMenuGroup className="p-0.5">
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg py-2.5 focus:bg-accent">
                <Link href="/account" className="flex items-center">
                  <BadgeCheck className="size-4" />
                  <span className="flex-1">Account</span>
                  <ChevronRight className="size-4 text-muted-foreground" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer rounded-lg py-2.5 focus:bg-accent">
                <Link href="/notifications" className="flex items-center">
                  <Bell className="size-4" />
                  <span className="flex-1">Notifications</span>
                  <ChevronRight className="size-4 text-muted-foreground" />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="my-1.5" />
            <DropdownMenuItem
              className="cursor-pointer rounded-lg py-2.5 text-red-600 focus:bg-red-500/10 focus:text-red-600 dark:text-red-400 dark:focus:bg-red-500/10 dark:focus:text-red-400"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" />
              <span className="flex-1">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
