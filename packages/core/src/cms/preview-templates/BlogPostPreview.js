import React from "react"
import { BlogPostTemplate } from "../../app/article/Blog"

const BlogPostPreview = ({ entry, widgetFor }) => {
  const bodyWidget = widgetFor("body")
  console.log(bodyWidget)

  return (
    <div>
      <BlogPostTemplate
        content={bodyWidget}
        description={""}
        id={""}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
      />
    </div>
  )
}

export default BlogPostPreview
