CREATE TABLE "course_plans" (
	"id" serial PRIMARY KEY NOT NULL,
	"course_slug" varchar(120) NOT NULL,
	"group_label" varchar(160),
	"title" varchar(200) NOT NULL,
	"description" text,
	"fees" integer,
	"one_time_payment" integer,
	"fee_note" varchar(160) DEFAULT 'GST Included in the Fees',
	"mode" varchar(120),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam_registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"exam" varchar(20) NOT NULL,
	"name" varchar(160) NOT NULL,
	"father_name" varchar(160) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"place" varchar(160) NOT NULL,
	"centre" varchar(120),
	"handled" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"kind" varchar(20) NOT NULL,
	"name" varchar(160) NOT NULL,
	"role" varchar(160),
	"quote" text NOT NULL,
	"photo_url" varchar(300),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
ALTER TABLE "enquiries" ADD COLUMN "qualified" boolean DEFAULT false NOT NULL;--> statement-breakpoint
CREATE INDEX "course_plans_slug_idx" ON "course_plans" USING btree ("course_slug");--> statement-breakpoint
CREATE INDEX "exam_registrations_exam_idx" ON "exam_registrations" USING btree ("exam","created_at");--> statement-breakpoint
CREATE INDEX "testimonials_kind_idx" ON "testimonials" USING btree ("kind","sort_order");