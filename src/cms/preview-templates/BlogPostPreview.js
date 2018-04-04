import React from "react"
import { BlogPostTemplate } from "../../components/article/Blog"

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      // description={entry.getIn(["data", "description"])}
      tags={entry.getIn(["data", "tags"])}
      title={entry.getIn(["data", "title"])}
    />
  )
}

export default BlogPostPreview
