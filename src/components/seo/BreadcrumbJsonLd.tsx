import { SITE_URL } from "@/lib/site";
import type { Crumb } from "@/components/layout/PageShell";

/** Breadcrumb markup so Google can show the trail under the result. */
export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const list = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }}
    />
  );
}
