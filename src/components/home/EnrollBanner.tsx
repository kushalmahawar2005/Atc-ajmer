import { Fragment } from "react";
import { STUDENT_PORTAL_URL } from "@/lib/navigation";
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
        <a
          href={STUDENT_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="enroll-cta-btn"
        >
          Register Online Now <span className="enroll-arrow">→</span>
        </a>
      </div>
    </div>
  );
}
