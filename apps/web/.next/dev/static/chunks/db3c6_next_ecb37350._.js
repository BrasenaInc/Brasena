(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type))) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type)) && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === (typeof node === "undefined" ? "undefined" : _type_of._(node)) && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === (typeof object === "undefined" ? "undefined" : _type_of._(object)) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function createTask() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function react_stack_bottom_frame(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function assign1() {
        return assign;
    },
    searchParamsToUrlQuery: function searchParamsToUrlQuery1() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function urlQueryToSearchParams1() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    var query = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = searchParams.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
            var existing = query[key];
            if (typeof existing === 'undefined') {
                query[key] = value;
            } else if (Array.isArray(existing)) {
                existing.push(value);
            } else {
                query[key] = [
                    existing,
                    value
                ];
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
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    var searchParams = new URLSearchParams();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(query)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (Array.isArray(value)) {
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = value[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var item = _step1.value;
                        searchParams.append(key, stringifyUrlQueryParam(item));
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            } else {
                searchParams.set(key, stringifyUrlQueryParam(value));
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
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = searchParamsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var searchParams = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = searchParams.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var key = _step1.value;
                    target.delete(key);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = searchParams.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var _step_value = _sliced_to_array._(_step2.value, 2), key1 = _step_value[0], value = _step_value[1];
                    target.append(key1, value);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
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
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function formatUrl1() {
        return formatUrl;
    },
    formatWithValidation: function formatWithValidation1() {
        return formatWithValidation;
    },
    urlObjectKeys: function urlObjectKeys1() {
        return urlObjectKeys;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
var slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    var auth = urlObj.auth, hostname = urlObj.hostname;
    var protocol = urlObj.protocol || '';
    var pathname = urlObj.pathname || '';
    var hash = urlObj.hash || '';
    var query = urlObj.query || '';
    var host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && (typeof query === "undefined" ? "undefined" : _type_of._(query)) === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    var search = urlObj.search || query && "?".concat(query) || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}
var urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && (typeof url === "undefined" ? "undefined" : _type_of._(url)) === 'object') {
            Object.keys(url).forEach(function(key) {
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function get() {
        return useMergedRef;
    }
});
var _react = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    var cleanupA = (0, _react.useRef)(null);
    var cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)(function(current) {
        if (current === null) {
            var cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            var cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        var cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return function() {
                return refA(null);
            };
        }
    } else {
        refA.current = current;
        return function() {
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _call_super = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function DecodeError1() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function MiddlewareNotFoundError1() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function MissingStaticPage1() {
        return MissingStaticPage;
    },
    NormalizeError: function NormalizeError1() {
        return NormalizeError;
    },
    PageNotFoundError: function PageNotFoundError1() {
        return PageNotFoundError;
    },
    SP: function SP1() {
        return SP;
    },
    ST: function ST1() {
        return ST;
    },
    WEB_VITALS: function WEB_VITALS1() {
        return WEB_VITALS;
    },
    execOnce: function execOnce1() {
        return execOnce;
    },
    getDisplayName: function getDisplayName1() {
        return getDisplayName;
    },
    getLocationOrigin: function getLocationOrigin1() {
        return getLocationOrigin;
    },
    getURL: function getURL1() {
        return getURL;
    },
    isAbsoluteUrl: function isAbsoluteUrl1() {
        return isAbsoluteUrl;
    },
    isResSent: function isResSent1() {
        return isResSent;
    },
    loadGetInitialProps: function loadGetInitialProps1() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function normalizeRepeatedSlashes1() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function stringifyError1() {
        return stringifyError;
    }
});
var WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    var used = false;
    var result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn.apply(void 0, _to_consumable_array._(args));
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
var isAbsoluteUrl = function(url) {
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    var _window_location = window.location, protocol = _window_location.protocol, hostname = _window_location.hostname, port = _window_location.port;
    return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}
function getURL() {
    var href = window.location.href;
    var origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    var urlParts = url.split('?');
    var urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?".concat(urlParts.slice(1).join('?')) : '');
}
function loadGetInitialProps(App, ctx) {
    return _async_to_generator._(function() {
        var _App_prototype, message, res, _tmp, props, message1;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ("TURBOPACK compile-time truthy", 1) {
                        ;
                        if ((_App_prototype = App.prototype) === null || _App_prototype === void 0 ? void 0 : _App_prototype.getInitialProps) {
                            message = '"'.concat(getDisplayName(App), '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.');
                            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                                value: "E394",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    // when called from _app `ctx` is nested in `ctx`
                    res = ctx.res || ctx.ctx && ctx.ctx.res;
                    if (!!App.getInitialProps) return [
                        3,
                        3
                    ];
                    if (!(ctx.ctx && ctx.Component)) return [
                        3,
                        2
                    ];
                    _tmp = {};
                    return [
                        4,
                        loadGetInitialProps(ctx.Component, ctx.ctx)
                    ];
                case 1:
                    // @ts-ignore pageProps default
                    return [
                        2,
                        (_tmp.pageProps = _state.sent(), _tmp)
                    ];
                case 2:
                    return [
                        2,
                        {}
                    ];
                case 3:
                    return [
                        4,
                        App.getInitialProps(ctx)
                    ];
                case 4:
                    props = _state.sent();
                    if (res && isResSent(res)) {
                        return [
                            2,
                            props
                        ];
                    }
                    if (!props) {
                        message1 = '"'.concat(getDisplayName(App), '.getInitialProps()" should resolve to an object. But found "').concat(props, '" instead.');
                        throw Object.defineProperty(new Error(message1), "__NEXT_ERROR_CODE", {
                            value: "E394",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (Object.keys(props).length === 0 && !ctx.ctx) {
                            console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
                        }
                    }
                    return [
                        2,
                        props
                    ];
            }
        });
    })();
}
var SP = typeof performance !== 'undefined';
var ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every(function(method) {
    return typeof performance[method] === 'function';
});
var DecodeError = /*#__PURE__*/ function(Error1) {
    _inherits._(DecodeError, Error1);
    function DecodeError() {
        _class_call_check._(this, DecodeError);
        return _call_super._(this, DecodeError, arguments);
    }
    return DecodeError;
}(_wrap_native_super._(Error));
var NormalizeError = /*#__PURE__*/ function(Error1) {
    _inherits._(NormalizeError, Error1);
    function NormalizeError() {
        _class_call_check._(this, NormalizeError);
        return _call_super._(this, NormalizeError, arguments);
    }
    return NormalizeError;
}(_wrap_native_super._(Error));
var PageNotFoundError = /*#__PURE__*/ function(Error1) {
    _inherits._(PageNotFoundError, Error1);
    function PageNotFoundError(page) {
        _class_call_check._(this, PageNotFoundError);
        var _this;
        _this = _call_super._(this, PageNotFoundError);
        _this.code = 'ENOENT';
        _this.name = 'PageNotFoundError';
        _this.message = "Cannot find module for page: ".concat(page);
        return _this;
    }
    return PageNotFoundError;
}(_wrap_native_super._(Error));
var MissingStaticPage = /*#__PURE__*/ function(Error1) {
    _inherits._(MissingStaticPage, Error1);
    function MissingStaticPage(page, message) {
        _class_call_check._(this, MissingStaticPage);
        var _this;
        _this = _call_super._(this, MissingStaticPage);
        _this.message = "Failed to load static file for page: ".concat(page, " ").concat(message);
        return _this;
    }
    return MissingStaticPage;
}(_wrap_native_super._(Error));
var MiddlewareNotFoundError = /*#__PURE__*/ function(Error1) {
    _inherits._(MiddlewareNotFoundError, Error1);
    function MiddlewareNotFoundError() {
        _class_call_check._(this, MiddlewareNotFoundError);
        var _this;
        _this = _call_super._(this, MiddlewareNotFoundError);
        _this.code = 'ENOENT';
        _this.message = "Cannot find the middleware module";
        return _this;
    }
    return MiddlewareNotFoundError;
}(_wrap_native_super._(Error));
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function get() {
        return isLocalURL;
    }
});
var _utils = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
var _hasbasepath = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        var locationOrigin = (0, _utils.getLocationOrigin)();
        var resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function get() {
        return errorOnce;
    }
});
var errorOnce = function(_) {};
if ("TURBOPACK compile-time truthy", 1) {
    var errors = new Set();
    errorOnce = function(msg) {
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
var _object_spread = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _object_without_properties = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_without_properties.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function _default() {
        return LinkComponent;
    },
    useLinkStatus: function useLinkStatus1() {
        return useLinkStatus;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _formaturl = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _usemergedref = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
var _utils = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
var _addbasepath = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
var _warnonce = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
var _links = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
var _islocalurl = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _erroronce = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    var eventTarget = event.currentTarget;
    var target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        var nodeName = e.currentTarget.nodeName;
        // anchors inside an svg have a lowercase nodeName
        var isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            var isDefaultPrevented = false;
            onNavigate({
                preventDefault: function() {
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        var dispatchNavigateAction = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)").dispatchNavigateAction;
        _react.default.startTransition(function() {
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll !== null && scroll !== void 0 ? scroll : true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    var _ref = _sliced_to_array._((0, _react.useOptimistic)(_links.IDLE_LINK_STATUS), 2), linkStatus = _ref[0], setOptimisticLinkStatus = _ref[1];
    var children;
    var linkInstanceRef = (0, _react.useRef)(null);
    var hrefProp = props.href, asProp = props.as, childrenProp = props.children, tmp = props.prefetch, prefetchProp = tmp === void 0 ? null : tmp, passHref = props.passHref, replace = props.replace, shallow = props.shallow, scroll = props.scroll, onClick = props.onClick, onMouseEnterProp = props.onMouseEnter, onTouchStartProp = props.onTouchStart, _props_legacyBehavior = props.legacyBehavior, legacyBehavior = _props_legacyBehavior === void 0 ? false : _props_legacyBehavior, onNavigate = props.onNavigate, forwardedRef = props.ref, unstable_dynamicOnHover = props.unstable_dynamicOnHover, restProps = _object_without_properties._(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior",
        "onNavigate",
        "ref",
        "unstable_dynamicOnHover"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    var router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    var prefetchEnabled = prefetchProp !== false;
    var fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        var createPropError = function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        };
        // TypeScript trick for type-guarding:
        var requiredPropsGuard = {
            href: true
        };
        var requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach(function(key) {
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && _type_of._(props[key]) !== 'object') {
                    throw createPropError({
                        key: key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : _type_of._(props[key])
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                var _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        var optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        var optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach(function(key) {
            var valType = _type_of._(props[key]);
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key: key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key: key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key: key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key: key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                var _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            var href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if ((typeof hrefProp === "undefined" ? "undefined" : _type_of._(hrefProp)) === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                var hasDynamicSegment = href.split('/').some(function(segment) {
                    return segment.startsWith('[') && segment.endsWith(']');
                });
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `".concat(href, "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href")), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    var _react_default_useMemo = _react.default.useMemo({
        "LinkComponent.useMemo[_react_default_useMemo]": function() {
            var resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo[_react_default_useMemo]"], [
        hrefProp,
        asProp
    ]), href1 = _react_default_useMemo.href, as = _react_default_useMemo.as;
    // This will return the first child, if multiple are provided it will throw an error
    var child;
    if (legacyBehavior) {
        if ((children === null || children === void 0 ? void 0 : children.$$typeof) === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `'.concat(hrefProp, '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'));
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `'.concat(hrefProp, '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link'));
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `".concat(hrefProp, "` but one child is required https://nextjs.org/docs/messages/link-no-children")), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `".concat(hrefProp, "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children") + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children === null || children === void 0 ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    var childRef = legacyBehavior ? child && (typeof child === "undefined" ? "undefined" : _type_of._(child)) === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    var observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": function(element) {
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href1, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": function() {
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href1,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    var mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    var childProps = {
        ref: mergedRef,
        onClick: function onClick1(e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href1, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter: function onMouseEnter(e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            var upgradeToDynamicPrefetch;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            var upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    var link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", _object_spread_props._(_object_spread._({}, restProps, childProps), {
            children: children
        }));
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
var LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
var useLinkStatus = function() {
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _instanceof = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var _$r = e.length;
                if (_$r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = _$r;
                var f = t === _$r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var _$r = getLens(e);
                var t = _$r[0];
                var f = _$r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var _$r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    _$r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = _$r >> 16 & 255;
                    u[a++] = _$r >> 8 & 255;
                    u[a++] = _$r & 255;
                }
                if (o === 2) {
                    _$r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = _$r & 255;
                }
                if (o === 1) {
                    _$r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = _$r >> 8 & 255;
                    u[a++] = _$r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var _$r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    _$r = e[f - 1];
                    i.push(t[_$r >> 2] + t[_$r << 4 & 63] + "==");
                } else if (n === 2) {
                    _$r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[_$r >> 10] + t[_$r >> 4 & 63] + t[_$r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var _$r = {
                        foo: function foo() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(_$r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, _$r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function get() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function get() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var _$r = new Uint8Array(e);
                Object.setPrototypeOf(_$r, Buffer.prototype);
                return _$r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + (typeof e === "undefined" ? "undefined" : _type_of._(e)));
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + (typeof e === "undefined" ? "undefined" : _type_of._(e)));
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var _$t = byteLength(e, r) | 0;
                var f = createBuffer(_$t);
                var n = f.write(e, r);
                if (n !== _$t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var _$r = e.length < 0 ? 0 : checked(e.length) | 0;
                var _$t = createBuffer(_$r);
                for(var f = 0; f < _$r; f += 1){
                    _$t[f] = e[f] & 255;
                }
                return _$t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var _$r = checked(e.length) | 0;
                    var _$t = createBuffer(_$r);
                    if (_$t.length === 0) {
                        return _$t;
                    }
                    e.copy(_$t, 0, 0, _$r);
                    return _$t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var _$t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(_$t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        _$t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (_$t < f) return -1;
                if (f < _$t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var _$t;
                if (r === undefined) {
                    r = 0;
                    for(_$t = 0; _$t < e.length; ++_$t){
                        r += e[_$t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(_$t = 0; _$t < e.length; ++_$t){
                    var i = e[_$t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + (typeof e === "undefined" ? "undefined" : _type_of._(e)));
                }
                var _$t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && _$t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return _$t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return _$t * 2;
                        case "hex":
                            return _$t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var _$r = 0; _$r < e; _$r += 2){
                    swap(this, _$r, _$r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var _$r = 0; _$r < e; _$r += 4){
                    swap(this, _$r, _$r + 3);
                    swap(this, _$r + 1, _$r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var _$r = 0; _$r < e; _$r += 8){
                    swap(this, _$r, _$r + 7);
                    swap(this, _$r + 1, _$r + 6);
                    swap(this, _$r + 2, _$r + 5);
                    swap(this, _$r + 3, _$r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var _$t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, _$t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > _$t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + (typeof e === "undefined" ? "undefined" : _type_of._(e)));
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var _$r = e.length;
                if (_$r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var _$t = "";
                var f = 0;
                while(f < _$r){
                    _$t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return _$t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var _$t = this.length;
                e = ~~e;
                r = r === undefined ? _$t : ~~r;
                if (e < 0) {
                    e += _$t;
                    if (e < 0) e = 0;
                } else if (e > _$t) {
                    e = _$t;
                }
                if (r < 0) {
                    r += _$t;
                    if (r < 0) r = 0;
                } else if (r > _$t) {
                    r = _$t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var _$t = this[e] | this[e + 1] << 8;
                return _$t & 32768 ? _$t | 4294901760 : _$t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var _$t = this[e + 1] | this[e] << 8;
                return _$t & 32768 ? _$t | 4294901760 : _$t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var _$t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    _$t = e.charCodeAt(o);
                    if (_$t > 55295 && _$t < 57344) {
                        if (!n) {
                            if (_$t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = _$t;
                            continue;
                        }
                        if (_$t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = _$t;
                            continue;
                        }
                        _$t = (n - 55296 << 10 | _$t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (_$t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(_$t);
                    } else if (_$t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(_$t >> 6 | 192, _$t & 63 | 128);
                    } else if (_$t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(_$t >> 12 | 224, _$t >> 6 & 63 | 128, _$t & 63 | 128);
                    } else if (_$t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(_$t >> 18 | 240, _$t >> 12 & 63 | 128, _$t >> 6 & 63 | 128, _$t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var _$r = [];
                for(var _$t = 0; _$t < e.length; ++_$t){
                    _$r.push(e.charCodeAt(_$t) & 255);
                }
                return _$r;
            }
            function utf16leToBytes(e, r) {
                var _$t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    _$t = e.charCodeAt(o);
                    f = _$t >> 8;
                    n = _$t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return _instanceof._(e, r) || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var _$r = new Array(256);
                for(var _$t = 0; _$t < 16; ++_$t){
                    var f = _$t * 16;
                    for(var n = 0; n < 16; ++n){
                        _$r[f + n] = e[_$t] + e[n];
                    }
                }
                return _$r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Developer/brasena/Brasena/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of._(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: function() {
        return RequestCookies;
    },
    ResponseCookies: function() {
        return ResponseCookies;
    },
    parseCookie: function() {
        return parseCookie;
    },
    parseSetCookie: function() {
        return parseSetCookie;
    },
    stringifyCookie: function() {
        return stringifyCookie;
    }
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    var attrs = [
        "path" in c && c.path && "Path=".concat(c.path),
        "expires" in c && (c.expires || c.expires === 0) && "Expires=".concat((typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()),
        "maxAge" in c && typeof c.maxAge === "number" && "Max-Age=".concat(c.maxAge),
        "domain" in c && c.domain && "Domain=".concat(c.domain),
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && "SameSite=".concat(c.sameSite),
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && "Priority=".concat(c.priority)
    ].filter(Boolean);
    var stringified = "".concat(c.name, "=").concat(encodeURIComponent((_a = c.value) != null ? _a : ""));
    return attrs.length === 0 ? stringified : "".concat(stringified, "; ").concat(attrs.join("; "));
}
function parseCookie(cookie) {
    var map = /* @__PURE__ */ new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = cookie.split(/; */)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var pair = _step.value;
            if (!pair) continue;
            var splitAt = pair.indexOf("=");
            if (splitAt === -1) {
                map.set(pair, "true");
                continue;
            }
            var _ref = [
                pair.slice(0, splitAt),
                pair.slice(splitAt + 1)
            ], key = _ref[0], value = _ref[1];
            try {
                map.set(key, decodeURIComponent(value != null ? value : "true"));
            } catch (unused) {}
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
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    var _parseCookie = _to_array._(parseCookie(setCookie)), _parseCookie_ = _sliced_to_array._(_parseCookie[0], 2), name = _parseCookie_[0], value = _parseCookie_[1], attributes = _parseCookie.slice(1);
    var _Object_fromEntries = Object.fromEntries(attributes.map(function(param) {
        var _param = _sliced_to_array._(param, 2), key = _param[0], value2 = _param[1];
        return [
            key.toLowerCase().replace(/-/g, ""),
            value2
        ];
    })), domain = _Object_fromEntries.domain, expires = _Object_fromEntries.expires, httponly = _Object_fromEntries.httponly, maxage = _Object_fromEntries.maxage, path = _Object_fromEntries.path, samesite = _Object_fromEntries.samesite, secure = _Object_fromEntries.secure, partitioned = _Object_fromEntries.partitioned, priority = _Object_fromEntries.priority;
    var cookie = _object_spread._(_object_spread_props._(_object_spread._({
        name: name,
        value: decodeURIComponent(value),
        domain: domain
    }, expires && {
        expires: new Date(expires)
    }, httponly && {
        httpOnly: true
    }, typeof maxage === "string" && {
        maxAge: Number(maxage)
    }), {
        path: path
    }), samesite && {
        sameSite: parseSameSite(samesite)
    }, secure && {
        secure: true
    }, priority && {
        priority: parsePriority(priority)
    }, partitioned && {
        partitioned: true
    });
    return compact(cookie);
}
function compact(t) {
    var newT = {};
    for(var key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = /*#__PURE__*/ function() {
    function RequestCookies(requestHeaders) {
        _class_call_check._(this, RequestCookies);
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        var header = requestHeaders.get("cookie");
        if (header) {
            var parsed = parseCookie(header);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = parsed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array._(_step.value, 2), name = _step_value[0], value = _step_value[1];
                    this._parsed.set(name, {
                        name: name,
                        value: value
                    });
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
    }
    _create_class._(RequestCookies, [
        {
            key: Symbol.iterator,
            value: function value() {
                return this._parsed[Symbol.iterator]();
            }
        },
        {
            key: "size",
            get: /**
   * The amount of cookies received from the client
   */ function get() {
                return this._parsed.size;
            }
        },
        {
            key: "get",
            value: function get() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var name = typeof args[0] === "string" ? args[0] : args[0].name;
                return this._parsed.get(name);
            }
        },
        {
            key: "getAll",
            value: function getAll() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _a;
                var all = Array.from(this._parsed);
                if (!args.length) {
                    return all.map(function(param) {
                        var _param = _sliced_to_array._(param, 2), _ = _param[0], value = _param[1];
                        return value;
                    });
                }
                var name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
                return all.filter(function(param) {
                    var _param = _sliced_to_array._(param, 1), n = _param[0];
                    return n === name;
                }).map(function(param) {
                    var _param = _sliced_to_array._(param, 2), _ = _param[0], value = _param[1];
                    return value;
                });
            }
        },
        {
            key: "has",
            value: function has(name) {
                return this._parsed.has(name);
            }
        },
        {
            key: "set",
            value: function set() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _ref = _sliced_to_array._(args.length === 1 ? [
                    args[0].name,
                    args[0].value
                ] : args, 2), name = _ref[0], value = _ref[1];
                var map = this._parsed;
                map.set(name, {
                    name: name,
                    value: value
                });
                this._headers.set("cookie", Array.from(map).map(function(param) {
                    var _param = _sliced_to_array._(param, 2), _ = _param[0], value2 = _param[1];
                    return stringifyCookie(value2);
                }).join("; "));
                return this;
            }
        },
        {
            /**
   * Delete the cookies matching the passed name or names in the request.
   */ key: "delete",
            value: function _delete(names) {
                var map = this._parsed;
                var result = !Array.isArray(names) ? map.delete(names) : names.map(function(name) {
                    return map.delete(name);
                });
                this._headers.set("cookie", Array.from(map).map(function(param) {
                    var _param = _sliced_to_array._(param, 2), _ = _param[0], value = _param[1];
                    return stringifyCookie(value);
                }).join("; "));
                return result;
            }
        },
        {
            /**
   * Delete all the cookies in the cookies in the request.
   */ key: "clear",
            value: function clear() {
                this.delete(Array.from(this._parsed.keys()));
                return this;
            }
        },
        {
            /**
   * Format the cookies in the request as a string for logging
   */ key: Symbol.for("edge-runtime.inspect.custom"),
            value: function value() {
                return "RequestCookies ".concat(JSON.stringify(Object.fromEntries(this._parsed)));
            }
        },
        {
            key: "toString",
            value: function toString() {
                return _to_consumable_array._(this._parsed.values()).map(function(v) {
                    return "".concat(v.name, "=").concat(encodeURIComponent(v.value));
                }).join("; ");
            }
        }
    ]);
    return RequestCookies;
}();
// src/response-cookies.ts
var ResponseCookies = /*#__PURE__*/ function() {
    function ResponseCookies(responseHeaders) {
        _class_call_check._(this, ResponseCookies);
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        var setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        var cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = cookieStrings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var cookieString = _step.value;
                var parsed = parseSetCookie(cookieString);
                if (parsed) this._parsed.set(parsed.name, parsed);
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
    _create_class._(ResponseCookies, [
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ key: "get",
            value: function get() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var key = typeof args[0] === "string" ? args[0] : args[0].name;
                return this._parsed.get(key);
            }
        },
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ key: "getAll",
            value: function getAll() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _a;
                var all = Array.from(this._parsed.values());
                if (!args.length) {
                    return all;
                }
                var key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
                return all.filter(function(c) {
                    return c.name === key;
                });
            }
        },
        {
            key: "has",
            value: function has(name) {
                return this._parsed.has(name);
            }
        },
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ key: "set",
            value: function set() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _ref = _sliced_to_array._(args.length === 1 ? [
                    args[0].name,
                    args[0].value,
                    args[0]
                ] : args, 3), name = _ref[0], value = _ref[1], cookie = _ref[2];
                var map = this._parsed;
                map.set(name, normalizeCookie(_object_spread._({
                    name: name,
                    value: value
                }, cookie)));
                replace(map, this._headers);
                return this;
            }
        },
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ key: "delete",
            value: function _delete() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _ref = _sliced_to_array._(typeof args[0] === "string" ? [
                    args[0]
                ] : [
                    args[0].name,
                    args[0]
                ], 2), name = _ref[0], options = _ref[1];
                return this.set(_object_spread_props._(_object_spread._({}, options), {
                    name: name,
                    value: "",
                    expires: /* @__PURE__ */ new Date(0)
                }));
            }
        },
        {
            key: Symbol.for("edge-runtime.inspect.custom"),
            value: function value() {
                return "ResponseCookies ".concat(JSON.stringify(Object.fromEntries(this._parsed)));
            }
        },
        {
            key: "toString",
            value: function toString() {
                return _to_consumable_array._(this._parsed.values()).map(stringifyCookie).join("; ");
            }
        }
    ]);
    return ResponseCookies;
}();
function replace(bag, headers) {
    headers.delete("set-cookie");
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = bag[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), value = _step_value[1];
            var serialized = stringifyCookie(value);
            headers.append("set-cookie", serialized);
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
function normalizeCookie() {
    var cookie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        name: "",
        value: ""
    };
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies: RequestCookies,
    ResponseCookies: ResponseCookies,
    parseCookie: parseCookie,
    parseSetCookie: parseSetCookie,
    stringifyCookie: stringifyCookie
});
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null,
    stringifyCookie: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function RequestCookies() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function ResponseCookies() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function stringifyCookie() {
        return _cookies.stringifyCookie;
    }
});
var _cookies = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-client] (ecmascript)"); //# sourceMappingURL=cookies.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function get() {
        return ReflectAdapter;
    }
});
var ReflectAdapter = /*#__PURE__*/ function() {
    function ReflectAdapter() {
        _class_call_check._(this, ReflectAdapter);
    }
    _create_class._(ReflectAdapter, null, [
        {
            key: "get",
            value: function get(target, prop, receiver) {
                var value = Reflect.get(target, prop, receiver);
                if (typeof value === 'function') {
                    return value.bind(target);
                }
                return value;
            }
        },
        {
            key: "set",
            value: function set(target, prop, value, receiver) {
                return Reflect.set(target, prop, value, receiver);
            }
        },
        {
            key: "has",
            value: function has(target, prop) {
                return Reflect.has(target, prop);
            }
        },
        {
            key: "deleteProperty",
            value: function deleteProperty(target, prop) {
                return Reflect.deleteProperty(target, prop);
            }
        }
    ]);
    return ReflectAdapter;
} //# sourceMappingURL=reflect.js.map
();
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    createCookiesWithMutableAccessCheck: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function MutableRequestCookiesAdapter1() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function ReadonlyRequestCookiesError1() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function RequestCookiesAdapter1() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function appendMutableCookies1() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function areCookiesMutableInCurrentPhase1() {
        return areCookiesMutableInCurrentPhase;
    },
    createCookiesWithMutableAccessCheck: function createCookiesWithMutableAccessCheck1() {
        return createCookiesWithMutableAccessCheck;
    },
    getModifiedCookieValues: function getModifiedCookieValues1() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function responseCookiesToRequestCookies1() {
        return responseCookiesToRequestCookies;
    }
});
var _cookies = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)");
var _reflect = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var _workasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _actionrevalidationkind = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-client] (ecmascript)");
var ReadonlyRequestCookiesError = /*#__PURE__*/ function(Error1) {
    _inherits._(ReadonlyRequestCookiesError, Error1);
    function ReadonlyRequestCookiesError() {
        _class_call_check._(this, ReadonlyRequestCookiesError);
        return _call_super._(this, ReadonlyRequestCookiesError, [
            'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options'
        ]);
    }
    _create_class._(ReadonlyRequestCookiesError, null, [
        {
            key: "callable",
            value: function callable() {
                throw new ReadonlyRequestCookiesError();
            }
        }
    ]);
    return ReadonlyRequestCookiesError;
}(_wrap_native_super._(Error));
var RequestCookiesAdapter = /*#__PURE__*/ function() {
    function RequestCookiesAdapter() {
        _class_call_check._(this, RequestCookiesAdapter);
    }
    _create_class._(RequestCookiesAdapter, null, [
        {
            key: "seal",
            value: function seal(cookies) {
                return new Proxy(cookies, {
                    get: function get(target, prop, receiver) {
                        switch(prop){
                            case 'clear':
                            case 'delete':
                            case 'set':
                                return ReadonlyRequestCookiesError.callable;
                            default:
                                return _reflect.ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
            }
        }
    ]);
    return RequestCookiesAdapter;
}();
var SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    var modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    var modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    var resCookies = new _cookies.ResponseCookies(headers);
    var returnedCookies = resCookies.getAll();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Set the modified cookies as fallbacks.
        for(var _iterator = modifiedCookieValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var cookie = _step.value;
            resCookies.set(cookie);
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
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        // Set the original cookies as the final values.
        for(var _iterator1 = returnedCookies[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var cookie1 = _step1.value;
            resCookies.set(cookie1);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return true;
}
var MutableRequestCookiesAdapter = /*#__PURE__*/ function() {
    function MutableRequestCookiesAdapter() {
        _class_call_check._(this, MutableRequestCookiesAdapter);
    }
    _create_class._(MutableRequestCookiesAdapter, null, [
        {
            key: "wrap",
            value: function wrap(cookies, onUpdateCookies) {
                var responseCookies = new _cookies.ResponseCookies(new Headers());
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = cookies.getAll()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cookie = _step.value;
                        responseCookies.set(cookie);
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
                var modifiedValues = [];
                var modifiedCookies = new Set();
                var updateResponseCookies = function() {
                    // TODO-APP: change method of getting workStore
                    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
                    if (workStore) {
                        workStore.pathWasRevalidated = _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic;
                    }
                    var allCookies = responseCookies.getAll();
                    modifiedValues = allCookies.filter(function(c) {
                        return modifiedCookies.has(c.name);
                    });
                    if (onUpdateCookies) {
                        var serializedCookies = [];
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = modifiedValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var cookie = _step.value;
                                var tempCookies = new _cookies.ResponseCookies(new Headers());
                                tempCookies.set(cookie);
                                serializedCookies.push(tempCookies.toString());
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
                        onUpdateCookies(serializedCookies);
                    }
                };
                var wrappedCookies = new Proxy(responseCookies, {
                    get: function get(target, prop, receiver) {
                        switch(prop){
                            // A special symbol to get the modified cookie values
                            case SYMBOL_MODIFY_COOKIE_VALUES:
                                return modifiedValues;
                            // TODO: Throw error if trying to set a cookie after the response
                            // headers have been set.
                            case 'delete':
                                return function() {
                                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                        args[_key] = arguments[_key];
                                    }
                                    modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                                    try {
                                        var _target;
                                        (_target = target).delete.apply(_target, _to_consumable_array._(args));
                                        return wrappedCookies;
                                    } finally{
                                        updateResponseCookies();
                                    }
                                };
                            case 'set':
                                return function() {
                                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                        args[_key] = arguments[_key];
                                    }
                                    modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                                    try {
                                        var _target;
                                        (_target = target).set.apply(_target, _to_consumable_array._(args));
                                        return wrappedCookies;
                                    } finally{
                                        updateResponseCookies();
                                    }
                                };
                            default:
                                return _reflect.ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
                return wrappedCookies;
            }
        }
    ]);
    return MutableRequestCookiesAdapter;
}();
function createCookiesWithMutableAccessCheck(requestStore) {
    var wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get: function get(target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _target;
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        (_target = target).delete.apply(_target, _to_consumable_array._(args));
                        return wrappedCookies;
                    };
                case 'set':
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _target;
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        (_target = target).set.apply(_target, _to_consumable_array._(args));
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    var requestCookies = new _cookies.RequestCookies(new Headers());
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = responseCookies.getAll()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var cookie = _step.value;
            requestCookies.set(cookie);
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
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _to_consumable_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function get() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (typeof obj === "undefined" ? "undefined" : _type_of._(obj)) !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
var cache = typeof _react.cache === 'function' ? _react.cache : function(fn) {
    return fn;
};
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
var logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
var flushCurrentErrorIfNew = cache(function(key) {
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var message = getMessage.apply(void 0, _to_consumable_array._(args));
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            var callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                var key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function get() {
        return afterTaskAsyncStorageInstance;
    }
});
var _asynclocalstorage = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
var afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=after-task-async-storage-instance.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function get() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
});
var _aftertaskasyncstorageinstance = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=after-task-async-storage.external.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function isRequestAPICallableInsideAfter1() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function throwForSearchParamsAccessInUseCache1() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function throwWithStaticGenerationBailoutErrorWithDynamicError1() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
var _staticgenerationbailout = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
var _aftertaskasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used ').concat(expression, ". See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    var _workStore, _invalidDynamicUsageError;
    var error = Object.defineProperty(new Error("Route ".concat(workStore.route, ' used `searchParams` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await `searchParams` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    (_invalidDynamicUsageError = (_workStore = workStore).invalidDynamicUsageError) !== null && _invalidDynamicUsageError !== void 0 ? _invalidDynamicUsageError : _workStore.invalidDynamicUsageError = error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    var afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function RenderStage1() {
        return RenderStage;
    },
    StagedRenderingController: function StagedRenderingController1() {
        return StagedRenderingController;
    }
});
var _invarianterror = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _promisewithresolvers = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    RenderStage[RenderStage["Static"] = 2] = "Static";
    RenderStage[RenderStage["Runtime"] = 3] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 4] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 5] = "Abandoned";
    return RenderStage;
}({});
var StagedRenderingController = /*#__PURE__*/ function() {
    function StagedRenderingController() {
        var _this = this;
        var abortSignal = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, hasRuntimePrefetch = arguments.length > 1 ? arguments[1] : void 0;
        _class_call_check._(this, StagedRenderingController);
        this.abortSignal = abortSignal;
        this.hasRuntimePrefetch = hasRuntimePrefetch;
        this.currentStage = 1;
        this.staticInterruptReason = null;
        this.runtimeInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.mayAbandon = false;
        if (abortSignal) {
            abortSignal.addEventListener('abort', function() {
                var reason = abortSignal.reason;
                if (_this.currentStage < 3) {
                    _this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    _this.runtimeStagePromise.reject(reason);
                }
                if (_this.currentStage < 4 || _this.currentStage === 5) {
                    _this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    _this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
            this.mayAbandon = true;
        }
    }
    _create_class._(StagedRenderingController, [
        {
            key: "onStage",
            value: function onStage(stage, callback) {
                if (this.currentStage >= stage) {
                    callback();
                } else if (stage === 3) {
                    this.runtimeStageListeners.push(callback);
                } else if (stage === 4) {
                    this.dynamicStageListeners.push(callback);
                } else {
                    // This should never happen
                    throw Object.defineProperty(new _invarianterror.InvariantError("Invalid render stage: ".concat(stage)), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        },
        {
            key: "canSyncInterrupt",
            value: function canSyncInterrupt() {
                // If we haven't started the render yet, it can't be interrupted.
                if (this.currentStage === 1) {
                    return false;
                }
                var boundaryStage = this.hasRuntimePrefetch ? 4 : 3;
                return this.currentStage < boundaryStage;
            }
        },
        {
            key: "syncInterruptCurrentStageWithReason",
            value: function syncInterruptCurrentStageWithReason(reason) {
                if (this.currentStage === 1) {
                    return;
                }
                // If Sync IO occurs during the initial (abandonable) render, we'll retry it,
                // so we want a slightly different flow.
                // See the implementation of `abandonRenderImpl` for more explanation.
                if (this.mayAbandon) {
                    return this.abandonRenderImpl();
                }
                // If we're in the final render, we cannot abandon it. We need to advance to the Dynamic stage
                // and capture the interruption reason.
                switch(this.currentStage){
                    case 2:
                        {
                            this.staticInterruptReason = reason;
                            this.advanceStage(4);
                            return;
                        }
                    case 3:
                        {
                            // We only error for Sync IO in the runtime stage if the route
                            // is configured to use runtime prefetching.
                            // We do this to reflect the fact that during a runtime prefetch,
                            // Sync IO aborts aborts the render.
                            // Note that `canSyncInterrupt` should prevent us from getting here at all
                            // if runtime prefetching isn't enabled.
                            if (this.hasRuntimePrefetch) {
                                this.runtimeInterruptReason = reason;
                                this.advanceStage(4);
                            }
                            return;
                        }
                    case 4:
                    case 5:
                    default:
                }
            }
        },
        {
            key: "getStaticInterruptReason",
            value: function getStaticInterruptReason() {
                return this.staticInterruptReason;
            }
        },
        {
            key: "getRuntimeInterruptReason",
            value: function getRuntimeInterruptReason() {
                return this.runtimeInterruptReason;
            }
        },
        {
            key: "getStaticStageEndTime",
            value: function getStaticStageEndTime() {
                return this.staticStageEndTime;
            }
        },
        {
            key: "getRuntimeStageEndTime",
            value: function getRuntimeStageEndTime() {
                return this.runtimeStageEndTime;
            }
        },
        {
            key: "abandonRender",
            value: function abandonRender() {
                if (!this.mayAbandon) {
                    throw Object.defineProperty(new _invarianterror.InvariantError('`abandonRender` called on a stage controller that cannot be abandoned.'), "__NEXT_ERROR_CODE", {
                        value: "E938",
                        enumerable: false,
                        configurable: true
                    });
                }
                this.abandonRenderImpl();
            }
        },
        {
            key: "abandonRenderImpl",
            value: function abandonRenderImpl() {
                // In staged rendering, only the initial render is abandonable.
                // We can abandon the initial render if
                //   1. We notice a cache miss, and need to wait for caches to fill
                //   2. A sync IO error occurs, and the render should be interrupted
                //      (this might be a lazy intitialization of a module,
                //       so we still want to restart in this case and see if it still occurs)
                // In either case, we'll be doing another render after this one,
                // so we only want to unblock the Runtime stage, not Dynamic, because
                // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
                var currentStage = this.currentStage;
                switch(currentStage){
                    case 2:
                        {
                            this.currentStage = 5;
                            this.resolveRuntimeStage();
                            return;
                        }
                    case 3:
                        {
                            this.currentStage = 5;
                            return;
                        }
                    case 4:
                    case 1:
                    case 5:
                        break;
                    default:
                        {
                            currentStage;
                        }
                }
            }
        },
        {
            key: "advanceStage",
            value: function advanceStage(stage) {
                // If we're already at the target stage or beyond, do nothing.
                // (this can happen e.g. if sync IO advanced us to the dynamic stage)
                if (stage <= this.currentStage) {
                    return;
                }
                var currentStage = this.currentStage;
                this.currentStage = stage;
                if (currentStage < 3 && stage >= 3) {
                    this.staticStageEndTime = performance.now() + performance.timeOrigin;
                    this.resolveRuntimeStage();
                }
                if (currentStage < 4 && stage >= 4) {
                    this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
                    this.resolveDynamicStage();
                    return;
                }
            }
        },
        {
            /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */ key: "resolveRuntimeStage",
            value: function resolveRuntimeStage() {
                var runtimeListeners = this.runtimeStageListeners;
                for(var i = 0; i < runtimeListeners.length; i++){
                    runtimeListeners[i]();
                }
                runtimeListeners.length = 0;
                this.runtimeStagePromise.resolve();
            }
        },
        {
            /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */ key: "resolveDynamicStage",
            value: function resolveDynamicStage() {
                var dynamicListeners = this.dynamicStageListeners;
                for(var i = 0; i < dynamicListeners.length; i++){
                    dynamicListeners[i]();
                }
                dynamicListeners.length = 0;
                this.dynamicStagePromise.resolve();
            }
        },
        {
            key: "getStagePromise",
            value: function getStagePromise(stage) {
                switch(stage){
                    case 3:
                        {
                            return this.runtimeStagePromise.promise;
                        }
                    case 4:
                        {
                            return this.dynamicStagePromise.promise;
                        }
                    default:
                        {
                            stage;
                            throw Object.defineProperty(new _invarianterror.InvariantError("Invalid render stage: ".concat(stage)), "__NEXT_ERROR_CODE", {
                                value: "E881",
                                enumerable: false,
                                configurable: true
                            });
                        }
                }
            }
        },
        {
            key: "waitForStage",
            value: function waitForStage(stage) {
                return this.getStagePromise(stage);
            }
        },
        {
            key: "delayUntilStage",
            value: function delayUntilStage(stage, displayName, resolvedValue) {
                var ioTriggerPromise = this.getStagePromise(stage);
                var promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
                // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
                // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
                // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
                if (this.abortSignal) {
                    promise.catch(ignoreReject);
                }
                return promise;
            }
        }
    ]);
    return StagedRenderingController;
}();
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    var promise = new Promise(function(resolve, reject) {
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _define_property = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cookies", {
    enumerable: true,
    get: function get() {
        return cookies;
    }
});
var _requestcookies = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-client] (ecmascript)");
var _cookies = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)");
var _workasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
var _dynamicrendering = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
var _staticgenerationbailout = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
var _dynamicrenderingutils = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
var _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
var _utils = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _stagedrendering = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function cookies() {
    var callingExpression = 'cookies';
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error("Route ".concat(workStore.route, " used `cookies()` inside `after()`. This is not supported. If you need this data inside an `after()` callback, use `cookies()` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after")), "__NEXT_ERROR_CODE", {
                value: "E843",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            var underlyingCookies = createEmptyCookies();
            return makeUntrackedCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(workStore.route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used `cookies()`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering')), "__NEXT_ERROR_CODE", {
                value: "E849",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    var _workStore, _invalidDynamicUsageError;
                    var error = Object.defineProperty(new Error("Route ".concat(workStore.route, ' used `cookies()` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use `cookies()` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
                        value: "E831",
                        enumerable: false,
                        configurable: true
                    });
                    Error.captureStackTrace(error, cookies);
                    (_invalidDynamicUsageError = (_workStore = workStore).invalidDynamicUsageError) !== null && _invalidDynamicUsageError !== void 0 ? _invalidDynamicUsageError : _workStore.invalidDynamicUsageError = error;
                    throw error;
                case 'unstable-cache':
                    throw Object.defineProperty(new Error("Route ".concat(workStore.route, " used `cookies()` inside a function cached with `unstable_cache()`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use `cookies()` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache")), "__NEXT_ERROR_CODE", {
                        value: "E846",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                    return makeHangingCookies(workStore, workUnitStore);
                case 'prerender-client':
                    var exportName = '`cookies`';
                    throw Object.defineProperty(new _invarianterror.InvariantError("".concat(exportName, " must not be used within a Client Component. Next.js should be preventing ").concat(exportName, " from being included in Client Components statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // We need track dynamic access here eagerly to keep continuity with
                    // how cookies has worked in PPR without cacheComponents.
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // We track dynamic access here so we don't need to wrap the cookies
                    // in individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedCookies(workUnitStore.cookies));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedCookies(workUnitStore.cookies);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    var underlyingCookies1;
                    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(workUnitStore)) {
                        // We can't conditionally return different types here based on the context.
                        // To avoid confusion, we always return the readonly type here.
                        underlyingCookies1 = workUnitStore.userspaceMutableCookies;
                    } else {
                        underlyingCookies1 = workUnitStore.cookies;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedCookiesWithDevWarnings(workUnitStore, underlyingCookies1, workStore == null ? void 0 : workStore.route);
                    } else //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
function createEmptyCookies() {
    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
}
var CachedCookies = new WeakMap();
function makeHangingCookies(workStore, prerenderStore) {
    var cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    var promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedCookies(underlyingCookies) {
    var cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    var promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    return promise;
}
function makeUntrackedCookiesWithDevWarnings(requestStore, underlyingCookies, route) {
    if (requestStore.asyncApiPromises) {
        var promise;
        if (underlyingCookies === requestStore.mutableCookies) {
            promise = requestStore.asyncApiPromises.mutableCookies;
        } else if (underlyingCookies === requestStore.cookies) {
            promise = requestStore.asyncApiPromises.cookies;
        } else {
            throw Object.defineProperty(new _invarianterror.InvariantError('Received an underlying cookies object that does not match either `cookies` or `mutableCookies`'), "__NEXT_ERROR_CODE", {
                value: "E890",
                enumerable: false,
                configurable: true
            });
        }
        return instrumentCookiesPromiseWithDevWarnings(promise, route);
    }
    var cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    var promise1 = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies, requestStore, _stagedrendering.RenderStage.Runtime);
    var proxiedPromise = instrumentCookiesPromiseWithDevWarnings(promise1, route);
    CachedCookies.set(underlyingCookies, proxiedPromise);
    return proxiedPromise;
}
var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
function instrumentCookiesPromiseWithDevWarnings(promise, route) {
    var _obj;
    Object.defineProperties(promise, (_obj = {}, _define_property._(_obj, Symbol.iterator, replaceableWarningDescriptorForSymbolIterator(promise, route)), _define_property._(_obj, "size", replaceableWarningDescriptor(promise, 'size', route)), _define_property._(_obj, "get", replaceableWarningDescriptor(promise, 'get', route)), _define_property._(_obj, "getAll", replaceableWarningDescriptor(promise, 'getAll', route)), _define_property._(_obj, "has", replaceableWarningDescriptor(promise, 'has', route)), _define_property._(_obj, "set", replaceableWarningDescriptor(promise, 'set', route)), _define_property._(_obj, "delete", replaceableWarningDescriptor(promise, 'delete', route)), _define_property._(_obj, "clear", replaceableWarningDescriptor(promise, 'clear', route)), _define_property._(_obj, "toString", replaceableWarningDescriptor(promise, 'toString', route)), _obj));
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get: function get() {
            warnForSyncAccess(route, "`cookies().".concat(prop, "`"));
            return undefined;
        },
        set: function set(value) {
            Object.defineProperty(target, prop, {
                value: value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get: function get() {
            warnForSyncAccess(route, '`...cookies()` or similar iteration');
            return undefined;
        },
        set: function set(value) {
            Object.defineProperty(target, Symbol.iterator, {
                value: value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createCookiesAccessError(route, expression) {
    var prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`cookies()` returns a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E830",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=cookies.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _instanceof = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function HeadersAdapter1() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function ReadonlyHeadersError1() {
        return ReadonlyHeadersError;
    }
});
var _reflect = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var ReadonlyHeadersError = /*#__PURE__*/ function(Error1) {
    _inherits._(ReadonlyHeadersError, Error1);
    function ReadonlyHeadersError() {
        _class_call_check._(this, ReadonlyHeadersError);
        return _call_super._(this, ReadonlyHeadersError, [
            'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers'
        ]);
    }
    _create_class._(ReadonlyHeadersError, null, [
        {
            key: "callable",
            value: function callable() {
                throw new ReadonlyHeadersError();
            }
        }
    ]);
    return ReadonlyHeadersError;
}(_wrap_native_super._(Error));
var HeadersAdapter = /*#__PURE__*/ function(Headers1) {
    _inherits._(HeadersAdapter, Headers1);
    function HeadersAdapter(headers) {
        _class_call_check._(this, HeadersAdapter);
        var _this;
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        _this = _call_super._(this, HeadersAdapter);
        _this.headers = new Proxy(headers, {
            get: function get(target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set: function set(target, prop, value, receiver) {
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original !== null && original !== void 0 ? original : prop, value, receiver);
            },
            has: function has(target, prop) {
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty: function deleteProperty(target, prop) {
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
        return _this;
    }
    _create_class._(HeadersAdapter, [
        {
            /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ key: "merge",
            value: function merge(value) {
                if (Array.isArray(value)) return value.join(', ');
                return value;
            }
        },
        {
            key: "append",
            value: function append(name, value) {
                var existing = this.headers[name];
                if (typeof existing === 'string') {
                    this.headers[name] = [
                        existing,
                        value
                    ];
                } else if (Array.isArray(existing)) {
                    existing.push(value);
                } else {
                    this.headers[name] = value;
                }
            }
        },
        {
            key: "delete",
            value: function _delete(name) {
                delete this.headers[name];
            }
        },
        {
            key: "get",
            value: function get(name) {
                var value = this.headers[name];
                if (typeof value !== 'undefined') return this.merge(value);
                return null;
            }
        },
        {
            key: "has",
            value: function has(name) {
                return typeof this.headers[name] !== 'undefined';
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                this.headers[name] = value;
            }
        },
        {
            key: "forEach",
            value: function forEach(callbackfn, thisArg) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array._(_step.value, 2), name = _step_value[0], value = _step_value[1];
                        callbackfn.call(thisArg, value, name, this);
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
        },
        {
            key: "entries",
            value: function entries() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, name, value, err;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = Object.keys(this.headers)[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            key = _step.value;
                            name = key.toLowerCase();
                            // We assert here that this is a string because we got it from the
                            // Object.keys() call above.
                            value = this.get(name);
                            return [
                                4,
                                [
                                    name,
                                    value
                                ]
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "keys",
            value: function keys() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, name, err;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = Object.keys(this.headers)[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            key = _step.value;
                            name = key.toLowerCase();
                            return [
                                4,
                                name
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "values",
            value: function values() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, value, err;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = Object.keys(this.headers)[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            key = _step.value;
                            // We assert here that this is a string because we got it from the
                            // Object.keys() call above.
                            value = this.get(key);
                            return [
                                4,
                                value
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: Symbol.iterator,
            value: function value() {
                return this.entries();
            }
        }
    ], [
        {
            key: "seal",
            value: /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ function seal(headers) {
                return new Proxy(headers, {
                    get: function get(target, prop, receiver) {
                        switch(prop){
                            case 'append':
                            case 'delete':
                            case 'set':
                                return ReadonlyHeadersError.callable;
                            default:
                                return _reflect.ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
            }
        },
        {
            key: "from",
            value: /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ function from(headers) {
                if (_instanceof._(headers, Headers)) return headers;
                return new HeadersAdapter(headers);
            }
        }
    ]);
    return HeadersAdapter;
} //# sourceMappingURL=headers.js.map
(_wrap_native_super._(Headers));
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _define_property = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "headers", {
    enumerable: true,
    get: function get() {
        return headers;
    }
});
var _headers = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-client] (ecmascript)");
var _workasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
var _dynamicrendering = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
var _staticgenerationbailout = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
var _dynamicrenderingutils = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
var _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
var _utils = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _stagedrendering = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function headers() {
    var callingExpression = 'headers';
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error("Route ".concat(workStore.route, " used `headers()` inside `after()`. This is not supported. If you need this data inside an `after()` callback, use `headers()` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after")), "__NEXT_ERROR_CODE", {
                value: "E839",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            var underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
            return makeUntrackedHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    {
                        var _workStore, _invalidDynamicUsageError;
                        var error = Object.defineProperty(new Error("Route ".concat(workStore.route, ' used `headers()` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use `headers()` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
                            value: "E833",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, headers);
                        (_invalidDynamicUsageError = (_workStore = workStore).invalidDynamicUsageError) !== null && _invalidDynamicUsageError !== void 0 ? _invalidDynamicUsageError : _workStore.invalidDynamicUsageError = error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error("Route ".concat(workStore.route, " used `headers()` inside a function cached with `unstable_cache()`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use `headers()` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache")), "__NEXT_ERROR_CODE", {
                        value: "E838",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-client':
                case 'private-cache':
                case 'prerender-runtime':
                case 'prerender-ppr':
                case 'prerender-legacy':
                case 'request':
                    break;
                default:
                    workUnitStore;
            }
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(workStore.route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used `headers()`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering')), "__NEXT_ERROR_CODE", {
                value: "E828",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'prerender':
                    return makeHangingHeaders(workStore, workUnitStore);
                case 'prerender-client':
                    var exportName = '`headers`';
                    throw Object.defineProperty(new _invarianterror.InvariantError("".concat(exportName, " must not be used within a client component. Next.js should be preventing ").concat(exportName, " from being included in client components statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                        value: "E693",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // PPR Prerender (no cacheComponents)
                    // We are prerendering with PPR. We need track dynamic access here eagerly
                    // to keep continuity with how headers has worked in PPR without cacheComponents.
                    // TODO consider switching the semantic to throw on property access instead
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // Legacy Prerender
                    // We are in a legacy static generation mode while prerendering
                    // We track dynamic access here so we don't need to wrap the headers in
                    // individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedHeaders(workUnitStore.headers));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedHeaders(workUnitStore.headers);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route, workUnitStore);
                    } else //TURBOPACK unreachable
                    ;
                    //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
var CachedHeaders = new WeakMap();
function makeHangingHeaders(workStore, prerenderStore) {
    var cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    var promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedHeaders(underlyingHeaders) {
    var cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    var promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    return promise;
}
function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route, requestStore) {
    if (requestStore.asyncApiPromises) {
        var promise = requestStore.asyncApiPromises.headers;
        return instrumentHeadersPromiseWithDevWarnings(promise, route);
    }
    var cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    var promise1 = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders, requestStore, _stagedrendering.RenderStage.Runtime);
    var proxiedPromise = instrumentHeadersPromiseWithDevWarnings(promise1, route);
    CachedHeaders.set(underlyingHeaders, proxiedPromise);
    return proxiedPromise;
}
var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
function instrumentHeadersPromiseWithDevWarnings(promise, route) {
    var _obj;
    Object.defineProperties(promise, (_obj = {}, _define_property._(_obj, Symbol.iterator, replaceableWarningDescriptorForSymbolIterator(promise, route)), _define_property._(_obj, "append", replaceableWarningDescriptor(promise, 'append', route)), _define_property._(_obj, "delete", replaceableWarningDescriptor(promise, 'delete', route)), _define_property._(_obj, "get", replaceableWarningDescriptor(promise, 'get', route)), _define_property._(_obj, "has", replaceableWarningDescriptor(promise, 'has', route)), _define_property._(_obj, "set", replaceableWarningDescriptor(promise, 'set', route)), _define_property._(_obj, "getSetCookie", replaceableWarningDescriptor(promise, 'getSetCookie', route)), _define_property._(_obj, "forEach", replaceableWarningDescriptor(promise, 'forEach', route)), _define_property._(_obj, "keys", replaceableWarningDescriptor(promise, 'keys', route)), _define_property._(_obj, "values", replaceableWarningDescriptor(promise, 'values', route)), _define_property._(_obj, "entries", replaceableWarningDescriptor(promise, 'entries', route)), _obj));
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get: function get() {
            warnForSyncAccess(route, "`headers().".concat(prop, "`"));
            return undefined;
        },
        set: function set(value) {
            Object.defineProperty(target, prop, {
                value: value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get: function get() {
            warnForSyncAccess(route, '`...headers()` or similar iteration');
            return undefined;
        },
        set: function set(value) {
            Object.defineProperty(target, Symbol.iterator, {
                value: value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createHeadersAccessError(route, expression) {
    var prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`headers()` returns a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E836",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=headers.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/draft-mode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$brasena$2f$Brasena$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/brasena/Brasena/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _class_call_check = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "draftMode", {
    enumerable: true,
    get: function get() {
        return draftMode;
    }
});
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
var _workasyncstorageexternal = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _dynamicrendering = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
var _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
var _staticgenerationbailout = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
var _hooksservercontext = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _reflect = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
function draftMode() {
    var callingExpression = 'draftMode';
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore || !workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    switch(workUnitStore.type){
        case 'prerender-runtime':
            // TODO(runtime-ppr): does it make sense to delay this? normally it's always microtasky
            return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, createOrGetCachedDraftMode(workUnitStore.draftMode, workStore));
        case 'request':
            return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            // Inside of `"use cache"` or `unstable_cache`, draft mode is available if
            // the outmost work unit store is a request store (or a runtime prerender),
            // and if draft mode is enabled.
            var draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
            if (draftModeProvider) {
                return createOrGetCachedDraftMode(draftModeProvider, workStore);
            }
        // Otherwise, we fall through to providing an empty draft mode.
        // eslint-disable-next-line no-fallthrough
        case 'prerender':
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
            // Return empty draft mode
            return createOrGetCachedDraftMode(null, workStore);
        default:
            return workUnitStore;
    }
}
function createOrGetCachedDraftMode(draftModeProvider, workStore) {
    var cacheKey = draftModeProvider !== null && draftModeProvider !== void 0 ? draftModeProvider : NullDraftMode;
    var cachedDraftMode = CachedDraftModes.get(cacheKey);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        var route = workStore == null ? void 0 : workStore.route;
        return createDraftModeWithDevWarnings(draftModeProvider, route);
    } else {
        return Promise.resolve(new DraftMode(draftModeProvider));
    }
}
var NullDraftMode = {};
var CachedDraftModes = new WeakMap();
function createDraftModeWithDevWarnings(underlyingProvider, route) {
    var instance = new DraftMode(underlyingProvider);
    var promise = Promise.resolve(instance);
    var proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            switch(prop){
                case 'isEnabled':
                    warnForSyncAccess(route, "`draftMode().".concat(prop, "`"));
                    break;
                case 'enable':
                case 'disable':
                    {
                        warnForSyncAccess(route, "`draftMode().".concat(prop, "()`"));
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the draftMode object.
                    }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    return proxiedPromise;
}
var DraftMode = /*#__PURE__*/ function() {
    function DraftMode(provider) {
        _class_call_check._(this, DraftMode);
        this._provider = provider;
    }
    _create_class._(DraftMode, [
        {
            key: "isEnabled",
            get: function get() {
                if (this._provider !== null) {
                    return this._provider.isEnabled;
                }
                return false;
            }
        },
        {
            key: "enable",
            value: function enable() {
                // We have a store we want to track dynamic data access to ensure we
                // don't statically generate routes that manipulate draft mode.
                trackDynamicDraftMode('draftMode().enable()', this.enable);
                if (this._provider !== null) {
                    this._provider.enable();
                }
            }
        },
        {
            key: "disable",
            value: function disable() {
                trackDynamicDraftMode('draftMode().disable()', this.disable);
                if (this._provider !== null) {
                    this._provider.disable();
                }
            }
        }
    ]);
    return DraftMode;
}();
var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    var prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`draftMode()` returns a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E835",
        enumerable: false,
        configurable: true
    });
}
function trackDynamicDraftMode(expression, constructorOpt) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === 'after') {
            throw Object.defineProperty(new Error("Route ".concat(workStore.route, ' used "').concat(expression, '" inside `after()`. The enabled status of `draftMode()` can be read inside `after()` but you cannot enable or disable `draftMode()`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after')), "__NEXT_ERROR_CODE", {
                value: "E845",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(workStore.route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used `').concat(expression, "`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
                value: "E553",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                case 'private-cache':
                    {
                        var _workStore, _invalidDynamicUsageError;
                        var error = Object.defineProperty(new Error("Route ".concat(workStore.route, ' used "').concat(expression, '" inside "use cache". The enabled status of `draftMode()` can be read in caches but you must not enable or disable `draftMode()` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
                            value: "E829",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, constructorOpt);
                        (_invalidDynamicUsageError = (_workStore = workStore).invalidDynamicUsageError) !== null && _invalidDynamicUsageError !== void 0 ? _invalidDynamicUsageError : _workStore.invalidDynamicUsageError = error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error("Route ".concat(workStore.route, ' used "').concat(expression, '" inside a function cached with `unstable_cache()`. The enabled status of `draftMode()` can be read in caches but you must not enable or disable `draftMode()` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache')), "__NEXT_ERROR_CODE", {
                        value: "E844",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-runtime':
                    {
                        var error1 = Object.defineProperty(new Error("Route ".concat(workStore.route, " used ").concat(expression, " without first calling `await connection()`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers")), "__NEXT_ERROR_CODE", {
                            value: "E126",
                            enumerable: false,
                            configurable: true
                        });
                        return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(workStore.route, expression, error1, workUnitStore);
                    }
                case 'prerender-client':
                    var exportName = '`draftMode`';
                    throw Object.defineProperty(new _invarianterror.InvariantError("".concat(exportName, " must not be used within a Client Component. Next.js should be preventing ").concat(exportName, " from being included in Client Components statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    workUnitStore.revalidate = 0;
                    var err = Object.defineProperty(new _hooksservercontext.DynamicServerError("Route ".concat(workStore.route, " couldn't be rendered statically because it used `").concat(expression, "`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error")), "__NEXT_ERROR_CODE", {
                        value: "E558",
                        enumerable: false,
                        configurable: true
                    });
                    workStore.dynamicUsageDescription = expression;
                    workStore.dynamicUsageStack = err.stack;
                    throw err;
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    break;
                default:
                    workUnitStore;
            }
        }
    }
} //# sourceMappingURL=draft-mode.js.map
}),
"[project]/Developer/brasena/Brasena/node_modules/next/headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports.cookies = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/cookies.js [app-client] (ecmascript)").cookies;
module.exports.headers = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/headers.js [app-client] (ecmascript)").headers;
module.exports.draftMode = __turbopack_context__.r("[project]/Developer/brasena/Brasena/node_modules/next/dist/server/request/draft-mode.js [app-client] (ecmascript)").draftMode;
}),
]);

//# sourceMappingURL=db3c6_next_ecb37350._.js.map