import Bus from '@/public/vehicles/bus.png';
import MiniBus from '@/public/vehicles/mini-bus.png';
import MiniVan from '@/public/vehicles/van.png';

const vehicles: { name: string; description: string; image: any }[] = [
  { name: 'Mini Van', description: 'Bis 8 Personen', image: MiniVan },
  { name: 'Mini Bus', description: 'Bis 20 Personen', image: MiniBus },
  { name: 'Bus', description: 'Bis 50 Personen', image: Bus },
];

export default vehicles;
