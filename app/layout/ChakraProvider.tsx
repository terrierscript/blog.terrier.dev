import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import React from "react"

export const ChakraProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      {children}
    </ThemeProvider>
  )
}
