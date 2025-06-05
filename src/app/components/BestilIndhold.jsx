"use client";

import Back2 from "@/app/components/Back2";

export default function BestilIndhold() {
  try {
    return (
      <div style={{ padding: "2rem" }}>
        <div style={{ position: "absolute", left: 20, top: 20 }}>
          <Back2 />
        </div>
        <div style={{ marginTop: "100px" }}>
          <h2>Formen burde vises her</h2>
          <form>
            <input placeholder="Fornavn" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>Der er opstået en fejl:</p>
        <pre>{error.message}</pre>
      </div>
    );
  }
}
