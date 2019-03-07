import { TagProvider } from "./TagProvider"
import React from "react"
import { Layout } from "../../app/layout/Layout"
import { ExternalFeedProvider } from "../../app/lib/feed/feedContext"

export const BlogLayout = ({ children }) => {
  return (
    <ExternalFeedProvider feeds={[]}>
      <TagProvider>
        <Layout>{children}</Layout>
      </TagProvider>
    </ExternalFeedProvider>
  )
}
