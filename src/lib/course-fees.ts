// Confirmed course fees supplied by ATC on 14 September 2026.
// Only used as a fallback when the database cannot be reached.
// Keep in sync with src/db/seed-plans.ts.
export const confirmedCoursePlans = [
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
