import React from "react"
import Helmet from "react-helmet"
// import { generateFontUrl } from "./font";
// import { baseStyles } from "./style";
// import "highlight.js/styles/dark.css";
// const r = require("prismjs/themes/prism-okaidia.css");
// console.warn(r);
import { createGlobalStyle, css } from "styled-components"
import { Fonts } from "./fonts"

const globalCss = css`
  :root {
    --border: 1px solid #f0f0f0;
  }
  /* TODO */
  body {
    img {
      margin-bottom: 0;
    }
  }
`
const GlobalStyle = createGlobalStyle`
  ${globalCss}
`

export const Meta = () => {
  // baseStyles();
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet title="terrier.dev 🐶 " />
      <Fonts />
    </React.Fragment>
  )
}
