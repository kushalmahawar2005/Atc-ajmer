import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/layout/PageShell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Founder & Vision — Arvind Tiwari, ATC Ajmer" },
  description: "Learn about ATC founder Arvind Tiwari and the institute's founding vision for civil services aspirants in Ajmer.",
  alternates: { canonical: "/about/director-message" },
};

const visionParagraphs = [
  "My vision behind establishing ATC – An Institute for Civil Service is to create an institution that goes beyond conventional coaching and empowers aspiring civil servants with the knowledge, confidence, discipline, and values required to serve the nation. I firmly believe that civil services are not merely a career option; they represent an opportunity to contribute meaningfully to society, strengthen democratic institutions, and bring positive change to the lives of people.",
  "At ATC, our objective is to make quality civil services education accessible to aspirants in Ajmer and the surrounding regions, providing them with the right academic environment, expert guidance, and consistent mentorship to pursue their dreams of becoming IAS and RAS officers. I believe that talent and determination are present everywhere, and with the right direction and opportunities, students from every background can achieve excellence.",
  "Our approach is built on the understanding that success in competitive examinations requires much more than memorising facts or completing a syllabus. It demands conceptual clarity, analytical thinking, effective communication, disciplined preparation, and the ability to connect theoretical knowledge with real-world developments. Therefore, ATC strives to develop a comprehensive learning ecosystem that prepares students for every stage of the examination process—Prelims, Mains, and Interview.",
  "We aim to cultivate a culture of continuous learning through structured classroom teaching, regular assessments, answer-writing practice, current affairs analysis, individual mentorship, and constructive feedback. Equally important, we encourage students to develop independent thinking, intellectual curiosity, ethical awareness, and a balanced understanding of India’s social, political, economic, and administrative realities.",
  "My vision is also rooted in the belief that a teacher’s responsibility extends beyond imparting knowledge. A teacher must inspire, guide, motivate, and help students recognise their potential, especially during challenging phases of preparation. At ATC, we aspire to build meaningful relationships with our students, understand their individual strengths and limitations, and support them with sincerity throughout their journey.",
  "As an institution, we are committed to creating an environment where discipline is accompanied by encouragement, competition is balanced with cooperation, and ambition is guided by integrity. We want our students not only to clear examinations but also to become responsible, empathetic, and competent administrators who uphold constitutional values and remain sensitive to the needs of ordinary citizens.",
  "Looking ahead, my aspiration is to establish ATC as a trusted centre of excellence for civil services preparation, recognised for its academic standards, student-centric approach, transparent guidance, and commitment to results. We continuously seek to improve our teaching methodologies, learning resources, and mentoring practices to meet the evolving demands of UPSC and RPSC examinations.",
  "For me, the true success of ATC lies not merely in the number of selections, but in the quality of individuals we help shape and the positive difference they eventually make in society.",
  "At ATC, we do not simply prepare students for examinations; we strive to prepare future public servants for the responsibilities that await them.",
  "Our vision is simple: to transform aspirations into achievements and prepare a generation of capable, ethical, and socially committed civil servants who contribute to the progress of India.",
];

export default function Page() {
  return (
    <PageShell breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Founder & Vision" }]} title="Founder’s Vision">
      <article className={styles.vision}>
        <figure className={styles.portrait}>
          <Image
            src="/images/arvind-tiwari-founder-clean.png"
            alt="Arvind Tiwari, Founder & Director of ATC, Ajmer"
            width={1440}
            height={1440}
            sizes="(max-width: 600px) 280px, 300px"
            loading="eager"
            className={styles.photo}
          />
          <figcaption className={styles.caption}>
            <strong>Arvind Tiwari</strong>
            <span>Founder &amp; Director</span>
          </figcaption>
        </figure>
        <p className={styles.introduction}>
          <strong>Arvind Tiwari, Founder &amp; Director, ATC – An Institute for Civil Service, Ajmer</strong>
        </p>
        {visionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <footer className={styles.signature}>
          <strong>Arvind Tiwari</strong>
          <span>Founder &amp; Director</span>
          <span>ATC – An Institute for Civil Service, Ajmer</span>
        </footer>
      </article>
    </PageShell>
  );
}
