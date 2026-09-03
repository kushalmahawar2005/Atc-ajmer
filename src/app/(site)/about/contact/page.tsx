import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Our Contact Details :: ATC - Phone Number Location Whatsapp",
  description: "Contact ATC On Phone Whatsapp Chat or Through Social Media, Youtube Telegram Instagram links of ATC.",
  alternates: { canonical: "/about/contact" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Contact Details of ATC"
    >
      <>
                   <p><b>Jaipur Center</b><br /><br />
	 Plot A-1, Keshav Vihar,  Main Riddhi Siddhi Chouraha<br /> Gopalpura Bypass, Jaipur, Rajasthan - 302018<br /><br />
	   Call Us : +91-9636977490, +91-8955577492<br />

 0141-3555948 <br /><br />
	   <b>Locate us on Google map </b> <br /><br />
	   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9216018607262!2d75.7756519!3d26.874231800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db44c9bcac295%3A0xd59e7259a2880649!2sSpringboard%20Academy!5e0!3m2!1sen!2sin!4v1756534294980!5m2!1sen!2sin" width={520} height={340} style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
	 </p><br /><br /><br /></>
    </PageShell>
  );
}
