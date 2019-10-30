import React, { useEffect } from "react"
import { getVersion, logVersion } from "../../src/version"
import { TwitterTracking } from "./TwitterTracking"
import Helmet from "react-helmet"

let inlinedStyles = ""
if (process.env.NODE_ENV === "production") {
  try {
    // @ts-ignore
    inlinedStyles = [
      // require("!raw-loader!../public/styles.css")
      // require("!raw-loader!prism-themes/themes/prism-atom-dark.css")
    ].join("")
    // console.log("inline", inlinedStyles)
  } catch (e) {
    // console.log("inline", e)
  }
}
const HelmetItem = () => {
  // baseStyles();

  return (
    <React.Fragment>
      <Helmet title="terrier.dev 🐶 ">
        <meta name="description" content={"Author: terrierscript"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@terrierscript" />
        <meta
          name="og:image"
          content="https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"
        />
      </Helmet>
    </React.Fragment>
  )
}

export const MetaHeader = props => {
  const version = getVersion()
  let css
  useEffect(() => {
    logVersion()
  }, [])

  if (process.env.NODE_ENV === "production") {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: inlinedStyles }}
      />
    )
  }
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {Object.entries(version).map(([k, v]) => (
        <meta key={k} name={`x-site-${k}`} content={v} />
      ))}
      {props.headComponents}
      <link rel="shortcut icon" />
      {css}
      <HelmetItem />
    </head>
  )
}
