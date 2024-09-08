import glob from "fast-glob";
import { Article, ArticleWithSlug } from "@/interfaces/articles";

async function fetchArticle(articleFilename: string): Promise<ArticleWithSlug> {
  let { article } = (await import(`../../app/articles/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };
  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
    ...article,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/articles",
  });
  let articles = await Promise.all(articleFilenames.map(fetchArticle));
  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
