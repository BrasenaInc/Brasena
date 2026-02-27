/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // typedRoutes disabled so ROUTES.* (string) work with Link href
  // experimental: { typedRoutes: true },
}

module.exports = nextConfig
