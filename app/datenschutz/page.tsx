import { remark } from 'remark';
import html from 'remark-html';
import { UI } from '@/components/index';
import '@/app/assets/styles/markdown.css';

export default async function Page() {
  // API Call
  const strapiUrl = `${process.env.NEXT_APOLLO_CLIENT_URL}/api/terms-and-condition`;
  const response = await fetch(strapiUrl, {
    next: { revalidate: 10 },
  });

  const { data } = await response.json();

  const pageData = data.attributes.content;

  const processedContent = await remark().use(html).process(pageData);
  const contentHtml = processedContent.toString();

  return (
    <>
      <UI.Navbar />
      <main className="pt-32 container mx-auto px-4">
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="pb-2"
        />
      </main>
    </>
  );
}
