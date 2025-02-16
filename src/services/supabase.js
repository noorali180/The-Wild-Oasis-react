import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vutrmpovfutrddkpzykl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dHJtcG92ZnV0cmRka3B6eWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTIzOTAsImV4cCI6MjA1MjI2ODM5MH0.mJCfrpRAHXRid0Z_3pn1DsiyMQsXVbZaLpLYydGn0To";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
