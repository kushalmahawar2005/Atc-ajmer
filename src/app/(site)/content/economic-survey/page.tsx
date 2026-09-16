import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Economic Survey of India & Rajasthan — PDF Download",
  description: "Download the Economic Survey of India and Rajasthan Economic Review PDFs in Hindi and English — key data and schemes for UPSC and RPSC preparation.",
  alternates: { canonical: "/content/economic-survey" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Study Materials", href: "/content" },
  { label: "Economic Survey" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Economic Survey / Review of India and Rajasthan"
    >
      <>
					 <div className="button-container">
        <h2 className="container-title">&#x1F4CA; Economic Survey Downloads</h2>

        <div className="section-divider"><span>Economic Survey Of India</span></div>
        <div className="btn-row">
            <a className="btn btn-cta" href="https://www.indiabudget.gov.in/economicsurvey/doc/echapter.pdf" aria-label="Economic Survey Of India English" target="_blank">
                <i className="fas fa-file-pdf"></i> English PDF
            </a>
            <a className="btn btn-ghost" href="https://www.indiabudget.gov.in/economicsurvey/doc/hechapter.pdf" aria-label="Economic Survey Of India Hindi" target="_blank">
                <i className="fas fa-file-pdf"></i> &#x939;&#x93F;&#x902;&#x926;&#x940; PDF
            </a>
            <a className="btn btn-ghost" href="https://www.indiabudget.gov.in/economicsurvey/" aria-label="Economic Survey of India official portal" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-arrow-up-right-from-square"></i> Official Portal (IAS)
            </a>
        </div>

        <div className="section-divider"><span>Rajasthan Economic Survey &#x2014; Official</span></div>
        <div className="btn-row">
            <a className="btn btn-cta" href="https://finance.rajasthan.gov.in/docs/budget/statebudget/2026-2027/Economicreviewe.pdf" aria-label="Economic Survey of Rajasthan English" target="_blank">
                <i className="fas fa-file-pdf"></i> English PDF
            </a>
            <a className="btn btn-ghost" href="https://finance.rajasthan.gov.in/docs/budget/statebudget/2026-2027/Economicreviewh.pdf" aria-label="Economic Survey of Rajasthan Hindi" target="_blank">
                <i className="fas fa-file-pdf"></i> &#x939;&#x93F;&#x902;&#x926;&#x940; PDF
            </a>
            <a className="btn btn-ghost" href="https://statistics.rajasthan.gov.in/pages/sm/department-page/141048/647" aria-label="Rajasthan Economic Review official portal" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-arrow-up-right-from-square"></i> Official Portal (RAS)
            </a>
        </div>

        <div className="section-divider"><span>Rajasthan Economic Survey &#x2014; ATC Summary</span></div>
        <div className="btn-row">
            <a className="btn btn-cta" href="/download/economic-survey-raj-eng.pdf" aria-label="Economic Survey of Rajasthan English Summary" target="_blank">
                <i className="fas fa-download"></i> English PDF
            </a>
            <a className="btn btn-ghost" href="/download/economic-survey-raj-hindi.pdf" aria-label="Economic Survey of Rajasthan Hindi Summary" target="_blank">
                <i className="fas fa-download"></i> &#x939;&#x93F;&#x902;&#x926;&#x940; PDF
            </a>
        </div>

        <div className="info-text">
            <i className="fas fa-circle-info"></i> Click any button to open or download the PDF of your choice.
        </div>
    </div>
					<br /><br />
					<div className="content" id="content">
               <p>
		 The Economic Survey is a cornerstone resource for civil services preparation, offering authoritative data, analysis, and policy insights that directly improve answer quality in Prelims, Mains (especially GS-III), Essays, and Interviews for both UPSC and RAS exams. Use the national Economic Survey for macro trends and conceptual frameworks, and the Rajasthan Economic Review for state-specific facts, schemes, and sectoral performance.<br /><br />
		<b> Why it matters</b><br />
The Survey is the government’s annual “report card” on the economy, reviewing the last year and laying out outlook, policy priorities, and reforms; it is presented before the Budget and often shapes it.<br /><br />

It is rich in credible statistics, phrases, and case studies that elevate Mains answers and Essays, and it routinely appears as direct or indirect source material in Prelims questions.<br /><br />

For RAS, the Rajasthan Economic Review is equally vital for state data, trends, and welfare measures; it is frequently tested in both Prelims and Mains.<br /><br />
		 <b>What to read in the Survey</b><br />
Structure and volumes: conceptual/analytical chapters plus sectoral/state-of-economy analysis; focus on chapters aligning to the GS-III syllabus (growth, inflation, external sector, agriculture, infrastructure, social sector, environment, fiscal).<br /><br />

Core indicators and themes: GDP growth, inflation, employment, fiscal metrics, balance of payments, productivity, investment, and cross-cutting themes (e.g., formalization, DBT, digital public infrastructure).<br /><br />

Sectoral deep-dives: agriculture, industry/manufacturing, services, infrastructure and logistics, social sector outcomes, financial sector and schemes, with evidence-backed analysis useful for problem-solution framing.<br /><br />
		 
		 <b>How it maps to the syllabus</b><br /><br />
Prelims: factual trends (growth, inflation, trade, sector shares), scheme mechanics, definitional items, and recent policy changes are common; preparing flashcards of key numbers helps.<br />

GS-III (Economy): use Survey data to anchor arguments on growth-employment, inflation-fiscal trade-offs, agriculture reforms, industrial policy, infrastructure financing, financial inclusion, and social protection.<br />

Essays and GS-II: Survey’s policy reasoning strengthens governance, welfare, health, education, federalism, and social justice discussions with evidence and language.<br />

Interview: quoting calibrated outlooks, constraints, and recommended reforms displays policy literacy and currency with official analysis.<br /><br />
		 
		<b> Using phrases, data, and case studies</b><br /><br />
Incorporate crisp Survey idioms and formulations to show conceptual clarity; such phrases and stylized facts are valued in evaluation.<br />

Pick 8–10 data points per theme (e.g., growth band, inflation trajectory, subsidy targeting efficiency, sectoral shares) and update them from the latest edition to avoid stale figures.<br />

Lift concise caselets on reforms (e.g., DBT scaling, UPI and DPI, logistics cost reductions) to substantiate “what works” in answers.<br /><br />
		 
		 <b>Rajasthan focus for RAS</b><br /><br />
The Rajasthan Economic Review (Economic Review/Economic Survey of Rajasthan) provides GSDP, per capita income, sectoral GSVA shares, agriculture output patterns, industry composition, services drivers, and state schemes—prime fodder for data-led answers.<br />

Regularly revise state flagship schemes/policies across health, education, irrigation, water, tourism, MSME, mines, energy, and social welfare, as these are tested both directly and via application questions.<br />

Prepare short notes on district-wise or regional patterns if highlighted (e.g., cropping or industrial clusters) and track investment, infrastructure, and social indicators trendlines.<br /><br />
		 
		 <b>Targeted coverage by theme</b><br /><br />
Economy of India: macro trends, growth drivers, inflation dynamics, fiscal stance, external sector vulnerabilities/resilience, productivity and investment cycles.<br />

Financial schemes: Survey chapters summarise design, coverage, and performance of central schemes; note outcome metrics for PMJDY, PM-KISAN, PMFBY, DBT, and inclusion pipelines.<br />

Infrastructure projects: logistics, transport, power, renewables, urban services, PM Gati Shakti—track financing models and outcome indicators for applied answers.<br />

Agriculture: production trends, MSP/markets, risk management (PMFBY), irrigation, allied sectors; connect to price stability, nutrition, and rural incomes.<br />

Industry: manufacturing policy, PLI, MSME credit, supply chains, formalization; use Survey data for jobs, exports, and productivity arguments.<br />

Social sector: health, education, nutrition, social protection, skill; use Survey outcome measures to assess targeting, leakages, and equity.<br />

Welfare schemes: efficiency via JAM/DBT, fiscal space, and governance improvements; cite specific coverage/outcome statistics where available.<br />
		 
		 Economic Survey of Rajasthan: GSDP, per capita income, GSVA shares, sector programs, and scheme outcomes tailored to RAS answers.<br /><br />

<b>Study plan (6–8 sessions)</b><br /><br />
Session 1: Read Survey overview and macro chapter; extract 15 macro stats and 5 phrases.<br />

Session 2: Inflation, employment, external; build one-page briefs with trend charts.<br />

Session 3: Agriculture and allied; list 10 reforms/issues and 10 data points.<br />

Session 4: Industry/MSME/PLI; note finance, credit, skilling linkages.<br />

Session 5: Infrastructure/logistics/energy/urban; capture financing mechanisms and KPIs.<br />

Session 6: Social sectors and financial inclusion; create scheme-outcome matrices.<br />

Session 7: Rajasthan Review—GSDP, GSVA, top schemes, 15 critical stats.<br />

Session 8: Revision and answer-writing drill using only Survey/Review data.<br /><br />
		 
		 <b>Note-making method</b><br /><br />
For each chapter: 3 key insights, 5 statistics, 2 phrases, 1 case study, and 3 mains questions framed with Survey-backed points.<br />

Maintain a “living sheet” that is updated when new Survey or Review releases; prune outdated numbers before mocks/interview.<br /><br />

<b>Common pitfalls to avoid</b><br /><br />
Memorising old figures; always cite from the most recent edition and keep margins of error in mind when quoting projections.<br />

Over-general answers without schemes/outcome data; evaluators reward specificity and Survey’s evaluative language.<br />

Ignoring state-level context in RAS; Rajasthan’s Review is indispensable for accuracy and relevance.<br />
						</p></div></>
    </PageShell>
  );
}
