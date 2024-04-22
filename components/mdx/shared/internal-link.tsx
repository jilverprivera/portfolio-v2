import { Link } from 'react-scroll'

type props = {
  routes: Route[]
}

interface Route {
  name: string
  id: string
}

export const InternalLink = ({ routes }: props) => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-4 flex flex-col justify-center items-start px-2 py-4 space-y-4  border border-neutral-800 mix-blend-difference  rounded-md backdrop-blur-md  z-50">
      {routes.map((route, i) => (
        <Link
          key={i}
          className="relative text-base flex items-center justify-start pl-6 text-neutral-400 hover:text-neutral-300 duration-500 decoration-transparent cursor-pointer before:duration-150 before:absolute before:top-2/4 before:-translate-y-2/4  before:left-0 before:w-4 before:h-4 before:border before:border-neutral-400 before:rounded-full  before:hover:border-neutral-300"
          to={route.id}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          activeClass="font-bold text-neutral-300 before:bg-neutral-300 before:border-neutral-300"
        >
          {route.name}
        </Link>
      ))}
    </div>
  )
}

// 

// 