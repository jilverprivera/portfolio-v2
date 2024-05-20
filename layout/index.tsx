import { Fragment, useRef } from 'react'
import { motion } from 'framer-motion'
import { SEO } from 'utils/seo'
import type { ILayout } from 'interfaces'

export const Layout = ({ children, metadata }: ILayout) => {
  const { title, description, slug, date } = metadata
  const targetRef = useRef<HTMLDivElement | null>(null)

  return (
    <Fragment>
      <SEO title={title} description={description} slug={slug} date={date} />
      <motion.main
        ref={targetRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.main>
    </Fragment>
  )
}

