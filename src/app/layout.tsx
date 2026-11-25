import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SolarCursor from "@/components/ui/SolarCursor";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/data/site";
import { getWebSiteSchema, getOrganizationSchema } from "@/lib/schema";

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Payzero | Solar EPC Company in Chhatrapati Sambhajinagar, Maharashtra",
    template: "%s | Payzero",
  },
  description:
    "Payzero is a full-service solar EPC company in Chhatrapati Sambhajinagar, Maharashtra. We deliver residential, commercial, industrial and ground-mounted solar solutions, with MSEDCL net metering and government subsidy assistance.",
  keywords: [
    "Payzero",
    "Solar Energy Expert",
    "Solar EPC Company Chhatrapati Sambhajinagar",
    "Solar Installation Maharashtra",
    "Commercial Solar Infrastructure",
    "Residential Solar Rooftop",
    "Industrial Solar Rooftops",
    "Ground Mounted Solar",
    "Solar Net Metering",
    "Solar Subsidy Assistance",
    "Industrial Battery Storage",
  ],
  authors: [{ name: "Payzero Energy Expert" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Payzero | Solar EPC Company in Chhatrapati Sambhajinagar, Maharashtra",
    description:
      "Turnkey solar EPC solutions for residential rooftops, commercial buildings, industrial facilities, and ground-mounted power plants across Maharashtra.",
    siteName: "Payzero",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Payzero – Solar Energy Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payzero | Solar EPC Company in Chhatrapati Sambhajinagar, Maharashtra",
    description:
      "Turnkey solar EPC solutions for residential rooftops, commercial buildings, industrial facilities, and ground-mounted power plants across Maharashtra.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
  const websiteSchema = getWebSiteSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
    >
      <head>
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <SolarCursor />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
