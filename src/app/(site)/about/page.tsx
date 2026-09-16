import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: { absolute: "About ATC — Excellence in Civil Services Coaching" },
  description: "Founded in 2019 by Arvind Tiwari, ATC Ajmer offers complete UPSC and RAS preparation. 7 selections in RAS 2021 and 5 selections in RAS 2023.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <PageShell breadcrumb={[{ label: "Home", href: "/" }, { label: "About Institute" }]} title="About ATC — Excellence in Civil Services Coaching">
      <AboutContent />
    </PageShell>
  );
}
