"use client";
import { useRef, useState } from "react";
import type { grade, PublicQuestion } from "@/lib/quiz/validation";
type Quiz = {
  id: number;
  title: string;
  quizDate: string;
  version: string;
  questions: PublicQuestion[];
};
export default function DailyQuiz({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(5).fill(null),
  );
  const [result, setResult] = useState<ReturnType<typeof grade> | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: quiz.id, version: quiz.version, answers }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Unable to submit. Please try again.");
      setResult(data);
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Unable to submit. Please try again.",
      );
    } finally {
      setPending(false);
    }
  }
  return (
    <div className="daily-quiz">
      <p className="quiz-date">
        {new Date(`${quiz.quizDate}T00:00:00Z`).toLocaleDateString(
          "en-IN",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          },
        )}{" "}
        · 5 questions
      </p>
      <h2>{quiz.title}</h2>
      <p>
        One mark per correct answer. No negative marking. You can skip
        questions; answers and explanations appear after submission.
      </p>
      {result ? (
        <div
          ref={resultRef}
          tabIndex={-1}
          className="quiz-result"
          aria-label="Quiz results"
        >
          <h3>Your score: {result.correct} / 5</h3>
          <div className="quiz-stats">
            <span>
              Correct <b>{result.correct}</b>
            </span>
            <span>
              Incorrect <b>{result.incorrect}</b>
            </span>
            <span>
              Skipped <b>{result.skipped}</b>
            </span>
            <span>
              Accuracy <b>{result.accuracy}%</b>
            </span>
          </div>
          {result.questions.map((q, i) => (
            <section className="quiz-question" key={i}>
              <h3>
                {i + 1}. {q.text}
              </h3>
              <p
                className={
                  q.selected === q.correct ? "quiz-correct" : "quiz-incorrect"
                }
              >
                {q.selected === null
                  ? "Skipped"
                  : q.selected === q.correct
                    ? "Correct"
                    : "Incorrect"}{" "}
                · Your answer:{" "}
                {q.selected === null
                  ? "Not attempted"
                  : `${"ABCD"[q.selected]}. ${q.options[q.selected]}`}
              </p>
              <p>
                <strong>
                  Correct answer: {"ABCD"[q.correct]}. {q.options[q.correct]}
                </strong>
              </p>
              <p className="quiz-explanation">{q.explanation}</p>
            </section>
          ))}
          <a className="quiz-button" href={`/api/quiz/${quiz.id}/pdf`}>
            Download questions, answers & explanations (PDF)
          </a>
          <button
            className="quiz-button quiz-secondary"
            onClick={() => {
              setAnswers(Array(5).fill(null));
              setResult(null);
            }}
          >
            Practise again
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <p className="quiz-progress" aria-live="polite">
            {answers.filter((a) => a !== null).length} of 5 answered
          </p>
          {quiz.questions.map((q, i) => (
            <fieldset className="quiz-question" key={i} disabled={pending}>
              <legend>
                {i + 1}. {q.text}
              </legend>
              {q.options.map((option, j) => (
                <label
                  className={`quiz-option ${answers[i] === j ? "is-selected" : ""}`}
                  key={j}
                >
                  <input
                    type="radio"
                    name={`question-${i}`}
                    checked={answers[i] === j}
                    onChange={() =>
                      setAnswers((prev) =>
                        prev.map((a, k) => (k === i ? j : a)),
                      )
                    }
                  />
                  <span>
                    <b>{"ABCD"[j]}.</b> {option}
                  </span>
                </label>
              ))}
              {answers[i] !== null && (
                <button
                  className="quiz-clear"
                  type="button"
                  onClick={() =>
                    setAnswers((prev) =>
                      prev.map((a, k) => (k === i ? null : a)),
                    )
                  }
                >
                  Clear answer
                </button>
              )}
            </fieldset>
          ))}
          {error && <p role="alert">{error}</p>}
          <button className="quiz-button" disabled={pending}>
            {pending ? "Checking answers…" : "Submit & view answers"}
          </button>
        </form>
      )}
    </div>
  );
}
