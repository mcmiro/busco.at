import { UI } from '../index';
import { TestimonialType } from '@/types/TestimonialItem';

export type TestimonialsProps = {
  items: TestimonialType[];
};

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <div>
      <UI.Typography size={'h3'} weight={'bold'} className="text-center">
        Unsere Kunden
      </UI.Typography>
      <UI.Typography size={'h5'} className="mt-2 mb-8 text-center">
        Unsere Kunden mieten Busse häufig für Ziele
      </UI.Typography>
      <UI.Carousel className="w-full max-w-5xl mx-auto">
        <UI.CarouselContent>
          {items.map((item: TestimonialType, index: number) => (
            <UI.CarouselItem key={index}>
              <div className="p-1">
                <UI.Card>
                  <UI.CardContent className="flex flex-col gap-4 h-64 items-center justify-center p-6 bg-gray-50 shadow-0 text-center">
                    <UI.Typography
                      size={'h4'}
                      className="max-w-[80%] leading-8 !tracking-wider"
                    >
                      {item.content}
                    </UI.Typography>
                    <div className="flex gap-4 items-center">
                      <UI.Typography weight={'bold'} size={'h5'}>
                        {item.author}
                      </UI.Typography>
                      {' / '}
                      <UI.Typography textColor={'gray'} size={'h5'}>
                        {item.company}
                      </UI.Typography>
                    </div>
                  </UI.CardContent>
                </UI.Card>
              </div>
            </UI.CarouselItem>
          ))}
        </UI.CarouselContent>
        <UI.CarouselPrevious />
        <UI.CarouselNext />
      </UI.Carousel>
    </div>
  );
}
