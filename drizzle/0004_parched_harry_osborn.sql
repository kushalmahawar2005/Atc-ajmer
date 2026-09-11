CREATE TABLE "quiz_attempts" (
	"id" serial PRIMARY KEY NOT NULL,
	"quiz_id" integer NOT NULL,
	"quiz_date" varchar(10) NOT NULL,
	"quiz_title" varchar(200) NOT NULL,
	"name" varchar(160) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(200),
	"correct" integer NOT NULL,
	"attempted" integer NOT NULL,
	"handled" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "quiz_attempts_created_at_idx" ON "quiz_attempts" USING btree ("created_at");