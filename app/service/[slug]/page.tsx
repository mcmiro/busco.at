import { notFound } from 'next/navigation';
import { UI } from '@/components/index';
import Shape from '@/public/elements/shape.svg';
import Image from 'next/image';
import posts from '@/mocks/posts';
import { PostType } from '@/types/Post';
import { pdpQuery } from '@/lib/queries';
import { pdpQueryParams } from '@/lib/strapi-queries';

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
    <>
      {page.heroSection && <UI.Header content={page.heroSection} />}
      <main>
        <div className="container mx-auto">
          {!!page?.sectionOne && (
            <>
              <UI.Spacer size={'lg'} />
              <div>
                <Image src={Shape} width={64} height={34} alt="Shape Busco" />
              </div>
              <UI.HeadlineContent content={page.sectionOne} />
              <UI.Spacer size={'lg'} />
            </>
          )}
          {page?.enumerationOne.length > 0 && (
            <>
              <UI.Enumeration content={page.enumerationOne} />
              <UI.Spacer size={'lg'} />
            </>
          )}
          {!!page?.sectionTwo && (
            <UI.HeadlineContent content={page.sectionTwo} />
          )}
          <UI.Spacer size={'lg'} />
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
          <UI.Spacer size={'lg'} />
        </div>
        {page?.separatorSectionOne && (
          <UI.Separator content={page.separatorSectionOne} />
        )}
        <div className="container mx-auto">
          {!!page?.sectionThree && (
            <>
              <UI.Spacer size={'lg'} />
              <div>
                <Image src={Shape} width={64} height={34} alt="Logo Busco" />
              </div>
              <UI.HeadlineContent content={page.sectionThree} />
              <UI.Spacer size={'lg'} />
            </>
          )}
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
        {page?.separatorSectionTwo && (
          <UI.Separator content={page.separatorSectionTwo} />
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
              <UI.Spacer size={'lg'} />
            </div>
          )}
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
        {page?.separatorSectionThree && (
          <UI.Separator content={page.separatorSectionThree} />
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
        {!!page.otherBuses && <UI.RelatedLinks content={page.otherBuses} />}
      </main>
    </>
  );
}
