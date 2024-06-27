'use client';
import { NavItemType } from '@/types/NavItem';
import navigation from '@/constants/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import useThemeToggler from '@/hooks/use-theme-toggler';
import { useEffect } from 'react';

export default function MenuMob() {
  const { setTheme } = useTheme();
  const { currentTheme } = useThemeToggler();

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div className="fixed z-30 top-0 left-0 w-full h-full bg-background">
      <div className="flex flex-col items-center justify-center focus:outline-none focus:shadow-outline cursor-pointer bg-red-500">
        <div className="w-10 h-[1px] bg-black rotate-[-45deg]"></div>
        <div className="w-10 h-[1px] bg-black rotate-45"></div>
      </div>
      <nav className="flex items-center px-4 py-8">
        <div className="flex flex-col divide-y divide-foreground w-full">
          {navigation.map((el: NavItemType, index: number) => (
            <Link href={el.url} key={index} className="text-4xl py-4">
              {el.title}
            </Link>
          ))}
        </div>
        <div className={`flex items-center justify-center px-4 h-full`}></div>
      </nav>
    </div>
  );
}
