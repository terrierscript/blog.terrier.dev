// @ts-nocheckss
import React from "react"

let inlinedStyles = ""
if (process.env.NODE_ENV === "production") {
  try {
    // @ts-ignore
    inlinedStyles = [
      require("!raw-loader!../public/styles.css")
      // require("!raw-loader!prism-themes/themes/prism-atom-dark.css")
    ].join("")
    console.log("inline", inlinedStyles)
  } catch (e) {
    console.log("inline", e)
  }
}

// const Ga = (props) => {
//   return <React.Fragment>
//     <script>
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());

//       gtag('config', 'UA-5982830-12');
//     </script>
//   </React.Fragment>
// }

export default class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-5982830-12"
          />
          {/* <Ga /> */}

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
