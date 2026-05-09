import type { Metadata } from "next";
import Link from "next/link";

import { CalBookingEmbed } from "@/components/booking/CalBookingEmbed";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.bookingPage.title,
  description: site.bookingPage.description,
  openGraph: {
    title: site.bookingPage.title,
    description: site.bookingPage.description,
  },
};

export default function BookPage() {
  return (
    <section className="border-b border-border-soft bg-white">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-12 md:pb-28 md:pt-16">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-kerf-teal underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
        >
          ← {site.bookingPage.backLink}
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {site.bookingPage.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {site.bookingPage.intro}
        </p>
        <div className="mt-10 w-full min-w-0">
          <CalBookingEmbed />
        </div>
      </div>
    </section>
  );
}
