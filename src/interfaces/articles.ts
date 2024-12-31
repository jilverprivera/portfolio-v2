export interface Article {
  title: string;
  description: string;
  tags: string[];
  date: string;
  readingTime: string;
  finished: boolean;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
