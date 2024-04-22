import Image from 'next/image'
import { FaDownload, FaGithub, FaGlobe } from 'react-icons/fa'
import { FrontMatter } from 'interfaces'

export const ProjectHero = ({
  coverImage,
  category,
  collaborators,
  technologies,
  tags,
  title,
  subTitle,
  position,
  company,
  githubUrl,
  url,
  downloadUrl,
  slug
}: FrontMatter) => {
  return (
    <section
      id="hero"
      className="max-w-screen-3xl w-11/12 mx-auto pt-48 text-neutral-300 space-y-12 mb-24"
    >
      <div className="space-y-12 max-w-screen-3xl w-full mx-auto">
        <div className="space-y-2">
          <p className="text-sm">
            {category}
            {company && <span className="font-medium"> at {company}</span>}
          </p>
          <h1 className="text-6xl font-semibold leading-snug">
            {title}
            {subTitle && ` - ${subTitle}`}
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {position && (
            <div className="space-y-2">
              <h3 className="text-sm text-neutral-300">Role</h3>
              <ul>
                {position?.map((role, i) => (
                  <li key={i} className="font-medium">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {collaborators && (
            <div className="space-y-2 px-4  border-l border-neutral-800">
              <h3 className="text-sm text-neutral-200">Collaborators</h3>
              <div className="gap-2 flex flex-wrap">
                {collaborators
                  .sort((a, b) => a.localeCompare(b))
                  .map((collaborator, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium bg-neutral-800 p-1.5 rounded-xl"
                    >
                      {collaborator}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {technologies && (
            <div className="space-y-2 px-4  border-l border-neutral-800">
              <h3 className="text-sm text-neutral-200">Technologies</h3>
              <div className="gap-2 flex flex-wrap">
                {technologies
                  .sort((a, b) => a.localeCompare(b))
                  .map((technology, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium bg-neutral-800 p-1.5 rounded-xl"
                    >
                      {technology}
                    </span>
                  ))}
              </div>
            </div>
          )}

          <div className="space-y-2 px-4  border-l border-neutral-800">
            <h3 className="text-sm text-neutral-200">Tags</h3>
            <div className="gap-2 flex flex-wrap">
              {tags
                .sort((a, b) => a.localeCompare(b))
                .map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium bg-neutral-800 p-1.5 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="gap-2 flex flex-wrap">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium bg-neutral-800 backdrop-blur-md p-1.5 rounded-xl flex items-center justify-start space-x-2"
            >
              <span className="text-lg">
                <FaGithub />
              </span>
              <span>Github repository</span>
            </a>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium bg-neutral-800 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center justify-start space-x-2"
            >
              <span className="text-lg">
                <FaGlobe />
              </span>
              <span>Website</span>
            </a>
          )}

          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium bg-neutral-800 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center justify-start space-x-2"
            >
              <span className="text-lg">
                <FaDownload />
              </span>
              <span>Link to download</span>
            </a>
          )}
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-lg flex items-center justify-center">
        <Image
          src={coverImage as string}
          alt={slug}
          width={1920}
          height={1080}
          objectPosition={'center'}
        />
      </div>
    </section>
  )
}

