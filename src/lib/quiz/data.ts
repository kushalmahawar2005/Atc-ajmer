import "server-only";
import { and, desc, eq, lte } from "drizzle-orm";
import { db } from "@/db";
import { dailyQuizzes } from "@/db/schema";
import { indiaDate, validateQuestions } from "./validation";
export async function getQuiz(id?: number) {
  const [quiz] = await db
    .select()
    .from(dailyQuizzes)
    .where(
      and(
        eq(dailyQuizzes.published, true),
        lte(dailyQuizzes.quizDate, indiaDate()),
        id === undefined ? undefined : eq(dailyQuizzes.id, id),
      ),
    )
    .orderBy(desc(dailyQuizzes.quizDate))
    .limit(1);
  if (!quiz || !validateQuestions(quiz.questions)) return null;
  return quiz;
}
