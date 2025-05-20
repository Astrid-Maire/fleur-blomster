import React from "react";

export default function Filter({ selected, onChange }) {
  return (
    <div className="mb-6 flex justify-center">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <option value="alle">Alle</option>
        <option value="Plante">Planter</option>
        <option value="Buket">Buketter</option>
      </select>
    </div>
  );
}
