import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { defaultFont } from "./font"
import { Terrier } from "./header/Terrier"

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

const Grid = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-auto-flow: column;
`
export const HeaderBar = () => {
  return (
    <div>
      <Nav>
        <NavContainer>
          <Logo to="/">
            <Grid>
              <Terrier size={40} />
              <span>terrier.dev</span>
            </Grid>
          </Logo>
        </NavContainer>
      </Nav>
    </div>
  )
}
