"use client"

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <motion.div
      ref={targetRef}
      style={{ scale, opacity }}
      className="relative min-h-screen w-full max-w-screen-2xl mx-auto pt-24"
    >
      <h1 className="text-4xl w-5/6 font-bold tracking-tight leading-none text-neutral-800 sm:text-[8.25rem] dark:text-neutral-100">
        Software developer, Electronic engineer, and quick learner.
      </h1>
      <p className="mt-12 w-3/5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        I’m John Doe, a software Engineer and entrepreneur . Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Unde, veniam vel officiis impedit
        et dolorum quasi est labore! Maxime quae magnam mollitia nobis. Aut,
        alias?.
      </p>
    </motion.div>
  );
};

export default Hero;