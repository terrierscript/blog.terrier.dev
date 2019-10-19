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

export const MainLayout = ({ children }) => {
  return (
    <FeedProvider>
      {/* <TagProvider> */}
      {children}
      {/* </TagProvider> */}
    </FeedProvider>
  )
}
export const MainLayoutWithGatsby = ({ children, pageContext = {} }) => {
  return (
    <GatsbyPageContextProvider pageContext={pageContext}>
      <MainLayout>{children}</MainLayout>
    </GatsbyPageContextProvider>
  )
}
