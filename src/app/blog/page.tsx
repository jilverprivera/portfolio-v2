import { Card } from "@/components/Card";
import { MainLayout } from "@/components/layout";
import { ArticleWithSlug } from "@/interfaces/articles";
import { getAllArticles } from "@/utils/lib/article";
import { formatDate } from "@/utils/lib/formateDate";

const Article = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <article className="md:grid md:grid-cols-5 md:items-baseline">
      <Card className="md:col-span-4">
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
};

export default async function ArticlePage() {
  const articles = await getAllArticles();
  return (
    <MainLayout
      title="Writing about software development, engineering and sometimes updates on my professional life."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-screen-2xl flex-col space-y-16">
          {articles.filter((el) => el.finished === true).map((article: ArticleWithSlug) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
