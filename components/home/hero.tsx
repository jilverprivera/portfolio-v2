import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75])

  return (
    <motion.section
      ref={targetRef}
      style={{ scale, opacity }}
      className="relative min-h-screen w-full flex items-start justify-center"
    >
      <div className="max-w-screen-xl w-11/12 my-36 h-full mx-auto text-neutral-500">
        <h3 className="text-xl mb-6 font-medium">Who I am?</h3>
        <p className="text-8xl font-medium leading-none">
          <span className="text-neutral-50">Software developer</span> +<br />
          <span className="text-neutral-50">Electronics engineer</span> with +3 years of experience coding <br /> 0 to 1
          complete digital solutions.
        </p>
      </div>

      <p className="uppercase absolute bottom-8 left-1/2 -translate-x-1/2 font-bold text-neutral-500">
        Last updated on may 19, 2024
      </p>
    </motion.section>
  )
}

