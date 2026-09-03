import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import CoursePlans from "@/components/pages/CoursePlans";

export const metadata: Metadata = {
  title: "IAS Foundation course - Complete Preparation For IAS Prelims + Mains and Interview : ATC",
  description: "Prepare yourself for IAS Prelims Mains and Interview with IAS foundation course offered by ATC",
  alternates: { canonical: "/courses/ias-foundation" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses" },
  { label: "IAS Foundation Course" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="IAS Foundation Course by ATC"
    >
      <>
					<div className="content" id="content">
					<p>ATC’s IAS Foundation course builds a solid base for IAS Prelims, IAS Mains, and the Interview with a structured roadmap and disciplined mentoring for every aspirant’s journey. Available as both Offline and Online course, it blends expert-led classes with updated Study materials to streamline preparation in one place. Learners get Regular tests, detailed performance feedback, and rigorous Answer writing practice to sharpen accuracy and speed. Personalized guidance and mentorship ensure doubt resolution and sustained motivation throughout the program. Batches are offered in both Hindi and English medium for inclusive accessibility and better comprehension.<br />
	   ATC’s CSAT preparation for IAS Prelims builds strong aptitude, reasoning, and comprehension through expert-led classes, targeted practice, and doubt-clearing. Regular objective test on UPSC pattern reinforces concepts, time-management, and accuracy. Comprehensive study material, bilingual support, and performance analysis ensure steady progress and qualifying scores in CSAT Paper-II for UPSC Prelims success.
						</p></div>
   			
<CoursePlans slug="ias-foundation" />
</>
    </PageShell>
  );
}
