import { CONTACT } from "@/lib/contact";

/**
 * Emails the ATC team about new website leads through Resend.
 * Without RESEND_API_KEY it logs and skips, so local dev and forms keep working.
 */

type Row = [label: string, value: string | null | undefined];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render(heading: string, rows: Row[]) {
  const filled = rows.filter(([, value]) => value);
  const text = [heading, "", ...filled.map(([label, value]) => `${label}: ${value}`)].join("\n");
  const html = `<h2 style="font-family:sans-serif;color:#0b2a5b">${escapeHtml(heading)}</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${filled
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top"><b>${escapeHtml(label)}</b></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value!)}</td></tr>`,
    )
    .join("")}</table>`;
  return { text, html };
}

async function send(subject: string, heading: string, rows: Row[], replyTo?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[notify] RESEND_API_KEY not set; skipping email:", subject);
    return;
  }

  const to = (process.env.NOTIFY_EMAIL_TO || CONTACT.email)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  const from = process.env.NOTIFY_EMAIL_FROM || "ATC Website <onboarding@resend.dev>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        subject,
        ...render(heading, rows),
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("[notify] Resend rejected email:", response.status, await response.text());
    }
  } catch (error) {
    console.error("[notify] could not send email:", error);
  }
}

export function notifyEnquiry(enquiry: {
  fullName: string;
  email: string;
  phone: string;
  course: string | null;
  message: string | null;
}) {
  return send(
    `New enquiry: ${enquiry.fullName}${enquiry.course ? ` (${enquiry.course})` : ""}`,
    "New website enquiry",
    [
      ["Name", enquiry.fullName],
      ["Phone", enquiry.phone],
      ["Email", enquiry.email],
      ["Course", enquiry.course],
      ["Message", enquiry.message],
    ],
    enquiry.email,
  );
}

export function notifyExamRegistration(registration: {
  exam: string;
  name: string;
  fatherName: string;
  phone: string;
  place: string;
  centre: string | null;
}) {
  const exam = registration.exam.toUpperCase();
  return send(
    `New ${exam} test series registration: ${registration.name}`,
    `New ${exam} test series registration`,
    [
      ["Exam", exam],
      ["Name", registration.name],
      ["Father's name", registration.fatherName],
      ["Phone", registration.phone],
      ["Place", registration.place],
      ["Centre", registration.centre],
    ],
  );
}
