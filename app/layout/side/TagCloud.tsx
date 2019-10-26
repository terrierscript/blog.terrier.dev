import React, { useContext } from "react"
import { TagsContext } from "../../context/SiteContext"
import { SideBox, Title } from "./Basics"
import styled from "@emotion/styled"
import { TagItem } from "../../component/Tag"

const WhiteBox = styled(SideBox)`
  /* background: transparent; */
  max-width: 300px;
  @media screen and (max-width: 65em) {
    max-height: 10em;
    overflow: hidden;
  }
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
        <TagItem to={`/tags/${fieldValue}/`} key={fieldValue}>
          {fieldValue} ({totalCount})
        </TagItem>
      ))}
    </WhiteBox>
  )
}
