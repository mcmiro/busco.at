import React from 'react';
import { PostType } from '@/types/Post';
import Image from 'next/image';
import { UI } from '../index';

export type ServiceCardProps = {
  post: PostType;
};

function ServiceCard({ post }: ServiceCardProps) {
  return (
    <article className="flex flex-col items-start">
      <div
        className={`flex flex-col gap-4 w-full rounded-xl p-6 pb-10`}
        style={{ backgroundColor: post.colors.background }}
      >
        <div className="flex flex-wrap gap-2">
          {post.tags.length &&
            post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="rounded-full text-sm px-2 py-0.5 whitespace-nowrap"
                style={{
                  color: post.colors.textTag,
                  backgroundColor: post.colors.backgroundTag,
                }}
              >
                {tag}
              </span>
            ))}
        </div>
        <div>
          <div className="group relative">
            <a href={post.href}>
              <UI.Typography
                weight={'semibold'}
                size={'h4'}
                style={{ color: post.colors.title }}
              >
                {post.title}
              </UI.Typography>
            </a>
          </div>
        </div>
        <div className="relative flex items-center gap-x-4">
          <div
            className="text-sm leading-6 text-green-50"
            style={{ color: post.colors.copy }}
          >
            <UI.Typography
              style={{ color: post.colors.copy }}
              className="text-[16px]"
            >
              {post.content}
            </UI.Typography>
          </div>
        </div>
      </div>
      <div className="relative w-full aspect-square -mt-6">
        <Image
          src={post.image}
          alt={post.title}
          fill
          layout="cover"
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
    </article>
  );
}

export default ServiceCard;
