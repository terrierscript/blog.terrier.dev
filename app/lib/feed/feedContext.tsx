import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useRef
} from "react"
import { loadFeed } from "./loader"

const ExternalFeedContext = createContext([])

export const ExternalFeedProvider = ({ feeds, children }) => {
  return (
    <ExternalFeedContext.Provider value={feeds}>
      {children}
    </ExternalFeedContext.Provider>
  )
}

export const useExternalFeeds = () => {
  const defaultFeed = useContext(ExternalFeedContext)
  const [feeds, setFeeds] = useState(defaultFeed)

  useEffect(() => {
    loadFeed().subscribe(feeds => {
      console.log(feeds)
      //     setFeeds(baseFeeds => {
      //     })
    })
  })
  return feeds
}
