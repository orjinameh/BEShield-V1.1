"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      background: scrolled ? "rgba(7,13,24,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      transition: "all 0.3s",
    }}>
      <nav style={{
        maxWidth: 1280, 
        margin: "0 auto", 
        padding: "0 32px",
        height: 64, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <LogoMark />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.03em", color: "var(--ink)" }}>
            BEShield
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["#platform", "#architecture", "#research"].map((href) => (
            <a key={href} href={href} style={{
              fontSize: 14, fontWeight: 500, color: "var(--ink-secondary)",
              textDecoration: "none", transition: "color 0.2s",
            }}>
              {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/dashboard" style={{
            fontSize: 14, fontWeight: 500, color: "var(--ink-secondary)", textDecoration: "none",
          }}>
            Sign in
          </Link>
          <Link href="/dashboard" style={{
            padding: "8px 18px", background: "var(--signal)", color: "#fff",
            borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: "none",
            boxShadow: "0 4px 12px rgba(27, 79, 216, 0.25)"
          }}>
            Launch Terminal →
          </Link>
        </div>
      </nav>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#1b4fd8" />
      <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}