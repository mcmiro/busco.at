'use client';
import useScroll from '@/hooks/use-scroll';
import { UI } from '../index';

export type ScrollToProps = {
  price: number;
  title: string;
};

function ScrollTo({ price, title }: ScrollToProps) {
  const { scrolled, scrollToTop } = useScroll();

  return (
    <div
      className={`fixed right-4 z-50 transition-all ease-in-out duration-1000 ${
        scrolled ? 'bottom-4' : 'bottom-[-120px]'
      }`}
    >
      <div className="flex items-center gap-4 border border-primary/[.25] rounded-full h-[50px] pl-6 pr-[5px] bg-white">
        <div className="font-semibold text-sm pr-4 cursor-pointer text-[#201f19]">
          <p>{title}</p>
          <p></p>
        </div>
        <UI.Button className="rounded-full" onClick={scrollToTop}>
          <var className="not-italic">€{price},-</var>{' '}
          <span className="pl-3">Jetzt buchen</span>
        </UI.Button>
      </div>
    </div>
  );
}

export default ScrollTo;
