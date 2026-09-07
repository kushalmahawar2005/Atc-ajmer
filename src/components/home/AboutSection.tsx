"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="info-full">
      <h2 className="info-title">About ATC — Excellence in Civil Services Coaching</h2>
      <div id="home-about-content" className={`info-content${expanded ? " expanded" : ""}`}>
        <p style={{ marginBottom: 15 }}><strong>Knowledge is Growth... Growth is Life</strong></p>
        <p style={{ marginBottom: 15 }}>Founded in 2019 by Mr. Arvind Tiwari, ATC is a civil services coaching institute on Hospital Street, Civil Lines, Ajmer. We help aspirants prepare for the UPSC Civil Services and Rajasthan Administrative Service examinations with structured teaching and personal mentorship.</p>
        <p style={{ marginBottom: 15 }}>Our preparation covers Prelims, Mains and Interview, alongside dedicated coaching for UPSC optional subjects. ATC guided students to 7 selections in RAS 2021 and 5 selections in RAS 2023.</p>
        <p style={{ marginBottom: 15 }}>Our faculty supports students beyond the syllabus through life skills, ethical grounding, personality development and respect for India&apos;s cultural and constitutional values. Classroom teaching and digital learning resources help us reach aspirants in Ajmer and beyond.</p>
        <Link href="/about">Learn More About ATC →</Link>
      </div>
      <button className="info-toggle-btn" aria-expanded={expanded} aria-controls="home-about-content" onClick={() => setExpanded((value) => !value)}>
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
