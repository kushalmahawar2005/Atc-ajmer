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

type Teacher = {
  name: string;
  /** Position held besides teaching, e.g. Co-Founder. Everyone listed is faculty. */
  title?: string;
  subject?: string;
  photo?: string;
};

const featuredTeacher: Teacher = {
  name: "Arvind Tiwari",
  title: "Founder & Director",
  subject: "Political Science, Ethics, Rajasthan GK & Optional PSIR",
  photo: "/images/teachers/arvind-tiwari.jpg",
};

/** Faculty, in the order requested by ATC. */
const teachers: Teacher[] = [
  { name: "Ankita Sharma", title: "Co-Founder", subject: "English & Rajasthan Culture", photo: "/images/teachers/ankita-sharma.jpg" },
  { name: "Ugmaram Kumawat", subject: "Hindi", photo: "/images/teachers/ugmaram-kumawat.jpg" },
  { name: "Dr. Divyansh Saxena", subject: "History", photo: "/images/teachers/divyansh-saxena.jpg" },
  { name: "Harshit Sharma", subject: "Science & Technology", photo: "/images/teachers/harshit-sharma.jpg" },
  { name: "Priya Verma", subject: "General Science & Economics", photo: "/images/teachers/priya-verma.jpg" },
  { name: "Uttam Sharma", subject: "Maths & Reasoning", photo: "/images/teachers/uttam-sharma.jpg" },
  { name: "Nishant Pal", subject: "International Relations", photo: "/images/teachers/nishant-pal.jpg" },
  { name: "Rahul Sen", subject: "Maths & Reasoning", photo: "/images/teachers/rahul-sen.jpg" },
];

const allTeachers = [featuredTeacher, ...teachers];

/**
 * Person markup for the faculty. Named, subject-specific teachers tied to the
 * institute are the clearest expertise signal a coaching site can publish.
 */
function FacultyJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Faculty at ATC Ajmer",
    itemListElement: allTeachers.map((teacher, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: teacher.name,
        jobTitle: teacher.title ? `${teacher.title} & Faculty` : "Faculty",
        ...(teacher.photo ? { image: `${SITE_URL}${teacher.photo}` } : {}),
        ...(teacher.subject
          ? { knowsAbout: teacher.subject.split(/\s*(?:,|&)\s*/).map((s) => s.trim()) }
          : {}),
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
      <div className="tg-featured">
        <TeacherCard teacher={featuredTeacher} featured />
      </div>
      <div className="tg-grid tg-grid--faculty">
        {teachers.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher.name} />
        ))}
      </div>
    </PageShell>
  );
}

function TeacherCard({ teacher, featured = false }: { teacher: Teacher; featured?: boolean }) {
  const facultyLine = teacher.subject ? `${teacher.subject} Faculty` : undefined;
  const details = [teacher.title, facultyLine].filter(Boolean).join(", ");

  return (
    <figure className={`tg-card${featured ? " tg-card--featured" : ""}`}>
      <div className="tg-media">
        {teacher.photo ? (
          // .tg-media reserves a 3:4 box, so the intrinsic size here only
          // needs to match the file to keep the browser from guessing.
          <img
            src={teacher.photo}
            alt={details ? `${teacher.name} — ${details} at ATC Ajmer` : `${teacher.name} at ATC Ajmer`}
            width={600}
            height={600}
            loading={featured ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <div className="tg-noimg">{teacher.name}</div>
        )}
      </div>
      <div className="tg-name">
        {teacher.name}
        {teacher.title ? <span className="tg-role">{teacher.title}</span> : null}
        {facultyLine ? <span className="tg-subject">{facultyLine}</span> : null}
      </div>
    </figure>
  );
}
