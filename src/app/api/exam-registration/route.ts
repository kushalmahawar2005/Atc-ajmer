import { NextResponse } from "next/server";
import { db } from "@/db";
import { examRegistrations } from "@/db/schema";
import { isExamKey } from "@/lib/exam-series";

export const dynamic = "force-dynamic";

function field(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot: bots fill hidden fields, people never see them.
  if (field(data, "website")) {
    return NextResponse.json({ success: true, message: "Registration received." });
  }

  const exam = field(data, "exam").toLowerCase();
  const name = field(data, "name");
  const fatherName = field(data, "fatherName");
  const phone = field(data, "phone");
  const place = field(data, "place");
  const centre = field(data, "centre");

  if (!isExamKey(exam)) {
    return NextResponse.json({ success: false, message: "Unknown exam." }, { status: 400 });
  }
  if (!name || !fatherName || !phone || !place) {
    return NextResponse.json(
      { success: false, message: "Please fill in every field." },
      { status: 400 },
    );
  }

  try {
    await db.insert(examRegistrations).values({
      exam,
      name: name.slice(0, 160),
      fatherName: fatherName.slice(0, 160),
      phone: phone.slice(0, 20),
      place: place.slice(0, 160),
      centre: centre.slice(0, 120) || null,
    });

    return NextResponse.json({
      success: true,
      message: "Registered! Our team will confirm your centre shortly.",
    });
  } catch (error) {
    console.error("Exam registration failed:", error);
    return NextResponse.json(
      { success: false, message: "Could not save your registration. Please call us." },
      { status: 500 },
    );
  }
}
