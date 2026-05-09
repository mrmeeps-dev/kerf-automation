"use client";

import type { PrefillAndIframeAttrsConfig } from "@calcom/embed-core";
import Cal from "@calcom/embed-react";

import { getBookingUrl, getCalBrandColor, getCalLink } from "@/lib/env";

/** Full-width Cal inline embed — used on the dedicated `/book` page. */
export function CalBookingEmbed() {
  const calLink = getCalLink();
  const brandColor = getCalBrandColor();
  const fallbackHref = getBookingUrl();
  const fallbackExternal = fallbackHref.startsWith("http");

  if (!calLink?.trim()) {
    return (
      <div className="rounded-2xl border border-border-soft bg-background px-6 py-10 text-center shadow-sm">
        <p className="text-sm leading-relaxed text-muted">
          Scheduling isn&apos;t configured on this build. Use the link below or email{" "}
          <a
            href="mailto:hello@kerfautomation.com"
            className="font-semibold text-kerf-teal underline-offset-2 hover:underline"
          >
            hello@kerfautomation.com
          </a>
          .
        </p>
        <a
          href={fallbackHref}
          {...(fallbackExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-kerf-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-kerf-teal-hover"
        >
          Open booking
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[min(100%,560px)] overflow-hidden rounded-2xl border border-kerf-teal/20 bg-white shadow-sm ring-1 ring-kerf-teal/10">
      <Cal
        calLink={calLink}
        config={
          {
            theme: "light",
            layout: "month_view",
            styles: {
              branding: {
                brandColor,
              },
            },
          } as unknown as PrefillAndIframeAttrsConfig
        }
        style={{
          width: "100%",
          height: "min(85dvh, 760px)",
          minHeight: "480px",
          overflow: "auto",
        }}
      />
    </div>
  );
}
