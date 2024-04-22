import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import rehypeHighlight from 'rehype-highlight'
import path from 'path'
import fs from 'fs'
import { FrontMatter } from 'interfaces'

const root = process.cwd()

export const getFiles = async (type: string) => {
  return fs.readdirSync(path.join(root, 'data', type))
}

export const getFileBySlug = async (type: string, slug: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'data', type, `${slug}.mdx`),
    'utf8'
  )
  const { data, content } = matter(mdxSource)
  const source = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] }
  })
  return {
    source,
    frontmatter: { slug, ...data },
    readingTime: readingTime(content)
  }
}

export const getAllFilesMetadata = async (type: string) => {
  const files = await getFiles(type)
  const filesToReturn = files.reduce((accFiles: any, slug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'data', type, slug),
      'utf8'
    )
    const { data, content } = matter(mdxSource)
    return [
      {
        ...data,
        slug: slug.replace('.mdx', ''),
        readingTime: readingTime(content)
      },
      ...accFiles
    ]
  }, [])
  return filesToReturn.sort(
    (a: FrontMatter, b: FrontMatter) =>
      Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )
}

