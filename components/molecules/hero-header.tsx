import React from 'react';
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
    <div className="relative py-8 px-4 h-screen">
      <Image
        src={content.image.data.attributes.url}
        alt="busco bus"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
      />
      <div className="lg:grid lg:grid-cols-2 justify-between text-white relative z-20 container mx-auto h-full md:py-16">
        <div className="flex flex-col gap-12 lg:gap-24">
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
          <div className="pb-8">
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
