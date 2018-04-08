import React, { SFC } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  max-width: 740px;
  padding: 0 20px;
  margin: 0 auto;
  word-break: break-all;
  width: 100%;
  min-height: 90vh;
  padding: 2em 0;
`;

export const Container = ({ children }) => (
  <Row>
    <Col>{children}</Col>
  </Row>
);
