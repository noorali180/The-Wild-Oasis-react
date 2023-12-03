import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sxqugzkobreriymnkmqx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cXVnemtvYnJlcml5bW5rbXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNDgxMDYsImV4cCI6MjAxNjcyNDEwNn0.wDOCttqzXLn_u9ReuiKITogFY9-B_iUK1JxLN4aXZG0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
