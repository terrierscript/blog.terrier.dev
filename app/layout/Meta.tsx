import React from "react"
import Helmet from "react-helmet"
// import { generateFontUrl } from "./font";
// import { baseStyles } from "./style";
// import "highlight.js/styles/dark.css";
// const r = require("prismjs/themes/prism-okaidia.css");
// console.warn(r);
import { createGlobalStyle, css } from "styled-components"

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
