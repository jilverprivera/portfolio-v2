import Link from "next/link";
import { PAGES_DATA } from "@/utils/data/data";

const FloatingNav = () => {
  return (
    <div className="flex max-w-fit fixed top-4 inset-x-0 mx-auto rounded-full bg-transparent backdrop-blur-md px-8 py-4 space-x-8 z-50 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent">
      {PAGES_DATA.map((item, idx: number) => (
        <Link
          key={idx}
          href={item.link}
          className="relative text-neutral-400 hover:text-white duration-200 items-center flex text-sm"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FloatingNav;