import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { UI } from '../index';

export type RatingProps = {
  value: number;
};

function Rating({ value }: RatingProps) {
  const wholeStars = Math.floor(value);
  const halfStars = value - wholeStars;

  const starsLength = new Array(wholeStars).fill(0);

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
      <blockquote className="flex flex-row gap-1">
        {starsLength.map((_, index) => (
          <Star key={index} className="text-yellow-500 h-4" />
        ))}
        {halfStars > 0 && <StarHalf className="text-yellow-500 h-4" />}
      </blockquote>
      <UI.Typography textColor={'white'}>
        Bewertet mit 4,5 Sternen von über 500 Kunden
      </UI.Typography>
    </div>
  );
}

export default Rating;
