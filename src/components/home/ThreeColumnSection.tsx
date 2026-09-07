"use client";

import { CONTACT } from "@/lib/contact";

import { Fragment } from "react";
import Link from "next/link";
import { useEnquire } from "@/components/layout/EnquireProvider";
import { quickLinks, whyChooseUs } from "@/lib/home-content";

export default function ThreeColumnSection() {
  const { open } = useEnquire();

  return (
    <div className="three-column-section">
      {/* Why Choose Us */}
      <div className="column">
        <h3>Why Choose Us?</h3>
        <p style={{ marginBottom: 20, lineHeight: 1.8 }}>
          {whyChooseUs.map((reason, index) => (
            <Fragment key={reason.title}>
              <strong>✓ {reason.title}</strong> {reason.body}
              {index < whyChooseUs.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </Fragment>
          ))}
        </p>
      </div>

      {/* Quick Links */}
      <div className="column">
        <h3>Quick Links</h3>
        <div className="page-links">
          {quickLinks.map((link) =>
            link.external ? (
              <a
                href={link.href}
                className="page-link"
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="page-link" key={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>

      {/* Contact / Enquire */}
      <div className="column contact-column">
        <h3>Get in Touch</h3>
        <p style={{ fontSize: 14, color: "#555", marginBottom: 18, lineHeight: 1.7 }}>
          Have questions about our courses or admissions? Our counsellors are here to guide
          you.
        </p>

        <button className="home-enquire-btn" onClick={open}>
          <i className="fas fa-comment-dots" aria-hidden="true" /> Enquire Now
        </button>

        <div className="home-contact-info">
          <a href={CONTACT.phones[0].href} className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-phone" aria-hidden="true" />
            </span>
            <span>{CONTACT.phones[0].label}</span>
          </a>
          <a href={CONTACT.phones[1].href} className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-phone" aria-hidden="true" />
            </span>
            <span>{CONTACT.phones[1].label}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-envelope" aria-hidden="true" />
            </span>
            <span style={{ overflowWrap: "anywhere" }}>{CONTACT.email}</span>
          </a>
          <Link href="/about/contact" className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
            </span>
            <span>Visit Us in Ajmer</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
