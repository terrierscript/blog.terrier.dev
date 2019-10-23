import React from "react"
import Helmet from "react-helmet"

import { createGlobalStyle, css } from "styled-components"
import { Fonts } from "./Fonts"

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
  article {
    p :not(pre) code {
      border: 1px solid #ccc;
      background: #eee;
      border-radius: 4px;
      padding: 0 0.2em;
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
