"use client";
import { useKurv } from "./KurvContext";
import { ShoppingCart } from "lucide-react"; // Hvis du bruger Lucide (Next.js understøtter det)

export default function KurvIkon() {
  const { kurv, toggleKurv } = useKurv();

  const samletAntal = kurv.reduce((sum, item) => sum + item.antal, 0);

  return (
    <div
      className="fixed top-4 right-4 z-50 cursor-pointer"
      onClick={toggleKurv}
    >
      <div className="relative">
        <ShoppingCart className="w-8 h-8 text-gray-800" />
        {samletAntal > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
            {samletAntal}
          </span>
        )}
      </div>
    </div>
  );
}
