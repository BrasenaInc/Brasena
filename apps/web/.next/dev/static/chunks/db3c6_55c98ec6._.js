(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_async_to_generator
]);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, key, source[key]);
        });
    }
    return target;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_with_holes
]);
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array_limit
]);
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_rest
]);
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_like_to_array
]);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_unsupported_iterable_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_sliced_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _sliced_to_array(arr, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_without_properties_loose.cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports._ = _object_without_properties_loose;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_without_properties.cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _object_without_properties_loose = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_without_properties_loose.cjs [app-client] (ecmascript)");
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose._(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports._ = _object_without_properties;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread_props
]);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties_loose
]);
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)");
;
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_without_holes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array
]);
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_spread
]);
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_consumable_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _to_consumable_array(arr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _to_array(arr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_get_prototype_of
]);
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_is_native_reflect_construct
]);
function _is_native_reflect_construct() {
    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
        // If the internal slots aren't set, this throws an error similar to
        //   TypeError: this is not a Boolean object.
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function _is_native_reflect_construct() {
        return !!result;
    })();
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_assert_this_initialized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_assert_this_initialized
]);
function _assert_this_initialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_possible_constructor_return.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_possible_constructor_return
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_assert_this_initialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_assert_this_initialized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
function _possible_constructor_return(self, call) {
    if (call && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(call) === "object" || typeof call === "function")) return call;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_assert_this_initialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(self);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_call_super
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_possible_constructor_return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_possible_constructor_return.js [app-client] (ecmascript)");
;
;
;
function _call_super(_this, derived, args) {
    // Super
    derived = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(derived);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_possible_constructor_return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])() ? Reflect.construct(derived, args || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this).constructor) : derived.apply(_this, args));
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_call_check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
;
function _class_call_check(instance, Constructor) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Constructor)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_create_class
]);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_set_prototype_of
]);
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_inherits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)");
;
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(subClass, superClass);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_construct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_construct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)");
;
;
function _construct(Parent, args, Class) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_reflect_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])()) _construct = Reflect.construct;
    else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_is_native_function.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_is_native_function
]);
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_wrap_native_super.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_wrap_native_super
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_is_native_function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_set_prototype_of.js [app-client] (ecmascript)");
;
;
;
;
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function _wrap_native_super(Class) {
        if (Class === null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_is_native_function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Class, arguments, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_set_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_super_prop_base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_super_prop_base
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
;
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(object);
        if (object === null) break;
    }
    return object;
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_super_prop_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_super_prop_base.js [app-client] (ecmascript)");
;
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else {
        _get = function get(target, property, receiver) {
            var base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_super_prop_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(receiver || target);
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_to_array.cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _array_with_holes = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_array_with_holes.cjs [app-client] (ecmascript)");
var _iterable_to_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_iterable_to_array.cjs [app-client] (ecmascript)");
var _non_iterable_rest = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_non_iterable_rest.cjs [app-client] (ecmascript)");
var _unsupported_iterable_to_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_unsupported_iterable_to_array.cjs [app-client] (ecmascript)");
function _to_array(arr) {
    return _array_with_holes._(arr) || _iterable_to_array._(arr) || _unsupported_iterable_to_array._(arr) || _non_iterable_rest._();
}
exports._ = _to_array;
}),
"[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
}),
"[project]/Developer/brasena/Brasena/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toNestErrors",
    ()=>r,
    "validateFieldsNatively",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
var s = function(e, s, o) {
    if (e && "reportValidity" in e) {
        var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(o, s);
        e.setCustomValidity(r && r.message || ""), e.reportValidity();
    }
}, o = function(t, e) {
    var _loop = function(o) {
        var r = e.fields[o];
        r && r.ref && "reportValidity" in r.ref ? s(r.ref, o, t) : r.refs && r.refs.forEach(function(e) {
            return s(e, o, t);
        });
    };
    for(var o in e.fields)_loop(o);
}, r = function(s, r) {
    r.shouldUseNativeValidation && o(s, r);
    var f = {};
    for(var o1 in s){
        var n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(r.fields, o1), a = Object.assign(s[o1] || {}, {
            ref: n && n.ref
        });
        if (i(r.names || Object.keys(s), o1)) {
            var _$s = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(f, o1));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(_$s, "root", a), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(f, o1, _$s);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(f, o1, a);
    }
    return f;
}, i = function(t, e) {
    return t.some(function(t) {
        return t.startsWith(e + ".");
    });
};
;
 //# sourceMappingURL=resolvers.mjs.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zodResolver",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
;
var n = function n(r, e) {
    for(var n = {}; r.length;){
        var t = r[0], s = t.code, i = t.message, a = t.path.join(".");
        if (!n[a]) if ("unionErrors" in t) {
            var u = t.unionErrors[0].errors[0];
            n[a] = {
                message: u.message,
                type: u.code
            };
        } else n[a] = {
            message: i,
            type: s
        };
        if ("unionErrors" in t && t.unionErrors.forEach(function(e) {
            return e.errors.forEach(function(e) {
                return r.push(e);
            });
        }), e) {
            var c = n[a].types, f = c && c[t.code];
            n[a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrors"])(a, e, n, s, f ? [].concat(f, t.message) : t.message);
        }
        r.shift();
    }
    return n;
}, t = function t(o, t, s) {
    return void 0 === s && (s = {}), function(i, a, u) {
        try {
            return Promise.resolve(function(e, n) {
                try {
                    var a = Promise.resolve(o["sync" === s.mode ? "parse" : "parseAsync"](i, t)).then(function(e) {
                        return u.shouldUseNativeValidation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateFieldsNatively"])({}, u), {
                            errors: {},
                            values: s.raw ? i : e
                        };
                    });
                } catch (r) {
                    return n(r);
                }
                return a && a.then ? a.then(void 0, n) : a;
            }(0, function(r) {
                if (function(r) {
                    return Array.isArray(null == r ? void 0 : r.errors);
                }(r)) return {
                    values: {},
                    errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNestErrors"])(n(r.errors, !u.shouldUseNativeValidation && "all" === u.criteriaMode), u)
                };
                throw r;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
};
;
 //# sourceMappingURL=zod.module.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon,
    "toKebabCase",
    ()=>toKebabCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var toKebabCase = function(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
};
var createLucideIcon = function(iconName, iconNode) {
    var Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_0, _1) {
        var _ref = [
            _0,
            _1
        ], _ref1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref), _ref2 = _ref1[0], _rest = _ref1.slice(1), _ref_color = _ref2.color, color = _ref_color === void 0 ? "currentColor" : _ref_color, _ref_size = _ref2.size, size = _ref_size === void 0 ? 24 : _ref_size, _ref_strokeWidth = _ref2.strokeWidth, strokeWidth = _ref_strokeWidth === void 0 ? 2 : _ref_strokeWidth, absoluteStrokeWidth = _ref2.absoluteStrokeWidth, _ref_className = _ref2.className, className = _ref_className === void 0 ? "" : _ref_className, children = _ref2.children, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref2, [
            "color",
            "size",
            "strokeWidth",
            "absoluteStrokeWidth",
            "className",
            "children"
        ]), _rest1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_rest, 1), ref = _rest1[0];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            ref: ref
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), {
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: [
                "lucide",
                "lucide-".concat(toKebabCase(iconName)),
                className
            ].join(" ")
        }), rest), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(iconNode.map(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), tag = _param[0], attrs = _param[1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs);
        })).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Array.isArray(children) ? children : [
            children
        ])));
    });
    Component.displayName = "".concat(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Eye
]);
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
var Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Eye", [
    [
        "path",
        {
            d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
            key: "rwhkz3"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
;
 //# sourceMappingURL=eye.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)");
}),
"[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EyeOff
]);
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
var EyeOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("EyeOff", [
    [
        "path",
        {
            d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
            key: "1jxqfv"
        }
    ],
    [
        "path",
        {
            d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
            key: "9wicm4"
        }
    ],
    [
        "path",
        {
            d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
            key: "1jreej"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ]
]);
;
 //# sourceMappingURL=eye-off.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EyeOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript)");
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base error for Supabase Edge Function invocations.
 *
 * @example
 * ```ts
 * import { FunctionsError } from '@supabase/functions-js'
 *
 * throw new FunctionsError('Unexpected error invoking function', 'FunctionsError', {
 *   requestId: 'abc123',
 * })
 * ```
 */ __turbopack_context__.s([
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_wrap_native_super.js [app-client] (ecmascript)");
;
;
;
;
var FunctionsError = /*#__PURE__*/ function(Error1) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(FunctionsError, Error1);
    function FunctionsError(message) {
        var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'FunctionsError', context = arguments.length > 2 ? arguments[2] : void 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsError);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsError, [
            message
        ]);
        _this.name = name;
        _this.context = context;
        return _this;
    }
    return FunctionsError;
}((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Error));
var FunctionsFetchError = /*#__PURE__*/ function(FunctionsError) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(FunctionsFetchError, FunctionsError);
    function FunctionsFetchError(context) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsFetchError);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsFetchError, [
            'Failed to send a request to the Edge Function',
            'FunctionsFetchError',
            context
        ]);
    }
    return FunctionsFetchError;
}(FunctionsError);
var FunctionsRelayError = /*#__PURE__*/ function(FunctionsError) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(FunctionsRelayError, FunctionsError);
    function FunctionsRelayError(context) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsRelayError);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsRelayError, [
            'Relay Error invoking the Edge Function',
            'FunctionsRelayError',
            context
        ]);
    }
    return FunctionsRelayError;
}(FunctionsError);
var FunctionsHttpError = /*#__PURE__*/ function(FunctionsError) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(FunctionsHttpError, FunctionsError);
    function FunctionsHttpError(context) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsHttpError);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsHttpError, [
            'Edge Function returned a non-2xx status code',
            'FunctionsHttpError',
            context
        ]);
    }
    return FunctionsHttpError;
}(FunctionsError);
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFetch",
    ()=>resolveFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
;
var resolveFetch = function(customFetch) {
    if (customFetch) {
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return customFetch.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
        };
    }
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return fetch.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
    };
}; //# sourceMappingURL=helper.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionsClient",
    ()=>FunctionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var FunctionsClient = /*#__PURE__*/ function() {
    "use strict";
    function FunctionsClient(url) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_headers = _ref.headers, headers = _ref_headers === void 0 ? {} : _ref_headers, customFetch = _ref.customFetch, _ref_region = _ref.region, region = _ref_region === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionRegion"].Any : _ref_region;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FunctionsClient);
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFetch"])(customFetch);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(FunctionsClient, [
        {
            /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     * @example
     * ```ts
     * functions.setAuth(session.access_token)
     * ```
     */ key: "setAuth",
            value: function setAuth(token) {
                this.headers.Authorization = "Bearer ".concat(token);
            }
        },
        {
            /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     * @example
     * ```ts
     * const { data, error } = await functions.invoke('hello-world', {
     *   body: { name: 'Ada' },
     * })
     * ```
     */ key: "invoke",
            value: function invoke(functionName_1) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function(functionName) {
                    var options, _a, timeoutId, timeoutController, headers, method, functionArgs, signal, timeout, _headers, region, url, body, effectiveSignal, response, isRelayError, responseType, data, error;
                    var _arguments = arguments;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                options = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    12,
                                    13,
                                    14
                                ]);
                                headers = options.headers, method = options.method, functionArgs = options.body, signal = options.signal, timeout = options.timeout;
                                _headers = {};
                                region = options.region;
                                if (!region) {
                                    region = this.region;
                                }
                                // Add region as query parameter using URL API
                                url = new URL("".concat(this.url, "/").concat(functionName));
                                if (region && region !== 'any') {
                                    _headers['x-region'] = region;
                                    url.searchParams.set('forceFunctionRegion', region);
                                }
                                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                                    if (typeof Blob !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(functionArgs, Blob) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(functionArgs, ArrayBuffer)) {
                                        // will work for File as File inherits Blob
                                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                                        _headers['Content-Type'] = 'application/octet-stream';
                                        body = functionArgs;
                                    } else if (typeof functionArgs === 'string') {
                                        // plain string
                                        _headers['Content-Type'] = 'text/plain';
                                        body = functionArgs;
                                    } else if (typeof FormData !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(functionArgs, FormData)) {
                                        // don't set content-type headers
                                        // Request will automatically add the right boundary value
                                        body = functionArgs;
                                    } else {
                                        // default, assume this is JSON
                                        _headers['Content-Type'] = 'application/json';
                                        body = JSON.stringify(functionArgs);
                                    }
                                } else {
                                    if (functionArgs && typeof functionArgs !== 'string' && !(typeof Blob !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(functionArgs, Blob)) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(functionArgs, ArrayBuffer) && !(typeof FormData !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(functionArgs, FormData))) {
                                        body = JSON.stringify(functionArgs);
                                    } else {
                                        body = functionArgs;
                                    }
                                }
                                // Handle timeout by creating an AbortController
                                effectiveSignal = signal;
                                if (timeout) {
                                    timeoutController = new AbortController();
                                    timeoutId = setTimeout(function() {
                                        return timeoutController.abort();
                                    }, timeout);
                                    // If user provided their own signal, we need to respect both
                                    if (signal) {
                                        effectiveSignal = timeoutController.signal;
                                        // If the user's signal is aborted, abort our timeout controller too
                                        signal.addEventListener('abort', function() {
                                            return timeoutController.abort();
                                        });
                                    } else {
                                        effectiveSignal = timeoutController.signal;
                                    }
                                }
                                return [
                                    4,
                                    this.fetch(url.toString(), {
                                        method: method || 'POST',
                                        // headers priority is (high to low):
                                        // 1. invoke-level headers
                                        // 2. client-level headers
                                        // 3. default Content-Type header
                                        headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                                        body: body,
                                        signal: effectiveSignal
                                    }).catch(function(fetchError) {
                                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsFetchError"](fetchError);
                                    })
                                ];
                            case 2:
                                response = _state.sent();
                                isRelayError = response.headers.get('x-relay-error');
                                if (isRelayError && isRelayError === 'true') {
                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"](response);
                                }
                                if (!response.ok) {
                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"](response);
                                }
                                responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                                if (!(responseType === 'application/json')) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    response.json()
                                ];
                            case 3:
                                data = _state.sent();
                                return [
                                    3,
                                    11
                                ];
                            case 4:
                                if (!(responseType === 'application/octet-stream' || responseType === 'application/pdf')) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    response.blob()
                                ];
                            case 5:
                                data = _state.sent();
                                return [
                                    3,
                                    11
                                ];
                            case 6:
                                if (!(responseType === 'text/event-stream')) return [
                                    3,
                                    7
                                ];
                                data = response;
                                return [
                                    3,
                                    11
                                ];
                            case 7:
                                if (!(responseType === 'multipart/form-data')) return [
                                    3,
                                    9
                                ];
                                return [
                                    4,
                                    response.formData()
                                ];
                            case 8:
                                data = _state.sent();
                                return [
                                    3,
                                    11
                                ];
                            case 9:
                                return [
                                    4,
                                    response.text()
                                ];
                            case 10:
                                // default to text
                                data = _state.sent();
                                _state.label = 11;
                            case 11:
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null,
                                        response: response
                                    }
                                ];
                            case 12:
                                error = _state.sent();
                                return [
                                    2,
                                    {
                                        data: null,
                                        error: error,
                                        response: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"]) ? error.context : undefined
                                    }
                                ];
                            case 13:
                                // Clear the timeout if it was set
                                if (timeoutId) {
                                    clearTimeout(timeoutId);
                                }
                                return [
                                    7
                                ];
                            case 14:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        }
    ]);
    return FunctionsClient;
} //# sourceMappingURL=FunctionsClient.js.map
();
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/postgrest-js/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgrestBuilder",
    ()=>PostgrestBuilder,
    "PostgrestClient",
    ()=>PostgrestClient,
    "PostgrestError",
    ()=>PostgrestError,
    "PostgrestFilterBuilder",
    ()=>PostgrestFilterBuilder,
    "PostgrestQueryBuilder",
    ()=>PostgrestQueryBuilder,
    "PostgrestTransformBuilder",
    ()=>PostgrestTransformBuilder,
    "default",
    ()=>src_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_wrap_native_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
;
;
;
;
;
;
;
;
;
;
//#region src/PostgrestError.ts
/**
* Error format
*
* {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
*/ var PostgrestError = /*#__PURE__*/ function(Error1) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestError, Error1);
    function PostgrestError(context) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestError);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestError, [
            context.message
        ]);
        _this.name = "PostgrestError";
        _this.details = context.details;
        _this.hint = context.hint;
        _this.code = context.code;
        return _this;
    }
    return PostgrestError;
}((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Error));
//#endregion
//#region src/PostgrestBuilder.ts
var PostgrestBuilder = /*#__PURE__*/ function() {
    "use strict";
    function PostgrestBuilder(builder) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestBuilder);
        var _builder$shouldThrowO, _builder$isMaybeSingl, _builder$urlLengthLim;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_builder$shouldThrowO = builder.shouldThrowOnError) !== null && _builder$shouldThrowO !== void 0 ? _builder$shouldThrowO : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_builder$isMaybeSingl = builder.isMaybeSingle) !== null && _builder$isMaybeSingl !== void 0 ? _builder$isMaybeSingl : false;
        this.urlLengthLimit = (_builder$urlLengthLim = builder.urlLengthLimit) !== null && _builder$urlLengthLim !== void 0 ? _builder$urlLengthLim : 8e3;
        if (builder.fetch) this.fetch = builder.fetch;
        else this.fetch = fetch;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestBuilder, [
        {
            /**
	* If there's an error with the query, throwOnError will reject the promise by
	* throwing the error instead of returning it as part of a successful response.
	*
	* {@link https://github.com/supabase/supabase-js/issues/92}
	*/ key: "throwOnError",
            value: function throwOnError() {
                this.shouldThrowOnError = true;
                return this;
            }
        },
        {
            /**
	* Set an HTTP header for the request.
	*/ key: "setHeader",
            value: function setHeader(name, value) {
                this.headers = new Headers(this.headers);
                this.headers.set(name, value);
                return this;
            }
        },
        {
            key: "then",
            value: function then(onfulfilled, onrejected) {
                var _this = this;
                var _this1 = this;
                if (this.schema === void 0) {} else if ([
                    "GET",
                    "HEAD"
                ].includes(this.method)) this.headers.set("Accept-Profile", this.schema);
                else this.headers.set("Content-Profile", this.schema);
                if (this.method !== "GET" && this.method !== "HEAD") this.headers.set("Content-Type", "application/json");
                var _fetch = this.fetch;
                var res = _fetch(this.url.toString(), {
                    method: this.method,
                    headers: this.headers,
                    body: JSON.stringify(this.body),
                    signal: this.signal
                }).then(function(res$1) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                        var error, data, count, status, statusText, _this$headers$get2, _res$headers$get, _this$headers$get, body, countHeader, contentRange, _error$details, body1;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    error = null;
                                    data = null;
                                    count = null;
                                    status = res$1.status;
                                    statusText = res$1.statusText;
                                    if (!res$1.ok) return [
                                        3,
                                        3
                                    ];
                                    if (!(_this1.method !== "HEAD")) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        res$1.text()
                                    ];
                                case 1:
                                    body = _state.sent();
                                    if (body === "") {} else if (_this1.headers.get("Accept") === "text/csv") data = body;
                                    else if (_this1.headers.get("Accept") && ((_this$headers$get = _this1.headers.get("Accept")) === null || _this$headers$get === void 0 ? void 0 : _this$headers$get.includes("application/vnd.pgrst.plan+text"))) data = body;
                                    else data = JSON.parse(body);
                                    _state.label = 2;
                                case 2:
                                    countHeader = (_this$headers$get2 = _this1.headers.get("Prefer")) === null || _this$headers$get2 === void 0 ? void 0 : _this$headers$get2.match(/count=(exact|planned|estimated)/);
                                    contentRange = (_res$headers$get = res$1.headers.get("content-range")) === null || _res$headers$get === void 0 ? void 0 : _res$headers$get.split("/");
                                    if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
                                    if (_this1.isMaybeSingle && _this1.method === "GET" && Array.isArray(data)) if (data.length > 1) {
                                        error = {
                                            code: "PGRST116",
                                            details: "Results contain ".concat(data.length, " rows, application/vnd.pgrst.object+json requires 1 row"),
                                            hint: null,
                                            message: "JSON object requested, multiple (or no) rows returned"
                                        };
                                        data = null;
                                        count = null;
                                        status = 406;
                                        statusText = "Not Acceptable";
                                    } else if (data.length === 1) data = data[0];
                                    else data = null;
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    return [
                                        4,
                                        res$1.text()
                                    ];
                                case 4:
                                    body1 = _state.sent();
                                    try {
                                        error = JSON.parse(body1);
                                        if (Array.isArray(error) && res$1.status === 404) {
                                            data = [];
                                            error = null;
                                            status = 200;
                                            statusText = "OK";
                                        }
                                    } catch (_unused) {
                                        if (res$1.status === 404 && body1 === "") {
                                            status = 204;
                                            statusText = "No Content";
                                        } else error = {
                                            message: body1
                                        };
                                    }
                                    if (error && _this1.isMaybeSingle && (error === null || error === void 0 || (_error$details = error.details) === null || _error$details === void 0 ? void 0 : _error$details.includes("0 rows"))) {
                                        error = null;
                                        status = 200;
                                        statusText = "OK";
                                    }
                                    if (error && _this1.shouldThrowOnError) throw new PostgrestError(error);
                                    _state.label = 5;
                                case 5:
                                    return [
                                        2,
                                        {
                                            error: error,
                                            data: data,
                                            count: count,
                                            status: status,
                                            statusText: statusText
                                        }
                                    ];
                            }
                        });
                    })();
                });
                if (!this.shouldThrowOnError) res = res.catch(function(fetchError) {
                    var _fetchError$name2;
                    var errorDetails = "";
                    var hint = "";
                    var code = "";
                    var cause = fetchError === null || fetchError === void 0 ? void 0 : fetchError.cause;
                    if (cause) {
                        var _cause$message, _cause$code, _fetchError$name, _cause$name;
                        var causeMessage = (_cause$message = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _cause$message !== void 0 ? _cause$message : "";
                        var causeCode = (_cause$code = cause === null || cause === void 0 ? void 0 : cause.code) !== null && _cause$code !== void 0 ? _cause$code : "";
                        errorDetails = "".concat((_fetchError$name = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name !== void 0 ? _fetchError$name : "FetchError", ": ").concat(fetchError === null || fetchError === void 0 ? void 0 : fetchError.message);
                        errorDetails += "\n\nCaused by: ".concat((_cause$name = cause === null || cause === void 0 ? void 0 : cause.name) !== null && _cause$name !== void 0 ? _cause$name : "Error", ": ").concat(causeMessage);
                        if (causeCode) errorDetails += " (".concat(causeCode, ")");
                        if (cause === null || cause === void 0 ? void 0 : cause.stack) errorDetails += "\n".concat(cause.stack);
                    } else {
                        var _fetchError$stack;
                        errorDetails = (_fetchError$stack = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _fetchError$stack !== void 0 ? _fetchError$stack : "";
                    }
                    var urlLength = _this.url.toString().length;
                    if ((fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) === "AbortError" || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) === "ABORT_ERR") {
                        code = "";
                        hint = "Request was aborted (timeout or manual cancellation)";
                        if (urlLength > _this.urlLengthLimit) hint += ". Note: Your request URL is ".concat(urlLength, " characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.");
                    } else if ((cause === null || cause === void 0 ? void 0 : cause.name) === "HeadersOverflowError" || (cause === null || cause === void 0 ? void 0 : cause.code) === "UND_ERR_HEADERS_OVERFLOW") {
                        code = "";
                        hint = "HTTP headers exceeded server limits (typically 16KB)";
                        if (urlLength > _this.urlLengthLimit) hint += ". Your request URL is ".concat(urlLength, " characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.");
                    }
                    return {
                        error: {
                            message: "".concat((_fetchError$name2 = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name2 !== void 0 ? _fetchError$name2 : "FetchError", ": ").concat(fetchError === null || fetchError === void 0 ? void 0 : fetchError.message),
                            details: errorDetails,
                            hint: hint,
                            code: code
                        },
                        data: null,
                        count: null,
                        status: 0,
                        statusText: ""
                    };
                });
                return res.then(onfulfilled, onrejected);
            }
        },
        {
            /**
	* Override the type of the returned `data`.
	*
	* @typeParam NewResult - The new result type to override with
	* @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
	*/ key: "returns",
            value: function returns() {
                /* istanbul ignore next */ return this;
            }
        },
        {
            /**
	* Override the type of the returned `data` field in the response.
	*
	* @typeParam NewResult - The new type to cast the response data to
	* @typeParam Options - Optional type configuration (defaults to { merge: true })
	* @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
	* @example
	* ```typescript
	* // Merge with existing types (default behavior)
	* const query = supabase
	*   .from('users')
	*   .select()
	*   .overrideTypes<{ custom_field: string }>()
	*
	* // Replace existing types completely
	* const replaceQuery = supabase
	*   .from('users')
	*   .select()
	*   .overrideTypes<{ id: number; name: string }, { merge: false }>()
	* ```
	* @returns A PostgrestBuilder instance with the new type
	*/ key: "overrideTypes",
            value: function overrideTypes() {
                return this;
            }
        }
    ]);
    return PostgrestBuilder;
}();
//#endregion
//#region src/PostgrestTransformBuilder.ts
var PostgrestTransformBuilder = /*#__PURE__*/ function(PostgrestBuilder) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestTransformBuilder, PostgrestBuilder);
    function PostgrestTransformBuilder() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestTransformBuilder);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestTransformBuilder, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestTransformBuilder, [
        {
            /**
	* Perform a SELECT on the query result.
	*
	* By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
	* return modified rows. By calling this method, modified rows are returned in
	* `data`.
	*
	* @param columns - The columns to retrieve, separated by commas
	*/ key: "select",
            value: function select(columns) {
                var quoted = false;
                var cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map(function(c) {
                    if (/\s/.test(c) && !quoted) return "";
                    if (c === "\"") quoted = !quoted;
                    return c;
                }).join("");
                this.url.searchParams.set("select", cleanedColumns);
                this.headers.append("Prefer", "return=representation");
                return this;
            }
        },
        {
            /**
	* Order the query result by `column`.
	*
	* You can call this method multiple times to order by multiple columns.
	*
	* You can order referenced tables, but it only affects the ordering of the
	* parent table if you use `!inner` in the query.
	*
	* @param column - The column to order by
	* @param options - Named parameters
	* @param options.ascending - If `true`, the result will be in ascending order
	* @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
	* `null`s appear last.
	* @param options.referencedTable - Set this to order a referenced table by
	* its columns
	* @param options.foreignTable - Deprecated, use `options.referencedTable`
	* instead
	*/ key: "order",
            value: function order(column) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_ascending = _ref.ascending, ascending = _ref_ascending === void 0 ? true : _ref_ascending, nullsFirst = _ref.nullsFirst, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                var key = referencedTable ? "".concat(referencedTable, ".order") : "order";
                var existingOrder = this.url.searchParams.get(key);
                this.url.searchParams.set(key, "".concat(existingOrder ? "".concat(existingOrder, ",") : "").concat(column, ".").concat(ascending ? "asc" : "desc").concat(nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"));
                return this;
            }
        },
        {
            /**
	* Limit the query result by `count`.
	*
	* @param count - The maximum number of rows to return
	* @param options - Named parameters
	* @param options.referencedTable - Set this to limit rows of referenced
	* tables instead of the parent table
	* @param options.foreignTable - Deprecated, use `options.referencedTable`
	* instead
	*/ key: "limit",
            value: function limit(count) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                var key = typeof referencedTable === "undefined" ? "limit" : "".concat(referencedTable, ".limit");
                this.url.searchParams.set(key, "".concat(count));
                return this;
            }
        },
        {
            /**
	* Limit the query result by starting at an offset `from` and ending at the offset `to`.
	* Only records within this range are returned.
	* This respects the query order and if there is no order clause the range could behave unexpectedly.
	* The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
	* and fourth rows of the query.
	*
	* @param from - The starting index from which to limit the result
	* @param to - The last index to which to limit the result
	* @param options - Named parameters
	* @param options.referencedTable - Set this to limit rows of referenced
	* tables instead of the parent table
	* @param options.foreignTable - Deprecated, use `options.referencedTable`
	* instead
	*/ key: "range",
            value: function range(from, to) {
                var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                var keyOffset = typeof referencedTable === "undefined" ? "offset" : "".concat(referencedTable, ".offset");
                var keyLimit = typeof referencedTable === "undefined" ? "limit" : "".concat(referencedTable, ".limit");
                this.url.searchParams.set(keyOffset, "".concat(from));
                this.url.searchParams.set(keyLimit, "".concat(to - from + 1));
                return this;
            }
        },
        {
            /**
	* Set the AbortSignal for the fetch request.
	*
	* @param signal - The AbortSignal to use for the fetch request
	*/ key: "abortSignal",
            value: function abortSignal(signal) {
                this.signal = signal;
                return this;
            }
        },
        {
            /**
	* Return `data` as a single object instead of an array of objects.
	*
	* Query result must be one row (e.g. using `.limit(1)`), otherwise this
	* returns an error.
	*/ key: "single",
            value: function single() {
                this.headers.set("Accept", "application/vnd.pgrst.object+json");
                return this;
            }
        },
        {
            /**
	* Return `data` as a single object instead of an array of objects.
	*
	* Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
	* this returns an error.
	*/ key: "maybeSingle",
            value: function maybeSingle() {
                if (this.method === "GET") this.headers.set("Accept", "application/json");
                else this.headers.set("Accept", "application/vnd.pgrst.object+json");
                this.isMaybeSingle = true;
                return this;
            }
        },
        {
            /**
	* Return `data` as a string in CSV format.
	*/ key: "csv",
            value: function csv() {
                this.headers.set("Accept", "text/csv");
                return this;
            }
        },
        {
            /**
	* Return `data` as an object in [GeoJSON](https://geojson.org) format.
	*/ key: "geojson",
            value: function geojson() {
                this.headers.set("Accept", "application/geo+json");
                return this;
            }
        },
        {
            /**
	* Return `data` as the EXPLAIN plan for the query.
	*
	* You need to enable the
	* [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
	* setting before using this method.
	*
	* @param options - Named parameters
	*
	* @param options.analyze - If `true`, the query will be executed and the
	* actual run time will be returned
	*
	* @param options.verbose - If `true`, the query identifier will be returned
	* and `data` will include the output columns of the query
	*
	* @param options.settings - If `true`, include information on configuration
	* parameters that affect query planning
	*
	* @param options.buffers - If `true`, include information on buffer usage
	*
	* @param options.wal - If `true`, include information on WAL record generation
	*
	* @param options.format - The format of the output, can be `"text"` (default)
	* or `"json"`
	*/ key: "explain",
            value: function explain() {
                var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_analyze = _ref.analyze, analyze = _ref_analyze === void 0 ? false : _ref_analyze, _ref_verbose = _ref.verbose, verbose = _ref_verbose === void 0 ? false : _ref_verbose, _ref_settings = _ref.settings, settings = _ref_settings === void 0 ? false : _ref_settings, _ref_buffers = _ref.buffers, buffers = _ref_buffers === void 0 ? false : _ref_buffers, _ref_wal = _ref.wal, wal = _ref_wal === void 0 ? false : _ref_wal, _ref_format = _ref.format, format = _ref_format === void 0 ? "text" : _ref_format;
                var _this$headers$get;
                var options = [
                    analyze ? "analyze" : null,
                    verbose ? "verbose" : null,
                    settings ? "settings" : null,
                    buffers ? "buffers" : null,
                    wal ? "wal" : null
                ].filter(Boolean).join("|");
                var forMediatype = (_this$headers$get = this.headers.get("Accept")) !== null && _this$headers$get !== void 0 ? _this$headers$get : "application/json";
                this.headers.set("Accept", "application/vnd.pgrst.plan+".concat(format, '; for="').concat(forMediatype, '"; options=').concat(options, ";"));
                if (format === "json") return this;
                else return this;
            }
        },
        {
            /**
	* Rollback the query.
	*
	* `data` will still be returned, but the query is not committed.
	*/ key: "rollback",
            value: function rollback() {
                this.headers.append("Prefer", "tx=rollback");
                return this;
            }
        },
        {
            /**
	* Override the type of the returned `data`.
	*
	* @typeParam NewResult - The new result type to override with
	* @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
	*/ key: "returns",
            value: function returns() {
                return this;
            }
        },
        {
            /**
	* Set the maximum number of rows that can be affected by the query.
	* Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
	*
	* @param value - The maximum number of rows that can be affected
	*/ key: "maxAffected",
            value: function maxAffected(value) {
                this.headers.append("Prefer", "handling=strict");
                this.headers.append("Prefer", "max-affected=".concat(value));
                return this;
            }
        }
    ]);
    return PostgrestTransformBuilder;
}(PostgrestBuilder);
//#endregion
//#region src/PostgrestFilterBuilder.ts
var PostgrestReservedCharsRegexp = /* @__PURE__ */ new RegExp("[,()]");
var PostgrestFilterBuilder = /*#__PURE__*/ function(PostgrestTransformBuilder) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestFilterBuilder, PostgrestTransformBuilder);
    function PostgrestFilterBuilder() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestFilterBuilder);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestFilterBuilder, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestFilterBuilder, [
        {
            /**
	* Match only rows where `column` is equal to `value`.
	*
	* To check if the value of `column` is NULL, you should use `.is()` instead.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "eq",
            value: function eq(column, value) {
                this.url.searchParams.append(column, "eq.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` is not equal to `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "neq",
            value: function neq(column, value) {
                this.url.searchParams.append(column, "neq.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` is greater than `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "gt",
            value: function gt(column, value) {
                this.url.searchParams.append(column, "gt.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` is greater than or equal to `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "gte",
            value: function gte(column, value) {
                this.url.searchParams.append(column, "gte.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` is less than `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "lt",
            value: function lt(column, value) {
                this.url.searchParams.append(column, "lt.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` is less than or equal to `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "lte",
            value: function lte(column, value) {
                this.url.searchParams.append(column, "lte.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches `pattern` case-sensitively.
	*
	* @param column - The column to filter on
	* @param pattern - The pattern to match with
	*/ key: "like",
            value: function like(column, pattern) {
                this.url.searchParams.append(column, "like.".concat(pattern));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches all of `patterns` case-sensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ key: "likeAllOf",
            value: function likeAllOf(column, patterns) {
                this.url.searchParams.append(column, "like(all).{".concat(patterns.join(","), "}"));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches any of `patterns` case-sensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ key: "likeAnyOf",
            value: function likeAnyOf(column, patterns) {
                this.url.searchParams.append(column, "like(any).{".concat(patterns.join(","), "}"));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches `pattern` case-insensitively.
	*
	* @param column - The column to filter on
	* @param pattern - The pattern to match with
	*/ key: "ilike",
            value: function ilike(column, pattern) {
                this.url.searchParams.append(column, "ilike.".concat(pattern));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches all of `patterns` case-insensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ key: "ilikeAllOf",
            value: function ilikeAllOf(column, patterns) {
                this.url.searchParams.append(column, "ilike(all).{".concat(patterns.join(","), "}"));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches any of `patterns` case-insensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ key: "ilikeAnyOf",
            value: function ilikeAnyOf(column, patterns) {
                this.url.searchParams.append(column, "ilike(any).{".concat(patterns.join(","), "}"));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches the PostgreSQL regex `pattern`
	* case-sensitively (using the `~` operator).
	*
	* @param column - The column to filter on
	* @param pattern - The PostgreSQL regular expression pattern to match with
	*/ key: "regexMatch",
            value: function regexMatch(column, pattern) {
                this.url.searchParams.append(column, "match.".concat(pattern));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` matches the PostgreSQL regex `pattern`
	* case-insensitively (using the `~*` operator).
	*
	* @param column - The column to filter on
	* @param pattern - The PostgreSQL regular expression pattern to match with
	*/ key: "regexIMatch",
            value: function regexIMatch(column, pattern) {
                this.url.searchParams.append(column, "imatch.".concat(pattern));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` IS `value`.
	*
	* For non-boolean columns, this is only relevant for checking if the value of
	* `column` is NULL by setting `value` to `null`.
	*
	* For boolean columns, you can also set `value` to `true` or `false` and it
	* will behave the same way as `.eq()`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "is",
            value: function is(column, value) {
                this.url.searchParams.append(column, "is.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` IS DISTINCT FROM `value`.
	*
	* Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
	* are considered equal (not distinct), and comparing `NULL` with any non-NULL
	* value returns true (distinct).
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ key: "isDistinct",
            value: function isDistinct(column, value) {
                this.url.searchParams.append(column, "isdistinct.".concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` is included in the `values` array.
	*
	* @param column - The column to filter on
	* @param values - The values array to filter with
	*/ key: "in",
            value: function _in(column, values) {
                var cleanedValues = Array.from(new Set(values)).map(function(s) {
                    if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return '"'.concat(s, '"');
                    else return "".concat(s);
                }).join(",");
                this.url.searchParams.append(column, "in.(".concat(cleanedValues, ")"));
                return this;
            }
        },
        {
            /**
	* Match only rows where `column` is NOT included in the `values` array.
	*
	* @param column - The column to filter on
	* @param values - The values array to filter with
	*/ key: "notIn",
            value: function notIn(column, values) {
                var cleanedValues = Array.from(new Set(values)).map(function(s) {
                    if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return '"'.concat(s, '"');
                    else return "".concat(s);
                }).join(",");
                this.url.searchParams.append(column, "not.in.(".concat(cleanedValues, ")"));
                return this;
            }
        },
        {
            /**
	* Only relevant for jsonb, array, and range columns. Match only rows where
	* `column` contains every element appearing in `value`.
	*
	* @param column - The jsonb, array, or range column to filter on
	* @param value - The jsonb, array, or range value to filter with
	*/ key: "contains",
            value: function contains(column, value) {
                if (typeof value === "string") this.url.searchParams.append(column, "cs.".concat(value));
                else if (Array.isArray(value)) this.url.searchParams.append(column, "cs.{".concat(value.join(","), "}"));
                else this.url.searchParams.append(column, "cs.".concat(JSON.stringify(value)));
                return this;
            }
        },
        {
            /**
	* Only relevant for jsonb, array, and range columns. Match only rows where
	* every element appearing in `column` is contained by `value`.
	*
	* @param column - The jsonb, array, or range column to filter on
	* @param value - The jsonb, array, or range value to filter with
	*/ key: "containedBy",
            value: function containedBy(column, value) {
                if (typeof value === "string") this.url.searchParams.append(column, "cd.".concat(value));
                else if (Array.isArray(value)) this.url.searchParams.append(column, "cd.{".concat(value.join(","), "}"));
                else this.url.searchParams.append(column, "cd.".concat(JSON.stringify(value)));
                return this;
            }
        },
        {
            /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is greater than any element in `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ key: "rangeGt",
            value: function rangeGt(column, range) {
                this.url.searchParams.append(column, "sr.".concat(range));
                return this;
            }
        },
        {
            /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is either contained in `range` or greater than any element in
	* `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ key: "rangeGte",
            value: function rangeGte(column, range) {
                this.url.searchParams.append(column, "nxl.".concat(range));
                return this;
            }
        },
        {
            /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is less than any element in `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ key: "rangeLt",
            value: function rangeLt(column, range) {
                this.url.searchParams.append(column, "sl.".concat(range));
                return this;
            }
        },
        {
            /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is either contained in `range` or less than any element in
	* `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ key: "rangeLte",
            value: function rangeLte(column, range) {
                this.url.searchParams.append(column, "nxr.".concat(range));
                return this;
            }
        },
        {
            /**
	* Only relevant for range columns. Match only rows where `column` is
	* mutually exclusive to `range` and there can be no element between the two
	* ranges.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ key: "rangeAdjacent",
            value: function rangeAdjacent(column, range) {
                this.url.searchParams.append(column, "adj.".concat(range));
                return this;
            }
        },
        {
            /**
	* Only relevant for array and range columns. Match only rows where
	* `column` and `value` have an element in common.
	*
	* @param column - The array or range column to filter on
	* @param value - The array or range value to filter with
	*/ key: "overlaps",
            value: function overlaps(column, value) {
                if (typeof value === "string") this.url.searchParams.append(column, "ov.".concat(value));
                else this.url.searchParams.append(column, "ov.{".concat(value.join(","), "}"));
                return this;
            }
        },
        {
            /**
	* Only relevant for text and tsvector columns. Match only rows where
	* `column` matches the query string in `query`.
	*
	* @param column - The text or tsvector column to filter on
	* @param query - The query text to match with
	* @param options - Named parameters
	* @param options.config - The text search configuration to use
	* @param options.type - Change how the `query` text is interpreted
	*/ key: "textSearch",
            value: function textSearch(column, query) {
                var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, config = _ref.config, type = _ref.type;
                var typePart = "";
                if (type === "plain") typePart = "pl";
                else if (type === "phrase") typePart = "ph";
                else if (type === "websearch") typePart = "w";
                var configPart = config === void 0 ? "" : "(".concat(config, ")");
                this.url.searchParams.append(column, "".concat(typePart, "fts").concat(configPart, ".").concat(query));
                return this;
            }
        },
        {
            /**
	* Match only rows where each column in `query` keys is equal to its
	* associated value. Shorthand for multiple `.eq()`s.
	*
	* @param query - The object to filter with, with column names as keys mapped
	* to their filter values
	*/ key: "match",
            value: function match(query) {
                var _this = this;
                Object.entries(query).forEach(function(param) {
                    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), column = _param[0], value = _param[1];
                    _this.url.searchParams.append(column, "eq.".concat(value));
                });
                return this;
            }
        },
        {
            /**
	* Match only rows which doesn't satisfy the filter.
	*
	* Unlike most filters, `opearator` and `value` are used as-is and need to
	* follow [PostgREST
	* syntax](https://postgrest.org/en/stable/api.html#operators). You also need
	* to make sure they are properly sanitized.
	*
	* @param column - The column to filter on
	* @param operator - The operator to be negated to filter with, following
	* PostgREST syntax
	* @param value - The value to filter with, following PostgREST syntax
	*/ key: "not",
            value: function not(column, operator, value) {
                this.url.searchParams.append(column, "not.".concat(operator, ".").concat(value));
                return this;
            }
        },
        {
            /**
	* Match only rows which satisfy at least one of the filters.
	*
	* Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
	* syntax](https://postgrest.org/en/stable/api.html#operators). You also need
	* to make sure it's properly sanitized.
	*
	* It's currently not possible to do an `.or()` filter across multiple tables.
	*
	* @param filters - The filters to use, following PostgREST syntax
	* @param options - Named parameters
	* @param options.referencedTable - Set this to filter on referenced tables
	* instead of the parent table
	* @param options.foreignTable - Deprecated, use `referencedTable` instead
	*/ key: "or",
            value: function or(filters) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                var key = referencedTable ? "".concat(referencedTable, ".or") : "or";
                this.url.searchParams.append(key, "(".concat(filters, ")"));
                return this;
            }
        },
        {
            /**
	* Match only rows which satisfy the filter. This is an escape hatch - you
	* should use the specific filter methods wherever possible.
	*
	* Unlike most filters, `opearator` and `value` are used as-is and need to
	* follow [PostgREST
	* syntax](https://postgrest.org/en/stable/api.html#operators). You also need
	* to make sure they are properly sanitized.
	*
	* @param column - The column to filter on
	* @param operator - The operator to filter with, following PostgREST syntax
	* @param value - The value to filter with, following PostgREST syntax
	*/ key: "filter",
            value: function filter(column, operator, value) {
                this.url.searchParams.append(column, "".concat(operator, ".").concat(value));
                return this;
            }
        }
    ]);
    return PostgrestFilterBuilder;
}(PostgrestTransformBuilder);
//#endregion
//#region src/PostgrestQueryBuilder.ts
var PostgrestQueryBuilder = /*#__PURE__*/ function() {
    "use strict";
    function PostgrestQueryBuilder(url, param) {
        var _param_headers = param.headers, headers = _param_headers === void 0 ? {} : _param_headers, schema = param.schema, fetch$1 = param.fetch, _param_urlLengthLimit = param.urlLengthLimit, urlLengthLimit = _param_urlLengthLimit === void 0 ? 8e3 : _param_urlLengthLimit;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestQueryBuilder);
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch$1;
        this.urlLengthLimit = urlLengthLimit;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestQueryBuilder, [
        {
            /**
	* Clone URL and headers to prevent shared state between operations.
	*/ key: "cloneRequestState",
            value: function cloneRequestState() {
                return {
                    url: new URL(this.url.toString()),
                    headers: new Headers(this.headers)
                };
            }
        },
        {
            /**
	* Perform a SELECT query on the table or view.
	*
	* @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
	*
	* @param options - Named parameters
	*
	* @param options.head - When set to `true`, `data` will not be returned.
	* Useful if you only need the count.
	*
	* @param options.count - Count algorithm to use to count rows in the table or view.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @remarks
	* When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
	* that match your filters, not the number of rows in the current page. Use this to build pagination UI.
	*/ key: "select",
            value: function select(columns, options) {
                var _ref = options !== null && options !== void 0 ? options : {}, _ref_head = _ref.head, head = _ref_head === void 0 ? false : _ref_head, count = _ref.count;
                var method = head ? "HEAD" : "GET";
                var quoted = false;
                var cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map(function(c) {
                    if (/\s/.test(c) && !quoted) return "";
                    if (c === "\"") quoted = !quoted;
                    return c;
                }).join("");
                var _this_cloneRequestState = this.cloneRequestState(), url = _this_cloneRequestState.url, headers = _this_cloneRequestState.headers;
                url.searchParams.set("select", cleanedColumns);
                if (count) headers.append("Prefer", "count=".concat(count));
                return new PostgrestFilterBuilder({
                    method: method,
                    url: url,
                    headers: headers,
                    schema: this.schema,
                    fetch: this.fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        },
        {
            /**
	* Perform an INSERT into the table or view.
	*
	* By default, inserted rows are not returned. To return it, chain the call
	* with `.select()`.
	*
	* @param values - The values to insert. Pass an object to insert a single row
	* or an array to insert multiple rows.
	*
	* @param options - Named parameters
	*
	* @param options.count - Count algorithm to use to count inserted rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @param options.defaultToNull - Make missing fields default to `null`.
	* Otherwise, use the default value for the column. Only applies for bulk
	* inserts.
	*/ key: "insert",
            value: function insert(values) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, count = _ref.count, _ref_defaultToNull = _ref.defaultToNull, defaultToNull = _ref_defaultToNull === void 0 ? true : _ref_defaultToNull;
                var _this$fetch;
                var method = "POST";
                var _this_cloneRequestState = this.cloneRequestState(), url = _this_cloneRequestState.url, headers = _this_cloneRequestState.headers;
                if (count) headers.append("Prefer", "count=".concat(count));
                if (!defaultToNull) headers.append("Prefer", "missing=default");
                if (Array.isArray(values)) {
                    var columns = values.reduce(function(acc, x) {
                        return acc.concat(Object.keys(x));
                    }, []);
                    if (columns.length > 0) {
                        var uniqueColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Set(columns)).map(function(column) {
                            return '"'.concat(column, '"');
                        });
                        url.searchParams.set("columns", uniqueColumns.join(","));
                    }
                }
                return new PostgrestFilterBuilder({
                    method: method,
                    url: url,
                    headers: headers,
                    schema: this.schema,
                    body: values,
                    fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        },
        {
            /**
	* Perform an UPSERT on the table or view. Depending on the column(s) passed
	* to `onConflict`, `.upsert()` allows you to perform the equivalent of
	* `.insert()` if a row with the corresponding `onConflict` columns doesn't
	* exist, or if it does exist, perform an alternative action depending on
	* `ignoreDuplicates`.
	*
	* By default, upserted rows are not returned. To return it, chain the call
	* with `.select()`.
	*
	* @param values - The values to upsert with. Pass an object to upsert a
	* single row or an array to upsert multiple rows.
	*
	* @param options - Named parameters
	*
	* @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
	* duplicate rows are determined. Two rows are duplicates if all the
	* `onConflict` columns are equal.
	*
	* @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
	* `false`, duplicate rows are merged with existing rows.
	*
	* @param options.count - Count algorithm to use to count upserted rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @param options.defaultToNull - Make missing fields default to `null`.
	* Otherwise, use the default value for the column. This only applies when
	* inserting new rows, not when merging with existing rows under
	* `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
	*
	* @example Upsert a single row using a unique key
	* ```ts
	* // Upserting a single row, overwriting based on the 'username' unique column
	* const { data, error } = await supabase
	*   .from('users')
	*   .upsert({ username: 'supabot' }, { onConflict: 'username' })
	*
	* // Example response:
	* // {
	* //   data: [
	* //     { id: 4, message: 'bar', username: 'supabot' }
	* //   ],
	* //   error: null
	* // }
	* ```
	*
	* @example Upsert with conflict resolution and exact row counting
	* ```ts
	* // Upserting and returning exact count
	* const { data, error, count } = await supabase
	*   .from('users')
	*   .upsert(
	*     {
	*       id: 3,
	*       message: 'foo',
	*       username: 'supabot'
	*     },
	*     {
	*       onConflict: 'username',
	*       count: 'exact'
	*     }
	*   )
	*
	* // Example response:
	* // {
	* //   data: [
	* //     {
	* //       id: 42,
	* //       handle: "saoirse",
	* //       display_name: "Saoirse"
	* //     }
	* //   ],
	* //   count: 1,
	* //   error: null
	* // }
	* ```
	*/ key: "upsert",
            value: function upsert(values) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, onConflict = _ref.onConflict, _ref_ignoreDuplicates = _ref.ignoreDuplicates, ignoreDuplicates = _ref_ignoreDuplicates === void 0 ? false : _ref_ignoreDuplicates, count = _ref.count, _ref_defaultToNull = _ref.defaultToNull, defaultToNull = _ref_defaultToNull === void 0 ? true : _ref_defaultToNull;
                var _this$fetch2;
                var method = "POST";
                var _this_cloneRequestState = this.cloneRequestState(), url = _this_cloneRequestState.url, headers = _this_cloneRequestState.headers;
                headers.append("Prefer", "resolution=".concat(ignoreDuplicates ? "ignore" : "merge", "-duplicates"));
                if (onConflict !== void 0) url.searchParams.set("on_conflict", onConflict);
                if (count) headers.append("Prefer", "count=".concat(count));
                if (!defaultToNull) headers.append("Prefer", "missing=default");
                if (Array.isArray(values)) {
                    var columns = values.reduce(function(acc, x) {
                        return acc.concat(Object.keys(x));
                    }, []);
                    if (columns.length > 0) {
                        var uniqueColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Set(columns)).map(function(column) {
                            return '"'.concat(column, '"');
                        });
                        url.searchParams.set("columns", uniqueColumns.join(","));
                    }
                }
                return new PostgrestFilterBuilder({
                    method: method,
                    url: url,
                    headers: headers,
                    schema: this.schema,
                    body: values,
                    fetch: (_this$fetch2 = this.fetch) !== null && _this$fetch2 !== void 0 ? _this$fetch2 : fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        },
        {
            /**
	* Perform an UPDATE on the table or view.
	*
	* By default, updated rows are not returned. To return it, chain the call
	* with `.select()` after filters.
	*
	* @param values - The values to update with
	*
	* @param options - Named parameters
	*
	* @param options.count - Count algorithm to use to count updated rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*/ key: "update",
            value: function update(values) {
                var count = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).count;
                var _this$fetch3;
                var method = "PATCH";
                var _this_cloneRequestState = this.cloneRequestState(), url = _this_cloneRequestState.url, headers = _this_cloneRequestState.headers;
                if (count) headers.append("Prefer", "count=".concat(count));
                return new PostgrestFilterBuilder({
                    method: method,
                    url: url,
                    headers: headers,
                    schema: this.schema,
                    body: values,
                    fetch: (_this$fetch3 = this.fetch) !== null && _this$fetch3 !== void 0 ? _this$fetch3 : fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        },
        {
            /**
	* Perform a DELETE on the table or view.
	*
	* By default, deleted rows are not returned. To return it, chain the call
	* with `.select()` after filters.
	*
	* @param options - Named parameters
	*
	* @param options.count - Count algorithm to use to count deleted rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*/ key: "delete",
            value: function _delete() {
                var count = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).count;
                var _this$fetch4;
                var method = "DELETE";
                var _this_cloneRequestState = this.cloneRequestState(), url = _this_cloneRequestState.url, headers = _this_cloneRequestState.headers;
                if (count) headers.append("Prefer", "count=".concat(count));
                return new PostgrestFilterBuilder({
                    method: method,
                    url: url,
                    headers: headers,
                    schema: this.schema,
                    fetch: (_this$fetch4 = this.fetch) !== null && _this$fetch4 !== void 0 ? _this$fetch4 : fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        }
    ]);
    return PostgrestQueryBuilder;
}();
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/typeof.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(o$1) {
        return typeof o$1;
    } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/objectSpread2.js
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
            return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
            _defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
            Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
    }
    return e;
}
//#endregion
//#region src/PostgrestClient.ts
/**
* PostgREST client.
*
* @typeParam Database - Types for the schema from the [type
* generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
*
* @typeParam SchemaName - Postgres schema to switch to. Must be a string
* literal, the same one passed to the constructor. If the schema is not
* `"public"`, this must be supplied manually.
*/ var PostgrestClient = /*#__PURE__*/ function() {
    "use strict";
    function PostgrestClient(url) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_headers = _ref.headers, headers = _ref_headers === void 0 ? {} : _ref_headers, schema = _ref.schema, fetch$1 = _ref.fetch, timeout = _ref.timeout, _ref_urlLengthLimit = _ref.urlLengthLimit, urlLengthLimit = _ref_urlLengthLimit === void 0 ? 8e3 : _ref_urlLengthLimit;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, PostgrestClient);
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.urlLengthLimit = urlLengthLimit;
        var originalFetch = fetch$1 !== null && fetch$1 !== void 0 ? fetch$1 : globalThis.fetch;
        if (timeout !== void 0 && timeout > 0) this.fetch = function(input, init) {
            var controller = new AbortController();
            var timeoutId = setTimeout(function() {
                return controller.abort();
            }, timeout);
            var existingSignal = init === null || init === void 0 ? void 0 : init.signal;
            if (existingSignal) {
                if (existingSignal.aborted) {
                    clearTimeout(timeoutId);
                    return originalFetch(input, init);
                }
                var abortHandler = function() {
                    clearTimeout(timeoutId);
                    controller.abort();
                };
                existingSignal.addEventListener("abort", abortHandler, {
                    once: true
                });
                return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, {
                    signal: controller.signal
                })).finally(function() {
                    clearTimeout(timeoutId);
                    existingSignal.removeEventListener("abort", abortHandler);
                });
            }
            return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, {
                signal: controller.signal
            })).finally(function() {
                return clearTimeout(timeoutId);
            });
        };
        else this.fetch = originalFetch;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(PostgrestClient, [
        {
            /**
	* Perform a query on a table or a view.
	*
	* @param relation - The table or view name to query
	*/ key: "from",
            value: function from(relation) {
                if (!relation || typeof relation !== "string" || relation.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
                return new PostgrestQueryBuilder(new URL("".concat(this.url, "/").concat(relation)), {
                    headers: new Headers(this.headers),
                    schema: this.schemaName,
                    fetch: this.fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        },
        {
            /**
	* Select a schema to query or perform an function (rpc) call.
	*
	* The schema needs to be on the list of exposed schemas inside Supabase.
	*
	* @param schema - The schema to query
	*/ key: "schema",
            value: function schema(_schema) {
                return new PostgrestClient(this.url, {
                    headers: this.headers,
                    schema: _schema,
                    fetch: this.fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        },
        {
            /**
	* Perform a function call.
	*
	* @param fn - The function name to call
	* @param args - The arguments to pass to the function call
	* @param options - Named parameters
	* @param options.head - When set to `true`, `data` will not be returned.
	* Useful if you only need the count.
	* @param options.get - When set to `true`, the function will be called with
	* read-only access mode.
	* @param options.count - Count algorithm to use to count rows returned by the
	* function. Only applicable for [set-returning
	* functions](https://www.postgresql.org/docs/current/functions-srf.html).
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @example
	* ```ts
	* // For cross-schema functions where type inference fails, use overrideTypes:
	* const { data } = await supabase
	*   .schema('schema_b')
	*   .rpc('function_a', {})
	*   .overrideTypes<{ id: string; user_id: string }[]>()
	* ```
	*/ key: "rpc",
            value: function rpc(fn) {
                var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref_head = _ref.head, head = _ref_head === void 0 ? false : _ref_head, _ref_get = _ref.get, get = _ref_get === void 0 ? false : _ref_get, count = _ref.count;
                var _this$fetch;
                var method;
                var url = new URL("".concat(this.url, "/rpc/").concat(fn));
                var body;
                var _isObject = function(v) {
                    return v !== null && (typeof v === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(v)) === "object" && (!Array.isArray(v) || v.some(_isObject));
                };
                var _hasObjectArg = head && Object.values(args).some(_isObject);
                if (_hasObjectArg) {
                    method = "POST";
                    body = args;
                } else if (head || get) {
                    method = head ? "HEAD" : "GET";
                    Object.entries(args).filter(function(param) {
                        var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), _ = _param[0], value = _param[1];
                        return value !== void 0;
                    }).map(function(param) {
                        var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), name = _param[0], value = _param[1];
                        return [
                            name,
                            Array.isArray(value) ? "{".concat(value.join(","), "}") : "".concat(value)
                        ];
                    }).forEach(function(param) {
                        var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), name = _param[0], value = _param[1];
                        url.searchParams.append(name, value);
                    });
                } else {
                    method = "POST";
                    body = args;
                }
                var headers = new Headers(this.headers);
                if (_hasObjectArg) headers.set("Prefer", count ? "count=".concat(count, ",return=minimal") : "return=minimal");
                else if (count) headers.set("Prefer", "count=".concat(count));
                return new PostgrestFilterBuilder({
                    method: method,
                    url: url,
                    headers: headers,
                    schema: this.schemaName,
                    body: body,
                    fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
                    urlLengthLimit: this.urlLengthLimit
                });
            }
        }
    ]);
    return PostgrestClient;
}();
//#endregion
//#region src/index.ts
var src_default = {
    PostgrestClient: PostgrestClient,
    PostgrestQueryBuilder: PostgrestQueryBuilder,
    PostgrestFilterBuilder: PostgrestFilterBuilder,
    PostgrestTransformBuilder: PostgrestTransformBuilder,
    PostgrestBuilder: PostgrestBuilder,
    PostgrestError: PostgrestError
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Developer/brasena/Brasena/node_modules/iceberg-js/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IcebergError",
    ()=>IcebergError,
    "IcebergRestCatalog",
    ()=>IcebergRestCatalog,
    "getCurrentSchema",
    ()=>getCurrentSchema,
    "isDecimalType",
    ()=>isDecimalType,
    "isFixedType",
    ()=>isFixedType,
    "parseDecimalType",
    ()=>parseDecimalType,
    "parseFixedType",
    ()=>parseFixedType,
    "typesEqual",
    ()=>typesEqual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_wrap_native_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
;
;
;
;
;
;
;
;
;
;
;
// src/errors/IcebergError.ts
var IcebergError = /*#__PURE__*/ function(Error1) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(IcebergError, Error1);
    function IcebergError(message, opts) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, IcebergError);
        var _this;
        var _opts_icebergType;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, IcebergError, [
            message
        ]);
        _this.name = "IcebergError";
        _this.status = opts.status;
        _this.icebergType = opts.icebergType;
        _this.icebergCode = opts.icebergCode;
        _this.details = opts.details;
        _this.isCommitStateUnknown = opts.icebergType === "CommitStateUnknownException" || [
            500,
            502,
            504
        ].includes(opts.status) && ((_opts_icebergType = opts.icebergType) === null || _opts_icebergType === void 0 ? void 0 : _opts_icebergType.includes("CommitState")) === true;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(IcebergError, [
        {
            /**
   * Returns true if the error is a 404 Not Found error.
   */ key: "isNotFound",
            value: function isNotFound() {
                return this.status === 404;
            }
        },
        {
            /**
   * Returns true if the error is a 409 Conflict error.
   */ key: "isConflict",
            value: function isConflict() {
                return this.status === 409;
            }
        },
        {
            /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */ key: "isAuthenticationTimeout",
            value: function isAuthenticationTimeout() {
                return this.status === 419;
            }
        }
    ]);
    return IcebergError;
}((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_wrap_native_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Error));
// src/utils/url.ts
function buildUrl(baseUrl, path, query) {
    var url = new URL(path, baseUrl);
    if (query) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(query)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), key = _step_value[0], value = _step_value[1];
                if (value !== void 0) {
                    url.searchParams.set(key, value);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return url.toString();
}
// src/http/createFetchClient.ts
function buildAuthHeaders(auth) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!auth || auth.type === "none") {
                        return [
                            2,
                            {}
                        ];
                    }
                    if (auth.type === "bearer") {
                        return [
                            2,
                            {
                                Authorization: "Bearer ".concat(auth.token)
                            }
                        ];
                    }
                    if (auth.type === "header") {
                        return [
                            2,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, auth.name, auth.value)
                        ];
                    }
                    if (!(auth.type === "custom")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        auth.getHeaders()
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
                case 2:
                    return [
                        2,
                        {}
                    ];
            }
        });
    })();
}
function createFetchClient(options) {
    var _options_fetchImpl;
    var fetchFn = (_options_fetchImpl = options.fetchImpl) !== null && _options_fetchImpl !== void 0 ? _options_fetchImpl : globalThis.fetch;
    return {
        request: function request(_0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function(param) {
                var method, path, query, body, headers, url, authHeaders, res, text, isJson, data, _ref, errBody, errorDetail;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            method = param.method, path = param.path, query = param.query, body = param.body, headers = param.headers;
                            url = buildUrl(options.baseUrl, path, query);
                            return [
                                4,
                                buildAuthHeaders(options.auth)
                            ];
                        case 1:
                            authHeaders = _state.sent();
                            return [
                                4,
                                fetchFn(url, {
                                    method: method,
                                    headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, body ? {
                                        "Content-Type": "application/json"
                                    } : {}, authHeaders, headers),
                                    body: body ? JSON.stringify(body) : void 0
                                })
                            ];
                        case 2:
                            res = _state.sent();
                            return [
                                4,
                                res.text()
                            ];
                        case 3:
                            text = _state.sent();
                            isJson = (res.headers.get("content-type") || "").includes("application/json");
                            data = isJson && text ? JSON.parse(text) : text;
                            if (!res.ok) {
                                ;
                                errBody = isJson ? data : void 0;
                                errorDetail = errBody === null || errBody === void 0 ? void 0 : errBody.error;
                                throw new IcebergError((_ref = errorDetail === null || errorDetail === void 0 ? void 0 : errorDetail.message) !== null && _ref !== void 0 ? _ref : "Request failed with status ".concat(res.status), {
                                    status: res.status,
                                    icebergType: errorDetail === null || errorDetail === void 0 ? void 0 : errorDetail.type,
                                    icebergCode: errorDetail === null || errorDetail === void 0 ? void 0 : errorDetail.code,
                                    details: errBody
                                });
                            }
                            return [
                                2,
                                {
                                    status: res.status,
                                    headers: res.headers,
                                    data: data
                                }
                            ];
                    }
                });
            }).apply(this, arguments);
        }
    };
}
// src/catalog/namespaces.ts
function namespaceToPath(namespace) {
    return namespace.join("");
}
var NamespaceOperations = /*#__PURE__*/ function() {
    "use strict";
    function NamespaceOperations(client) {
        var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, NamespaceOperations);
        this.client = client;
        this.prefix = prefix;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NamespaceOperations, [
        {
            key: "listNamespaces",
            value: function listNamespaces(parent) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var query, response;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                query = parent ? {
                                    parent: namespaceToPath(parent.namespace)
                                } : void 0;
                                return [
                                    4,
                                    this.client.request({
                                        method: "GET",
                                        path: "".concat(this.prefix, "/namespaces"),
                                        query: query
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    response.data.namespaces.map(function(ns) {
                                        return {
                                            namespace: ns
                                        };
                                    })
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "createNamespace",
            value: function createNamespace(id, metadata) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var request, response;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                request = {
                                    namespace: id.namespace,
                                    properties: metadata === null || metadata === void 0 ? void 0 : metadata.properties
                                };
                                return [
                                    4,
                                    this.client.request({
                                        method: "POST",
                                        path: "".concat(this.prefix, "/namespaces"),
                                        body: request
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    response.data
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "dropNamespace",
            value: function dropNamespace(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.client.request({
                                        method: "DELETE",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath(id.namespace))
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "loadNamespaceMetadata",
            value: function loadNamespaceMetadata(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var response;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.client.request({
                                        method: "GET",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath(id.namespace))
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    {
                                        properties: response.data.properties
                                    }
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "namespaceExists",
            value: function namespaceExists(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var error;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    this.client.request({
                                        method: "HEAD",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath(id.namespace))
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    true
                                ];
                            case 2:
                                error = _state.sent();
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, IcebergError) && error.status === 404) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "createNamespaceIfNotExists",
            value: function createNamespaceIfNotExists(id, metadata) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var error;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    this.createNamespace(id, metadata)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, IcebergError) && error.status === 409) {
                                    return [
                                        2
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return NamespaceOperations;
}();
// src/catalog/tables.ts
function namespaceToPath2(namespace) {
    return namespace.join("");
}
var TableOperations = /*#__PURE__*/ function() {
    "use strict";
    function TableOperations(client) {
        var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", accessDelegation = arguments.length > 2 ? arguments[2] : void 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, TableOperations);
        this.client = client;
        this.prefix = prefix;
        this.accessDelegation = accessDelegation;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(TableOperations, [
        {
            key: "listTables",
            value: function listTables(namespace) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var response;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.client.request({
                                        method: "GET",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath2(namespace.namespace), "/tables")
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    response.data.identifiers
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "createTable",
            value: function createTable(namespace, request) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var headers, response;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                headers = {};
                                if (this.accessDelegation) {
                                    headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
                                }
                                return [
                                    4,
                                    this.client.request({
                                        method: "POST",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath2(namespace.namespace), "/tables"),
                                        body: request,
                                        headers: headers
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    response.data.metadata
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "updateTable",
            value: function updateTable(id, request) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var response;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.client.request({
                                        method: "POST",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath2(id.namespace), "/tables/").concat(id.name),
                                        body: request
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    {
                                        "metadata-location": response.data["metadata-location"],
                                        metadata: response.data.metadata
                                    }
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "dropTable",
            value: function dropTable(id, options) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _ref;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.client.request({
                                        method: "DELETE",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath2(id.namespace), "/tables/").concat(id.name),
                                        query: {
                                            purgeRequested: String((_ref = options === null || options === void 0 ? void 0 : options.purge) !== null && _ref !== void 0 ? _ref : false)
                                        }
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "loadTable",
            value: function loadTable(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var headers, response;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                headers = {};
                                if (this.accessDelegation) {
                                    headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
                                }
                                return [
                                    4,
                                    this.client.request({
                                        method: "GET",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath2(id.namespace), "/tables/").concat(id.name),
                                        headers: headers
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    response.data.metadata
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "tableExists",
            value: function tableExists(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var headers, error;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                headers = {};
                                if (this.accessDelegation) {
                                    headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
                                }
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    this.client.request({
                                        method: "HEAD",
                                        path: "".concat(this.prefix, "/namespaces/").concat(namespaceToPath2(id.namespace), "/tables/").concat(id.name),
                                        headers: headers
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2,
                                    true
                                ];
                            case 3:
                                error = _state.sent();
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, IcebergError) && error.status === 404) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "createTableIfNotExists",
            value: function createTableIfNotExists(namespace, request) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var error;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    this.createTable(namespace, request)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, IcebergError) && error.status === 409)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    this.loadTable({
                                        namespace: namespace.namespace,
                                        name: request.name
                                    })
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 4:
                                throw error;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return TableOperations;
}();
// src/catalog/IcebergRestCatalog.ts
var IcebergRestCatalog = /*#__PURE__*/ function() {
    "use strict";
    function IcebergRestCatalog(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, IcebergRestCatalog);
        var _options_accessDelegation;
        var prefix = "v1";
        if (options.catalogName) {
            prefix += "/".concat(options.catalogName);
        }
        var baseUrl = options.baseUrl.endsWith("/") ? options.baseUrl : "".concat(options.baseUrl, "/");
        this.client = createFetchClient({
            baseUrl: baseUrl,
            auth: options.auth,
            fetchImpl: options.fetch
        });
        this.accessDelegation = (_options_accessDelegation = options.accessDelegation) === null || _options_accessDelegation === void 0 ? void 0 : _options_accessDelegation.join(",");
        this.namespaceOps = new NamespaceOperations(this.client, prefix);
        this.tableOps = new TableOperations(this.client, prefix, this.accessDelegation);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(IcebergRestCatalog, [
        {
            key: "listNamespaces",
            value: /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */ function listNamespaces(parent) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.namespaceOps.listNamespaces(parent)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "createNamespace",
            value: /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */ function createNamespace(id, metadata) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.namespaceOps.createNamespace(id, metadata)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "dropNamespace",
            value: /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */ function dropNamespace(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.namespaceOps.dropNamespace(id)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "loadNamespaceMetadata",
            value: /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */ function loadNamespaceMetadata(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.namespaceOps.loadNamespaceMetadata(id)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "listTables",
            value: /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */ function listTables(namespace) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.tableOps.listTables(namespace)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "createTable",
            value: /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */ function createTable(namespace, request) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.tableOps.createTable(namespace, request)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "updateTable",
            value: /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */ function updateTable(id, request) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.tableOps.updateTable(id, request)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "dropTable",
            value: /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */ function dropTable(id, options) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.tableOps.dropTable(id, options)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "loadTable",
            value: /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */ function loadTable(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.tableOps.loadTable(id)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "namespaceExists",
            value: /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */ function namespaceExists(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.namespaceOps.namespaceExists(id)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "tableExists",
            value: /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */ function tableExists(id) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.tableOps.tableExists(id)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "createNamespaceIfNotExists",
            value: /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */ function createNamespaceIfNotExists(id, metadata) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.namespaceOps.createNamespaceIfNotExists(id, metadata)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "createTableIfNotExists",
            value: /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */ function createTableIfNotExists(namespace, request) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            this.tableOps.createTableIfNotExists(namespace, request)
                        ];
                    });
                }).call(this);
            }
        }
    ]);
    return IcebergRestCatalog;
}();
// src/catalog/types.ts
var DECIMAL_REGEX = /^decimal\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)$/;
var FIXED_REGEX = /^fixed\s*\[\s*(\d+)\s*\]$/;
function parseDecimalType(type) {
    var match = type.match(DECIMAL_REGEX);
    if (!match) return null;
    return {
        precision: parseInt(match[1], 10),
        scale: parseInt(match[2], 10)
    };
}
function parseFixedType(type) {
    var match = type.match(FIXED_REGEX);
    if (!match) return null;
    return {
        length: parseInt(match[1], 10)
    };
}
function isDecimalType(type) {
    return DECIMAL_REGEX.test(type);
}
function isFixedType(type) {
    return FIXED_REGEX.test(type);
}
function typesEqual(a, b) {
    var decimalA = parseDecimalType(a);
    var decimalB = parseDecimalType(b);
    if (decimalA && decimalB) {
        return decimalA.precision === decimalB.precision && decimalA.scale === decimalB.scale;
    }
    var fixedA = parseFixedType(a);
    var fixedB = parseFixedType(b);
    if (fixedA && fixedB) {
        return fixedA.length === fixedB.length;
    }
    return a === b;
}
function getCurrentSchema(metadata) {
    return metadata.schemas.find(function(s) {
        return s["schema-id"] === metadata["current-schema-id"];
    });
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseClient",
    ()=>SupabaseClient,
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/postgrest-js/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/realtime-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-client] (ecmascript) <export default as RealtimeClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/storage-js/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/auth-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/auth-js/dist/module/AuthClient.js [app-client] (ecmascript) <export default as AuthClient>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/lib/version.ts
var version = "2.97.0";
//#endregion
//#region src/lib/constants.ts
var JS_ENV = "";
if (typeof Deno !== "undefined") JS_ENV = "deno";
else if (typeof document !== "undefined") JS_ENV = "web";
else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") JS_ENV = "react-native";
else JS_ENV = "node";
var DEFAULT_HEADERS = {
    "X-Client-Info": "supabase-js-".concat(JS_ENV, "/").concat(version)
};
var DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
var DEFAULT_DB_OPTIONS = {
    schema: "public"
};
var DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "implicit"
};
var DEFAULT_REALTIME_OPTIONS = {};
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/typeof.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(o$1) {
        return typeof o$1;
    } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/objectSpread2.js
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
            return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
            _defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
            Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
    }
    return e;
}
//#endregion
//#region src/lib/fetch.ts
var resolveFetch = function(customFetch) {
    if (customFetch) return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return customFetch.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
    };
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return fetch.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
    };
};
var resolveHeadersConstructor = function() {
    return Headers;
};
var fetchWithAuth = function(supabaseKey, getAccessToken, customFetch) {
    var fetch$1 = resolveFetch(customFetch);
    var HeadersConstructor = resolveHeadersConstructor();
    return function(input, init) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var _await$getAccessToken, accessToken, headers;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getAccessToken()
                        ];
                    case 1:
                        accessToken = (_await$getAccessToken = _state.sent()) !== null && _await$getAccessToken !== void 0 ? _await$getAccessToken : supabaseKey;
                        headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
                        if (!headers.has("apikey")) headers.set("apikey", supabaseKey);
                        if (!headers.has("Authorization")) headers.set("Authorization", "Bearer ".concat(accessToken));
                        return [
                            2,
                            fetch$1(input, _objectSpread2(_objectSpread2({}, init), {}, {
                                headers: headers
                            }))
                        ];
                }
            });
        })();
    };
};
//#endregion
//#region src/lib/helpers.ts
function ensureTrailingSlash(url) {
    return url.endsWith("/") ? url : url + "/";
}
function applySettingDefaults(options, defaults) {
    var _DEFAULT_GLOBAL_OPTIO, _globalOptions$header;
    var dbOptions = options.db, authOptions = options.auth, realtimeOptions = options.realtime, globalOptions = options.global;
    var DEFAULT_DB_OPTIONS$1 = defaults.db, DEFAULT_AUTH_OPTIONS$1 = defaults.auth, DEFAULT_REALTIME_OPTIONS$1 = defaults.realtime, DEFAULT_GLOBAL_OPTIONS$1 = defaults.global;
    var result = {
        db: _objectSpread2(_objectSpread2({}, DEFAULT_DB_OPTIONS$1), dbOptions),
        auth: _objectSpread2(_objectSpread2({}, DEFAULT_AUTH_OPTIONS$1), authOptions),
        realtime: _objectSpread2(_objectSpread2({}, DEFAULT_REALTIME_OPTIONS$1), realtimeOptions),
        storage: {},
        global: _objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_GLOBAL_OPTIONS$1), globalOptions), {}, {
            headers: _objectSpread2(_objectSpread2({}, (_DEFAULT_GLOBAL_OPTIO = DEFAULT_GLOBAL_OPTIONS$1 === null || DEFAULT_GLOBAL_OPTIONS$1 === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS$1.headers) !== null && _DEFAULT_GLOBAL_OPTIO !== void 0 ? _DEFAULT_GLOBAL_OPTIO : {}), (_globalOptions$header = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _globalOptions$header !== void 0 ? _globalOptions$header : {})
        }),
        accessToken: function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                    return [
                        2,
                        ""
                    ];
                });
            })();
        }
    };
    if (options.accessToken) result.accessToken = options.accessToken;
    else delete result.accessToken;
    return result;
}
/**
* Validates a Supabase client URL
*
* @param {string} supabaseUrl - The Supabase client URL string.
* @returns {URL} - The validated base URL.
* @throws {Error}
*/ function validateSupabaseUrl(supabaseUrl) {
    var trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) throw new Error("supabaseUrl is required.");
    if (!trimmedUrl.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_unused) {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.");
    }
}
//#endregion
//#region src/lib/SupabaseAuthClient.ts
var SupabaseAuthClient = /*#__PURE__*/ function(AuthClient) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SupabaseAuthClient, AuthClient);
    function SupabaseAuthClient(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SupabaseAuthClient);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SupabaseAuthClient, [
            options
        ]);
    }
    return SupabaseAuthClient;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__["AuthClient"]);
//#endregion
//#region src/SupabaseClient.ts
/**
* Supabase Client.
*
* An isomorphic Javascript client for interacting with Postgres.
*/ var SupabaseClient = /*#__PURE__*/ function() {
    "use strict";
    function SupabaseClient(supabaseUrl, supabaseKey, options) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SupabaseClient);
        var _settings$auth$storag, _settings$global$head;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        var baseUrl = validateSupabaseUrl(supabaseUrl);
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1", baseUrl);
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
        this.authUrl = new URL("auth/v1", baseUrl);
        this.storageUrl = new URL("storage/v1", baseUrl);
        this.functionsUrl = new URL("functions/v1", baseUrl);
        var defaultStorageKey = "sb-".concat(baseUrl.hostname.split(".")[0], "-auth-token");
        var DEFAULTS = {
            db: DEFAULT_DB_OPTIONS,
            realtime: DEFAULT_REALTIME_OPTIONS,
            auth: _objectSpread2(_objectSpread2({}, DEFAULT_AUTH_OPTIONS), {}, {
                storageKey: defaultStorageKey
            }),
            global: DEFAULT_GLOBAL_OPTIONS
        };
        var settings = applySettingDefaults(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_settings$auth$storag = settings.auth.storageKey) !== null && _settings$auth$storag !== void 0 ? _settings$auth$storag : "";
        this.headers = (_settings$global$head = settings.global.headers) !== null && _settings$global$head !== void 0 ? _settings$global$head : {};
        if (!settings.accessToken) {
            var _settings$auth;
            this.auth = this._initSupabaseAuthClient((_settings$auth = settings.auth) !== null && _settings$auth !== void 0 ? _settings$auth : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: function(_, prop) {
                    throw new Error("@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.".concat(String(prop), " is not possible"));
                }
            });
        }
        this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(_objectSpread2({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, settings.realtime));
        if (this.accessToken) Promise.resolve(this.accessToken()).then(function(token) {
            return _this.realtime.setAuth(token);
        }).catch(function(e) {
            return console.warn("Failed to set initial Realtime auth token:", e);
        });
        this.rest = new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostgrestClient"](new URL("rest/v1", baseUrl).href, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch,
            timeout: settings.db.timeout,
            urlLengthLimit: settings.db.urlLengthLimit
        });
        this.storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageClient"](this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
        if (!settings.accessToken) this._listenForAuthEvents();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SupabaseClient, [
        {
            key: "functions",
            get: /**
	* Supabase Functions allows you to deploy and invoke edge functions.
	*/ function get() {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsClient"](this.functionsUrl.href, {
                    headers: this.headers,
                    customFetch: this.fetch
                });
            }
        },
        {
            /**
	* Perform a query on a table or a view.
	*
	* @param relation - The table or view name to query
	*/ key: "from",
            value: function from(relation) {
                return this.rest.from(relation);
            }
        },
        {
            /**
	* Select a schema to query or perform an function (rpc) call.
	*
	* The schema needs to be on the list of exposed schemas inside Supabase.
	*
	* @param schema - The schema to query
	*/ key: "schema",
            value: function schema(_schema) {
                return this.rest.schema(_schema);
            }
        },
        {
            /**
	* Perform a function call.
	*
	* @param fn - The function name to call
	* @param args - The arguments to pass to the function call
	* @param options - Named parameters
	* @param options.head - When set to `true`, `data` will not be returned.
	* Useful if you only need the count.
	* @param options.get - When set to `true`, the function will be called with
	* read-only access mode.
	* @param options.count - Count algorithm to use to count rows returned by the
	* function. Only applicable for [set-returning
	* functions](https://www.postgresql.org/docs/current/functions-srf.html).
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*/ key: "rpc",
            value: function rpc(fn) {
                var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                    head: false,
                    get: false,
                    count: void 0
                };
                return this.rest.rpc(fn, args, options);
            }
        },
        {
            /**
	* Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
	*
	* @param {string} name - The name of the Realtime channel.
	* @param {Object} opts - The options to pass to the Realtime channel.
	*
	*/ key: "channel",
            value: function channel(name) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    config: {}
                };
                return this.realtime.channel(name, opts);
            }
        },
        {
            /**
	* Returns all Realtime channels.
	*/ key: "getChannels",
            value: function getChannels() {
                return this.realtime.getChannels();
            }
        },
        {
            /**
	* Unsubscribes and removes Realtime channel from Realtime client.
	*
	* @param {RealtimeChannel} channel - The name of the Realtime channel.
	*
	*/ key: "removeChannel",
            value: function removeChannel(channel) {
                return this.realtime.removeChannel(channel);
            }
        },
        {
            /**
	* Unsubscribes and removes all Realtime channels from Realtime client.
	*/ key: "removeAllChannels",
            value: function removeAllChannels() {
                return this.realtime.removeAllChannels();
            }
        },
        {
            key: "_getAccessToken",
            value: function _getAccessToken() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _this, _data$session$access_, _data$session, data;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                if (!_this.accessToken) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.accessToken()
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                return [
                                    4,
                                    _this.auth.getSession()
                                ];
                            case 3:
                                data = _state.sent().data;
                                return [
                                    2,
                                    (_data$session$access_ = (_data$session = data.session) === null || _data$session === void 0 ? void 0 : _data$session.access_token) !== null && _data$session$access_ !== void 0 ? _data$session$access_ : _this.supabaseKey
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "_initSupabaseAuthClient",
            value: function _initSupabaseAuthClient(param, headers, fetch$1) {
                var autoRefreshToken = param.autoRefreshToken, persistSession = param.persistSession, detectSessionInUrl = param.detectSessionInUrl, storage = param.storage, userStorage = param.userStorage, storageKey = param.storageKey, flowType = param.flowType, lock = param.lock, debug = param.debug, throwOnError = param.throwOnError;
                var authHeaders = {
                    Authorization: "Bearer ".concat(this.supabaseKey),
                    apikey: "".concat(this.supabaseKey)
                };
                return new SupabaseAuthClient({
                    url: this.authUrl.href,
                    headers: _objectSpread2(_objectSpread2({}, authHeaders), headers),
                    storageKey: storageKey,
                    autoRefreshToken: autoRefreshToken,
                    persistSession: persistSession,
                    detectSessionInUrl: detectSessionInUrl,
                    storage: storage,
                    userStorage: userStorage,
                    flowType: flowType,
                    lock: lock,
                    debug: debug,
                    throwOnError: throwOnError,
                    fetch: fetch$1,
                    hasCustomAuthorizationHeader: Object.keys(this.headers).some(function(key) {
                        return key.toLowerCase() === "authorization";
                    })
                });
            }
        },
        {
            key: "_initRealtimeClient",
            value: function _initRealtimeClient(options) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__["RealtimeClient"](this.realtimeUrl.href, _objectSpread2(_objectSpread2({}, options), {}, {
                    params: _objectSpread2(_objectSpread2({}, {
                        apikey: this.supabaseKey
                    }), options === null || options === void 0 ? void 0 : options.params)
                }));
            }
        },
        {
            key: "_listenForAuthEvents",
            value: function _listenForAuthEvents() {
                var _this = this;
                return this.auth.onAuthStateChange(function(event, session) {
                    _this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
                });
            }
        },
        {
            key: "_handleTokenChanged",
            value: function _handleTokenChanged(event, source, token) {
                if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
                    this.changedAccessToken = token;
                    this.realtime.setAuth(token);
                } else if (event === "SIGNED_OUT") {
                    this.realtime.setAuth();
                    if (source == "STORAGE") this.auth.signOut();
                    this.changedAccessToken = void 0;
                }
            }
        }
    ]);
    return SupabaseClient;
}();
//#endregion
//#region src/index.ts
/**
* Creates a new Supabase Client.
*
* @example
* ```ts
* import { createClient } from '@supabase/supabase-js'
*
* const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
* const { data, error } = await supabase.from('profiles').select('*')
* ```
*/ var createClient = function(supabaseUrl, supabaseKey, options) {
    return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
function shouldShowDeprecationWarning() {
    if (typeof window !== "undefined") return false;
    var _process = globalThis["process"];
    if (!_process) return false;
    var processVersion = _process["version"];
    if (processVersion === void 0 || processVersion === null) return false;
    var versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) return false;
    return parseInt(versionMatch[1], 10) <= 18;
}
if (shouldShowDeprecationWarning()) console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
var VERSION = '0.8.0'; //# sourceMappingURL=version.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser,
    "memoryLocalStorageAdapter",
    ()=>memoryLocalStorageAdapter,
    "parse",
    ()=>parse,
    "parseCookieHeader",
    ()=>parseCookieHeader,
    "serialize",
    ()=>serialize,
    "serializeCookieHeader",
    ()=>serializeCookieHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
;
var parse = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"];
var serialize = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"];
function parseCookieHeader(header) {
    var parsed = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"](header);
    return Object.keys(parsed !== null && parsed !== void 0 ? parsed : {}).map(function(name) {
        return {
            name: name,
            value: parsed[name]
        };
    });
}
function serializeCookieHeader(name, value, options) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"](name, value, options);
}
function isBrowser() {
    return typeof window !== "undefined" && typeof window.document !== "undefined";
}
function memoryLocalStorageAdapter() {
    var store = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value;
        },
        removeItem: function(key) {
            delete store[key];
        }
    };
} //# sourceMappingURL=helpers.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_COOKIE_OPTIONS",
    ()=>DEFAULT_COOKIE_OPTIONS
]);
var DEFAULT_COOKIE_OPTIONS = {
    path: "/",
    sameSite: "lax",
    httpOnly: false,
    // https://developer.chrome.com/blog/cookie-max-age-expires
    // https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html#name-cookie-lifetime-limits
    maxAge: 400 * 24 * 60 * 60
}; //# sourceMappingURL=constants.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_CHUNK_SIZE",
    ()=>MAX_CHUNK_SIZE,
    "combineChunks",
    ()=>combineChunks,
    "createChunks",
    ()=>createChunks,
    "deleteChunks",
    ()=>deleteChunks,
    "isChunkLike",
    ()=>isChunkLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
;
;
;
var MAX_CHUNK_SIZE = 3180;
var CHUNK_LIKE_REGEX = /^(.*)[.](0|[1-9][0-9]*)$/;
function isChunkLike(cookieName, key) {
    if (cookieName === key) {
        return true;
    }
    var chunkLike = cookieName.match(CHUNK_LIKE_REGEX);
    if (chunkLike && chunkLike[1] === key) {
        return true;
    }
    return false;
}
function createChunks(key, value, chunkSize) {
    var resolvedChunkSize = chunkSize !== null && chunkSize !== void 0 ? chunkSize : MAX_CHUNK_SIZE;
    var encodedValue = encodeURIComponent(value);
    if (encodedValue.length <= resolvedChunkSize) {
        return [
            {
                name: key,
                value: value
            }
        ];
    }
    var chunks = [];
    while(encodedValue.length > 0){
        var encodedChunkHead = encodedValue.slice(0, resolvedChunkSize);
        var lastEscapePos = encodedChunkHead.lastIndexOf("%");
        // Check if the last escaped character is truncated.
        if (lastEscapePos > resolvedChunkSize - 3) {
            // If so, reslice the string to exclude the whole escape sequence.
            // We only reduce the size of the string as the chunk must
            // be smaller than the chunk size.
            encodedChunkHead = encodedChunkHead.slice(0, lastEscapePos);
        }
        var valueHead = "";
        // Check if the chunk was split along a valid unicode boundary.
        while(encodedChunkHead.length > 0){
            try {
                // Try to decode the chunk back and see if it is valid.
                // Stop when the chunk is valid.
                valueHead = decodeURIComponent(encodedChunkHead);
                break;
            } catch (error) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(error, URIError) && encodedChunkHead.at(-3) === "%" && encodedChunkHead.length > 3) {
                    encodedChunkHead = encodedChunkHead.slice(0, encodedChunkHead.length - 3);
                } else {
                    throw error;
                }
            }
        }
        chunks.push(valueHead);
        encodedValue = encodedValue.slice(encodedChunkHead.length);
    }
    return chunks.map(function(value, i) {
        return {
            name: "".concat(key, ".").concat(i),
            value: value
        };
    });
}
function combineChunks(key, retrieveChunk) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var value, values, i, chunkName, chunk;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        retrieveChunk(key)
                    ];
                case 1:
                    value = _state.sent();
                    if (value) {
                        return [
                            2,
                            value
                        ];
                    }
                    values = [];
                    i = 0;
                    _state.label = 2;
                case 2:
                    chunkName = "".concat(key, ".").concat(i);
                    return [
                        4,
                        retrieveChunk(chunkName)
                    ];
                case 3:
                    chunk = _state.sent();
                    if (!chunk) {
                        return [
                            3,
                            5
                        ];
                    }
                    values.push(chunk);
                    _state.label = 4;
                case 4:
                    i++;
                    return [
                        3,
                        2
                    ];
                case 5:
                    if (values.length > 0) {
                        return [
                            2,
                            values.join("")
                        ];
                    }
                    return [
                        2,
                        null
                    ];
            }
        });
    })();
}
function deleteChunks(key, retrieveChunk, removeChunk) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var value, i, chunkName, chunk;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        retrieveChunk(key)
                    ];
                case 1:
                    value = _state.sent();
                    if (!value) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        removeChunk(key)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    i = 0;
                    _state.label = 4;
                case 4:
                    chunkName = "".concat(key, ".").concat(i);
                    return [
                        4,
                        retrieveChunk(chunkName)
                    ];
                case 5:
                    chunk = _state.sent();
                    if (!chunk) {
                        return [
                            3,
                            8
                        ];
                    }
                    return [
                        4,
                        removeChunk(chunkName)
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    i++;
                    return [
                        3,
                        4
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    })();
} //# sourceMappingURL=chunker.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "codepointToUTF8",
    ()=>codepointToUTF8,
    "stringFromBase64URL",
    ()=>stringFromBase64URL,
    "stringFromUTF8",
    ()=>stringFromUTF8,
    "stringToBase64URL",
    ()=>stringToBase64URL,
    "stringToUTF8",
    ()=>stringToUTF8
]);
/**
 * Avoid modifying this file. It's part of
 * https://github.com/supabase-community/base64url-js.  Submit all fixes on
 * that repo!
 */ /**
 * An array of characters that encode 6 bits into a Base64-URL alphabet
 * character.
 */ var TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
/**
 * An array of characters that can appear in a Base64-URL encoded string but
 * should be ignored.
 */ var IGNORE_BASE64URL = " \t\n\r=".split("");
/**
 * An array of 128 numbers that map a Base64-URL character to 6 bits, or if -2
 * used to skip the character, or if -1 used to error out.
 */ var FROM_BASE64URL = function() {
    var charMap = new Array(128);
    for(var i = 0; i < charMap.length; i += 1){
        charMap[i] = -1;
    }
    for(var i1 = 0; i1 < IGNORE_BASE64URL.length; i1 += 1){
        charMap[IGNORE_BASE64URL[i1].charCodeAt(0)] = -2;
    }
    for(var i2 = 0; i2 < TO_BASE64URL.length; i2 += 1){
        charMap[TO_BASE64URL[i2].charCodeAt(0)] = i2;
    }
    return charMap;
}();
function stringToBase64URL(str) {
    var base64 = [];
    var queue = 0;
    var queuedBits = 0;
    var emitter = function(byte) {
        queue = queue << 8 | byte;
        queuedBits += 8;
        while(queuedBits >= 6){
            var pos = queue >> queuedBits - 6 & 63;
            base64.push(TO_BASE64URL[pos]);
            queuedBits -= 6;
        }
    };
    stringToUTF8(str, emitter);
    if (queuedBits > 0) {
        queue = queue << 6 - queuedBits;
        queuedBits = 6;
        while(queuedBits >= 6){
            var pos = queue >> queuedBits - 6 & 63;
            base64.push(TO_BASE64URL[pos]);
            queuedBits -= 6;
        }
    }
    return base64.join("");
}
function stringFromBase64URL(str) {
    var conv = [];
    var emit = function(codepoint) {
        conv.push(String.fromCodePoint(codepoint));
    };
    var state = {
        utf8seq: 0,
        codepoint: 0
    };
    var queue = 0;
    var queuedBits = 0;
    for(var i = 0; i < str.length; i += 1){
        var codepoint = str.charCodeAt(i);
        var bits = FROM_BASE64URL[codepoint];
        if (bits > -1) {
            // valid Base64-URL character
            queue = queue << 6 | bits;
            queuedBits += 6;
            while(queuedBits >= 8){
                stringFromUTF8(queue >> queuedBits - 8 & 0xff, state, emit);
                queuedBits -= 8;
            }
        } else if (bits === -2) {
            continue;
        } else {
            throw new Error('Invalid Base64-URL character "'.concat(str.at(i), '" at position ').concat(i));
        }
    }
    return conv.join("");
}
function codepointToUTF8(codepoint, emit) {
    if (codepoint <= 0x7f) {
        emit(codepoint);
        return;
    } else if (codepoint <= 0x7ff) {
        emit(0xc0 | codepoint >> 6);
        emit(0x80 | codepoint & 0x3f);
        return;
    } else if (codepoint <= 0xffff) {
        emit(0xe0 | codepoint >> 12);
        emit(0x80 | codepoint >> 6 & 0x3f);
        emit(0x80 | codepoint & 0x3f);
        return;
    } else if (codepoint <= 0x10ffff) {
        emit(0xf0 | codepoint >> 18);
        emit(0x80 | codepoint >> 12 & 0x3f);
        emit(0x80 | codepoint >> 6 & 0x3f);
        emit(0x80 | codepoint & 0x3f);
        return;
    }
    throw new Error("Unrecognized Unicode codepoint: ".concat(codepoint.toString(16)));
}
function stringToUTF8(str, emit) {
    for(var i = 0; i < str.length; i += 1){
        var codepoint = str.charCodeAt(i);
        if (codepoint > 0xd7ff && codepoint <= 0xdbff) {
            // most UTF-16 codepoints are Unicode codepoints, except values in this
            // range where the next UTF-16 codepoint needs to be combined with the
            // current one to get the Unicode codepoint
            var highSurrogate = (codepoint - 0xd800) * 0x400 & 0xffff;
            var lowSurrogate = str.charCodeAt(i + 1) - 0xdc00 & 0xffff;
            codepoint = (lowSurrogate | highSurrogate) + 0x10000;
            i += 1;
        }
        codepointToUTF8(codepoint, emit);
    }
}
function stringFromUTF8(byte, state, emit) {
    if (state.utf8seq === 0) {
        if (byte <= 0x7f) {
            emit(byte);
            return;
        }
        // count the number of 1 leading bits until you reach 0
        for(var leadingBit = 1; leadingBit < 6; leadingBit += 1){
            if ((byte >> 7 - leadingBit & 1) === 0) {
                state.utf8seq = leadingBit;
                break;
            }
        }
        if (state.utf8seq === 2) {
            state.codepoint = byte & 31;
        } else if (state.utf8seq === 3) {
            state.codepoint = byte & 15;
        } else if (state.utf8seq === 4) {
            state.codepoint = byte & 7;
        } else {
            throw new Error("Invalid UTF-8 sequence");
        }
        state.utf8seq -= 1;
    } else if (state.utf8seq > 0) {
        if (byte <= 0x7f) {
            throw new Error("Invalid UTF-8 sequence");
        }
        state.codepoint = state.codepoint << 6 | byte & 63;
        state.utf8seq -= 1;
        if (state.utf8seq === 0) {
            emit(state.codepoint);
        }
    }
} //# sourceMappingURL=base64url.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/cookies.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyServerStorage",
    ()=>applyServerStorage,
    "createStorageFromOptions",
    ()=>createStorageFromOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var BASE64_PREFIX = "base64-";
function createStorageFromOptions(options, isServerClient) {
    var _options_cookies;
    var cookies = (_options_cookies = options.cookies) !== null && _options_cookies !== void 0 ? _options_cookies : null;
    var cookieEncoding = options.cookieEncoding;
    var setItems = {};
    var removedItems = {};
    var getAll;
    var setAll;
    if (cookies) {
        if ("get" in cookies) {
            // Just get is not enough, because the client needs to see what cookies
            // are already set and unset them if necessary. To attempt to fix this
            // behavior for most use cases, we pass "hints" which is the keys of the
            // storage items. They are then converted to their corresponding cookie
            // chunk names and are fetched with get. Only 5 chunks are fetched, which
            // should be enough for the majority of use cases, but does not solve
            // those with very large sessions.
            var getWithHints = function(keyHints) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var chunkNames, chunks, i, value;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // optimistically find the first 5 potential chunks for the specified key
                                chunkNames = keyHints.flatMap(function(keyHint) {
                                    return [
                                        keyHint
                                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Array.from({
                                        length: 5
                                    }).map(function(_, i) {
                                        return "".concat(keyHint, ".").concat(i);
                                    })));
                                });
                                chunks = [];
                                i = 0;
                                _state.label = 1;
                            case 1:
                                if (!(i < chunkNames.length)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    cookies.get(chunkNames[i])
                                ];
                            case 2:
                                value = _state.sent();
                                if (!value && typeof value !== "string") {
                                    return [
                                        3,
                                        3
                                    ];
                                }
                                chunks.push({
                                    name: chunkNames[i],
                                    value: value
                                });
                                _state.label = 3;
                            case 3:
                                i += 1;
                                return [
                                    3,
                                    1
                                ];
                            case 4:
                                // TODO: detect and log stale chunks error
                                return [
                                    2,
                                    chunks
                                ];
                        }
                    });
                })();
            };
            getAll = function(keyHints) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    getWithHints(keyHints)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            };
            if ("set" in cookies && "remove" in cookies) {
                setAll = function(setCookies) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                        var i, _setCookies_i, name, value, _$options;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    i = 0;
                                    _state.label = 1;
                                case 1:
                                    if (!(i < setCookies.length)) return [
                                        3,
                                        6
                                    ];
                                    _setCookies_i = setCookies[i], name = _setCookies_i.name, value = _setCookies_i.value, _$options = _setCookies_i.options;
                                    if (!value) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        cookies.set(name, value, _$options)
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    return [
                                        4,
                                        cookies.remove(name, _$options)
                                    ];
                                case 4:
                                    _state.sent();
                                    _state.label = 5;
                                case 5:
                                    i += 1;
                                    return [
                                        3,
                                        1
                                    ];
                                case 6:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                };
            } else if (isServerClient) {
                setAll = function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                            console.warn("@supabase/ssr: createServerClient was configured without set and remove cookie methods, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness. Consider switching to the getAll and setAll cookie methods instead of get, set and remove which are deprecated and can be difficult to use correctly.");
                            return [
                                2
                            ];
                        });
                    })();
                };
            } else {
                throw new Error("@supabase/ssr: createBrowserClient requires configuring a getAll and setAll cookie method (deprecated: alternatively both get, set and remove can be used)");
            }
        } else if ("getAll" in cookies) {
            getAll = function() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    cookies.getAll()
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            };
            if ("setAll" in cookies) {
                setAll = cookies.setAll;
            } else if (isServerClient) {
                setAll = function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                            console.warn("@supabase/ssr: createServerClient was configured without the setAll cookie method, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness.");
                            return [
                                2
                            ];
                        });
                    })();
                };
            } else {
                throw new Error("@supabase/ssr: createBrowserClient requires configuring both getAll and setAll cookie methods (deprecated: alternatively both get, set and remove can be used)");
            }
        } else {
            // neither get nor getAll is present on cookies, only will occur if pure JavaScript is used, but cookies is an object
            throw new Error("@supabase/ssr: ".concat(isServerClient ? "createServerClient" : "createBrowserClient", " requires configuring getAll and setAll cookie methods (deprecated: alternatively use get, set and remove).").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])() ? " As this is called in a browser runtime, consider removing the cookies option object to use the document.cookie API automatically." : ""));
        }
    } else if (!isServerClient && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        // The environment is browser, so use the document.cookie API to implement getAll and setAll.
        var noHintGetAll = function() {
            var parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(document.cookie);
            return Object.keys(parsed).map(function(name) {
                var _parsed_name;
                return {
                    name: name,
                    value: (_parsed_name = parsed[name]) !== null && _parsed_name !== void 0 ? _parsed_name : ""
                };
            });
        };
        getAll = function() {
            return noHintGetAll();
        };
        setAll = function(setCookies) {
            setCookies.forEach(function(param) {
                var name = param.name, value = param.value, _$options = param.options;
                document.cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])(name, value, _$options);
            });
        };
    } else if (isServerClient) {
        throw new Error("@supabase/ssr: createServerClient must be initialized with cookie options that specify getAll and setAll functions (deprecated, not recommended: alternatively use get, set and remove)");
    } else {
        // getting cookies when there's no window but we're in browser mode can be OK, because the developer probably is not using auth functions
        getAll = function() {
            return [];
        };
        // this is NOT OK because the developer is using auth functions that require setting some state, so that must error out
        setAll = function() {
            throw new Error("@supabase/ssr: createBrowserClient in non-browser runtimes (including Next.js pre-rendering mode) was not initialized cookie options that specify getAll and setAll functions (deprecated: alternatively use get, set and remove), but they were needed");
        };
    }
    if (!isServerClient) {
        // This is the storage client to be used in browsers. It only
        // works on the cookies abstraction, unlike the server client
        // which only uses cookies to read the initial state. When an
        // item is set, cookies are both cleared and set to values so
        // that stale chunks are not left remaining.
        return {
            getAll: getAll,
            setAll: setAll,
            setItems: setItems,
            removedItems: removedItems,
            storage: {
                isServer: false,
                getItem: function(key) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                        var allCookies, chunkedCookie, decoded;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        getAll([
                                            key
                                        ])
                                    ];
                                case 1:
                                    allCookies = _state.sent();
                                    return [
                                        4,
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineChunks"])(key, function(chunkName) {
                                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                                                var cookie;
                                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                                                    cookie = (allCookies === null || allCookies === void 0 ? void 0 : allCookies.find(function(param) {
                                                        var name = param.name;
                                                        return name === chunkName;
                                                    })) || null;
                                                    if (!cookie) {
                                                        return [
                                                            2,
                                                            null
                                                        ];
                                                    }
                                                    return [
                                                        2,
                                                        cookie.value
                                                    ];
                                                });
                                            })();
                                        })
                                    ];
                                case 2:
                                    chunkedCookie = _state.sent();
                                    if (!chunkedCookie) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    decoded = chunkedCookie;
                                    if (chunkedCookie.startsWith(BASE64_PREFIX)) {
                                        decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringFromBase64URL"])(chunkedCookie.substring(BASE64_PREFIX.length));
                                    }
                                    return [
                                        2,
                                        decoded
                                    ];
                            }
                        });
                    })();
                },
                setItem: function(key, value) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                        var allCookies, cookieNames, removeCookies, encoded, setCookies, removeCookieOptions, setCookieOptions, allToSet;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        getAll([
                                            key
                                        ])
                                    ];
                                case 1:
                                    allCookies = _state.sent();
                                    cookieNames = (allCookies === null || allCookies === void 0 ? void 0 : allCookies.map(function(param) {
                                        var name = param.name;
                                        return name;
                                    })) || [];
                                    removeCookies = new Set(cookieNames.filter(function(name) {
                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, key);
                                    }));
                                    encoded = value;
                                    if (cookieEncoding === "base64url") {
                                        encoded = BASE64_PREFIX + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToBase64URL"])(value);
                                    }
                                    setCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChunks"])(key, encoded);
                                    setCookies.forEach(function(param) {
                                        var name = param.name;
                                        removeCookies.delete(name);
                                    });
                                    removeCookieOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"], options === null || options === void 0 ? void 0 : options.cookieOptions), {
                                        maxAge: 0
                                    });
                                    setCookieOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"], options === null || options === void 0 ? void 0 : options.cookieOptions), {
                                        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"].maxAge
                                    });
                                    // the NextJS cookieStore API can get confused if the `name` from
                                    // options.cookieOptions leaks
                                    delete removeCookieOptions.name;
                                    delete setCookieOptions.name;
                                    allToSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(removeCookies).map(function(name) {
                                        return {
                                            name: name,
                                            value: "",
                                            options: removeCookieOptions
                                        };
                                    })).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(setCookies.map(function(param) {
                                        var name = param.name, _$value = param.value;
                                        return {
                                            name: name,
                                            value: _$value,
                                            options: setCookieOptions
                                        };
                                    })));
                                    if (!(allToSet.length > 0)) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        setAll(allToSet)
                                    ];
                                case 2:
                                    _state.sent();
                                    _state.label = 3;
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                },
                removeItem: function(key) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                        var allCookies, cookieNames, removeCookies, removeCookieOptions;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        getAll([
                                            key
                                        ])
                                    ];
                                case 1:
                                    allCookies = _state.sent();
                                    cookieNames = (allCookies === null || allCookies === void 0 ? void 0 : allCookies.map(function(param) {
                                        var name = param.name;
                                        return name;
                                    })) || [];
                                    removeCookies = cookieNames.filter(function(name) {
                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, key);
                                    });
                                    removeCookieOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"], options === null || options === void 0 ? void 0 : options.cookieOptions), {
                                        maxAge: 0
                                    });
                                    // the NextJS cookieStore API can get confused if the `name` from
                                    // options.cookieOptions leaks
                                    delete removeCookieOptions.name;
                                    if (!(removeCookies.length > 0)) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        setAll(removeCookies.map(function(name) {
                                            return {
                                                name: name,
                                                value: "",
                                                options: removeCookieOptions
                                            };
                                        }))
                                    ];
                                case 2:
                                    _state.sent();
                                    _state.label = 3;
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            }
        };
    }
    // This is the server client. It only uses getAll to read the initial
    // state. Any subsequent changes to the items is persisted in the
    // setItems and removedItems objects. createServerClient *must* use
    // getAll, setAll and the values in setItems and removedItems to
    // persist the changes *at once* when appropriate (usually only when
    // the TOKEN_REFRESHED, USER_UPDATED or SIGNED_OUT events are fired by
    // the Supabase Auth client).
    return {
        getAll: getAll,
        setAll: setAll,
        setItems: setItems,
        removedItems: removedItems,
        storage: {
            // to signal to the libraries that these cookies are
            // coming from a server environment and their value
            // should not be trusted
            isServer: true,
            getItem: function(key) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var allCookies, chunkedCookie, decoded;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (typeof setItems[key] === "string") {
                                    return [
                                        2,
                                        setItems[key]
                                    ];
                                }
                                if (removedItems[key]) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    getAll([
                                        key
                                    ])
                                ];
                            case 1:
                                allCookies = _state.sent();
                                return [
                                    4,
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineChunks"])(key, function(chunkName) {
                                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                                            var cookie;
                                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                                                cookie = (allCookies === null || allCookies === void 0 ? void 0 : allCookies.find(function(param) {
                                                    var name = param.name;
                                                    return name === chunkName;
                                                })) || null;
                                                if (!cookie) {
                                                    return [
                                                        2,
                                                        null
                                                    ];
                                                }
                                                return [
                                                    2,
                                                    cookie.value
                                                ];
                                            });
                                        })();
                                    })
                                ];
                            case 2:
                                chunkedCookie = _state.sent();
                                if (!chunkedCookie) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                decoded = chunkedCookie;
                                if (typeof chunkedCookie === "string" && chunkedCookie.startsWith(BASE64_PREFIX)) {
                                    decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringFromBase64URL"])(chunkedCookie.substring(BASE64_PREFIX.length));
                                }
                                return [
                                    2,
                                    decoded
                                ];
                        }
                    });
                })();
            },
            setItem: function(key, value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _ref;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!key.endsWith("-code-verifier")) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    applyServerStorage({
                                        getAll: getAll,
                                        setAll: setAll,
                                        // pretend only that the code verifier was set
                                        setItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, key, value),
                                        // pretend that nothing was removed
                                        removedItems: {}
                                    }, {
                                        cookieOptions: (_ref = options === null || options === void 0 ? void 0 : options.cookieOptions) !== null && _ref !== void 0 ? _ref : null,
                                        cookieEncoding: cookieEncoding
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                setItems[key] = value;
                                delete removedItems[key];
                                return [
                                    2
                                ];
                        }
                    });
                })();
            },
            removeItem: function(key) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        // Intentionally not applying the storage when the key is the PKCE code
                        // verifier, as usually right after it's removed other items are set,
                        // so application of the storage will be handled by the
                        // `onAuthStateChange` callback that follows removal -- usually as part
                        // of the `exchangeCodeForSession` call.
                        delete setItems[key];
                        removedItems[key] = true;
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    };
}
function applyServerStorage(_0, _1) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function(param, options) {
        var getAll, setAll, setItems, removedItems, _options_cookieOptions, cookieEncoding, cookieOptions, allCookies, cookieNames, removeCookies, setCookies, removeCookieOptions, setCookieOptions;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    getAll = param.getAll, setAll = param.setAll, setItems = param.setItems, removedItems = param.removedItems;
                    cookieEncoding = options.cookieEncoding;
                    cookieOptions = (_options_cookieOptions = options.cookieOptions) !== null && _options_cookieOptions !== void 0 ? _options_cookieOptions : null;
                    return [
                        4,
                        getAll((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(setItems ? Object.keys(setItems) : []).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(removedItems ? Object.keys(removedItems) : [])))
                    ];
                case 1:
                    allCookies = _state.sent();
                    cookieNames = (allCookies === null || allCookies === void 0 ? void 0 : allCookies.map(function(param) {
                        var name = param.name;
                        return name;
                    })) || [];
                    removeCookies = Object.keys(removedItems).flatMap(function(itemName) {
                        return cookieNames.filter(function(name) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, itemName);
                        });
                    });
                    setCookies = Object.keys(setItems).flatMap(function(itemName) {
                        var _removeCookies;
                        var removeExistingCookiesForItem = new Set(cookieNames.filter(function(name) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, itemName);
                        }));
                        var encoded = setItems[itemName];
                        if (cookieEncoding === "base64url") {
                            encoded = BASE64_PREFIX + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToBase64URL"])(encoded);
                        }
                        var chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChunks"])(itemName, encoded);
                        chunks.forEach(function(chunk) {
                            removeExistingCookiesForItem.delete(chunk.name);
                        });
                        (_removeCookies = removeCookies).push.apply(_removeCookies, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(removeExistingCookiesForItem));
                        return chunks;
                    });
                    removeCookieOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"], cookieOptions), {
                        maxAge: 0
                    });
                    setCookieOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"], cookieOptions), {
                        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"].maxAge
                    });
                    // the NextJS cookieStore API can get confused if the `name` from
                    // options.cookieOptions leaks
                    delete removeCookieOptions.name;
                    delete setCookieOptions.name;
                    return [
                        4,
                        setAll((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(removeCookies.map(function(name) {
                            return {
                                name: name,
                                value: "",
                                options: removeCookieOptions
                            };
                        })).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(setCookies.map(function(param) {
                            var name = param.name, value = param.value;
                            return {
                                name: name,
                                value: value,
                                options: setCookieOptions
                            };
                        }))))
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
} //# sourceMappingURL=cookies.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserClient",
    ()=>createBrowserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/cookies.js [app-client] (ecmascript)");
;
;
;
;
;
;
var cachedBrowserClient;
function createBrowserClient(supabaseUrl, supabaseKey, options) {
    var _ref, _ref1;
    var _options_global, _options_cookieOptions, _options_auth;
    // singleton client is created only if isSingleton is set to true, or if isSingleton is not defined and we detect a browser
    var shouldUseSingleton = (options === null || options === void 0 ? void 0 : options.isSingleton) === true || (!options || !("isSingleton" in options)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])();
    if (shouldUseSingleton && cachedBrowserClient) {
        return cachedBrowserClient;
    }
    if (!supabaseUrl || !supabaseKey) {
        throw new Error("@supabase/ssr: Your project's URL and API key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api");
    }
    var storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorageFromOptions"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
        cookieEncoding: (_ref = options === null || options === void 0 ? void 0 : options.cookieEncoding) !== null && _ref !== void 0 ? _ref : "base64url"
    }), false).storage;
    var client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
        global: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options === null || options === void 0 ? void 0 : options.global), {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options === null || options === void 0 ? void 0 : (_options_global = options.global) === null || _options_global === void 0 ? void 0 : _options_global.headers), {
                "X-Client-Info": "supabase-ssr/".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"], " createBrowserClient")
            })
        }),
        auth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options === null || options === void 0 ? void 0 : options.auth, (options === null || options === void 0 ? void 0 : (_options_cookieOptions = options.cookieOptions) === null || _options_cookieOptions === void 0 ? void 0 : _options_cookieOptions.name) ? {
            storageKey: options.cookieOptions.name
        } : null), {
            flowType: "pkce",
            autoRefreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])(),
            detectSessionInUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])(),
            persistSession: true,
            storage: storage
        }), (options === null || options === void 0 ? void 0 : options.cookies) && "encode" in options.cookies && options.cookies.encode === "tokens-only" ? {
            userStorage: (_ref1 = options === null || options === void 0 ? void 0 : (_options_auth = options.auth) === null || _options_auth === void 0 ? void 0 : _options_auth.userStorage) !== null && _ref1 !== void 0 ? _ref1 : window.localStorage
        } : null)
    }));
    if (shouldUseSingleton) {
        cachedBrowserClient = client;
    }
    return client;
} //# sourceMappingURL=createBrowserClient.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerClient",
    ()=>createServerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function createServerClient(supabaseUrl, supabaseKey, options) {
    var _ref, _ref1;
    var _options_global, _options_cookieOptions, _options_auth;
    if (!supabaseUrl || !supabaseKey) {
        throw new Error("Your project's URL and Key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api");
    }
    var _createStorageFromOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorageFromOptions"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
        cookieEncoding: (_ref = options === null || options === void 0 ? void 0 : options.cookieEncoding) !== null && _ref !== void 0 ? _ref : "base64url"
    }), true), storage = _createStorageFromOptions.storage, getAll = _createStorageFromOptions.getAll, setAll = _createStorageFromOptions.setAll, setItems = _createStorageFromOptions.setItems, removedItems = _createStorageFromOptions.removedItems;
    var client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
        global: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options === null || options === void 0 ? void 0 : options.global), {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options === null || options === void 0 ? void 0 : (_options_global = options.global) === null || _options_global === void 0 ? void 0 : _options_global.headers), {
                "X-Client-Info": "supabase-ssr/".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"], " createServerClient")
            })
        }),
        auth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, (options === null || options === void 0 ? void 0 : (_options_cookieOptions = options.cookieOptions) === null || _options_cookieOptions === void 0 ? void 0 : _options_cookieOptions.name) ? {
            storageKey: options.cookieOptions.name
        } : null, options === null || options === void 0 ? void 0 : options.auth), {
            flowType: "pkce",
            autoRefreshToken: false,
            detectSessionInUrl: false,
            persistSession: true,
            storage: storage
        }), (options === null || options === void 0 ? void 0 : options.cookies) && "encode" in options.cookies && options.cookies.encode === "tokens-only" ? {
            userStorage: (_ref1 = options === null || options === void 0 ? void 0 : (_options_auth = options.auth) === null || _options_auth === void 0 ? void 0 : _options_auth.userStorage) !== null && _ref1 !== void 0 ? _ref1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoryLocalStorageAdapter"])()
        } : null)
    }));
    client.auth.onAuthStateChange(function(event) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var hasStorageChanges, _ref, _ref1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // The SIGNED_IN event is fired very often, but we don't need to
                        // apply the storage each time it fires, only if there are changes
                        // that need to be set -- which is if setItems / removeItems have
                        // data.
                        hasStorageChanges = Object.keys(setItems).length > 0 || Object.keys(removedItems).length > 0;
                        if (!(hasStorageChanges && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "USER_UPDATED" || event === "PASSWORD_RECOVERY" || event === "SIGNED_OUT" || event === "MFA_CHALLENGE_VERIFIED"))) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyServerStorage"])({
                                getAll: getAll,
                                setAll: setAll,
                                setItems: setItems,
                                removedItems: removedItems
                            }, {
                                cookieOptions: (_ref = options === null || options === void 0 ? void 0 : options.cookieOptions) !== null && _ref !== void 0 ? _ref : null,
                                cookieEncoding: (_ref1 = options === null || options === void 0 ? void 0 : options.cookieEncoding) !== null && _ref1 !== void 0 ? _ref1 : "base64url"
                            })
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        return [
                            2
                        ];
                }
            });
        })();
    });
    return client;
} //# sourceMappingURL=createServerClient.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//# sourceMappingURL=types.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
var _process_env;
// Check if this package is being used as one of the deprecated auth-helpers packages
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ((_process_env = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) === null || _process_env === void 0 ? void 0 : _process_env.npm_package_name)) {
    var packageName = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.npm_package_name;
    var deprecatedPackages = [
        "@supabase/auth-helpers-nextjs",
        "@supabase/auth-helpers-react",
        "@supabase/auth-helpers-remix",
        "@supabase/auth-helpers-sveltekit"
    ];
    if (deprecatedPackages.includes(packageName)) {
        console.warn("\n╔════════════════════════════════════════════════════════════════════════════╗\n║ ⚠️  IMPORTANT: Package Consolidation Notice                                ║\n║                                                                            ║\n║ The ".concat(packageName.padEnd(35), " package name is deprecated.  ║\n║                                                                            ║\n║ You are now using @supabase/ssr - a unified solution for all frameworks.  ║\n║                                                                            ║\n║ The auth-helpers packages have been consolidated into @supabase/ssr       ║\n║ to provide better maintenance and consistent APIs across frameworks.      ║\n║                                                                            ║\n║ Please update your package.json to use @supabase/ssr directly:            ║\n║   npm uninstall ").concat(packageName.padEnd(42), " ║\n║   npm install @supabase/ssr                                               ║\n║                                                                            ║\n║ For more information, visit:                                              ║\n║ https://supabase.com/docs/guides/auth/server-side                         ║\n╚════════════════════════════════════════════════════════════════════════════╝\n    "));
    }
}
;
;
;
;
}),
"[project]/Developer/brasena/Brasena/node_modules/cookie/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _object_spread = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseCookie = parseCookie;
exports.parse = parseCookie;
exports.stringifyCookie = stringifyCookie;
exports.stringifySetCookie = stringifySetCookie;
exports.serialize = stringifySetCookie;
exports.parseSetCookie = parseSetCookie;
exports.stringifySetCookie = stringifySetCookie;
exports.serialize = stringifySetCookie;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */ var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */ var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
/**
 * RegExp to match max-age-value in RFC 6265 sec 5.6.2
 */ var maxAgeRegExp = /^-?\d+$/;
var __toString = Object.prototype.toString;
var NullObject = /* @__PURE__ */ function() {
    var C = function C() {};
    C.prototype = Object.create(null);
    return C;
}();
/**
 * Parse a `Cookie` header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */ function parseCookie(str, options) {
    var obj = new NullObject();
    var len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    var dec = (options === null || options === void 0 ? void 0 : options.decode) || decode;
    var index = 0;
    do {
        var eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1) break; // No more cookie pairs.
        var endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        var key = valueSlice(str, index, eqIdx);
        // only assign once
        if (obj[key] === undefined) {
            obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
/**
 * Stringifies an object into an HTTP `Cookie` header.
 */ function stringifyCookie(cookie, options) {
    var enc = (options === null || options === void 0 ? void 0 : options.encode) || encodeURIComponent;
    var cookieStrings = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(cookie)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name = _step.value;
            var val = cookie[name];
            if (val === undefined) continue;
            if (!cookieNameRegExp.test(name)) {
                throw new TypeError("cookie name is invalid: ".concat(name));
            }
            var value = enc(val);
            if (!cookieValueRegExp.test(value)) {
                throw new TypeError("cookie val is invalid: ".concat(val));
            }
            cookieStrings.push("".concat(name, "=").concat(value));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return cookieStrings.join("; ");
}
function stringifySetCookie(_name, _val, _opts) {
    var cookie = (typeof _name === "undefined" ? "undefined" : _type_of._(_name)) === "object" ? _name : _object_spread_props._(_object_spread._({}, _opts), {
        name: _name,
        value: String(_val)
    });
    var options = (typeof _val === "undefined" ? "undefined" : _type_of._(_val)) === "object" ? _val : _opts;
    var enc = (options === null || options === void 0 ? void 0 : options.encode) || encodeURIComponent;
    if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError("argument name is invalid: ".concat(cookie.name));
    }
    var value = cookie.value ? enc(cookie.value) : "";
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError("argument val is invalid: ".concat(cookie.value));
    }
    var str = cookie.name + "=" + value;
    if (cookie.maxAge !== undefined) {
        if (!Number.isInteger(cookie.maxAge)) {
            throw new TypeError("option maxAge is invalid: ".concat(cookie.maxAge));
        }
        str += "; Max-Age=" + cookie.maxAge;
    }
    if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
            throw new TypeError("option domain is invalid: ".concat(cookie.domain));
        }
        str += "; Domain=" + cookie.domain;
    }
    if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
            throw new TypeError("option path is invalid: ".concat(cookie.path));
        }
        str += "; Path=" + cookie.path;
    }
    if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
            throw new TypeError("option expires is invalid: ".concat(cookie.expires));
        }
        str += "; Expires=" + cookie.expires.toUTCString();
    }
    if (cookie.httpOnly) {
        str += "; HttpOnly";
    }
    if (cookie.secure) {
        str += "; Secure";
    }
    if (cookie.partitioned) {
        str += "; Partitioned";
    }
    if (cookie.priority) {
        var priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : undefined;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError("option priority is invalid: ".concat(cookie.priority));
        }
    }
    if (cookie.sameSite) {
        var sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch(sameSite){
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid: ".concat(cookie.sameSite));
        }
    }
    return str;
}
/**
 * Deserialize a `Set-Cookie` header into an object.
 *
 * deserialize('foo=bar; httpOnly')
 *   => { name: 'foo', value: 'bar', httpOnly: true }
 */ function parseSetCookie(str, options) {
    var dec = (options === null || options === void 0 ? void 0 : options.decode) || decode;
    var len = str.length;
    var endIdx = endIndex(str, 0, len);
    var eqIdx = eqIndex(str, 0, endIdx);
    var setCookie = eqIdx === -1 ? {
        name: "",
        value: dec(valueSlice(str, 0, endIdx))
    } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
    };
    var index = endIdx + 1;
    while(index < len){
        var endIdx1 = endIndex(str, index, len);
        var eqIdx1 = eqIndex(str, index, endIdx1);
        var attr = eqIdx1 === -1 ? valueSlice(str, index, endIdx1) : valueSlice(str, index, eqIdx1);
        var val = eqIdx1 === -1 ? undefined : valueSlice(str, eqIdx1 + 1, endIdx1);
        switch(attr.toLowerCase()){
            case "httponly":
                setCookie.httpOnly = true;
                break;
            case "secure":
                setCookie.secure = true;
                break;
            case "partitioned":
                setCookie.partitioned = true;
                break;
            case "domain":
                setCookie.domain = val;
                break;
            case "path":
                setCookie.path = val;
                break;
            case "max-age":
                if (val && maxAgeRegExp.test(val)) setCookie.maxAge = Number(val);
                break;
            case "expires":
                if (!val) break;
                var date = new Date(val);
                if (Number.isFinite(date.valueOf())) setCookie.expires = date;
                break;
            case "priority":
                if (!val) break;
                var priority = val.toLowerCase();
                if (priority === "low" || priority === "medium" || priority === "high") {
                    setCookie.priority = priority;
                }
                break;
            case "samesite":
                if (!val) break;
                var sameSite = val.toLowerCase();
                if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
                    setCookie.sameSite = sameSite;
                }
                break;
        }
        index = endIdx1 + 1;
    }
    return setCookie;
}
/**
 * Find the `;` character between `min` and `len` in str.
 */ function endIndex(str, min, len) {
    var index = str.indexOf(";", min);
    return index === -1 ? len : index;
}
/**
 * Find the `=` character between `min` and `max` in str.
 */ function eqIndex(str, min, max) {
    var index = str.indexOf("=", min);
    return index < max ? index : -1;
}
/**
 * Slice out a value between startPod to max.
 */ function valueSlice(str, min, max) {
    var start = min;
    var end = max;
    do {
        var code = str.charCodeAt(start);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) break;
    }while (++start < end)
    while(end > start){
        var code1 = str.charCodeAt(end - 1);
        if (code1 !== 0x20 /*   */  && code1 !== 0x09 /* \t */ ) break;
        end--;
    }
    return str.slice(start, end);
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */ function decode(str) {
    if (str.indexOf("%") === -1) return str;
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]";
} //# sourceMappingURL=index.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == (typeof e === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e))) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Developer/brasena/Brasena/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
;
var CLASS_PART_SEPARATOR = '-';
var createClassGroupUtils = function(config) {
    var classMap = createClassMap(config);
    var conflictingClassGroups = config.conflictingClassGroups, conflictingClassGroupModifiers = config.conflictingClassGroupModifiers;
    var getClassGroupId = function(className) {
        var classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    var getConflictingClassGroupIds = function(classGroupId, hasPostfixModifier) {
        var conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(conflicts).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(conflictingClassGroupModifiers[classGroupId]));
        }
        return conflicts;
    };
    return {
        getClassGroupId: getClassGroupId,
        getConflictingClassGroupIds: getConflictingClassGroupIds
    };
};
var getGroupRecursive = function(classParts, classPartObject) {
    var _classPartObject_validators_find;
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    var currentClassPart = classParts[0];
    var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    var classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_classPartObject_validators_find = classPartObject.validators.find(function(param) {
        var validator = param.validator;
        return validator(classRest);
    })) === null || _classPartObject_validators_find === void 0 ? void 0 : _classPartObject_validators_find.classGroupId;
};
var arbitraryPropertyRegex = /^\[(.+)\]$/;
var getGroupIdForArbitraryProperty = function(className) {
    if (arbitraryPropertyRegex.test(className)) {
        var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        var property = arbitraryPropertyClassName === null || arbitraryPropertyClassName === void 0 ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
};
/**
 * Exported for testing only
 */ var createClassMap = function(config) {
    var theme = config.theme, prefix = config.prefix;
    var classMap = {
        nextPart: new Map(),
        validators: []
    };
    var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(function(param) {
        var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), classGroupId = _param[0], classGroup = _param[1];
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
var processClassesRecursively = function(classGroup, classPartObject, classGroupId, theme) {
    classGroup.forEach(function(classDefinition) {
        if (typeof classDefinition === 'string') {
            var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId: classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], _$classGroup = _param[1];
            processClassesRecursively(_$classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
var getPart = function(classPartObject, path) {
    var currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
var isThemeGetter = function(func) {
    return func.isThemeGetter;
};
var getPrefixedClassGroupEntries = function(classGroupEntries, prefix) {
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(function(param) {
        var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), classGroupId = _param[0], classGroup = _param[1];
        var prefixedClassGroup = classGroup.map(function(classDefinition) {
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if ((typeof classDefinition === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(classDefinition)) === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(function(param) {
                    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], value = _param[1];
                    return [
                        prefix + key,
                        value
                    ];
                }));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
var createLruCache = function(maxCacheSize) {
    if (maxCacheSize < 1) {
        return {
            get: function() {
                return undefined;
            },
            set: function() {}
        };
    }
    var cacheSize = 0;
    var cache = new Map();
    var previousCache = new Map();
    var update = function(key, value) {
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get: function get(key) {
            var value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set: function set(key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
};
var IMPORTANT_MODIFIER = '!';
var createParseClassName = function(config) {
    var separator = config.separator, experimentalParseClassName = config.experimentalParseClassName;
    var isSeparatorSingleCharacter = separator.length === 1;
    var firstSeparatorCharacter = separator[0];
    var separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    var parseClassName = function(className) {
        var modifiers = [];
        var bracketDepth = 0;
        var modifierStart = 0;
        var postfixModifierPosition;
        for(var index = 0; index < className.length; index++){
            var currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers: modifiers,
            hasImportantModifier: hasImportantModifier,
            baseClassName: baseClassName,
            maybePostfixModifierPosition: maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) {
        return function(className) {
            return experimentalParseClassName({
                className: className,
                parseClassName: parseClassName
            });
        };
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ var sortModifiers = function(modifiers) {
    var _sortedModifiers;
    if (modifiers.length <= 1) {
        return modifiers;
    }
    var sortedModifiers = [];
    var unsortedModifiers = [];
    modifiers.forEach(function(modifier) {
        var isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            var _sortedModifiers;
            (_sortedModifiers = sortedModifiers).push.apply(_sortedModifiers, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(unsortedModifiers.sort()).concat([
                modifier
            ]));
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    (_sortedModifiers = sortedModifiers).push.apply(_sortedModifiers, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(unsortedModifiers.sort()));
    return sortedModifiers;
};
var createConfigUtils = function(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config)
    }, createClassGroupUtils(config));
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = function(classList, configUtils) {
    var parseClassName = configUtils.parseClassName, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ var classGroupsInConflict = [];
    var classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    var result = '';
    for(var index = classNames.length - 1; index >= 0; index -= 1){
        var originalClassName = classNames[index];
        var _parseClassName = parseClassName(originalClassName), modifiers = _parseClassName.modifiers, hasImportantModifier = _parseClassName.hasImportantModifier, baseClassName = _parseClassName.baseClassName, maybePostfixModifierPosition = _parseClassName.maybePostfixModifierPosition;
        var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        var classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        var variantModifier = sortModifiers(modifiers).join(':');
        var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        var classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
            continue;
        }
        classGroupsInConflict.push(classId);
        var conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(var i = 0; i < conflictGroups.length; ++i){
            var group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    var index = 0;
    var argument;
    var resolvedValue;
    var string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
var toValue = function(mix) {
    if (typeof mix === 'string') {
        return mix;
    }
    var resolvedValue;
    var string = '';
    for(var k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst) {
    for(var _len = arguments.length, createConfigRest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        createConfigRest[_key - 1] = arguments[_key];
    }
    var configUtils;
    var cacheGet;
    var cacheSet;
    var functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        var config = createConfigRest.reduce(function(previousConfig, createConfigCurrent) {
            return createConfigCurrent(previousConfig);
        }, createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        var cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        var result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
var fromTheme = function(key) {
    var themeGetter = function(theme) {
        return theme[key] || [];
    };
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isLength = function(value) {
    return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
};
var isArbitraryLength = function(value) {
    return getIsArbitraryValue(value, 'length', isLengthOnly);
};
var isNumber = function(value) {
    return Boolean(value) && !Number.isNaN(Number(value));
};
var isArbitraryNumber = function(value) {
    return getIsArbitraryValue(value, 'number', isNumber);
};
var isInteger = function(value) {
    return Boolean(value) && Number.isInteger(Number(value));
};
var isPercent = function(value) {
    return value.endsWith('%') && isNumber(value.slice(0, -1));
};
var isArbitraryValue = function(value) {
    return arbitraryValueRegex.test(value);
};
var isTshirtSize = function(value) {
    return tshirtUnitRegex.test(value);
};
var sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
var isArbitrarySize = function(value) {
    return getIsArbitraryValue(value, sizeLabels, isNever);
};
var isArbitraryPosition = function(value) {
    return getIsArbitraryValue(value, 'position', isNever);
};
var imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
var isArbitraryImage = function(value) {
    return getIsArbitraryValue(value, imageLabels, isImage);
};
var isArbitraryShadow = function(value) {
    return getIsArbitraryValue(value, '', isShadow);
};
var isAny = function() {
    return true;
};
var getIsArbitraryValue = function(value, label, testValue) {
    var result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
var isLengthOnly = function(value) {
    return(// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value));
};
var isNever = function() {
    return false;
};
var isShadow = function(value) {
    return shadowRegex.test(value);
};
var isImage = function(value) {
    return imageRegex.test(value);
};
var validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny: isAny,
    isArbitraryImage: isArbitraryImage,
    isArbitraryLength: isArbitraryLength,
    isArbitraryNumber: isArbitraryNumber,
    isArbitraryPosition: isArbitraryPosition,
    isArbitraryShadow: isArbitraryShadow,
    isArbitrarySize: isArbitrarySize,
    isArbitraryValue: isArbitraryValue,
    isInteger: isInteger,
    isLength: isLength,
    isNumber: isNumber,
    isPercent: isPercent,
    isTshirtSize: isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
var getDefaultConfig = function() {
    var colors = fromTheme('colors');
    var spacing = fromTheme('spacing');
    var blur = fromTheme('blur');
    var brightness = fromTheme('brightness');
    var borderColor = fromTheme('borderColor');
    var borderRadius = fromTheme('borderRadius');
    var borderSpacing = fromTheme('borderSpacing');
    var borderWidth = fromTheme('borderWidth');
    var contrast = fromTheme('contrast');
    var grayscale = fromTheme('grayscale');
    var hueRotate = fromTheme('hueRotate');
    var invert = fromTheme('invert');
    var gap = fromTheme('gap');
    var gradientColorStops = fromTheme('gradientColorStops');
    var gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    var inset = fromTheme('inset');
    var margin = fromTheme('margin');
    var opacity = fromTheme('opacity');
    var padding = fromTheme('padding');
    var saturate = fromTheme('saturate');
    var scale = fromTheme('scale');
    var sepia = fromTheme('sepia');
    var skew = fromTheme('skew');
    var space = fromTheme('space');
    var translate = fromTheme('translate');
    var getOverscroll = function() {
        return [
            'auto',
            'contain',
            'none'
        ];
    };
    var getOverflow = function() {
        return [
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    };
    var getSpacingWithAutoAndArbitrary = function() {
        return [
            'auto',
            isArbitraryValue,
            spacing
        ];
    };
    var getSpacingWithArbitrary = function() {
        return [
            isArbitraryValue,
            spacing
        ];
    };
    var getLengthWithEmptyAndArbitrary = function() {
        return [
            '',
            isLength,
            isArbitraryLength
        ];
    };
    var getNumberWithAutoAndArbitrary = function() {
        return [
            'auto',
            isNumber,
            isArbitraryValue
        ];
    };
    var getPositions = function() {
        return [
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    };
    var getLineStyles = function() {
        return [
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    };
    var getBlendModes = function() {
        return [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    };
    var getAlign = function() {
        return [
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    };
    var getZeroAndEmpty = function() {
        return [
            '',
            '0',
            isArbitraryValue
        ];
    };
    var getBreaks = function() {
        return [
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    };
    var getNumberAndArbitrary = function() {
        return [
            isNumber,
            isArbitraryValue
        ];
    };
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getPositions()).concat([
                        isArbitraryValue
                    ])
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal'
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getAlign()))
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal'
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getAlign()), [
                        'baseline'
                    ])
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getAlign()).concat([
                        'baseline'
                    ])
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getLineStyles()).concat([
                        'wavy'
                    ])
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getPositions()).concat([
                        isArbitraryPosition
                    ])
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getLineStyles()).concat([
                        'hidden'
                    ])
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        ''
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getLineStyles()))
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getBlendModes()).concat([
                        'plus-lighter',
                        'plus-darker'
                    ])
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ var mergeConfigs = function(baseConfig, param) {
    var cacheSize = param.cacheSize, prefix = param.prefix, separator = param.separator, experimentalParseClassName = param.experimentalParseClassName, _param_extend = param.extend, extend = _param_extend === void 0 ? {} : _param_extend, _param_override = param.override, override = _param_override === void 0 ? {} : _param_override;
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    for(var configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(var key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
};
var overrideProperty = function(baseObject, overrideKey, overrideValue) {
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
var overrideConfigProperties = function(baseObject, overrideObject) {
    if (overrideObject) {
        for(var key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
var mergeConfigProperties = function(baseObject, mergeObject) {
    if (mergeObject) {
        for(var key in mergeObject){
            var mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
};
var extendTailwindMerge = function(configExtension) {
    for(var _len = arguments.length, createConfig = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        createConfig[_key - 1] = arguments[_key];
    }
    return typeof configExtension === 'function' ? createTailwindMerge.apply(void 0, [
        getDefaultConfig,
        configExtension
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(createConfig))) : createTailwindMerge.apply(void 0, [
        function() {
            return mergeConfigs(getDefaultConfig(), configExtension);
        }
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(createConfig)));
};
var twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
]);

//# sourceMappingURL=db3c6_55c98ec6._.js.map