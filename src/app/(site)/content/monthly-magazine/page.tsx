import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Monthly Current Affairs Magazine For UPSC and RPSC Exams::ATC",
  description: "Prepare for Current Affairs of World India and Rajasthan With Our Monthly Magazine. Best Current Affairs Exam Oriented Compilation for RPSC and UPSC Praparations. Current GK for Competitive Exams.",
  alternates: { canonical: "/content/monthly-magazine" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Study Materials", href: "/content" },
  { label: "Monthly Magazine Download" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Study Materials for UPSC and RPSC Exams"
    >
      <>
					  <section className="table-card" role="region" aria-labelledby="downloads-title">
    <h2 className="table-title" id="downloads-title">Download ATC Current Affairs Monthly Magazine</h2>

    <div className="table-wrap">
      <table className="two-col">
        <thead>
          <tr>
            <th className="col-text">Month Of Publication</th>
            <th className="col-action">Download (English / हिंदी)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-text">July 2026</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/july-2026-english.pdf" download aria-label="July 2026 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/july-2026-hindi.pdf" download aria-label="July 2026 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">June 2026</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/june-2026-english.pdf" download aria-label="June 2026 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/june-2026-hindi.pdf" download aria-label="June 2026 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">May 2026</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/may-2026-english.pdf" download aria-label="May 2026 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/may-2026-hindi.pdf" download aria-label="May 2026 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
           <tr>
            <td className="col-text">April 2026</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/april-2026-english.pdf" download aria-label="April 2026 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/april-2026-hindi.pdf" download aria-label="April 2026 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">March 2026</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/march-2026-english.pdf" download aria-label="March 2026 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/march-2026-hindi.pdf" download aria-label="March 2026 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">February 2026</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/feb-2026-eng.pdf" download aria-label="February 2026 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/feb-2026-hindi.pdf" download aria-label="February 2026 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">January 2026</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/jan-2026-eng.pdf" download aria-label="January 2026 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/jan-2026-hindi.pdf" download aria-label="January 2026 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">December 2025</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/dec-2025-eng.pdf" download aria-label="December 2025 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/dec-2025-hindi.pdf" download aria-label="December 2025 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">November 2025</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/nov-2025-eng.pdf" download aria-label="November 2025 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/nov-2025-hindi.pdf" download aria-label="November 2025 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">October 2025</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/oct-2025-eng.pdf" download aria-label="October 2025 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/oct-2025-hindi.pdf" download aria-label="October 2025 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
          <tr>
            <td className="col-text">September 2025</td>
            <td className="col-action"><div className="dl-pair">
              <a className="btn-download" href="/download/sep-2025-eng.pdf" download aria-label="September 2025 English"><i className="fa-solid fa-download" aria-hidden="true"></i> English</a>
              <a className="btn-download btn-hindi" href="/download/sep-2025-hindi.pdf" download aria-label="September 2025 Hindi"><i className="fa-solid fa-download" aria-hidden="true"></i> हिंदी</a>
            </div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section><br /><br />
					<div className="content" id="content">
					 <p>
			 ATC’s monthly Current Affairs magazine delivers a crisp, exam-oriented digest of International and National events, curated to save time while maximizing relevance for UPSC, RPSC, SSC, banking, and other competitive exams. Each issue blends factual updates with analytical notes so that political, economic, cultural, and geopolitical issues translate into scoring opportunities in Prelims, Mains, and Interviews.<br /><br />
	 <b>What it covers ?</b><br />
	 Political and governance developments with emphasis on bills, policies, committees, and institution-centric changes, mapped to likely question formats and keywords for civil services exams.<br />

Economic trends, budget and policy highlights, reports and indices, plus sectoral updates in banking, infrastructure, and trade with concept links and quick-revision pointers.<br />

Cultural and social themes including heritage, festivals, art, and scheme outcomes, tied to GS and Essay angles with concise definitions and examples.<br /><br />
	 <b>Global and geopolitics</b><br />
International summits, groupings, strategic dialogues, and security developments presented with context, timelines, and maps for fast retention in MCQs and Mains answers.<br />

Country profiles, diplomatic visits, defense exercises, treaties, and sanctions explained with implications for India’s interests and foreign policy.<br /><br />

<b>Science, sports, awards</b><br />
Science, technology, environment, and space milestones distilled into application-based notes and PYQ-style MCQs for integrated practice.<br />

Sports performances, tournaments, records, and organizational updates, plus national and international awards with one-line facts and examiner-friendly tags.<br /><br />
	 <b>Why this magazine</b><br />
Compilation by experts ensures precise, exam-oriented information with structured monthly and topic-wise organization for quick navigation and revision.<br />

Designed and published with ATC’s pedagogy—daily updates, monthly magazine, and editorial insights—making it a reliable one-stop solution for current affairs prep.<br /><br />

<b>Availability</b><br />
Monthly issues accessible via ATC’s Current Affairs section and study materials; print and partner outlets may carry editions for convenient access.	 
						</p></div></>
    </PageShell>
  );
}
