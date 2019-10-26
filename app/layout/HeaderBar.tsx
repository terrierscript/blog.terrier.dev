import React from "react"
import styled from "@emotion/styled"
import { defaultFont } from "./font"
import { Terrier } from "./header/Terrier"
import { NavLink } from "../component/NavLink"
import { TITLE_BOLD_COLOR } from "./global/colors"

const Nav = styled.nav`
  height: 64px;
  line-height: 64px;
`

const Logo = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${defaultFont};
  font-size: 1.5em;
  color: ${TITLE_BOLD_COLOR};
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
          <Link href="/">
            <Logo>
              <Grid>
                <Terrier size={40} />
                <span>terrier.dev</span>
              </Grid>
            </Logo>
          </Link>
        </NavContainer>
      </Nav>
    </div>
  )
}
