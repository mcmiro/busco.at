import { SeparatorItemProps } from '@/components/molecules/separator';
import { PostType } from '@/types/Post';

export const cards: PostType[] = [
  {
    title: 'Busvermietung ab Wien',
    content:
      'Mieten Sie einen Bus mit professionellem Chauffeur ab Wien für Ihre nächste Reise. Geben Sie uns einfach Ihre gewünschte Route an. Wir bringen Sie zuverlässig von A nach B und wieder zurück – so oft und so lange Sie möchten.',
    image: '/images/content/busvermietung-ab-wien.jpg',
    href: '/service/bus-mieten-wien',
    tags: ['Inklusive Fahrer', 'Reisebusse', 'Mini-Busse', 'Minivans'],
  },
  {
    title: 'Bus für Schulen und Kindergärten',
    content:
      'Unsere Busse bieten Ihrer Schulklasse nicht nur Sicherheit und Komfort, sondern auch eine sorgenfreie Reiseerfahrung mit erfahrenen Fahrern.',
    image: '/images/content/bus-fuer-schulen.jpg',
    href: '/service/bus-mieten-schulklasse',
    tags: [
      'Erfahren mit Schulklassen',
      'Klassenfahrten',
      'Schüler Shuttle',
      'Exkursionen',
    ],
  },
  {
    title: 'Bus als Shuttle-Service',
    content:
      'Optimieren Sie Ihre regelmäßigen Fahrten mit unserem zuverlässigen Shuttle-Service. Busco sorgt für einen pünktlichen und reibungslosen Ablauf Ihrer Fahrten.',
    image: '/images/content/bus-als-shuttle-service.jpg',
    href: '/service/shuttle-bus-mieten-wien',
    tags: [
      'Event-Shuttle',
      'Flughafentransfer',
      'Hotel-Shuttle',
      'Pendeldienst jeder Art',
    ],
  },
  {
    title: 'Bus für Betriebsfahrten',
    content:
      'Komfort und Pünktlichkeit für Ihre Betriebsfahrten. Busco bietet stressfreie und angenehme Busfahrten, die perfekt auf Ihre Bedürfnisse abgestimmt sind.',
    image: '/images/content/bus-fuer-betriebsfahrten.jpg',
    href: '/service/bus-mieten-betriebsfahrten-wien',
    tags: [
      'Team-Building Ausflüge',
      'Geschäftsreisen',
      'Personal Pendeldienst',
      'Kundentransfer',
    ],
  },
  {
    title: 'Bus für Hochzeiten',
    content:
      'Buchen Sie einen Bus als Transfer zur Hochzeits-Location für Sie und Ihre Gäste. Zuverlässiger Service für reibungslosen Transfer an Ihrem besonderen Tag.',
    image: '/images/content/bus-fuer-hochzeiten.jpg',
    href: '/service/bus-mieten-hochzeit-wien',
    tags: [
      'Für Hochzeitsgäste',
      'Transfer zur Location',
      'Gemeinsames  Erlebnis',
      'Kostenersparnis',
    ],
  },
];

export const separatorOne: SeparatorItemProps = {
  image: { data: { attributes: { url: '/images/content/phone.jpg' } } },
  headline: 'Attraktive Angebote für Reiseveranstalter.',
  subline: 'Auf Ihre Bedürfnisse abgestimmt.',
  content:
    'Wir bieten Reiseveranstaltern attraktive Konditionen und individuell angepasste Lösungen für regelmäßige Fahrten. Senden Sie uns eifnach eine Anfrage mit Ihrem Wunsch. Wir erledigen den Rest.',
  cta: {
    title: 'Jetzt anfragen',
    url: '/anfrage',
  },
};

export const separatorTwo: SeparatorItemProps = {
  image: { data: { attributes: { url: '/images/content/wald.jpg' } } },
  headline: 'Von A nach Busco.',
  subline: '',
  content:
    'Mieten Sie einen Charter Bus in allen Größen. Vom Mini-Van, Minibus bis zum Reisebus. Bequem, unkompliziert und für jeden Zweck.',
  cta: {
    title: 'Jetzt Bus mieten',
    url: '/service/bus-mieten-wien',
  },
};
