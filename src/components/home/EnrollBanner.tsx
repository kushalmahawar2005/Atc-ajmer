"use client";

import { Fragment } from "react";
import Link from "next/link";
import { openExamBanner } from "@/lib/exam-banner";
import { enrollFeatures, newBatches } from "@/lib/home-content";

export default function EnrollBanner() {
  return (
    <div className="enroll-banner">
      <div className="enroll-banner-left">
        <div className="enroll-badge">Admissions Open</div>
        <h2 className="enroll-heading">New Batches :- </h2>
        <p className="enroll-subtext">
          {newBatches.map((batch) => (
            <Fragment key={batch}>
              <b>{batch}</b>
              <br />
            </Fragment>
          ))}
        </p>
      </div>

      <div className="enroll-banner-right">
        <div className="enroll-features">
          {enrollFeatures.map((feature) => (
            <span className="enroll-feature-pill" key={feature}>
              {feature}
            </span>
          ))}
        </div>
        <div className="enroll-cta-row">
          <Link href="/about/selections" className="enroll-selections-btn">
            <i className="fas fa-trophy" aria-hidden="true" /> View Our Past Selections
          </Link>
          <button type="button" onClick={openExamBanner} className="enroll-cta-btn">
            Register Online Now <span className="enroll-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
