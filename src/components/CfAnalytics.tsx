import { getCfAnalyticsToken } from "@/lib/env";

/** Cookieless Cloudflare Web Analytics — optional via NEXT_PUBLIC_CF_ANALYTICS_TOKEN */
export function CfAnalytics() {
  const token = getCfAnalyticsToken();
  if (!token) return null;

  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
