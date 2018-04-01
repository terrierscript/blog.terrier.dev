import * as React from "react";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

// Content.propTypes = {
//   content: PropTypes.string,
//   className: PropTypes.string
// };

// HTMLContent.propTypes = Content.propTypes;

export default Content;
