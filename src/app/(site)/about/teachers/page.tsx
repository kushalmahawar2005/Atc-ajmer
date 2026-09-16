import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import { ORGANISATION, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Faculties For Different Subjects",
  description: "Faculties at ATC are Permanent and are Having Long Experience of Teaching Their Respective Subjects",
  alternates: { canonical: "/about/teachers" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Teachers" },
];

/** Permanent faculty, in the order ATC lists them. */
const teachers = [
  { name: "Dileep Sir", subject: "Indian Polity and Indian Economy", photo: "/images/teachers/dileep-sir.jpg" },
  { name: "Rajveer Sir", subject: "Rajasthan History Art and Culture", photo: "/images/teachers/20260811_87d4dfad1ebd1bc9.jpg" },
  { name: "Narendra Sir", subject: "Indian History Faculty", photo: "/images/teachers/narendra-sir.png" },
  { name: "Lakshita Madam", subject: "India and World Geography", photo: "/images/teachers/lakshita-mam.jpg" },
  { name: "Vijay Sir", subject: "Indian Economy and Ethics", photo: "/images/teachers/vijay-sir.jpg" },
  { name: "Sunil Poonia Sir", subject: "Environment / Biotech / Ecology", photo: "/images/teachers/sunil-sir.jpg" },
  { name: "Vijay Sihag Sir", subject: "Rajasthan Geography", photo: "/images/teachers/vijay-sihag-sir.jpg" },
  { name: "Abhishek Sir", subject: "Indian Polity / IR / Economic Survey", photo: "/images/teachers/abhishesk-sir.jpg" },
  { name: "Krishna Sir", subject: "Maths", photo: "/images/teachers/krishna-sir.jpg" },
  { name: "Rishi Sir", subject: "Reasoning", photo: "/images/teachers/rishi-sir.jpg" },
  { name: "Suryabhan Sir", subject: "Indian History", photo: "/images/teachers/surya-sir.png" },
  { name: "Naveen Sir", subject: "Hindi", photo: "/images/teachers/naveen-sir.jpg" },
  { name: "Sharwan Sir", subject: "Physics", photo: "/images/teachers/sharwan-sir.jpg" },
];

/**
 * Person markup for the faculty. Named, subject-specific teachers tied to the
 * institute are the clearest expertise signal a coaching site can publish.
 */
function FacultyJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Faculty at ATC Ajmer",
    itemListElement: teachers.map((teacher, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: teacher.name,
        jobTitle: `Faculty — ${teacher.subject}`,
        image: `${SITE_URL}${teacher.photo}`,
        knowsAbout: teacher.subject.split(/\s*\/\s*| and /).map((s) => s.trim()),
        worksFor: { "@id": `${SITE_URL}/#organisation` },
        affiliation: { "@id": `${SITE_URL}/#organisation` },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function Page() {
  return (
    <PageShell breadcrumb={breadcrumb} title="Faculties at ATC">
      <FacultyJsonLd />
      <p>
        Every faculty member at {ORGANISATION.name}, Ajmer is permanent and teaches a
        single subject, so students are taught by the same specialist through the whole
        course.
      </p>
      <div className="tg-grid">
        {teachers.map((teacher) => (
          <figure className="tg-card" key={teacher.name} tabIndex={0}>
            <div className="tg-media">
              {/* .tg-media reserves a 3:4 box, so the intrinsic size here only
                  needs to match the file to keep the browser from guessing. */}
              <img
                src={teacher.photo}
                alt={`${teacher.name} — ${teacher.subject} faculty at ATC Ajmer`}
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="tg-overlay">
                <span className="tg-subject">{teacher.subject}</span>
              </figcaption>
            </div>
            <figcaption className="tg-name">{teacher.name}</figcaption>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
