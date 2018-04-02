import React, { SFC } from "react";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <div className={className}>HTML:{content}</div>
);

// HTMLContent.propTypes = Content.propTypes;

export default Content;
