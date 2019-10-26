import { Global, css } from "@emotion/core"
import React from "react"
import { TITLE_COLOR, TITLE_BOLD_COLOR } from "./colors"
import styled from "@emotion/styled"
import { Fonts } from "./Fonts"

const globalCss = css`
  :root {
    --border: 1px solid #f0f0f0;
  }
  * {
    box-sizing: border-box;
  }
  /* TODO */
  body {
    img {
      margin-bottom: 0;
    }
  }
`

const anchor = css`
  a {
    color: ${TITLE_COLOR};
    transition: 0.5s;
    text-decoration-color: transparent;
  }
  a:hover {
    color: ${TITLE_BOLD_COLOR};
    text-decoration-color: ${TITLE_BOLD_COLOR};
    /* text-decoration: underline; */
  }
`

export const Anchor = styled.a`
  ${anchor}
`

export const GlobalStyle = () => {
  return (
    <>
      <Fonts />
      <Global styles={globalCss} />
      <Global styles={anchor} />
    </>
  )
}
