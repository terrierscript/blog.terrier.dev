import React, { useDebugValue } from "react"
import { TagsContext } from "../../app/context/SiteContext"
import { useTagQuery } from "../hooks/useTagQuery"
// import { anchorStyle } from "../../app/layout/side/Basics"
import { NavLink } from "../../app/component/NavLink"

// const StyledLink = anchorStyle(NavLink)
export const TagProvider = ({ children }) => {
  const tags = useTagQuery()
  const value = {
    tags
    // Link: StyledLink
  }
  // useDebugValue("aaa")
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>
}
