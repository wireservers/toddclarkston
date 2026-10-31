export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Todd Clarkston. All rights reserved.
        </p>
        <a
          href="#"
          className="inline-flex min-h-11 items-center text-muted hover:text-foreground text-sm transition-colors"
        >
          Back to top ↑
        </a>
        <p className="text-muted text-xs font-mono">
          Built with Next.js &bull; Designed with intent
        </p>
      </div>
    </footer>
  );
}
