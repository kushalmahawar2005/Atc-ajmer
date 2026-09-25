import { CONTACT } from "./contact";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atcajmer.com";

export const ORGANISATION = {
  name: "ATC",
  legalName: "ATC",
  founded: "2019",
  phones: CONTACT.phones.map((phone) => phone.href.slice(4)),
  email: CONTACT.email,
  maps: CONTACT.maps,
  address: {
    street: "131/10B, 1st Floor, Vijay Sadan, Ajmer Hospital Street, Civil Lines",
    locality: "Ajmer",
    region: "Rajasthan",
    postalCode: "305001",
    country: "IN",
  },
  sameAs: [CONTACT.instagram, CONTACT.facebook, CONTACT.youtube],
};

/** Every crawlable route, with the relative weight used in the sitemap. */
export const ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },

  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/director-message", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/ajmer-centre", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/selections", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about/teachers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/about/terms", priority: 0.3, changeFrequency: "monthly" },
  { path: "/about/refund-policy", priority: 0.3, changeFrequency: "monthly" },

  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/courses/ias-foundation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/courses/ras-foundation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/courses/rajasthan-psi", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses/ias-ras-integrated", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses/ras-mains", priority: 0.7, changeFrequency: "weekly" },
  { path: "/courses/ias-ras-interview", priority: 0.7, changeFrequency: "weekly" },
  { path: "/courses/test-series", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses/ias-test-series", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses/ras-test-series", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses/psi-test-series", priority: 0.7, changeFrequency: "weekly" },

  { path: "/content", priority: 0.7, changeFrequency: "weekly" },
  { path: "/content/ncert-pdf-download", priority: 0.7, changeFrequency: "monthly" },
  { path: "/content/rajasthan-sujas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/content/economic-survey", priority: 0.6, changeFrequency: "monthly" },
  { path: "/content/monthly-magazine", priority: 0.6, changeFrequency: "monthly" },
  { path: "/content/ias-exam-resources", priority: 0.7, changeFrequency: "monthly" },
  { path: "/content/ras-exam-resources", priority: 0.7, changeFrequency: "monthly" },
  { path: "/content/rajasthan-psi-exam-resources", priority: 0.7, changeFrequency: "monthly" },
];
