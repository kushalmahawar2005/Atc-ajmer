import Link from "next/link";
import { footerColumns, socialLinks } from "@/lib/home-content";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            {footerColumns.map((column) => (
              <div className="footer-column" key={column.heading}>
                <h4>{column.heading}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div
            className="footer-social"
            aria-label="Follow ATC on social media"
          >
            <span className="footer-social-label">Connect With Us</span>
            <div className="footer-social-row">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer-soc ${social.key}`}
                  title={social.title}
                  aria-label={social.title}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <Link href="/about/privacy">Privacy Policy</Link>
            <Link href="/about/terms">Terms of Service</Link>
            <Link href="/about/refund-policy">Refund Policy</Link>
          </div>

          <p className="copyright">
            Copyright © 2006-2026 All rights reserved with ATC
          </p>
        </div>
      </div>
    </footer>
  );
}
