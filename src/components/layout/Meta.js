import React from "react"
import Helmet from "react-helmet"

import { injectGlobal } from "styled-components"
import reset from "styled-reset"

const baseStyles = () => injectGlobal`
  ${reset}
  /* other styles */
`

export const Meta = () => {
  baseStyles()
  return (
    <Helmet title="Today 🐶 Learned">
      <link
        href="https://fonts.googleapis.com/css?family=Cabin"
        rel="stylesheet"
      />
    </Helmet>
  )
}
