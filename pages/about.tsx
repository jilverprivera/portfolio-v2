import { Layout } from 'layout'
import { PageTitle } from 'components/ui/shared'
import { Awards, Experience } from 'features/about'

const About = () => {
  return (
    <Layout
      metadata={{
        title: 'Jilver Pacheco',
        description: 'Software developer + electronic engineer'
      }}
    >
      <PageTitle
        title="Hey, I'm Jilver."
        description="I am energized by exploring, creating and always hungry for the unknown. I love being able to provide solutions to personally challenging problems that push me out of my comfort zone."
      />
      <Experience />
      <Awards />
    </Layout>
  )
}

export default About

