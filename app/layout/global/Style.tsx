import { Global, css } from "@emotion/core"
import React from "react"

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        :root {
        }
        /* body {
          background: red;
        } */
        a {
          color: #555;
          transition: all 0.5s ease;
        }
        a:hover {
          color: #111;
          transition: all 0.5s ease;
        }
      `}
    />
  )
}
