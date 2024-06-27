import React from 'react';
import HeaderImage from '@/public/images/header-service.jpg';
import Image from 'next/image';
import { UI } from '../index';
import BookingForm from '../organisms/booking-form';

const breadcrumbs = [{ title: 'Busvermietung Wien', url: '/bus-mieten' }];
const benefits = [
  'Bus inklusive Fahrer mieten',
  'Passende Busse für jeden Anlass',
  'Faire Preise, transparent kalkuliert',
];

function HeroHeader() {
  return (
    <div className="relative py-8 md:py-16 px-4 h-full">
      <Image
        src={HeaderImage}
        alt="busco bus"
        layout="cover"
        className="absolute top-0 left-0 z-0"
      />
      <div className="flex md:grid-cols-2 justify-between text-white relative z-20 container mx-auto h-full">
        <div className="flex flex-col gap-24">
          <UI.Breadcrumbs items={breadcrumbs} />
          <div>
            <UI.Typography textColor="white" size="h4">
              Gleich Preis berechnen und Bus Angebot erhalten
            </UI.Typography>
            <UI.Typography
              type="h1"
              textColor="white"
              size="h2"
              weight={'semibold'}
            >
              Bus mieten Wien<br></br>
              Wien - Bad Aussee
            </UI.Typography>
            <UI.List className="mt-8">
              {benefits.map((benefit: string) => (
                <UI.ListItem key={benefit} item={benefit} />
              ))}
            </UI.List>
          </div>
          <div>
            <UI.Rating value={4.4} />
          </div>
        </div>
        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
