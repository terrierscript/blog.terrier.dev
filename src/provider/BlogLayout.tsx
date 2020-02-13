import { TagProvider } from "./TagProvider"
import React from "react"
import { Layout } from "../../app/layout/Layout"
import { ExternalFeedProvider } from "../../app/lib/feed/useExternalFeeds"
import {
  GatsbyPageContextProvider,
  usePageContext
} from "./GatsbyGlobalContext"
import { ChakraProvider } from "../../app/layout/ChakraProvider"

const FeedProvider = ({ children }) => {
  const { feeds } = usePageContext()
  return (
    <ExternalFeedProvider initialFeeds={feeds}>{children}</ExternalFeedProvider>
  )
}

export const BlogLayout = ({ children, pageContext = {} }) => {
  return (
    <GatsbyPageContextProvider pageContext={pageContext}>
      <ChakraProvider>
        <FeedProvider>
          <TagProvider>{children}</TagProvider>
        </FeedProvider>
      </ChakraProvider>
    </GatsbyPageContextProvider>
  )
}
