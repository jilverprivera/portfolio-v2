import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { FrontMatter, PAGE_TYPE } from 'interfaces'

type props = {
  next: FrontMatter | undefined
  prev: FrontMatter | undefined
  typePage: PAGE_TYPE
}

export const Navigation = ({ next, prev, typePage }: props) => {
  return (
    <div className="max-w-screen-3xl mx-auto w-11/12 grid grid-cols-2 gap 12 pb-12">
      <div className="w-full flex items-center justify-start">
        {next != null && (
          <Link
            href={
              typePage === PAGE_TYPE.POST
                ? `/blog/${next.slug}`
                : `/projects/${next.slug}`
            }
          >
            <a className="flex items-start justify-center text-left flex-col  text-neutral-500 hover:text-neutral-300 duration-200">
              <div className="space-y-2  flex flex-col items-end">
                <p className="text-sm text-left ">Previous project</p>
                <p className="flex items-center justify-center text-left">
                  <span className="text-7xl ml-2">
                    <MdArrowBackIos />
                  </span>
                  <span className="text-5xl">{next.title}</span>
                </p>
              </div>
            </a>
          </Link>
        )}
      </div>

      <div className="w-full flex items-center justify-end">
        {prev != null && (
          <Link
            href={
              typePage === PAGE_TYPE.POST
                ? `/blog/${prev.slug}`
                : `/projects/${prev.slug}`
            }
          >
            <a className=" flex items-end justify-center text-left flex-col text-neutral-500 hover:text-neutral-300 duration-200">
              <div className="space-y-2">
                <p className="text-sm text-left ">Next project</p>
                <p className="flex items-center justify-center text-left">
                  <span className="text-5xl">{prev.title}</span>
                  <span className="text-7xl ml-2">
                    <MdArrowForwardIos />
                  </span>
                </p>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

