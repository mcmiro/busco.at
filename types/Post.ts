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
  imageAlt?: string;
  tags?: string[];
  href: string;
};

export type HorizontalCardType = {
  title: string;
  content: string;
  image: string;
  imageAlt?: string;
  tags?: string[];
  cta: {
    title: string;
    url: string;
  };
};
