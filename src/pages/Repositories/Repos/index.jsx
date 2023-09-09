import React from "react";

import Repository from "./Repository";

import { Container } from "./styles";

export default function Repos(){
  return(
    <Container>
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
    </Container>
  );
}