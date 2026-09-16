import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: { absolute: "Founder & Vision — Arvind Tiwari, ATC Ajmer" },
  description: "Learn about ATC founder Arvind Tiwari and the institute's founding vision for civil services aspirants in Ajmer.",
  alternates: { canonical: "/about/director-message" },
};

export default function Page() {
  return (
    <PageShell breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Founder & Vision" }]} title="Our Founder — Mr. Arvind Tiwari">
      <AboutContent founderOnly />
    </PageShell>
  );
}
