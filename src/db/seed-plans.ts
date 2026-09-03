import { eq } from "drizzle-orm";
import { db, pool } from "./index";
import { coursePlans } from "./schema";

/**
 * Seeds the priced plans that used to be hardcoded in the course pages.
 * Safe to re-run: it replaces the rows for every slug it knows about.
 */
const rows = [
  {
    "courseSlug": "ias-foundation",
    "groupLabel": "Offline / Classroom Courses for IAS Foundation",
    "title": "IAS Foundation Course",
    "description": "Exclusive Classroom batch for the preparation of IAS Prelims + Mains",
    "fees": 124000,
    "oneTimePayment": 116000,
    "feeNote": "GST Included in the Fees",
    "mode": "Offline / Classroom",
    "sortOrder": 1
  },
  {
    "courseSlug": "ias-foundation",
    "groupLabel": "Offline / Classroom Courses for IAS Foundation",
    "title": "IAS / RAS Integrated Course",
    "description": "3 Years Integrated batch for the preparation of IAS and RAS Exams",
    "fees": 152000,
    "oneTimePayment": 140000,
    "feeNote": "GST Included in the Fees",
    "mode": "Offline / Classroom",
    "sortOrder": 2
  },
  {
    "courseSlug": "ias-foundation",
    "groupLabel": "Online Live from Classroom Course for IAS Foundation",
    "title": "IAS Foundation - Online",
    "description": "Online Live from Classroom batch for the Preparation of IAS Exam",
    "fees": 73000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - Live from Classroom",
    "sortOrder": 3
  },
  {
    "courseSlug": "ias-foundation",
    "groupLabel": "Online Live from Classroom Course for IAS Foundation",
    "title": "IAS-RAS Integrated - Online",
    "description": "3 Years Online live from classroom batch for the Preparation of IAS and RAS exams",
    "fees": 82600,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - Live from Classroom",
    "sortOrder": 4
  },
  {
    "courseSlug": "ias-ras-integrated",
    "groupLabel": "Offline and Online IAS / RAS 3 Years Integrated Batches",
    "title": "IAS / RAS Integrated Course",
    "description": "3 Years Integrated Offline / Classroom batch for the preparation of IAS and RAS Exams",
    "fees": 152000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Offline / Classroom",
    "sortOrder": 1
  },
  {
    "courseSlug": "ias-ras-integrated",
    "groupLabel": "Offline and Online IAS / RAS 3 Years Integrated Batches",
    "title": "IAS-RAS Integrated - Online",
    "description": "3 Years Online live from classroom batch for the Preparation of IAS and RAS exams",
    "fees": 82600,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - Live from Classroom",
    "sortOrder": 2
  },
  {
    "courseSlug": "ias-test-series",
    "groupLabel": "IAS Prelims / Mains  Offline and Online test Series",
    "title": "IAS Mains Offline Test Series",
    "description": "Test Series will be available soon",
    "fees": null,
    "oneTimePayment": null,
    "feeNote": null,
    "mode": null,
    "sortOrder": 1
  },
  {
    "courseSlug": "ias-test-series",
    "groupLabel": "IAS Prelims / Mains  Offline and Online test Series",
    "title": "IAS Mains Online Test Series",
    "description": "Test Series will be available soon",
    "fees": null,
    "oneTimePayment": null,
    "feeNote": null,
    "mode": null,
    "sortOrder": 2
  },
  {
    "courseSlug": "rajasthan-psi",
    "groupLabel": "Offline / Classroom Courses for Rajasthan PSI Exam",
    "title": "Rajasthan PSI Course",
    "description": "Exclusive Classroom batch for the preparation of Rajasthan Police Sub Inspector Exam (PSI)",
    "fees": 42000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the fees",
    "mode": "Offline / Classroom",
    "sortOrder": 1
  },
  {
    "courseSlug": "rajasthan-psi",
    "groupLabel": "Offline / Classroom Courses for Rajasthan PSI Exam",
    "title": "RAS Prelims Live Course",
    "description": "Exclusive live from Classroom batch for the preparation of RAS Prelims Exam",
    "fees": 26000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the fees",
    "mode": "Live from Classroom",
    "sortOrder": 2
  },
  {
    "courseSlug": "rajasthan-psi",
    "groupLabel": "Online Course for Rajasthan PSI Exam",
    "title": "PSI - Recorded Batch",
    "description": "Latest Recorded batch on our App for Rajasthan PSI",
    "fees": 14000,
    "oneTimePayment": null,
    "feeNote": "GST Not Included in the Fees",
    "mode": "Online - Recorded",
    "sortOrder": 3
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Offline / Classroom Courses for RAS Foundation",
    "title": "RAS Foundation Course",
    "description": "Exclusive Classroom batch for the preparation of RAS Prelims + Mains + Interview",
    "fees": 112000,
    "oneTimePayment": 104000,
    "feeNote": "GST Included in the fees",
    "mode": "Offline / Classroom",
    "sortOrder": 1
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Offline / Classroom Courses for RAS Foundation",
    "title": "IAS / RAS Integrated Course",
    "description": "3 Years Integrated batch for the preparation of IAS and RAS Exams",
    "fees": 152000,
    "oneTimePayment": 140000,
    "feeNote": "GST Included in the Fees",
    "mode": "Offline / Classroom",
    "sortOrder": 2
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Online Live from Classroom Course for RAS Foundation",
    "title": "RAS Foundation - Online",
    "description": "Online Live from Classroom batch for the Preparation of RAS Exam",
    "fees": 62000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - Live from Classroom",
    "sortOrder": 3
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Online Live from Classroom Course for RAS Foundation",
    "title": "IAS-RAS Integrated - Online",
    "description": "3 Years Online live from classroom batch for the Preparation of IAS and RAS exams",
    "fees": 82600,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - Live from Classroom",
    "sortOrder": 4
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Online Live from Classroom Course for RAS Foundation",
    "title": "RAS Foundation Recorded",
    "description": "RAS Foundation Recorded Calsses.",
    "fees": 26000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - Recorded Classes",
    "sortOrder": 5
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Online Live from Classroom Course for RAS Foundation",
    "title": "RAS Prelims Live from Clssroom",
    "description": "RAS Prelims live from classroom batch",
    "fees": 26000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - live Classes",
    "sortOrder": 6
  }
];

async function main() {
  const slugs = [...new Set(rows.map((row) => row.courseSlug))];
  for (const slug of slugs) {
    await db.delete(coursePlans).where(eq(coursePlans.courseSlug, slug));
  }
  await db.insert(coursePlans).values(rows);
  console.log(`Seeded ${rows.length} course plans across ${slugs.length} pages.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
