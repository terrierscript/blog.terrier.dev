import React, { useEffect } from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "blog-components/utils/typography.js"

export const Fonts = () => {
  return (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </>
  )
}
