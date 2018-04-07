import React from "react";
import styled from "styled-components";
import FaGithub from "react-icons/lib/fa/github";
import FaTwitter from "react-icons/lib/fa/twitter";

const FooterContainer = styled.footer`
  background: #f0f0f0;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5em;
`;
const LinkIcon = styled.a`
  font-size: 1.5em;
  padding: 0 0.2em;
`;

const Name = styled.div`
  padding: 0 0.5em;
`;
export const Footer = ({ author }) => {
  return (
    <FooterContainer>
      <Name>@terrierscript</Name>
      <LinkIcon href={`https://github.com/${author}`}>
        <FaGithub />
      </LinkIcon>
      <LinkIcon href={`https://twitter.com/${author}`}>
        <FaTwitter />
      </LinkIcon>
    </FooterContainer>
  );
};
