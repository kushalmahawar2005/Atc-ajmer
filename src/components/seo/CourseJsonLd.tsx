import { getCoursePlans, type CoursePlan } from "@/lib/course-plans";
import { ORGANISATION, SITE_URL } from "@/lib/site";

/** Schema.org courseMode values, mapped from the free-text mode on a plan. */
function courseMode(mode: string | null): "Onsite" | "Online" | "Blended" {
  const value = (mode ?? "").toLowerCase();
  if (value.includes("online") && value.includes("offline")) return "Blended";
  if (value.includes("online")) return "Online";
  return "Onsite";
}

/** "…Duration: 18 months" → "P18M", which is what courseWorkload expects. */
function workload(feeNote: string | null): string | undefined {
  const match = /duration:\s*(\d+)\s*(month|year|week|day)/i.exec(feeNote ?? "");
  if (!match) return undefined;
  const unit = { month: "M", year: "Y", week: "W", day: "D" }[match[2].toLowerCase()];
  return `P${match[1]}${unit}`;
}

const address = {
  "@type": "PostalAddress",
  streetAddress: ORGANISATION.address.street,
  addressLocality: ORGANISATION.address.locality,
  addressRegion: ORGANISATION.address.region,
  postalCode: ORGANISATION.address.postalCode,
  addressCountry: ORGANISATION.address.country,
};

/** One CourseInstance per delivery mode, so Google can show mode and price. */
function instances(plans: CoursePlan[]) {
  const byMode = new Map<string, CoursePlan[]>();
  for (const plan of plans) {
    const mode = courseMode(plan.mode);
    byMode.set(mode, [...(byMode.get(mode) ?? []), plan]);
  }

  // No priced plans on the page (interview guidance, RAS Mains): still declare
  // the one classroom instance so the Course entity is complete.
  if (byMode.size === 0) {
    return [
      {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        location: { "@type": "Place", name: `${ORGANISATION.name}, Ajmer`, address },
      },
    ];
  }

  return [...byMode].map(([mode, modePlans]) => ({
    "@type": "CourseInstance",
    courseMode: mode,
    ...(mode === "Online"
      ? {}
      : { location: { "@type": "Place", name: `${ORGANISATION.name}, Ajmer`, address } }),
    ...(workload(modePlans[0].feeNote) ? { courseWorkload: workload(modePlans[0].feeNote) } : {}),
    inLanguage: ["en-IN", "hi-IN"],
  }));
}

/**
 * Course markup for a single course page. Prices come from the same rows the
 * page renders, so the structured data can never drift from the visible fees —
 * which is exactly what Google checks for on a Course rich result.
 */
export default async function CourseJsonLd({
  slug,
  name,
  description,
  path,
}: {
  slug: string;
  name: string;
  description: string;
  path: string;
}) {
  const plans = await getCoursePlans(slug);
  const url = `${SITE_URL}${path}`;

  const offers = plans
    .filter((plan) => plan.fees !== null)
    .map((plan) => ({
      "@type": "Offer",
      name: plan.title,
      category: "Tuition",
      price: plan.oneTimePayment ?? plan.fees,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url,
    }));

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}#course`,
    name,
    description,
    url,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organisation`,
      name: ORGANISATION.name,
      url: SITE_URL,
    },
    inLanguage: ["en-IN", "hi-IN"],
    isAccessibleForFree: false,
    hasCourseInstance: instances(plans),
    ...(offers.length > 0 ? { offers } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
    />
  );
}
