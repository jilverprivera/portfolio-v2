import { EXPERIENCE_DATA } from "@/utils/data/experience";

export const Experience = () => {
  return (
    <section className="w-full mx-auto">
      <div className="w-3/4 grid grid-cols-6 py-12">
        <div>
          <h1 className="font-light text-lg text-neutral-200">Experience</h1>
        </div>
        <div className=" text-base leading-relaxed space-y-12 col-span-5 text-neutral-200">
          {EXPERIENCE_DATA.map((el, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-start gap-2 font-medium">
                <h3>{el.company}</h3>
                <span className="text-neutral-300">{el.position}</span>
              </div>
              <div className="space-y-2">
                {el.date.map((date, i) => (
                  <p key={i} className="text-sm">
                    {date}
                  </p>
                ))}
              </div>
              <p>
                {el.url ? (
                  <a
                    href={el.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                  >
                    {el.company}
                  </a>
                ) : (
                  el.company
                )}{" "}
                {el.description}
              </p>

              <ul className="flex flex-wrap items-center justify-start gap-x-4 gap-y-1 text-sm">
                <p>Keywords: </p>
                {el.stack
                  .sort((a, b) => a.localeCompare(b))
                  .map((stack, i) => (
                    <ul key={i}>{stack}</ul>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
