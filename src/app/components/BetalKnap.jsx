"use client";

export default function BetalKnap({ onBetal }) {
  return (
    <button onClick={onBetal} className="min-knap ">
      Betal
    </button>
  );
}
