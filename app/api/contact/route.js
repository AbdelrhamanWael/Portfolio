import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://unbeppzmpahszymqmysh.supabase.co";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmVwcHptcGFoc3p5bXFteXNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Nzk3MTAyMCwiZXhwIjoyMDkzNTQ3MDIwfQ.GbKccVcQp0zCkcjmpHTdxE8KOKHv3I6zCnjSeRtMQ40";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    // 1. Save to Supabase database (permanent backup)
    const { error: dbError } = await supabase.from("messages").insert([
      {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      },
    ]);

    if (dbError) {
      console.error("Supabase API Insert Error:", dbError);
    }

    // 2. Send instant email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["abdelrhamanwael8@gmail.com"],
          subject: `✨ New Portfolio Lead: ${name.trim()}`,
          replyTo: email.trim(),
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #f8fafc;">
              <h2 style="color: #0f172a; margin-top: 0; font-size: 22px;">🚀 New Message from Your Portfolio</h2>
              
              <div style="background: #ffffff; padding: 18px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                <p style="margin: 0 0 10px 0; color: #334155; font-size: 15px;"><strong>Sender:</strong> ${name.trim()}</p>
                <p style="margin: 0 0 10px 0; color: #334155; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${email.trim()}" style="color: #0284c7; text-decoration: none;">${email.trim()}</a></p>
                <p style="margin: 0; color: #64748b; font-size: 13px;"><strong>Received:</strong> ${new Date().toLocaleString()}</p>
              </div>

              <div style="background: #ffffff; padding: 18px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                <h4 style="margin: 0 0 10px 0; color: #475569; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h4>
                <p style="white-space: pre-wrap; margin: 0; color: #0f172a; line-height: 1.6; font-size: 15px;">${message.trim()}</p>
              </div>

              <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
                Sent directly from your portfolio at <a href="https://abdelrhamanwael.vercel.app" style="color: #64748b;">abdelrhamanwael.vercel.app</a>
              </p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Resend Email Notification Error:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY not configured. Message was saved to Supabase only.");
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error("Contact API Server Error:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
