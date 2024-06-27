import { UI } from '../index';
import prices from '@/constants/prices';

export function PriceTable() {
  return (
    <div>
      <UI.Typography size={'h3'} weight={'bold'} className="text-center">
        Preise
      </UI.Typography>
      <UI.Typography size={'h5'} className="mt-2 mb-8 text-center">
        Lorem ipsum sit dolor a sit
      </UI.Typography>
      <UI.Table>
        <UI.TableCaption>
          Alle Preise verstehen sich inkl. 20% MWSt.
        </UI.TableCaption>
        <UI.TableHeader>
          <UI.TableRow>
            <UI.TableHead>Fahrzeug</UI.TableHead>
            <UI.TableHead>Personen</UI.TableHead>
            <UI.TableHead>Preis pro km</UI.TableHead>
            <UI.TableHead className="text-right">Preis pro Stunde</UI.TableHead>
          </UI.TableRow>
        </UI.TableHeader>
        <UI.TableBody>
          {prices.map((price) => (
            <UI.TableRow key={price.vehicle}>
              <UI.TableCell className="font-medium">
                {price.vehicle}
              </UI.TableCell>
              <UI.TableCell>{price.persons}</UI.TableCell>
              <UI.TableCell>{price.priceDistance}</UI.TableCell>
              <UI.TableCell className="text-right">
                {price.priceHour}
              </UI.TableCell>
            </UI.TableRow>
          ))}
        </UI.TableBody>
      </UI.Table>
    </div>
  );
}
