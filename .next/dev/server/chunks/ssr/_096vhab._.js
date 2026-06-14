module.exports = [
"[project]/components/marketing/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Nav() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handler);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            background: scrolled ? "rgba(7,13,24,0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            transition: "all 0.3s"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            style: {
                maxWidth: 1280,
                margin: "0 auto",
                padding: "0 32px",
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoMark, {}, void 0, false, {
                            fileName: "[project]/components/marketing/Nav.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontWeight: 700,
                                fontSize: 17,
                                letterSpacing: "-0.03em",
                                color: "var(--ink)"
                            },
                            children: "BEShield"
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/Nav.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/marketing/Nav.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 32
                    },
                    children: [
                        "#platform",
                        "#architecture",
                        "#research"
                    ].map((href)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            style: {
                                fontSize: 14,
                                fontWeight: 500,
                                color: "var(--ink-secondary)",
                                textDecoration: "none",
                                transition: "color 0.2s"
                            },
                            children: href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)
                        }, href, false, {
                            fileName: "[project]/components/marketing/Nav.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/marketing/Nav.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            style: {
                                fontSize: 14,
                                fontWeight: 500,
                                color: "var(--ink-secondary)",
                                textDecoration: "none"
                            },
                            children: "Sign in"
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/Nav.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            style: {
                                padding: "8px 18px",
                                background: "var(--signal)",
                                color: "#fff",
                                borderRadius: 6,
                                fontSize: 14,
                                fontWeight: 600,
                                textDecoration: "none",
                                boxShadow: "0 4px 12px rgba(27, 79, 216, 0.25)"
                            },
                            children: "Launch Terminal →"
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/Nav.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/marketing/Nav.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/marketing/Nav.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/marketing/Nav.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function LogoMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "28",
                height: "28",
                rx: "6",
                fill: "#1b4fd8"
            }, void 0, false, {
                fileName: "[project]/components/marketing/Nav.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 14l4 4 8-8",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/marketing/Nav.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/marketing/Nav.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/marketing/ConsensusNetwork.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsensusNetwork",
    ()=>ConsensusNetwork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const DETECTOR_LABELS = [
    "DOM",
    "LANG",
    "BEH",
    "REL",
    "BANK",
    "HIST",
    "TXN"
];
function ConsensusNetwork() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const DPR = window.devicePixelRatio || 1;
        const W = 520;
        const H = 380;
        canvas.width = W * DPR;
        canvas.height = H * DPR;
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
        ctx.scale(DPR, DPR);
        // Node layout
        const nodes = [
            // Input
            {
                x: 260,
                y: 42,
                label: "REQUEST",
                type: "input",
                active: true,
                alpha: 1,
                targetAlpha: 1
            },
            // Detectors — two rows
            {
                x: 80,
                y: 155,
                label: "DOM",
                type: "detector",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            },
            {
                x: 180,
                y: 155,
                label: "LANG",
                type: "detector",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            },
            {
                x: 280,
                y: 155,
                label: "BEH",
                type: "detector",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            },
            {
                x: 380,
                y: 155,
                label: "REL",
                type: "detector",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            },
            {
                x: 110,
                y: 245,
                label: "BANK",
                type: "detector",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            },
            {
                x: 260,
                y: 245,
                label: "HIST",
                type: "detector",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            },
            {
                x: 410,
                y: 245,
                label: "TXN",
                type: "detector",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            },
            // Consensus
            {
                x: 260,
                y: 340,
                label: "CONSENSUS",
                type: "consensus",
                active: false,
                alpha: 0.25,
                targetAlpha: 0.25
            }
        ];
        const edges = [
            // Request → detectors
            {
                from: 0,
                to: 1,
                flowOffset: 0
            },
            {
                from: 0,
                to: 2,
                flowOffset: 0
            },
            {
                from: 0,
                to: 3,
                flowOffset: 0
            },
            {
                from: 0,
                to: 4,
                flowOffset: 0
            },
            {
                from: 0,
                to: 5,
                flowOffset: 0
            },
            {
                from: 0,
                to: 6,
                flowOffset: 0
            },
            {
                from: 0,
                to: 7,
                flowOffset: 0
            },
            // detectors → consensus
            {
                from: 1,
                to: 8,
                flowOffset: 0.3
            },
            {
                from: 2,
                to: 8,
                flowOffset: 0.5
            },
            {
                from: 3,
                to: 8,
                flowOffset: 0.1
            },
            {
                from: 4,
                to: 8,
                flowOffset: 0.7
            },
            {
                from: 5,
                to: 8,
                flowOffset: 0.2
            },
            {
                from: 6,
                to: 8,
                flowOffset: 0.6
            },
            {
                from: 7,
                to: 8,
                flowOffset: 0.4
            }
        ];
        // Which detector subsets to cycle through
        const SUBSETS = [
            [
                1,
                3,
                6,
                8
            ],
            [
                2,
                4,
                5,
                8
            ],
            [
                1,
                2,
                7,
                8
            ],
            [
                3,
                5,
                6,
                8
            ],
            [
                1,
                4,
                6,
                7,
                8
            ],
            [
                2,
                3,
                5,
                8
            ]
        ];
        let subsetIdx = 0;
        let frame = 0;
        const CYCLE = 210;
        function applySubset(idx) {
            const active = new Set([
                0,
                ...SUBSETS[idx]
            ]);
            nodes.forEach((n, i)=>{
                n.targetAlpha = active.has(i) ? 1 : 0.18;
                n.active = active.has(i);
            });
        }
        applySubset(0);
        function drawNode(n, alpha) {
            const { x, y, label, type } = n;
            const r = type === "consensus" ? 24 : type === "input" ? 20 : 17;
            if (!ctx) return;
            ctx.save();
            ctx.globalAlpha = alpha;
            // Ring
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.strokeStyle = n.active ? "#1C4FD8" : "#1A2540";
            ctx.lineWidth = n.active ? 1.5 : 1;
            ctx.fillStyle = n.active ? "#0C1830" : "#0C1424";
            ctx.fill();
            ctx.stroke();
            // Label
            ctx.font = `500 ${type === "consensus" ? "10px" : "9px"} 'Space Grotesk', system-ui, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = n.active ? "#F2F5FA" : "#4A5878";
            ctx.fillText(label, x, y);
            ctx.restore();
        }
        function drawEdge(e, t) {
            const a = nodes[e.from];
            const b = nodes[e.to];
            const active = a.active && b.active;
            const edgeAlpha = active ? 0.5 : 0.08;
            if (!ctx) return;
            ctx.save();
            ctx.globalAlpha = edgeAlpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = active ? "#1C4FD8" : "#1A2540";
            ctx.lineWidth = active ? 1 : 0.75;
            ctx.stroke();
            // Travelling dot on active edges
            if (active) {
                const progress = (t * 0.6 + e.flowOffset) % 1;
                const px = a.x + (b.x - a.x) * progress;
                const py = a.y + (b.y - a.y) * progress;
                ctx.globalAlpha = 0.85;
                ctx.beginPath();
                ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = "#3B74FF";
                ctx.fill();
            }
            ctx.restore();
        }
        function tick() {
            frame++;
            const t = frame / 60;
            // Cycle subsets
            if (frame % CYCLE === 0) {
                subsetIdx = (subsetIdx + 1) % SUBSETS.length;
                applySubset(subsetIdx);
            }
            // Smooth alpha
            nodes.forEach((n)=>{
                n.alpha += (n.targetAlpha - n.alpha) * 0.06;
            });
            if (!ctx) return;
            ctx.clearRect(0, 0, W, H);
            // Draw all edges first
            edges.forEach((e)=>drawEdge(e, t));
            // Draw all nodes
            nodes.forEach((n)=>drawNode(n, n.alpha));
            rafRef.current = requestAnimationFrame(tick);
        }
        tick();
        return ()=>cancelAnimationFrame(rafRef.current);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "rounded-xl border border-surface-border",
        "aria-label": "Animated Byzantine consensus network showing active verification nodes",
        role: "img"
    }, void 0, false, {
        fileName: "[project]/components/marketing/ConsensusNetwork.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/marketing/ArchitectureSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArchitectureSection",
    ()=>ArchitectureSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const STEPS = [
    {
        label: "Escrow Initialization",
        detail: "A transaction invocation securely locks the designated USDC payload inside the Soroban containment smart contract vault."
    },
    {
        label: "Dynamic Node Selection",
        detail: "A dynamic subset of off-chain verification nodes is rotated from the pool. This moving-target configuration remains completely unpredictable to adversaries."
    },
    {
        label: "Consensus Engine",
        detail: "Selected nodes vote independently across isolated evidence vectors. The Byzantine fault tolerance protocol ensures compromised nodes cannot alter the verdict."
    },
    {
        label: "Clearance Authorization",
        detail: "The unified consensus quorum constructs an authenticated payload signature using a single-keypair clearance authority engine."
    },
    {
        label: "Ledger Settlement",
        detail: "The Soroban contract consumes the authorized signature to execute final asset release—or executes an automatic return sequence if the 24-hour timeout expires."
    }
];
function ArchitectureSection() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>{
            setActive((prev)=>(prev + 1) % STEPS.length);
        }, 2800);
        return ()=>clearInterval(id);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "architecture",
        className: "border-t border-surface-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-8 py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-widest text-ink-tertiary font-semibold mb-4",
                            children: "Verification pipeline"
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-4xl font-bold tracking-tight text-ink max-w-2xl",
                            children: "Architecture built for an adversarial world"
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActive(i),
                                    className: "w-full text-left group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-start gap-4 px-5 py-5 rounded-lg transition-colors duration-200 ${active === i ? "bg-surface-raised border border-surface-border" : "hover:bg-surface-raised/50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `mt-0.5 w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-[10px] font-bold transition-colors ${active === i ? "border-signal bg-signal text-white" : "border-surface-border-hi text-ink-tertiary"}`,
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-sm font-semibold transition-colors ${active === i ? "text-ink" : "text-ink-secondary"}`,
                                                        children: step.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this),
                                                    active === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1.5 text-sm text-ink-tertiary leading-relaxed",
                                                        children: step.detail
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchDiagram, {
                            active: active
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/marketing/ArchitectureSection.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function ArchDiagram({ active }) {
    const boxes = [
        {
            label: "Soroban Token Lock",
            sublabel: "On-chain escrow initialization"
        },
        {
            label: "Dynamic Verification",
            sublabel: "Moving-target node rotation"
        },
        {
            label: "Consensus Engine",
            sublabel: "Off-chain BFT voting quorum"
        },
        {
            label: "Clearance Verdict",
            sublabel: "Authenticated agent signature"
        },
        {
            label: "Contract Settlement",
            sublabel: "Stellar ledger state finality"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-surface-border rounded-xl bg-surface-raised p-6 space-y-2",
        children: [
            boxes.map((box, i)=>{
                const isActive = i === active;
                const isPast = i < active;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-lg px-5 py-4 border transition-all duration-300 ${isActive ? "border-signal bg-signal/10" : isPast ? "border-surface-border bg-surface opacity-60" : "border-surface-border bg-surface opacity-40"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-sm font-semibold ${isActive ? "text-ink" : "text-ink-secondary"}`,
                                    children: box.label
                                }, void 0, false, {
                                    fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-ink-tertiary mt-0.5",
                                    children: box.sublabel
                                }, void 0, false, {
                                    fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        i < boxes.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center py-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-px h-5 transition-colors duration-300 ${isPast ? "bg-signal/40" : "bg-surface-border"}`
                            }, void 0, false, {
                                fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                                lineNumber: 143,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                            lineNumber: 142,
                            columnNumber: 15
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-surface-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-ink-tertiary leading-relaxed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-ink-secondary font-medium",
                            children: "Note:"
                        }, void 0, false, {
                            fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        " The active verification subset rotates per transaction. Smart contract auditors independently verify the cryptographically signed consensus envelope post-execution."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/marketing/ArchitectureSection.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/marketing/ArchitectureSection.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DETECTORS",
    ()=>DETECTORS,
    "cn",
    ()=>cn,
    "formatRelativeTime",
    ()=>formatRelativeTime,
    "getDetectorById",
    ()=>getDetectorById,
    "mockAttestationHash",
    ()=>mockAttestationHash,
    "pickRandom",
    ()=>pickRandom,
    "riskBadgeClasses",
    ()=>riskBadgeClasses,
    "riskColor",
    ()=>riskColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const DETECTORS = [
    {
        id: "domain",
        label: "Domain Analysis",
        description: "Inspects sender domain age, reputation, and MX configuration"
    },
    {
        id: "language",
        label: "Language Analysis",
        description: "Models linguistic patterns against baseline communication style"
    },
    {
        id: "behavior",
        label: "Behavior Analysis",
        description: "Compares request against historical behavioral signatures"
    },
    {
        id: "relationship",
        label: "Relationship Graph",
        description: "Validates sender position within the organizational trust graph"
    },
    {
        id: "bank",
        label: "Bank Verification",
        description: "Cross-references account details against known fraud indicators"
    },
    {
        id: "device",
        label: "Device Intelligence",
        description: "Fingerprints the originating device and session metadata"
    },
    {
        id: "history",
        label: "Historical Patterns",
        description: "Scores against historical transaction and communication patterns"
    },
    {
        id: "transaction",
        label: "Transaction Analysis",
        description: "Evaluates payment amount, cadence, and counterparty risk"
    },
    {
        id: "identity",
        label: "Identity Verification",
        description: "Validates claimed identity through out-of-band signals"
    }
];
function getDetectorById(id) {
    return DETECTORS.find((d)=>d.id === id);
}
function riskColor(level) {
    return ({
        critical: "text-red-400",
        high: "text-orange-400",
        medium: "text-yellow-500",
        low: "text-blue-400",
        clear: "text-emerald-400"
    })[level];
}
function riskBadgeClasses(level) {
    return cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium tracking-wide", {
        critical: "bg-red-950/60 text-red-300 border border-red-900/50",
        high: "bg-orange-950/60 text-orange-300 border border-orange-900/50",
        medium: "bg-yellow-950/60 text-yellow-300 border border-yellow-900/50",
        low: "bg-blue-950/60 text-blue-300 border border-blue-900/50",
        clear: "bg-emerald-950/60 text-emerald-300 border border-emerald-900/50"
    }[level]);
}
function pickRandom(arr, n) {
    return [
        ...arr
    ].sort(()=>Math.random() - 0.5).slice(0, n);
}
function mockAttestationHash() {
    return Array.from({
        length: 64
    }, ()=>Math.floor(Math.random() * 16).toString(16)).join("");
}
function formatRelativeTime(iso) {
    const diff = Date.now() - new Date(iso).getTime();
    const minutes = Math.floor(diff / 60_000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
}
}),
"[project]/components/marketing/DetectorPoolSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetectorPoolSection",
    ()=>DetectorPoolSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function pickSubset(size) {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DETECTORS"]
    ].sort(()=>Math.random() - 0.5).slice(0, size).map((d)=>d.id);
}
function DetectorPoolSection() {
    const [activeIds, setActiveIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setActiveIds(pickSubset(4 + Math.floor(Math.random() * 3)));
        const id = setInterval(()=>{
            setActiveIds(pickSubset(4 + Math.floor(Math.random() * 3)));
        }, 3200);
        return ()=>clearInterval(id);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-surface-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-8 py-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-widest text-ink-tertiary font-semibold mb-4",
                                children: "Verification pool"
                            }, void 0, false, {
                                fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-4xl font-bold tracking-tight text-ink mb-5",
                                children: "Nine specializations. Unpredictable subsets."
                            }, void 0, false, {
                                fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[17px] text-ink-secondary leading-relaxed",
                                children: "Each investigation draws from a pool of independent detectors. The active subset changes per request — preserving full auditability for defenders while making detector-specific evasion significantly harder for attackers."
                            }, void 0, false, {
                                fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DETECTORS"].map((detector)=>{
                                    const isActive = activeIds.includes(detector.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-lg border px-4 py-3 transition-all duration-500 ${isActive ? "border-signal/40 bg-signal/8 text-ink" : "border-surface-border bg-surface-raised text-ink-tertiary"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${isActive ? "bg-signal" : "bg-surface-border-hi"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold",
                                                    children: detector.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, this)
                                    }, detector.id, false, {
                                        fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-xs text-ink-tertiary",
                                children: "Active subset rotates every investigation"
                            }, void 0, false, {
                                fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/marketing/DetectorPoolSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_096vhab._.js.map