"use client";

import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { NETWORKS_DATA } from "@/utils/data/data";

export const Footer = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <footer className="w-full py-12">
      <div className="max-w-screen-2xl w-11/12 mx-auto grid grid-cols-2 gap-24">
        <p className="text-7xl text-neutral-300">Find me on</p>
        <div className="grid">
          {NETWORKS_DATA.map((network, i) => (
            <a
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              key={i}
              href={network.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-3xl text-neutral-400 hover:text-neutral-200 duration-200 relative py-12 border-t first:border-t-0 border-neutral-600"
            >
              {network.title}
              {activeIndex === i && (
                <div className="absolute top-2/4 -translate-y-2/4 right-8 text-5xl">
                  <BsArrowUpRight />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

