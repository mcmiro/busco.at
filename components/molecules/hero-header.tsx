import React from 'react';
//import HeaderImage from '@/public/images/header-service.jpg';
import Image from 'next/image';
import { UI } from '../index';
import BookingForm from '../organisms/booking-form';
import { HeroHeaderProps } from '@/types/HeroHeader';

const breadcrumbs = [{ title: 'Busvermietung Wien', url: '/bus-mieten' }];

export type HeroProps = {
  content: HeroHeaderProps;
};

function HeroHeader({ content }: HeroProps) {
  return (
    <div className="relative py-8 md:py-16 px-4 h-full">
      <Image
        src={content.image.data.attributes.url}
        alt="busco bus"
        layout="cover"
        width={10000}
        height={100}
        className="absolute top-0 left-0 z-0"
      />
      <div className="flex md:grid-cols-2 justify-between text-white relative z-20 container mx-auto h-full">
        <div className="flex flex-col gap-24">
          <UI.Breadcrumbs items={breadcrumbs} />
          <div>
            <UI.Typography textColor="white" size="h4">
              {content.subline}
            </UI.Typography>
            <UI.Typography
              type="h1"
              textColor="white"
              size="h2"
              weight={'semibold'}
            >
              {content.headline}
            </UI.Typography>
            <UI.List className="mt-8">
              {content.benefits.map((benefit) => (
                <UI.ListItem key={benefit.id} item={benefit.title} />
              ))}
            </UI.List>
          </div>
          <div>
            <UI.Rating value={content.rating} />
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
