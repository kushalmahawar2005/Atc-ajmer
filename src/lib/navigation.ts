import { CONTACT } from "./contact";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  /** Label shown in the header bar. */
  label: string;
  /** Label used in the mobile off-canvas menu when it differs. */
  mobileLabel?: string;
  href?: string;
  children?: NavLink[];
};

/** Government sources the Study Material menu links straight out to. */
export const IGNOU_URL = "https://egyankosh.co.in/";
export const SUJAS_URL =
  "https://dipr.rajasthan.gov.in/pages/sm/government-order/attachments/134/85/10/1702";

export const PHONE_PRIMARY = CONTACT.phones[0].label;
export const PHONE_SECONDARY = CONTACT.phones[1].label;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Founder & Vision", href: "/about/director-message" },
      { label: "About Institute", href: "/about" },
      { label: "Ajmer Center", href: "/about/ajmer-centre" },
      { label: "Our Past Selections", href: "/about/selections" },
      { label: "Our Teachers", href: "/about/teachers" },
    ],
  },
  {
    label: "Courses",
    mobileLabel: "Our Courses",
    children: [
      { label: "IAS Course", href: "/courses/ias-foundation" },
      { label: "RAS Course", href: "/courses/ras-foundation" },
      {
        label: "Integrated Course (IAS & RAS)",
        href: "/courses/ias-ras-integrated",
      },
    ],
  },
  {
    label: "Test Series",
    children: [
      { label: "IAS Prelims and Mains", href: "/courses/ias-test-series" },
      { label: "RAS Prelims and Mains", href: "/courses/ras-test-series" },
      { label: "Rajasthan PSI", href: "/courses/psi-test-series" },
      { label: "View All Test Series", href: "/courses/test-series" },
    ],
  },
  {
    label: "Study Material",
    children: [
      { label: "NCERT Books Online", href: "/content/ncert-pdf-download" },
      { label: "IGNOU Study Material ↗", href: IGNOU_URL, external: true },
      { label: "Rajasthan Sujas ↗", href: SUJAS_URL, external: true },
      { label: "Economic Survey", href: "/content/economic-survey" },
      { label: "Explore All Study Materials", href: "/content" },
    ],
  },
  {
    label: "Exam Resources",
    children: [
      { label: "RAS Exam", href: "/content/ras-exam-resources" },
      { label: "UPSC Civil Services", href: "/content/ias-exam-resources" },
      { label: "Rajasthan PSI Exam", href: "/content/rajasthan-psi-exam-resources" },
    ],
  },
  { label: "Contact", mobileLabel: "Contact Us", href: "/about/contact" },
];

export const SELECTIONS_HREF = "/about/selections";
