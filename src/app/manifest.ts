import type { MetadataRoute } from "next";

/** Served at /manifest.webmanifest — makes the site installable. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ATC — IAS & RAS Coaching",
    short_name: "ATC",
    description:
      "RAS, IAS and Rajasthan PSI coaching from ATC, Jaipur — courses, test series, study material and exam resources.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#F48232",
    lang: "en-IN",
    categories: ["education"],
    icons: [{ src: "/images/atc-logo.png", sizes: "1254x1254", type: "image/png", purpose: "any" }],
    shortcuts: [
      { name: "Our Courses", url: "/courses" },
      { name: "Test Series", url: "/courses/test-series" },
      { name: "Past Selections", url: "/about/selections" },
      { name: "Contact", url: "/about/contact" },
    ],
  };
}
