"use client";

import BestilIndhold from "@/app/components/BestilIndhold";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const flow = searchParams.get("flow");

  return <BestilIndhold flow={flow} />;
}
