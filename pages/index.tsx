import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'layout'
import { Hero } from 'components/home'
import { getAllFilesMetadata } from 'lib/mdx'
import { FrontMatter, ProjectProps } from 'interfaces'
import { Works } from 'components/home/works'
import { Projects } from 'components/projects'

export const getStaticProps: GetStaticProps = async () => {
  let projects = await getAllFilesMetadata('portfolio')
  projects = projects
    .filter((el: FrontMatter) => el.finished)
    .sort((a: FrontMatter, b: FrontMatter) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  return { props: { projects } }
}

const Home: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <Hero />
      <Projects projects={projects} />
      {/* <Works projects={projects} /> */}
    </Layout>
  )
}

export default Home

