export const adminNav = [
  {
    label: "Overview",
    items: [{ href: "/admin", icon: "fas fa-gauge-high", label: "Dashboard" }],
  },
  {
    label: "Leads",
    items: [
      { href: "/admin/enquiries", icon: "fas fa-inbox", label: "Enquiries" },
      {
        href: "/admin/registrations",
        icon: "fas fa-clipboard-check",
        label: "Test Series Registrations",
      },
    ],
  },
  {
    label: "Website content",
    items: [
      { href: "/admin/quizzes", icon: "fas fa-list-check", label: "Daily Quiz" },
      { href: "/admin/courses", icon: "fas fa-graduation-cap", label: "Courses" },
      { href: "/admin/course-plans", icon: "fas fa-indian-rupee-sign", label: "Course Plans & Fees" },
      { href: "/admin/testimonials", icon: "fas fa-quote-left", label: "Testimonials" },
      { href: "/admin/batches", icon: "fas fa-calendar-days", label: "Batches" },
      { href: "/admin/banners", icon: "fas fa-images", label: "Banners" },
      { href: "/admin/selections", icon: "fas fa-trophy", label: "Selections" },
      { href: "/admin/study-materials", icon: "fas fa-book-open", label: "Study Material" },
    ],
  },
  {
    label: "Access",
    items: [{ href: "/admin/users", icon: "fas fa-user-shield", label: "Admin Users" }],
  },
];
