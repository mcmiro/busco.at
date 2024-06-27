'use client';
import { NavItemType } from '@/types/NavItem';
import navigation from '@/constants/navigation';
import Link from 'next/link';
import { UI } from '../index';
import useScroll from '@/hooks/use-scroll';
//import MenuMob from './menu-mob';

export default function Navbar() {
  const { scrolled } = useScroll();

  return (
    <div className="fixed left-[50%] translate-x-[-50%] h-24 w-full px-6 z-40">
      {/*<MenuMob />*/}
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`px-6 py-4 rounded-xl transition-all duration-500 container ${
            scrolled
              ? ' bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 '
              : 'bg-white'
          }`}
        >
          <nav className="flex items-center justify-between h-full">
            <div className="flex items-center justify-center px-4 h-[32px]">
              <UI.Logo />
            </div>
            <div className="hidden md:flex gap-12">
              {navigation.map((el: NavItemType, index: number) => (
                <Link
                  href={el.url}
                  key={index}
                  className="text-[16px] font-semibold hover:opacity-70 transition-all duration-200 text-foreground"
                >
                  {el.title}
                </Link>
              ))}
            </div>
            <div className={`flex items-center justify-center px-4 h-full`}>
              <UI.Button variant={'secondary'}>Bus mieten</UI.Button>
              <div className="flex md:hidden flex-col items-center justify-center focus:outline-none focus:shadow-outline cursor-pointer">
                <div className="w-10 h-[1px] bg-black mb-3"></div>
                <div className="w-10 h-[1px] bg-black"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
