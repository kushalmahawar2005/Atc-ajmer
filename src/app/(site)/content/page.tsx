import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Free Study Material for UPSC and RPSC Exams",
  description: "Online and Offline Study Materials for the Preparation of Civil Services Exams. Hindi Medium and English Medium Content for RAS and IAS Exams.",
  alternates: { canonical: "/content" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Study Material" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Study Materials for UPSC and RPSC Exams"
    >
      <>
					 <div className="button-container">
        <h2 className="container-title">📊 Useful Resources for UPSC Civil Services exam</h2>        
        
        <div className="btn-row">
            <a className="btn btn-cta" href="/content/ncert-pdf-download" aria-label="NCERT Books PDF Download">
                NCERT Books in PDF Download
            </a>
            <a className="btn btn-ghost" href="/content/rajasthan-sujas" aria-label="Rajasthan Sujas Download">
                Rajasthan Sujas Download
            </a>
        </div>
        <div className="section-divider"><span>More Resources</span></div>
        
        <div className="btn-row">
            <a className="btn btn-cta" href="/content/economic-survey" aria-label="Economic Survey of Rajasthan and India">
                Economic Survey of India &amp; Rajasthan
            </a>
            <a className="btn btn-ghost" href="/content/monthly-magazine" aria-label="Monthly Magazine Download">
                Monthly Magazine Download
            </a>
        </div>
    </div><br /><br />
					<div className="content" id="content">
					<p>
		   The selection of quality study materials plays a pivotal role in the preparation of civil services exams. With the vastness of the UPSC and state service syllabi, aspirants often find themselves surrounded by unnecessary resources that dilute focus. A well-planned choice of study materials not only saves time but also ensures conceptual clarity and structured preparation.<br /><br />

The foundation of civil services preparation begins with NCERT books. Whether in Hindi or English medium, these books provide simple yet authentic explanations of history, polity, geography, and science. NCERTs help build basic concepts, which are essential for understanding advanced reference books. After NCERTs, the Economic Survey becomes crucial for candidates, especially for subjects like economics and Indian economy in general studies. It provides analytical insights into India’s economic conditions, policies, and challenges, forming the backbone of economics-related questions in the exam.<br /><br />
Another indispensable resource is Current Affairs. From daily newspapers to monthly magazines, staying updated with national and international developments is vital for both prelims and mains. Current affairs also influence essay writing and interview stages, making them a continuous part of preparation. For Rajasthan state service examinations, resources like Rajasthan Sujas are equally important. It covers state-specific developments, government schemes, and regional information that regularly figures in the RAS exam pattern.<br /><br />
		   The language of study material also matters. Candidates in both Hindi and English medium must ensure availability of quality translations so that language does not become a barrier in conceptual understanding. Choosing concise, exam-oriented, and credible resources instead of bulky, scattered material enhances retention and clarity.<br /><br />
In essence, the judicious selection of materials like NCERT books, the Economic Survey, Rajasthan Sujas, and reliable current affairs sources in the preferred medium forms the bedrock of success in civil services exams. Quality always outweighs quantity in this journey.  
						</p></div></>
    </PageShell>
  );
}
