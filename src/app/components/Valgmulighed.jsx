"use client";

import { useState } from "react";

export default function Valgmulighed({ onChange }) {
  const [selected, setSelected] = useState("");

  const occasions = [
    { label: "FØDSELSDAG", value: "birthday" },
    { label: "BRYLLUP", value: "wedding" },
    { label: "BEGRAVELSE", value: "funeral" },
    { label: "FØDSEL / NYFØDT", value: "newborn" },
    { label: "VALENTINSDAG", value: "valentines" },
    { label: "MORS DAG", value: "mothersday" },
    { label: "TAK", value: "thanks" },
    { label: "GOD BEDRING", value: "getwell" },
    { label: "UNDSKYLD", value: "sorry" },
    { label: "BARE FORDI", value: "justbecause" },
  ];

  const handleSelect = (value) => {
    const newValue = selected === value ? "" : value;
    setSelected(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div>
      <h5 className="text-xl mb-4">VÆLG ANLEDNING</h5>
      <div className="grid grid-cols-2 gap-4">
        {occasions.map((occasion) => (
          <button
            key={occasion.value}
            type="button"
            onClick={() => handleSelect(occasion.value)}
            className={`w-full text-left flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors
              ${
                selected === occasion.value
                  ? "bg-[var(--mørkegrøn)] text-[var(--baggrundsfarve)] border-[var(--mørkegrøn)]"
                  : "bg-[var(--baggrundsfarve)] text-[var(--tekstfarve)] border-[var(--mørkegrøn)]"
              }`}
          >
            <span>{occasion.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
