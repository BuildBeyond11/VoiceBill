import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoiceBill Invoicing — Voice-to-Invoice for Plumbers, HVAC & Electricians",
  description:
    "Stop doing paperwork in your truck. Turn a 30-second voice note into a professional invoice with Stripe payment link. Zero typing. Built for trade pros.",
  keywords: [
    "voice invoicing for plumbers",
    "hands-free billing for HVAC",
    "electrical contractor invoice automation",
    "field service invoice app",
    "contractor paperwork stress",
    "delayed billing cash flow",
    "field service admin burnout",
    "trade pro invoicing app",
    "voice to invoice",
    "contractor billing software",
  ],
  authors: [{ name: "VoiceBill Invoicing" }],
  openGraph: {
    title: "VoiceBill Invoicing — Just Talk. We'll Invoice.",
    description:
      "Turn a 30-second voice note into a professional billable invoice. Built for plumbers, HVAC techs, and electricians.",
    type: "website",
    locale: "en_US",
    siteName: "VoiceBill Invoicing",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceBill Invoicing — Zero-Entry Invoicing for Trade Pros",
    description:
      "Stop typing invoices in your truck. Just talk. AI generates the invoice + Stripe payment link instantly.",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VoiceBill",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF4F00" },
    { media: "(prefers-color-scheme: dark)",  color: "#0d2238" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="VoiceBill" />
        <meta name="application-name" content="VoiceBill" />
        <meta name="msapplication-TileColor" content="#FF4F00" />
      </head>
      <body className="min-h-screen bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
