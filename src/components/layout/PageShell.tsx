import { Fragment } from "react";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageSidebar from "./PageSidebar";
import ExamSeriesBanner from "./RasBanner";

export type Crumb = { label: string; href?: string };

/**
 * Two-column inner-page layout: breadcrumb + title + content on the left,
 * the shared sidebar on the right.
 */
export default function PageShell({
  breadcrumb,
  title,
  subtitle,
  children,
}: {
  breadcrumb: Crumb[];
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-wrapper">
      <BreadcrumbJsonLd items={breadcrumb} />
      <ExamSeriesBanner />

      <div className="main-container">
        <div className="left-column">
          <div className="breadcrumb">
            {breadcrumb.map((crumb, index) => (
              <Fragment key={crumb.label}>
                {index > 0 && <span className="breadcrumb-separator">›</span>}
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className="current">{crumb.label}</span>
                )}
              </Fragment>
            ))}
          </div>

          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}

          <div className="content-area">{children}</div>
        </div>

        <PageSidebar />
      </div>
    </div>
  );
}
