import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

export default function Repository(){
  return(
    <Container color="#f37272">
      <Name>Repositorio sla nome</Name>
      <Description>alalalalalal sla lalalalalalalalala alalalalalal sla lalalalalalalalala alalalalalal sla lalalal</Description>
      <Footer color="#f37272">
        <Lang>Lang qualquer</Lang>
        <Link href="www.youtube.com" target="_blank">VER</Link>
      </Footer>
    </Container>
  );
}