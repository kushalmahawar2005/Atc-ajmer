import {
  boolean,
  jsonb,
  index,
  uniqueIndex,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Cache of machine translations, keyed by a hash of the English source so the
 * same sentence is only ever paid for once across the whole site.
 */
export const translations = pgTable(
  "translations",
  {
    id: serial("id").primaryKey(),
    lang: varchar("lang", { length: 8 }).notNull(),
    sourceHash: varchar("source_hash", { length: 64 }).notNull(),
    sourceText: text("source_text").notNull(),
    translatedText: text("translated_text").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [uniqueIndex("translations_lang_hash_idx").on(t.lang, t.sourceHash)],
);

/** Admin panel accounts. Passwords are scrypt hashes, never plaintext. */
export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  name: varchar("name", { length: 160 }).notNull(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  role: varchar("role", { length: 30 }).default("editor").notNull(),
  active: boolean("active").default(true).notNull(),
  lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

/** Website enquiry form submissions (home page + contact page). */
export const enquiries = pgTable(
  "enquiries",
  {
    id: serial("id").primaryKey(),
    fullName: varchar("full_name", { length: 160 }).notNull(),
    email: varchar("email", { length: 200 }).notNull(),
    phone: varchar("phone", { length: 20 }).notNull(),
    course: varchar("course", { length: 120 }),
    message: text("message"),
    source: varchar("source", { length: 60 }).default("website").notNull(),
    handled: boolean("handled").default(false).notNull(),
    /** Marked by the team once the lead is worth following up. */
    qualified: boolean("qualified").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("enquiries_created_at_idx").on(t.createdAt)],
);

/** Courses shown in the Courses grid and on /courses/[slug]. */
export const courses = pgTable(
  "courses",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 120 }).notNull().unique(),
    title: varchar("title", { length: 200 }).notNull(),
    titleHi: varchar("title_hi", { length: 200 }),
    summary: text("summary"),
    summaryHi: text("summary_hi"),
    body: text("body"),
    imageUrl: varchar("image_url", { length: 300 }),
    category: varchar("category", { length: 60 }),
    sortOrder: integer("sort_order").default(0).notNull(),
    published: boolean("published").default(true).notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("courses_category_idx").on(t.category)],
);

/**
 * Priced plans shown on course and test-series pages (the red "boxbx" cards).
 * `courseSlug` matches a page route, so one table drives every course page.
 */
export const coursePlans = pgTable(
  "course_plans",
  {
    id: serial("id").primaryKey(),
    courseSlug: varchar("course_slug", { length: 120 }).notNull(),
    /** Groups plans under a heading, e.g. "Offline / Classroom" or "Online". */
    groupLabel: varchar("group_label", { length: 160 }),
    title: varchar("title", { length: 200 }).notNull(),
    description: text("description"),
    fees: integer("fees"),
    oneTimePayment: integer("one_time_payment"),
    feeNote: varchar("fee_note", { length: 160 }).default("GST Included in the Fees"),
    mode: varchar("mode", { length: 120 }),
    sortOrder: integer("sort_order").default(0).notNull(),
    active: boolean("active").default(true).notNull(),
  },
  (t) => [index("course_plans_slug_idx").on(t.courseSlug)],
);

/**
 * Registrations for the RAS/IAS/PSI offline test-series banner.
 * Each exam is isolated by `exam` so the three flows never mix.
 */
export const examRegistrations = pgTable(
  "exam_registrations",
  {
    id: serial("id").primaryKey(),
    exam: varchar("exam", { length: 20 }).notNull(),
    name: varchar("name", { length: 160 }).notNull(),
    fatherName: varchar("father_name", { length: 160 }).notNull(),
    phone: varchar("phone", { length: 20 }).notNull(),
    place: varchar("place", { length: 160 }).notNull(),
    centre: varchar("centre", { length: 120 }),
    handled: boolean("handled").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("exam_registrations_exam_idx").on(t.exam, t.createdAt)],
);

/** Testimonials, shown on the home page in two groups: faculty and students. */
export const testimonials = pgTable(
  "testimonials",
  {
    id: serial("id").primaryKey(),
    /** "faculty" or "student" — the two tabs the home page swaps between. */
    kind: varchar("kind", { length: 20 }).notNull(),
    name: varchar("name", { length: 160 }).notNull(),
    role: varchar("role", { length: 160 }),
    quote: text("quote").notNull(),
    photoUrl: varchar("photo_url", { length: 300 }),
    sortOrder: integer("sort_order").default(0).notNull(),
    active: boolean("active").default(true).notNull(),
  },
  (t) => [index("testimonials_kind_idx").on(t.kind, t.sortOrder)],
);

/** Home page hero/banner carousel slides. */
export const banners = pgTable("banners", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }),
  imageUrl: varchar("image_url", { length: 300 }).notNull(),
  linkUrl: varchar("link_url", { length: 300 }),
  sortOrder: integer("sort_order").default(0).notNull(),
  active: boolean("active").default(true).notNull(),
});

/** Batch start dates in the "Admissions Open" block. */
export const batches = pgTable("batches", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  startsOn: varchar("starts_on", { length: 60 }).notNull(),
  mode: varchar("mode", { length: 60 }),
  sortOrder: integer("sort_order").default(0).notNull(),
  active: boolean("active").default(true).notNull(),
});

/** Past selections / toppers list. */
export const selections = pgTable(
  "selections",
  {
    id: serial("id").primaryKey(),
    studentName: varchar("student_name", { length: 160 }).notNull(),
    rank: integer("rank"),
    exam: varchar("exam", { length: 60 }).notNull(),
    year: integer("year").notNull(),
    photoUrl: varchar("photo_url", { length: 300 }),
  },
  (t) => [index("selections_exam_year_idx").on(t.exam, t.year)],
);

/** Downloadable study material (NCERT PDFs, Sujas, magazines, surveys). */
export const studyMaterials = pgTable(
  "study_materials",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 160 }).notNull().unique(),
    title: varchar("title", { length: 250 }).notNull(),
    category: varchar("category", { length: 80 }).notNull(),
    fileUrl: varchar("file_url", { length: 400 }),
    language: varchar("language", { length: 20 }).default("en").notNull(),
    published: boolean("published").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("study_materials_category_idx").on(t.category)],
);

/** One five-question quiz per Indian calendar date. Answers stay server-side. */
export const dailyQuizzes = pgTable('daily_quizzes', {
  id: serial('id').primaryKey(),
  quizDate: varchar('quiz_date', { length: 10 }).notNull().unique(),
  title: varchar('title', { length: 200 }).notNull(),
  questions: jsonb('questions').$type<import('../lib/quiz/validation').Question[]>().notNull(),
  published: boolean('published').default(false).notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
