import React, { SFC } from "react"
import { HeaderBar } from "./Navbar"
// @ts-ignore
import { desktop } from "../lib/media"
import { Meta } from "./Meta"
import { Container } from "./Container"
import { Article } from "../article/Content"
import { Footer } from "./Footer"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
`

export const LayoutInner = ({ children }) => {
  return (
    <Grid>
      <HeaderBar />
      <Container>
        <Article>{children}</Article>
      </Container>
      <Footer author="terrierscript" />
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
