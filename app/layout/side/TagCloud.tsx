import React, { useContext } from "react"
import { TagsContext } from "../../context/SiteContext"
import { SideBox, Title } from "./Basics"
import styled from "styled-components"
import { TagItem } from "../../article/Tag"

const WhiteBox = styled(SideBox)`
  background: transparent;
  max-width: 300px;
`
export const TagCloud = () => {
  const { tags, Link } = useContext(TagsContext)
  if (tags.length < 1) {
    return null
  }
  return (
    <WhiteBox>
      <Title>Tags</Title>
      {tags.map(({ fieldValue, totalCount }) => (
        <Link to={`/tags/${fieldValue}/`}>
          <TagItem>
            {fieldValue} ({totalCount})
          </TagItem>
        </Link>
      ))}
    </WhiteBox>
  )
}
