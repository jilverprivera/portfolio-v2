import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion'
import { FrontMatter } from 'interfaces'

type props = {
  project: FrontMatter
  index: number
  progress: MotionValue<number>
  range: number[]
  targetScale: number
  color?: string
  totalProjects: number
}

export const ProjectCard = ({ index, project, progress, range, targetScale, totalProjects }: props) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
    smooth: 10
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <main ref={container} className="h-screen flex justify-center items-center sticky top-0">
      <Link href={`/work/${project.slug}`}>
        <a>
          <motion.div
            style={{ top: `calc(-7.5vh + ${index * 16}px)`, scale }}
            className="w-full flex flex-col items-center justify-center relative rounded-xl p-2 origin-top border border-neutral-900 bg-neutral-950"
          >
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 rounded-lg overflow-hidden aspect-video">
                <motion.div
                  className="flex items-center justify-center rounded-xl overflow-hidden"
                  style={{ scale: imageScale }}
                >
                  {project.coverImage && (
                    <Image
                      width={1920}
                      height={1080}
                      src={project.coverImage}
                      alt="image"
                      objectFit="cover"
                      className="rounded-lg flex items-center justify-center overflow-hidden"
                    />
                  )}
                </motion.div>
              </div>
              <div className="col-span-4 space-y-2 flex flex-col items-start justify-between text-neutral-50">
                <div>
                  <span className="text-xs">
                    {project.position && <span className="text-xs">{project.position[0]}</span>} / {project.category}
                    {project.company && ` at ${project.company}`}
                  </span>
                  <h2 className="text-2xl font-semibold">
                    {project.title}
                    {project.subTitle && ` - ${project.subTitle}`}
                  </h2>
                </div>

                <ul className="flex flex-col flex-wrap gap-2 text-sm ">
                  {project.tags
                    ?.sort((a, b) => a.localeCompare(b))
                    .map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                </ul>
                <div className="">
                  <span>Project</span>
                  <span className="relative ml-6 before:absolute before:top-1/2 before:-left-5 before:-translate-y-1/2 before:w-4 before:h-0.5 before:bg-neutral-950 ">
                    {index + 1 < 10 ? `0${index + 1}` : index}/
                    {totalProjects < 10 ? `0${totalProjects}` : totalProjects}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </a>
      </Link>
    </main>
  )
}

