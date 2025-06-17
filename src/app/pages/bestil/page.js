import BestilIndhold from "@/app/components/BestilIndhold";
// Den modtager 'searchParams' som prop fra Next.js routing – dvs. query-parametre i URL'en.
export default function Page({ searchParams }) {
  // Henter 'flow' fra querystringen, hvis den findes.
  const flow = searchParams?.flow || null;

  // Sender 'flow' videre som prop til BestilIndhold-komponenten
  return <BestilIndhold flow={flow} />;
}
