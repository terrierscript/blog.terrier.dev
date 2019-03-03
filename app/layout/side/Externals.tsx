import React from "react"
import { Feeds } from "./external/Feed"
import { SideBox, Title } from "./Basics"

export const Externals = () => {
  return (
    <SideBox>
      <Title>External Post</Title>
      <Feeds />
    </SideBox>
  )
}
