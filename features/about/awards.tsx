import AWARDS from 'data/json/awards.json'

export const Awards = () => {
  return (
    <section className="max-w-screen-xl w-11/12 mx-auto">
      <div className="w-3/4 grid grid-cols-6 py-12">
        <div>
          <h1 className="font-light text-lg text-neutral-400">Awards</h1>
        </div>
        <div className=" text-lg leading-relaxed space-y-12 col-span-5 text-neutral-300">
          {AWARDS.map((el, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-start gap-2 ">
                <h3 className="font-medium">{el.title}</h3>
                <span className="font-light">{el.givenBy}</span>
              </div>
              <span className="text-sm">{el.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

