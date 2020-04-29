import { TagProvider } from "./TagProvider"
import React from "react"
import { Layout } from "../../app/layout/Layout"
import { ExternalFeedProvider } from "../../app/lib/feed/useExternalFeeds"
import {
  GatsbyPageContextProvider,
  usePageContext
} from "./GatsbyGlobalContext"
import { Chakra } from "../../app/layout/ChakraProvider"

const FeedProvider = ({ children }) => {
  const { feeds } = usePageContext()
  return (
    <ExternalFeedProvider initialFeeds={feeds}>{children}</ExternalFeedProvider>
  )
}

export const BlogLayoutProvider = ({ children, pageContext = {} }) => {
  return (
    <Chakra>
      <GatsbyPageContextProvider pageContext={pageContext}>
        <FeedProvider>
          <TagProvider>{children}</TagProvider>
        </FeedProvider>
      </GatsbyPageContextProvider>
    </Chakra>
  )
}
