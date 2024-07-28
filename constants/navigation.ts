import { NavItemType } from '@/types/NavItem';

const navigation: NavItemType[] = [
  { title: 'Home', url: '/' },
  {
    title: 'Bus mieten',
    url: '/',
    dropdown: [
      { title: 'Bus mit Fahrer mieten', url: '/service/bus-mieten-wien' },
      { title: 'Bus für Schulklassen', url: '/service/bus-mieten-schulklasse' },
      {
        title: 'Bus für Shuttle-Service',
        url: '/service/shuttle-bus-mieten-wien',
      },
      {
        title: 'Bus für Betriebsfahrten',
        url: '/service/bus-mieten-betriebsfahrten-wien',
      },
      { title: 'Bus für Hochzeiten', url: '/service/bus-mieten-hochzeit-wien' },
    ],
    isOpen: false,
  },
  { title: 'Anfrage', url: '/anfrage' },
  { title: 'Partner werden', url: '/partner-werden' },
];

export default navigation;
