import React, { SFC } from "react";
import styled from "styled-components";
import { kebabCase } from "lodash";
import Link from "gatsby-link";

const TagItem = styled.div`
  display: inline-block;
  background: #ccc;
  color: #555;
  padding: 0.2em 0.5em;
  margin: 0.2em;
  border-radius: 20px;
  font-size: 0.8em;
`;

export const Tag: SFC<{ tag: string }> = ({ tag }) => {
  return (
    <Link to={`/tags/${kebabCase(tag)}/`}>
      <TagItem>{tag}</TagItem>
    </Link>
  );
};
