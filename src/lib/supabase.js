import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wxuccjzxvxnmafafymxi.supabase.co/rest/v1/notes";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4dWNjanp4dnhubWFmYWZ5bXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYxMjEsImV4cCI6MjA5NzIxMjEyMX0.GeKcnd-d_25n-IxNMrIbENU8zmJuao04jZxLHXSP05k";

export const supabase = createClient(supabaseUrl, supabaseKey);