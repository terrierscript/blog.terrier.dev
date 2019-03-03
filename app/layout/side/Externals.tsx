import React from "react"
import { Feeds } from "./external/Feed"
import { SideBox, Title } from "./Basics"
import styled from "styled-components"

const Scroll = styled.div`
  max-height: 10em;
  overflow: scroll;
`
export const Externals = () => {
  return (
    <SideBox>
      <Title>External Post</Title>
      <Scroll>
        <Feeds />
      </Scroll>
    </SideBox>
  )
}
