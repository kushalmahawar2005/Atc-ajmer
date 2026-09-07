import { ORGANISATION, SITE_URL } from "@/lib/site";

/**
 * Organisation, local-business and website markup for the home page.
 * One JSON-LD graph keeps the entities linked by @id.
 */
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": `${SITE_URL}/#organisation`,
        name: ORGANISATION.name,
        legalName: ORGANISATION.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/images/atc-logo.png`,
        image: `${SITE_URL}/images/atc-logo.png`,
        foundingDate: ORGANISATION.founded,
        description:
          "ATC Ajmer, founded in 2019 by Arvind Tiwari, offers UPSC and RAS preparation for Prelims, Mains and Interview.",
        telephone: ORGANISATION.phones,
        email: ORGANISATION.email,
        hasMap: ORGANISATION.maps,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORGANISATION.address.street,
          addressLocality: ORGANISATION.address.locality,
          addressRegion: ORGANISATION.address.region,
          postalCode: ORGANISATION.address.postalCode,
          addressCountry: ORGANISATION.address.country,
        },
        areaServed: { "@type": "State", name: "Rajasthan" },
        sameAs: ORGANISATION.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: ORGANISATION.name,
        publisher: { "@id": `${SITE_URL}/#organisation` },
        inLanguage: ["en-IN", "hi-IN"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
