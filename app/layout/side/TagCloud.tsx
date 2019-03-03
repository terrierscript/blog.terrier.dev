import React, { useContext } from "react"
import { TagsContext } from "../../context/SiteContext"
import { SideBox, Ul, Li, Title } from "./Basics"
import { kebabCase } from "lodash"

export const TagCloud = () => {
  const { tags, Link } = useContext(TagsContext)
  if (tags.length < 1) {
    return null
  }
  return (
    <SideBox>
      <Title>Tags</Title>
      <Ul>
        {tags.map(({ fieldValue, totalCount }, i) => (
          <Li key={fieldValue}>
            <Link to={`/tags/${kebabCase(fieldValue)}/`}>
              {fieldValue}({totalCount})
            </Link>
          </Li>
        ))}
      </Ul>
    </SideBox>
  )
}
