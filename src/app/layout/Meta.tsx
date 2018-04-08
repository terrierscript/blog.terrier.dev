import React from "react";
import Helmet from "react-helmet";
import { generateFontUrl } from "./font";
// import { baseStyles } from "./style";
// import "highlight.js/styles/dark.css";
// const r = require("prismjs/themes/prism-okaidia.css");
// console.warn(r);

export const Meta = () => {
  // baseStyles();
  return (
    <Helmet title="Snippet 🐶 ">
      {/* TODO: use more great highlight */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/prismjs@1.13.0/themes/prism-okaidia.css"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@terrierscript" />
      {/* <link href={generateFontUrl()} rel="stylesheet" /> */}
    </Helmet>
  );
};
