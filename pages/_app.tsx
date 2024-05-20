import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from 'context'
import { NoiseBackground } from 'layout/noise-background'
import { Navbar } from 'layout/floating-navbar'
import { Footer } from 'layout/footer'
import 'globals.css'

const MyApp = ({ Component, pageProps: { session, ...pageProps }, router }: AppProps) => {
  return (
    <AppProvider>
      <NoiseBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Footer />
    </AppProvider>
  )
}

export default MyApp

