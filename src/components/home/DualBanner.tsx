import Link from "next/link";

export default function DualBanner() {
  return (
    <div className="dual-banner">
      {/* Knowledge Base (compact) */}
      <div className="dual-panel dual-panel--kb">
        <div className="kb-compact-inner">
          <div className="kb-compact-icon">📚</div>
          <div className="kb-compact-text">
            <div className="kb-compact-label">Free Study Resources</div>
            <div className="kb-compact-heading">Knowledge Base</div>
            <div className="kb-compact-sub">IAS &amp; RAS Notes, Q&amp;A &amp; Current Affairs</div>
          </div>
          <Link href="/knowledge-base" className="kb-cta">
            Explore →
          </Link>
        </div>
      </div>

      {/* Exams Portal */}
      <div className="dual-panel dual-panel--exams">
        <div className="exams-panel-inner">
          <div className="exams-panel-left">
            <div className="exams-panel-badge">
              🎯 Bilingual &nbsp;·&nbsp; RAS &amp; IAS Focused
            </div>
            <div className="exams-panel-title">SBA Exams Portal</div>
            <div className="exams-ras-highlight">
              <span className="exams-ras-new">NEW</span>
              <span className="exams-ras-text">
                🏆 RAS Prelims 2026 Offline Test Series — To be Organised at 11 Centres of
                Rajasthan
              </span>
              <Link href="/exams/ras-series" className="exams-ras-link">
                Register →
              </Link>
            </div>
            <div className="exams-pills">
              <span className="exams-pill">📊 MCQ Practice Tests (Subjectwise) </span>
              <span className="exams-pill">📰 Current Affairs Objective Questions</span>
            </div>
          </div>
          <Link href="/exams" className="exams-cta">
            Join Now &nbsp;→
          </Link>
        </div>
      </div>
    </div>
  );
}
