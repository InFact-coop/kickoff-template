import React from "react";
import theme from "../styles/theme";

import { Container } from "../styles/components";

export default ({ children }) => (
  <Container
    style={{
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    {children}
  </Container>
);
