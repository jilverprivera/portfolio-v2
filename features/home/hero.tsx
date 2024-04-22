import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FrontMatter } from 'interfaces'
import PAGES from 'data/json/pages.json'
import NETWORKS from 'data/json/social_networks.json'

export const Hero = ({ works }: { works: FrontMatter[] }) => {
  return (
    <section className="max-w-screen-2xl w-11/12 mx-auto min-h-screen flex items-center justify-center">
      <div className="h-[calc(100vh-96px)] my-12 rounded-2xl border border-primary-variant-1 text-primary-variant-2 grid grid-cols-5 grid-rows-6 overflow-hidden">
        <div className="col-span-2 row-span-3 w-full p-8 border-r border-b border-primary-variant-1">
          <div className="w-16 h-16 border border-primary-variant-1 rounded-2xl">
            {/* Logo */}
          </div>
        </div>

        <div className="col-span-3 row-span-6 grid grid-rows-6 relative border-b border-primary-variant-1">
          <div className="w-full row-span-1 border-b border-primary-variant-1 flex items-center justify-between px-8">
            <div className="flex items-center justify-between space-x-8">
              {PAGES.map(({ link, name }, i) => (
                <Link href={link} key={i}>
                  <a className="text-base hover:text-neutral-200 duration-150">
                    {name}
                  </a>
                </Link>
              ))}
            </div>
            <div>
              <button className=" bg-white text-primary px-8 py-4 rounded-xl">
                Resume
              </button>
            </div>
          </div>

          <div className="w-full row-span-5 grid grid-cols-3 gap-8">
            <div className="w-full p-8 space-y-4">
              <h4 className="uppercase text-lg font-semibold tracking-wider">
                Works
              </h4>
              <ul className="space-y-2">
                {works.map((work) => (
                  <li key={work.slug}>
                    <Link href={`/projects/${work.slug}`}>
                      <a className="flex items-center justify-start space-x-1 hover:text-white duration-200">
                        <MdOutlineKeyboardArrowRight />
                        <span>{work.title}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full p-8 space-y-4">
              <h4 className="uppercase text-lg font-semibold tracking-wider">
                networks
              </h4>
              <ul className="space-y-2">
                {NETWORKS.map((network, i) => (
                  <li key={i}>
                    <a
                      key={i}
                      href={network.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-start space-x-1 hover:text-white duration-200"
                    >
                      <MdOutlineKeyboardArrowRight />
                      <span>{network.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full p-8 space-y-4"></div>
          </div>
        </div>

        <div className="col-span-2 row-span-3  w-full p-8 border-r border-primary-variant-1  space-y-4">
          <div className="w-32 h-32 border border-primary-variant-1 rounded-2xl"></div>

          <h3 className="text-6xl font-tomorrow text-primary-variant-2">
            Hey there!{' '}
          </h3>
          <p className="text-xl font-light leading-relaxed">
            I&apos;m Jilver Pacheco, a software developer & electronic engineer
            passionate about crafting complete digital solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

