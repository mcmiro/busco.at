import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import themeSettings from '@/lib/theme-settings';

const useThemeToggler = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const pathname = usePathname();

  const handleTheme = () => {
    themeSettings.map((setting: { page: string; theme: string }) => {
      if (pathname === setting.page) {
        setCurrentTheme(setting.theme);
      }
    });
  };

  useEffect(() => {
    handleTheme();
  }, [pathname]);

  return { currentTheme, pathname };
};

export default useThemeToggler;
