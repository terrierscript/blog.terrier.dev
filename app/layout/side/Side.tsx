import React from "react"
import { SideProfile } from "./Profile"
import { TagCloud } from "./TagCloud"
import { SideLinks } from "./Link"

export const Side = () => {
  return (
    <React.Fragment>
      <SideProfile />
      <SideLinks />
      <TagCloud />
    </React.Fragment>
  )
}
