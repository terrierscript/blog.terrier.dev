import React from "react"
import Helmet from "react-helmet"

import { injectGlobal } from "styled-components"
import normalize from "styled-normalize"

const baseStyles = () => injectGlobal`
  ${normalize}
  /* other styles */
`

export const Meta = () => {
  baseStyles()
  return <Helmet title="Today 🐶 Learned" />
}
