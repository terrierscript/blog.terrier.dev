import React from "react"
// import PropTypes from "prop-types";
import { BlogItem } from "../../app/list/Item"
import { Layout } from "../../app/layout/Layout"
import { graphql } from "gatsby"
import { generatePostFragment } from "../query/query"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        {posts.map(({ node: post }) => (
          <BlogItem post={post} key={post.id} />
        ))}
      </Layout>
    )
  }
}

export const postFragment = generatePostFragment()
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          published: { ne: false }
        }
      }
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`
