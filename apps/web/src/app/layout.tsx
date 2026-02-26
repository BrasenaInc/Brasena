import type { Metadata, Viewport } from "next"
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google"
import "@/styles/globals.css"
import { Providers } from "@/components/providers"

// ─── Font Setup ───────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

// ─── Metadata ─────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Brasena | Buy in Bulk & Save More",
    template: "%s | Brasena",
  },
  description:
    "Fresh meat delivered to your door. Bulk pricing for families and restaurants in the Bronx and NYC.",
  keywords: ["bulk meat", "meat delivery", "wholesale meat", "Bronx", "NYC", "B2B meat"],
  openGraph: {
    title: "Brasena | Buy in Bulk & Save More",
    description: "Fresh meat delivered. Wholesale prices for everyone.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // prevent zoom on input focus (mobile UX)
  themeColor: "#0F1410",
}

// ─── Root Layout ──────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-body bg-surface text-text-primary antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
