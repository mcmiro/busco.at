export type ColorsType = {
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
  tags: string[];
  href: string;
  colors: ColorsType;
};
