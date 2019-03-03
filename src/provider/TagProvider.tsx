import React, { useDebugValue } from "react"
import { TagsContext } from "../../app/context/SiteContext"
import { useTagQuery } from "../hooks/useTagQuery"
import { Link } from "gatsby"
import { anchorStyle } from "../../app/layout/side/Basics"

const StyledLink = anchorStyle(Link)
export const TagProvider = ({ children }) => {
  const tags = useTagQuery()
  const value = {
    tags,
    Link: StyledLink
  }
  useDebugValue("aaa")
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>
}
