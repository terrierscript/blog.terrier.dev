import React, { useContext } from "react"
import { TagsContext } from "../../context/SiteContext"
import { SideBox, Ul, Li, Title } from "./Basics"
import { kebabCase } from "lodash"
import styled from "styled-components"
import { TagItem } from "../../article/Tag"

const NoMarkLi = styled(Li)`
  list-style: none;
  text-transform: lowercase;
`
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
          <Li>
            <Link to={`/tags/${fieldValue}/`}>
              {fieldValue} ({totalCount})
            </Link>
          </Li>
        ))}
      </Ul>
    </SideBox>
  )
}
