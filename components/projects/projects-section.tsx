import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { FrontMatter } from 'interfaces'
import { ProjectCard } from './project-card'

export const Projects = ({ projects }: { projects: FrontMatter[] }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className="max-w-screen-xl w-11/12 mx-auto flex flex-col items-center justify-center">
      <h2 className="text-[7rem] flex uppercase tracking-tighter font-semibold text-neutral-200  relative pr-36">
        <span>Selected projects / </span>
        <span className="text-8xl absolute top-0 -right-0">({projects.length})</span>
      </h2>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.025
        return (
          <ProjectCard
            key={project.slug}
            index={i}
            project={project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
            color={project.color}
            totalProjects={projects.length}
          />
        )
      })}
    </main>
  )
}

