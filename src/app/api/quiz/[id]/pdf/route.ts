import { getQuiz } from "@/lib/quiz/data";
import { quizPdf } from "@/lib/quiz/pdf";
export const runtime = "nodejs";
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!/^\d+$/.test(id) || !Number.isSafeInteger(Number(id)) || Number(id) < 1)
    return Response.json({ error: "Invalid quiz." }, { status: 400 });
  try {
    const quiz = await getQuiz(Number(id));
    if (!quiz)
      return Response.json({ error: "Quiz not found." }, { status: 404 });
    const pdf = await quizPdf(quiz);
    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="ATC-Daily-Quiz-${quiz.quizDate}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return Response.json(
      { error: "PDF temporarily unavailable. Please try again." },
      { status: 503 },
    );
  }
}
