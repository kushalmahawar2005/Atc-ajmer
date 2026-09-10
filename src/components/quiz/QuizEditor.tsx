"use client";
import { useActionState } from "react";
import { saveQuiz } from "@/app/admin/quizzes/actions";
import type { Question } from "@/lib/quiz/validation";
export default function QuizEditor({
  quiz,
}: {
  quiz?: {
    id: number;
    title: string;
    quizDate: string;
    published: boolean;
    questions: Question[];
  };
}) {
  const [state, action, pending] = useActionState(saveQuiz, {});
  return (
    <form action={action} className="adm-form quiz-editor">
      <input type="hidden" name="id" value={quiz?.id ?? 0} />
      <label>
        Quiz title
        <input
          name="title"
          required
          maxLength={200}
          defaultValue={quiz?.title ?? "Daily Current Affairs Quiz"}
        />
      </label>
      <label>
        Date (India time)
        <input
          type="date"
          name="quizDate"
          required
          defaultValue={quiz?.quizDate}
        />
      </label>
      {Array.from({ length: 5 }, (_, i) => (
        <fieldset key={i}>
          <legend>Question {i + 1}</legend>
          <label>
            Question
            <textarea
              name={`q${i}`}
              required
              maxLength={2000}
              defaultValue={quiz?.questions[i]?.text}
            />
          </label>
          {Array.from({ length: 4 }, (_, j) => (
            <label key={j}>
              Option {"ABCD"[j]}
              <input
                name={`q${i}o${j}`}
                required
                maxLength={500}
                defaultValue={quiz?.questions[i]?.options[j]}
              />
            </label>
          ))}
          <label>
            Correct answer
            <select
              name={`q${i}correct`}
              required
              defaultValue={quiz?.questions[i]?.correct ?? ""}
            >
              <option value="" disabled>
                Select answer
              </option>
              {Array.from({ length: 4 }, (_, j) => (
                <option value={j} key={j}>
                  {"ABCD"[j]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Explanation
            <textarea
              name={`q${i}explanation`}
              required
              maxLength={4000}
              defaultValue={quiz?.questions[i]?.explanation}
            />
          </label>
        </fieldset>
      ))}
      <label>
        <input
          type="checkbox"
          name="published"
          defaultChecked={quiz?.published}
        />{" "}
        Publish (future dates stay hidden until that date)
      </label>
      <p role="status">{state.error || state.success}</p>
      <button className="adm-btn adm-btn-primary" disabled={pending}>
        {pending ? "Saving…" : "Save quiz"}
      </button>
    </form>
  );
}
