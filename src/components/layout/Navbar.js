import React, { SFC } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { Container } from "./Container"

const Nav = styled.nav`
  height: 64px;
  line-height: 64px;
  background: #e5b2b0;
  /* text-align: center; */
`

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.15em;
  font-family: Cabin;
  color: #000;
`

const NavContainer = styled.div`
  margin: 0;
  padding: 0 20px;
`
const Navbar = () => (
  <Nav>
    <NavContainer>
      <Logo to="/">🐾 Today 🐶 Learned</Logo>
    </NavContainer>
  </Nav>
)

export default Navbar
