import React, { SFC } from "react";
import styled from "styled-components";

export const Article = styled.div``;

export const HTMLContent = ({ content, ...rest }) => {
  return <Article {...rest} dangerouslySetInnerHTML={{ __html: content }} />;
};

const Content = ({ content, ...rest }) => (
  <Article {...rest}>HTML:{content}</Article>
);

// HTMLContent.propTypes = Content.propTypes;

export default Content;
