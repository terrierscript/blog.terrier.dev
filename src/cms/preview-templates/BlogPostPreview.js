import React from "react"
import { BlogPostTemplate } from "../../app/article/Blog"

const BlogPostPreview = ({ entry, widgetFor }) => {
  console.log(widgetFor("body"))
  return (
    <div>
      <BlogPostTemplate
        content={widgetFor("body")}
        description={""}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
      />
    </div>
  )
}

export default BlogPostPreview
