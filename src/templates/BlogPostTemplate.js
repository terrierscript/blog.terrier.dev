import React from "react"
import Helmet from "react-helmet"
import { kebabCase } from "lodash"
import Link from "gatsby-link"

import Content, { HTMLContent } from "../components/Content"

const TagList = ({ tags }) => {
  if (!tags || tags.length == 0) {
    return null
  }
  return (
    <div>
      <h4>Tags</h4>
      <ul>
        {tags.map(tag => (
          <li key={tag + `tag`}>
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const BlogPostTemplate = ({ content, tags, title }) => {
  const PostContent = HTMLContent

  return (
    <section>
      <Helmet title={`${title} | Today 🐶 Learned`} />
      <div>
        <h1>{title}</h1>
        <PostContent content={content} />
        <TagList tags={tags} />
      </div>
    </section>
  )
}
