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

/** Faculty, in the order ATC lists them. */
const teachers = [
  { name: "Arvind Tiwari", role: "Founder, Director & Faculty", subject: "Political Science, Ethics, Rajasthan GK & Optional PSIR", photo: "/images/teachers/arvind-tiwari.jpg" },
  { name: "Ankita Sharma", role: "Co-Founder & Faculty", subject: "English & Rajasthan Culture", photo: "/images/teachers/ankita-sharma.jpg" },
  { name: "Priya Verma", role: "Faculty", subject: "General Science & Economics", photo: "/images/teachers/priya-verma.jpg" },
  { name: "Harshit Sharma", role: "Faculty", subject: "Science & Technology", photo: "/images/teachers/harshit-sharma.jpg" },
  { name: "Uttam Sharma", role: "Faculty", subject: "Maths & Reasoning", photo: "/images/teachers/uttam-sharma.jpg" },
  { name: "Nishant Pal", role: "Faculty", subject: "International Relations", photo: "/images/teachers/nishant-pal.jpg" },
  { name: "Rahul Sen", role: "Faculty", subject: "Maths & Reasoning", photo: "/images/teachers/rahul-sen.jpg" },
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
        jobTitle: teacher.role,
        image: `${SITE_URL}${teacher.photo}`,
        knowsAbout: teacher.subject.split(/\s*(?:,|&)\s*/).map((s) => s.trim()),
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
        Every faculty member at {ORGANISATION.name}, Ajmer is permanent, so students are
        taught by the same specialists through the whole course.
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
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="tg-overlay">
                <span className="tg-subject">{teacher.subject}</span>
              </figcaption>
            </div>
            <div className="tg-name">
              {teacher.name}
              <span className="tg-role">{teacher.role}</span>
            </div>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
