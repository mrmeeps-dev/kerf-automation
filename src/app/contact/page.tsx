import type { Metadata } from "next";
import Link from "next/link";

import { TallyContactEmbed } from "@/components/TallyContactEmbed";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.contactPage.title,
  description: site.contactPage.description,
  openGraph: {
    title: site.contactPage.title,
    description: site.contactPage.description,
  },
};

export default function ContactPage() {
  return (
    <section className="border-b border-border-soft bg-white">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-12 md:pb-28 md:pt-16">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-kerf-teal underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
        >
          ← {site.contactPage.backLink}
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {site.contactPage.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {site.contactPage.intro}
        </p>
        <div className="mt-10 w-full min-w-0">
          <TallyContactEmbed />
        </div>
      </div>
    </section>
  );
}
