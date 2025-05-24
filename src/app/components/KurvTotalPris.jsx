"use client";

export default function KurvTotalPris({ kurv }) {
  const total = kurv.reduce((sum, item) => sum + item.pris * item.antal, 0);

  return <div className="text-right mt-2 font-bold">Total: {total} kr</div>;
}
