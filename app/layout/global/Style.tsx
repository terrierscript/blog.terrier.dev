import { Global, css } from "@emotion/core"
import React from "react"
import { TITLE_COLOR, MAIN_BOLD_COLOR } from "./colors"
import styled from "@emotion/styled"

const anchor = css`
  a {
    color: ${TITLE_COLOR};
  }
  a,
  a:visited {
    transition: 0.5s;
    text-decoration-color: transparent;
  }
  a:hover {
    color: ${MAIN_BOLD_COLOR};
    text-decoration-color: ${MAIN_BOLD_COLOR};
    /* text-decoration: underline; */
  }
`

export const Anchor = styled.a`
  ${anchor}
`

export const GlobalStyle = () => {
  return <Global styles={anchor} />
}
