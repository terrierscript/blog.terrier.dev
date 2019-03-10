import { TagProvider } from "./TagProvider"
import React from "react"
import { Layout } from "../../app/layout/Layout"
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
        <TagProvider>
          <Layout>{children}</Layout>
        </TagProvider>
      </FeedProvider>
    </GatsbyPageContextProvider>
  )
}
