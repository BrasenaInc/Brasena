/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brasena brand extracted from logo
      // Dark charcoal background + sage/mint green
      colors: {
        brand: {
          black:   "#0F1410",  // deep brand black (logo bg)
          green: {
            50:  "#f0f7f2",
            100: "#d8edd e",
            200: "#b3dbbe",
            300: "#8bc9a0",
            400: "#6ab882",
            500: "#8BAF8E",  // primary sage from logo
            600: "#5a9966",
            700: "#3d7a4a",
            800: "#2d5c37",
            900: "#1e3d25",
          },
          sage:  "#8BAF8E",   // primary - extracted from logo
          mint:  "#A8C5A0",   // lighter variant
          forest:"#4A7C59",   // darker variant
          gold:  "#B8953A",   // accent for badges / eyebrow labels
        },
        // Semantic aliases
        primary:   "#8BAF8E",
        "primary-dark": "#4A7C59",
        "primary-light": "#A8C5A0",
        surface: {
          DEFAULT: "#0F1410",
          muted:   "#1A2018",
          card:    "#1E2820",
          border:  "#2A3828",
        },
        text: {
          primary:   "#F5F7F5",
          secondary: "#9BAD9B",
          muted:     "#6B7C6B",
        },
      },
      fontFamily: {
        // Display: strong, modern, premium feel
        display: ["var(--font-display)", "serif"],
        // Body: clean, highly readable (40+ demographic)
        body:    ["var(--font-body)", "sans-serif"],
        // Mono: for prices and SKUs
        mono:    ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Larger scale for accessibility (40+ demographic)
        "2xs": ["0.65rem",  { lineHeight: "1rem"  }],
        xs:    ["0.8rem",   { lineHeight: "1.2rem" }],
        sm:    ["0.925rem", { lineHeight: "1.4rem" }],
        base:  ["1.05rem",  { lineHeight: "1.65rem" }],
        lg:    ["1.2rem",   { lineHeight: "1.75rem" }],
        xl:    ["1.35rem",  { lineHeight: "1.85rem" }],
        "2xl": ["1.6rem",   { lineHeight: "2rem"   }],
        "3xl": ["1.95rem",  { lineHeight: "2.3rem" }],
        "4xl": ["2.5rem",   { lineHeight: "2.75rem"}],
        "5xl": ["3.25rem",  { lineHeight: "1.1"   }],
        "6xl": ["4rem",     { lineHeight: "1.05"  }],
      },
      spacing: {
        // Touch targets minimum 44pt for accessibility
        "touch": "44px",
        "touch-lg": "56px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(139,175,142,0.12)",
        "brand":    "0 4px 20px rgba(139,175,142,0.18)",
        "brand-lg": "0 8px 40px rgba(139,175,142,0.25)",
        "card":     "0 2px 16px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in":     "fadeIn 0.4s ease-out",
        "slide-up":    "slideUp 0.4s ease-out",
        "slide-in":    "slideIn 0.3s ease-out",
        "pulse-green": "pulseGreen 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGreen: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(139,175,142,0)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(139,175,142,0.15)" },
        },
      },
    },
  },
  plugins: [],
}
