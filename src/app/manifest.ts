import type { MetadataRoute } from "next";

/** Served at /manifest.webmanifest — makes the site installable. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ATC — IAS & RAS Coaching",
    short_name: "ATC",
    description:
      "RAS, IAS and Rajasthan PSI coaching from ATC, Ajmer — courses, test series, study material and exam resources.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#00374C",
    lang: "en-IN",
    categories: ["education"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-256.png", sizes: "256x256", type: "image/png", purpose: "any" },
      { src: "/icons/icon-384.png", sizes: "384x384", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Our Courses", url: "/courses" },
      { name: "Test Series", url: "/courses/test-series" },
      { name: "Past Selections", url: "/about/selections" },
      { name: "Contact", url: "/about/contact" },
    ],
  };
}
