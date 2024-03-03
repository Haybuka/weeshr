export type Blogs = {
  id: number;
  date: Date;
  slug: string;
  title: Title;
  author: number;
  yoast_head_json: YoastHeadJSON;
  shortlink: string;
  authors: number[];
};

export type Title = {
  rendered: string;
};

export type YoastHeadJSON = {
  title: string;
  description: string;
  og_url: string;
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
