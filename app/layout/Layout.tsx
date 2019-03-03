import React, { SFC } from "react"
import { HeaderBar } from "./Navbar"
// import { desktop } from "../lib/media"
import { Meta } from "./Meta"
import { Container } from "./Container"
import { Article } from "../article/Content"
import { Footer } from "./Footer"
import styled from "styled-components"
import { SideProfile } from "./side/Profile"
const gridTemplate = `
  "header header header"
  "body   body   side"
  "footer footer footer"
`

const Grid = styled.div`
  display: grid;
  grid-template-areas: ${gridTemplate};
`
const Area = styled.div<{ area: string }>`
  grid-area: ${props => props.area};
`

export const LayoutInner = ({ children }) => {
  return (
    <Grid>
      <Area area="header">
        <HeaderBar />
      </Area>
      <Area area="body">
        <Container>
          <Article>{children}</Article>
        </Container>
      </Area>
      <Area area="side">
        <SideProfile />
      </Area>
      <Area area="footer">
        <Footer author="terrierscript" />
      </Area>
    </Grid>
  )
}

export const Layout: SFC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Meta />
      <LayoutInner>{children}</LayoutInner>
    </div>
  )
}
