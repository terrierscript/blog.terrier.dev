import React, { SFC } from "react"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
`
const Col = styled.div`
  width: 85%;
  max-width: 960px;
  margin: 0 auto;
`

export const Container = ({ children }) => (
  <Row>
    <Col>{children}</Col>
  </Row>
)
