module.exports = [
"[project]/Developer/brasena/Brasena/apps/web/src/lib/env.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
/**
 * Validates required environment variables at startup and exports a typed env object.
 * Run on config load so the app fails fast with a clear message if any required var is missing.
 */ const REQUIRED_KEYS = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
];
function getEnv(key) {
    if (typeof process === "undefined") return undefined;
    return process.env[key];
}
function validateEnv() {
    const missing = [];
    for (const key of REQUIRED_KEYS){
        const value = getEnv(key);
        if (value === undefined || value.trim() === "") {
            missing.push(key);
        }
    }
    if (missing.length > 0) {
        const first = missing[0];
        throw new Error(`Missing required environment variable: ${first} - check your .env.local file`);
    }
    const url = getEnv(REQUIRED_KEYS[0]).trim();
    const anonKey = getEnv(REQUIRED_KEYS[1]).trim();
    const stripeKey = getEnv(REQUIRED_KEYS[2]).trim();
    if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
        // eslint-disable-next-line no-console
        console.log("[Brasena] Env loaded: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY");
    }
    return {
        NEXT_PUBLIC_SUPABASE_URL: url,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: anonKey,
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: stripeKey
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
"[project]/Developer/brasena/Brasena/apps/web/src/app/error.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Error
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Global error boundary. Client Component that shows a branded error screen,
 * retry button (calls reset()), and back-to-home link. Requires "use client" and reset from Next.js.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/utils/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Error({ error, reset }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Log in dev; could send to error reporting in prod
        if ("TURBOPACK compile-time truthy", 1) {
            // eslint-disable-next-line no-console
            console.error("Error boundary caught:", error);
        }
    }, [
        error
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("min-h-screen bg-surface flex flex-col items-center justify-center px-4"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-display text-2xl font-semibold text-brand-sage mb-8",
                children: "Brasena"
            }, void 0, false, {
                fileName: "[project]/Developer/brasena/Brasena/apps/web/src/app/error.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-text-primary text-center text-lg mb-6",
                children: "Something went wrong on our end."
            }, void 0, false, {
                fileName: "[project]/Developer/brasena/Brasena/apps/web/src/app/error.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: reset,
                        className: "btn-primary min-h-touch min-w-[120px]",
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/Developer/brasena/Brasena/apps/web/src/app/error.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/home",
                        className: "text-text-secondary hover:text-brand-sage font-medium min-h-touch flex items-center",
                        children: "Back to home"
                    }, void 0, false, {
                        fileName: "[project]/Developer/brasena/Brasena/apps/web/src/app/error.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/brasena/Brasena/apps/web/src/app/error.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/brasena/Brasena/apps/web/src/app/error.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Developer_brasena_Brasena_apps_web_src_0fc9ccad._.js.map