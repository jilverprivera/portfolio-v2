import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from 'context'
import { NoiseBackground } from 'layout/noise-background'
import { FloatingNav } from 'layout/floating-navbar'
import { Footer } from 'layout/footer'
import PAGES from 'data/json/pages.json'
import 'globals.css'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  router
}: AppProps) => {
  return (
    <AppProvider>
      <NoiseBackground />
      {router.pathname !== '/' && <FloatingNav navItems={PAGES} />}
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Footer />
    </AppProvider>
  )
}

export default MyApp

