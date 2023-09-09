import React from "react";
import PropTypes from 'prop-types';

import { Container, Selector, Cleaner } from "./styles";

export default function Filter({languages}){
  
  const selectors = languages.map((lang) => (
    <Selector key={lang.name.toLowerCase} color={lang.color}>
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

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
};