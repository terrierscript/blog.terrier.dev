import React, { createContext, useContext, useState, useEffect } from "react"
import { loadFeed } from "./loader"

const ExternalFeedContext = createContext([])

export const ExternalFeedProvider = ({ initialFeeds, children }) => {
  return (
    <ExternalFeedContext.Provider value={initialFeeds}>
      {children}
    </ExternalFeedContext.Provider>
  )
}

export const useExternalFeeds = () => {
  const defaultFeed = useContext(ExternalFeedContext)

  const [feeds, setFeeds] = useState(() => {
    const seed = defaultFeed.map(feed => [feed.link, feed])
    return {
      // @ts-ignore
      map: new Map(seed)
    }
  })

  useEffect(() => {
    loadFeed().subscribe(feeds => {
      setFeeds(({ map: baseMap }) => {
        feeds.map(feed => {
          if (baseMap.has(feed.link)) {
            return
          }
          baseMap.set(feed.link, feed)
        })
        return {
          map: baseMap
        }
      })
    })
  }, [])
  return Array.from(feeds.map.values()).sort(
    // @ts-ignore
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
