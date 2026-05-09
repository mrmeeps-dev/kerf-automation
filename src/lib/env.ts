/** In-app booking route — all CTAs point here; embed lives on this page. */
export const BOOKING_PAGE_PATH = "/book" as const;

export function getBookingPageHref(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_PAGE_PATH?.trim();
  if (raw?.startsWith("/")) return raw;
  if (raw) return `/${raw.replace(/^\/+/, "")}`;
  return BOOKING_PAGE_PATH;
}

/** In-app contact form (Tally). Footer “Contact Us” links here. */
export const CONTACT_PAGE_PATH = "/contact" as const;

export function getContactPageHref(): string {
  const raw = process.env.NEXT_PUBLIC_CONTACT_PAGE_PATH?.trim();
  if (raw?.startsWith("/")) return raw;
  if (raw) return `/${raw.replace(/^\/+/, "")}`;
  return CONTACT_PAGE_PATH;
}

/**
 * Public defaults when `NEXT_PUBLIC_*` is unset at build time (e.g. Cloudflare Worker
 * runtime vars do not replace values inlined by `next build`). Override via env for
 * staging or forks.
 */
const DEFAULT_BOOKING_URL = "https://cal.com/kerf-automation";
const DEFAULT_CAL_LINK = "kerf-automation";

/** Fallback external booking URL (Cal.com, mailto) when embed cannot load or for backwards compatibility. */
export function getBookingUrl(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (raw) return raw;
  return DEFAULT_BOOKING_URL;
}

const KERF_TEAL = "#49babc";

/**
 * Path for `@calcom/embed-react` (e.g. `your-org/process-audit`).
 * Prefer `NEXT_PUBLIC_CAL_LINK`; otherwise derived from a cal.com `NEXT_PUBLIC_BOOKING_URL`.
 * Falls back to the public Kerf Cal slug when env is unset so CI-less builds still embed.
 */
export function getCalLink(): string {
  const explicit = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  if (explicit) {
    return explicit.replace(/^\/+|\/+$/g, "");
  }

  const booking = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? "";
  if (!booking.startsWith("http")) {
    return DEFAULT_CAL_LINK;
  }

  try {
    const url = new URL(booking);
    const host = url.hostname.replace(/^www\./, "");
    if (
      host === "cal.com" ||
      host.endsWith(".cal.com") ||
      host === "cal.dev"
    ) {
      const path = url.pathname.replace(/^\/+|\/+$/g, "");
      return path || DEFAULT_CAL_LINK;
    }
  } catch {
    return DEFAULT_CAL_LINK;
  }

  return DEFAULT_CAL_LINK;
}

/** Brand accent passed into Cal embed (`styles.branding.brandColor`). */
export function getCalBrandColor(): string {
  return process.env.NEXT_PUBLIC_CAL_BRAND_COLOR?.trim() || KERF_TEAL;
}

export function getLinkedInUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  return url?.trim() || undefined;
}

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kerfautomation.com";
  try {
    return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
  } catch {
    return new URL("https://kerfautomation.com");
  }
}

export function getCfAnalyticsToken(): string | undefined {
  const t = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;
  return t?.trim() || undefined;
}
