import React from "react";
import Helmet from "react-helmet";
import { generateFontUrl } from "./font";
import { baseStyles } from "./style";
export const Meta = () => {
  baseStyles();
  return (
    <Helmet title="Snippet 🐶 ">
      <link href={generateFontUrl()} rel="stylesheet" />
    </Helmet>
  );
};
