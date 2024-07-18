import Navbar from './navbar';
import { UI } from '../index';
import { HeroHeaderProps } from '@/types/HeroHeader';
import { BreadcrumbType } from '@/types/Breadcrumbs';
import { PriceItemType } from '@/types/PriceItem';
import { RouteType } from '@/types/RouteType';

export type HeaderProps = {
  content: HeroHeaderProps;
  breadCrumbs: BreadcrumbType;
  priceInfo: { prices: { attributes: PriceItemType }[]; routeInfo: RouteType };
};

export default function Header({
  content,
  breadCrumbs,
  priceInfo,
}: HeaderProps) {
  return (
    <header>
      <Navbar />
      <div className="pt-24">
        <UI.HeroSection
          content={content}
          breadCrumbs={breadCrumbs}
          priceInfo={priceInfo}
        />
      </div>
    </header>
  );
}
