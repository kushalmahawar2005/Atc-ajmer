import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy Of ATC",
  alternates: { canonical: "/about/refund-policy" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Refund Policy" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="ATC : Refund Policy"
    >
      <>
                <p>No other mobile or electronic device apart from the registered device can be used to watch the online videos. Fees, once paid, will not be refunded under any circumstances.<br /><br />

You can always contact us for any return questions at https://atcajmer.com
            </p>            
            <br /><br /></>
    </PageShell>
  );
}
