'use client';
import { NavItemType } from '@/types/NavItem';
import navigation from '@/constants/navigation';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Logo from '../ui/logo';
import X from '@/public/elements/close.svg';
import Image from 'next/image';

export type MenbuMobProps = {
  onClick: (e?: any) => void;
};

export default function MenuMob({ onClick }: MenbuMobProps) {
  const [menuItems, setMenuItems] = useState<NavItemType[]>(navigation);

  const handleSubMenu = (index: number) => {
    const updatedMenu = menuItems.map(
      (item: NavItemType, itemIndex: number) => {
        if (item.dropdown) {
          return {
            ...item,
            isOpen: index === itemIndex ? !item.isOpen : false,
          };
        }
        return item;
      }
    );
    setMenuItems(updatedMenu);
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-background">
      <div className="px-2">
        <div className="flex flex-row items-center w-full justify-between focus:outline-none focus:shadow-outline cursor-pointer mt-4 p-4 bg-white rounded-lg">
          <div className="flex items-center justify-center h-[32px]">
            <Logo />
          </div>
          <Image
            src={X}
            alt="Close Menu"
            className="w-8 h-8"
            onClick={onClick}
          />
        </div>
      </div>
      <nav className="px-4 py-8">
        <div className="flex flex-col w-full">
          {menuItems.map((el: NavItemType, index: number) =>
            el.dropdown?.length ? (
              <div key={index}>
                <div
                  onClick={() => handleSubMenu(index)}
                  className="flex items-center gap-4 text-xl py-2"
                >
                  {el.title}
                  {el.dropdown && (
                    <ChevronDown
                      className={`${
                        el.isOpen ? '-rotate-90' : 'rotate-0'
                      } transform transition-all duration-300`}
                    />
                  )}
                </div>
                {el.isOpen && (
                  <ul className="pl-2">
                    {el.dropdown.map(
                      (navItem: NavItemType, indexKey: number) => (
                        <li key={indexKey} className="pb-4">
                          {navItem.title}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={el.url}
                key={index}
                className="flex items-center gap-4 text-xl py-2"
              >
                {el.title}
              </Link>
            )
          )}
        </div>
        <div className={`flex items-center justify-center px-4 h-full`}></div>
      </nav>
    </div>
  );
}
