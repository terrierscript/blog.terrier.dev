import React, { useDebugValue } from "react"
import { TagsContext } from "../../app/context/SiteContext"
import { useTagQuery } from "../hooks/useTagQuery"
import { Link } from "gatsby"

export const TagProvider = ({ children }) => {
  const tags = useTagQuery()
  const value = {
    tags,
    Link: Link
  }
  useDebugValue("aaa")
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>
}
