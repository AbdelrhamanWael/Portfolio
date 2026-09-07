import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://unbeppzmpahszymqmysh.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmVwcHptcGFoc3p5bXFteXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NzEwMjAsImV4cCI6MjA5MzU0NzAyMH0.Pw8u0G8cj7Y_4ZyOKp9X1NCO2kv2_DiLtneeAca-0OE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
