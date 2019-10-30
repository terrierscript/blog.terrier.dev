import React, { SFC } from "react"
import styled from "@emotion/styled"
import { NavLink } from "./NavLink"
import { TITLE_COLOR, THIN_TEXT_COLOR } from "../layout/global/colors"

export const TagItem = styled(NavLink)`
  display: inline-block;
  color: ${THIN_TEXT_COLOR};
  text-decoration: underline;
  margin: 0.2em 0.5em;
  margin-left: 0;
  font-size: 0.9rem;
  text-transform: lowercase;
  :hover {
    color: ${TITLE_COLOR};
  }
  ::before {
    content: "#";
  }
`

export const Tag: SFC<{ tag: string }> = ({ tag }) => {
  return <TagItem to={`/tags/${tag.toLowerCase()}/`}>{tag}</TagItem>
}
