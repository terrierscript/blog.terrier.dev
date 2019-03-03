import React, { SFC } from "react"
import { HeaderBar } from "./HeaderBar"
import { Meta } from "./Meta"
import { Container } from "./Container"
import { Article } from "../article/Content"
import { Footer } from "./Footer"
import styled from "styled-components"
import { Side } from "./side/Side"

const gridTemplate = `
  ".  header header header ."
  ".  body   body   side   ."
  ".  footer footer footer ."
`

const Grid = styled.div`
  display: grid;
  grid-template-areas: ${gridTemplate};
  grid-gap: 1em;
  grid-template-columns: 0.5fr 1fr 1fr 300px 0.5fr;
  /* background: #f4ead5; */
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
        <Side />
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
