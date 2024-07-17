'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { PostType } from '@/types/Post';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import ServiceCard from './service-card';

export type CardSliderProps = {
  posts: PostType[];
};

function CardSlider({ posts }: CardSliderProps) {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={32}
      modules={[Autoplay]}
      effect="slide"
      fadeEffect={{ crossFade: true }}
      speed={300}
      autoplay={{ delay: 4000 }}
      className="h-full"
      loop={true}
    >
      {posts.map((post: PostType, index: number) => {
        return (
          <SwiperSlide key={index}>
            <ServiceCard key={index} post={post} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CardSlider;
