import React, { SFC } from "react";

export const HTMLContent: SFC<any> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content: SFC<any> = ({ content, className }) => (
  <div className={className}>HTML:{content}</div>
);

// HTMLContent.propTypes = Content.propTypes;

export default Content;
