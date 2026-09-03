import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import CoursePlans from "@/components/pages/CoursePlans";

export const metadata: Metadata = {
  title: "3 Years Integrated Course for The Preparation of UPSC and RPSC Exams : ATC",
  description: "Supplement Your College Studies With The Preparation For The Most Prestigious Exams Like IAS and RAS, This Three Years Integrated Course Prepares You For Civil Services Exams",
  alternates: { canonical: "/courses/ias-ras-integrated" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses" },
  { label: "IAS RAS Integrated Course" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="ATC \u2013 3 Years Integrated Course for IAS and RAS Preparation"
    >
      <>
					<div className="content" id="content">
					<p>ATC proudly presents its 3 Years Integrated Course designed exclusively for aspirants of the IAS and RAS examinations. This long-term program is carefully structured to provide a solid foundation, consistent guidance, and progressive training for students who wish to start their preparation early and pursue their dream of becoming civil servants.<br /><br />
The course is offered in both Hindi and English Medium, ensuring that aspirants from diverse educational backgrounds can learn in the language they are most comfortable with. From the very first year, students are introduced to the fundamentals of General Studies, optional subjects, current affairs, and essay writing, gradually building up to advanced topics required for Prelims, Mains, and Interview stages.	   	 </p><br />
	
	
<p>A major highlight of this program is the provision of high quality study material. The content is carefully curated by experts based on the latest UPSC and RPSC exam trends, ensuring that students always receive authentic, concise, and updated resources. Along with study material, special emphasis is given to answer writing skill development, a critical aspect for success in the Mains examination. Students are trained to present their answers in a structured, analytical, and impactful manner.<br />
The course does not end with academics alone. At ATC, equal importance is given to personality development. Regular interactive sessions, group discussions, and interview training equip aspirants with communication skills, confidence, and leadership qualities that are essential for administrative roles.<br /><br />
	
Another unique advantage of this integrated program is interaction with the toppers. Special sessions are organized where successful candidates share their strategies, preparation techniques, and personal experiences, motivating students to stay consistent and focused on their goals.<br />
	To track progress effectively, regular tests and performance evaluation are conducted in a systematic manner. These tests not only familiarize students with the actual exam pattern but also help in identifying their strengths and areas of improvement, ensuring continuous growth throughout the three years.<br /><br />
Adding to this, students receive personal mentorship, where experienced faculty provide one-on-one guidance, solve doubts, and help in formulating personalized study plans. This mentorship creates a supportive environment where every aspirant feels confident and motivated.<br />
In short, ATC’s 3 Years Integrated Course for IAS and RAS is not just a coaching program; it is a complete journey that shapes aspirants into future administrators with knowledge, skills, and personality required to succeed in the competitive examinations and beyond.            </p></div>

	 <br /><br />
	 
<CoursePlans slug="ias-ras-integrated" />
</>
    </PageShell>
  );
}
