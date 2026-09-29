import type { Metadata, Viewport } from "next";
import Analytics from "@/components/layout/Analytics";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Coaching Institute for RAS / IAS Civil Services | ATC Ajmer",
    template: "%s | ATC Ajmer",
  },
  description:
    "ATC Ajmer — UPSC and RAS coaching founded in 2019 by Arvind Tiwari. Complete preparation for Prelims, Mains and Interview.",
  applicationName: "ATC",
  keywords: [
    "RAS coaching in Ajmer",
    "IAS coaching in Ajmer",
    "civil services coaching Rajasthan",
    "RAS test series",
    "UPSC coaching Ajmer",
    "Rajasthan PSI coaching",
    "RAS foundation course",
    "IAS foundation course",
  ],
  authors: [{ name: "ATC", url: SITE_URL }],
  creator: "ATC",
  publisher: "ATC",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    // og:site_name is one of the signals Google picks the SERP site name from;
    // keep it identical to the WebSite schema name in StructuredData.tsx.
    siteName: "ATC Ajmer",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: SITE_URL,
    title: "Best Coaching Institute for RAS / IAS Civil Service Exams",
    description:
      "ATC Ajmer — Knowledge is Growth... Growth is Life. 7 selections in RAS 2021 and 5 selections in RAS 2023.",
    // The 1200×630 card comes from src/app/opengraph-image.png, which Next
    // attaches to every route; declaring a square logo here would override it.
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Coaching Institute for RAS / IAS Civil Service Exams",
    description:
      "ATC Ajmer — UPSC, RAS and Rajasthan PSI coaching. Courses, test series and free study material.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: { google: "2u0lXXTgXD9YQkNomDjSI9VkhEZ6VGl0DcVme-xHZRs" },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "ATC",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: true, address: true },
  icons: {
    // Google indexes whatever /favicon.ico serves, so the declared set and the
    // file on disk both have to be the ATC mark — see scripts/generate-icons.mjs.
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#00374C",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // Browser extensions (Dark Reader, Grammarly, …) stamp attributes onto
      // <html>/<body> before React hydrates; ignore that diff.
      suppressHydrationWarning
    >
      <head>
        {/* Loaded by the browser, not fetched at build time: the Hostinger
            build server hangs when next/font tries to reach Google Fonts. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&family=Noto+Sans+Devanagari:wght@400;600;700&display=swap"
        />
        {/* Font Awesome powers the icon set the original markup uses. */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
