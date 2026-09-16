import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LanguageProvider from "@/components/layout/LanguageProvider";
import EnquireProvider from "@/components/layout/EnquireProvider";
import "@/styles/site.css";
import "@/styles/pages.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/** Where a lost visitor is most likely to have been heading. */
const suggestions = [
  { href: "/courses", label: "Our Courses", note: "IAS, RAS and Rajasthan PSI batches" },
  { href: "/courses/test-series", label: "Test Series", note: "Prelims and Mains test series" },
  { href: "/content", label: "Study Material", note: "Free PDFs, magazines and resources" },
  { href: "/about/selections", label: "Our Selections", note: "Toppers from ATC Ajmer" },
  { href: "/daily-quiz", label: "Daily Quiz", note: "Today's current affairs quiz" },
  { href: "/about/contact", label: "Contact Us", note: "Visit or call the Ajmer centre" },
];

/**
 * Served for every unmatched URL, with a real 404 status. The site chrome is
 * repeated here because this file sits above the (site) route group and so
 * does not inherit its layout.
 */
export default function NotFound() {
  return (
    <LanguageProvider>
      <EnquireProvider>
        <div className="site-shell">
          <Header />
          <div className="page-wrapper">
            <div className="main-container">
              <div className="left-column">
                <h1 className="page-title">Page not found</h1>
                <p className="page-subtitle">
                  The page you were looking for has moved or no longer exists. Here is
                  where most visitors go next.
                </p>

                <div className="content-area">
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {suggestions.map((item) => (
                      <li key={item.href} style={{ marginBottom: 14 }}>
                        <Link href={item.href} style={{ fontWeight: 600 }}>
                          {item.label}
                        </Link>
                        <span style={{ color: "var(--text-muted)" }}> — {item.note}</span>
                      </li>
                    ))}
                  </ul>
                  <p style={{ marginTop: 28 }}>
                    <Link href="/">← Back to the ATC Ajmer home page</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </EnquireProvider>
    </LanguageProvider>
  );
}
