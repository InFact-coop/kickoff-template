import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

const { spacing, colors } = theme;

const Container = styled.div`
  height: ${spacing.fullHeight};
  width: ${spacing.fullWidth};
  padding: ${spacing.medium};
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
`;

export { Container };
