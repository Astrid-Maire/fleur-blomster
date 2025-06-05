"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useKurv } from "@/app/components/KurvContext";
import { useRouter, useSearchParams } from "next/navigation";
import Back2 from "@/app/components/Back2";

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function Bestil() {
  return null;
}
