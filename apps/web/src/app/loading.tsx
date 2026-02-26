/**
 * Global loading UI shown while any page or layout is suspending.
 * Branded with Brasena wordmark and a sage pulse ring; uses only Tailwind and globals.css animations.
 */

export default function Loading(): JSX.Element {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="relative flex items-center justify-center w-32 h-32">
        <div
          className="absolute inset-0 rounded-full border-2 border-brand-sage animate-pulse-ring"
          aria-hidden
        />
        <span className="font-display text-2xl font-semibold text-brand-sage relative z-10">
          Brasena
        </span>
      </div>
    </div>
  )
}
