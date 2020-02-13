import React from "react"
import styled from "@emotion/styled"
import { impactFont } from "./font"
import { Terrier } from "./header/Terrier"
import { NavLink } from "../component/NavLink"
import { TITLE_BOLD_COLOR } from "./global/colors"
import { Text } from "@chakra-ui/core"

const Logo = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${impactFont};
  font-size: 1.5em;
  color: ${TITLE_BOLD_COLOR};
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-auto-flow: column;
`

export const HeaderBar = () => {
  return (
    <NavContainer>
      <Logo to="/">
        <Grid>
          <Terrier size={40} />
          <span>terrier.dev</span>
        </Grid>
      </Logo>
    </NavContainer>
  )
}
