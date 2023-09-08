import React from "react";

import { Container, Selector, Cleaner } from "./styles";

export default function Filter(){

  const langs = [
    {name: 'JavaScript', count: 5, color: "#FCC419"},
    {name: 'TypeScript', count: 2, color: "#1a3479"},
    {name: 'Ruby', count: 5, color: "#9635aa"},
  ]
  
  const selectors = langs.map((lang) => (
    <Selector key={lang.name.toLowerCase} style={{ color: lang.color }}>
      <span>{lang.name}</span>
      <span>{lang.count}</span>
    </Selector>
  ));

  return(
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}