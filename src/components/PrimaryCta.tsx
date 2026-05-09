import Link from "next/link";

import { getBookingPageHref } from "@/lib/env";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Primary conversion control — links to the dedicated booking page (`/book`). */
export function PrimaryCta({ children, className = "" }: Props) {
  const href = getBookingPageHref();
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg bg-kerf-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-kerf-teal-hover hover:-translate-y-px hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal ${className}`}
    >
      {children}
    </Link>
  );
}
