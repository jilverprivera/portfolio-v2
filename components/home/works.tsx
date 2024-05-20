import { motion } from 'framer-motion'
import { FrontMatter } from 'interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const anim = {
  initial: { width: 0 },
  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  },
  closed: { width: 0 }
}

const WorkCard = ({ title, altTitle, coverImage, slug, category, company }: FrontMatter) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Link href={`/work/${slug}`}>
      <a
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className="w-full relative py-4 flex items-center justify-center text-neutral-300 border-t border-neutral-700"
      >
        <span className="absolute top-2 left-2 text-xs">
          {category}
          {company && ` at ${company}`}
        </span>
        <p className="text-7xl mr-4">{title}</p>
        <motion.div
          variants={anim}
          animate={isActive ? 'open' : 'closed'}
          className="overflow-hidden flex justify-center w-0 h-64 rounded-md"
        >
          <Image src={coverImage as string} width={480} height={270} quality={100} objectFit="cover" alt={slug} />
        </motion.div>
        {altTitle && <p className="text-7xl ml-4">{altTitle}</p>}
      </a>
    </Link>
  )
}

export const Works = ({ projects }: { projects: FrontMatter[] }) => {
  return (
    <section className="max-w-screen-xl w-11/12 mx-auto flex flex-col items-start justify-start">
      <h2 className="text-[7rem] flex uppercase tracking-tighter font-semibold text-neutral-200 mb-12 relative pr-36">
        <span>Selected projects / </span>
        <span className="text-8xl absolute top-0 -right-0">({projects.length})</span>
      </h2>
      {projects.map((project) => (
        <WorkCard key={project.slug} {...project} />
      ))}
    </section>
  )
}

