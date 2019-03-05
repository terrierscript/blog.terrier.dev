import React from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "../utils/typography.js"

export const Fonts = () => {
  return (
    <React.Fragment>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </React.Fragment>
  )
}
