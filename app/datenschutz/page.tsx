import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next';
import { UI } from '@/components/index';
import '@/app/assets/styles/markdown.css';

export async function generateMetadata(): Promise<Metadata> {
  const strapiUrl = `${process.env.NEXT_APOLLO_CLIENT_URL}/api/terms-and-condition?populate=*`;
  const response = await fetch(strapiUrl, {
    next: { revalidate: 10 },
  });

  const { data } = await response.json();
  const metaData = data.attributes.seo;
  return {
    title: metaData.title,
    description: metaData.description,
  };
}

export default async function Page() {
  const strapiUrl = `${process.env.NEXT_APOLLO_CLIENT_URL}/api/terms-and-condition`;
  const response = await fetch(strapiUrl, {
    next: { revalidate: 10 },
  });

  const { data } = await response.json();
  const pageData = data.attributes;
  const processedContent = await remark().use(html).process(pageData.content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <UI.Navbar />
      <main className="pt-32 container mx-auto px-4">
        <UI.Typography
          type="h1"
          size="h3"
          weight="bold"
          className="text-center"
        >
          {pageData.title}
        </UI.Typography>
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="pb-2 markdown"
        />
      </main>
    </>
  );
}
