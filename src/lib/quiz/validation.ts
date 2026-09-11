export type Question = {
  text: string;
  options: string[];
  correct: number;
  explanation: string;
};
export type PublicQuestion = Pick<Question, "text" | "options">;
export function indiaDate(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
export function validDate(value: string) {
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value
  );
}
export function validateQuestions(value: unknown): value is Question[] {
  return (
    Array.isArray(value) &&
    value.length === 5 &&
    value.every(
      (q) =>
        q &&
        typeof q.text === "string" &&
        q.text.trim().length > 0 &&
        q.text.length <= 2000 &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        q.options.every(
          (o: unknown) =>
            typeof o === "string" && o.trim().length > 0 && o.length <= 500,
        ) &&
        new Set(q.options.map((o: string) => o.trim())).size === 4 &&
        Number.isInteger(q.correct) &&
        q.correct >= 0 &&
        q.correct < 4 &&
        typeof q.explanation === "string" &&
        q.explanation.trim().length > 0 &&
        q.explanation.length <= 4000,
    )
  );
}
export function grade(questions: Question[], answers: unknown) {
  if (
    !Array.isArray(answers) ||
    answers.length !== 5 ||
    !answers.every(
      (a) => a === null || (Number.isInteger(a) && a >= 0 && a < 4),
    )
  )
    throw new Error("Choose valid answers for all five questions.");
  const correct = questions.filter((q, i) => q.correct === answers[i]).length;
  const attempted = answers.filter((a) => a !== null).length;
  return {
    correct,
    attempted,
    incorrect: attempted - correct,
    skipped: 5 - attempted,
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0,
    questions: questions.map((q, i) => ({
      ...q,
      selected: answers[i] as number | null,
    })),
  };
}

export type Contact = { name: string; phone: string; email: string | null };

/**
 * Details collected alongside a quiz submission. Deliberately forgiving about
 * phone formatting — people type +91, spaces and dashes — but it insists on
 * enough digits to be callable, since that is the whole point of the capture.
 */
export function validateContact(value: unknown): Contact | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  if (name.length < 2 || name.length > 160) return null;

  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15 || phone.length > 20) return null;

  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  if (email && (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))) return null;

  return { name, phone, email: email || null };
}
