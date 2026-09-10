# Daily quiz setup

The homepage and Quick Links lead to `/daily-quiz`. Admins manage entries at `/admin/quizzes`.

1. Configure the existing PostgreSQL connection in `.env.local`.
2. Run `npm run db:migrate` to create `daily_quizzes`.
3. Open **Admin → Daily Quiz → Add a quiz**. Enter a date, title, five questions, four distinct options per question, one correct answer and an explanation.
4. Save with Publish unchecked for a draft; check Publish when ready. Future dates become available on that date in Asia/Kolkata. The student page shows the latest published quiz whose date is not in the future.
5. Attempt and submit the quiz. Scoring is one mark per correct answer, no negative marking; skipped questions score zero. Results include correct/incorrect/skipped counts, accuracy among attempted questions and per-question explanations.
6. The results page downloads a PDF containing all questions, options, correct answers and explanations. Bundled Noto Sans Devanagari supports Hindi and English. Include `public/fonts` when deploying (the existing bundle script copies public assets).

Answers are omitted from the initial student payload. Submissions are graded on the server; edits invalidate attempts already open in a browser. Draft and future quizzes cannot be graded or downloaded publicly. Published answer PDFs are public revision material.

No sample quiz is automatically published. The team must enter real questions.

Local verification completed on 10 September 2026 after starting Docker: migration applied; admin login and quiz creation, student submission and scoring, invalid/stale submissions, draft/future protection, and the Hindi/English PDF endpoint passed. Temporary test quizzes and the test admin account were removed after verification. Production still needs its own migration during deployment.
