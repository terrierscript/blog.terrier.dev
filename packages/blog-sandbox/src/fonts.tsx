import * as React from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "blog-components/utils/typography.js"

export const Fonts = () => {
  return (
    <div>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </div>
  )
}
