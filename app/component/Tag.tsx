import React, { SFC } from "react"
import styled from "@emotion/styled"
import { headerFont } from "../utils/typography"
import { NavLink } from "./NavLink"
import { MAIN_COLOR, TAG_COLOR } from "../layout/global/colors"

export const TagItem = styled(NavLink)`
  display: inline-block;
  /* background: #e08e79; */
  color: ${TAG_COLOR};
  /* font-family: ${headerFont}; */
  /* font-weight: bold; */
  text-decoration: underline;
  /* border-bottom: 1px dotted #8f8a88; */
  margin: 0.2em 0.5em;
  margin-left: 0;
  font-size: 0.9rem;
  text-transform: lowercase;
  &:hover{
    color: ${MAIN_COLOR};
  }
  ::before {
    content: "#";
  }
`

export const Tag: SFC<{ tag: string }> = ({ tag }) => {
  return <TagItem to={`/tags/${tag.toLowerCase()}/`}>{tag}</TagItem>
}
