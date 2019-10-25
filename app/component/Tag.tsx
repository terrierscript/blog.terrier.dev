import React, { SFC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { headerFont } from "../utils/typography"

export const TagItem = styled.div`
  display: inline-block;
  background: #e08e79;
  color: #000;
  font-family: ${headerFont};
  font-weight: bold;
  padding: 0.2em 0.5em 0.3em;
  margin: 0.2em;
  border-radius: 20px;
  font-size: 0.8em;
  text-transform: lowercase;
  ::before {
    content: "# ";
  }
`

export const Tag: SFC<{ tag: string }> = ({ tag }) => {
  return (
    <Link to={`/tags/${tag.toLowerCase()}/`}>
      <TagItem>{tag}</TagItem>
    </Link>
  )
}
