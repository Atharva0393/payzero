import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingGenerativeTree from "@/components/ui/floating-generative-tree";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-sans",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Payzero | High-Performance Solar Infrastructure & Clean Energy Assets",
    template: "%s | Payzero",
  },
  description:
    "Payzero designs and deploys utility-grade solar energy architecture, battery storage systems, and zero-loss power infrastructure for commercial and premium residential clients.",
  keywords: [
    "Payzero",
    "Commercial Solar Infrastructure",
    "Precision Energy Systems",
    "Industrial Battery Storage",
    "Solar Capital Investments",
    "Architectural Solar Integration",
  ],
  authors: [{ name: "Payzero Infrastructure" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://payzero.com",
    title: "Payzero | High-Performance Solar Infrastructure",
    description:
      "Utility-grade energy architecture engineered for long-term independence, cash-flow optimization, and grid resilience.",
    siteName: "Payzero",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payzero Infrastructure",
    description: "Engineering high-yield solar energy architecture and battery storage systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8E7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingGenerativeTree />
      </body>
    </html>
  );
}
