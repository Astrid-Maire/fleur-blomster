"use client";

export default function OpeningHoursSection() {
  return (
    <section className="w-full px-[var(--space-xl)] py-[var(--space-xl)]">
      <div className="grid md:grid-cols-2 gap-8 text-center">
        <div>
          <h5 className=" mb-4">ÅBNINGSTIDER</h5>
          <ul className="space-y-1">
            <li className="flex justify-between w-full max-w-xs mx-auto space-y-4">
              <div className="text-left">Mandag–Fredag:</div>
              <div className="text-right">9–18</div>
            </li>
            <li className="flex justify-between w-full max-w-xs mx-auto space-y-4">
              <div className="text-left">Lørdag:</div>
              <div className="text-right">8–15</div>
            </li>
            <li className="flex justify-between w-full max-w-xs mx-auto space-y-4">
              <div className="text-left">Søndag:</div>
              <div className="text-right">8–15</div>
            </li>
            <li className="flex justify-between w-full max-w-xs mx-auto space-y-4">
              <div className="text-left">Helligdage:</div>
              <div className="text-right">8–15</div>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-justify">ADRESSE</h5>
          <p className="text-justify mb-6">
            Fleur Blomster har til huse på Trørødvej 67, 2950 Vedbæk, Danmark.
            Her finder du en hyggelig blomsterbutik med fokus på kvalitet og
            personlig service.
          </p>
          <p className="text-justify mb-4">
            Vi glæder os til at byde dig velkommen i butikken og dele vores
            passion for smukke blomster, god service og æstetik med dig. Uanset
            om du søger en værtindegave, en dekoration til hjemmet eller
            blomster til livets store øjeblikke, står vi klar til at hjælpe.
          </p>
        </div>
      </div>
    </section>
  );
}
