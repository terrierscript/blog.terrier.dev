import React, { SFC } from "react"
import { HeaderBar } from "./HeaderBar"
import { Meta } from "../meta/Meta"
import { Container } from "./Container"
// import { Article } from "../article/Content"
import { Footer } from "./Footer"
import styled from "@emotion/styled"
import { Side } from "./side/Side"
require("../web-component/index")

// defineComponents()

const gridTemplate = `
  ". header  header ."
  ". body      side   ."
  ". footer  footer ."
`
const gridTemplate2 = `
  ". header  ."
  ". body    ."
  ". footer  ."
  ". side ."
`

const mobileGrid = `
  "header"
  "body"
  "side"
  "footer"
`

const GridBase = styled.div`
  display: grid;
  grid-gap: 1em;
  /* background: #f4ead5; */
  @media screen and (max-width: 65em) {
    grid-template-areas: ${mobileGrid};
    grid-template-columns: 100%;
  }
`

const GridTwoCol = styled(GridBase)`
  grid-template-areas: ${gridTemplate};
  grid-template-columns: 0.1fr minmax(700px, 1fr) 0.4fr 0.1fr;
  width: 100%;
`
// const GridOneColumn = styled(GridBase)`
//   grid-template-areas: ${gridTemplate2};
//   grid-template-columns: 1fr minmax(600px, 3fr) 1fr;
//   width: 100%;
// `
const Area = styled.div<{ area: string }>`
  grid-area: ${props => props.area};
`

export const LayoutInner = ({ children }) => {
  return (
    <GridTwoCol>
      <Area area="header">
        <HeaderBar />
      </Area>
      <Area area="side">
        <Side />
      </Area>
      <Area area="body">
        <Container>{children}</Container>
      </Area>
      <Area area="footer">
        <Footer author="terrierscript" />
      </Area>
    </GridTwoCol>
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
