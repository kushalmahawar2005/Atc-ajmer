import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Website under development",
  robots: { index: false, follow: false },
};

/**
 * Shown for every public URL while MAINTENANCE_MODE is on (see src/proxy.ts).
 * Sits outside the (site) route group so it renders without the site chrome.
 */
export default function Maintenance() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        background: "linear-gradient(160deg, var(--primary) 0%, var(--primary-dark) 100%)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <Image
          src="/images/atc-logo.png"
          alt="ATC Ajmer"
          width={96}
          height={96}
          priority
          style={{ margin: "0 auto 28px", background: "#fff", borderRadius: 16, padding: 8 }}
        />
        <p
          style={{
            display: "inline-block",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.12)",
            marginBottom: 20,
          }}
        >
          <i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" /> Under Development
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 6vw, 40px)",
            lineHeight: 1.25,
            marginBottom: 16,
          }}
        >
          Our new website is on its way
        </h1>
        <p style={{ fontSize: 17, opacity: 0.85, marginBottom: 8 }}>
          We are currently building and improving the ATC Ajmer website. Please check back soon.
        </p>
        <p
          lang="hi"
          style={{ fontFamily: "var(--font-noto-devanagari)", fontSize: 16, opacity: 0.75 }}
        >
          वेबसाइट पर अभी काम चल रहा है। कृपया जल्द ही दोबारा देखें।
        </p>
      </div>
    </main>
  );
}
