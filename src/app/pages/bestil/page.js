import BestilIndhold from "@/app/components/BestilIndhold";

export default function Page({ searchParams }) {
  const flow = searchParams?.flow || null;

  return <BestilIndhold flow={flow} />;
}
