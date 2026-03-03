import Link from "next/link";
import { BrasenaLogo } from "@/components/brand/brasena-logo";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="flex h-16 items-center justify-between border-b px-6">
        <div className="flex items-center gap-2">
          <BrasenaLogo className="h-8 w-8" />
          <span className="font-serif text-xl font-bold tracking-wider text-sage">
            BRASENA
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href="/auth/sign-up"
            className="rounded-md bg-sage px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
          >
            Get started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Wholesale meat,
          <br />
          <span className="text-sage">delivered fresh.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Restaurant-quality cuts at bulk prices. Order by the case — ribeye,
          ground beef, chicken, and more — delivered to your door in the Bronx.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/auth/sign-up"
            className="w-full rounded-xl bg-sage px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-sage-dark sm:w-auto"
          >
            Start ordering
          </Link>
          <Link
            href="/auth/login"
            className="w-full rounded-xl border px-8 py-4 text-base font-medium transition-colors hover:bg-accent sm:w-auto"
          >
            Sign in
          </Link>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        Brasena · The Bronx, NYC
      </footer>
    </div>
  );
}
