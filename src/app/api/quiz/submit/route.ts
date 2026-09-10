import { getQuiz } from "@/lib/quiz/data";
import { grade } from "@/lib/quiz/validation";
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
    try {
      return Response.json(grade(quiz.questions, body.answers), {
        headers: { "Cache-Control": "no-store" },
      });
    } catch {
      return Response.json(
        { error: "Invalid answers. Please try again." },
        { status: 400 },
      );
    }
  } catch {
    return Response.json(
      { error: "Unable to check your answers right now. Please try again." },
      { status: 503 },
    );
  }
}
