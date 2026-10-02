"use client";

import Image from "next/image";
import type { Testimonial } from "./Testimonials";

export default function TestimonialsSwitcher({ students }: { students: Testimonial[] }) {
  const items = students;

  return (
    <div className="testimonials">
      <h2 className="section-title">What People Say About Us</h2>

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
