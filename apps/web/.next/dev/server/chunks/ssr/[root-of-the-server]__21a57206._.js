module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Developer/brasena/Brasena/apps/web/src/lib/context/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * All auth and shared UI strings in English and Spanish for the language context t() function.
 */ __turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Language screen
        "lang.choose": "Choose your language",
        "lang.subtitle": "Elige tu idioma · Select to continue",
        "lang.continue": "Continue",
        "lang.settingsHint": "You can change this anytime in settings.",
        // Login
        "login.title": "Welcome back",
        "login.subtitle": "Sign in to your account to continue",
        "login.email": "Email address",
        "login.password": "Password",
        "login.forgot": "Forgot password?",
        "login.submit": "Sign in",
        "login.or": "or",
        "login.createAccount": "Create a free account",
        "login.newUser": "New to Brasena?",
        // Signup type selection
        "signup.title": "Who are you shopping for?",
        "signup.subtitle": "Choose your account type to get started",
        "signup.personal.title": "Personal / Family",
        "signup.personal.desc": "Bulk savings for your household. 10lb–40lb packages delivered next day.",
        "signup.business.title": "Restaurant / Business",
        "signup.business.desc": "Wholesale pricing, recurring orders, invoicing, and Net-30 terms.",
        "signup.continue": "Continue",
        "signup.haveAccount": "Already have an account?",
        "signup.step1": "Step 1 of 2",
        "signup.step2": "Step 2 of 2",
        "signup.b2bBadge": "B2B",
        // Signup form
        "form.title": "Tell us about yourself",
        "form.name": "Full name",
        "form.email": "Email address",
        "form.phone": "Phone number",
        "form.password": "Password",
        "form.birthday": "Birthday",
        "form.street": "Street address",
        "form.apt": "Apt / Unit (optional)",
        "form.city": "City",
        "form.state": "State",
        "form.zip": "ZIP code",
        "form.language": "Language preference",
        "form.submit": "Create Account",
        "form.businessName": "Business name",
        "form.ein": "EIN / Tax ID",
        "form.phoneHint": "For delivery updates",
        "form.birthdayHint": "For exclusive birthday discounts",
        "form.einHint": "Your 9-digit Employer Identification Number",
        "form.addressSection": "Delivery address",
        "form.businessTitle": "Tell us about your business",
        "form.aptShort": "Apt, suite (optional)",
        "form.subtitle": "We'll use this for delivery and account security.",
        "form.agreeTerms": "I agree to the terms of service and privacy policy.",
        // Navigation
        "nav.home": "Home",
        "nav.browse": "Browse",
        "nav.cart": "Cart",
        "nav.account": "Account",
        // Common
        "common.back": "Back",
        "common.or": "or",
        "common.loading": "Loading...",
        "common.error": "Something went wrong",
        "common.english": "English",
        "common.espanol": "Español",
        "common.settingsHint": "You can change this anytime in settings"
    },
    es: {
        "lang.choose": "Elige tu idioma",
        "lang.subtitle": "Select to continue · Selecciona para continuar",
        "lang.continue": "Continuar",
        "lang.settingsHint": "Puedes cambiar esto en cualquier momento en ajustes.",
        "login.title": "Bienvenido de nuevo",
        "login.subtitle": "Inicia sesión en tu cuenta para continuar",
        "login.email": "Correo electrónico",
        "login.password": "Contraseña",
        "login.forgot": "¿Olvidaste tu contraseña?",
        "login.submit": "Iniciar sesión",
        "login.or": "o",
        "login.createAccount": "Crear cuenta gratis",
        "login.newUser": "¿Nuevo en Brasena?",
        "signup.title": "¿Para quién compras?",
        "signup.subtitle": "Elige el tipo de cuenta para comenzar",
        "signup.personal.title": "Personal / Familia",
        "signup.personal.desc": "Ahorros al por mayor para tu hogar. Paquetes de 10–40 lb entregados al día siguiente.",
        "signup.business.title": "Restaurante / Empresa",
        "signup.business.desc": "Precios mayoristas, pedidos recurrentes, facturación y términos Net-30.",
        "signup.continue": "Continuar",
        "signup.haveAccount": "¿Ya tienes una cuenta?",
        "signup.step1": "Paso 1 de 2",
        "signup.step2": "Paso 2 de 2",
        "signup.b2bBadge": "B2B",
        "form.title": "Cuéntanos sobre ti",
        "form.name": "Nombre completo",
        "form.email": "Correo electrónico",
        "form.phone": "Teléfono",
        "form.password": "Contraseña",
        "form.birthday": "Fecha de nacimiento",
        "form.street": "Dirección",
        "form.apt": "Apto / Unidad (opcional)",
        "form.city": "Ciudad",
        "form.state": "Estado",
        "form.zip": "Código postal",
        "form.language": "Idioma preferido",
        "form.submit": "Crear cuenta",
        "form.businessName": "Nombre del negocio",
        "form.ein": "EIN / Número de identificación fiscal",
        "form.phoneHint": "Para actualizaciones de entrega",
        "form.birthdayHint": "Para descuentos exclusivos de cumpleaños",
        "form.einHint": "Tu número de identificación fiscal de 9 dígitos",
        "form.addressSection": "Dirección de entrega",
        "form.businessTitle": "Cuéntanos sobre tu negocio",
        "form.aptShort": "Apto, suite (opcional)",
        "form.subtitle": "Lo usaremos para entrega y seguridad de la cuenta.",
        "form.agreeTerms": "Acepto los términos de servicio y la política de privacidad.",
        "nav.home": "Inicio",
        "nav.browse": "Explorar",
        "nav.cart": "Carrito",
        "nav.account": "Cuenta",
        "common.back": "Atrás",
        "common.or": "o",
        "common.loading": "Cargando...",
        "common.error": "Algo salió mal",
        "common.english": "English",
        "common.espanol": "Español",
        "common.settingsHint": "You can change this anytime in settings"
    }
};
}),
"[project]/Developer/brasena/Brasena/apps/web/src/lib/context/language.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Language context: stores en/es, persists to localStorage, provides t() for
 * auth and shared UI strings. Used across the app for i18n.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/context/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const STORAGE_KEY = "brasena-lang";
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function getStoredLanguage() {
    if ("TURBOPACK compile-time truthy", 1) return "en";
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function LanguageProvider({ children }) {
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLanguageState(getStoredLanguage());
    }, []);
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lang)=>{
        setLanguageState(lang);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        const dict = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
        return dict[key] ?? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"].en[key] ?? key;
    }, [
        language
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            language,
            setLanguage,
            t
        }), [
        language,
        setLanguage,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Developer/brasena/Brasena/apps/web/src/lib/context/language.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return ctx;
}
}),
"[project]/Developer/brasena/Brasena/apps/web/src/components/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/apps/web/src/lib/context/language.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$apps$2f$web$2f$src$2f$lib$2f$context$2f$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/Developer/brasena/Brasena/apps/web/src/components/providers.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__21a57206._.js.map