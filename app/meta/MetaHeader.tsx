import React, { useEffect } from "react"
import { getVersion, logVersion } from "../../src/version"

let inlinedStyles = ""
if (process.env.NODE_ENV === "production") {
  try {
    // @ts-ignore
    inlinedStyles = [
      // require("!raw-loader!../public/styles.css")
      // require("!raw-loader!prism-themes/themes/prism-atom-dark.css")
    ].join("")
    console.log("inline", inlinedStyles)
  } catch (e) {
    console.log("inline", e)
  }
}

export const MetaHeader = props => {
  let css
  useEffect(() => {
    logVersion()
  }, [])
  const version = getVersion()

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
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.6/build/styles/atom-one-dark.min.css"
      />

      {/* <link
        rel="stylesheet"
        href="https://unpkg.com/prism-themes@1.2.0/themes/prism-hopscotch.css"
      /> */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/prismjs@1.17.1/themes/prism-tomorrow.css"
      />

      {/* <link
        rel="stylesheet" //href="https://unpkg.com/prismjs@1.13.0/themes/prism-okaidia.css"
        href="https://unpkg.com/prism-github@1.1.0/prism-github.css"
      /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@terrierscript" />
      <meta
        name="og:image"
        content="https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-version" content={version} />
      {props.headComponents}
      <link rel="shortcut icon" />
      {css}
    </head>
  )
}
