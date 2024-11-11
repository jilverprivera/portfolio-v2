"use client";

import { motion } from "framer-motion";
import { ProjectWithSlug } from "@/interfaces/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export const WorkCard = ({
  title,
  subTitle,
  slug,
  category,
  company,
  tags,
  technologies,
}: ProjectWithSlug) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Link
      href={`/works/${slug}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="w-full relative py-12 flex items-center justify-center text-neutral-300 border-t border-neutral-700"
    >
      <span className="absolute top-2 left-2 text-xs">
        {category}
        {company && ` at ${company}`}
      </span>
      <p className="text-7xl mr-4">{title}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className="overflow-hidden flex justify-center w-0 h-64 rounded-md"
      >
        <Image
          src={require(`@/public/images/projects/${slug}/cover.webp`)}
          width={480}
          height={270}
          quality={100}
          alt={slug}
        />
      </motion.div>
      {subTitle && <p className="text-7xl ml-4">{subTitle}</p>}
      <div className="absolute top-2 right-2 text-xs">
        {technologies &&
          `Stack: ${technologies
            .sort((a, b) => a.localeCompare(b))
            .join(", ")}`}
      </div>
    </Link>
  );
};
