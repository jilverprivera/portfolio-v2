import Link from 'next/link'
import { FrontMatter } from 'interfaces'

type props = {
  post: FrontMatter
  index: number
}

export const PostCard = ({
  post: { slug, title, tags, description, readingTime },
  index
}: props) => {
  return (
    <article
      className={`w-full ${
        index === 0 || index % 4 === 0 ? 'col-span-2' : 'col-span-1'
      } group border border-primary-variant-1 rounded-xl p-2`}
    >
      <Link href={`blog/${slug}`}>
        <a className="space-y-4">
          <div className="w-full overflow-hidden rounded-xl">
            <div className="w-full h-72 bg-primary-variant-1 group-hover:scale-105 duration-200"></div>
          </div>

          <div className="w-full space-y-2">
            <div className="flex flex-wrap gap-2">
              {tags
                .sort((a, b) => a.localeCompare(b))
                .map((tag, i) => (
                  <span
                    key={i}
                    className="bg-primary-variant-1 p-1.5 rounded-lg text-xs text-primary-variant-2 group-hover:text-white duration-200"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <h3 className="text-xl font-medium text-primary-variant-2 group-hover:text-white duration-200">
              {title}
            </h3>
            <p className="text-sm text-primary-variant-2 group-hover:text-white group-hover:duration-200 leading-normal h-20">
              {description}
            </p>
            <p className="text-sm text-primary-variant-2 group-hover:text-white duration-200">
              {readingTime?.text}
            </p>
          </div>
        </a>
      </Link>
    </article>
  )
}

