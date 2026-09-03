import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import CoursePlans from "@/components/pages/CoursePlans";

export const metadata: Metadata = {
  title: "Comprehensive Test Series for IAS  Prelims and Mains Exams in Hindi and English Medium : ATC",
  description: "To boost your preparation for the Civil Services Exams Regular Tests Should be the Essential Part of your Studies, Our Subjective Tests For IAS Mains Exam in Hindi And English Medium Can Ensure Ensure Excellent Marks, Practice for MCQ's for minimum Errors in IAS Prelims Exam.",
  alternates: { canonical: "/courses/ias-test-series" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses" },
  { label: "IAS Test Series" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Subjective and Objective Test Series for IAS 2026 Exam"
    >
      <>
					<p>Cracking the prestigious IAS exam requires a strategic approach, and a comprehensive test series is the cornerstone of a successful strategy. ATC&apos;s IAS Exam Test Series is meticulously designed to provide you with an exam-like environment, simulating the actual UPSC CSE. This rigorous practice helps you build the mental fortitude and time management skills necessary to perform under pressure.<br /><br />
Our test series is divided into two parts to cover the entire examination: the objective tests for the prelims and subjective tests for mains exam. The prelims tests are conducted on OMR sheets, giving you a realistic feel of the actual exam and helping you minimize errors. The most crucial part of our program is the answer sheet evaluation by experts. 	 </p><br />	
	<p>Our experienced faculty provides detailed feedback and constructive criticism on every answer, helping you identify your weaknesses and refine your writing style. You&apos;ll learn how to structure your answers, present your arguments lucidly, and adhere to the word limits—all essential skills for scoring high in the mains.<br />
	To give you a clearer picture of what a perfect answer looks like, we also provide toppers copies from previous years. Analyzing these will give you a better understanding of how to write high-scoring answers.
		 </p>
            
	 <div className="new"><h3>IAS Prelims / Mains  Offline and Online test Series</h3></div>
              
       <dl className="accordions">
<dt><b><span>IAS Prelims Offline and Online Test Series - 2026</span><br /> Strengthen your IAS Prelims preparation with a structured and exam-oriented test series.</b></dt>
<dd id="sec1">
<p> *📌 Key Features*
* Total Tests: 18
* Detailed Answer Key with explanations after each test
* Complete Video Solutions for every test
* Test Paper PDF available for download on the next day
* Online Test Availability: Test remains live till 12:00 midnight on the test day<br />

*🏆 Merit List Criteria*
* Tests attempted *before 12:00 midnight* will be included in the Merit List
* Tests attempted *after 12:00 midnight* will be considered *Practice Mode only*
* Practice Mode attempts will *not* be included in the Merit List<br />

*⚠️ Important Instructions*
* Online students are *not allowed* to appear for the offline test<br />

*💰 <b>Fees*</b>
<b>* ₹2000/- For Non-ATC Students |&nbsp;&nbsp; ₹1000/- For ATC students</b><br />
(Includes all 18 tests, Answer Keys, Solution Videos, and PDFs)<br /></p>
<p style={{ textAlign: "right" }}><a href="/download/ias-pre-test-series-2026.pdf" className="btnbg">Download Test Schedule </a><a href="/about/springboard-app" className="btnbg">Download App</a></p>
</dd>
</dl>
	
	 
 
 <br /><br />
	  
<CoursePlans slug="ias-test-series" />
</>
    </PageShell>
  );
}
