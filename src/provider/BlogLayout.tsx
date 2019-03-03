import { TagProvider } from "./TagProvider"
import React from "react"
import { Layout } from "../../app/layout/Layout"

export const BlogLayout = ({ children }) => {
  return (
    <TagProvider>
      <Layout>{children}</Layout>
    </TagProvider>
  )
}
