import { CONTACT } from "./contact";
import { PIB_URL } from "./navigation";

/**
 * Home page content, mirroring the live site.
 *
 * These are the values the DB tables in `src/db/schema.ts` will eventually
 * serve; keeping them in one module means swapping in a query later touches
 * only the page, not the section components.
 */

export const sliderImages = [
  {
    src: "/images/slider/diwali-discount-2026-v2.webp",
    alt: "Diwali discount: 10% off on registration for RAS Mains and RAS Foundation courses, register by 20 November 2026",
  },
  {
    src: "/images/slider/ras-mains-upcoming.webp",
    alt: "RAS Mains upcoming batch starting 10 December 2026",
  },
  {
    src: "/images/slider/ras-foundation-upcoming.webp",
    alt: "RAS Foundation upcoming batch starting 10 December 2026",
  },
  {
    src: "/images/slider/ras-results.webp",
    alt: "ATC RAS selections and results for 2021 and 2023",
  },
];

export const stats = [
  { number: "2019", label: "Founded in Ajmer" },
  { number: "7", label: "Selections — RAS 2021" },
  { number: "5", label: "Selections — RAS 2023" },
  { number: "3", label: "Stages: Prelims, Mains & Interview" },
];

export const newBatches = [
  "RAS Mains - 10 December 2026",
  "RAS Foundation - 10 December 2026",
];

export const enrollFeatures = [
  "✓ Offline & Online Modes",
  "✓ Hindi & English Medium",
  "✓ Expert Faculty",
];

export const homeCourses = [
  {
    href: "/courses/ias-foundation",
    image: "/images/ias-foundation-atc-v1.png",
    title: "IAS Foundation Course",
    description:
      "This foundation course prepares you for the UPSC civil services exam for all its stages including IAS Prelims + Mains + Interview. There will be regular tests for both subjective and objective exams inclusive of extensive guidance for CSAT paper.",
  },
  {
    href: "/courses/ras-foundation",
    image: "/images/ras-foundation-assembly-v2.png",
    title: "RAS Foundation Course",
    description:
      "Starting with the basics of all the subjects covering entire syllabus of RAS exam this foundation course prepares you for RAS Prelims Mains and Interview. Join this course to join the most prestigious services of Rajasthan.",
  },
  {
    href: "/courses/rajasthan-psi",
    image: "/images/rajasthan-psi-atc-v1.png",
    title: "Rajasthan PSI Course",
    description:
      "Classroom and Online course for the complete preparation of Rajasthan PSI exam. Objective Test series with latest current affairs also included.",
  },
  {
    href: "/courses/ias-ras-integrated",
    image: "/images/ias-ras-integrated-atc-v1.png",
    title: "IAS RAS 3 Years Integrated Course",
    description:
      "Three Years Integrated Course for the Preparation of UPSC and RPSC Exams Along with Graduation.",
  },
  {
    href: "/courses/test-series",
    image: "/images/test-series-atc-v1.png",
    title: "Test Series Programs",
    description:
      "Subjective and Objective Test series program for the preparation of IAS Prelims and IAS Mains exam.",
  },
  {
    href: "/courses/ias-ras-interview",
    image: "/images/ras-interview-atc-v1.png",
    title: "Interview Guidance Program",
    description:
      "This Exclusive Course for Interview Guidance and Mock Interview Programs Prepares you for Interviews of IAS, RAS and PSI Exams.",
  },
];

export const whyChooseUs = [
  {
    title: "Expert Faculty:",
    body: "Learn from our experienced faculties in respective subjects.",
  },
  { title: "Comprehensive Coverage:", body: "Complete syllabus with regular updates" },
  {
    title: "Proven Results:",
    body: "7 selections in RAS 2021 and 5 selections in RAS 2023",
  },
  { title: "Personalized Mentorship:", body: "One-on-one guidance sessions" },
  { title: "Study Material:", body: "High-quality notes and practice questions" },
  { title: "Test Series:", body: "All India mock tests with detailed analysis" },
];

export const quickLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "UPSC Exam Resources", href: "/content/ias-exam-resources" },
  { label: "RAS Exam Resources", href: "/content/ras-exam-resources" },
  { label: "Our Past Selections", href: "/about/selections" },
  { label: "NCERT Books PDF Download", href: "/content/ncert-pdf-download" },
  {
    label: "Rajasthan Sujas Download",
    href: "https://dipr.rajasthan.gov.in/pages/sm/government-order/attachments/134/85/10/1702",
    external: true,
  },
  { label: "Economic Survey (Raj & India)", href: "/content/economic-survey" },
  { label: "PIB Prism", href: PIB_URL, external: true },
];

export const videos = [
  {
    id: "YEwjqkZKsdw",
    image: `https://i.ytimg.com/vi/YEwjqkZKsdw/hqdefault.jpg`,
    alt: "The Story of Emergency (1971-75)",
    title: "The Story of Emergency (1971-75)",
  },
  {
    id: "cBdD9AeyFiQ",
    image: `https://i.ytimg.com/vi/cBdD9AeyFiQ/hqdefault.jpg`,
    alt: "RAS Interview Guidance Part 1 | By Arvind Tiwari",
    title: "RAS Interview Guidance Part 1 | By Arvind Tiwari",
  },
  {
    id: "XtRs9BQ-HnQ",
    image: `https://i.ytimg.com/vi/XtRs9BQ-HnQ/hqdefault.jpg`,
    alt: "Ramprasad, Rank 123 | RAS Topper 2021 | Mock Interview",
    title: "Ramprasad, Rank 123 | RAS Topper 2021 | Mock Interview",
  },
];

export const socialLinks = [
  { key: "instagram", href: CONTACT.instagram, title: "Instagram", icon: "fab fa-instagram" },
  { key: "facebook", href: CONTACT.facebook, title: "Facebook", icon: "fab fa-facebook-f" },
  { key: "youtube", href: CONTACT.youtube, title: "YouTube", icon: "fab fa-youtube" },
  { key: "whatsapp", href: CONTACT.whatsapp, title: "WhatsApp", icon: "fab fa-whatsapp" },
];

export const footerColumns = [
  {
    heading: "About Us",
    links: [
      { label: "About Institute", href: "/about" },
      { label: "Ajmer Centre", href: "/about/ajmer-centre" },
      { label: "Contact Us", href: "/about/contact" },
      { label: "Our Past Selections", href: "/about/selections" },
    ],
  },
  {
    heading: "Test Series",
    links: [
      { label: "IAS Prelims & Mains", href: "/courses/ias-test-series" },
      { label: "RAS Prelims & Mains", href: "/courses/ras-test-series" },
      { label: "Rajasthan PSI", href: "/courses/psi-test-series" },
      { label: "All Test Series", href: "/courses/test-series" },
    ],
  },
  {
    heading: "Our Courses",
    links: [
      { label: "IAS Foundation Course", href: "/courses/ias-foundation" },
      { label: "RAS Foundation Course", href: "/courses/ras-foundation" },
      { label: "Rajasthan PSI & RAS Pre", href: "/courses/rajasthan-psi" },
      { label: "IAS & RAS Interview", href: "/courses/ias-ras-interview" },
      { label: "View All Courses", href: "/courses" },
    ],
  },
];

export const YOUTUBE_CHANNEL_URL = CONTACT.youtube;
export const WHATSAPP_CHAT_URL = CONTACT.whatsapp;
