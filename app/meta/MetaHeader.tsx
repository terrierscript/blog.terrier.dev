import React, { useEffect } from "react";
import { getVersion, logVersion } from "../../src/version";
// import { HelmetItem } from "./HelmetItem"
import { GaTracking } from "./injection/GaTracking";
import { AdsenseTracking } from "./injection/AdsenseTracking";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    // @ts-ignore
    inlinedStyles = [
      // require("!raw-loader!../public/styles.css")
      // require("!raw-loader!prism-themes/themes/prism-atom-dark.css")
    ].join("");
    // console.log("inline", inlinedStyles)
  } catch (e) {
    // console.log("inline", e)
  }
}

export const MetaHeader = props => {
  const version = getVersion();
  let css;
  useEffect(() => {
    logVersion();
  }, []);

  if (process.env.NODE_ENV === "production") {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: inlinedStyles }}
      />
    );
  }
  return (
    <>
      <GaTracking />
      <AdsenseTracking />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {Object.entries(version).map(([k, v]) => (
        <meta key={k} name={`x-site-${k}`} content={v} />
      ))}
      {props.headComponents}
      <link rel="shortcut icon" />
      <link rel="me" href="https://twitter.com/terrierscript"></link>

      {css}
    </>
  );
};

export const MetaHeaderGatsby = props => {
  return (
    <head>
      <MetaHeader {...props}></MetaHeader>
    </head>
  );
};
