import React from "react"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import { graphql } from "gatsby"

const TagLink = ({ tag }) => (
  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
    {tag.fieldValue} ({tag.totalCount})
  </Link>
)
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <section>
    <Helmet title={`タグの一覧`} />
    <div>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <TagLink tag={tag} />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
