import type { Metadata } from "next";
import Link from "next/link";
import ToppersFilter from "@/components/pages/ToppersFilter";
import { examGroups } from "@/lib/selections-data";
import "@/styles/toppers.css";

export const metadata: Metadata = {
  title: "Our Past Selections — Toppers Gallery",
  description:
    "Toppers of RAS and IAS from ATC — selections across RAS 2024, 2023, 2021, 2018, 2016, 2013, 2008 and IAS.",
  alternates: { canonical: "/about/selections" },
};

export default function SelectionsPage() {
  return (
    <>
      <div className="tg-hero">
        <div className="tg-hero-inner">
          <nav className="tg-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/about">About Us</Link>
            <span>›</span>
            <span>Toppers Gallery</span>
          </nav>
          <h1>🏆 Toppers Gallery</h1>
          <p>Celebrating Excellence in Civil Services — ATC</p>
        </div>
      </div>

      <div className="tg-main">
        <ToppersFilter groups={examGroups} />

        {examGroups.map((group) => (
          <section className="tg-section" id={group.id} key={group.id}>
            <div className="tg-section-head">
              {group.badge && (
                <>
                  <span className="tg-badge">{group.badge}</span>
                  <br />
                </>
              )}
              <h2 className="tg-title">{group.title}</h2>
              {group.subtitle && <p className="tg-subtitle">{group.subtitle}</p>}
            </div>

            <div className="tg-grid">
              {group.toppers.map((topper, index) => (
                <div className="tg-card" key={`${group.id}-${index}`}>
                  <div className={`tg-card-photo ${topper.frame}`}>
                    {topper.photo ? (
                      /* Sized by the gallery's own CSS (object-fit cover in a
                         fixed frame), so a plain <img> is the right fit. */
                      <img src={topper.photo} alt={topper.name} loading="lazy" />
                    ) : (
                      <div className="tg-noimg">{topper.initials}</div>
                    )}
                    <div className="tg-card-overlay">
                      <span>Selected</span>
                    </div>
                  </div>

                  <div className="tg-card-info">
                    <div className="tg-meta-row">
                      <span className="tg-meta-key">Name :</span>
                      <span className="tg-meta-name">{topper.name}</span>
                    </div>
                    {topper.rank && (
                      <div className="tg-meta-row">
                        <span className="tg-meta-key">Rank :</span>
                        <span className="tg-meta-rank">{topper.rank}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
