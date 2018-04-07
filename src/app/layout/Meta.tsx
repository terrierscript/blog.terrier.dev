import React from "react";
import Helmet from "react-helmet";
import { generateFontUrl } from "./font";
// import { baseStyles } from "./style";
// import "highlight.js/styles/dark.css";
// import "prismjs/themes/prism-okaidia.css";
// @ts-ignore
reuire("prism-themes/themes/prism-atom-dark.css");

export const Meta = () => {
  // baseStyles();
  return (
    <Helmet title="Snippet 🐶 ">
      {/* <link href={generateFontUrl()} rel="stylesheet" /> */}
    </Helmet>
  );
};
