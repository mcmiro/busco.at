import Navbar from './navbar';
import { UI } from '../index';
import { HeroHeaderProps } from '@/types/HeroHeader';
import { BreadcrumbType } from '@/types/Breadcrumbs';

export type HeaderProps = {
  content: HeroHeaderProps;
  breadCrumbs: BreadcrumbType;
};

export default function Header({ content, breadCrumbs }: HeaderProps) {
  return (
    <header>
      <Navbar />
      <div className="pt-24">
        <UI.HeroHeader content={content} breadCrumbs={breadCrumbs} />
      </div>
    </header>
  );
}
