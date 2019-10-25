import React, { useContext } from "react"
import { TagsContext } from "../../context/SiteContext"
import { SideBox, Title } from "./Basics"
import styled from "styled-components"
import { TagItem } from "../../component/Tag"
import { Link } from "gatsby"

const WhiteBox = styled(SideBox)`
  /* background: transparent; */
  max-width: 300px;
  @media screen and (max-width: 65em) {
    max-height: 10em;
    overflow: hidden;
  }
`
export const TagCloud = () => {
  const { tags } = useContext(TagsContext)
  if (tags.length < 1) {
    return null
  }
  return (
    <WhiteBox>
      <Title>Tags</Title>
      {tags.map(({ fieldValue, totalCount }) => (
        <Link to={`/tags/${fieldValue}/`} key={fieldValue}>
          <TagItem>
            {fieldValue} ({totalCount})
          </TagItem>
        </Link>
      ))}
    </WhiteBox>
  )
}
