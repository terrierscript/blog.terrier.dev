import React, { SFC } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
// @ts-ignore
import { desktop } from "../lib/media";
import { Meta } from "./Meta";
import { Container } from "./Container";
import { Article } from "../Content";
import loadGA from "./ga.js";
import { Footer } from "./Footer";
export const Layout = ({ children }) => {
  loadGA();
  return (
    <div>
      <Meta />
      <Navbar />

      <Container>
        <Article>{children()}</Article>
      </Container>
      <Footer />
    </div>
  );
};
