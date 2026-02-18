import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="flex min-h-[44px] items-center justify-center py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ironvael Operations
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground sm:gap-8">
            <Link
              href="/contact"
              className="min-h-[44px] flex items-center transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
