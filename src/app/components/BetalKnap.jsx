"use client";

export default function BetalKnap({ onBetal }) {
  return (
    <button
      onClick={onBetal}
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      Betal
    </button>
  );
}
