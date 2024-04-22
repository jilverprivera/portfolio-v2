import { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Layout } from 'layout'
import { PageTitle } from 'components/ui/shared'
import { PostCard, PostSearch } from 'features/blog'
import { getAllFilesMetadata } from 'lib/mdx'
import { FrontMatter, PageProps } from 'interfaces'

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let data = await getAllFilesMetadata('posts')
  data = data
    .filter((el: FrontMatter) => el.finished)
    .sort(
      (a: FrontMatter, b: FrontMatter) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  return { props: { data } }
}

const Blog: NextPage<PageProps> = ({ data }) => {
  const [searchedArticles, setSearchedArticles] = useState<string>('')
  const filteredPosts = data.filter((post: FrontMatter) =>
    post.title.toLowerCase().includes(searchedArticles.toLowerCase())
  )

  return (
    <Layout
      metadata={{
        title: 'Blog – Jilver Pacheco',
        description: 'Software developer + electronic engineer.'
      }}
    >
      <PageTitle
        title="Blog"
        description="Sometimes I post things I've learned that may be of interest to you."
      />
      <section className="max-w-screen-2xl w-11/12 mx-auto min-h-screen">
        <PostSearch setSearchedArticles={setSearchedArticles} />
        <div className="w-full pb-12 grid grid-cols-4 gap-4">
          {filteredPosts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
          {filteredPosts.length === 0 && (
            <div className="flex  text-white text-lg">
              No results were found.
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Blog

