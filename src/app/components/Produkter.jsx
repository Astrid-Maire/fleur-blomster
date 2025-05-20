import React, { useEffect, useState } from "react";

const API_URL = "https://xraaztpjtcujqbtvczfb.supabase.co/rest/v1/products";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA";

const Produkter = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Fejl ved hentning:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">🛍️ Produkter</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">{product.price} kr</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produkter;
