import Navbar from './navbar';
import { UI } from '../index';
import { HeroHeaderProps } from '@/types/HeroHeader';

export type HeaderProps = {
  content: HeroHeaderProps;
};

export default function Header({ content }: HeaderProps) {
  return (
    <header>
      <Navbar />
      <div className="pt-24">
        <UI.HeroHeader content={content} />
      </div>
    </header>
  );
}
