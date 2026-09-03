import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import TestimonialsSwitcher from "./TestimonialsSwitcher";

/**
 * Testimonials in two groups the visitor swaps between: faculty and students.
 * Renders nothing until the admin adds rows.
 */
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
    return null;
  }

  const faculty = rows.filter((row) => row.kind === "faculty");
  const students = rows.filter((row) => row.kind === "student");
  if (faculty.length === 0 && students.length === 0) return null;

  return <TestimonialsSwitcher faculty={faculty} students={students} />;
}

export type Testimonial = typeof testimonials.$inferSelect;
