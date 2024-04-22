export const Background = () => {
  return (
    <section className="max-w-screen-3xl w-11/12 mx-auto">
      <div className="w-3/4 grid grid-cols-6 py-12">
        <div>
          <h1 className="font-light text-lg text-neutral-400">Background</h1>
        </div>
        <div className=" text-lg leading-relaxed space-y-4 col-span-5 text-neutral-300">
          {/* <p>
            Currently I&apos;m insert position at{' '}
            <span className="font-bold">Insert company</span> building B2B
            products with some awesome people.
          </p> */}
          <p>
            I finished my studies at the{' '}
            <span className="font-bold">
              Universidad de Investigación y Desarrollo
            </span>{' '}
            after completing 5 years in Electronic Engineering which allowed me
            to participate and represent my university and my country in
            robotics competitions.
          </p>
          <p>
            As a software developer, I always like to try to link engineering,
            design and long-term scalability. My goal is to always create
            applications that are efficient and at the same time deliver
            engaging and seamless user experiences.
          </p>
          <p>
            When I&apos;m not in front of a screen, I&apos;m probably
            exercising, reading a book, watching a series, walking my dogs or
            crossing another item off my bucket list.
          </p>
        </div>
      </div>
    </section>
  )
}

