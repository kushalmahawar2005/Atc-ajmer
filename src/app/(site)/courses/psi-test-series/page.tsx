import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import CoursePlans from "@/components/pages/CoursePlans";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Objective Test Series for Rajasthan PSI Exam",
  description: "Objective test series for the Rajasthan PSI exam at ATC Ajmer — full syllabus practice with the latest current affairs and Economic Survey.",
  alternates: { canonical: "/courses/psi-test-series" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses" },
  { label: "Rajasthan PSI Test Series" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Rajasthan PSI Test Series by ATC"
    >
      <CourseJsonLd
        slug="psi-test-series"
        path="/courses/psi-test-series"
        name={"Rajasthan PSI Test Series by ATC"}
        description={"Objective test series for the Rajasthan Police Sub Inspector exam at ATC Ajmer, covering the full syllabus with current affairs and the Economic Survey."}
      />
      <>
					<div className="content" id="content">
					<p>Preparing for the Rajasthan Police Sub-Inspector (PSI) examination requires the right strategy, practice, and guidance. At ATC, we have designed a comprehensive Rajasthan PSI Test Series to help aspirants evaluate their preparation, strengthen concepts, and boost confidence before the final exam.<br /><br />
Our test series includes both subject-wise and full length tests. Subject-specific tests allow aspirants to focus on individual areas like General Knowledge, History, Economy, Reasoning, and Current Affairs, while the full-length tests simulate the actual exam environment, ensuring students are well-prepared for time management and exam pressure.</p><br />	
<p>Keeping in view the dynamic nature of the exam, we extensively cover the latest current affairs, with special emphasis on Rajasthan-specific developments along with national and international updates. This gives aspirants an extra edge in the examination.<br />
The tests are conducted as objective tests on OMR sheets, replicating the real exam pattern and helping candidates get comfortable with the marking process, accuracy, and speed. After every test, students receive a detailed performance analysis along with an All India Ranking, so they can evaluate where they stand among thousands of competitors.<br />
One of the standout features of ATC is our detailed paper discussions after every test. Expert faculty members analyze the paper, discuss the most effective approaches to different types of questions, and provide valuable tips for improvement.<br />
Additionally, we provide personal mentorship to every aspirant. Our mentors guide students individually to identify strengths, overcome weaknesses, and improve consistently.<br />
	With dedicated practice, professional guidance, and structured assessments, the Rajasthan PSI Test Series by ATC is the ideal platform for serious aspirants aiming to succeed in the PSI exam.
					</p></div>
         
<CoursePlans slug="psi-test-series" />
</>
    </PageShell>
  );
}
