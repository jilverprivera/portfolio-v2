interface props {
  setSearchedArticles: (arg: string) => void
}

export const PostSearch = ({ setSearchedArticles }: props) => {
  return (
    <div className="relative max-w-xl w-full my-8 group">
      <input
        type="text"
        onChange={(e) => {
          setSearchedArticles(e.target.value)
        }}
        placeholder="Search article by name"
        className="relative w-full mx-auto px-4 py-2 outline-none bg-primary rounded-md text-white border border-primary-variant-1 group-hover:border-primary-variant-2 group-hover:placeholder:text-white group-focus:border-primary-variant-2 group-focus:placeholder:text-white"
      />
      <svg
        className="absolute w-5 h-5 text-primary-variant-1 group-hover:text-white group-focus:text-white right-4 top-2/4 -translate-y-2/4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

