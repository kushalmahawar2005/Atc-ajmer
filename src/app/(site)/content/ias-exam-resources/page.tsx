import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "IAS / UPSC Exam Pattern, Syllabus & Study Material",
  description: "Explore All Information Required for the Preparation of UPSC Civil Services Exam. Download IAS Exam Syllabus",
  alternates: { canonical: "/content/ias-exam-resources" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Exam Resources", href: "/content" },
  { label: "UPSC Exam Resources" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="UPSC Civil Services Examination: Complete Guide for Aspirants"
    >
      <>
					 <section className="table-card" role="region" aria-labelledby="downloads-title">
    <h2 className="table-title" id="downloads-title">Download UPSC Civil Services Syllabus</h2>

    <div className="table-wrap">
      <table className="two-col">
        <thead>
          <tr>
            <th className="col-text">Description</th>
            <th className="col-action">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-text">
              UPSC Civil Services Syllabus - English
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/upsc-syllabus.pdf" download aria-label="Download UPSC Civil Services Syllabus English">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>

          <tr>
            <td className="col-text">
              UPSC Civil Services Syllabus - Hindi
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/upsc-syllabus-hindi.pdf" download aria-label="Download UPSC Civil Services Syllabus Hindi">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
<br /><br />
<div className="button-container">
        <div className="section-divider">
            <span>Our UPSC Courses</span>
        </div>

        <div className="btn-row">
            <a className="btn cta" href="/courses/ias-foundation">
                IAS Foundation Course by ATC
            </a>
            <a className="btn ghost" href="/courses/ias-ras-integrated">
                Three Years Integrated Course
            </a>
        </div>
    </div><br /><br />
			<div className="content" id="content">		
				<p>
              The Union Public Service Commission (UPSC) Civil Services Examination is India&apos;s most prestigious and challenging competitive exam, serving as the gateway to coveted administrative services. This comprehensive guide provides all essential information required to begin your preparation for the civil services examination.<br /><br />
<b>Exam Pattern</b><br />
The UPSC Civil Services Examination follows a three-stage selection process:<br /><br />

<b>Preliminary Examination (Prelims): </b>This is the first screening stage consisting of two objective-type papers conducted on the same day. The General Studies Paper I contains 100 questions for 200 marks, while the Civil Services Aptitude Test (CSAT) Paper II has 80 questions for 200 marks. Both papers have a duration of 2 hours each and are conducted in offline mode.<br /><br />
		<b>Main Examination (Mains): </b>The second stage comprises nine descriptive papers of 3 hours each. The total marks for Mains is 1750, distributed across Essay (250 marks), four General Studies papers (250 marks each), and two optional subject papers (250 marks each). Additionally, there are two qualifying language papers.<br /><br />
		 
		 <b>Personality Test (Interview):</b> The final stage carries 275 marks and typically lasts 30-45 minutes. The interview assesses personality traits, communication skills, decision-making ability, and overall suitability for public service.<br /><br />

<b>Marking Scheme</b><br />
The UPSC marking scheme varies across different stages:<br />

<b>Prelims Marking:</b> Each correct answer in both papers carries 2 marks. There is negative marking of 1/3rd for incorrect answers, meaning 0.67 marks are deducted for each wrong answer in General Studies Paper I. For CSAT, candidates need only 33% or 66 marks to qualify. Unanswered questions carry no penalty.<br /><br />

<b>Mains Marking:</b> There is no negative marking in the Mains examination. However, marks can be deducted for violations such as writing in prohibited language, illegible handwriting, or including appeals to examiners.<br /><br />
		 
		 <b>Final Merit: </b> The final ranking is determined by combining Mains (1750 marks) and Interview (275 marks) scores, totaling 2025 marks.<br /><br />

<b>Syllabus Overview</b><br /><br />
<b>Prelims Syllabus: </b>The General Studies Paper covers Indian and World History, Geography, Indian Polity, Economics, Environment, Science and Technology, and Current Affairs. CSAT includes Quantitative Aptitude, Reasoning, English Comprehension, and Decision Making.<br /><br />

<b>Mains Syllabus: </b><br />
The four GS papers form the backbone of Mains preparation:<br />

<b>GS Paper I</b> focuses on Indian culture, heritage, history, and world geography. It requires strong factual knowledge and analytical understanding of historical processes.<br /><br />

<b>GS Paper II </b>covers governance, constitution, social justice, and international relations. Current awareness and understanding of government schemes are essential.<br /><br />

<b>GS Paper III </b> emphasizes economic development, technology, disaster management, and security issues. This paper requires integration of current affairs with conceptual knowledge.<br /><br />

<b>GS Paper IV </b> tests ethical dimensions and integrity. It includes case studies, attitude questions, and philosophical understanding of ethics in administration.<br /><br />
		 
		 <b>Optional Papers</b><br />
Candidates must choose one optional subject from a list of 48 subjects. These include 25 core subjects like History, Geography, Sociology, Political Science, Public Administration, Economics, and Anthropology, plus 23 literature subjects in various Indian and foreign languages.<br /><br />

Popular optional subjects include Geography, History, Sociology, Public Administration, and Political Science due to their overlap with General Studies and scoring potential. The optional subject contributes 500 marks (two papers of 250 marks each) to the final score.<br /><br />
		 
		 <b>Essay Paper</b><br />
The Essay paper is crucial as it tests diversity of content rather than creativity. Candidates must choose one topic from Section A and one from Section B, with each essay typically requiring 1000-1200 words.<br />

Key strategies for essay writing include:<br />

Focus on the core theme and maintain clarity throughout<br />

Provide diverse content with multiple perspectives<br />

Support arguments with evidence, examples, and relevant data<br />

Structure essays with clear introduction, body paragraphs, and conclusion<br />

Practice regularly to improve time management and articulation skills<br /><br />
		 
		 <b>Interview Preparation</b><br /><br />
The Personality Test evaluates intellectual capability, emotional intelligence, leadership potential, and integrity. Preparation should focus on:<br />

Detailed Application Form (DAF): Master every detail as most questions stem from your DAF, including hobbies, educational background, work experience, and achievements.<br />

Current Affairs: Stay updated with national and international developments, government policies, and contemporary issues.<br />

Communication Skills: Develop clear articulation, active listening, and confident body language. Practice mock interviews regularly.<br />

Personality Traits: Demonstrate honesty, humility, balanced judgment, and commitment to public service.<br /><br />
		 
		 <b>Preparation Strategy</b><br /><br />
Foundation Building: Start with NCERT textbooks for conceptual clarity, then move to standard reference books for each subject.<br />

Current Affairs Integration: Regularly read newspapers, government reports, and policy documents. Link current events with static portions.<br />

Answer Writing Practice: Regular practice is essential for Mains. Focus on structured presentations, relevant examples, and time management.<br />

Mock Tests: Attempt regular mock tests for both Prelims and Mains to assess preparation levels and identify weak areas.<br />

Revision Strategy: Create comprehensive revision notes and practice previous year question papers to understand exam patterns and trends.<br /><br />
		 
		 The UPSC Civil Services Examination demands consistent preparation, strategic planning, and comprehensive understanding across diverse subjects. Success requires not just knowledge acquisition but also the ability to present ideas clearly, think analytically, and demonstrate the temperament suitable for public service. With proper guidance, dedicated preparation, and the right approach, aspirants can navigate this challenging journey toward serving the nation in administrative roles.
		 
				</p></div></>
    </PageShell>
  );
}
