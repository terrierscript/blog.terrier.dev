import React, { SFC } from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Nav = styled.nav`
  height: 64px;
  text-align: center;
`
const Title = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #000;
`

const Navbar = () => (
  <Nav>
    <Title to="/">Today 🐶 Learned</Title>
  </Nav>
)

export default Navbar
