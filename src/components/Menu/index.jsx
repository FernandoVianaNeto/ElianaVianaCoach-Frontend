import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function Menu({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Menu.propTypes = {
  children: P.node.isRequired,
};
