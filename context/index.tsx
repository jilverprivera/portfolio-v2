import { createContext, useState } from 'react'
import { Context, ContextProvider } from 'interfaces'

export const AppContext = createContext<Context>({
  fullScreenFeature: null,
  inViewFeature: null,
  lastFullScreenFeature: null,
  setFullScreenFeature: () => {},
  setInViewFeature: () => {},
  handleSetFullscreenFeature: () => {},
  setLastFullScreenFeature: () => {}
})

export const AppProvider = ({ children }: ContextProvider) => {
  const [inViewFeature, setInViewFeature] = useState<string | null>(null)
  const [fullScreenFeature, setFullScreenFeature] = useState<string | null>(null)
  const [lastFullScreenFeature, setLastFullScreenFeature] = useState<string | null>(null)

  const handleSetFullscreenFeature = (feature: string | null) => {
    setFullScreenFeature(feature)
    if (feature !== null) setLastFullScreenFeature(feature)
  }
  return (
    <AppContext.Provider
      value={{
        inViewFeature,
        setInViewFeature,
        fullScreenFeature,
        setFullScreenFeature,
        handleSetFullscreenFeature,
        setLastFullScreenFeature,
        lastFullScreenFeature
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

