import { site } from "@/content/site";

import { TrustBrandLogos } from "../TrustBrandLogos";
import { PrimaryCta } from "../PrimaryCta";
import { SectionReveal } from "../SectionReveal";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <SectionReveal
      disableReveal
      className="border-b border-border-soft bg-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-24 pt-12 md:grid md:max-w-6xl md:grid-cols-2 md:items-center md:gap-x-16 md:gap-y-10 md:px-8 md:pb-44 md:pt-24">
        <div className="order-1 flex min-w-0 flex-col gap-5 md:col-start-1 md:row-start-1 md:gap-6 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-kerf-teal md:text-sm">
            {site.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {site.hero.headline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed md:text-xl">
            <span className="font-semibold text-foreground">
              {site.hero.subheadLead}
            </span>{" "}
            <span className="text-muted">{site.hero.subheadRest}</span>
          </p>
        </div>

        <div className="order-2 min-w-0 w-full md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
          <HeroVisual />
        </div>

        <div className="order-3 flex min-w-0 flex-col gap-5 md:col-start-1 md:row-start-2 md:gap-6 md:self-start">
          <div className="flex flex-col gap-3">
            <PrimaryCta>{site.hero.cta}</PrimaryCta>
            <p className="max-w-lg text-sm leading-relaxed text-muted">
              {site.hero.ctaMicrocopy}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border-t border-border-soft pt-6 md:items-start">
            <p className="mx-auto max-w-md text-center text-sm leading-snug text-muted md:mx-0 md:max-w-none md:text-left">
              {site.hero.trustLine}
            </p>
            <TrustBrandLogos
              size="compact"
              tone="soft"
              className="justify-center md:justify-start"
            />
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
