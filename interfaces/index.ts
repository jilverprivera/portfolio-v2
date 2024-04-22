import { IReadTimeResults } from 'reading-time'

// Context Interfaces
export interface Context {
  inViewFeature: string | null
  lastFullScreenFeature: string | null
  fullScreenFeature: string | null
  setInViewFeature: (feature: string | null) => void
  setFullScreenFeature: (feature: string | null) => void
  setLastFullScreenFeature: (feature: string | null) => void
  handleSetFullscreenFeature: (feature: string | null) => void
}

export interface ContextProvider {
  children: React.ReactNode
}

// Layout Interfaces

export type ILayout = {
  children: React.ReactNode
  metadata: IMetaData
}

export interface IMetaData {
  title: string
  description: string
  slug?: string | null
  date?: number | null | string
  alternate?: string | null
  path?: string | null
}

// mdx Interfaces

export interface ISlugProps {
  source: any
  frontmatter: FrontMatter
  readingTime?: IReadTimeResults
  prev?: FrontMatter | undefined
  next?: FrontMatter | undefined
}

export interface FrontMatter {
  slug: string
  title: string
  altTitle?: string
  subTitle?: string
  description: string
  coverImage?: string
  category?: string
  company?: string
  completionTime?: string
  finished?: boolean
  publishedAt: string
  readingTime?: IReadTimeResults
  tags: string[]
  technologies?: string[]
  githubUrl?: string
  url?: string
  downloadUrl?: string
  collaborators?: string[]
  position?: string[]
  color?: string
  featured?: boolean
}

// Project Interfaces

export enum PAGE_TYPE {
  POST = 'POST',
  PROJECT = 'PROJECT'
}

// pages Interfaces

export interface PageProps {
  data: FrontMatter[]
}
export interface ProjectProps {
  projects: FrontMatter[]
}
export interface IBlogPageProps {
  posts: FrontMatter[]
}

export interface IStaticProps {
  params: IStaticPropsParams
  locale: string
}

export interface IStaticPropsParams {
  slug: string
}

export interface IStaticPathProps {
  locales: string[]
  locale: string
}

