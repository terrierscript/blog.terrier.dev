import React from "react"
import { Avater } from "../Avater"
import { SideBox, Title } from "./Basics"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Author = () => {
  return (
    <div>
      <a href="https://twitter.com/terrierscript">@terrierscript</a>
    </div>
  )
}
export const SideProfile = () => {
  return (
    <SideBox>
      <Title>Author</Title>
      <Box>
        <Avater />
        <Author />
      </Box>
    </SideBox>
  )
}
