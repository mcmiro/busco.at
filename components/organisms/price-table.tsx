import { UI } from '../index';
import prices from '@/constants/prices';
import { PriceItemType } from '@/types/PriceItem';
import { LifeBuoy } from 'lucide-react';

export type PriceTableContent = {
  subline: string;
  headline: string;
  content: string;
};

export type PriceTableProps = {
  content: PriceTableContent;
  prices?: PriceItemType[];
};

export function PriceTable({ content }: PriceTableProps) {
  return (
    <div>
      {!!content && (
        <div>
          <div className="flex flex-col gap-4 md:max-w-[40%] mx-auto text-center">
            <UI.Typography
              size={'h4'}
              weight={'bold'}
              className="text-secondary"
            >
              {content.subline}
            </UI.Typography>
            <UI.Typography size={'h3'} weight={'bold'}>
              {content.headline}
            </UI.Typography>
          </div>
          <UI.Typography
            size={'h4'}
            textColor={'gray'}
            className="mt-6 md:max-w-[60%] mx-auto text-center"
          >
            {content.content}
          </UI.Typography>
        </div>
      )}

      <UI.Typography size={'h4'} weight={'bold'} className="my-6">
        Preis pro Stunde*
      </UI.Typography>
      <UI.Table>
        <UI.TableHeader>
          <UI.TableRow>
            <UI.TableHead>Fahrzeug</UI.TableHead>
            <UI.TableHead>Personen</UI.TableHead>
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
              <UI.TableCell className="text-right">
                {price.priceHour}
              </UI.TableCell>
            </UI.TableRow>
          ))}
        </UI.TableBody>
      </UI.Table>
      <div className="flex gap-2 rounded-lg bg-gray-100 items-center py-4 mt-16 px-4">
        <LifeBuoy className="text-indigo-700" />
        <div className="flex justify-between items-center w-full">
          <UI.Typography size={'sm'}>
            *Der Kilometerpreis wird angewendet, wenn die Fahrtstrecke mehr als
            100 km in eine Richtung ist und es sich nicht um eine Rundfahrt mit
            langen Wartezeiten handelt. Alle Preisangaben netto, ohne
            Mehrwertsteuer.
          </UI.Typography>
        </div>
      </div>
      <UI.Spacer />
      <UI.Typography size={'h4'} weight={'bold'} className="my-6">
        Preis pro Kilometer*
      </UI.Typography>
      <UI.Table>
        <UI.TableHeader>
          <UI.TableRow>
            <UI.TableHead>Fahrzeug</UI.TableHead>
            <UI.TableHead>Personen</UI.TableHead>
            <UI.TableHead className="text-right">Preis pro km</UI.TableHead>
          </UI.TableRow>
        </UI.TableHeader>
        <UI.TableBody>
          {prices.map((price) => (
            <UI.TableRow key={price.vehicle}>
              <UI.TableCell className="font-medium">
                {price.vehicle}
              </UI.TableCell>
              <UI.TableCell>{price.persons}</UI.TableCell>
              <UI.TableCell className="text-right">
                {price.priceDistance}
              </UI.TableCell>
            </UI.TableRow>
          ))}
        </UI.TableBody>
      </UI.Table>
      <div className="flex gap-2 rounded-lg bg-gray-100 items-center py-4 mt-16 px-4">
        <LifeBuoy className="text-indigo-700" />
        <div className="flex justify-between items-center w-full">
          <UI.Typography size={'sm'}>
            *Der Stundenpreis kommt zum Einsatz, wenn die Dauer der Nutzung
            entscheidend ist, beispielsweise bei Stadtrundfahrten mit wenig
            Kilometern, aber mehreren Wartezeiten an jeweiligen Stops. Alle
            Preisangaben netto, ohne Mehrwertsteuer.
          </UI.Typography>
        </div>
      </div>
    </div>
  );
}
