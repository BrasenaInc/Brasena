"use client"

/**
 * Global error boundary. Client Component that shows a branded error screen,
 * retry button (calls reset()), and back-to-home link. Requires "use client" and reset from Next.js.
 */

import { useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/cn"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  useEffect(() => {
    // Log in dev; could send to error reporting in prod
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error("Error boundary caught:", error)
    }
  }, [error])

  return (
    <main
      className={cn(
        "min-h-screen bg-surface flex flex-col items-center justify-center px-4"
      )}
    >
      <span className="font-display text-2xl font-semibold text-brand-sage mb-8">
        Brasena
      </span>
      <p className="text-text-primary text-center text-lg mb-6">
        Something went wrong on our end.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          type="button"
          onClick={reset}
          className="btn-primary min-h-touch min-w-[120px]"
        >
          Try again
        </button>
        <Link
          href="/home"
          className="text-text-secondary hover:text-brand-sage font-medium min-h-touch flex items-center"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
