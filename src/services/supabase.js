import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fbnwsswwsbjawgvqoqzo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZibndzc3d3c2JqYXdndnFvcXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMjY0NzksImV4cCI6MjAxNjcwMjQ3OX0.AO8XvtSXu83rfxkSveJZjit17cAZ7dgCvBxSzHiYVcY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
