import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Rajasthan PSI Exam Pattern, Syllabus & Study Material",
  description: "How to Prepare for Rajasthan Police Sub Inspector Exam - Complete Guide. Exam Syllabus and Study Materials for Rajasthan PSI Exam.",
  alternates: { canonical: "/content/rajasthan-psi-exam-resources" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Exam Resources", href: "/content" },
  { label: "Rajasthan PSI" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="RPSC Rajasthan Police Sub Inspector Exam: Complete Preparation Guide"
    >
      <>
					<section className="table-card" role="region" aria-labelledby="downloads-title">
    <h2 className="table-title" id="downloads-title">Download Rajasthan PSI Syllabus and Exam Scheme</h2>

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
              Scheme of Physical Test for Sub Inspector Comp. Exam
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/psi-physical.pdf" download aria-label="Download Test Scheme For Rajasthan Police Sub Inspector">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>

          <tr>
            <td className="col-text">
              Syllabus for Sub Inspector Comp. Exam (Paper I)
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/psi-paper-1.pdf" download aria-label="Download Syllabus For Rajasthan PSI Exam Paper 1">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download
              </a>
            </td>
          </tr>

          <tr>
            <td className="col-text">
              Syllabus for Sub Inspector Comp. Exam (Paper II)
            </td>
            <td className="col-action">
              <a className="btn-download" href="/download/psi-paper-2.pdf" download aria-label="Download Syllabus for Rajasthan PSI Paper 2 PDF">
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
            <span>Our Rajasthan PSI Courses</span>
        </div>

        <div className="btn-row">
            <a className="btn cta" href="/courses/rajasthan-psi">
                Rajasthan PSI Course by ATC
            </a>
            <a className="btn ghost" href="/courses/psi-test-series">
                Rajasthan PSI Test Series
            </a>
        </div>
    </div><br /><br />

					
            <br /><br /></>
    </PageShell>
  );
}
