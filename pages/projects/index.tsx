import { GetStaticProps, NextPage } from 'next'
import { Layout } from 'layout'
import { PageTitle } from 'components/ui'
import { getAllFilesMetadata } from 'lib/mdx'
import { FrontMatter, PageProps } from 'interfaces'
import { Portfolio } from 'features/portfolio'

export const getStaticProps: GetStaticProps = async () => {
  let data = await getAllFilesMetadata('portfolio')
  data = data
    .filter((el: FrontMatter) => el.finished)
    .sort((a: FrontMatter, b: FrontMatter) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  return { props: { data } }
}

const Projects: NextPage<PageProps> = ({ data }) => {
  return (
    <Layout
      metadata={{
        title: 'Projects – Jilver Pacheco',
        description: 'Software developer + electronic engineer.'
      }}
    >
      <PageTitle
        title="Side Projects"
        // description="Sometimes I post things I've learned that may be of interest to you."
      />
      <Portfolio projects={data} />
    </Layout>
  )
}

export default Projects

