import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/50 mt-0">
      <div className="max-w-container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; 2026 {siteConfig.shortName}. All rights reserved.
        </p>
        <Link
          href="#"
          className="text-sm text-text-muted hover:text-[#E87C0C] transition-colors"
        >
          Back to top &uarr;
        </Link>
      </div>
    </footer>
  );
}
