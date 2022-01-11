import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function EspecialidadesCard({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

EspecialidadesCard.propTypes = {
  children: P.node.isRequired,
};
