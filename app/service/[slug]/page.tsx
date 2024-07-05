//import dynamic from 'next/dynamic';
//import ServiceDetailView from '@/components/molecules/service-detail-view';
import { notFound } from 'next/navigation';
import { UI } from '@/components/index';
import Shape from '@/public/elements/shape.svg';
import Way from '@/public/elements/way.jpg';
import Phone from '@/public/elements/phone.jpg';
import Image from 'next/image';
import posts from '@/mocks/posts';
import { PostType } from '@/types/Post';
import { pdpQuery } from '@/lib/queries';
import { pdpQueryParams } from '@/lib/strapi-queries';

//const Comments = dynamic(() => import('@/components/organisms/comments'), {
//  ssr: false,
//});

export type BlogDetailProps = {
  id: string;
};

export async function generateStaticParams() {
  const pages = await fetch(`${process.env.NEXT_APOLLO_CLIENT_URL}/api/pdps`, {
    next: { revalidate: 10 },
  });

  const urls = await pages.json();
  const slugs = urls.data.map(
    (url: { attributes: { slug: string } }) => url.attributes.slug
  );

  return slugs;
}

export default async function Page({ params }: { params: { slug: string } }) {
  // GraphQL API Call
  const response = await fetch(
    `${process.env.NEXT_APOLLO_CLIENT_URL}/graphql?query=${encodeURIComponent(
      pdpQuery
    )}`,
    {
      next: { revalidate: 10 },
    }
  );
  const { data } = await response.json();

  // extract graphql objects to sections
  const faqs = data?.faqs?.data.map(
    (faq: { attributes: { question: string; answer: string } }) =>
      faq.attributes
  );

  const testimonials = data?.testimonials?.data.map(
    (testimonial: {
      attributes: { content: string; author: string; company: string };
    }) => testimonial.attributes
  );

  // PDP separated API Call (because graphql strapi plugin has a bug for filters: https://github.com/strapi/strapi/issues/19972)
  const urlParams = new URLSearchParams(pdpQueryParams);
  urlParams.append('filters[slug][$eq]', params.slug);

  const strapiUrl = `${process.env.NEXT_APOLLO_CLIENT_URL}/api/pdps?${urlParams}`;
  const pdpData = await fetch(strapiUrl, {
    next: { revalidate: 10 },
  });

  const pageData = await pdpData.json();
  // redirect to 404 if no data
  if (!pageData.data[0]) {
    return notFound();
  }

  const page = pageData.data[0].attributes;

  return (
    <div>
      {page.heroSection && <UI.Header content={page.heroSection} />}
      <div className="container mx-auto">
        <UI.Spacer size={'lg'} />
        <div>
          <Image src={Shape} width={64} height={34} alt="Shape Busco" />
        </div>
        {page?.sectionOne && <UI.HeadlineContent content={page.sectionOne} />}
        <UI.Spacer size={'lg'} />
        {page?.enumerationOne.length && (
          <UI.Enumeration content={page.enumerationOne} />
        )}
        <UI.Spacer size={'lg'} />
        {page?.sectionTwo && <UI.HeadlineContent content={page.sectionTwo} />}
        {/* Service Card START */}
        <UI.Spacer size={'lg'} />
        <div className="flex gap-8">
          {posts.map((post: PostType, index: number) => (
            <UI.ServiceCard key={index} post={post} />
          ))}
        </div>
        <UI.Spacer size={'lg'} />
        {/* Service Card END */}
        <UI.Spacer size={'lg'} />
        <div>
          <Image src={Shape} width={64} height={34} alt="Shape Busco" />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="mt-6">
            {/*<ServiceDetailView post={post} />*/}
            <UI.Typography type="h2" size={'h3'} weight={'bold'}>
              Bus mit Fahrer mieten: mit Busco so einfach wie noch nie.
            </UI.Typography>
          </div>
          <div>
            <UI.Typography size={'h4'} textColor={'gray'} className="mt-6">
              Lorem gipsym sit gladan. Lorem gipsym sit gladan. Lorem gipsym sit
              gladan. Lorem gipsym sit gladan. Lorem gipsym sit gladan. Lorem
              gipsym sit gladan. Lorem gipsym sit gladan. Lorem gipsym sit
              gladan.
            </UI.Typography>
          </div>
        </div>
        <UI.Spacer size={'lg'} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-xl px-10 py-12 text-center">
          <div>
            <UI.Typography size={'h4'} weight={'bold'}>
              Ziel & Datum eingeben
            </UI.Typography>
            <UI.Typography size={'h5'} textColor={'gray'} className="mt-4">
              Egal ob Mini-Van, Minibus oder Reisebus. In jedem Fahrzeug sorgen
              wir für höchste Hygienestandards
            </UI.Typography>
            <UI.Typography size={'h3'} weight={'bold'} className="mt-4">
              1.
            </UI.Typography>
          </div>
          <div className="border-x border-gray-300 px-2">
            <UI.Typography size={'h4'} weight={'bold'}>
              Preis berechnen
            </UI.Typography>
            <UI.Typography size={'h5'} textColor={'gray'} className="mt-4">
              Egal ob Mini-Van, Minibus oder Reisebus. In jedem Fahrzeug sorgen
              wir für höchste Hygienestandards
            </UI.Typography>
            <UI.Typography size={'h3'} weight={'bold'} className="mt-4">
              2.
            </UI.Typography>
          </div>
          <div>
            <UI.Typography size={'h4'} weight={'bold'}>
              Unverbindlich Angebot anfordern
            </UI.Typography>
            <UI.Typography size={'h5'} textColor={'gray'} className="mt-4">
              Egal ob Mini-Van, Minibus oder Reisebus. In jedem Fahrzeug sorgen
              wir für höchste Hygienestandards
            </UI.Typography>
            <UI.Typography size={'h3'} weight={'bold'} className="mt-4">
              3.
            </UI.Typography>
          </div>
        </div>
        <UI.Spacer size={'lg'} />
        <UI.Spacer size={'lg'} />
        <div className="grid grid-cols-2 gap-8">
          <div className="mt-6">
            <UI.Typography type="h2" size={'h3'} weight={'bold'}>
              Beliebteste Runfahrten unsere Kunden.
            </UI.Typography>
          </div>
          <div>
            <UI.Typography size={'h4'} textColor={'gray'} className="mt-6">
              Mieten Sie einen Reisebus mit Fahrer für verschiedene Gruppen.
              Bequem, transparent und unkompliziert. Mieten Sie einen Reisebus
              mit Fahrer für verschiedene Gruppen. Bequem, transparent und
              unkompliziert.
            </UI.Typography>
          </div>
        </div>
      </div>
      <UI.Spacer size={'lg'} />
      <div className="relative">
        <Image src={Way} alt="Autobahn von oben" />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
          <UI.Typography size={'h1'} textColor={'white'} weight={'bold'}>
            Von <span className="underline">A</span> nach{' '}
            <span className="underline">B</span>usco.
          </UI.Typography>
          <UI.Typography size={'h4'} textColor={'white'} className="mt-6">
            Mieten Sie einen Reisebus mit Fahrer für verschiedene Gruppen.
            Bequem, transparent und unkompliziert.
          </UI.Typography>
        </div>
      </div>
      <UI.Spacer size={'lg'} />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="mt-6">
            <UI.Typography type="h2" size={'h3'} weight={'bold'}>
              Beliebte Ziele <br></br>
              Tagesfahrten Kunden.
            </UI.Typography>
          </div>
          <div>
            <UI.Typography size={'h4'} textColor={'gray'} className="mt-6">
              Mieten Sie einen Reisebus mit Fahrer für verschiedene Gruppen.
              Bequem, transparent und unkompliziert. Mieten Sie einen Reisebus
              mit Fahrer für verschiedene Gruppen. Bequem, transparent und
              unkompliziert.
            </UI.Typography>
          </div>
        </div>
      </div>
      <UI.Spacer size={'lg'} />
      {/* Service Card START */}
      <UI.Spacer size={'lg'} />
      <div className="container mx-auto">
        <div className="flex gap-8">
          {posts.map((post: PostType, index: number) => (
            <UI.ServiceCard key={index} post={post} />
          ))}
        </div>
      </div>
      <UI.Spacer size={'lg'} />
      {/* Service Card END */}
      <div className="flex items-center justify-center relative">
        <Image
          src={Phone}
          layout="cover"
          alt="User mit dem Handy in der Hand, dass Navigations App hat."
          className="h-full absolute"
        />
        <div className="text-center relative z-20 py-16 md:py-32">
          <UI.Typography size={'h5'} textColor={'white'}>
            Von der Idee bis zur Umsetzung.
          </UI.Typography>
          <UI.Typography
            size={'h1'}
            textColor={'white'}
            weight={'bold'}
            className="mt-6"
          >
            Spezielle Angebote <br></br>
            für Reiseveranstalter.
          </UI.Typography>
          <UI.Typography size={'h4'} textColor={'white'} className="mt-2">
            Mieten Sie einen Reisebus mit Fahrer für verschiedene Gruppen.
            Bequem, transparent und unkompliziert.
          </UI.Typography>
          <UI.Button size={'lg'} className="mt-12">
            Mehr erfahren
          </UI.Button>
        </div>
      </div>
      <div className="bg-white">
        <UI.Spacer size={'lg'} />
        <div className="container mx-auto ">
          <UI.PriceTable />
        </div>
        <UI.Spacer size={'lg'} />
        <UI.Spacer size={'lg'} />
        {testimonials.length > 0 && <UI.Testimonials items={testimonials} />}
        <UI.Spacer size={'lg'} />
      </div>
      <div className="bg">
        <UI.Spacer size={'lg'} />
        {faqs.length > 0 && <UI.Faq items={faqs} />}
      </div>
      <UI.Spacer size={'lg'} />
      <UI.RelatedLinks />
    </div>
  );
}
