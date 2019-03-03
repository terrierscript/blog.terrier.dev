import React from "react"
import styled from "styled-components"

const Link = styled.a`
  color: #333;
  text-decoration: none;
  line-height: 1em;
  &:hover {
    text-decoration: underline;
  }
`

const ItemLink = styled(Link)`
  font-size: 0.7rem;
  text-decoration: none;
  color: #333;
`

const Li = styled.li`
  margin-bottom: 0;
  line-height: 1em;
`
const Ul = styled.ul`
  margin-bottom: 0;
`
const List = ({ href, children }) => (
  <Li>
    <ItemLink key="new" href={href}>
      {children}
    </ItemLink>
  </Li>
)

export const Links = () => {
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
