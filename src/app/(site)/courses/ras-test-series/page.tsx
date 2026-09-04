import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";
import CoursePlans from "@/components/pages/CoursePlans";

export const metadata: Metadata = {
  title: "Comprehensive Test Series for RAS  Prelims and Mains Exams in Hindi and English Medium : ATC",
  description: "To boost your preparation for the Civil Services Exams Regular Tests Should be the Essential Part of your Studies, Our Subjective Tests For RAS Mains Exam in Hindi And English Medium Can Ensure Ensure Excellent Marks, Practice for MCQ's for minimum Errors in RAS Prelims Exam.",
  alternates: { canonical: "/courses/ras-test-series" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses" },
  { label: "RAS Pre and Mains Test Series" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Subjective and Objective Test Series for RAS Exams"
    >
      <>
					<div className="content" id="content">
         <p>Achieve your dream of becoming a Rajasthan Administrative Service (RAS) officer with the comprehensive Prelims and Mains Test Series by ATC, Jaipur. This meticulously designed program is your key to success, offering a strategic approach that covers every aspect of the RAS examination.<br /><br />
	<b> Mains Preparation with Expert Guidance : </b> The Mains Test Series is designed to build and refine your answer-writing skills, a crucial component of the RAS exam. Our expert faculty will provide in-depth, personalized mains answers evaluation, with constructive feedback to help you overcome your weaknesses. The program includes paper discussions where you can clarify doubts and understand the nuances of crafting high-quality answers.</p><br />	
	 <p><b>A Complete Practice Framework for RAS Prelims : </b>
Our Prelims Test Series focuses on a systematic approach to master the objective-type paper. You&apos;ll gain a competitive edge with subject-wise and full-length tests that are precisely aligned with the official RPSC syllabus. Each test includes the latest current affairs, ensuring your preparation is up-to-date. To simulate the real exam environment, all tests are conducted on OMR sheets, helping you improve time management and accuracy. After each test, you&apos;ll receive a detailed performance analysis and an All India Ranking, allowing you to gauge your progress against thousands of aspirants.<br /><br />
	<b>Personal Mentorship for a Winning Strategy : </b>
At ATC, we believe in a holistic approach. Beyond test-taking, our program offers personal mentorship from experienced faculty and successful candidates. This one-on-one guidance helps you develop a customized study plan, address your individual challenges, and stay motivated throughout your journey. With our comprehensive test series and dedicated mentorship, you&apos;ll be well-prepared to tackle the RAS exam with confidence.
		 </p>
        </div>
  <div className="new"><h3>RAS Prelims / Mains  Offline and Online test Series</h3></div>

              
 <dl className="accordions">
<dt><b><span>RAS Prelims Offline and Online Test Series - 2026</span><br /> Test Series is available offline at 11 Centres of Rajasthan and also through Online Mode.</b></dt>
<dd id="sec1">
<p> <b>Offline Test centres - Jaipur, Jodhpur, Udaipur, Kota, Sikar, Hanumangarh, Barmer, Bikaner, Ajmer, Alwar, Jaisalmer </b><br />
*📌 Key Features*
* Total Tests: 14 (11 Sectional Tests + 3 Full Tests)
* Starting from 23 August 2026
* Detailed Answer Key with explanations after each test
* Complete Video Solutions for every test
* Test Paper PDF available for download on the next day (For Online mode)
* Online Test Availability: Test remains live till 12:00 midnight on the test day<br />

*🏆 Merit List Criteria*
* Tests attempted *before 12:00 midnight* will be included in the Merit List
* Tests attempted *after 12:00 midnight* will be considered *Practice Mode only*
* Practice Mode attempts will *not* be included in the Merit List<br />

*⚠️ Important Instructions*
* Online students are *not allowed* to appear for the offline test<br />

*💰 <b>Fees*</b>
<b>* ₹1500/-</b><br />
(Includes all 14 tests, Answer Keys, Solution Videos, and PDFs)<br /></p>
<p style={{ textAlign: "right" }}><a href="/download/ras-pre-test-series-2026.pdf" className="btnbg">Download Test Schedule </a><a href="https://springboardindia.org/exams/" className="btnbg">Registration for Offline Test Series</a></p>
</dd>
</dl>
	<br /><br />
    <dl className="accordions">
<dt><b><span>RAS Mains Offline and Online Test Series - 2026</span><br /> Test Series is available offline at our Jaipur centre and also through Online Mode.</b></dt>
<dd id="sec1">
<p> <b>Start date 14 June 2026</b><br />*📌 Key Features*<br />
•	सभी प्रश्न पत्र RPSC के नवीनतम पाठ्यक्रम तथा पैटर्न के अनुसार आयोजित करवाये जायेंगे।<br />
•	प्रत्येक प्रश्न पत्र के बाद Detailed Answer Key उपलब्ध करवाई जायेगी।<br />
•	प्रत्येक टेस्ट के लिए Solution Discussion Video उपलब्ध करवाया जाएगा। <br />
•	टेस्ट पेपर की PDF अगले दिन डाउनलोड के लिए उपलब्ध करवाई जायेगी। (for online students)<br />
•	मेरिट लिस्ट में उन ही Online अभ्यर्थियों को शामिल किया जायेगा, जिन्होंने Test वाले  दिन ही रात 12:00 बजे तक टेस्ट दिया हो। रात 12:00 बजे बाद टेस्ट देने पर कॉपी  चेक होगी, किन्तु मेरिट लिस्ट में नाम नहीं आ पाएगा।<br />
•	ऑनलाइन अभ्यर्थी को ऑफलाइन टेस्ट देने की अनुमति नहीं होगी।<br />
<br />

*💰 <b>Fees*</b>
<b>Offline :- * ₹8000/- For Non-ATC Students (Prelims + Mains Integrated) | &nbsp;&nbsp; ₹4000/- For ATC students</b><br />
<b>Online :- ₹6000/- (GST extra)</b></p>
<p style={{ textAlign: "right" }}><a href="/download/ras-pre-mains-int-2026.pdf" className="btnbg">Download Test Schedule </a></p>
</dd>
</dl>
<CoursePlans slug="ras-test-series" />
</>
    </PageShell>
  );
}
