import Link from "next/link";
export default function QuizCard() {
  return (
    <section className="home-quiz-card" aria-labelledby="daily-quiz-title">
      <div>
        <span className="enroll-badge">DAILY PRACTICE</span>
        <h2 id="daily-quiz-title">
          Five questions. Keep your preparation moving.
        </h2>
        <p>
          Attempt the latest quiz, review answers with explanations and download
          the PDF for revision.
        </p>
      </div>
      <Link href="/daily-quiz" className="enroll-cta-btn">
        Attempt daily quiz →
      </Link>
    </section>
  );
}
