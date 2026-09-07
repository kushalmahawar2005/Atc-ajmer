import type { Metadata, Viewport } from "next";
import { Inter, Merriweather, Noto_Sans_Devanagari } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Best Coaching Institute for RAS / IAS Civil Service Exams : ATC",
    template: "%s | ATC",
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
    siteName: "ATC",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: SITE_URL,
    title: "Best Coaching Institute for RAS / IAS Civil Service Exams",
    description:
      "ATC Ajmer — Knowledge is Growth... Growth is Life. 7 selections in RAS 2021 and 5 selections in RAS 2023.",
    images: [
      {
        url: "/images/atc-logo.png",
        width: 1254,
        height: 1254,
        alt: "ATC logo",
      },
    ],
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
    icon: [
      { url: "/images/atc-logo.png", type: "image/png", sizes: "1254x1254" },
    ],
    apple: [{ url: "/images/atc-logo.png", sizes: "1254x1254" }],
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
      className={`${inter.variable} ${merriweather.variable} ${notoDevanagari.variable}`}
      // Browser extensions (Dark Reader, Grammarly, …) stamp attributes onto
      // <html>/<body> before React hydrates; ignore that diff.
      suppressHydrationWarning
    >
      <head>
        {/* Font Awesome powers the icon set the original markup uses. */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
