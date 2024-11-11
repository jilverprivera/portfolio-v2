import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { ProjectWithSlug } from "@/interfaces/projects";

type props = {
  project: ProjectWithSlug;
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

export const ProjectCard = ({
  index,
  project,
  progress,
  range,
  targetScale,
}: props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
    smooth: 10,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <main
      ref={container}
      className="h-screen flex justify-center items-center sticky top-0"
    >
      <Link href={`/works/${project.slug}`}>
        <motion.div
          style={{ top: `calc(${index * 24}px)`, scale }}
          className="w-full flex flex-col items-center justify-center relative rounded-xl p-2 origin-top border border-neutral-700 bg-neutral-900"
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="relative col-span-12 rounded-lg overflow-hidden aspect-video">
              <motion.div
                className="flex items-center justify-center rounded-xl overflow-hidden"
                style={{ scale: imageScale }}
              >
                <Image
                  width={1920}
                  height={1080}
                  quality={100}
                  alt={project.slug}
                  src={require(`@/public/images/projects/${project.slug}/cover.webp`)}
                  className="rounded-lg flex items-center justify-center overflow-hidden bg-neutral-700"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 bg-neutral-200/50 backdrop-blur-md w-full px-8 py-4 space-y-2 flex flex-row items-center justify-between text-neutral-950">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {project.title}
                    {project.subTitle && ` - ${project.subTitle}`}
                  </h2>
                  <span className="text-xs">
                    {project.position && (
                      <span className="text-xs">{project.position[0]}</span>
                    )}{" "}
                    / {project.category}
                    {project.company && ` at ${project.company}`}
                  </span>
                </div>
                <ul className="flex flex-row flex-wrap gap-x-4 text-xs">
                  {project.tags
                    ?.sort((a, b) => a.localeCompare(b))
                    .map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="absolute top-4 right-6">
              <span className="relative font-bold text-7xl text-white/10 mix-blend-difference">
                {index + 1 < 10 ? `0${index + 1}` : index}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </main>
  );
};
