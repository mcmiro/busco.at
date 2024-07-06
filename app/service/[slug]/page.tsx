import { notFound } from 'next/navigation';
import { UI } from '@/components/index';
import Shape from '@/public/elements/shape.svg';
import Image from 'next/image';
import posts from '@/mocks/posts';
import { PostType } from '@/types/Post';
import { pdpQuery } from '@/lib/queries';
import { pdpQueryParams } from '@/lib/strapi-queries';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
        {!!page?.sectionOne && <UI.HeadlineContent content={page.sectionOne} />}
        <UI.Spacer size={'lg'} />
        {page?.enumerationOne.length > 0 && (
          <UI.Enumeration content={page.enumerationOne} />
        )}
        <UI.Spacer size={'lg'} />
        {!!page?.sectionTwo && <UI.HeadlineContent content={page.sectionTwo} />}
        <UI.Spacer size={'lg'} />

        {/* Service Card START */}
        <UI.Spacer size={'lg'} />
        {!!page?.popularDestinations && (
          <div className="text-center">
            <UI.Typography
              size={'h4'}
              weight={'bold'}
              className="text-secondary"
            >
              {page?.popularDestinations.content}
            </UI.Typography>
            <UI.Typography size={'h3'} weight={'bold'}>
              {page?.popularDestinations.headline}
            </UI.Typography>
          </div>
        )}
        <UI.Spacer size={'md'} />
        <div className="flex gap-8">
          {posts.map((post: PostType, index: number) => (
            <UI.ServiceCard key={index} post={post} />
          ))}
        </div>
        <UI.Spacer size={'lg'} />
        {/* Service Card END */}
        <UI.Spacer size={'lg'} />
      </div>
      {page?.spliterSectionOne && (
        <div className="relative">
          <Image
            src={page?.spliterSectionOne?.image.data.attributes.url}
            alt="busco Ausflug"
            layout="cover"
            width={2000}
            height={1000}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
            <UI.Typography size={'h1'} textColor={'white'} weight={'bold'}>
              {page?.spliterSectionOne?.headline}
            </UI.Typography>
            <UI.Typography
              size={'h4'}
              textColor={'white'}
              className="mt-6 pb-8"
            >
              {page?.spliterSectionOne?.content}
            </UI.Typography>

            <Link
              href={page?.spliterSectionOne?.cta.url}
              className="inline-flex flex-row gap-4 px-12 py-4 rounded-lg bg-black text-white font-semibold tracking-wider"
            >
              {page?.spliterSectionOne?.cta.title}
              <ArrowRight />
            </Link>
          </div>
        </div>
      )}
      <UI.Spacer size={'lg'} />
      <div className="container mx-auto">
        <div>
          <Image src={Shape} width={64} height={34} alt="Shape Busco" />
        </div>
        {!!page?.sectionThree && (
          <UI.HeadlineContent content={page.sectionThree} />
        )}
        <UI.Spacer size={'lg'} />
        <div className="container mx-auto">
          {page?.enumerationTwo.length > 0 && (
            <UI.Enumeration content={page.enumerationTwo} />
          )}
          <UI.Spacer size={'lg'} />
        </div>
      </div>
      <div className="bg-white">
        <UI.Spacer size={'lg'} />
        <div className="container">
          <UI.PriceTable content={page.priceSection} />
        </div>
        <UI.Spacer size={'lg'} />
      </div>
      {page?.spliterSectionTwo && (
        <div className="relative">
          <Image
            src={page?.spliterSectionTwo?.image.data.attributes.url}
            alt="busco Ausflug"
            layout="cover"
            width={2000}
            height={1000}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
            <UI.Typography size={'h1'} textColor={'white'} weight={'bold'}>
              {page?.spliterSectionTwo?.headline}
            </UI.Typography>
            <UI.Typography
              size={'h4'}
              textColor={'white'}
              className="mt-6 pb-8"
            >
              {page?.spliterSectionTwo?.content}
            </UI.Typography>

            <Link
              href={page?.spliterSectionTwo?.cta.url}
              className="inline-flex flex-row gap-4 px-12 py-4 rounded-lg bg-black text-white font-semibold tracking-wider"
            >
              {page?.spliterSectionTwo?.cta.title}
              <ArrowRight />
            </Link>
          </div>
        </div>
      )}
      <UI.Spacer size={'lg'} />
      <div className="container mx-auto">
        {!!page?.sectionFour && (
          <UI.HeadlineContent content={page.sectionFour} />
        )}
        <UI.Spacer size={'lg'} />
        {!!page?.dailyRoutes && (
          <div className="text-center">
            <UI.Typography
              size={'h4'}
              weight={'bold'}
              className="text-secondary"
            >
              {page?.dailyRoutes.subline}
            </UI.Typography>
            <UI.Typography size={'h3'} weight={'bold'}>
              {page?.dailyRoutes.headline}
            </UI.Typography>
            <UI.Typography
              size={'h4'}
              textColor={'gray'}
              className="mt-6 md:max-w-[60%] mx-auto text-center"
            >
              {page?.dailyRoutes.content}
            </UI.Typography>
          </div>
        )}
        <UI.Spacer size={'lg'} />
        {/* Service Card START */}
        <div className="container mx-auto">
          <div className="flex gap-8">
            {posts.map((post: PostType, index: number) => (
              <UI.ServiceCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
      <UI.Spacer size={'lg'} />
      {/* Service Card END */}
      {page?.spliterThree && (
        <div className="relative">
          <Image
            src={page?.spliterThree?.image.data.attributes.url}
            alt="busco Ausflug"
            layout="cover"
            width={2000}
            height={1000}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
            <UI.Typography size={'h1'} textColor={'white'} weight={'bold'}>
              {page?.spliterThree?.headline}
            </UI.Typography>
            <UI.Typography
              size={'h4'}
              textColor={'white'}
              className="mt-6 pb-8"
            >
              {page?.spliterThree?.content}
            </UI.Typography>

            <Link
              href={page?.spliterThree?.cta.url}
              className="inline-flex flex-row gap-4 px-12 py-4 rounded-lg bg-black text-white font-semibold tracking-wider"
            >
              {page?.spliterThree?.cta.title}
              <ArrowRight />
            </Link>
          </div>
        </div>
      )}
      <UI.Spacer size={'lg'} />
      <div className="container mx-auto">
        {testimonials.length > 0 && <UI.Testimonials items={testimonials} />}
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
