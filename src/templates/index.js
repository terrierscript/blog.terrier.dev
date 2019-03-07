import React from "react"
// import PropTypes from "prop-types";
import { BlogItem, BlogList } from "../../app/list/Item"
import { graphql, Link } from "gatsby"
import { generatePostFragment } from "../query/query"
import { BlogLayout } from "../provider/BlogLayout"
import styled from "styled-components"
import { headerFont } from "../../app/utils/typography"

const PaginateContainer = styled.div`
  padding: 1em;
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 1.2em;
  font-family: ${headerFont};
`

const Paginate = ({ previousPagePath, nextPagePath }) => {
  return (
    <PaginateContainer>
      {previousPagePath && <Link to={previousPagePath}>≪Prev</Link>}
      {nextPagePath && <Link to={nextPagePath}>Next≫</Link>}
    </PaginateContainer>
  )
}
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { pageContext } = this.props
    return (
      <BlogLayout feeds={pageContext.globals.feeds}>
        <BlogList posts={posts} />
        <Paginate {...pageContext} />
      </BlogLayout>
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
