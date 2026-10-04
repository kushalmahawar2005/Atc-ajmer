import { CONTACT } from "@/lib/contact";
import { ORGANISATION, ROUTES, SITE_URL } from "@/lib/site";

/** Section headings for the route groups, in the order they should be listed. */
const SECTIONS: { heading: string; prefix: string }[] = [
  { heading: "Courses", prefix: "/courses" },
  { heading: "Study material and exam resources", prefix: "/content" },
  { heading: "About ATC", prefix: "/about" },
];

/** Short, factual blurb per URL — what an assistant needs to cite the page. */
const NOTES: Record<string, string> = {
  "/": "Home page: courses, selections and free study material.",
  "/courses": "Every IAS, RAS, Rajasthan PSI and interview course, with fees.",
  "/courses/ias-foundation": "UPSC IAS comprehensive course — Prelims, Mains, Interview, PSIR optional.",
  "/courses/ras-foundation": "RAS comprehensive course — Prelims, Mains and Interview.",
  "/courses/rajasthan-psi": "Rajasthan Police Sub Inspector (RPSC PSI) exam batch.",
  "/courses/ias-ras-integrated": "Three-year IAS–RAS integrated programme.",
  "/courses/ras-mains": "RAS Mains course with answer writing and evaluation.",
  "/courses/ias-ras-interview": "Mock interviews and personality test guidance for UPSC and RPSC.",
  "/courses/test-series": "All test series for IAS, RAS and Rajasthan PSI.",
  "/courses/ias-test-series": "UPSC IAS test series — 60 Prelims tests, 24 Mains tests.",
  "/courses/ras-test-series": "RAS test series — 18 Prelims tests, 16 Mains tests.",
  "/courses/psi-test-series": "Objective test series for the Rajasthan PSI exam.",
  "/about": "Institute profile, founding vision and achievements.",
  "/about/director-message": "Message from founder Arvind Tiwari.",
  "/about/ajmer-centre": "The Ajmer centre — ATC's only centre.",
  "/about/selections": "Selected candidates, exam by exam.",
  "/about/teachers": "Faculty profiles and the subjects each teacher handles.",
  "/about/contact": "Address, phone numbers, email and map for the Ajmer centre.",
  "/content": "Index of every free study resource.",
  "/content/ncert-pdf-download": "Free NCERT textbook PDFs.",
  "/content/rajasthan-sujas": "Rajasthan Sujas monthly magazine PDFs.",
  "/content/economic-survey": "Economic Survey of India and Rajasthan Economic Review PDFs.",
  "/content/monthly-magazine": "ATC's monthly current affairs magazine, Hindi and English.",
  "/content/ias-exam-resources": "UPSC IAS exam pattern, syllabus and preparation guidance.",
  "/content/ras-exam-resources": "RPSC RAS exam pattern, syllabus and preparation guidance.",
  "/content/rajasthan-psi-exam-resources": "Rajasthan PSI exam pattern, syllabus and physical standards.",
};

function line(path: string): string {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const title = path === "/" ? "Home" : path;
  return NOTES[path] ? `- [${title}](${url}): ${NOTES[path]}` : `- [${title}](${url})`;
}

/**
 * llms.txt — a plain-text map of the site for AI assistants, in the format at
 * llmstxt.org. Generated from ROUTES so it cannot drift from the sitemap.
 */
export function GET() {
  const listed = new Set<string>();
  const sections = SECTIONS.map(({ heading, prefix }) => {
    const paths = ROUTES.map((route) => route.path).filter(
      (path) => path.startsWith(prefix) && !path.includes("privacy") && !path.includes("terms") && !path.includes("refund"),
    );
    paths.forEach((path) => listed.add(path));
    return `## ${heading}\n\n${paths.map(line).join("\n")}`;
  });

  const rest = ROUTES.map((route) => route.path).filter(
    (path) => !listed.has(path) && !["/about/privacy", "/about/terms", "/about/refund-policy"].includes(path),
  );

  const body = `# ${ORGANISATION.name} — IAS and RAS coaching in Ajmer, Rajasthan

> ${ORGANISATION.name} (ATC Ajmer) is a civil services coaching institute founded in ${ORGANISATION.founded} by Arvind Tiwari. It prepares aspirants for the UPSC Civil Services (IAS), Rajasthan Administrative Service (RAS) and Rajasthan Police Sub Inspector (PSI) examinations, across Prelims, Mains and Interview, in both Hindi and English medium.

ATC runs a single centre, in Ajmer: ${CONTACT.address}. Phone ${CONTACT.phones[0].label}. Email ${CONTACT.email}.

## Key pages

${rest.map(line).join("\n")}

${sections.join("\n\n")}

## Notes

- Fees shown on the course pages are current and include GST; each course page lists offline, online-live and recorded options separately.
- Selection records are listed per exam year on ${SITE_URL}/about/selections.
- ATC has no branches outside Ajmer.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
