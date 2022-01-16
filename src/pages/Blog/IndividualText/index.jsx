import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function IndividualText({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

IndividualText.propTypes = {
  children: P.node.isRequired,
};
