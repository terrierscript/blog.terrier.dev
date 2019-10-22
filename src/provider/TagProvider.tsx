import React, { useDebugValue } from "react"
import { TagsContext } from "../../app/context/SiteContext"
import { useTagQuery } from "../hooks/useTagQuery"
// import { Link } from "gatsby"
import { anchorStyle } from "../../app/layout/side/Basics"
import Link from "next/link"

const StyledLink = anchorStyle(Link)
export const TagProvider = ({ children }) => {
  const tags = useTagQuery()
  const value = {
    tags,
    Link: ({ tag }) => <Link href={`/tags/${tag}/`}></Link>
  }
  useDebugValue("aaa")
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>
}
