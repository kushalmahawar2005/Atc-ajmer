"use server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { dailyQuizzes } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { revalidatePath } from "next/cache";
import { validDate, validateQuestions } from "@/lib/quiz/validation";
export async function saveQuiz(
  _: { error?: string; success?: string },
  form: FormData,
): Promise<{ error?: string; success?: string }> {
  await requireAdmin();
  const id = Number(form.get("id"));
  const title = String(form.get("title") ?? "").trim();
  const quizDate = String(form.get("quizDate") ?? "");
  const questions = Array.from({ length: 5 }, (_, i) => ({
    text: String(form.get(`q${i}`) ?? "").trim(),
    options: Array.from({ length: 4 }, (_, j) =>
      String(form.get(`q${i}o${j}`) ?? "").trim(),
    ),
    correct: Number(form.get(`q${i}correct`) || -1),
    explanation: String(form.get(`q${i}explanation`) ?? "").trim(),
  }));
  if (
    !validDate(quizDate) ||
    !title ||
    title.length > 200 ||
    !validateQuestions(questions) ||
    !Number.isInteger(id) ||
    id < 0
  )
    return {
      error:
        "Enter a valid date, title, and five questions with four different options, one correct answer and an explanation each.",
    };
  try {
    const data = {
      title,
      quizDate,
      questions,
      published: form.get("published") === "on",
      updatedAt: new Date(),
    };
    if (id) {
      const saved = await db
        .update(dailyQuizzes)
        .set(data)
        .where(eq(dailyQuizzes.id, id))
        .returning({ id: dailyQuizzes.id });
      if (!saved.length)
        return {
          error: "This quiz no longer exists. Reload the page to add it again.",
        };
    } else await db.insert(dailyQuizzes).values(data);
  } catch {
    return {
      error:
        "Could not save. Check the database connection and ensure no other quiz uses this date.",
    };
  }
  revalidatePath("/admin/quizzes");
  revalidatePath("/daily-quiz");
  revalidatePath("/");
  return {
    success:
      "Quiz saved. Published quizzes become available on their date in India.",
  };
}
