import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import CoursePlans from "@/components/pages/CoursePlans";
import { courseDetails } from "@/lib/course-details";
const details = courseDetails["ras-test-series"];
export const metadata: Metadata = {
  title: details.title,
  description: details.metaDescription,
  alternates: { canonical: "/courses/ras-test-series" },
};
export default function Page() {
  return (
    <PageShell
      title={details.title}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Courses", href: "/courses" },
        { label: details.title },
      ]}
    >
      <CourseJsonLd
        slug="ras-test-series"
        path="/courses/ras-test-series"
        name={details.title}
        description={details.sections[0].paragraphs[0]}
      />
      <div className="content">
        {details.sections.map((section) => (
          <section key={section.title} style={{ marginBottom: 28 }}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} style={{ marginTop: 16 }}>
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
      <CoursePlans slug="ras-test-series" />
    </PageShell>
  );
}
