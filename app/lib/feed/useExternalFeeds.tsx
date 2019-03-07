import React, { createContext, useContext, useState, useEffect } from "react"
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

  const [feeds, setFeeds] = useState(() => {
    const seed = defaultFeed.map(feed => [feed.link, feed])
    // @ts-ignore
    return new Map(seed)
  })

  useEffect(() => {
    loadFeed().subscribe(feeds => {
      setFeeds(baseMap => {
        feeds.map(feed => {
          if (baseMap.has(feed.link)) return
          baseMap.set(feed.link, feed)
        })
        console.log(baseMap.length)
        return baseMap
      })
    })
  })
  return Array.from(feeds.values())
}
