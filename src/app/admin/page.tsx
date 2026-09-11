import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq, sql } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import { db } from "@/db";
import {
  batches,
  banners,
  courses,
  enquiries,
  quizAttempts,
  selections,
  studyMaterials,
} from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";

export const metadata: Metadata = { title: "Dashboard" };
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await requireAdmin();

  const [
    enquiryCount,
    newEnquiryCount,
    quizLeadCount,
    newQuizLeadCount,
    courseCount,
    batchCount,
    bannerCount,
    selectionCount,
    materialCount,
    latest,
  ] = await Promise.all([
    db.select({ n: sql<number>`count(*)::int` }).from(enquiries),
    db
      .select({ n: sql<number>`count(*)::int` })
      .from(enquiries)
      .where(eq(enquiries.handled, false)),
    db.select({ n: sql<number>`count(*)::int` }).from(quizAttempts),
    db
      .select({ n: sql<number>`count(*)::int` })
      .from(quizAttempts)
      .where(eq(quizAttempts.handled, false)),
    db.select({ n: sql<number>`count(*)::int` }).from(courses),
    db.select({ n: sql<number>`count(*)::int` }).from(batches),
    db.select({ n: sql<number>`count(*)::int` }).from(banners),
    db.select({ n: sql<number>`count(*)::int` }).from(selections),
    db.select({ n: sql<number>`count(*)::int` }).from(studyMaterials),
    db.select().from(enquiries).orderBy(desc(enquiries.createdAt)).limit(8),
  ]);

  const stats = [
    {
      href: "/admin/enquiries",
      icon: "fas fa-inbox",
      num: enquiryCount[0].n,
      label: `Enquiries (${newEnquiryCount[0].n} unhandled)`,
    },
    {
      href: "/admin/quiz-attempts",
      icon: "fas fa-user-check",
      num: quizLeadCount[0].n,
      label: `Quiz leads (${newQuizLeadCount[0].n} unhandled)`,
    },
    { href: "/admin/courses", icon: "fas fa-graduation-cap", num: courseCount[0].n, label: "Courses" },
    { href: "/admin/batches", icon: "fas fa-calendar-days", num: batchCount[0].n, label: "Batches" },
    { href: "/admin/banners", icon: "fas fa-images", num: bannerCount[0].n, label: "Banners" },
    { href: "/admin/selections", icon: "fas fa-trophy", num: selectionCount[0].n, label: "Selections" },
    {
      href: "/admin/study-materials",
      icon: "fas fa-book-open",
      num: materialCount[0].n,
      label: "Study material",
    },
  ];

  return (
    <AdminShell
      session={session}
      title={`Welcome back, ${session.name.split(" ")[0]}`}
      subtitle="Everything the website reads from the database, in one place."
    >
      <div className="adm-stats">
        {stats.map((stat) => (
          <Link href={stat.href} className="adm-stat" key={stat.href}>
            <div className="adm-stat-icon">
              <i className={stat.icon} aria-hidden="true" />
            </div>
            <div>
              <div className="adm-stat-num">{stat.num}</div>
              <div className="adm-stat-label">{stat.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">Latest enquiries</div>
          <Link href="/admin/enquiries" className="adm-btn adm-btn-ghost adm-btn-sm">
            View all
          </Link>
        </div>

        {latest.length === 0 ? (
          <div className="adm-empty">No enquiries yet.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Course</th>
                  <th>Received</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {latest.map((row) => (
                  <tr key={row.id}>
                    <td>
                      {row.fullName}
                      <div className="adm-muted">{row.email}</div>
                    </td>
                    <td className="adm-nowrap">{row.phone}</td>
                    <td>{row.course ?? "—"}</td>
                    <td className="adm-nowrap adm-muted">
                      {row.createdAt.toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td>
                      <span className={`adm-badge ${row.handled ? "adm-badge-off" : "adm-badge-new"}`}>
                        {row.handled ? "Handled" : "New"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
