import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Message for The Aspirants from Our Director :: ATC",
  description: "Precious Message From The Director of ATC to The Students Aspiring For Civil Services Examinations.",
  alternates: { canonical: "/about/director-message" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Director Sir's Message" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="ATC : Message from the Director\u2019s Desk"
    >
      <>
                 <p style={{ textAlign: "justify" }}><img style={{ float: "right", margin: "15px", width: "200px", height: "200px", border: "medium", borderRadius: "10px" }} src="/images/pages/dileep-sir.jpeg" alt="Dileep Sir, Director, ATC" />
	   Dear Aspirants,<br /><br />
It gives me immense pride to address each of you who has chosen the path of preparing for the Civil Services Examination—the path of courage, discipline, and purpose. At ATC, we believe that this journey is not just about clearing one of the toughest examinations in the country, but about shaping yourselves into individuals capable of serving the nation with wisdom, compassion, and integrity.<br /><br />
The Civil Services demand more than knowledge; they demand resilience, clarity of thought, and above all, unwavering commitment. Many of you may face moments of self-doubt, perhaps even fear of failure. But I urge you to remember—every great achievement in history was born out of countless hours of persistence. Success in this examination does not come overnight; it takes consistent effort day after day, just as a sculptor chisels each stroke patiently to transform a stone into a masterpiece.<br /></p>	
<p>Discipline is your greatest ally in this journey. Set your goals clearly, build a routine that honors your time, and practice self-accountability. Avoid comparing your progress with that of others. Each aspirant’s journey is unique, and your responsibility is only to be better than the person you were yesterday.<br /><br />
Equally important is the power of a positive mindset. Challenges will come—fatigue, information overload, or unexpected setbacks—but your attitude will decide whether those challenges break you or make you stronger. Treat every difficulty as an opportunity to test your inner strength. Remember, a calm mind and determined heart can turn even the heaviest burden into a stepping stone.<br /><br />
While your studies matter deeply, never forget the larger vision. The Civil Services are not merely a career but a calling to serve the people of our country. Let this noble purpose be the fuel that sustains you through long hours of study and preparation.<br /><br />
At ATC, we stand firmly beside you with mentorship, guidance, and a supportive environment. Yet, ultimately, the fire to succeed must come from within. Believe in yourself, keep faith in your abilities, and walk forward with courage.<br /><br />	I sincerely wish each of you the strength to persevere, the clarity to stay focused, and the spirit to remain undeterred. May your hard work open doors not only to success in the examination but also to a meaningful life in service of the nation.<br /><br />
With warm regards and best wishes,<br /><br />
	Dileep Mahecha<br />
<b>Director, ATC</b>
            </p>
           	
            <br /><br /></>
    </PageShell>
  );
}
