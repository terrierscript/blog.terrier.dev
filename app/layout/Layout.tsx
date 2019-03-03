import React, { SFC } from "react"
import { HeaderBar } from "./HeaderBar"
import { Meta } from "./Meta"
import { Container } from "./Container"
import { Article } from "../article/Content"
import { Footer } from "./Footer"
import styled from "styled-components"
import { Side } from "./side/Side"

const gridTemplate = `
  ". header  header ."
  ". body      side   ."
  ". footer  footer ."
`

const mobileGrid = `
  "header"
  "body"
  "side"
  "footer"
`

const Grid = styled.div`
  display: grid;
  grid-template-areas: ${gridTemplate};
  grid-gap: 1em;
  grid-template-columns: 0.1fr 1fr 0.4fr 0.1fr;
  /* background: #f4ead5; */
  @media screen and (max-width: 65em) {
    grid-template-areas: ${mobileGrid};
    grid-template-columns: 100%;
  }
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
        <Container>{children}</Container>
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
