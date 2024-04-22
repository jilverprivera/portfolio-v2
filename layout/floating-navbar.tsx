import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

type props = {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
}

export const FloatingNav = ({ navItems }: props) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!
      if (scrollYProgress.get() < 0.005) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="flex max-w-fit fixed top-8 inset-x-0 mx-auto border border-primary-variant-1 rounded-full bg-transparent backdrop-blur-md px-8 py-4 space-x-8"
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link key={idx} href={navItem.link}>
            <a className="relative text-primary-variant-2 hover:text-white duration-200 items-center flex text-sm">
              {navItem.name}
            </a>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

