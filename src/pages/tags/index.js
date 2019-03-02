import React from "react"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import { useSiteMetaQuery } from "../../hooks/useSiteMetaQuery"
import { useTagQuery } from "../../hooks/useTagQuery"

const TagLink = ({ tag }) => (
  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
    {tag.fieldValue} ({tag.totalCount})
  </Link>
)

const TagsPage = () => {
  const site = useSiteMetaQuery()
  const group = useTagQuery()
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
