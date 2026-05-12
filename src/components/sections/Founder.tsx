"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { useMarvelEasterEgg } from "@/components/MarvelEasterEgg";
import { site } from "@/content/site";

import { SectionReveal } from "../SectionReveal";

const MARVEL_LINKEDIN = "https://www.linkedin.com/in/marvelcrc/";

export function Founder() {
  const { revealed } = useMarvelEasterEgg();
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal
      id="about"
      className="scroll-mt-24 border-t border-border-soft bg-white py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {revealed ? (
          <div className="flex flex-col items-stretch">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {site.founder.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted md:text-base">
              {site.marvelInvite.sectionTagline}
            </p>

            <div className="mt-12 grid grid-cols-1 gap-12 border-t border-border-soft pt-12 lg:grid-cols-2 lg:gap-14 lg:pt-14">
              <article className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border border-border-soft shadow-md ring-1 ring-border-soft md:h-56 md:w-56">
                  <Image
                    src="/brand/founder-kyle-hamilton.jpg"
                    alt="Kyle Hamilton, Principal Operational Engineer"
                    width={429}
                    height={484}
                    className="h-full w-full object-cover object-center"
                    sizes="(max-width: 1024px) 192px, 224px"
                    priority={false}
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {site.founder.signatureName}
                </p>
                <p className="text-sm text-muted">{site.founder.signatureRole}</p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  {site.founder.body}
                </p>
              </article>

              <motion.article
                id="marvel-easter-reveal"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="flex flex-col items-center border-t border-border-soft pt-12 text-center lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0 lg:text-left"
              >
                <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border border-border-soft shadow-md ring-1 ring-border-soft md:h-56 md:w-56">
                  <Image
                    src="/brand/1719853443904.jpeg"
                    alt={site.marvelInvite.name}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center"
                    sizes="(max-width: 1024px) 192px, 224px"
                    priority={false}
                  />
                </div>
                <div className="mt-3 flex flex-col items-center gap-1 lg:items-start">
                  <p className="text-sm font-semibold text-foreground">
                    {site.marvelInvite.name}
                  </p>
                  <a
                    href={MARVEL_LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-kerf-teal underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kerf-teal"
                  >
                    {site.marvelInvite.linkedInLabel}
                  </a>
                </div>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  {site.marvelInvite.bio}
                </p>
                <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-foreground md:text-lg">
                  {site.marvelInvite.pitch}
                </p>
              </motion.article>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
            <div className="flex justify-center md:col-span-1 md:justify-end">
              <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border border-border-soft shadow-md ring-1 ring-border-soft md:h-64 md:w-64">
                <Image
                  src="/brand/founder-kyle-hamilton.jpg"
                  alt="Kyle Hamilton, Principal Operational Engineer"
                  width={429}
                  height={484}
                  className="h-full w-full object-cover object-center"
                  sizes="(max-width: 768px) 192px, 256px"
                  priority={false}
                />
              </div>
            </div>

            <div className="text-left md:col-span-2">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {site.founder.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                {site.founder.body}
              </p>
              <p className="mt-8 text-base text-foreground md:text-lg">
                <span className="font-bold">{site.founder.signatureName}</span>
                <span className="font-normal text-muted">
                  , {site.founder.signatureRole}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </SectionReveal>
  );
}
