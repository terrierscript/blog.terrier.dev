import React, { SFC } from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import { desktop } from "../lib/media"
import { Meta } from "./Meta"

const Row = styled.div`
  display: flex;
`
const Col = styled.div`
  width: 85%;
  max-width: 960px;
  margin: 0 auto;
`

const Container = ({ children }) => (
  <Row>
    <Col>{children}</Col>
  </Row>
)

export const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navbar />

      <Container>
        <div>{children()}</div>
      </Container>
    </div>
  )
}
