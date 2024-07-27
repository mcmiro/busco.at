export type NavItemType = {
  title: string;
  url: string;
  dropdown?: NavItemType[];
  isOpen?: boolean;
};
