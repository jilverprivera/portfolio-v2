import { useContext, useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'
import { AppContext } from 'context'
import { PortfolioImage } from './portfolio-image'
import { PortfolioTitle } from './portfolio-title'
import { useEscapePress, useHidePageOverflow } from 'utils/hooks'
import { FrontMatter } from 'interfaces'

export const Portfolio = ({ projects }: { projects: FrontMatter[] }) => {
  const [scope, animate] = useAnimate()
  const { fullScreenFeature, lastFullScreenFeature, setFullScreenFeature, setLastFullScreenFeature } =
    useContext(AppContext)
  const onEscapePress = () => {
    if (fullScreenFeature) {
      setFullScreenFeature(null)
      setTimeout(() => setLastFullScreenFeature(null), 250)
    }
  }
  useEscapePress(onEscapePress)
  useHidePageOverflow(!!fullScreenFeature)
  useEffect(() => {
    if (fullScreenFeature) {
      animate([
        ['.feature-title', { opacity: 0, x: '-200px' }, { duration: 0.3, delay: stagger(0.05) }],
        [`.visual-${lastFullScreenFeature}`, { opacity: 1, scale: 1, pointerEvents: 'auto' }, { at: '<' }],
        ['.active-card ', { opacity: 0, scale: 0, x: '200px' }, { at: '<' }]
      ])
    } else {
      animate([
        ['.feature-title', { opacity: 1, x: '0px' }, { duration: 0.3, delay: stagger(0.05) }],
        [`.visual-${lastFullScreenFeature}`, { opacity: 0, scale: 0.75, pointerEvents: 'auto' }, { at: '<' }],
        ['.active-card ', { opacity: 1, scale: 1, x: '0px' }, { at: '<' }]
      ])
    }
  }, [fullScreenFeature, lastFullScreenFeature, animate])

  return (
    <section ref={scope} className="max-w-screen-2xl w-11/12 mx-auto relative">
      <div className="flex w-full items-start justify-center">
        <div className="w-full py-[20vh] flex-1">
          {projects.map((project) => (
            <PortfolioTitle key={project.slug} project={project} />
          ))}
        </div>
        <div className="sticky top-0 flex h-screen w-4/6 items-center">
          <div className="relative aspect-video w-full rounded-2xl [&:has(>_.active-card)]:bg-transparent">
            {projects.map((project) => (
              <PortfolioImage key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

