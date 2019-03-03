import React from "react"
import styled from "styled-components"
import { SideBox, Li, Ul, Title, Anchor } from "./Basics"

const List = ({ href, children }) => (
  <Li>
    <Anchor key="new" href={href}>
      {children}
    </Anchor>
  </Li>
)

const Links = () => {
  return (
    <Ul>
      <List href="https://github.com/terrierscript">GitHub</List>
      <List href="https://www.npmjs.com/~inuscript">npm</List>
      <List href="https://twitter.com/terrierscript">Twitter</List>
      <List href="https://qiita.com/terrierscript">Qiita</List>
      <List href="https://medium.com/inuscript/">Medium</List>
      <List href="https://dev.to/terrierscript">dev.to</List>
      <List href="https://scrapbox.io/terrierscript/">Scrapbox</List>
    </Ul>
  )
}

export const SideLinks = () => {
  return (
    <SideBox>
      <Title>Links</Title>
      <Links />
    </SideBox>
  )
}
