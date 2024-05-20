import type { NextPage } from 'next'
import { Layout } from 'layout'
import { getAllFilesMetadata, getFileBySlug, getFiles } from 'lib/mdx'
import { ISlugProps, FrontMatter, IStaticProps } from 'interfaces'

export async function getStaticPaths() {
  const files = await getFiles('posts')
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: IStaticProps) {
  const { slug } = params
  const posts = await getAllFilesMetadata('posts')
  const postIndex = posts.findIndex((post: FrontMatter) => post.slug === slug)
  const prev = posts[postIndex + 1] || null
  const next = posts[postIndex - 1] || null

  const { source, frontmatter, readingTime } = await getFileBySlug('posts', slug)
  return {
    props: {
      source,
      frontmatter: {
        ...frontmatter
      },
      readingTime,
      prev,
      next
    }
  }
}

const Post: NextPage<ISlugProps> = ({ source, frontmatter, readingTime, prev, next }) => {
  const { publishedAt, title, slug, description, tags } = frontmatter

  return (
    <Layout
      metadata={{
        title: `${title} – Jilver Pacheco`,
        description,
        slug,
        date: publishedAt
      }}
    >
      <section className="max-w-screen-xl mx-auto w-11/12 flex flex-col items-center justify-center pt-32">
        <h1 className="text-6xl text-neutral-300 text-center font-semibold mb-2 leading-tight">{title}</h1>
        {/* <hr className="w-full mt-8 border-t mx-auto" />
        <div className="max-w-screen-lg w-full mx-auto py-8 flex items-center justify-between">
          <div className="flex gap-x-2 mb-2">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="relative first:pl-0 first:before:content-[''] before:content-['-'] before:absolute before:left-0  pl-4 text-base text-neutral-400 lowercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-center text-neutral-400">{readingTime?.text}</span>
        </div>
        <hr className="w-full border-t mx-auto" /> */}
      </section>
      {/* <section className="my-8 mx-auto text-neutral-100 prose  prose-neutral prose-lg max-w-screen-lg">
        <MDXRemote {...source} components={MDXComponents} />
      </section> */}
      {/* <Navigation next={next} prev={prev} typePage={PAGE_TYPE.POST} /> */}
    </Layout>
  )
}

export default Post

