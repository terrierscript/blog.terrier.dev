import React from "react"
import { graphql } from "gatsby"
import { generatePostFragment } from "../query/query"
import { BlogLayoutProvider } from "../provider/BlogLayout"
import { Index } from "../../app/page/list/ListPage"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { pageContext } = this.props
    return (
      <BlogLayoutProvider pageContext={pageContext}>
        <Index posts={posts} />
      </BlogLayoutProvider>
    )
  }
}

export const postFragment = generatePostFragment()
export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          published: { ne: false }
        }
      }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`
