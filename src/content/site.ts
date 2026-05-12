/** Wireframe copy — verbatim from core_concept.md */

export const site = {
  hero: {
    eyebrow: "Operational automation for growing teams",
    headline: "Stop doing robotic work.",
    subheadLead:
      "Silicon Valley operational precision for your daily workflows—without the enterprise overhead.",
    subheadRest:
      "We eliminate manual data entry, automate complex audits, and give your team its time back.",
    cta: "Book a Free Process Audit",
    ctaMicrocopy:
      "30-minute call. We map one painful workflow and outline how to automate it—no prep required.",
    trustLine: "Former Google & Meta operational engineering.",
  },
  bookingPage: {
    title: "Book a process audit",
    description:
      "Schedule a free Process Audit with Kerf Automation. Pick a time—no prep required.",
    intro:
      "Choose a slot below. We'll map one frustrating manual workflow and outline how to automate it.",
    backLink: "Back to home",
  },
  contactPage: {
    title: "Contact us",
    description:
      "Send a message to Kerf Automation. We respond by email—no call required.",
    intro:
      "Use the form below; we’ll get back to you as soon as we can.",
    backLink: "Back to home",
  },
  symptoms: {
    heading: "You know there is a better way. We build it.",
    subtext:
      "If your team is experiencing any of these, you are losing money to operational friction. We build the exact tools you wish you had.",
    pains: [
      {
        title: "Spreadsheet Chaos",
        body: "Spending hours manually comparing versions, fixing broken formulas, and moving data between tabs.",
      },
      {
        title: "Disconnected Systems",
        body: "Copying and pasting information between software platforms that refuse to talk to each other.",
      },
      {
        title: "Manual Tracking",
        body: "Relying on massive email threads and handwritten notes to track critical business workflows.",
      },
    ],
  },
  authority: {
    heading: "Elite operational engineering, applied to your business.",
    paragraphs: [
      "Kerf Automation was founded on eight years of experience driving root-cause process improvement at Google and Meta. We don't just write scripts; we tear down broken workflows and rebuild them for scale, security, and absolute precision.",
      "We remove the operational waste—the kerf—so your systems snap together flawlessly.",
    ],
  },
  founder: {
    heading: "Elite Scale, Applied.",
    body:
      "As a Principal Operational Engineer, I bring eight years of experience engineering internal tooling and managing complex organizational workflows at both Google and Meta. I've seen the systemic inefficiencies of manual work—and I've engineered the root-cause solutions that eliminate them. I don't just build for massive scale; I bring enterprise-grade reliability to the everyday systems that run your business. I am not a generalized consultant; I am your dedicated automation partner, committed to unlocking your team's true potential.",
    signatureName: "Kyle Hamilton",
    signatureRole: "Principal Operational Engineer",
  },
  /** Shown only after the desktop “marvel” easter egg — pitch to join Kerf. */
  marvelInvite: {
    name: "Marvel Matarrita",
    sectionTagline:
      "Two operators. One standard for how work should feel when the systems are right.",
    bio:
      "Twenty-plus years leading People Services, HR shared services, and high-volume operations across Meta, Google, HP Enterprise, and IBM. At Meta he is People Service Delivery Manager; at Google he ran Global Ads Support for top-tier advertisers—over a million cases annually across 26 workflows—and led vendor and LATAM program management for Ads Support. Earlier roles scaled HR, payroll, and contact centers across the Americas and Europe. Bilingual English and Spanish—steady under pressure; focused on making large service operations repeatable.",
    pitch:
      "Kerf is a small shop building serious automation for real businesses—not decks, not hype. If you want end-to-end ownership, sharp execution, and the kind of craft that shows up in the product, we’d love to explore building this with you.",
  },
  operationalRoi: {
    heading: "Proven Operational ROI",
    results: [
      {
        title: "Payroll Automation",
        body: "Automated complex monthly payroll audits, saving 260+ hours of manual review per month.",
      },
      {
        title: "Decision Trees",
        body: "Engineered automated decision-tree workflows, reclaiming 40+ hours of operational bandwidth monthly.",
      },
      {
        title: "Document Generation",
        body: "Built programmatic template generation, eliminating 25+ hours of manual formatting every month.",
      },
    ],
  },
  closing: {
    headline: "Let's find your bottleneck.",
    body: "Book a 30-minute Process Audit. We'll map out your most frustrating manual workflow and show you exactly how to automate it.",
    cta: "Schedule Process Audit",
    microcopy: "No cost. No commitment. Just root-cause problem solving.",
  },
  nav: {
    headerCta: "Book Audit",
    services: "Services",
    results: "Results",
    about: "About",
  },
  footer: {
    brandName: "Kerf Automation",
    linkedInLabel: "LinkedIn",
    contactLinkLabel: "Contact Us",
  },
} as const;
