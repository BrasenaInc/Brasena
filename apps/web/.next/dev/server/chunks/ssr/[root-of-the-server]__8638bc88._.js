module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Developer/brasena/Brasena/apps/web/src/lib/env.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
/**
 * Validates required environment variables at startup and exports a typed env object.
 * Uses static process.env.X references so Next.js inlines them in the client bundle.
 */ function validateEnv() {
    const url = ("TURBOPACK compile-time value", "https://ybbmqnodbbrkexkfqlkx.supabase.co") ?? "";
    const anonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliYm1xbm9kYmJya2V4a2ZxbGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY4MjAsImV4cCI6MjA4NzY1MjgyMH0.uI8GaLPDt-NXDQGvnJE00X-WXgLx2cFx3CzMV_Snydc") ?? "";
    const stripeKey = ("TURBOPACK compile-time value", "pk_test_placeholder") ?? "";
    if (url.trim() === "") {
        throw new Error("Missing required environment variable: NEXT_PUBLIC_SUPABASE_URL - check your .env.local file");
    }
    if (anonKey.trim() === "") {
        throw new Error("Missing required environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY - check your .env.local file");
    }
    if (stripeKey.trim() === "") {
        throw new Error("Missing required environment variable: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY - check your .env.local file");
    }
    if (!url.startsWith("https://") || !url.includes(".supabase.co")) {
        throw new Error("NEXT_PUBLIC_SUPABASE_URL must be the Supabase API URL (e.g. https://YOUR_REF.supabase.co). Use Project Settings → API → Project URL in the dashboard, not the Postgres connection string.");
    }
    if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
        // eslint-disable-next-line no-console
        console.log("[Brasena] Env loaded: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY");
    }
    return {
        NEXT_PUBLIC_SUPABASE_URL: url.trim(),
        NEXT_PUBLIC_SUPABASE_ANON_KEY: anonKey.trim(),
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: stripeKey.trim()
    };
}
const env = validateEnv();
}),
"[project]/Developer/brasena/Brasena/apps/web/src/config/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUSINESS",
    ()=>BUSINESS,
    "ORDER_STATUS",
    ()=>ORDER_STATUS,
    "ROUTES",
    ()=>ROUTES,
    "config",
    ()=>config
]);
// ─── Environment Variables ─────────────────────────────
// All env vars flow through here. Never import process.env directly
// in components - always use this config object instead.
// Required vars are validated at boot via @/lib/env.
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/env.ts [app-ssr] (ecmascript)");
;
const config = {
    app: {
        name: "Brasena",
        url: ("TURBOPACK compile-time value", "http://localhost:3000") ?? "http://localhost:3000",
        env: ("TURBOPACK compile-time value", "development") ?? "development"
    },
    supabase: {
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPABASE_URL,
        anonKey: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPABASE_ANON_KEY
    },
    stripe: {
        publishableKey: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    },
    maps: {
        mapboxToken: ("TURBOPACK compile-time value", "")
    },
    delivery: {
        uberDirectEnabled: ("TURBOPACK compile-time value", "false") === "true",
        maxWeightForUber: 30
    }
};
const BUSINESS = {
    // Bulk pricing thresholds (lbs)
    WEIGHT_TIERS: [
        10,
        20,
        30,
        40
    ],
    // Order routing
    DRIVER_NOTIFY_DELAY_MS: 7 * 60 * 1000,
    // Operating hours (EST)
    HOURS: {
        open: 6,
        close: 23
    },
    // Geographic
    INITIAL_BOROUGH: "Bronx",
    SERVICE_ZIPCODES: [
        "10451",
        "10452",
        "10453",
        "10454",
        "10455",
        "10456",
        "10457",
        "10458",
        "10459",
        "10460",
        "10461",
        "10462",
        "10463",
        "10464",
        "10465",
        "10466",
        "10467",
        "10468",
        "10469",
        "10470",
        "10471",
        "10472",
        "10473",
        "10474",
        "10475"
    ],
    // Product
    MAX_PHASE_1_PRODUCTS: 25,
    CATEGORIES: [
        "Beef",
        "Pork",
        "Chicken"
    ]
};
const ROUTES = {
    // Public
    HOME: "/",
    LANGUAGE: "/language",
    LOGIN: "/login",
    SIGNUP: "/signup",
    // Shop (authenticated)
    SHOP: "/home",
    CATEGORIES: "/categories",
    PRODUCTS: (category)=>`/categories/${category}`,
    PRODUCT: (slug)=>`/products/${slug}`,
    CART: "/cart",
    CHECKOUT: "/checkout",
    // Orders
    ORDERS: "/orders",
    ORDER: (id)=>`/orders/${id}`,
    ORDER_TRACK: (id)=>`/orders/${id}/track`,
    // Account
    ACCOUNT: "/account",
    // Vendor (iPad interface)
    VENDOR_QUEUE: "/vendor/queue",
    VENDOR_ORDER: (id)=>`/vendor/orders/${id}`,
    // Admin
    ADMIN_DASHBOARD: "/admin/dashboard",
    ADMIN_PRODUCTS: "/admin/products",
    ADMIN_ORDERS: "/admin/orders"
};
const ORDER_STATUS = {
    PENDING: "pending",
    CONFIRMED: "confirmed",
    PREPARING: "preparing",
    OUT_FOR_DELIVERY: "out_for_delivery",
    DELIVERED: "delivered",
    CANCELLED: "cancelled"
};
}),
"[project]/Developer/brasena/Brasena/apps/web/src/lib/utils/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcSavingsPercent",
    ()=>calcSavingsPercent,
    "calcTotalWeight",
    ()=>calcTotalWeight,
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "formatDeliveryDate",
    ()=>formatDeliveryDate,
    "formatPrice",
    ()=>formatPrice,
    "formatPricePerLb",
    ()=>formatPricePerLb,
    "generateOrderNumber",
    ()=>generateOrderNumber,
    "getDeliveryProvider",
    ()=>getDeliveryProvider,
    "getNextDeliveryDate",
    ()=>getNextDeliveryDate,
    "isZipCodeServiced",
    ()=>isZipCodeServiced
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/config/index.ts [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPrice(cents) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(cents / 100);
}
function formatPricePerLb(pricePerLbCents) {
    return `${formatPrice(pricePerLbCents)}/lb`;
}
function calcSavingsPercent(base, sale) {
    if (base === 0) return 0;
    return Math.round((base - sale) / base * 100);
}
function getDeliveryProvider(totalWeightLbs) {
    if (totalWeightLbs > __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].delivery.maxWeightForUber) {
        return "private_van";
    }
    // Under 30lb - Uber Direct preferred, DoorDash as fallback
    return "uber_direct";
}
function isZipCodeServiced(zip) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUSINESS"].SERVICE_ZIPCODES.includes(zip);
}
function generateOrderNumber(id) {
    const year = new Date().getFullYear();
    return `BR-${year}-${String(id).padStart(5, "0")}`;
}
function formatDeliveryDate(isoString) {
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    }).format(new Date(isoString));
}
function getNextDeliveryDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Skip Sunday (0) - no deliveries
    if (tomorrow.getDay() === 0) {
        tomorrow.setDate(tomorrow.getDate() + 1);
    }
    return tomorrow.toISOString();
}
function calcTotalWeight(items) {
    return items.reduce((sum, i)=>sum + i.weightLbs * i.quantity, 0);
}
function debounce(fn, ms) {
    let timeoutId;
    return (...args)=>{
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>fn(...args), ms);
    };
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * EN/ES pill toggle for auth screens (login, signup). Shown only on those routes;
 * language selection screen has its own full UI.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/context/language.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/utils/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AUTH_WITH_TOGGLE = [
    "/login",
    "/signup",
    "/signup/residential",
    "/signup/business"
];
function LanguageToggle() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (!pathname || !AUTH_WITH_TOGGLE.includes(pathname)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-4 right-4 z-50 flex rounded-[20px] border border-surface-border bg-surface-card p-0.5 gap-0.5"),
        role: "group",
        "aria-label": "Language",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setLanguage("en"),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-all", language === "en" ? "bg-brand-sage text-brand-black" : "bg-transparent text-text-muted hover:text-text-secondary"),
                children: "EN"
            }, void 0, false, {
                fileName: "[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setLanguage("es"),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-all", language === "es" ? "bg-brand-sage text-brand-black" : "bg-transparent text-text-muted hover:text-text-secondary"),
                children: "ES"
            }, void 0, false, {
                fileName: "[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/components/auth-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthShell",
    ()=>AuthShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Wrapper for auth layout: positions the language toggle (EN/ES) at top-right
 * and renders children. Used only under (auth) routes.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$components$2f$language$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/utils/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function AuthShell({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-full flex-1 flex flex-col", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$components$2f$language$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                fileName: "[project]/Developer/brasena/Brasena/apps/web/src/components/auth-shell.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/brasena/Brasena/apps/web/src/components/auth-shell.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8638bc88._.js.map