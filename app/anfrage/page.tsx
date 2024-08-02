'use client';
import { remark } from 'remark';
import html from 'remark-html';
import { UI } from '@/components/index';
import RequestForm from '@/components/organisms/request-form';
import '@/app/assets/styles/markdown.css';
import { useEffect, useState } from 'react';

export default function Page() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<any>();

  useEffect(() => {
    const fetchContent = async () => {
      const strapiUrl = `${process.env.NEXT_PUBLIC_APOLLO_CLIENT_URL}/api/contact-page?populate=*`;
      const response = await fetch(strapiUrl, {
        next: { revalidate: 10 },
      });

      const { data } = await response.json();
      const pageData = data.attributes;
      const processedContent = await remark()
        .use(html)
        .process(pageData.content);
      const contentHtml = processedContent.toString();
      setTitle(pageData.title);
      setContent(contentHtml);
    };

    fetchContent();
  }, []);

  return (
    <>
      <header className="min-h-24">
        <UI.Navigation />
      </header>
      <main className="max-w-3xl mx-auto mt-8 px-4 ">
        <UI.Typography
          type="h1"
          size="h3"
          weight="bold"
          className="text-center"
        >
          {title}
        </UI.Typography>
        {content && (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="pb-2 pt-4 markdown"
          />
        )}
        <div className="mt-4">
          <RequestForm />
        </div>
      </main>
    </>
  );
}
