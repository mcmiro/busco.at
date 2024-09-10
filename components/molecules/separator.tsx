import React from 'react';
import Image from 'next/image';
import { UI } from '../index';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type SeparatorItemProps = {
  image: { data: { attributes: { url: string; alternativeText?: string } } };
  headline: string;
  subline: string;
  content: string;
  cta?: { title: string; url: string };
};

export type SeparatorProps = {
  content: SeparatorItemProps;
};

function Separator({ content }: SeparatorProps) {
  return (
    <div className="relative py-8">
      {!!content?.image.data && (
        <Image
          src={content?.image.data.attributes.url}
          alt={
            content?.image.data.attributes.alternativeText
              ? content?.image.data.attributes.alternativeText
              : 'busco Ausflug'
          }
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
      )}
      <div className="text-center relative z-10 max-w-3xl px-4 py-8 lg:py-32 mx-auto">
        {!!content.subline && (
          <UI.Typography
            size={'h4'}
            textColor={'white'}
            weight={'semibold'}
            className="pb-8"
          >
            {content?.subline}
          </UI.Typography>
        )}
        <UI.Typography size={'h1'} textColor={'white'} weight={'bold'}>
          {content?.headline}
        </UI.Typography>
        <UI.Typography size={'h4'} textColor={'white'} className="mt-6 pb-8">
          {content?.content}
        </UI.Typography>

        {!!content?.cta && (
          <Link
            href={content.cta.url}
            className="inline-flex flex-row gap-4 px-12 py-4 rounded-lg bg-black text-white font-semibold tracking-wider"
          >
            {content.cta.title}
            <ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Separator;
