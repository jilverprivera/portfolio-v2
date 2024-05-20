import Link from 'next/link'
import PAGES from 'data/json/pages.json'

export const Navbar = () => {
  return (
    <div className="flex max-w-fit fixed top-8 inset-x-0 mx-auto border border-secondary rounded-full bg-transparent backdrop-blur-md px-8 py-4 space-x-8 z-50">
      {PAGES.map((item, idx: number) => (
        <Link key={idx} href={item.link}>
          <a className="relative text-neutral-400 hover:text-white duration-200 items-center flex text-sm">
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

