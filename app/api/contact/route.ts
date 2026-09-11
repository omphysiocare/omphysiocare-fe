import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      // The sender name shows as "Harshad Patoliya" in your inbox
      from: `${name} <onboarding@resend.dev>`,
      to: "omphysiocare@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 8px; margin-top: 0;">
            New Patient Appointment Request
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <div style="margin-top: 16px; padding: 14px; background-color: #f8fafc; border-left: 4px solid #0f766e; border-radius: 4px;">
            <strong>Condition / Details:</strong>
            <p style="margin: 8px 0 0 0; color: #334155; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}