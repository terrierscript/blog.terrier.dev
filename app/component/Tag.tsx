import React, { SFC } from "react"
import styled from "@emotion/styled"
import { headerFont } from "../utils/typography"
import { NavLink } from "./NavLink"

export const TagItem = styled.div`
  display: inline-block;
  /* background: #e08e79; */
  color: #b5b0ae;
  /* font-family: ${headerFont}; */
  /* font-weight: bold; */
  text-decoration: underline;
  /* border-bottom: 1px dotted #8f8a88; */
  margin: 0.2em 0.5em;
  margin-left: 0;
  font-size: 0.9rem;
  text-transform: lowercase;
  :hover{
    color: #111;
  }
  ::before {
    content: "#";
  }
`

export const Tag: SFC<{ tag: string }> = ({ tag }) => {
  return (
    <NavLink to={`/tags/${tag.toLowerCase()}/`}>
      <TagItem>{tag}</TagItem>
    </NavLink>
  )
}
