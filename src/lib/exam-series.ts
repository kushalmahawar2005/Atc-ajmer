/**
 * The three offline test series, kept isolated from each other: each exam has
 * its own banner copy, centres and registration records. ATC runs a single
 * centre — Ajmer — so every offline series is held there.
 */
export type ExamKey = "ras" | "ias" | "psi";

export type ExamSeries = {
  key: ExamKey;
  label: string;
  title: string;
  year: string;
  subtitle: string;
  startsOn: string;
  features: { icon: string; label: string; wide?: boolean }[];
  centres: string[];
};

export const examSeries: Record<ExamKey, ExamSeries> = {
  ras: {
    key: "ras",
    label: "RAS",
    title: "RAS Prelims",
    year: "2026",
    subtitle: "Offline Test Series",
    startsOn: "23 August 2026",
    features: [
      { icon: "fas fa-file-alt", label: "14 Tests" },
      { icon: "fas fa-trophy", label: "All India Ranking" },
      { icon: "fas fa-file-pdf", label: "PDF Solutions" },
      { icon: "fas fa-video", label: "Video Discussion" },
      { icon: "fas fa-chalkboard-teacher", label: "Real Examination Environment", wide: true },
    ],
    centres: ["Ajmer"],
  },
  ias: {
    key: "ias",
    label: "IAS",
    title: "IAS Prelims",
    year: "2026",
    subtitle: "Offline & Online Test Series",
    startsOn: "23 August 2026",
    features: [
      { icon: "fas fa-file-alt", label: "18 Tests" },
      { icon: "fas fa-trophy", label: "Merit List" },
      { icon: "fas fa-file-pdf", label: "Answer Key + PDF" },
      { icon: "fas fa-video", label: "Video Solutions" },
      { icon: "fas fa-chalkboard-teacher", label: "UPSC Pattern Environment", wide: true },
    ],
    centres: ["Ajmer", "Online"],
  },
  psi: {
    key: "psi",
    label: "PSI",
    title: "Rajasthan PSI",
    year: "2026",
    subtitle: "Offline Test Series",
    startsOn: "23 August 2026",
    features: [
      { icon: "fas fa-file-alt", label: "Objective Tests" },
      { icon: "fas fa-trophy", label: "All India Ranking" },
      { icon: "fas fa-file-pdf", label: "PDF Solutions" },
      { icon: "fas fa-newspaper", label: "Latest Current Affairs" },
      { icon: "fas fa-chalkboard-teacher", label: "Real Examination Environment", wide: true },
    ],
    centres: ["Ajmer"],
  },
};

export const examOrder: ExamKey[] = ["ras", "ias", "psi"];

export function isExamKey(value: string): value is ExamKey {
  return value === "ras" || value === "ias" || value === "psi";
}
