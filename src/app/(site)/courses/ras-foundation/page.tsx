import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import CoursePlans from "@/components/pages/CoursePlans";

export const metadata: Metadata = {
  title: "RAS Foundation course - Complete Preparation For RAS Prelims + Mains and Interview : ATC",
  description: "Offline and Online Coaching for the Complete Preparation of RAS Exam. Complete Syllabus of RAS Prelims and Mains is Covered in Both Hindi and English Medium. Course Includes Daily Classes, Study Material, Weekly Tests, Mock Interviews.",
  alternates: { canonical: "/courses/ras-foundation" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses" },
  { label: "RAS Foundation Course" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="RAS Foundation Course by ATC"
    >
      <>
					<div className="content" id="content">
           <p>ATC’s RAS Foundation course delivers a structured, exam-focused journey with daily 6 hours classes to build strong fundamentals and mastery across all stages—Prelims, Mains, and Interview—guided by experienced faculty and toppers’ mentorship in both Hindi and English mediums. The program blends complete syllabus coverage, weekly testing, rigorous answer writing evaluation, study materials, and mock interviews into a cohesive plan built for selection.</p><br />
	
<p>The course is designed to cover the complete syllabus of RPSC RAS comprehensively, integrating Rajasthan-specific subjects, GS, current affairs, and structured revision so nothing is left to chance. Offline and online formats are available, with classroom rigor complemented by recorded support and institute-tested pedagogy shaped since 2006.<br /><br /> 
<b>Class structure : </b> 
Learners attend daily 6 hours classes that emphasize concept clarity, note-making, PYQ application, and regular doubt resolution in a disciplined routine aligned to exam timelines. This immersive schedule accelerates retention and builds exam temperament through continuous practice and mentor-led reinforcement. <br />
<b>Personal mentorship : </b>
Personal mentorship pairs aspirants with experienced faculty and a support system that tracks progress, addresses weak areas, and sets weekly targets for measurable improvement. Personal attention and one-to-one guidance enhance accountability and bring focus to Prelims accuracy, Mains depth, and interview readiness. <br /><br />
	<b>Toppers’ guidance and motivation : </b>
Motivation and guidance by toppers are integrated through talks, strategy sessions, and live seminars that share answer writing techniques, study routines, and revision frameworks. These interactions help aspirants adopt successful patterns, avoid common mistakes, and maintain momentum throughout the preparation cycle.<br />
	<b>Weekly testing : </b>
Weekly subjective and objective tests benchmark progress on both conceptual understanding and speedy application under exam conditions. Tests mirror the latest RPSC patterns and provide data-driven insights to refine test-taking strategies and content depth every week.<br />
	<b>Answer writing evaluation : </b>
A dedicated team for answer writing evaluation provides detailed feedback on structure, content, analysis, and presentation to help meet Mains’ scoring demands. Iterative reviews build a personal improvement graph, ensuring measurable gains in marks per question and paper.<br />
<b>Test series and mocks : </b>
Exam oriented test series are conducted at Prelims and Mains levels with escalating difficulty to simulate the real exam and close gaps early. Mock interviews with panel feedback prepare candidates for the personality test, communication clarity, and situational responses in line with service expectations.<br />
	<b>Study materials : </b>
Curated study materials are provided to reduce resource overload—concise notes, updated current affairs, and exam-ready compilations aligned with the Academy’s class plan. Materials support both classroom and online learners, ensuring continuity across formats without compromising depth.<br />
	<b>Mediums available : </b>
The program is available in both Hindi and English medium to accommodate diverse backgrounds and comfort levels without compromising academic rigor. This bilingual support extends across classes, tests, materials, and mentorship touchpoints.<br /><br />
	<b>Why ATC </b>
With a track record highlighted by numerous selections over the years, ATC combines structure, mentorship, and discipline into a single pathway from foundation to final selection. Integrated offline/online ecosystems, faculty depth, and consistent academic processes make it a strong choice for serious RAS aspirants.
            </p>
        </div>
        
					
 
<CoursePlans slug="ras-foundation" />
</>
    </PageShell>
  );
}
