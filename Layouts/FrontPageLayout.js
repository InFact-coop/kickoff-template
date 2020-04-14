import React from "react";
import theme from "../styles/theme";

import { Container } from "../styles/components";

export default ({ children, client, date }) => (
  <Container>
    <Logo />
    <p>{client} kickoff workshop</p>
    {children}
  </Container>
);
