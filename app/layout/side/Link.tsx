import React from "react"
import { SideBox, Title } from "./Basics"
import styled from "@emotion/styled"
import { List, ListItem, Link } from "@chakra-ui/core"

// const Li = styled.li`
//   margin-bottom: 0;
//   line-height: 1em;
// `
// const Ul = styled.ul`
//   margin-bottom: 0;
// `

const ListLink = props => {
  return (
    <ListItem fontSize={"sm"} marginBottom={0}>
      <Link {...props} />
    </ListItem>
  )
}
// styled.a`
//   font-size: 0.8rem;
// `
// const List = ({ href, children }) => (
//   <Li>
//     <ListLink key="new" href={href}>
//       {children}
//     </ListLink>
//   </Li>
// )

const Links = () => {
  return (
    <List styleType="disc" spacing={0}>
      <ListLink href="https://github.com/terrierscript">GitHub</ListLink>
      <ListLink href="https://twitter.com/terrierscript">Twitter</ListLink>
      <ListLink href="https://note.mu/terrierscript/">note</ListLink>
      <ListLink href="https://scrapbox.io/terrierscript/">Scrapbox</ListLink>
      <ListLink href="https://www.npmjs.com/~inuscript">npm</ListLink>
      <ListLink href="https://qiita.com/terrierscript">Qiita</ListLink>
      <ListLink href="https://medium.com/inuscript/">Medium</ListLink>
      <ListLink href="https://dev.to/terrierscript">dev.to</ListLink>
    </List>
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
