import React from "react"
import Helmet from "react-helmet"

import { Global, css } from "@emotion/core"

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

export const Meta = () => {
  // baseStyles();

  return (
    <React.Fragment>
      <Global styles={globalCss} />
      <Helmet title="terrier.dev 🐶 ">
        <meta name="description" content={"Author: terrierscript"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@terrierscript" />
        <meta
          name="og:image"
          content="https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"
        />
      </Helmet>
      <Fonts />
    </React.Fragment>
  )
}
