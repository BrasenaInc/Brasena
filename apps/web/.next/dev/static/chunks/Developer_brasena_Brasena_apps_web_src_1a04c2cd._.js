(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/brasena/Brasena/apps/web/src/lib/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
/**
 * Validates required environment variables at startup and exports a typed env object.
 * Uses static process.env.X references so Next.js inlines them in the client bundle.
 */ function validateEnv() {
    var _process_env_NEXT_PUBLIC_SUPABASE_URL, _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY, _process_env_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    var url = (_process_env_NEXT_PUBLIC_SUPABASE_URL = ("TURBOPACK compile-time value", "https://ybbmqnodbbrkexkfqlkx.supabase.co")) !== null && _process_env_NEXT_PUBLIC_SUPABASE_URL !== void 0 ? _process_env_NEXT_PUBLIC_SUPABASE_URL : "";
    var anonKey = (_process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliYm1xbm9kYmJya2V4a2ZxbGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY4MjAsImV4cCI6MjA4NzY1MjgyMH0.uI8GaLPDt-NXDQGvnJE00X-WXgLx2cFx3CzMV_Snydc")) !== null && _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY !== void 0 ? _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY : "";
    var stripeKey = (_process_env_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "pk_test_placeholder")) !== null && _process_env_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY !== void 0 ? _process_env_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY : "";
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
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
        // eslint-disable-next-line no-console
        console.log("[Brasena] Env loaded: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY");
    }
    return {
        NEXT_PUBLIC_SUPABASE_URL: url.trim(),
        NEXT_PUBLIC_SUPABASE_ANON_KEY: anonKey.trim(),
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: stripeKey.trim()
    };
}
var env = validateEnv();
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/config/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// ─── Environment Variables ─────────────────────────────
// All env vars flow through here. Never import process.env directly
// in components - always use this config object instead.
// Required vars are validated at boot via @/lib/env.
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/env.ts [app-client] (ecmascript)");
;
var _process_env_NEXT_PUBLIC_APP_URL, _process_env_NODE_ENV;
;
var config = {
    app: {
        name: "Brasena",
        url: (_process_env_NEXT_PUBLIC_APP_URL = ("TURBOPACK compile-time value", "http://localhost:3000")) !== null && _process_env_NEXT_PUBLIC_APP_URL !== void 0 ? _process_env_NEXT_PUBLIC_APP_URL : "http://localhost:3000",
        env: (_process_env_NODE_ENV = ("TURBOPACK compile-time value", "development")) !== null && _process_env_NODE_ENV !== void 0 ? _process_env_NODE_ENV : "development"
    },
    supabase: {
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPABASE_URL,
        anonKey: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPABASE_ANON_KEY
    },
    stripe: {
        publishableKey: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    },
    maps: {
        mapboxToken: ("TURBOPACK compile-time value", "")
    },
    delivery: {
        uberDirectEnabled: ("TURBOPACK compile-time value", "false") === "true",
        maxWeightForUber: 30
    }
};
var BUSINESS = {
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
var ROUTES = {
    // Public
    HOME: "/",
    LANGUAGE: "/language",
    LOGIN: "/login",
    SIGNUP: "/signup",
    // Shop (authenticated)
    SHOP: "/home",
    CATEGORIES: "/categories",
    PRODUCTS: function(category) {
        return "/categories/".concat(category);
    },
    PRODUCT: function(slug) {
        return "/products/".concat(slug);
    },
    CART: "/cart",
    CHECKOUT: "/checkout",
    // Orders
    ORDERS: "/orders",
    ORDER: function(id) {
        return "/orders/".concat(id);
    },
    ORDER_TRACK: function(id) {
        return "/orders/".concat(id, "/track");
    },
    // Account
    ACCOUNT: "/account",
    // Vendor (iPad interface)
    VENDOR_QUEUE: "/vendor/queue",
    VENDOR_ORDER: function(id) {
        return "/vendor/orders/".concat(id);
    },
    // Admin
    ADMIN_DASHBOARD: "/admin/dashboard",
    ADMIN_PRODUCTS: "/admin/products",
    ADMIN_ORDERS: "/admin/orders"
};
var ORDER_STATUS = {
    PENDING: "pending",
    CONFIRMED: "confirmed",
    PREPARING: "preparing",
    OUT_FOR_DELIVERY: "out_for_delivery",
    DELIVERED: "delivered",
    CANCELLED: "cancelled"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/lib/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/config/index.ts [app-client] (ecmascript)");
;
;
;
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPrice(cents) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(cents / 100);
}
function formatPricePerLb(pricePerLbCents) {
    return "".concat(formatPrice(pricePerLbCents), "/lb");
}
function calcSavingsPercent(base, sale) {
    if (base === 0) return 0;
    return Math.round((base - sale) / base * 100);
}
function getDeliveryProvider(totalWeightLbs) {
    if (totalWeightLbs > __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].delivery.maxWeightForUber) {
        return "private_van";
    }
    // Under 30lb - Uber Direct preferred, DoorDash as fallback
    return "uber_direct";
}
function isZipCodeServiced(zip) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUSINESS"].SERVICE_ZIPCODES.includes(zip);
}
function generateOrderNumber(id) {
    var year = new Date().getFullYear();
    return "BR-".concat(year, "-").concat(String(id).padStart(5, "0"));
}
function formatDeliveryDate(isoString) {
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    }).format(new Date(isoString));
}
function getNextDeliveryDate() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Skip Sunday (0) - no deliveries
    if (tomorrow.getDay() === 0) {
        tomorrow.setDate(tomorrow.getDate() + 1);
    }
    return tomorrow.toISOString();
}
function calcTotalWeight(items) {
    return items.reduce(function(sum, i) {
        return sum + i.weightLbs * i.quantity;
    }, 0);
}
function debounce(fn, ms) {
    var timeoutId;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            return fn.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
        }, ms);
    };
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * EN/ES pill toggle for auth screens (login, signup). Shown only on those routes;
 * language selection screen has its own full UI.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/context/language.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/utils/index.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
var AUTH_WITH_TOGGLE = [
    "/login",
    "/signup",
    "/signup/residential",
    "/signup/business"
];
function LanguageToggle() {
    _s();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var _useLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])(), language = _useLanguage.language, setLanguage = _useLanguage.setLanguage;
    if (!pathname || !AUTH_WITH_TOGGLE.includes(pathname)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-4 right-4 z-50 flex rounded-[20px] border border-surface-border bg-surface-card p-0.5 gap-0.5"),
        role: "group",
        "aria-label": "Language",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: function() {
                    return setLanguage("en");
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-all", language === "en" ? "bg-brand-sage text-brand-black" : "bg-transparent text-text-muted hover:text-text-secondary"),
                children: "EN"
            }, void 0, false, {
                fileName: "[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: function() {
                    return setLanguage("es");
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-all", language === "es" ? "bg-brand-sage text-brand-black" : "bg-transparent text-text-muted hover:text-text-secondary"),
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
_s(LanguageToggle, "gMTeKsGO7mULJ/5KYKSupCEUwJw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/components/auth-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthShell",
    ()=>AuthShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Wrapper for auth layout: positions the language toggle (EN/ES) at top-right
 * and renders children. Used only under (auth) routes.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$components$2f$language$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/components/language-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/utils/index.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function AuthShell(param) {
    var children = param.children, className = param.className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full flex-1 flex flex-col", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$components$2f$language$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
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
_c = AuthShell;
var _c;
__turbopack_context__.k.register(_c, "AuthShell");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_brasena_Brasena_apps_web_src_1a04c2cd._.js.map