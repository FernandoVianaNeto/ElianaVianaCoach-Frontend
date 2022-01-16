import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function HomeBlog({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

HomeBlog.propTypes = {
  children: P.node.isRequired,
};
