import { Tag } from "../../app/context/SiteContext"

// import { useStaticQuery, graphql } from "gatsby"

const mockTags = {
  group: [
    {
      fieldValue: "foo",
      totalCount: 10
    }
  ]
}
export const useTagQuery = () => {
  // const { allMarkdownRemark } = useStaticQuery(graphql`
  //   query Tag {
  //     allMarkdownRemark(limit: 10000) {
  //       group(field: frontmatter___tags) {
  //         fieldValue
  //         totalCount
  //       }
  //     }
  //   }
  // `)
  const { group } = mockTags
  const countMap = group.reduce((curr, { fieldValue, totalCount }) => {
    const lower = fieldValue.toLowerCase()
    curr[lower] = curr[lower] ? curr[lower] + totalCount : totalCount
    return curr
  }, {})
  return Object.entries(countMap).map(
    ([fieldValue, totalCount]): Tag => {
      return {
        fieldValue,
        totalCount: typeof totalCount === "number" ? totalCount : 0
      }
    }
  )

  return group
}
