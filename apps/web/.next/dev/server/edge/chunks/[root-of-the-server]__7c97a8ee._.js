(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__7c97a8ee._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Developer/brasena/Brasena/apps/web/src/lib/env.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Developer/brasena/Brasena/apps/web/src/config/index.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/env.ts [middleware-edge] (ecmascript)");
;
const config = {
    app: {
        name: "Brasena",
        url: ("TURBOPACK compile-time value", "http://localhost:3000") ?? "http://localhost:3000",
        env: ("TURBOPACK compile-time value", "development") ?? "development"
    },
    supabase: {
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPABASE_URL,
        anonKey: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPABASE_ANON_KEY
    },
    stripe: {
        publishableKey: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
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
    ACCOUNT_ADDRESSES: "/account/addresses",
    ACCOUNT_PASSWORD: "/account/password",
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
"[project]/Developer/brasena/Brasena/apps/web/src/lib/supabase/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateSession",
    ()=>updateSession
]);
/**
 * Supabase session refresh for Next.js middleware.
 * Exports updateSession so the root middleware can refresh the auth session
 * on every request (keeping tokens valid) without duplicating client/cookie logic.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/config/index.ts [middleware-edge] (ecmascript)");
;
;
;
async function updateSession(request) {
    let supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request
    });
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["config"].supabase.url, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["config"].supabase.anonKey, {
        cookies: {
            getAll () {
                return request.cookies.getAll();
            },
            setAll (cookiesToSet) {
                cookiesToSet.forEach(({ name, value })=>request.cookies.set(name, value));
                supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request
                });
                cookiesToSet.forEach(({ name, value, options })=>supabaseResponse.cookies.set(name, value, options));
            }
        }
    });
    const { data: { user } } = await supabase.auth.getUser();
    return {
        response: supabaseResponse,
        user: user ? {
            id: user.id
        } : null
    };
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
/**
 * Middleware runs on every request BEFORE the page renders.
 * It does two things:
 * 1. Refreshes the Supabase auth session (prevents expiry) via updateSession
 * 2. Protects routes that require authentication
 *
 * Why middleware vs page-level auth checks:
 * Middleware runs at the edge (before any JS executes), so
 * unauthenticated users never see a flash of protected content.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/config/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$supabase$2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/supabase/middleware.ts [middleware-edge] (ecmascript)");
;
;
;
async function middleware(request) {
    const { response, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$supabase$2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["updateSession"])(request);
    const pathname = request.nextUrl.pathname;
    // ── Protected route groups ──────────────────────────
    const isShopRoute = pathname.startsWith("/home") || pathname.startsWith("/categories") || pathname.startsWith("/products") || pathname.startsWith("/cart") || pathname.startsWith("/checkout") || pathname.startsWith("/orders") || pathname.startsWith("/account");
    const isVendorRoute = pathname.startsWith("/vendor");
    const isAdminRoute = pathname.startsWith("/admin");
    const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/signup");
    // ── Redirect unauthenticated users ─────────────────
    if (!user && (isShopRoute || isVendorRoute || isAdminRoute)) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"].LOGIN;
        redirectUrl.searchParams.set("redirectTo", pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    // ── Redirect authenticated users away from auth pages ──
    if (user && isAuthRoute) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"].SHOP;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    return response;
}
const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|api/webhooks).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__7c97a8ee._.js.map