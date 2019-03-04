import rehypeReact from "rehype-react"
import React from "react";

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

export const renderHtmlAST = (htmlAst) =>  renderAst(htmlAst)
