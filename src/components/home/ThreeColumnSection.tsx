"use client";

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
          <a href="tel:+919636977490" className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-phone" aria-hidden="true" />
            </span>
            <span>+91 9636977490</span>
          </a>
          <a href="tel:+918955577492" className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-phone" aria-hidden="true" />
            </span>
            <span>+91 8955577492</span>
          </a>
          <div className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-clock" aria-hidden="true" />
            </span>
            <span> 9 AM – 7 PM</span>
          </div>
          <Link href="/about/contact" className="home-contact-row">
            <span className="home-contact-ic">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
            </span>
            <span>View All Locations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
