export type ColorType = {
  backgroundTag: string;
  textTag: string;
  background: string;
  title: string;
  copy: string;
};

export type PostType = {
  title: string;
  content: string;
  image: string;
  tags?: string[];
  href: string;
};
