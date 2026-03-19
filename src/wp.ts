export type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  categories: number[];
  date: string;
  modified: string;
};

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
};