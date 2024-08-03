import { UI } from '../index';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-4">
      <div className="grid md:grid-cols-2 gap-8 container mx-auto bg-white rounded-xl p-4 md:p-8">
        <div>
          <UI.Typography size={'h4'} weight={'bold'}>
            Busco
          </UI.Typography>
          <ul className="flex flex-col gap-2 text-lg mt-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ueber-busco">Über Busco</Link>
            </li>
            <li>
              <Link href="/anfrage">Kontakt</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
        <div>
          <UI.Typography size={'h4'} weight={'bold'}>
            Wien
          </UI.Typography>
          <ul className="flex flex-col gap-2 text-lg mt-4">
            <li>
              <Link href="/service/bus-mieten-wien">Bus mieten in Wien</Link>
            </li>
            <li>
              <Link href="/service/bus-mieten-schulklasse">
                Bus mieten Schulklasse
              </Link>
            </li>
            <li>
              <Link href="/service/bus-mieten-betriebsfahrten">
                Bus für Betriebsfahrten mieten in Wien
              </Link>
            </li>
            <li>
              <Link href="/service/shuttle-bus-mieten-wien">
                Shuttle Bus mieten in Wien
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
