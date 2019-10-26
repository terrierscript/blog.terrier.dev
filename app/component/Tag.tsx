import React, { SFC } from "react"
import styled from "@emotion/styled"
// import { Link } from "gatsby"
import { headerFont } from "../utils/typography"

const Link = ({ children }) => {
  children
}

export const TagItem = styled.div`
  display: inline-block;
  background: #e08e79;
  color: #000;
  /* font-family: ${headerFont}; */
  /* font-weight: bold; */
  text-decoration-line: solid #000 1px;
  padding: 0.2em 1em;
  padding-left: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  ::before {
    content: "#";
  }
`

export const Tag: SFC<{ tag: string }> = ({ tag }) => {
  return (
    <Link to={`/tags/${tag.toLowerCase()}/`}>
      <TagItem>{tag}</TagItem>
    </Link>
  )
}
