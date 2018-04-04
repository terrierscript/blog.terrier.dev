import React, { SFC } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
// @ts-ignore
import { desktop } from "../lib/media";
import { Meta } from "./Meta";
import { Container } from "./Container";
import { Article } from "../Content";
import ReactGA from "react-ga";
// import "prismjs/themes/prism-okaidia.css"

ReactGA.initialize("UA-5982830-12");
ReactGA.pageview(window.location.pathname + window.location.search);

export const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navbar />

      <Container>
        <Article>{children()}</Article>
      </Container>
    </div>
  );
};
