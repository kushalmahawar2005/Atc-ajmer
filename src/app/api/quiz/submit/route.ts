import { db } from "@/db";
import { quizAttempts } from "@/db/schema";
import { getQuiz } from "@/lib/quiz/data";
import { grade, validateContact } from "@/lib/quiz/validation";
export async function POST(request: Request) {
  if (Number(request.headers.get("content-length")) > 4096)
    return Response.json({ error: "Request is too large." }, { status: 413 });
  let body;
  try {
    body = JSON.parse(await request.text());
  } catch {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }
  if (!body || !Number.isInteger(body.id) || body.id < 1)
    return Response.json({ error: "Invalid quiz." }, { status: 400 });
  // Honeypot: bots fill hidden fields, humans never see them.
  if (typeof body.website === "string" && body.website.trim())
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  const contact = validateContact(body.contact);
  if (!contact)
    return Response.json(
      { error: "Enter your name and a valid mobile number." },
      { status: 400 },
    );
  try {
    const quiz = await getQuiz(body.id);
    if (!quiz)
      return Response.json(
        { error: "This quiz is no longer available." },
        { status: 404 },
      );
    if (body.version !== quiz.updatedAt.toISOString())
      return Response.json(
        {
          error:
            "This quiz was updated. Reload the page before attempting it again.",
        },
        { status: 409 },
      );
    let result;
    try {
      result = grade(quiz.questions, body.answers);
    } catch {
      return Response.json(
        { error: "Invalid answers. Please try again." },
        { status: 400 },
      );
    }
    try {
      await db.insert(quizAttempts).values({
        quizId: quiz.id,
        quizDate: quiz.quizDate,
        quizTitle: quiz.title,
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        correct: result.correct,
        attempted: result.attempted,
      });
    } catch (error) {
      // The lead is worth less than the attempt: show the score either way.
      console.error("Quiz attempt insert failed:", error);
    }
    return Response.json(result, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json(
      { error: "Unable to check your answers right now. Please try again." },
      { status: 503 },
    );
  }
}
