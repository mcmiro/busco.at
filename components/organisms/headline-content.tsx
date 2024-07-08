import React from 'react';
import { UI } from '../index';

export type HeadlineContentItem = {
  headline: string;
  content: string;
};

export type HeadlineContentProps = {
  content: HeadlineContentItem;
};

function HeadlineContent({ content }: HeadlineContentProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="mt-6">
        <UI.Typography type="h2" size={'h3'} weight={'bold'}>
          {content.headline}
        </UI.Typography>
      </div>
      <div>
        <UI.Typography size={'h4'} textColor={'gray'} className="mt-6">
          {content.content}
        </UI.Typography>
      </div>
    </div>
  );
}

export default HeadlineContent;
