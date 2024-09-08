export interface Article {
  title: string;
  description: string;
  tags: string[];
  date: string;
  readingTime: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
