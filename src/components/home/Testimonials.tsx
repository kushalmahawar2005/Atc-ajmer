import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import TestimonialsSwitcher from "./TestimonialsSwitcher";

/** Renders student testimonials when the admin adds rows. */
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

  const students = rows.filter((row) => row.kind === "student");
  if (students.length === 0) return null;

  return <TestimonialsSwitcher students={students} />;
}

export type Testimonial = typeof testimonials.$inferSelect;
