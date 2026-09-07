import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import ContactDetails from "@/components/pages/ContactDetails";

export const metadata: Metadata = {
  title: "Contact ATC Ajmer — Phone, WhatsApp & Directions",
  description: "Contact ATC Ajmer at 9460971727 or 6350556400. Visit 131/10B, Vijay Sadan, Ajmer Hospital Street, Civil Lines, Ajmer 305001.",
  alternates: { canonical: "/about/contact" },
};

export default function Page() {
  return (
    <PageShell breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Contact Us" }]} title="Contact ATC Ajmer">
      <ContactDetails />
    </PageShell>
  );
}
