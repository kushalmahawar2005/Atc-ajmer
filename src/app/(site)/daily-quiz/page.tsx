import PageShell from "@/components/layout/PageShell";
import DailyQuiz from "@/components/quiz/DailyQuiz";
import { getQuiz } from "@/lib/quiz/data";
import "@/styles/quiz.css";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Daily Current Affairs Quiz | ATC Ajmer",
  description:
    "Practise five daily questions with answers, explanations and a downloadable PDF.",
  alternates: { canonical: "/daily-quiz" },
};
export default async function Page() {
  let quiz = null;
  let unavailable = false;
  try {
    quiz = await getQuiz();
  } catch {
    unavailable = true;
  }
  return (
    <PageShell
      title="Daily Quiz"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Daily Quiz" }]}
    >
      {quiz ? (
        <DailyQuiz
          quiz={{
            id: quiz.id,
            title: quiz.title,
            quizDate: quiz.quizDate,
            version: quiz.updatedAt.toISOString(),
            questions: quiz.questions.map(({ text, options }) => ({
              text,
              options,
            })),
          }}
        />
      ) : (
        <div className="daily-quiz">
          <h2>
            {unavailable
              ? "Quiz temporarily unavailable"
              : "Your daily practice starts here"}
          </h2>
          <p>
            {unavailable
              ? "Please try again shortly."
              : "Our team will publish five questions here. Check back soon for the first quiz."}
          </p>
        </div>
      )}
    </PageShell>
  );
}
