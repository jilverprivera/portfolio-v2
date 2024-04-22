import Head from 'next/head'
import { useRouter } from 'next/router'
import { IMetaData } from 'interfaces'

export const SEO = ({ title, date, description, path }: IMetaData) => {
  const { locale } = useRouter()
  const isES = locale === 'es'

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jilver Pacheco Rivera" />
      <meta property="og:url" content={`https://jilverpachecio.vercel.app${path}`} />
      <link rel="canonical" href={`https://jilverpachecio.vercel.app${path}`} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jilverprivera" />
      <meta name="twitter:title" content={title} />
      {date !== null && <meta property="article:published_time" content={String(date)} />}
      <meta property="og:locale" content={isES ? 'es_ES' : 'en_EN'} />
    </Head>
  )
}

