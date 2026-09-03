CREATE TABLE "translations" (
	"id" serial PRIMARY KEY NOT NULL,
	"lang" varchar(8) NOT NULL,
	"source_hash" varchar(64) NOT NULL,
	"source_text" text NOT NULL,
	"translated_text" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "translations_lang_hash_idx" ON "translations" USING btree ("lang","source_hash");