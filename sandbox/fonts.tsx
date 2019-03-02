import React, { useEffect } from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "../app/utils/typography.js"

export const Fonts = () => {
  return (
    <React.Fragment>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </React.Fragment>
  )
}
