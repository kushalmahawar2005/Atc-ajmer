/**
 * The three offline test series, kept isolated from each other: each exam has
 * its own banner copy, batch modes and registration records.
 */
export type ExamKey = "ras" | "ias" | "psi";

export type ExamFeature = { icon: string; label: string; wide?: boolean };

/** A separately registered stage of one exam, e.g. RAS Prelims and RAS Mains. */
export type ExamTrack = { key: string; label: string; features: ExamFeature[] };

export type ExamSeries = {
  key: ExamKey;
  label: string;
  title: string;
  year?: string;
  subtitle: string;
  features: ExamFeature[];
  tracks?: ExamTrack[];
  centres: string[];
  /** Course page opened by the popup's "Know More" button. */
  knowMoreHref?: string;
  availableSoon?: boolean;
};

const tests = (count: number): ExamFeature => ({ icon: "fas fa-file-alt", label: `${count} Tests` });
const pdfSolutions: ExamFeature = { icon: "fas fa-file-pdf", label: "PDF Solutions" };
const realEnvironment: ExamFeature = {
  icon: "fas fa-chalkboard-teacher",
  label: "Real Examination Environment",
  wide: true,
};

const answerKeyPdf: ExamFeature = { icon: "fas fa-file-pdf", label: "Answer Key + PDF" };
const upscEnvironment: ExamFeature = {
  icon: "fas fa-chalkboard-teacher",
  label: "UPSC Pattern Environment",
  wide: true,
};

/** Batch modes offered for every exam; shown in the popup form as "Batch Mode". */
const BATCH_MODES = ["Offline", "Online"];

export const examSeries: Record<ExamKey, ExamSeries> = {
  ras: {
    key: "ras",
    label: "RAS",
    title: "RAS Exam",
    year: "2026",
    subtitle: "Offline Registration",
    features: [],
    tracks: [
      { key: "prelims", label: "Prelims", features: [tests(18), pdfSolutions, realEnvironment] },
      { key: "mains", label: "Mains", features: [tests(16), pdfSolutions, realEnvironment] },
    ],
    centres: BATCH_MODES,
    knowMoreHref: "/courses/ras-foundation",
  },
  ias: {
    key: "ias",
    label: "IAS",
    title: "IAS Exam",
    year: "2026",
    subtitle: "Offline Registration",
    features: [],
    tracks: [
      { key: "prelims", label: "Prelims", features: [tests(60), answerKeyPdf, upscEnvironment] },
      { key: "mains", label: "Mains", features: [tests(24), answerKeyPdf, upscEnvironment] },
    ],
    centres: BATCH_MODES,
    knowMoreHref: "/courses/ias-foundation",
  },
  psi: {
    key: "psi",
    label: "PSI",
    title: "Rajasthan PSI",
    subtitle: "Available Soon",
    features: [],
    centres: [],
    availableSoon: true,
  },
};

export const examOrder: ExamKey[] = ["ras", "ias", "psi"];

export function isExamKey(value: string): value is ExamKey {
  return value === "ras" || value === "ias" || value === "psi";
}
