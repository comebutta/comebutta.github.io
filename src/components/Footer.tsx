export function Footer() {
  return (
    <footer
      className="border-t border-light-gray bg-white px-4 py-8 text-dark-blue/80"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <a
          href="/privacy-policy.pdf"
          className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        >
          Privacy Policy
        </a>
        <p className="text-sm">
          COPYRIGHT 2026 © Daniele Foà – P.IVA 03413302319
        </p>
      </div>
    </footer>
  );
}
