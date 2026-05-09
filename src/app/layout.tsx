import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CfAnalytics } from "@/components/CfAnalytics";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteUrl } from "@/lib/env";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Kerf Automation — Stop doing robotic work",
    template: "%s | Kerf Automation",
  },
  description:
    "Silicon Valley operational precision for SMB workflows. We eliminate manual data entry, automate audits, and unify systems so your team gets its time back.",
  icons: {
    icon: [{ url: "/brand/kerf_automation_favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Kerf Automation — Stop doing robotic work",
    description:
      "Silicon Valley operational precision for SMB workflows. Eliminate manual data entry, automate complex audits, and get your time back.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerf Automation — Stop doing robotic work",
    description:
      "Silicon Valley operational precision for SMB workflows. Root-cause process improvement—not an AI wrapper.",
  },
};

export const viewport: Viewport = {
  themeColor: "#49BABC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <CfAnalytics />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
