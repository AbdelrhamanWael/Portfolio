import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://unbeppzmpahszymqmysh.supabase.co";
// In server route, we can use service_role key to guarantee 100% bypass of RLS issues
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

    const { data, error } = await supabase.from("messages").insert([
      {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      },
    ]);

    if (error) {
      console.error("Supabase API Insert Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact API Server Error:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
