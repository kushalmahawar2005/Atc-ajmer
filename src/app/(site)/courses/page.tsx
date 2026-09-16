import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "IAS | RAS | Rajasthan PSI Courses",
  description: "IAS, RAS, Rajasthan PSI and interview courses at ATC Ajmer — regular Prelims and Mains batches plus test series, in both Hindi and English medium.",
  alternates: { canonical: "/courses" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Our Courses" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="ATC : Comprehensive Courses for Civil Services Aspirants"
    >
      <>
					<div className="content" id="content">
					<p>ATC has established itself as a trusted name for UPSC and RPSC preparation by offering a range of foundation and advanced courses designed to meet the needs of every aspirant. With a focus on conceptual clarity, strategic guidance, and consistent practice, the academy ensures that students are well-prepared for all three stages of the examination – Prelims, Mains, and Interview.<br />	 
	 One of the most sought-after programs is the IAS Foundation Course, which provides a structured approach for students aiming for the Union Public Service Commission examinations. Parallelly, the RAS Foundation Course is tailored for aspirants targeting the Rajasthan Administrative Services. Both courses are available in Hindi and English medium, ensuring accessibility and comfort for students from diverse backgrounds.<br /></p>
	 
<p>ATC offers preparation in both offline and online mode, catering to a wide range of learners. The unique feature is the live from classroom batches, which bring the exact classroom environment to online learners, along with the convenience of recorded sessions for revision and flexibility.<br /><br />

A strong emphasis is laid on regular tests to evaluate progress, coupled with a dedicated team for answer evaluation that provides detailed feedback. This systematic process helps aspirants improve their writing skills for Mains and practice time management for Prelims. The institute also arranges interaction with toppers, enabling students to learn proven strategies directly from achievers.<br />
	
	Guidance at ATC is highly personalized. Every learner gets access to personal mentorship for doubt-clearing, progress tracking, and motivation throughout the journey. The experienced faculty not only explains concepts but also integrates current affairs with the static syllabus in a way that is relevant for exams. Additionally, students are provided with high-quality exam-oriented notes, meticulously designed to cut down unnecessary information and focus on what really matters in scoring.<br /><br />
Whether you are beginning your journey or looking for structured guidance, ATC’s courses are designed to build a strong foundation and sharpen answer-writing and analytical skills. With a dedicated team of mentors, reliable study material, and flexible learning options, ATC ensures that aspirants receive comprehensive support from the first stage of preparation to the final interview.<br />
By combining discipline, mentorship, and result-oriented strategies, ATC continues to be a premier choice for civil services preparation in Rajasthan and beyond.
						</p> </div>
          
	<dl className="accordions">
<dt><b><span>IAS Foundation Course</span><br /> Offline and Live from Classroom Batches</b></dt>
<dd id="sec1"><b>IAS Foundation Batch - Complete Preparation for IAS Prelims + Mains + Interview</b>
<p> Our IAS Foundation course ensures holistic preparation for Prelims, Mains, and Interview, focusing on conceptual clarity, analytical skills, and personality development. With expert guidance, structured material, and regular tests, we empower aspirants to excel at every stage of the civil services journey.<br /></p>
<p style={{ textAlign: "right" }}><a href="/courses/ias-foundation" className="btnbg">Read More +</a></p>
</dd>
</dl>	
					<dl className="accordions">
<dt><b><span>RAS Foundation Course</span><br /> Offline, Live from Classroom and Recorded Batches</b></dt>
<dd id="sec1"><b>RAS Foundation Batch - Complete Preparation for RAS Prelims + Mains + Interview</b>
<p> Prepare yourself for the Rajasthan&apos;s most prestigious exam. Our variety of courses will surely meet your requirement. You can now prepare for RAS exam from anywhere with our online live from classroom and recorded batches. <br /></p>
<p style={{ textAlign: "right" }}><a href="/courses/ras-foundation" className="btnbg">Read More +</a></p>
</dd>
</dl>
	 <dl className="accordions">
<dt><b><span>IAS / RAS 3 Years Integrated course</span><br /> Offline and Live from Classroom Batches</b></dt>
<dd id="sec1"><b>Build a strong foundation for civil services exams along with the graduation</b>
<p> Our 3 years integrated IAS/RAS course offers step-by-step preparation for Prelims, Mains, and Interview, ensuring strong fundamentals, advanced learning, and personality grooming to achieve success in civil services examinations confidently. <br /></p>
<p style={{ textAlign: "right" }}><a href="/courses/ias-ras-integrated" className="btnbg">Read More +</a></p>
</dd>
</dl> 
	 <dl className="accordions">
<dt><b><span>Rajasthan Police Sub Inspector (PSI) Exam </span><br /> Offline, Live from Classroom and Recorded Batches</b></dt>
<dd id="sec1"><b>Fulfill your dream to be in Uniform with our Rajasthan PSI Exam Course</b>
<p> Join our Rajasthan PSI course for focused preparation of complete syllabus with Hindi subject, expert guidance, practice tests, and smart strategies to boost your confidence and performance in the exam. <br /></p>
<p style={{ textAlign: "right" }}><a href="/courses/rajasthan-psi" className="btnbg">Read More +</a></p>
</dd>
</dl> 
					 <dl className="accordions">
<dt><b><span>UPSC / RPSC Interview Programs </span><br /> Interview Classes and Mock Interviews in Real Environment</b></dt>
<dd id="sec1"><b>IAS and RAS Mock Interview Programs</b>
<p> With comprehensive interview classes, expert mentoring, realistic mock sessions, and continuous improvement through video recording for feedback, ATC ensures every candidate is ready to succeed in the final lap of UPSC and RPSC examinations. <br /></p>
<p style={{ textAlign: "right" }}><a href="/courses/ias-ras-interview" className="btnbg">Read More +</a></p>
</dd>
</dl> 
	 <dl className="accordions">
<dt><b><span>RAS Mains Exam Exclusive Batch </span><br /> Offline and Live from Classroom Batches</b></dt>
<dd id="sec1"><b>Prepare Yourself for the Most Crucial and Decisive Stage of RAS Exam</b>
<p> This Exclusive Course for RAS Mains Exam Helps you to Develop Analytical Approach for all the Subjects and Prepares you to Write Effective Answers. <br /></p>
<p style={{ textAlign: "right" }}><a href="/courses/ras-mains" className="btnbg">Read More +</a></p>
</dd>
</dl> 
					<dl className="accordions">
<dt><b><span>Test Series Programs - Subjective and Objective</span><br /> Offline and Online Test Series for IAS RAS and PSI Exams</b></dt>
<dd id="sec1"><b>Analyse your Preparation with Our Test Series Programs</b>
<p> ATC conducts Test Series for IAS RAS and PSI exams. Answer sheets of our Subjective Test Series are Evaluated by Experts. Objective Test Series on OMR sheets. Experience Exam Like Environment and Make Yourself Comfortable for Final Exams. <br /></p>
<p style={{ textAlign: "right" }}><a href="/courses/test-series" className="btnbg">Read More +</a></p>
</dd>
</dl> </>
    </PageShell>
  );
}
