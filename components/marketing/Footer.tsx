export function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display font-bold text-[16px] tracking-tight text-ink-secondary">
          BEShield
        </div>
        <div className="flex gap-8">
          {["Platform", "Research", "Documentation", "Privacy"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-ink-tertiary hover:text-ink-secondary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-ink-tertiary">
          © 2025 BEShield. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
