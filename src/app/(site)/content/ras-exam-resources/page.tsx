import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Resources and Information for the Preparation of RAS Exam and Other RPSC Exams",
  description: "Resources like Syllabus, Paper Pattern, Useful Study Materials, Answer Copies for the Preparation of RAS Exam. RPSC Exam Content in Hindi and English Medium.",
  alternates: { canonical: "/content/ras-exam-resources" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Exam Resources", href: "/content" },
  { label: "RAS Exam Resources" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Useful Resources for the Preparation of RAS Exam"
    >
      <>
					
			<section className="table-card" role="region" aria-labelledby="downloads-title">
    <h2 className="table-title" id="downloads-title">Download RAS Exam Syllabus and Exam Scheme</h2>

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
              RAS Exam Scheme
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/ras-exam-scheme.pdf" download aria-label="Download RAS Exam Scheme">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>

          <tr>
            <td className="col-text">
              RAS Prelims Exam Syllabus - Hindi
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/ras-pre-syllabus-hindi.pdf" download aria-label="Download RAS Prelims Syllabus Hindi">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>

          <tr>
            <td className="col-text">
              RAS Prelims Exam Syllabus - English
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/ras-pre-syllabus-english.pdf" download aria-label="Download RAS Prelims Syllabus English PDF">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>
			<tr>
            <td className="col-text">
             RAS Mains Exam Syllabus - Hindi
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/ras-mains-syllabus-hindi.pdf" download aria-label="Download RAS Mains Syllabus in Hindi">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>
			<tr>
            <td className="col-text">
              RAS Mains Exam Syllabus - English
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/ras-mains-syllabus-english.pdf" download aria-label="Download RAS Mains Syllabus English PDF">
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
            <span>Our RAS Courses</span>
        </div>

        <div className="btn-row">
            <a className="btn cta" href="/courses/ras-foundation">
                RAS Foundation Course by SBA
            </a>
            <a className="btn ghost" href="/courses/ras-test-series">
                RAS Prelims & Mains Test Series
            </a>
        </div>
    </div><br /><br />

					<br /><br />
					<div className="content" id="content">
					 <p>
			The RPSC RAS exam has a three-stage structure: a qualifying Prelims (one objective paper of 200 marks), a descriptive Mains (4 papers totaling 800 marks), and a Personality Test/Interview of 100 marks; final merit is computed from Mains + Interview (total 900).<br /><br />
		 
		 <b>Prelims pattern</b><br />
One paper: General Knowledge & General Science; 150 MCQs; total 200 marks; duration 3 hours; graduation-level difficulty; negative marking often notified as 1/3 per wrong answer by several guides; Prelims is only screening and not counted in final merit.<br /><br />

<b>Prelims coverage</b> <br />
Rajasthan GK: history, culture, literature, movements, geography, festivals, saints.<br />

Indian history: ancient to modern, freedom struggle, reform movements.<br />

Geography (India & world): landforms, industries, biodiversity, irrigation, resources.<br />

Polity & governance: Constitution, judiciary, Panchayati Raj, institutions.<br />

Economy: budget, planning, reforms, poverty, inflation, schemes; Rajasthan economy focus.<br />

Science & Tech: ICT, space, defence, biotech, health, nano; state S&T.;<br />

Reasoning & mental ability: coding-decoding, series, DI, logic, basic math.<br />

Current affairs: state, national, international events, awards, sports.<br /><br />
		 
		 <b>Prelims subject-wise question trend</b><br />
Official distribution by subject is not fixed in notification; however, the single paper mixes Rajasthan-specific GK, India/world GK, science-tech, economy, polity, geography, reasoning, and CA; exam setters typically emphasize Rajasthan content within the 150 questions alongside national and general GK.<br /><br />

<b>Mains structure</b><br />
Four descriptive papers; each 3 hours; each 200 marks; total 800; minimum qualifying norm stated by some guides: 10% in each paper and 15% aggregate (5% relaxation for SC/ST) to be eligible for interview, as per scheme description presented by exam-prep sources.<br />

Final merit is Mains (800) + Interview (100) = 900.<br /><br />
		 
		<b> GS Paper 1 syllabus</b><br />
Focus: History, Economy, Sociology/Management basics, Rajasthan culture and geography as per consolidated guides; units commonly grouped as History, Economy, and Social subjects; detailed breakups and question counts per part (short/medium/long) are 25×2 marks, 16×5 marks, 7×10 marks = 200 as per pattern summary used in coaching resources.<br />

Typical weightage by units in paper structure: Part A short (50), Part B medium (80), Part C long (70), totaling 200; this is a marks distribution by question type rather than subject weight, but it guides answer-depth planning.<br /><br />
		 
		<b> GS Paper 2 syllabus</b><br />
Focus: Administrative ethics, General Science & Technology, Earth Science/Geography and Geology; paper organized into short/medium/long questions (e.g., 15×2, 14×5, 10×10) totaling 200 in several exam analyses.<br />

Emphasis areas: ethics frameworks in administration, S&T; developments and applications, physical geography/earth systems relevant to Rajasthan and India.<br /><br />

<b>GS Paper 3 syllabus</b><br />
Focus: Indian Political System, World Politics, Current Affairs; Public Administration & Management; Sports, Yoga, Behaviour & Law; question pattern aligned to short/medium/long akin to Paper 1.<br />

Strong current affairs linkage with policy/governance and international relations.<br /><br />
		 
		<b> GS Paper 4 syllabus</b><br />
General Hindi and General English: grammar and usage, comprehension, translation, précis, composition and letter/essay writing; total 200 marks, with internal partition across Hindi, English, and composition sections in preparation guides.<br /><br />
		 
		<b> Interview (Personality Test)</b><br />
Marks: 100; final merit = Mains 800 + Interview 100.<br />

Purpose: assess personality, communication, administrative aptitude, awareness of Rajasthan socio-economic issues, ethics and decision-making.<br /><br />

<b>Interview preparation</b><br />
DAF-driven profile questions: education, work, district/state background, hobbies; prepare situational ethics and governance scenarios.<br />

Rajasthan focus: current schemes, local governance, economy, culture, district-specific data; be ready with crisp talking points.<br />

Mock interviews and structured feedback to improve clarity, structure, and composure; read daily state and national briefs until interview day.<br /><br />
		 
		<b> Prelims strategy</b><br />
Build Rajasthan GK depth across history, culture, economy, geography; integrate monthly state CA with India/world CA; practice MCQs with 1/3 negative marking strategy in mind and time-block DI/reasoning sections.<br />

Maintain a revision map for S&amp;T and economy terms/schemes; solve full-length tests aligned to 150Q/200 marks/180 minutes pacing.<br /><br />
		 
		 <b>Mains strategy</b><br />
GS1–GS3: maintain unit-wise notes aligned to the official PDF headings; write daily answers in 2/5/10-mark formats mirroring paper structure; enrich with Rajasthan-specific data/examples.<br />

GS4 (language): systematic practice of grammar, précis, translation both ways, and composition; create templates for letters, reports, and essays to secure a high score.<br />

Cross-link CA to polity, economy, and IR themes for GS2/GS3; use diagrams, subheadings, and conclusion lines to meet evaluator expectations described by prep sources.
						</p></div></>
    </PageShell>
  );
}
