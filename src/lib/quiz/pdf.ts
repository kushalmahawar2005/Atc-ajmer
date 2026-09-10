import PDFDocument from "pdfkit";
import path from "node:path";
import type { Question } from "./validation";
export async function quizPdf(quiz: {
  title: string;
  quizDate: string;
  questions: Question[];
}) {
  const fontPath = path.join(
    process.cwd(),
    "public/fonts/NotoSansDevanagari.ttf",
  );
  const doc = new PDFDocument({
    size: "A4",
    margin: 48,
    font: fontPath,
    info: { Title: `${quiz.title} — ${quiz.quizDate}`, Author: "ATC Ajmer" },
  });
  const chunks: Buffer[] = [];
  const complete = new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });
  doc.fontSize(11).fillColor("#00374c").text("ATC AJMER • DAILY QUIZ");
  doc.moveDown().fontSize(20).text(quiz.title);
  doc
    .moveDown(0.4)
    .fontSize(11)
    .fillColor("#475569")
    .text(
      `${quiz.quizDate} | 5 questions | Questions, answers and explanations`,
    );
  const body = (value: string) => {
    doc.fontSize(11).fillColor("#172b40").text(value, { lineGap: 4 });
    doc.moveDown(0.5);
  };
  doc.moveDown();
  quiz.questions.forEach((q, i) => {
    // Start a question on a fresh page when the heading and first option won't fit.
    if (doc.y > doc.page.height - 190) doc.addPage();
    doc
      .fontSize(13)
      .fillColor("#00374c")
      .text(`${i + 1}. ${q.text}`, { lineGap: 4 });
    doc.moveDown(0.5);
    q.options.forEach((option, j) => body(`${"ABCD"[j]}. ${option}`));
    doc.moveDown();
  });
  doc.addPage();
  doc.fontSize(18).fillColor("#00374c").text("Answer key & explanations");
  doc.moveDown();
  quiz.questions.forEach((q, i) => {
    if (doc.y > doc.page.height - 170) doc.addPage();
    doc
      .fontSize(13)
      .fillColor("#00374c")
      .text(`${i + 1}. Correct answer: ${"ABCD"[q.correct]}`);
    doc.moveDown(0.4);
    body(q.options[q.correct]);
    body(q.explanation);
    doc.moveDown();
  });
  doc.end();
  return complete;
}
