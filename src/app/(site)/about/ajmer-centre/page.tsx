import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import ContactDetails from "@/components/pages/ContactDetails";

export const metadata: Metadata = {
  title: "ATC Ajmer — Civil Services Coaching in Civil Lines",
  description: "Visit ATC in Civil Lines, Ajmer for UPSC and RAS coaching with guidance for Prelims, Mains and Interview.",
  alternates: { canonical: "/about/ajmer-centre" },
};

export default function Page() {
  return (
    <PageShell breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Ajmer Centre" }]} title="ATC Ajmer — Knowledge is Growth... Growth is Life">
      <p style={{ marginBottom: 28 }}>Founded in 2019 by Mr. Arvind Tiwari, ATC helps aspirants from Ajmer and the surrounding regions prepare for UPSC and RAS examinations. Our guidance covers Prelims, Mains and Interview, with dedicated optional-subject coaching and personal mentorship.</p>
      <ContactDetails />
    </PageShell>
  );
}
