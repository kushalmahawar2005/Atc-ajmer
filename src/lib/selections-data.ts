/**
 * Toppers gallery data for /about/selections — mirrors the `selections`
 * table in src/db/schema.ts so it can be swapped for a query later.
 */
export type Topper = {
  frame: string;
  photo: string | null;
  initials: string | null;
  name: string;
  rank: string | null;
};

export type ExamGroup = {
  id: string;
  badge: string | null;
  title: string;
  subtitle: string | null;
  toppers: Topper[];
};

export const examGroups: ExamGroup[] = [
  {
    id: "ras-2023",
    badge: "State Services",
    title: "RAS 2023",
    subtitle: "5 Selections",
    toppers: [
      {
        frame: "",
        photo: "/images/selections/20260925_a02c28eb9b71eb31.jpg",
        initials: null,
        name: "Vinayak",
        rank: "Rank 3 (DC)",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_53b37b12a9452571.jpg",
        initials: null,
        name: "Mayank",
        rank: "Rank 47 (SC)",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_9af85bab51d5a3dc.jpg",
        initials: null,
        name: "Gaurav",
        rank: "Rank 287",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_69980f4e8e97b0c5.jpg",
        initials: null,
        name: "Vishram",
        rank: "Rank 328",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_602c688da13f0181.jpg",
        initials: null,
        name: "Payal",
        rank: "Rank 542",
      },
    ],
  },
  {
    id: "ras-2021",
    badge: "State Services",
    title: "RAS 2021",
    subtitle: "7 Selections",
    toppers: [
      {
        frame: "",
        photo: "/images/selections/20260925_9bcc9a1f784cd9d7.jpg",
        initials: null,
        name: "Harshita",
        rank: "Rank 5 (LV)",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_807d25c6bd8ce897.jpg",
        initials: null,
        name: "Payal",
        rank: "Rank 18 (SCwe)",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_83135909fa1af767.jpg",
        initials: null,
        name: "Ravindra",
        rank: "Rank 84 (ST)",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_af2e6ec1917c8332.jpg",
        initials: null,
        name: "Vikrant",
        rank: "Rank 95 (SC)",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_ba05e55e0429780c.jpg",
        initials: null,
        name: "Ramprasad",
        rank: "Rank 123",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_02c4248d28f78d53.jpg",
        initials: null,
        name: "Monika",
        rank: "Rank 174",
      },
      {
        frame: "",
        photo: "/images/selections/20260925_e7e1f14319968359.jpg",
        initials: null,
        name: "Dharmendra",
        rank: "Rank 325",
      },
    ],
  },
];
