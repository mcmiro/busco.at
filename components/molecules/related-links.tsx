import Link from 'next/link';
import { UI } from '../index';

function RelatedLinks() {
  const linksForPersons = [15, 20, 25, 30, 35];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <UI.Spacer size={'lg'} />
        <UI.Typography size={'h3'} weight={'bold'} className="text-center">
          Reisebus, Minibus oder Mini Van.<br></br>
          Sie entscheiden.
        </UI.Typography>
        <UI.Spacer size={'xs'} />
        <UI.Typography size={'h5'} className="mt-2 mb-8 text-center">
          Unser Angebot umfasst von Mini Vans bis Reisebusen. Somit können wir
          ab 1-50 Personen fahren.
        </UI.Typography>
        <UI.Spacer size={'sm'} />
        <UI.Typography size={'h4'} className="mt-2 mb-8 text-center">
          Jetzt passenden Bus mieten für
        </UI.Typography>
        <UI.Spacer size={'lg'} />
        <div className="flex justify-between w-full max-w-3xl mx-auto">
          {linksForPersons.map((persons: number) => (
            <Link
              href={`/service/bus-fuer-${persons}-personen`}
              key={persons}
              className="text-indigo-700 underline"
            >
              Für {persons} Personen
            </Link>
          ))}
        </div>
      </div>
      <UI.Spacer size={'lg'} />
    </div>
  );
}

export default RelatedLinks;
