import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { defaultFont } from "./font"
// import { Grid, Box } from "grommet"
// import media from "../lib/media";
import media from "styled-media-query"
import { Avater } from "./Avater"

const Nav = styled.nav`
  height: 64px;
  line-height: 64px;
  /* border-bottom: 1px solid #d11010; */
  background: #fafafa;
  /* a {
    color: white;
  } */
  /* text-align: center; */
`

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${defaultFont};
  font-size: 1.5em;
  color: #000;
  /* ${media.lessThan("small")`
    font-size: 18px;
  `}; */
`

const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Block = styled.div`
  display: inline-block;
`

const NavbarContainer = ({ children }) => (
  <Nav>
    <NavContainer>
      <Block>{children}</Block>
      {/* <Author name="terrierscript" /> */}
    </NavContainer>
  </Nav>
)

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <Logo to="/">
          <Avater />
          <span>Code Snippet 🐶</span>
        </Logo>
      </NavbarContainer>
    </div>
  )
}

export default Navbar
