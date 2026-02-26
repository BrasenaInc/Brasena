/**
 * Custom 404 page. Brasena wordmark, large 404 in brand sage, short message, and primary CTA to /home.
 */

import Link from "next/link"
import { cn } from "@/lib/cn"

export default function NotFound(): JSX.Element {
  return (
    <main
      className={cn(
        "min-h-screen bg-surface flex flex-col items-center justify-center px-4"
      )}
    >
      <span className="font-display text-2xl font-semibold text-brand-sage mb-6">
        Brasena
      </span>
      <p className="font-display text-6xl sm:text-7xl font-semibold text-brand-sage mb-4">
        404
      </p>
      <p className="text-text-secondary text-center text-lg mb-8">
        This page doesn&apos;t exist yet.
      </p>
      <Link href="/home" className="btn-primary min-h-touch inline-flex items-center justify-center">
        Back to home
      </Link>
    </main>
  )
}
