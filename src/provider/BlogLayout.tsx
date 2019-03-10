import { TagProvider } from "./TagProvider"
import React from "react"
import { Layout } from "../../app/layout/Layout"
import { ExternalFeedProvider } from "../../app/lib/feed/useExternalFeeds"

const getFeeds = pageContext => {
  try {
    return pageContext.globals.feeds
  } catch (e) {
    console.warn("Feed not found")
    return []
  }
}
export const BlogLayout = ({ children, pageContext = {} }) => {
  // @ts-ignore

  const feeds = getFeeds(pageContext)
  return (
    <ExternalFeedProvider feeds={feeds}>
      <TagProvider>
        <Layout>{children}</Layout>
      </TagProvider>
    </ExternalFeedProvider>
  )
}
