import React, { SFC } from "react";
import styled from "styled-components";
import { mobile } from "../lib/media";

const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  max-width: 740px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Container = ({ children }) => (
  <Row>
    <Col>{children}</Col>
  </Row>
);
