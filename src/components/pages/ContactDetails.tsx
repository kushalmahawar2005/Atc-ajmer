import { CONTACT } from "@/lib/contact";

export default function ContactDetails() {
  return (
    <div className="content" style={{ overflowWrap: "anywhere" }}>
      <h2>Visit ATC Ajmer</h2>
      <address style={{ fontStyle: "normal", margin: "16px 0 24px" }}>{CONTACT.address}</address>
      <h2>Admissions &amp; Enquiries</h2>
      <p style={{ margin: "16px 0" }}>
        {CONTACT.phones.map((phone) => <span key={phone.href} style={{ display: "block" }}><a href={phone.href}>{phone.label}</a></span>)}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "24px 0" }}>
        <a className="btnbg" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
        <a className="btnbg" href={CONTACT.maps} target="_blank" rel="noopener noreferrer">Get Directions</a>
      </div>
      <h2>Connect With Us</h2>
      <p style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 16 }}>
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram @atcias</a>
        <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook @atcias</a>
      </p>
    </div>
  );
}
