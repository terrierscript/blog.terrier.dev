import React from "react"
import { SideProfile } from "./Profile"
import { TagCloud } from "./TagCloud"
import { Externals } from "./Externals"
import { SideLinks } from "./Link"
import styled from "styled-components"

const SideGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  @media screen and (max-width: 65em) {
    width: 100%;
  }
`

const HideIfMobile = styled.div`
  @media screen and (max-width: 65em) {
    display: none;
  }
`

export const Side = () => {
  return (
    <SideGrid>
      <SideProfile />
      <SideLinks />
      <HideIfMobile>
        <Externals />
        <TagCloud />
      </HideIfMobile>
    </SideGrid>
  )
}
