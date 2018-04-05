import React, { SFC } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Container } from "./Container";
import Helmet from "react-helmet";
import { defaultFont } from "./font";

const Nav = styled.nav`
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #d11010;
  /* a {
    color: white;
  } */
  /* text-align: center; */
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${defaultFont};
  font-size: 1.7em;
  color: #000;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;
const Block = styled.div`
  display: inline-block;
`;

const Space = styled.span`
  padding-right: 0.2em;
`;

const Author = ({ name }) => {
  return (
    <Block>
      <Space>Author</Space>
      <a href={`https://twitter.com/${name}`}>@{name}</a>
    </Block>
  );
};
const Navbar = () => (
  <Nav>
    <NavContainer>
      <Block>
        <Logo to="/">Snippet 🐶 </Logo>
      </Block>
      <Author name="terrierscript" />
    </NavContainer>
  </Nav>
);

export default Navbar;
