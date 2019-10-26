import { Global, css } from "@emotion/core"
import React from "react"
import { MAIN_COLOR, MAIN_BOLD_COLOR } from "./colors"

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        a,
        a:active,
        a:visited {
          color: ${MAIN_COLOR};
          transition: 0.5s;
          text-decoration-color: transparent;
          line-height: 1em;
        }
        a:hover {
          color: ${MAIN_BOLD_COLOR};
          text-decoration-color: ${MAIN_BOLD_COLOR};
          /* text-decoration: underline; */
        }
      `}
    />
  )
}
