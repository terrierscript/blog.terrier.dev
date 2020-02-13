import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import React from "react"

export const Chakra = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      {children}
    </ThemeProvider>
  )
}
