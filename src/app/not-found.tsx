import Link from "next/link";

import { PrimaryCta } from "@/components/PrimaryCta";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-kerf-teal">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        That route doesn&apos;t exist. Head back to Kerf Automation or book a
        process audit.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-border-soft bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-surface-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
        >
          Back to home
        </Link>
        <PrimaryCta>{site.hero.cta}</PrimaryCta>
      </div>
    </div>
  );
}
