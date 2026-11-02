import { IGNOU_URL, PIB_URL, SUJAS_URL } from "./navigation";

/** Right-column sidebar shared by every inner page. */
export const sidebarSections: {
  heading: string;
  icon: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: "Our Courses",
    icon: "fas fa-graduation-cap",
    links: [
      { label: "IAS Foundation Course", href: "/courses/ias-foundation" },
      { label: "RAS Foundation Course", href: "/courses/ras-foundation" },
      { label: "Rajasthan PSI Course", href: "/courses/rajasthan-psi" },
      { label: "3 Year Integrated Course", href: "/courses/ias-ras-integrated" },
      { label: "RAS Mains Exclusive", href: "/courses/ras-mains" },
      { label: "IAS & RAS Interview", href: "/courses/ias-ras-interview" },
    ],
  },
  {
    heading: "Test Series",
    icon: "fas fa-pen-to-square",
    links: [
      { label: "IAS Prelims & Mains", href: "/courses/ias-test-series" },
      { label: "RAS Prelims & Mains", href: "/courses/ras-test-series" },
      { label: "Rajasthan PSI", href: "/courses/psi-test-series" },
    ],
  },
  {
    heading: "Study Material",
    icon: "fas fa-book-open",
    links: [
      { label: "NCERT Books Online", href: "/content/ncert-pdf-download" },
      { label: "IGNOU Study Material ↗", href: IGNOU_URL, external: true },
      { label: "Rajasthan Sujas ↗", href: SUJAS_URL, external: true },
      { label: "Economic Survey", href: "/content/economic-survey" },
      { label: "PIB Prism ↗", href: PIB_URL, external: true },
    ],
  },
  {
    heading: "Exam Resources",
    icon: "fas fa-clipboard-list",
    links: [
      { label: "UPSC Civil Services", href: "/content/ias-exam-resources" },
      { label: "RAS Exam Guide", href: "/content/ras-exam-resources" },
      { label: "PSI Exam Guide", href: "/content/rajasthan-psi-exam-resources" },
    ],
  },
  {
    heading: "Quick Links",
    icon: "fas fa-link",
    links: [
      { label: "Our Past Selections", href: "/about/selections" },
      { label: "Our Teachers", href: "/about/teachers" },
      { label: "Contact Us", href: "/about/contact" },
    ],
  },
];
