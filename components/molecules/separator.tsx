import React from 'react';
import Image from 'next/image';
import { UI } from '../index';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type SeparatorItemProps = {
  image: { data: { attributes: { url: string } } };
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
    <div className="relative">
      {!!content?.image.data && (
        <Image
          src={content?.image.data.attributes.url}
          alt="busco Ausflug"
          layout="cover"
          width={2000}
          height={1000}
        />
      )}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
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
