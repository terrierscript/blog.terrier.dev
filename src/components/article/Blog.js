import React from "react"
import Helmet from "react-helmet"
import { kebabCase } from "lodash"
import Link from "gatsby-link"

import Content, { HTMLContent } from "../Content"
import styled from "styled-components"

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

const Blog = styled.div`
  padding-top: 1em;
`
const Title = styled.h1`
  line-height: 1.2em;
`

export const BlogPostTemplate = ({ content, tags, title }) => {
  const PostContent = HTMLContent

  return (
    <section>
      <Helmet title={`${title} | Today 🐶 Learned`} />
      <Blog>
        <Title>{title}</Title>
        <PostContent content={content} />
        <TagList tags={tags} />
      </Blog>
    </section>
  )
}
