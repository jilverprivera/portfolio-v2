"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseCircleOutline, IoSunnyOutline } from "react-icons/io5";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

// const ThemeToggle = () => {
//   let { resolvedTheme, setTheme } = useTheme();
//   let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
//   let [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(false);
//   }, []);

//   return (
//     <button
//       type="button"
//       aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
//       className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur transition dark:bg-neutral-800/90 dark:ring-white/10 dark:hover:ring-white/20"
//       onClick={() => setTheme(otherTheme)}
//     >
//       <IoSunnyOutline className="h-6 w-6 stroke-purple-500 transition group-hover:stroke-purple-700 dark:hidden" />
//       <BsMoonStarsFill className="hidden h-6 w-6 fill-neutral-500 stroke-neutral-500 transition dark:block " />
//     </button>
//   );
// };

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  let isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block p-4 transition",
          isActive
            ? "text-primary dark:text-primary"
            : "hover:text-primary dark:hover:text-primary"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-neutral-50/0 via-primary to-neutral-50/0 dark:from-neutral-400/0 dark:via-primary dark:to-neutral-400/0" />
        )}
      </Link>
    </li>
  );
};

const DesktopNavigation = (props: React.ComponentPropsWithRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="fixed top-4 left-1/2 -translate-x-1/2  z-50 flex rounded-full bg-white/90 px-3 text-sm font-medium text-neutral-800 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur dark:bg-neutral-950/90 dark:text-neutral-200 dark:ring-white/10">
        <NavItem href="/">/</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </ul>
    </nav>
  );
};

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block py-2 hover:text-purple-500 border-b-[1px] border-b-neutral-800 dark:border-b-neutral-100/5 hover:border-b-purple-500/5 duration-300"
      >
        {children}
      </Popover.Button>
    </li>
  );
};

const MobileNavigation = (
  props: React.ComponentPropsWithoutRef<typeof Popover>
) => {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-800 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur dark:bg-neutral-800/90 dark:text-neutral-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <FaChevronDown className="ml-3 h-auto w-2 stroke-neutral-50 group-hover:stroke-neutral-700 dark:group-hover:stroke-neutral-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-neutral-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-neutral-900/5 dark:bg-neutral-900 dark:ring-neutral-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <IoCloseCircleOutline className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base text-neutral-800 dark:divide-neutral-100/5 dark:text-neutral-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

const Header = () => {
  return (
    <header className="top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center">
      <DesktopNavigation className="pointer-events-auto hidden md:block" />
      <MobileNavigation className="pointer-events-auto md:hidden" />
    </header>
  );
};

export default Header;
