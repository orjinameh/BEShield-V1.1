module.exports = [
"[project]/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_CONVERSATIONS",
    ()=>MOCK_CONVERSATIONS,
    "MOCK_MAILBOX_HEALTH",
    ()=>MOCK_MAILBOX_HEALTH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
const MOCK_CONVERSATIONS = [
    {
        id: "conv-001",
        subject: "Updated wire transfer instructions — Q3 vendor payment",
        participants: [
            "finance@acmecorp.com",
            "billing@apex-supplies.net"
        ],
        lastActivity: new Date(Date.now() - 8 * 60_000).toISOString(),
        riskLevel: "critical",
        flaggedAt: new Date(Date.now() - 7 * 60_000).toISOString(),
        messageCount: 4,
        hasPaymentRequest: true,
        consensus: {
            verdict: "flag",
            confidence: 0.97,
            activeNodes: [
                "domain",
                "language",
                "behavior",
                "bank",
                "history"
            ],
            votes: [
                {
                    detectorId: "domain",
                    verdict: "flag",
                    confidence: 0.94,
                    evidence: "apex-supplies.net registered 11 days ago. Legitimate domain apex-supplies.com exists and does not match."
                },
                {
                    detectorId: "language",
                    verdict: "flag",
                    confidence: 0.91,
                    evidence: "Urgency language ('before end of day', 'as discussed') present. Sender linguistic baseline mismatch on 3 stylometric markers."
                },
                {
                    detectorId: "behavior",
                    verdict: "flag",
                    confidence: 0.99,
                    evidence: "Wire transfer request from this sender is anomalous. No prior payment requests in 18-month history."
                },
                {
                    detectorId: "bank",
                    verdict: "flag",
                    confidence: 0.98,
                    evidence: "Destination account flagged in shared fraud intelligence feed. Beneficiary name mismatch with account history."
                },
                {
                    detectorId: "history",
                    verdict: "flag",
                    confidence: 0.88,
                    evidence: "Payment amount ($127,400) is 4.2× the median transaction for this vendor relationship."
                }
            ],
            attestationHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAttestationHash"])(),
            timestamp: new Date(Date.now() - 7 * 60_000).toISOString()
        }
    },
    {
        id: "conv-002",
        subject: "Invoice #8841 — August retainer",
        participants: [
            "ap@acmecorp.com",
            "hello@meridian-studio.io"
        ],
        lastActivity: new Date(Date.now() - 2.5 * 3600_000).toISOString(),
        riskLevel: "medium",
        flaggedAt: new Date(Date.now() - 2.4 * 3600_000).toISOString(),
        messageCount: 6,
        hasPaymentRequest: true,
        consensus: {
            verdict: "flag",
            confidence: 0.72,
            activeNodes: [
                "domain",
                "language",
                "transaction",
                "identity"
            ],
            votes: [
                {
                    detectorId: "domain",
                    verdict: "clear",
                    confidence: 0.89,
                    evidence: "Domain meridian-studio.io is 2.3 years old with consistent MX history."
                },
                {
                    detectorId: "language",
                    verdict: "uncertain",
                    confidence: 0.55,
                    evidence: "Moderate stylometric drift detected. Possibly authored by a different team member."
                },
                {
                    detectorId: "transaction",
                    verdict: "flag",
                    confidence: 0.81,
                    evidence: "Bank account differs from the account used for the previous 5 invoices from this vendor."
                },
                {
                    detectorId: "identity",
                    verdict: "flag",
                    confidence: 0.77,
                    evidence: "Signatory name 'James Reeve' not present in prior correspondence. Usual contact is 'Sarah Chen'."
                }
            ],
            attestationHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAttestationHash"])(),
            timestamp: new Date(Date.now() - 2.4 * 3600_000).toISOString()
        }
    },
    {
        id: "conv-003",
        subject: "Re: Renewal quote — SaaS subscription",
        participants: [
            "ops@acmecorp.com",
            "renewals@vendor-platform.com"
        ],
        lastActivity: new Date(Date.now() - 5 * 3600_000).toISOString(),
        riskLevel: "low",
        messageCount: 9,
        hasPaymentRequest: false,
        consensus: {
            verdict: "clear",
            confidence: 0.93,
            activeNodes: [
                "domain",
                "behavior",
                "relationship",
                "language"
            ],
            votes: [
                {
                    detectorId: "domain",
                    verdict: "clear",
                    confidence: 0.98,
                    evidence: "Established domain, 6-year history, DMARC/DKIM pass."
                },
                {
                    detectorId: "behavior",
                    verdict: "clear",
                    confidence: 0.91,
                    evidence: "Communication pattern consistent with 3-year vendor relationship."
                },
                {
                    detectorId: "relationship",
                    verdict: "clear",
                    confidence: 0.95,
                    evidence: "Sender verified in organizational trust graph with 14 prior interactions."
                },
                {
                    detectorId: "language",
                    verdict: "clear",
                    confidence: 0.87,
                    evidence: "Language consistent with established communication style for this contact."
                }
            ],
            attestationHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAttestationHash"])(),
            timestamp: new Date(Date.now() - 5 * 3600_000).toISOString()
        }
    },
    {
        id: "conv-004",
        subject: "URGENT: CEO approval needed for acquisition transfer",
        participants: [
            "cfo@acmecorp.com",
            "m.hartwell@acmecorp-group.co"
        ],
        lastActivity: new Date(Date.now() - 14 * 60_000).toISOString(),
        riskLevel: "critical",
        flaggedAt: new Date(Date.now() - 13 * 60_000).toISOString(),
        messageCount: 2,
        hasPaymentRequest: true,
        consensus: {
            verdict: "flag",
            confidence: 0.99,
            activeNodes: [
                "domain",
                "language",
                "behavior",
                "device",
                "identity"
            ],
            votes: [
                {
                    detectorId: "domain",
                    verdict: "flag",
                    confidence: 0.99,
                    evidence: "acmecorp-group.co is a typosquat of acmecorp.com. Registered yesterday via privacy proxy."
                },
                {
                    detectorId: "language",
                    verdict: "flag",
                    confidence: 0.96,
                    evidence: "Classic BEC pattern: executive impersonation, secrecy request, time pressure. 97th percentile urgency score."
                },
                {
                    detectorId: "behavior",
                    verdict: "flag",
                    confidence: 0.99,
                    evidence: "No prior communication from this address. CEO has no history of initiating wire requests via email."
                },
                {
                    detectorId: "device",
                    verdict: "flag",
                    confidence: 0.93,
                    evidence: "Originating IP geolocated to Eastern Europe. No VPN or corporate infrastructure detected."
                },
                {
                    detectorId: "identity",
                    verdict: "flag",
                    confidence: 0.99,
                    evidence: "Display name spoofs CEO. DMARC fails. SPF record not aligned."
                }
            ],
            attestationHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAttestationHash"])(),
            timestamp: new Date(Date.now() - 13 * 60_000).toISOString()
        }
    },
    {
        id: "conv-005",
        subject: "PO #2291 — materials shipment confirmation",
        participants: [
            "procurement@acmecorp.com",
            "logistics@steelframe-co.com"
        ],
        lastActivity: new Date(Date.now() - 18 * 3600_000).toISOString(),
        riskLevel: "clear",
        messageCount: 12,
        hasPaymentRequest: false
    }
];
const MOCK_MAILBOX_HEALTH = {
    monitored: 847,
    flagged: 3,
    cleared: 61,
    pendingReview: 2
};
}),
"[project]/components/app/RiskBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiskBadge",
    ()=>RiskBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const LABELS = {
    critical: "Critical",
    high: "High",
    medium: "Medium",
    low: "Low",
    clear: "Clear"
};
function RiskBadge({ level }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["riskBadgeClasses"])(level),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full bg-current opacity-70"
            }, void 0, false, {
                fileName: "[project]/components/app/RiskBadge.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            LABELS[level]
        ]
    }, void 0, true, {
        fileName: "[project]/components/app/RiskBadge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$RiskBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/RiskBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DashboardHub() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-surface-base text-ink p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold tracking-tight text-white font-display",
                            children: "Security Investigations"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-ink-secondary mt-1",
                            children: "Select an active verification query payload to review node consensus details."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-surface-border rounded-xl overflow-hidden bg-surface-raised/50 divide-y divide-surface-border",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_CONVERSATIONS"].map((conv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/dashboard/investigation/${conv.id}`,
                            className: "block p-5 hover:bg-surface-overlay/40 transition group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-semibold text-ink group-hover:text-signal transition",
                                                children: conv.subject
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-ink-tertiary",
                                                children: conv.participants.join(" · ")
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-ink-tertiary font-mono",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelativeTime"])(conv.lastActivity)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$RiskBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiskBadge"], {
                                                level: conv.riskLevel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        }, conv.id, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1374bmq._.js.map