"use client";

import { Suspense, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/lib/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: { title: string; releasedAt: string; image: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-screen items-start overflow-y-auto w-full rounded-lg",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-screen-2xl mx-auto gap-4"
        ref={gridRef}
      >
        <div className="grid gap-4">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <div
                  className="cursor-pointer overflow-hidden group rounded-md"
                  onClick={() => console.log(el.title)}
                >
                  <Image
                    src={el.image}
                    className="w-full aspect-auto rounded-md gap-4 !m-0 !p-0 group-hover:scale-105 duration-150"
                    height="480"
                    width="680"
                    objectFit="cover"
                    alt="thumbnail"
                  />
                </div>
              </Suspense>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Suspense fallback={<div>Loading...</div>}>
                <div
                  className="cursor-pointer overflow-hidden group rounded-md"
                  onClick={() => console.log(el.title)}
                >
                  <Image
                    src={el.image}
                    className="w-full aspect-auto rounded-md gap-4 !m-0 !p-0 group-hover:scale-105 duration-150"
                    height="480"
                    width="680"
                    objectFit="cover"
                    alt="thumbnail"
                  />
                </div>
              </Suspense>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Suspense fallback={<div>Loading...</div>}>
                <div
                  className="cursor-pointer overflow-hidden group rounded-md"
                  onClick={() => console.log(el.title)}
                >
                  <Image
                    src={el.image}
                    className="w-full aspect-auto rounded-md gap-4 !m-0 !p-0 group-hover:scale-105 duration-150"
                    height="480"
                    width="680"
                    objectFit="cover"
                    alt="thumbnail"
                  />
                </div>
              </Suspense>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
