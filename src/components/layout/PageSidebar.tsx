"use client";

import { CONTACT } from "@/lib/contact";

import Link from "next/link";
import { useEnquire } from "./EnquireProvider";
import { sidebarSections } from "@/lib/sidebar-links";

export default function PageSidebar() {
  const { open } = useEnquire();

  return (
    <div className="right-column">
      {/* 1. Knowledge Base banner */}
      <Link href="/knowledge-base" className="sb-kb-banner">
        <div className="sb-kb-icon">📚</div>
        <div className="sb-kb-text">
          <div className="sb-kb-label">Free Study Resources</div>
          <div className="sb-kb-title">Knowledge Base</div>
          <div className="sb-kb-sub">IAS &amp; RAS Exam Resources</div>
        </div>
        <div className="sb-kb-arrow">
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </div>
      </Link>

      {/* 2–7. Categorised link groups */}
      {sidebarSections.map((section) => (
        <div className="sb-section" key={section.heading}>
          <div className="sb-section-head">
            <i className={section.icon} aria-hidden="true" /> {section.heading}
          </div>
          <div className="sb-links">
            {section.links.map((link) => (
              <Link href={link.href} className="sb-link" key={link.href}>
                <i className="fas fa-chevron-right" aria-hidden="true" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* 8. Enquire Now CTA */}
      <button className="sb-enquire-btn" onClick={open}>
        <i className="fas fa-comment-dots" aria-hidden="true" /> Enquire Now
      </button>

      {/* 9. Contact info strip */}
      <div className="sb-contact-card">
        <div className="sb-contact-icon">
          <i className="fas fa-phone-volume" aria-hidden="true" />
        </div>
        <div>
          <div className="sb-contact-label">Call Us</div>
          <a href={CONTACT.phones[0].href} className="sb-contact-num">
            {CONTACT.phones[0].label}
          </a>
          <a href={CONTACT.phones[1].href} className="sb-contact-num">
            {CONTACT.phones[1].label}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="sb-contact-hours" style={{ overflowWrap: "anywhere" }}>{CONTACT.email}</a>
        </div>
      </div>
    </div>
  );
}
