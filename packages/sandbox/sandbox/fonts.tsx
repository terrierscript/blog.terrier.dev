import React, { useEffect } from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "core/src/app/utils/typography.js"

export const Fonts = () => {
  return (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </>
  )
}
