import React from "react"
import { BlogPostTemplate } from "../../app/article/Blog"

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={""}
      tags={entry.getIn(["data", "tags"])}
      title={entry.getIn(["data", "title"])}
    />
  )
}

export default BlogPostPreview
