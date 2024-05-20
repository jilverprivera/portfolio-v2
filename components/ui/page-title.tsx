type props = {
  title: string
  description?: string
}

export const PageTitle = ({ title, description }: props) => {
  return (
    <section className="max-w-screen-xl w-11/12 mx-auto pt-32 space-y-4 text-neutral-200">
      <h1 className="text-7xl font-medium">{title}</h1>
      {description && <p className="w-2/4 leading-relaxed text-lg">{description}</p>}
    </section>
  )
}

