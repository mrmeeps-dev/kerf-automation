import Link from "next/link";

import { site } from "@/content/site";
import { getBookingPageHref } from "@/lib/env";

export function SiteHeader() {
  const bookHref = getBookingPageHref();

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <div className="flex min-w-0 items-center gap-x-6 md:gap-x-10">
          <Link href="/" className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal">
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG brand asset; avoids image optimizer edge cases */}
            <img
              src="/brand/kerf_automation_logo.svg"
              alt="Kerf Automation home"
              width={545}
              height={180}
              className="h-8 w-auto md:h-9"
            />
          </Link>
          <nav
            aria-label="Page sections"
            className="hidden items-center gap-x-6 text-sm font-medium md:flex"
          >
            <Link
              href="/#services"
              className="text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
            >
              {site.nav.services}
            </Link>
            <Link
              href="/#results"
              className="text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
            >
              {site.nav.results}
            </Link>
            <Link
              href="/#about"
              className="text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
            >
              {site.nav.about}
            </Link>
          </nav>
        </div>
        <Link
          href={bookHref}
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-kerf-teal bg-transparent px-4 py-2 text-sm font-semibold text-kerf-teal transition hover:bg-kerf-teal/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
        >
          {site.nav.headerCta}
        </Link>
      </div>
    </header>
  );
}
