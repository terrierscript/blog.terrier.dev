import React, { useContext } from "react"
import { TagsContext } from "../../context/SiteContext"
import { SideBox } from "./SideBox"
import { kebabCase } from "lodash"

export const TagCloud = () => {
  const { tags, Link } = useContext(TagsContext)
  if (tags.length < 1) {
    return null
  }
  console.log(tags)
  return (
    <SideBox>
      <ul>
        {tags.map(({ fieldValue, totalCount }, i) => (
          <li key={fieldValue}>
            <Link to={`/tags/${kebabCase(fieldValue)}/`}>
              {fieldValue}({totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </SideBox>
  )
}
