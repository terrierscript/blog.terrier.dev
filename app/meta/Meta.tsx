import React from "react"
import Helmet from "react-helmet"

import { Global, css } from "@emotion/core"

import { Fonts } from "../layout/global/Fonts"
import { TwitterTracking } from "./TwitterTracking"

export const Meta = () => {
  // baseStyles();

  return (
    <React.Fragment>
      <Helmet title="terrier.dev 🐶 ">
        <meta name="description" content={"Author: terrierscript"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@terrierscript" />
        <meta
          name="og:image"
          content="https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"
        />
      </Helmet>
    </React.Fragment>
  )
}
