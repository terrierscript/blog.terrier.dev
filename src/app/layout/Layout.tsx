import React, { SFC } from "react"
import Navbar from "./Navbar"
// @ts-ignore
import { desktop } from "../lib/media"
import { Meta } from "./Meta"
import { Container } from "./Container"
import { Article } from "../Content"
import { Footer } from "./Footer"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
`

export const Layout: SFC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Grid>
        <Meta />
        <Navbar />
        <Container>
          <Article>{children}</Article>
        </Container>
        <Footer author="terrierscript" />
      </Grid>
    </div>
  )
}
