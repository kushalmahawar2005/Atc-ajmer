import { NextResponse } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";

export const dynamic = "force-dynamic";

function field(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot: bots fill hidden fields, humans never see them.
  if (field(data, "website")) {
    return NextResponse.json({ success: true, message: "Thank you for your enquiry." });
  }

  const fullName = field(data, "name");
  const email = field(data, "email");
  const phone = field(data, "phone");

  if (!fullName || !email || !phone) {
    return NextResponse.json(
      { success: false, message: "Please fill in your name, email and phone number." },
      { status: 400 },
    );
  }

  try {
    await db.insert(enquiries).values({
      fullName: fullName.slice(0, 160),
      email: email.slice(0, 200),
      phone: phone.slice(0, 20),
      course: field(data, "subject").slice(0, 120) || null,
      message: field(data, "requirement").slice(0, 2000) || null,
      source: "website",
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Our counsellor will call you back shortly.",
    });
  } catch (error) {
    console.error("Enquiry insert failed:", error);
    return NextResponse.json(
      { success: false, message: "Could not save your enquiry. Please call us instead." },
      { status: 500 },
    );
  }
}
