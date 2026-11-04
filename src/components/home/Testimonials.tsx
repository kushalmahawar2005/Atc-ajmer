import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import TestimonialsSwitcher from "./TestimonialsSwitcher";
import TestimonialPosters from "./TestimonialPosters";

const studentStories = [
  {
    src: "/images/testimonials/dharmendra-ras-2021.jpg",
    alt: "Testimonial from Dharmendra, Rank 325, RAS 2021",
    name: "Dharmendra",
    result: "Rank 325 · RAS 2021",
  },
  {
    src: "/images/testimonials/monika-ras-2021.jpg",
    alt: "Testimonial from Monika, Rank 174, RAS 2021",
    name: "Monika",
    result: "Rank 174 · RAS 2021",
  },
  {
    src: "/images/testimonials/harshita-ras-2021.jpg",
    alt: "Testimonial from Harshita, Rank 5 (LV), RAS 2021",
    name: "Harshita",
    result: "Rank 5 (LV) · RAS 2021",
  },
  {
    src: "/images/testimonials/payal-ras-2023.jpg",
    alt: "Testimonial from Ms. Payal, R.Ac.S., RAS 2023",
    name: "Payal",
    result: "R.Ac.S. · RAS 2023",
  },
  {
    src: "/images/testimonials/gaurav-ras-2023.jpg",
    alt: "Testimonial from Gaurav, Rank 287, RAS 2023",
    name: "Gaurav",
    result: "Rank 287 · RAS 2023",
  },
  {
    src: "/images/testimonials/mayank-ras-2024.jpg",
    alt: "Testimonial from Mayank, RPS, RAS 2024",
    name: "Mayank",
    result: "RPS · RAS 2024",
  },
];

/** Shows the supplied student stories and any extra testimonials added by admins. */
export default async function Testimonials() {
  let rows: (typeof testimonials.$inferSelect)[] = [];

  try {
    rows = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.active, true))
      .orderBy(asc(testimonials.sortOrder));
  } catch (error) {
    console.error("[testimonials] could not load:", error);
  }

  const students = rows.filter((row) => row.kind === "student");

  return (
    <section className="testimonials student-testimonials" aria-labelledby="student-testimonials-title">
      <header className="student-testimonials-heading">
        <h2 className="section-title" id="student-testimonials-title">
          Student Testimonials
        </h2>
        <p>Experiences from our RAS achievers</p>
      </header>

      <TestimonialPosters stories={studentStories} />

      {students.length > 0 && (
        <div className="admin-testimonials">
          <h3 className="admin-testimonials-title">More from our students</h3>
          <TestimonialsSwitcher students={students} />
        </div>
      )}
    </section>
  );
}

export type Testimonial = typeof testimonials.$inferSelect;
