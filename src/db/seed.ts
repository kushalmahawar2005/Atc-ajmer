import { db, pool } from "./index";
import { batches, courses } from "./schema";

const courseRows = [
  {
    slug: "ias-foundation",
    title: "IAS Foundation Course",
    summary:
      "Prepares you for the UPSC civil services exam across all stages — Prelims, Mains and Interview — with regular subjective and objective tests and extensive CSAT guidance.",
    category: "foundation",
    sortOrder: 1,
  },
  {
    slug: "ras-foundation",
    title: "RAS Foundation Course",
    summary:
      "Starts from the basics and covers the entire RAS syllabus, preparing you for RAS Prelims, Mains and Interview.",
    category: "foundation",
    sortOrder: 2,
  },
  {
    slug: "rajasthan-psi",
    title: "Rajasthan PSI Course",
    summary:
      "Classroom and online course for complete Rajasthan PSI preparation, including an objective test series with the latest current affairs.",
    category: "foundation",
    sortOrder: 3,
  },
  {
    slug: "ias-ras-integrated",
    title: "IAS RAS 3 Years Integrated Course",
    summary:
      "Three-year integrated course for UPSC and RPSC exam preparation alongside graduation.",
    category: "integrated",
    sortOrder: 4,
  },
  {
    slug: "test-series",
    title: "Test Series Programs",
    summary:
      "Subjective and objective test series programs for IAS Prelims and IAS Mains preparation.",
    category: "test-series",
    sortOrder: 5,
  },
  {
    slug: "ias-ras-interview",
    title: "Interview Guidance Program",
    summary:
      "Exclusive interview guidance and mock interview programs for the IAS, RAS and PSI exams.",
    category: "interview",
    sortOrder: 6,
  },
];

const batchRows = [
  { name: "RAS Foundation", startsOn: "11 August 2026", sortOrder: 1 },
  { name: "RAS Pre / PSI", startsOn: "14 July 2026", sortOrder: 2 },
  { name: "IAS & RAS Integrated Batch", startsOn: "16 June 2026", sortOrder: 3 },
  { name: "IAS Foundation Batch", startsOn: "16 June 2026", sortOrder: 4 },
];

async function main() {
  await db.insert(courses).values(courseRows).onConflictDoNothing({ target: courses.slug });
  await db.insert(batches).values(batchRows);
  console.log(`Seeded ${courseRows.length} courses and ${batchRows.length} batches.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
