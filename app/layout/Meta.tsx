import React from "react"
import Helmet from "react-helmet"
// import { generateFontUrl } from "./font";
// import { baseStyles } from "./style";
// import "highlight.js/styles/dark.css";
// const r = require("prismjs/themes/prism-okaidia.css");
// console.warn(r);
import { createGlobalStyle, css } from "styled-components"

const globalCss = css`
  body {
    color: red;
  }
`
const GlobalStyle = createGlobalStyle`
  ${globalCss}
  body {
    color: blue;
  }
`

export const Meta = () => {
  // baseStyles();
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet title="terrier.dev 🐶 ">
        {/* TODO: use more great highlight */}
        <link
          rel="stylesheet" //href="https://unpkg.com/prismjs@1.13.0/themes/prism-okaidia.css"
          href="https://unpkg.com/prism-github@1.1.0/prism-github.css"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@terrierscript" />
        {/* <link href={generateFontUrl()} rel="stylesheet" /> */}
      </Helmet>
    </React.Fragment>
  )
}
