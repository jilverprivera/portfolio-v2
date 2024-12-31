"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { ProjectCard } from "./projects/Project.card";
import { ProjectWithSlug } from "@/interfaces/projects";

export const Projects = ({ projects }: { projects: ProjectWithSlug[] }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <section
      ref={container}
      className="max-w-screen-2xl w-11/12 mx-auto flex flex-col items-center justify-center"
    >
      <h2 className="text-[10rem] flex uppercase tracking-tighter font-semibold text-neutral-200 relative pr-36">
        <span>Latest projects </span>
        <span className="text-7xl absolute top-10 right-12">
          ({projects.length})
        </span>
      </h2>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.025;
        return (
          <ProjectCard
            key={project.slug}
            index={i}
            project={project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};
