// app/pages/Bestil/page.jsx
import { Suspense } from "react";
import BestilIndhold from "./BestilIndhold";

export default function Page() {
  return (
    <Suspense fallback={<div>Indlæser bestillingsside...</div>}>
      <BestilIndhold />
    </Suspense>
  );
}
