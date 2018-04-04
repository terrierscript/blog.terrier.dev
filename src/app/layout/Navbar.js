import React, { SFC } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { Container } from "./Container"
import Helmet from "react-helmet"

// let logoFont = "Josefin Sans"
// logoFont = "Indie Flower"
// logoFont = "Shadows Into Light"
// logoFont = "Gloria Hallelujah"
// logoFont = "Amatic SC"
// logoFont = "Passion One"
// logoFont = "Permanent Marker"
// logoFont = "Baloo"
// logoFont = "Handlee"
// logoFont = "Press Start 2P"
// logoFont = "Righteous"
// logoFont = "Caveat Brush"
// logoFont = "Patrick Hand"
// logoFont = "Rock Salt"
// logoFont = "Coming Soon"
// logoFont = "Reenie Beanie"
const logoFont = "Schoolbell"

const Nav = styled.nav`
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #d11010;
  /* a {
    color: white;
  } */
  /* text-align: center; */
`

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5em;
  font-family: '${logoFont}';
  color: #000;
`

const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`
const Block = styled.div`
  display: inline-block;
`

const Space = styled.span`
  padding-right: 0.2em;
`

const Author = ({ name }) => {
  return (
    <Block>
      <Space>Author</Space>
      <a href={`https://twitter.com/${name}`}>@{name}</a>
    </Block>
  )
}
const Navbar = () => (
  <Nav>
    <Helmet>
      <link
        href={`https://fonts.googleapis.com/css?family=${logoFont}`}
        rel="stylesheet"
      />
    </Helmet>
    <NavContainer>
      <Block>
        <Logo href="/">🐾Today 🐶 Learned💡</Logo>
        {/* <Logo to="/">T 🐶 L</Logo> */}
      </Block>
      <Author name="terrierscript" />
    </NavContainer>
  </Nav>
)

export default Navbar
