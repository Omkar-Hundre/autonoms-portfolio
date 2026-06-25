export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-sm tracking-[0.08em] text-text-primary">
            AUTONOMS
          </span>
          <span className="text-border">·</span>
          <span className="font-body text-xs text-text-muted">
            © {currentYear}
          </span>
        </div>

        <p className="font-body text-xs text-text-muted">
          Built with intent. Shipped with care.
        </p>
      </div>
    </footer>
  );
}
