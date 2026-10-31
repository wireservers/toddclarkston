(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/_components/switch.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "n": "switch-module__DSibBW__n",
  "switch": "switch-module__DSibBW__switch",
});
}),
"[project]/src/app/_components/theme-switcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NoFOUCScript": (()=>NoFOUCScript),
    "ThemeSwitcher": (()=>ThemeSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.0-canary.87_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20_8f7bcf47f0c1bf51bc71d91d19182f06/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$switch$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/_components/switch.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.0-canary.87_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20_8f7bcf47f0c1bf51bc71d91d19182f06/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes = [
    "system",
    "dark",
    "light"
];
const NoFOUCScript = (storageKey)=>{
    /* can not use outside constants or function as this script will be injected in a different context */ const [SYSTEM, DARK, LIGHT] = [
        "system",
        "dark",
        "light"
    ];
    /** Modify transition globally to avoid patched transitions */ const modifyTransition = ()=>{
        const css = document.createElement("style");
        css.textContent = "*,*:after,*:before{transition:none !important;}";
        document.head.appendChild(css);
        return ()=>{
            /* Force restyle */ getComputedStyle(document.body);
            /* Wait for next tick before removing */ setTimeout(()=>document.head.removeChild(css), 1);
        };
    };
    const media = matchMedia(`(prefers-color-scheme: ${DARK})`);
    /** function to add remove dark class */ window.updateDOM = ()=>{
        const restoreTransitions = modifyTransition();
        const mode = localStorage.getItem(storageKey) ?? SYSTEM;
        const systemMode = media.matches ? DARK : LIGHT;
        const resolvedMode = mode === SYSTEM ? systemMode : mode;
        const classList = document.documentElement.classList;
        if (resolvedMode === DARK) classList.add(DARK);
        else classList.remove(DARK);
        document.documentElement.setAttribute("data-mode", mode);
        restoreTransitions();
    };
    window.updateDOM();
    media.addEventListener("change", window.updateDOM);
};
_c = NoFOUCScript;
let updateDOM;
/**
 * Switch button to quickly toggle user preference.
 */ const Switch = ()=>{
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Switch.useState": ()=>(typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY)) ?? "system"
    }["Switch.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Switch.useEffect": ()=>{
            // store global functions to local variables to avoid any interference
            updateDOM = window.updateDOM;
            /** Sync the tabs */ addEventListener("storage", {
                "Switch.useEffect": (e)=>{
                    e.key === STORAGE_KEY && setMode(e.newValue);
                }
            }["Switch.useEffect"]);
        }
    }["Switch.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Switch.useEffect": ()=>{
            localStorage.setItem(STORAGE_KEY, mode);
            updateDOM();
        }
    }["Switch.useEffect"], [
        mode
    ]);
    /** toggle mode */ const handleModeSwitch = ()=>{
        const index = modes.indexOf(mode);
        setMode(modes[(index + 1) % modes.length]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        suppressHydrationWarning: true,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$switch$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
        onClick: handleModeSwitch
    }, void 0, false, {
        fileName: "[project]/src/app/_components/theme-switcher.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
};
_s(Switch, "0rk9JnWnHpXufL6MNcv1Y+7zUqE=");
_c1 = Switch;
const Script = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        dangerouslySetInnerHTML: {
            __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`
        }
    }, void 0, false, {
        fileName: "[project]/src/app/_components/theme-switcher.tsx",
        lineNumber: 96,
        columnNumber: 3
    }, this));
_c2 = Script;
const ThemeSwitcher = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Script, {}, void 0, false, {
                fileName: "[project]/src/app/_components/theme-switcher.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$0$2d$canary$2e$87_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20_8f7bcf47f0c1bf51bc71d91d19182f06$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Switch, {}, void 0, false, {
                fileName: "[project]/src/app/_components/theme-switcher.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c3 = ThemeSwitcher;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NoFOUCScript");
__turbopack_context__.k.register(_c1, "Switch");
__turbopack_context__.k.register(_c2, "Script");
__turbopack_context__.k.register(_c3, "ThemeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app__components_077156f7._.js.map