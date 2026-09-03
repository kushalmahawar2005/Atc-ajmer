import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're offline",
  robots: { index: false, follow: false },
};

/** Cached by the service worker and shown when a page can't be reached. */
export default function OfflinePage() {
  return (
    <div className="container">
      <div className="info-full" style={{ textAlign: "center", padding: "56px 24px" }}>
        <div style={{ fontSize: 44, marginBottom: 12 }}>📶</div>
        <h1 className="info-title" style={{ justifyContent: "center" }}>
          You&apos;re offline
        </h1>
        <p style={{ color: "var(--text-muted)", margin: "12px 0 24px" }}>
          This page isn&apos;t available without a connection. Pages you&apos;ve already
          visited will still open.
        </p>
        <Link href="/" className="btn btn-primary">
          Go to the home page
        </Link>
      </div>
    </div>
  );
}
