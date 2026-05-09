import { site } from "@/content/site";
import { getLinkedInUrl } from "@/lib/env";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const linkedIn = getLinkedInUrl();

  return (
    <footer className="border-t border-border-soft bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-5 text-center text-sm text-muted md:px-8">
        <p>
          © {year} {site.footer.brandName}
        </p>
        {linkedIn ? (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-kerf-teal underline-offset-4 transition hover:text-accent-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
          >
            {site.footer.linkedInLabel}
          </a>
        ) : null}
      </div>
    </footer>
  );
}
