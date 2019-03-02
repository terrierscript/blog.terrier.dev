import React from "react"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import { useTagQuery, useSiteMeta } from "../../hooks/useQuery"

const TagLink = ({ tag }) => (
  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
    {tag.fieldValue} ({tag.totalCount})
  </Link>
)
const TagsPage = ({
  data: {
    allMarkdownRemark: { group }
    //   site: {
    //     siteMetadata: { title }
    //   }
  }
}) => {
  // const group = useTagQuery()
  // const group = useTagQuery()
  const site = useSiteMeta()
  return (
    <section>
      <Helmet title={`${site.title}`} />
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
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
