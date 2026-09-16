import { cache } from "react";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { coursePlans } from "@/db/schema";
import { confirmedCoursePlans } from "@/lib/course-fees";

export type CoursePlan = typeof coursePlans.$inferSelect;

/**
 * Priced plans for one course page, straight from `course_plans` so fees stay
 * editable from the admin panel, with the confirmed fees as an offline
 * fallback. cache() keeps the page body and its Course JSON-LD — which both
 * need the same rows — on a single query per request.
 */
export const getCoursePlans = cache(async (slug: string): Promise<CoursePlan[]> => {
  try {
    return await db
      .select()
      .from(coursePlans)
      .where(and(eq(coursePlans.courseSlug, slug), eq(coursePlans.active, true)))
      .orderBy(asc(coursePlans.sortOrder));
  } catch {
    console.error(`[course-plans] database unavailable for ${slug}; using confirmed fees.`);
    return confirmedCoursePlans
      .filter((plan) => plan.courseSlug === slug)
      .map((plan, index) => ({ ...plan, id: -(index + 1), active: true }));
  }
});
