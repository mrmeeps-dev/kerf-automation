import { site } from "@/content/site";

import { PrimaryCta } from "../PrimaryCta";
import { SectionReveal } from "../SectionReveal";

export function ClosingCta() {
  return (
    <SectionReveal className="border-t border-border-soft bg-background py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {site.closing.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
          {site.closing.body}
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          {/* Same component + styles as Hero primary CTA (solid teal / white) */}
          <PrimaryCta>{site.closing.cta}</PrimaryCta>
          <p className="text-sm text-muted">{site.closing.microcopy}</p>
        </div>
      </div>
    </SectionReveal>
  );
}
