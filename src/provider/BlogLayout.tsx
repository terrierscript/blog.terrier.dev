import { TagProvider } from "./TagProvider"
import React from "react"
import { ExternalFeedProvider } from "../../app/lib/feed/useExternalFeeds"
import {
  GatsbyPageContextProvider,
  usePageContext
} from "./GatsbyGlobalContext"

const FeedProvider = ({ children }) => {
  const { feeds } = usePageContext()
  return (
    <ExternalFeedProvider initialFeeds={feeds}>{children}</ExternalFeedProvider>
  )
}

export const BlogLayout = ({ children, pageContext = {} }) => {
  return (
    <GatsbyPageContextProvider pageContext={pageContext}>
      <FeedProvider>
        <TagProvider>{children}</TagProvider>
      </FeedProvider>
    </GatsbyPageContextProvider>
  )
}
