import { UI } from '../index';
import Link from 'next/link';
import Logo from '../ui/logo';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-4">
      <div className="grid md:grid-cols-2 gap-8 container mx-auto bg-white rounded-xl p-4 md:p-8">
        <div>
          <div className="h-[32px]">
            <Logo />
          </div>
          <ul className="flex flex-col gap-2 text-lg mt-4">
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/ueber-busco"
              >
                Über Busco
              </Link>
            </li>
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/anfrage"
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/impressum"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/datenschutz"
              >
                Datenschutz
              </Link>
            </li>
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/agb"
              >
                AGB
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <UI.Typography size={'h4'} weight={'bold'}>
            Wien
          </UI.Typography>
          <ul className="flex flex-col gap-2 text-lg mt-4">
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/service/bus-mieten-wien"
              >
                Bus mieten in Wien
              </Link>
            </li>
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/service/bus-mieten-schulklasse"
              >
                Bus mieten Schulklasse
              </Link>
            </li>
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/service/bus-mieten-betriebsfahrten-wien"
              >
                Bus für Betriebsfahrten mieten in Wien
              </Link>
            </li>
            <li>
              <Link
                className="hover:md:underline hover:md:text-gray-500"
                href="/service/shuttle-bus-mieten-wien"
              >
                Shuttle Bus mieten in Wien
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
