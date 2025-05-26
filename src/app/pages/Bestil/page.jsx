"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const BestilIndhold = dynamic(() => import("./BestilIndhold"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Indlæser bestillingsside...</div>}>
      <BestilIndhold />
    </Suspense>
  );
}
