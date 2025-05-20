import { createClient } from "@supabase/supabase-js";

// Supabase opsætning
const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default async function BlomstDetalje({ params }) {
  const { id } = params;

  // Hent blomsten med det ID
  const { data: blomst, error } = await supabase
    .from("fleurblomster")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return (
      <p className="text-red-600 text-center mt-10">Fejl: {error.message}</p>
    );
  }

  if (!blomst) {
    return <p className="text-center mt-10">Blomst ikke fundet</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={blomst.image}
        alt={blomst.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{blomst.name}</h1>
      <p className="text-gray-700 mb-2">{blomst.description}</p>
      <p className="text-pink-600 text-xl font-semibold">{blomst.price} kr</p>
    </div>
  );
}
