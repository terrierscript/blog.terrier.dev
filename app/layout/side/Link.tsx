import React from "react"
import { SideBox, Title } from "./Basics"
import styled from "@emotion/styled"

const Li = styled.li`
  margin-bottom: 0;
  line-height: 1em;
`
const Ul = styled.ul`
  margin-bottom: 0;
`

const ListLink = styled.a`
  font-size: 0.8rem;
`
const List = ({ href, children }) => (
  <Li>
    <ListLink key="new" href={href}>
      {children}
    </ListLink>
  </Li>
)

const Links = () => {
  return (
    <Ul>
      <List href="https://github.com/terrierscript">GitHub</List>
      <List href="https://twitter.com/terrierscript">Twitter</List>
      <List href="https://note.mu/terrierscript/">note</List>
      <List href="https://scrapbox.io/terrierscript/">Scrapbox</List>
      <List href="https://www.npmjs.com/~inuscript">npm</List>
      <List href="https://qiita.com/terrierscript">Qiita</List>
      <List href="https://medium.com/inuscript/">Medium</List>
      <List href="https://dev.to/terrierscript">dev.to</List>
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
