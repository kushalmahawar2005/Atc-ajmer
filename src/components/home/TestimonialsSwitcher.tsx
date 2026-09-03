"use client";

import { useState } from "react";
import Image from "next/image";
import type { Testimonial } from "./Testimonials";

type Tab = "faculty" | "student";

export default function TestimonialsSwitcher({
  faculty,
  students,
}: {
  faculty: Testimonial[];
  students: Testimonial[];
}) {
  // Open on whichever group actually has entries.
  const [tab, setTab] = useState<Tab>(faculty.length > 0 ? "faculty" : "student");
  const items = tab === "faculty" ? faculty : students;

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "faculty", label: "Faculty Members", count: faculty.length },
    { key: "student", label: "Students", count: students.length },
  ];

  return (
    <div className="testimonials">
      <h2 className="section-title">What People Say About Us</h2>

      <div className="tst-tabs" role="tablist" aria-label="Testimonial group">
        {tabs.map((entry) => (
          <button
            key={entry.key}
            role="tab"
            aria-selected={tab === entry.key}
            disabled={entry.count === 0}
            className={`tst-tab${tab === entry.key ? " is-active" : ""}`}
            onClick={() => setTab(entry.key)}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <div className="tst-grid">
        {items.map((item) => (
          <figure className="tst-card" key={item.id}>
            <i className="fas fa-quote-left tst-quote-icon" aria-hidden="true" />
            <blockquote className="tst-quote">{item.quote}</blockquote>
            <figcaption className="tst-person">
              {item.photoUrl ? (
                <Image
                  src={item.photoUrl}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="tst-photo"
                />
              ) : (
                <span className="tst-initials">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </span>
              )}
              <span>
                <span className="tst-name">{item.name}</span>
                {item.role && <span className="tst-role">{item.role}</span>}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
