import React, { SFC } from "react";

export const HTMLContent = ({ content, ...rest }) => (
  <div {...rest} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, ...rest }) => <div {...rest}>HTML:{content}</div>;

// HTMLContent.propTypes = Content.propTypes;

export default Content;
