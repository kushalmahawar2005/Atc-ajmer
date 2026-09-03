import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Information About ATC :: Our Profile and Achievements",
  description: "History and Achievements of ATC, We Offer Comprehensive Preparation for the Civil Services Exams. Highest Number of Selections in Rajasthan in both IAS and RAS exams.",
  alternates: { canonical: "/about" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "About Institute" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="ATC: A Legacy of Excellence in Civil Services Coaching"
    >
      <>
						<div className="content" id="content">
                   <p>Since its establishment in 2006, ATC has emerged as a premier coaching institute in Jaipur, specializing in comprehensive preparation for civil services examinations, including the Indian Administrative Service (IAS) and the Rajasthan Administrative Service (RAS). Founded by Mr. Dileep Mahecha, the academy&apos;s journey began with a commitment to providing a platform for students to achieve their aspirations of joining the civil services.<br /><br />

A pivotal moment in the academy&apos;s history came in 2013, when over 200 of its students were selected for the RAS, marking the beginning of a remarkable track record of success. This was followed by an even greater achievement in 2018, when the number of selections in the RAS exams soared to more than 650. These milestones solidified ATC&apos;s reputation for having a high selection rate. The institute&apos;s success is attributed to its strategic course structure, comprehensive study materials, and a focus on personal mentoring and one-on-one doubt-clearing sessions.<br /><br /></p>
	
<p>ATC is recognized for its dedicated English and Hindi medium batches, making it a popular choice for a diverse student body. The academy&apos;s approach goes beyond simply imparting intellectual knowledge; it focuses on the holistic development of its students, preparing them not just for the exams but also for their future roles as public servants. The institution has consistently produced successful candidates, with one source reporting over 750 selections in IAS and RAS combined. ATC&apos;s success stories, including top-ranking students, inspire countless aspirants and showcase the effectiveness of its teaching methodology and supportive environment.<br /><br />
	<b>Beyond the Classroom: A Culture of Success : </b>
ATC is more than just a coaching institute; it is a community of dedicated aspirants and mentors. The academy fosters a competitive yet collaborative environment where students can engage in peer learning, participate in mock tests, and attend doubt-clearing sessions. The emphasis is on building a strong work ethic, discipline, and a positive attitude. Regular seminars by toppers and civil service officials provide real-world insights and motivation, inspiring students to strive for excellence. With its highly experienced faculty, modern digital classrooms, and specialized services like the answer writing guidance desk, the ATC is the ultimate destination for anyone serious about cracking the IAS and RAS exams. It is a place where dreams are not just pursued but are realized through a perfect blend of hard work, expert guidance, and a supportive learning ecosystem.
							</p></div></>
    </PageShell>
  );
}
