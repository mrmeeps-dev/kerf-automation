"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Skip entrance animation (use for above-the-fold hero so content is never opacity-0). */
  disableReveal?: boolean;
};

export function SectionReveal({
  children,
  className,
  id,
  disableReveal = false,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce || disableReveal) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
