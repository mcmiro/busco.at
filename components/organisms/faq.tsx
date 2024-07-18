import { UI } from '../index';
import { FaqType } from '@/types/FaqItem';
import Link from 'next/link';
import { LifeBuoy, ArrowRightCircle } from 'lucide-react';

export type FaqProps = {
  items: FaqType[];
};

export function Faq({ items }: FaqProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <UI.Typography size={'h3'} weight={'bold'} className="text-center">
        FAQ
      </UI.Typography>
      <UI.Typography size={'h5'} className="mt-2 mb-8 text-center">
        Antworten auf die häufig gestellten Fragen unserer Kunden.
      </UI.Typography>
      <UI.Accordion type="single" collapsible defaultValue={`item-0`}>
        {items.map((faq: FaqType, index: number) => (
          <UI.AccordionItem value={`item-${index}`} key={index}>
            <UI.AccordionTrigger>
              <UI.Typography size={'h5'} weight={'bold'} className="text-left">
                {faq.question}
              </UI.Typography>
            </UI.AccordionTrigger>
            <UI.AccordionContent>
              <UI.Typography className="text-[16px]">
                {faq.answer}
              </UI.Typography>
            </UI.AccordionContent>
          </UI.AccordionItem>
        ))}
      </UI.Accordion>
      <div className="flex gap-2 rounded-lg bg-white items-center py-4 mt-16 px-4">
        <LifeBuoy className="text-indigo-700" />
        <div className="flex justify-between items-center w-full">
          <UI.Typography weight={'semibold'}>
            Ihre Frage nicht dabei? Unser Team hilft gerne weiter.
          </UI.Typography>
          <div className="flex flex-row gap-4 items-center text-indigo-700">
            <Link href="/kontakt" className="font-semibold">
              Kontakt
            </Link>
            <ArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
