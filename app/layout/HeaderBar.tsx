import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { defaultFont } from "./font"
import media from "styled-media-query"
import { Avater } from "./Avater"
import { Author } from "./side/Profile"

const Nav = styled.nav`
  height: 64px;
  line-height: 64px;
`

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${defaultFont};
  font-size: 1.5em;
  color: #000;
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
`

export const HeaderBar = () => {
  return (
    <div>
      <Nav>
        <NavContainer>
          {" "}
          <Logo to="/">
            <div>
              <Avater />
              <span>terrier.dev</span>
            </div>
          </Logo>
        </NavContainer>
      </Nav>
    </div>
  )
}
