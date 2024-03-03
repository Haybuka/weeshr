export type Blog = {
  id: number;
  date: string;
  slug: string;
  author: number;
  yoast_head_json: YoastHeadJSON;
  subtitle: string;
  primary_category: PrimaryCategory;
};

export type PrimaryCategory = {
  term_id: number;
  name: string;
  slug: string;
  description: string;
};

export type YoastHeadJSON = {
  title: string;
  description: string;
  og_image: OgImage[];
  author: string;
  twitter_misc: TwitterMisc;
};

export type OgImage = {
  width: number;
  height: number;
  url: string;
  type: string;
};

export type TwitterMisc = {
  'Written by': string;
  'Est. reading time': string;
};
