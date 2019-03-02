import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaQuery = () => {
  const q = useStaticQuery(graphql`
    query HeaderQuery2 {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)
  return q.site.siteMetadata
}
