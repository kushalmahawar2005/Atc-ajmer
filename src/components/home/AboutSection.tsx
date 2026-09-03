"use client";

import { useState } from "react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="info-full">
      <h2 className="info-title">
        ATC: Launching Aspirations, Shaping Careers
      </h2>

      <div className={`info-content${expanded ? " expanded" : ""}`}>
        <p style={{ marginBottom: 15, fontSize: "1.05em" }}>
          In the highly competitive landscape of Civil Services preparation, success demands
          more than hard work — it requires the right guidance, a focused approach, and the
          unwavering support of a trusted mentor. ATC stands as a beacon of
          excellence, dedicated to helping aspirants realise their dream of becoming civil
          servants through a balanced blend of classroom learning and cutting-edge online
          coaching.
        </p>

        <p style={{ marginBottom: 15 }}>
          ATC is built to give every aspirant a clear path forward. We understand that the
          journey to the Civil Services is not just about clearing an exam; it is about
          cultivating a mindset, building resilience, and acquiring the knowledge and skills
          required to lead the nation. Our purpose is to provide the decisive guidance that
          turns dedication into achievement and dreams into reality.
          <br />
          <br />
          At ATC, we combine the experience of seasoned educators, innovative
          teaching methodologies, and a meticulously designed curriculum that covers every
          stage of the UPSC and State Civil Services examinations — Prelims, Mains, and
          Interview. Our pedagogy blends concept clarity, continuous revision cycles, and
          regular practice through tests and mock interviews to ensure holistic preparation.
        </p>

        <p style={{ marginBottom: 15 }}>
          What sets us apart from other institutes is our unwavering focus on personalised
          mentorship. We believe every aspirant has unique strengths and areas of improvement.
          Our expert faculty not only teach the syllabus but also mentor students individually
          — guiding their preparation strategy, evaluating their progress, and instilling the
          confidence necessary to excel.
          <br />
          In today&apos;s dynamic learning environment, flexibility is key. That&apos;s why
          ATC offers both interactive classroom learning for those who thrive
          in a physical learning space and high-quality online programs for aspirants across
          the country. Our online sessions maintain the same depth, engagement, and personal
          touch as classroom lectures, ensuring that distance is never a barrier to quality
          education.
        </p>

        <p style={{ marginBottom: 15 }}>
          Over the years, we have built a reputation for producing results — not just in terms
          of ranks, but in shaping honest, capable, and visionary officers who stand out for
          their service to the nation. Our alumni network is a testament to our legacy of
          excellence and dedication.
          <br />
          Choosing ATC means choosing a launchpad that transforms your
          dedication into success, your potential into performance, and your aspirations into
          reality. Here, we don&apos;t just prepare you for an exam — we prepare you for a
          lifetime of leadership, responsibility, and impact.
        </p>
      </div>

      <button className="info-toggle-btn" onClick={() => setExpanded((value) => !value)}>
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
