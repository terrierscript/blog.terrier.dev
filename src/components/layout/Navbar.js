import React, { SFC } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { Container } from "./Grid"

const Nav = styled.nav`
  height: 64px;
  line-height: 64px;
  background: #e5b2b0;
  /* text-align: center; */
`

const Title = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2em;
  font-family: Cabin;
  color: #000;
`

const Navbar = () => (
  <Nav>
    <Container>
      <Title to="/">🐾</Title>
    </Container>
  </Nav>
)

export default Navbar
