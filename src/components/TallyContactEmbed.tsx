"use client";

import Script from "next/script";

const TALLY_EMBED_QUERY =
  "alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

function initTallyEmbeds() {
  if (typeof window === "undefined") return;
  if (window.Tally) {
    window.Tally.loadEmbeds();
    return;
  }
  document.querySelectorAll<HTMLIFrameElement>(
    "iframe[data-tally-src]:not([src])",
  ).forEach((el) => {
    const src = el.dataset.tallySrc;
    if (src) el.src = src;
  });
}

export function TallyContactEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border-soft bg-white/80 shadow-sm ring-1 ring-border-soft/80">
      <iframe
        data-tally-src={`https://tally.so/embed/81Ad5Y?${TALLY_EMBED_QUERY}`}
        loading="lazy"
        width="100%"
        height={447}
        title="Contact Kerf Automation"
        className="block min-h-[380px] w-full border-0"
      />
      <Script
        id="tally-embed-js"
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={initTallyEmbeds}
        onError={initTallyEmbeds}
      />
    </div>
  );
}
