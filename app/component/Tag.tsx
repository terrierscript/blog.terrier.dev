import React, { SFC, FC } from "react"
import styled from "@emotion/styled"
import { NavLink } from "./NavLink"
import { TITLE_COLOR, THIN_TEXT_COLOR } from "../layout/global/colors"
import { TagLabel, Tag, Stack, Box } from "@chakra-ui/core"

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

export const AutoLinkTags: FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <Stack spacing={2} isInline>
      {tags.map(tag => (
        <Box key={tag}>
          <AutoLinkTag tag={tag} />
        </Box>
      ))}
    </Stack>
  )
}

const AutoLinkTag: FC<{ tag: string }> = ({ tag }) => {
  return (
    <>
      <Tag rounded={"full"} size={"sm"}>
        <NavLink to={`/tags/${tag.toLowerCase()}/`}>
          <TagLabel size={"sm"}>{tag}</TagLabel>
        </NavLink>
      </Tag>
    </>
  )
}
