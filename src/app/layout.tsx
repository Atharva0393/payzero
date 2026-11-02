import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  metadataBase: new URL("https://payzeroenergy.com"),
  title: {
    default: "Payzero | Let the Sun Pay Your Energy Bills",
    template: "%s | Payzero",
  },
  description:
    "Payzero makes solar energy simple with expert site surveys, custom solar system design, quality components, professional installation, net metering support, and subsidy assistance.",
  keywords: [
    "Payzero",
    "Solar Energy Expert",
    "Commercial Solar Infrastructure",
    "Residential Solar Rooftop",
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
    locale: "en_US",
    url: "https://payzeroenergy.com",
    title: "Payzero | Let the Sun Pay Your Energy Bills",
    description:
      "Payzero makes solar energy simple with expert site surveys, custom solar system design, quality components, professional installation, net metering support, and subsidy assistance.",
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
    title: "Payzero | Let the Sun Pay Your Energy Bills",
    description:
      "Payzero makes solar energy simple with expert site surveys, custom solar system design, quality components, professional installation, net metering support, and subsidy assistance.",
    images: ["/og-image.png"],
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
      </body>
    </html>
  );
}
