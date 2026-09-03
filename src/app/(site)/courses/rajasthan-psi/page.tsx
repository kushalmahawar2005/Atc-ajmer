import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import CoursePlans from "@/components/pages/CoursePlans";

export const metadata: Metadata = {
  title: "Rajasthan Police Sub Inspector (PSI) Exam Batch : ATC",
  description: "This Offline and Online Batch for Rajasthan Police Sub Inspector Exam Prepares You for Objective Exam Conducted by RPSC for the Post of PSI. Complete Syllabus Covered in Both Hindi and English Medium along with Comprehensive Test Series.",
  alternates: { canonical: "/courses/rajasthan-psi" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses" },
  { label: "Rajasthan PSI Course" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Comprehensive Course for Rajasthan Police Sub Inspector (PSI) Exam"
    >
      <>
					<div className="content" id="content">
					<p>The course covers the complete syllabus prescribed for the Rajasthan Police SI examination, ensuring that no topic is left untouched. Students receive comprehensive study materials prepared by experts, available in both Hindi and English medium, making it convenient for candidates from diverse backgrounds.<br /><br />

One of the key highlights of this program is personal mentorship, where every student is guided individually in their preparation journey. Continuous motivation and guidance by toppers gives aspirants the confidence to perform better and remain focused under pressure.</p><br />
	 
<p>To test preparation levels, ATC conducts weekly objective tests that help students identify strong and weak areas. Along with this, an exam-oriented test series is provided, designed strictly as per the latest exam pattern. Additionally, mock interviews are conducted to prepare candidates for the personality assessment stage, ensuring they enter the final round with self-assurance and effective communication skills.<br /><br />

ATC emphasizes not just academic success but also holistic development. Expert faculties regularly interact with students, inspire them through motivational sessions, and ensure that they remain committed to their goals throughout the preparation period.<br /><br />

With its structured classes, result-focused approach, and student-friendly learning environment, ATC has become a trusted choice for those preparing for the Rajasthan Police Sub Inspector (PSI) exam. Aspirants trained here are better prepared, more confident, and equipped with the strategies required to secure success in one of the most competitive examinations of Rajasthan.
						</p></div>
	 
<CoursePlans slug="rajasthan-psi" />
</>
    </PageShell>
  );
}
