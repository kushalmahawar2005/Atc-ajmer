CREATE TABLE "daily_quizzes" (
	"id" serial PRIMARY KEY NOT NULL,
	"quiz_date" varchar(10) NOT NULL,
	"title" varchar(200) NOT NULL,
	"questions" jsonb NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "daily_quizzes_quiz_date_unique" UNIQUE("quiz_date")
);
