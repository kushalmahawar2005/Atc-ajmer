import { Fragment } from "react";
import { stats } from "@/lib/home-content";

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      {stats.map((stat, index) => (
        <Fragment key={stat.label}>
          {index > 0 && <div className="stat-divider" />}
          <div className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
