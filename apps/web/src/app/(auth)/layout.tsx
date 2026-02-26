/**
 * Auth layout: full-screen bg-surface, subtle radial gradient, single centered
 * column (max 390px). AuthShell adds EN/ES language toggle on login/signup screens.
 */

import { AuthShell } from "@/components/auth-shell"
import { cn } from "@/lib/utils"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div
      className={cn(
        "min-h-screen bg-surface",
        "bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(139,175,142,0.03),transparent)]"
      )}
    >
      <div className="max-w-[390px] min-h-screen mx-auto px-4 pt-10 pb-16 flex flex-col items-center">
        <main className="w-full flex-1 flex flex-col">
          <AuthShell className="flex-col">
            {children}
          </AuthShell>
        </main>
      </div>
    </div>
  )
}
