import Link from "gatsby-link"
import React from "react"

export const Item = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    {post.excerpt}
    <Link to={post.fields.slug}>Keep Reading →</Link>
    <small>{post.frontmatter.date}</small>
  </div>
)
