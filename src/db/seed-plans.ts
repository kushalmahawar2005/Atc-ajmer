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
    "title": "IAS Foundation Course (GS)",
    "description": "Exclusive Classroom batch for the preparation of IAS Prelims + Mains",
    "fees": 145000,
    "oneTimePayment": 130000,
    "feeNote": "GST Included in the Fees · Duration: 18 months",
    "mode": "Offline / Classroom",
    "sortOrder": 1
  },
  {
    "courseSlug": "ias-foundation",
    "groupLabel": "Offline / Classroom Courses for IAS Foundation",
    "title": "Optional Subject - PSIR",
    "description": "Optional subject batch for PSIR (Political Science & International Relations) for IAS Mains",
    "fees": 45000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees · Duration: 15 months",
    "mode": "Offline / Classroom",
    "sortOrder": 2
  },
  {
    "courseSlug": "ias-foundation",
    "groupLabel": "Online Live from Classroom Course for IAS Foundation",
    "title": "IAS Foundation - Online (GS)",
    "description": "Online Live from Classroom batch for the Preparation of IAS Exam",
    "fees": 125000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees · Duration: 18 months",
    "mode": "Online - Live from Classroom",
    "sortOrder": 3
  },
  {
    "courseSlug": "ias-foundation",
    "groupLabel": "Online Live from Classroom Course for IAS Foundation",
    "title": "Optional Subject - PSIR - Online",
    "description": "Online Live from Classroom optional subject batch for PSIR (Political Science & International Relations)",
    "fees": 45000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees · Duration: 15 months",
    "mode": "Online - Live from Classroom",
    "sortOrder": 4
  },
  {
    "courseSlug": "ias-ras-integrated",
    "groupLabel": "Offline and Online IAS / RAS 3 Years Integrated Batches",
    "title": "IAS / RAS Integrated Course",
    "description": "3 Years Integrated Offline / Classroom batch for the preparation of IAS and RAS Exams",
    "fees": 210000,
    "oneTimePayment": 185000,
    "feeNote": "GST Included in the Fees · Duration: 3 years",
    "mode": "Offline / Classroom",
    "sortOrder": 1
  },
  {
    "courseSlug": "ias-ras-integrated",
    "groupLabel": "Offline and Online IAS / RAS 3 Years Integrated Batches",
    "title": "IAS-RAS Integrated - Online",
    "description": "3 Years Online live from classroom batch for the Preparation of IAS and RAS exams",
    "fees": 150000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees · Duration: 3 years",
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
    "fees": 24000,
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
    "title": "Rajasthan PSI Course - Online",
    "description": "Online batch for the preparation of Rajasthan Police Sub Inspector Exam (PSI)",
    "fees": 16000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the fees",
    "mode": "Online",
    "sortOrder": 3
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Offline / Classroom Courses for RAS Foundation",
    "title": "RAS Foundation Course",
    "description": "Exclusive Classroom batch for the preparation of RAS Prelims + Mains + Interview",
    "fees": 95000,
    "oneTimePayment": 85000,
    "feeNote": "GST Included in the Fees · Duration: 18 months",
    "mode": "Offline / Classroom",
    "sortOrder": 1
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
    "sortOrder": 2
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
    "sortOrder": 3
  },
  {
    "courseSlug": "ras-foundation",
    "groupLabel": "Online Live from Classroom Course for RAS Foundation",
    "title": "RAS Prelims Live from Classroom",
    "description": "RAS Prelims live from classroom batch",
    "fees": 26000,
    "oneTimePayment": null,
    "feeNote": "GST Included in the Fees",
    "mode": "Online - live Classes",
    "sortOrder": 4
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
