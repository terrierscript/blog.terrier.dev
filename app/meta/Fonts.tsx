import React, { lazy, Suspense } from "react"
import { TypographyStyle } from "react-typography"
import { typography } from "../utils/typography"

const Goog = lazy(() => import("./typo/GoogleFont"))

export const Fonts = () => {
  return (
    <React.Fragment>
      <TypographyStyle typography={typography} />
      <Suspense fallback={null}>
        <Goog />
      </Suspense>
    </React.Fragment>
  )
}
