import Link from "next/link";

import { site } from "@/content/site";
import { getContactPageHref, getLinkedInUrl } from "@/lib/env";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const linkedIn = getLinkedInUrl();
  const contactHref = getContactPageHref();

  return (
    <footer className="border-t border-border-soft bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted">
          <span>
            © {year} {site.footer.brandName}
          </span>
          <span className="select-none text-border-soft" aria-hidden>
            |
          </span>
          <Link
            href={contactHref}
            className="font-medium text-kerf-teal underline-offset-4 transition hover:text-accent-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
          >
            {site.footer.contactLinkLabel}
          </Link>
          {linkedIn ? (
            <>
              <span className="select-none text-border-soft" aria-hidden>
                |
              </span>
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-kerf-teal underline-offset-4 transition hover:text-accent-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
              >
                {site.footer.linkedInLabel}
              </a>
            </>
          ) : null}
        </p>
      </div>
    </footer>
  );
}
