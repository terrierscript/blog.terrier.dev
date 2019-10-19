import React from "react"
import { graphql } from "gatsby"
import { generatePostFragment } from "../query/query"
import { MainLayoutWithGatsby } from "../provider/MainLayout"
import { Index } from "../../app/page/Index"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { pageContext } = this.props
    return (
      <MainLayoutWithGatsby pageContext={pageContext}>
        <Index posts={posts} />
      </MainLayoutWithGatsby>
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
