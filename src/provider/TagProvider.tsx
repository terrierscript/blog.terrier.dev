import React, { useDebugValue } from "react"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/context/SiteContext' was resolve... Remove this comment to see the full error message
import { TagsContext } from "../../app/context/SiteContext"
import { useTagQuery } from "../hooks/useTagQuery"
// import { anchorStyle } from "../../app/layout/side/Basics"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/component/NavLink' was resolved ... Remove this comment to see the full error message
import { NavLink } from "../../app/component/NavLink"

// const StyledLink = anchorStyle(NavLink)
export const TagProvider = ({
  children
}: any) => {
  const tags = useTagQuery()
  const value = {
    tags
    // Link: StyledLink
  }
  // useDebugValue("aaa")
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>
}
